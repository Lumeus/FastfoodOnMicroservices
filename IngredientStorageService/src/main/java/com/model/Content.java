package com.model;

import lombok.Data;
import lombok.Generated;

import javax.persistence.*;

@Data
@Entity
@Table(name = "content", schema = "public")
public class Content {
    @Id
    @GeneratedValue
    private int id;

    private String dish;

    private String ingredient;

    private double amount;
}
