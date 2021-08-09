package com.repositories;

import com.model.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Integer> {
    @Query("from Dish d where d.id not in " +
            "(select c.dish from Content c, Ingredient i where " +
            "i.id = c.ingredient and c.amount > i.amount)")
    List<Dish> getDishes();
}
