package com.telran.cars.api;

public interface APIConstants {

    //=====Car=====
    String ADD_CAR = "/car/add";
    String GET_CAR = "/car";
    String RENT_CAR = "/car/rent";
    String REMOVE_CAR = "/car/remove";
    String RETURN_CAR = "/car/return";

    //=====Driver=====
    String ADD_DRIVER = "/driver/add";
    String GET_DRIVER = "/driver";
    String GET_DRIVER_CARS = "/driver/cars"; //all cars for driver
    String GET_CAR_DRIVER = "/drivers/car"; //all drivers for car
    String GET_MOST_ACTIVE_DRIVER = "/drivers/active";

    //=====Model=====
    String ADD_MODEL = "/model/add";
    String GET_MODEL = "/model";
    String REMOVE_MODEL = "/model/remove";
    String GET_MODEL_CARS = "/model/cars";
    String GET_MODELS_CAR = "/models";
    String GET_MOST_POPULAR_MODELS = "/models/popular";
    String GET_MOST_PROFITABLE_MODELS = "/models/profitable";

    //=====Record=====
    String GET_RECORDS = "/records";
}
