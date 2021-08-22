package com.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "dish", schema = "public")
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "`order`")
    private long order;
    private BigDecimal cost;
    private String name;
    private long dishId;
}
