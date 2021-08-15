package com.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "user", schema = "public")
public class User {
    @Id
    @GeneratedValue
    private long id;
    @Column(unique = true)
    private String username;
    private String password;
    private String role;
}
