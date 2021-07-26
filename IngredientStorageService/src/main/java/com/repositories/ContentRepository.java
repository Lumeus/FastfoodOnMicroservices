package com.repositories;

import com.model.Content;
import com.model.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContentRepository extends JpaRepository<Content, Integer> {
    List<Content> findByDishIn(List<String> dishes);
    List<Content> findByDish(String dish);
}
