package com.controllers;

import com.model.Dish;
import com.model.Ingredient;
import com.services.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="storage")
public class StorageServiceController {

    @Autowired
    private StorageService storageService;

//    Запрос списка доступных блюд
    @RequestMapping(value="/dishes", method = RequestMethod.GET)
    public List<Dish> dishes() {
        return storageService.getDishes();
    }

//    Обновление остатка ингредиентов на складе
//    всвязи с поступлением новой партии или списанием старой
    @RequestMapping(value="/ingredient", method = RequestMethod.PUT)
    public void ingredients(@RequestBody List<Ingredient> ingredients) {
        storageService.addIngredients(ingredients);
    }

//    Обновление остатка ингредиентов всвязи с очередным заказом
//    также проверяется возможность выполнения заказа
//    возвращается результат этой проверки
//    если проверка не пройдена, заказ выполнен не будет и изменений в базе не последует
    @RequestMapping(value="/dishes", method = RequestMethod.PUT)
    public boolean takeDishes(@RequestBody List<Dish> dishes) {
        return storageService.takeDishes(dishes);
    }
}
