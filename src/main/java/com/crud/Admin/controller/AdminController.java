package com.crud.Admin.controller;

import com.crud.Admin.dataSource.AdminData;
import com.crud.Admin.model.AdminUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

@Autowired
AdminData data;

    @PostMapping(value = "/")
    public void createAdminUser(@RequestBody AdminUser newAdminUser){
         data.createAdminUser(newAdminUser);
        System.out.println(data.AdminUsers());
    }
    @GetMapping(value = "/")
    public List<AdminUser> getAdminUser(){
        return data.AdminUsers();
    }

    @DeleteMapping(value = "/{id}")
        public String deleteUser(@PathVariable String id){
            data.deleteAdminUser(id);
            return "Deleted";
    }
//    @GetMapping(value = "/language")
//    public List<String> getLanguageDDown(){
//        return data.getLanguageDropDowns();
//    }
//    @GetMapping(value = "/region")
//    public List<String> getRegionDDown(){
//        return data.getRegionDropDowns();
//    }
//    @GetMapping(value = "/role")
//    public List<String> getRoleDDown(){
//        return data.getRoleDropDowns();
//    }
//    @GetMapping(value = "/branch")
//    public List<String> getBranchDDown(){
//        return data.getBranchDropDowns();
//    }
    @GetMapping("/options")
    public Map<String, List<String>> getAllDropdownOptions() {
        Map<String, List<String>> dropdownOptions = new HashMap<>();
        dropdownOptions.put("languages", data.getLanguageDropDowns());
        dropdownOptions.put("regions", data.getRegionDropDowns());
        dropdownOptions.put("roles", data.getRoleDropDowns());
        dropdownOptions.put("branches", data.getBranchDropDowns());
        return dropdownOptions;
    }
    @PutMapping("/{id}")
    public AdminUser UpdateUser(@PathVariable("id") String id ,@RequestBody AdminUser user){

        return data.updateAdminUser(id,user);
    }


}
