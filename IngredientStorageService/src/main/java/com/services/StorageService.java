package com.services;

import com.model.Content;
import com.model.Dish;
import com.model.Ingredient;
import com.repositories.ContentRepository;
import com.repositories.DishRepository;
import com.repositories.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class StorageService {

    @Autowired
    private DishRepository dishRepository;
    @Autowired
    private ContentRepository contentRepository;
    @Autowired
    private IngredientRepository ingredientRepository;

//    Обновление остатка ингредиентов на складе
//    всвязи с поступлением новой партии или списанием старой
    @Transactional
    public void addIngredients(List<Ingredient> ingredients){
//      Получение данных о соответствующих ингредиентах
        List<Ingredient> a = ingredientRepository.findByIdIn(ingredients.stream()
                .map(Ingredient::getId)
                .collect(Collectors.toList())

        );
//      Редактирование данных
        a.forEach(e -> ingredients.forEach(o -> {
            if (e.getName().equals(o.getName())){
                e.setAmount(e.getAmount() + o.getAmount());
            }
        }));
//      Сохранение данных
        ingredientRepository.saveAll(a);
    }

//    получение информации по всем ингредиентам
    public List<Ingredient> getIngredients(){
        return ingredientRepository.findAll();
    }

//    Запрос списка доступных блюд (вся логика в запросе)
    public List<Dish> getDishes(){
        return dishRepository.getDishes();
    }

//    Обновление остатка ингредиентов всвязи с очередным заказом
//    также проверяется возможность выполнения заказа
//    возвращается результат этой проверки
//    если проверка не пройдена, заказ выполнен не будет и изменений в базе не последует
    @Transactional
    public boolean takeDishes(List<Long> dishes) {
//      Получение данных о содержании ингредиентов в блюдах
        List<Content> contents = new ArrayList<Content>();
        dishes.forEach(e -> contents.addAll(contentRepository.findByDish(e)));
//      Получение данных об ингредиентах, содержащихся в блюдах
        List<Ingredient> ingredients = ingredientRepository.findByIdIn(contents.stream()
                .map(Content::getIngredient)
                .collect(Collectors.toList())
        );
//      Редактирование данных об ингредиентах
        contents.forEach(e -> ingredients.forEach(o -> {
            if (o.getId() == e.getIngredient()) {
                o.setAmount(o.getAmount() - e.getAmount());
            }
        }));
//      Проверка на корректность внесенных изменений (хватает ли ингредиентов на данный заказ)
        if (ingredients.stream()
                .anyMatch(e -> e.getAmount() < 0)
        ){//Если заказ невозможен, возвращается false, говорящее об этом, а изменения откатываютя
            contents.forEach(e -> ingredients.forEach(o -> {
                if (o.getId() == e.getIngredient()) {
                    o.setAmount(o.getAmount() + e.getAmount());
                }
            }));
            return false;
        }
        else {//Если заказ возможен, возвращается true, говорящее об этом, а изменения сораняются (затем заказ выполняется)
            ingredientRepository.saveAll(ingredients);
            return true;
        }
    }

}
