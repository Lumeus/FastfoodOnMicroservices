package com.controller;

import com.model.Order;
import com.model.User;
import com.security.config.JwtTokenUtil;
import com.services.OrderService;
import com.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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

    @Autowired
    JwtTokenUtil jwtTokenUtil;

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public ResponseEntity<User> getUser(@PathVariable(value = "id") long id){
        User response = userService.getUser(id);
        if (response == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(response);
    }

    @RequestMapping(value = "{id}/orders", method = RequestMethod.GET)
    public ResponseEntity<List<Order>> getOrders(@PathVariable(value = "id") long id){
        return ResponseEntity.ok(orderService.getOrders(id));
    }

    @RequestMapping(value = "register", method = RequestMethod.POST)
    public ResponseEntity<User> register(@RequestBody User user){
        if (user.getRole().equals("USER")){
            user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
            User response = userService.addUser(user);
            if (response == null) return ResponseEntity.badRequest().build();
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(HttpStatus.LOCKED).build();
    }

    @RequestMapping(value = "register/admin", method = RequestMethod.POST)
    public ResponseEntity<User> adminRegister(@RequestBody User user){
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        User response = userService.addUser(user);
        if (response == null) return ResponseEntity.badRequest().build();
        return ResponseEntity.ok(response);
    }

    @RequestMapping(value = "edit", method = RequestMethod.PUT)
    public ResponseEntity<User> edit(@RequestBody User user, @RequestHeader("Authorization") String token){
        String username = jwtTokenUtil.getUsernameFromToken(token.substring(7));
        if(user.getId() != userService.getUser(username).getId() || !user.getRole().equals("USER"))
            return ResponseEntity.badRequest().build();
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        User response = userService.editUser(user);
        if (response == null) return ResponseEntity.badRequest().build();
        return ResponseEntity.ok(response);
    }

    @RequestMapping(value = "all", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }
}
