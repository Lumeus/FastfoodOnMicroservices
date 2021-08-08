package com.controller;

import com.model.Dish;
import com.model.Order;
import com.model.OrderDTO;
import com.model.User;
import com.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="order")
public class OrderController {
    @Autowired
    OrderService orderService;

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public OrderDTO getOrder(@PathVariable(value = "id") long id){
        return orderService.getOrder(id);
    }

    //получается лишний, пока оставлю
    @RequestMapping(value = "{id}/dishes", method = RequestMethod.GET)
    public List<Dish> getDishes(@PathVariable(value = "id") long id){
        return orderService.getDishes(id);
    }

    @RequestMapping(value = "new", method = RequestMethod.POST)
    public OrderDTO addOrder(@RequestBody OrderDTO order){
        return null;
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public OrderDTO editOrder(@PathVariable(value = "id") long id, @RequestBody OrderDTO order){
        return orderService.addOrder(order);
    }

    //тут должен быть запрос с кухни / альтернатива: уведомления
//    @RequestMapping(value = "complete/before/{time1}/after/{time2}", method = RequestMethod.GET)
//    public List<Order> getOrders(){
//    }
}
