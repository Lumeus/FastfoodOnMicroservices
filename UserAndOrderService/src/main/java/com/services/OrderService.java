package com.services;

import com.client.StorageClient;
import com.model.*;
import com.repositories.DishRepository;
import com.repositories.OrderRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private DishRepository dishRepository;

    @Autowired
    private StorageClient storageClient;

    @Autowired
    private DiscoveryClient discoveryClient;

    public List<Order> getOrders(long userId){return orderRepository.findAllByUser(userId);}

    public OrderDTO getOrder(long id){
        Optional<Order> order = orderRepository.findById(id);
        if (order.isPresent()){
            OrderDTO orderDTO = new OrderDTO();
            orderDTO.setOrder(order.get());
            orderDTO.setDishes(dishRepository.findAllByOrder(id));
            return orderDTO;
        }
        return null;
    }

    public List<Dish> getDishes(long id){return dishRepository.findAllByOrder(id);}

    public OrderDTO addOrder(OrderDTO orderDTO){
//        RestTemplate restTemplate = new RestTemplate();
        Order order = orderDTO.getOrder();
        List<Dish> dishes = orderDTO.getDishes();
        if (
                storageClient.takeDishes(dishes.stream()
                        .map(Dish::getDishId)
                        .collect(Collectors.toList())
                )
        ){// обращение на склад
            order.setId(orderRepository.getNextID());
            final long[] dishCount = {dishRepository.getNextID()};
            dishes.forEach(dish -> {
                dish.setId(dishCount[0]++);
                dish.setOrder(order.getId());
            });
            order.setStatus("ПРИНЯТО");
            orderDTO.setOrder(orderRepository.save(order));
            orderDTO.setDishes(dishRepository.saveAll(dishes));
            return orderDTO;
        }
        return null;
    }

    public void setStatus(long id, String status){
        Order order = orderRepository.findById(id).get();
        order.setStatus(status);
        if (status.equals("ВЫДАНО"))
            order.setCompletionTime(new Timestamp(System.currentTimeMillis()));
        orderRepository.save(order);
    }

    public List<OrderDTO> getOrders(Timestamp time){
        List<Order> orders = orderRepository.findAllByCompletionTimeBeforeAndStatus(time, "ПРИНЯТО");
        orders.addAll(orderRepository.findAllByCompletionTimeBeforeAndStatus(time, "ГОТОВИТСЯ"));
        orders.addAll(orderRepository.findAllByCompletionTimeBeforeAndStatus(time, "ГОТОВО"));
        return getOrderDTOS(orders);
    }

    public List<OrderDTO> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        return getOrderDTOS(orders);
    }

    @NotNull
    private List<OrderDTO> getOrderDTOS(List<Order> orders) {
        List<OrderDTO> dtos = new ArrayList<>();
        orders.forEach(order -> {
            OrderDTO dto = new OrderDTO();
            dto.setOrder(order);
            dto.setDishes(dishRepository.findAllByOrder(order.getId()));
            dtos.add(dto);
        });
        return dtos;
    }
//    public DishDTO dishToDTO(Dish dish){
//        DishDTO dishDTO = new DishDTO();
//        dishDTO.setCost(dish.getCost());
//        dishDTO.setName(dish.getName());
//        dishDTO.setId(dish.getDishId());
//        return dishDTO;
//    }
}
