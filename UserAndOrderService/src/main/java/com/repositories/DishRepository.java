package com.repositories;

import com.model.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Long> {
    List<Dish> findAllByOrder(long order);
    @Query("select max(d.id) + 1 from Dish d")
    long getNextID();
}
