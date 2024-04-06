package com.crud.Admin.dataSource;

import com.crud.Admin.model.AdminUser;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
@Service
public class AdminData {


    private List<AdminUser> adminUsers = new ArrayList<>();

    public AdminData() {
        adminUsers.addAll(getAdminUsers());
    }
    public List<AdminUser> getAdminUsers() {
        return Stream.of(
                new AdminUser("Admin01", "Tom", "", "", "001", "English", "Tom001@ibs.com", "Admin", "USA", "ibs-Chennai", "1234", "true"),
                new AdminUser("Admin02", "Jimmy", "", "", "002", "German", "Jimmy002@ibs.com", "Admin", "Germany", "ibs-Trivandrum", "1234", "true"),
                new AdminUser("Admin03", "Dhoni", "", "", "003", "Malayalam", "Dhoni003@ibs.com", "HQAdmin", "India", "ibs-Chennai", "1234", "true"),
                new AdminUser("Admin04", "Ana", "", "Parker", "004", "English", "AnaParker004@ibs.com", "BranchAdmin", "Europe", "ibs-Bangalore", "1234", "true"),
                new AdminUser("Admin05", "Test", "", "", "005", "English", "Test005@ibs.com", "Other", "Africa", "ibs-Cochin", "1234", "true"),
                new AdminUser("Admin06", "Jack", "", "", "006", "German", "jack006@ibs.com", "RegionAdmin", "Africa", "ibs-Cochin", "1234", "false"),
                new AdminUser("Admin07", "Logan", "", "Paul", "007", "Tamil", "LoganPaul007@ibs.com", "Other", "Africa", "ibs-Chennai", "1234", "true")
        ).collect(Collectors.toList());
    }

    public void createAdminUser(AdminUser newAdminUser){
        adminUsers.add(newAdminUser);

    }

    public List<AdminUser> AdminUsers(){
        return adminUsers;
    }

    public List<String> getLanguageDropDowns(){
        return Arrays.asList("Malayalam","English","Tamil","Latin","German");
    }
    public List<String> getRegionDropDowns(){
        return Arrays.asList("USA","India","Europe","Singapore","Africa");
    }

    public List<String> getRoleDropDowns(){
        return Arrays.asList("BranchAdmin","RegionAdmin","HQAdmin","Admin","Other");
    }
    public List<String> getBranchDropDowns(){
        return Arrays.asList("ibs-Chennai","ibs-Cochin","ibs-Bangalore","ibs-Trivandrum");
    }

    public void deleteAdminUser(String adminId){
        //adminUsers.removeIf(user -> user.getAdminId().equalsIgnoreCase(adminId));
        Iterator<AdminUser> itr = adminUsers.iterator();
        while(itr.hasNext()){
            AdminUser user = itr.next();
            if (user.getAdminId().equalsIgnoreCase(adminId)) {
            itr.remove();
            }
        }
    }

    public AdminUser updateAdminUser(String adminId, AdminUser user) {
        for (AdminUser adminUser : adminUsers) {
            if (adminUser.getAdminId().equalsIgnoreCase(adminId)) {
                adminUser.setAdminId(user.getAdminId());
                adminUser.setFirstName(user.getFirstName());
                adminUser.setMiddleName(user.getMiddleName());
                adminUser.setLastName(user.getLastName());
                adminUser.setEmployeeNumber(user.getEmployeeNumber());
                adminUser.setLanguage(user.getLanguage());
                adminUser.setEmailId(user.getEmailId());
                adminUser.setRole(user.getRole());
                adminUser.setRegion(user.getRegion());
                adminUser.setBranch(user.getBranch());
                adminUser.setContactNumber(user.getContactNumber());
                adminUser.setActivate(user.getActivate());
                return adminUser;
            }
        }
        return null;
    }
}



