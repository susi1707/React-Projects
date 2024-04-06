package com.crud.Admin.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminUser {
    private String adminId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String employeeNumber;
    private String language;
    private String emailId;
    private String role;
    private String region;
    private String branch;
    private String contactNumber;
    private String activate;

}
