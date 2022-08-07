package com.controller;

import com.client.StorageClient;
import com.model.DishDTO;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@CrossOrigin
@RestController
public class ByPassController {
    private final Log logger = LogFactory.getLog(this.getClass());

    @Autowired
    DiscoveryClient discoveryClient;

    @Autowired
    StorageClient storageClient;

    @RequestMapping(value = "menu", method = RequestMethod.GET)
    List<DishDTO> dishes(){
        return storageClient.dishes();
    }

    @RequestMapping(value = "ingredient", method = RequestMethod.PUT)
    void ingredients(@RequestBody List<Object> ingredients){
        storageClient.ingredients(ingredients);
    }

    @RequestMapping(value = "ingredient", method = RequestMethod.GET)
    List<Object> ingredients(){
        return storageClient.getIngredients();
    }
}
