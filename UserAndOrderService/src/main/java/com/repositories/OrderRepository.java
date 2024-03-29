package com.repositories;

import com.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findAllByUser(long userId);
    List<Order> findAllByCompletionTimeBeforeAndStatus(Timestamp time, String status);
    @Query("select max(o.id) + 1 from Order o")
    long getNextID();
}
