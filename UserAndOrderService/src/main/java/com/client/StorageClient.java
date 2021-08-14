package com.client;

import com.model.DishDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.net.URI;
import java.util.List;

@FeignClient(name = "StorageService")
@RequestMapping(value = "/storage")
public interface StorageClient{

    //    Запрос списка доступных блюд
    @RequestMapping(value="/dishes", method = RequestMethod.GET)
    List<DishDTO> dishes();

    //    Обновление остатка ингредиентов на складе
//    всвязи с поступлением новой партии или списанием старой
    @RequestMapping(value="/ingredient", method = RequestMethod.PUT)
    void ingredients(@RequestBody List<Object> ingredients);

    //    Обновление остатка ингредиентов всвязи с очередным заказом
    @RequestMapping(value="/dishes", method = RequestMethod.PUT)
    boolean takeDishes(@RequestBody List<Long> dishes);
}
