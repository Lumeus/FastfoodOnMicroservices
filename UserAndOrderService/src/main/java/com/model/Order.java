package com.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "order", schema = "public")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long user;
    private Timestamp timeOfOrdering;
    private Timestamp completionTime;
    private BigDecimal price;//decimal
    private String status;
}
