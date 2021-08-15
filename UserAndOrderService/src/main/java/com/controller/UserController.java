package com.controller;

import com.model.Order;
import com.model.User;
import com.services.OrderService;
import com.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    OrderService orderService;

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public User getUser(@PathVariable(value = "id") long id){
        return userService.getUser(id);
    }

    @RequestMapping(value = "{id}/orders", method = RequestMethod.GET)
    public List<Order> getOrders(@PathVariable(value = "id") long id){
        return orderService.getOrders(id);
    }

    @RequestMapping(value = "register", method = RequestMethod.POST)
    public User register(@RequestBody User user){
        if (user.getRole().equals("USER")) return userService.addUser(user);
        return null;
    }

    @RequestMapping(value = "register/admin", method = RequestMethod.POST)
    public User adminRegister(@RequestBody User user){
        return userService.addUser(user);
    }

    @RequestMapping(value = "edit", method = RequestMethod.PUT)
    public User edit(@RequestBody User user){
        return userService.editUser(user);
    }
}
