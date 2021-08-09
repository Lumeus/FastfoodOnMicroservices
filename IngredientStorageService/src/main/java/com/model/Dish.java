package com.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "dish", schema = "public")
public class Dish {

    @Id
    @GeneratedValue
    private long id;

    private String name;

    private String info;

    private int cost;

}
