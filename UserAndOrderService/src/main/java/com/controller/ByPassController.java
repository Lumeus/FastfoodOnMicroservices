package com.controller;

import com.client.StorageClient;
import com.model.DishDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Random;

@CrossOrigin
@RestController
public class ByPassController {
    @Autowired
    DiscoveryClient discoveryClient;

    @Autowired
    StorageClient storageClient;

    @RequestMapping(value = "menu", method = RequestMethod.GET)
    List<DishDTO> dishes(){
        Random random = new Random();
        List<ServiceInstance> instances = discoveryClient.getInstances("StorageService");
        URI storageURI = instances.get(random.nextInt(instances.size())).getUri();
        return storageClient.dishes(storageURI);
    }

    @RequestMapping(value = "ingredient", method = RequestMethod.PUT)
    void ingredients(@RequestBody List<Object> ingredients){
        Random random = new Random();
        List<ServiceInstance> instances = discoveryClient.getInstances("StorageService");
        URI storageURI = instances.get(random.nextInt(instances.size())).getUri();
        storageClient.ingredients(storageURI, ingredients);
    }
}
