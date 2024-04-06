package com.crud.Agent.controller;


import com.crud.Agent.dataSource.AgentData;

import com.crud.Agent.model.AgentUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/agent")
@CrossOrigin("*")
public class AgentController {

@Autowired
AgentData data;

    @PostMapping(value = "/")
    public void createAdminUser(@RequestBody AgentUser newAgentUser){
         data.createAdminUser(newAgentUser);
        System.out.println(data.AgentUsers());
    }
    @GetMapping(value = "/")
    public List<AgentUser> getAdminUser(){
        return data.AgentUsers();
    }

    @DeleteMapping(value = "/{id}")
        public String deleteUser(@PathVariable String id){
            data.deleteAgentUser(id);
            return "Deleted";
    }
    @GetMapping("/options")
    public Map<String, List<String>> getAllDropdownOptions() {
        Map<String, List<String>> dropdownOptions = new HashMap<>();
        dropdownOptions.put("languages", data.getLanguageDropDowns());
        dropdownOptions.put("roles", data.getPrivilegeDropDowns());
        dropdownOptions.put("branches", data.getUserTypeDropDowns());
        return dropdownOptions;
    }
    @PutMapping("/{id}")
    public AgentUser UpdateUser(@PathVariable("id") String id , @RequestBody AgentUser user){

        return data.updateAgentUser(id,user);
    }


}
