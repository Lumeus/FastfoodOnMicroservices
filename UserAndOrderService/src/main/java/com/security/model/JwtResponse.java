package com.security.model;

import com.model.User;
import lombok.Data;

import java.io.Serializable;

@Data
public class JwtResponse implements Serializable {
    private static final long serialVersionUID = -8091879091924046844L;
    private final String token;
    private final User user;
    public JwtResponse(String jwtToken, User user) {
        this.token = jwtToken;
        this.user = user;
    }
}
