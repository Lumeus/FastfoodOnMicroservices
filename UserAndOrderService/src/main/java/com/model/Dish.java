package com.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "dish", schema = "public")
public class Dish {
    @Id
    @GeneratedValue
    private long id;
    private long order;
    private BigDecimal cost;
    private String name;
    private long dishId;
}
