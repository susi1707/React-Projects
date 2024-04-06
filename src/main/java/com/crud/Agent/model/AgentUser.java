package com.crud.Agent.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AgentUser {
    private String userId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String language;
    private String emailId;
    private String userType;
    private String privilege;
    private String agentCode;
    private String companyName;
    private String address;
    private String contactNumber;
    private String activate;

}
