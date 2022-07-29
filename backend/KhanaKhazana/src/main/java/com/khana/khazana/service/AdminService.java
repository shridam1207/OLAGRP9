package com.khana.khazana.service;

import com.khana.khazana.model.*;
import com.khana.khazana.repository.AdminRespository;
import com.khana.khazana.repository.RestaurantRepository;
import com.khana.khazana.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    AdminRespository adminRespository;
    @Autowired
    RestaurantRepository restaurantRepository;
    @Autowired
    UserRepository userRepository;

    public ShowAllUsersResponse AllCustomer(){
        ShowAllUsersResponse showAllUsersResponse = new ShowAllUsersResponse();
        List<Users> listOfUsers = adminRespository.findAllByRole("customer");
        showAllUsersResponse.setEntries(listOfUsers);

        return showAllUsersResponse;
    }

    public ShowAllUsersResponse AllManager(){
        ShowAllUsersResponse showAllUsersResponse = new ShowAllUsersResponse();
        List<Users> listOfManagers = adminRespository.findAllByRole("manager");
        showAllUsersResponse.setEntries(listOfManagers);

        return showAllUsersResponse;
    }

    public FetchRestaurantResponse AllRestaurant(){

        FetchRestaurantResponse fetchRestaurantResponse = new FetchRestaurantResponse();
        List<Restaurant> listOfRestaurant = restaurantRepository.findAll();
        fetchRestaurantResponse.setEntries(listOfRestaurant);

        return fetchRestaurantResponse;
    }

//    public Users singleuser(long id){
//        return adminRespository.findById(id);
//    }

    public BanUserResponse banUser(long userId){
        BanUserResponse banUserResponse = new BanUserResponse();
        Users user = userRepository.findByUserId(userId);
        if(user.getRole().equals("admin") || user.getRole().equals("manager")){
            banUserResponse.setStatus(false);
            banUserResponse.setMessage("Invalid operation, trying to delete admin/manager");
            return banUserResponse;
        }

        adminRespository.deleteById(userId);
        banUserResponse.setStatus(true);
        banUserResponse.setMessage("User Banned");
        return banUserResponse;
    }

}
