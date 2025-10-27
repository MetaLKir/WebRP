package com.telran.cars.models;

import com.telran.cars.dto.*;
import com.telran.cars.dto.enums.CarsReturnCode;
import telran.net.client.TCPClientJava;

import static com.telran.cars.api.APIConstants.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Stack;

public class RentCompanyTCPProxy extends TCPClientJava implements IRentCompany {

    public RentCompanyTCPProxy(String hostName, int port) throws Exception {
        super(hostName, port);
    }

//    @Override
//    public int getGasPrice() {
//        return 0;
//    }
//
//    @Override
//    public void setGasPrice(int price) {
//
//    }
//
//    @Override
//    public int getFinePercent() {
//        return 0;
//    }
//
//    @Override
//    public void setFinePercent(int finePercent) {
//
//    }

    @Override
    public CarsReturnCode addModel(Model model) {
        return sendRequest(ADD_MODEL, model);
    }

    @Override
    public Model getModel(String modelName) {
        return sendRequest(GET_MODEL, modelName);
    }

    @Override
    public CarsReturnCode addCar(Car car) {
        return sendRequest(ADD_CAR, car);
    }

    @Override
    public Car getCar(String regNumber) {
        return sendRequest(GET_CAR, regNumber);
    }

    @Override
    public CarsReturnCode addDriver(Driver driver) {
        return sendRequest(ADD_DRIVER, driver);
    }

    @Override
    public Driver getDriver(long licenseId) {
        return sendRequest(GET_DRIVER, licenseId);
    }

    @Override
    public CarsReturnCode rentCar(String regNumber, long licenseId, LocalDate rentDate, int rentDays) {
        RentCarData rentCarData = new RentCarData(regNumber, licenseId, rentDate, rentDays);
        return sendRequest(GET_MODEL, rentCarData);
    }

    @Override
    public List<Car> getCarsByDriver(long licenseId) {
        return sendRequest(GET_DRIVER_CARS, licenseId);
    }

    @Override
    public List<Driver> getDriversByCar(String regNumber) {
        return sendRequest(GET_CAR_DRIVERS, regNumber); // !!!!!
    }

    @Override
    public List<Car> getCarsByModel(String modelName) {
        return sendRequest(GET_MODEL_CARS, modelName);
    }

    @Override
    public List<RentRecord> getRentRecordsAtDate(LocalDate from, LocalDate to) {
        return sendRequest(GET_RECORDS, new StatisticsData(from, to));
    }

    @Override
    public RemovedCarData removeCar(String regNumber) {
        return sendRequest(REMOVE_CAR, regNumber);
    }

    @Override
    public List<RemovedCarData> removeModel(String modelName) {
        return sendRequest(REMOVE_MODEL, modelName);
    }

    @Override
    public RemovedCarData returnCar(String regNumber, long licenseId, LocalDate returnDate, int damages, int tankPercent) {
        ReturnCarData returnCarData = new ReturnCarData(regNumber, licenseId, returnDate, damages, tankPercent);
        return sendRequest(RETURN_CAR, returnCarData);
    }

    @Override
    public List<String> getMostPopularCarModels(LocalDate fromDate, LocalDate toDate, int fromAge, int toAge) {
        StatisticsData statisticsData = new StatisticsData(fromDate, toDate, fromAge, toAge);
        return sendRequest(GET_MOST_POPULAR_MODELS, statisticsData);
    }

    @Override
    public List<String> getMostProfitableCarModels(LocalDate fromDate, LocalDate toDate) {
        return sendRequest(GET_MOST_PROFITABLE_MODELS, new StatisticsData(fromDate, toDate));
    }

    @Override
    public List<Driver> getMostActiveDrivers() {
        return sendRequest(GET_MOST_ACTIVE_DRIVER, null);
    }

    @Override
    public List<String> getModelNames() {
        return sendRequest(GET_MODELS_CAR, null);
    }
}
