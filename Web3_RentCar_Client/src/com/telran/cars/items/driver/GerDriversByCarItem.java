package com.telran.cars.items.driver;

import java.util.List;

import com.telran.cars.dto.Driver;
import com.telran.cars.items.RentCompanyItem;
import com.telran.cars.models.IRentCompany;

import view.InputOutput;

public class GerDriversByCarItem extends RentCompanyItem {

	public GerDriversByCarItem(InputOutput inOut, IRentCompany company, String fileName) {
		super(inOut, company, fileName);

	}

	@Override
	public String displayedName() {

		return "Display drivers data having been driving a given car";
	}

	@Override
	public void perform() {
		String regNumber = getRegNumberExisted();
		if (regNumber == null)
			return;
		List<Driver> drivers = company.getDriversByCar(regNumber);
		if (drivers.isEmpty()) {
			inOut.outputLine("No drivers of car with number " + regNumber);
			return;
		}
		drivers.forEach(inOut::outputLine);
	}

}
