package com.security.service;

//import org.springframework.security.core.userdetails.User;
import com.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        com.model.User user = userRepository.findByUsername(username);
        if (user == null){
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return userDetailsFromUser(user);
//        if ("javainuse".equals(username)) {
//            return new User("javainuse", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
//                    new ArrayList<>());
//        } else {
//            throw new UsernameNotFoundException("User not found with username: " + username);
//        }
    }

    public UserDetails userDetailsFromUser(com.model.User user){
        return new User(user.getUsername(), user.getPassword(), authoritiesFromRole(user.getRole()));
    }

    public Collection<GrantedAuthority> authoritiesFromRole(String role){
        Collection<GrantedAuthority> authorities = new HashSet<>();
        switch (role){
            case "ADMIN": authorities.add(new SimpleGrantedAuthority("ADMIN")); break;
            case "CHEF": authorities.add(new SimpleGrantedAuthority("CHEF")); break;
            case "USER": authorities.add(new SimpleGrantedAuthority("USER")); break;
        }
        return authorities;
    }
}
