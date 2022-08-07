package com.controller;

import com.model.Dish;
import com.model.OrderDTO;
import com.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<OrderDTO> getOrder(@PathVariable(value = "id") long id){
        OrderDTO response = orderService.getOrder(id);
        if (response == null) return ResponseEntity.badRequest().build();
        return ResponseEntity.ok(response);
    }

    //получается лишний, пока оставлю
    @RequestMapping(value = "{id}/dishes", method = RequestMethod.GET)
    public List<Dish> getDishes(@PathVariable(value = "id") long id){
        return orderService.getDishes(id);
    }

    @RequestMapping(value = "new", method = RequestMethod.POST)
    public ResponseEntity<OrderDTO> addOrder(@RequestBody OrderDTO order){
        return orderService.addOrder(order);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public void setOrderStatus(@PathVariable(value = "id") long id, @RequestBody String status){
        orderService.setStatus(id, status);
    }

    // запрос с кухни
    @RequestMapping(value = "complete/before/{time}", method = RequestMethod.GET)
    public List<OrderDTO> getOrders(@PathVariable(value = "time" ) Timestamp time){
        return orderService.getOrders(time);
    }

    @RequestMapping(value = "all", method = RequestMethod.GET)
    public List<OrderDTO> getAllOrders() {
        return orderService.getAllOrders();
    }
}
