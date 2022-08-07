package com.repositories;

import com.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    @Query("select (count(u)>0) from User u where u.username = :username")
    boolean existsByUsername(String username);
    @Query("select max(u.id) + 1 from User u")
    long getNextID();
}
