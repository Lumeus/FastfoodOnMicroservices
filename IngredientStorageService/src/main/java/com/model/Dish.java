package com.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "dish", schema = "public")
public class Dish {
    @Id
    private String name;

    private String info;

    private int cost;

}
