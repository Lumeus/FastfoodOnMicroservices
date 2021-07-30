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
    private long id;

    private long dish;

    private long ingredient;

    private double amount;
}
