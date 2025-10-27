package com.telran.cars.items.driver;

import java.util.List;

import com.telran.cars.dto.Car;
import com.telran.cars.items.RentCompanyItem;
import com.telran.cars.models.IRentCompany;

import view.InputOutput;

public class GetCarsByDriverItem extends RentCompanyItem {

	public GetCarsByDriverItem(InputOutput inOut, IRentCompany company, String fileName) {
		super(inOut, company, fileName);

	}

	@Override
	public String displayedName() {

		return "Display cars data driving a given driver";
	}

	@Override
	public void perform() {
		Long licenseId = getLicenseIdIfExists();
		if (licenseId == null)
			return;
		List<Car> cars = company.getCarsByDriver(licenseId);
		if (cars.isEmpty()) {
			inOut.outputLine("No cars for " + licenseId);
			return;
		}
		cars.forEach(inOut::outputLine);

	}

}
