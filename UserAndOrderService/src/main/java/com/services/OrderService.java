package com.services;

import com.model.Dish;
import com.model.Order;
import com.model.OrderDTO;
import com.model.User;
import com.repositories.DishRepository;
import com.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private DishRepository dishRepository;

    public List<Order> getOrders(long userId){return orderRepository.findAllByUser(userId);}

    public OrderDTO getOrder(long id){
        if (orderRepository.exists(id)){
            OrderDTO orderDTO = new OrderDTO();
            orderDTO.setOrder(orderRepository.findOne(id));
            orderDTO.setDishes(dishRepository.findAllByOrder(id));
            return orderDTO;
        }
        return null;
    }

    public List<Dish> getDishes(long id){return dishRepository.findAllByOrder(id);}

    public OrderDTO addOrder(OrderDTO orderDTO){
        Order order = orderDTO.getOrder();
        List<Dish> dishes = orderDTO.getDishes();
        if (false){// обращение на склад
            orderDTO.setOrder(orderRepository.save(order));
            orderDTO.setDishes(dishRepository.save(dishes));
            return orderDTO;
        }
        return null;
    }

    public void setStatus(long id, String status){
        Order order = orderRepository.findOne(id);
        order.setStatus(status);
        orderRepository.save(order);
    }
}
