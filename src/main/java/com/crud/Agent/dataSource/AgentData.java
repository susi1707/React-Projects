package com.crud.Agent.dataSource;


import com.crud.Agent.model.AgentUser;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
@Service
public class AgentData {


    private List<AgentUser> agentUsers = new ArrayList<>();

    public AgentData() {
        agentUsers.addAll(getAgentUsers());
    }
    public List<AgentUser> getAgentUsers() {
        return Stream.of(
                new AgentUser("Agent01", "Tom", "", "",  "English", "Tom001@ibs.com", "Agent2", "Supervisor1", "5432", "xyz", "ABC","123","true"),
                new AgentUser("Agent02", "Jimmy", "", "",  "German", "Jimmy002@ibs.com", "Agent1", "Supervisor2", "5431", "ABC", "ABC","123","true"),
                new AgentUser("Agent03", "Dhoni", "", "",  "Malayalam", "Dhoni003@ibs.com", "Agent3", "Supervisor3", "123", "GHT", "BVF","123","true"),
                new AgentUser("Agent04", "Ana", "", "Parker",  "English", "AnaParker004@ibs.com", "Agent4", "Supervisor4", "KTM", "HTDS","123","", "true"),
                new AgentUser("Agent05", "Test", "", "",  "English", "Test005@ibs.com", "Agent5", "Supervisor5", "6541", "BMW", "FDFS","123","true"),
                new AgentUser("Agent06", "Jack", "", "",  "German", "jack006@ibs.com", "Agent6", "Supervisor6", "3518", "MOW", "NVFD","123","true"),
                new AgentUser("Agent07", "Logan", "", "Paul",  "Tamil", "LoganPaul007@ibs.com", "Supervisor7", "0124", "TATA", "JAWS","123","" ,"true")
        ).collect(Collectors.toList());
    }

    public void createAdminUser(AgentUser newAdminUser){
        agentUsers.add(newAdminUser);

    }

    public List<AgentUser> AgentUsers(){
        return agentUsers;
    }

    public List<String> getLanguageDropDowns(){
        return Arrays.asList("Malayalam","English","Tamil","Latin","German");
    }

    public List<String> getPrivilegeDropDowns(){
        return Arrays.asList("Supervisor1","Supervisor2","Supervisor3","Supervisor4");
    }
    public List<String> getUserTypeDropDowns(){
        return Arrays.asList("Agent1","Agent2","Agent3","Agent4");
    }

    public void deleteAgentUser(String agentId){
        //adminUsers.removeIf(user -> user.getAdminId().equalsIgnoreCase(adminId));
        Iterator<AgentUser> itr = agentUsers.iterator();
        while(itr.hasNext()){
            AgentUser user = itr.next();
            if (user.getUserId().equalsIgnoreCase(agentId)) {
            itr.remove();
            }
        }
    }

    public AgentUser updateAgentUser(String adminId, AgentUser user) {
        for (AgentUser agentUser : agentUsers) {
            if (agentUser.getUserId().equalsIgnoreCase(adminId)) {
                agentUser.setUserId(user.getUserId());
                agentUser.setFirstName(user.getFirstName());
                agentUser.setMiddleName(user.getMiddleName());
                agentUser.setLastName(user.getLastName());
                agentUser.setLanguage(user.getLanguage());
                agentUser.setEmailId(user.getEmailId());
                agentUser.setUserType(user.getUserType());
                agentUser.setPrivilege(user.getPrivilege());
                agentUser.setAgentCode(user.getAgentCode());
                agentUser.setCompanyName(user.getCompanyName());
                agentUser.setAddress(user.getAddress());
                agentUser.setContactNumber(user.getContactNumber());
                agentUser.setActivate(user.getActivate());
                return agentUser;
            }
        }
        return null;
    }
}



