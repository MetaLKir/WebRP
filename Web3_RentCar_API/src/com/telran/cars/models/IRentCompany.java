package com.telran.cars.models;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import com.telran.cars.dto.*;
import com.telran.cars.dto.enums.*;

public interface IRentCompany extends Serializable {
	// sprint 1
//	int getGasPrice();
//
//	void setGasPrice(int price);
//
//	int getFinePercent();
//
//	void setFinePercent(int finePercent);

	CarsReturnCode addModel(Model model);

	Model getModel(String modelName);

	CarsReturnCode addCar(Car car);

	Car getCar(String regNumber);

	CarsReturnCode addDriver(Driver driver);

	Driver getDriver(long licenseId);

	// sprint 2
	CarsReturnCode rentCar(String regNumber, long licenseId, LocalDate rentDate, int rentDays);

	List<Car> getCarsByDriver(long licenseId);

	List<Driver> getDriversByCar(String regNumber);

	List<Car> getCarsByModel(String modelName);

	List<RentRecord> getRentRecordsAtDate(LocalDate from, LocalDate to);

	// sprint 3
	RemovedCarData removeCar(String regNumber);

	List<RemovedCarData> removeModel(String modelName);

	// model car1 car2 car3 -> RemovedCarData(car1 List) (car2 list)
	RemovedCarData returnCar(String regNumber, long licenseId, 
			LocalDate returnDate, int damages, int tankPercent);
	// sprint 4
	List<String> getMostPopularCarModels(LocalDate fromDate, LocalDate toDate, 
			int fromAge, int toAge);
	List<String> getMostProfitableCarModels(LocalDate fromDate, LocalDate toDate);
	List<Driver> getMostActiveDrivers();
//sprint 5
	List<String> getModelNames();
	
}
