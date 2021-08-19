package com.services;

import com.client.StorageClient;
import com.model.*;
import com.repositories.DishRepository;
import com.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.stereotype.Service;

import java.net.URI;
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
            order.setId(orderRepository.count() + 1);
            final long[] dishCount = {dishRepository.count() + 1};
            dishes.forEach(dish -> dish.setDishId(dishCount[0]++));
            orderDTO.setOrder(orderRepository.save(order));
            orderDTO.setDishes(dishRepository.saveAll(dishes));
            return orderDTO;
        }
        return null;
    }

    public void setStatus(long id, String status){
        Order order = orderRepository.findById(id).get();
        order.setStatus(status);
        orderRepository.save(order);
    }

//    public DishDTO dishToDTO(Dish dish){
//        DishDTO dishDTO = new DishDTO();
//        dishDTO.setCost(dish.getCost());
//        dishDTO.setName(dish.getName());
//        dishDTO.setId(dish.getDishId());
//        return dishDTO;
//    }
}
