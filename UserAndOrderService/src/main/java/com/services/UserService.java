package com.services;

import com.model.User;
import com.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User addUser(User user){
        if (userRepository.existsByUsername(user.getUsername())) return null;
        return userRepository.save(user);
    }

    public User getUser(long id){return userRepository.findById(id).get();}

    public User getUser(String username){return userRepository.findByUsername(username);}

    public User editUser(User user){return userRepository.save(user);}
}
