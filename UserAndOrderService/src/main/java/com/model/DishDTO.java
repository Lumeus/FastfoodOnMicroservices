package com.model;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class DishDTO {
    private long id;

    private String name;

    private String info;

    private BigDecimal cost;
}
