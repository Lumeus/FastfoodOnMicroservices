package com.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "ingredient", schema = "public")
public class Ingredient {
    @Id
    private String name;

    private String measure;

    private double amount;
}
