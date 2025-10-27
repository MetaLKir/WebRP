package com.telran.cars.items.statist;

import java.util.List;

import com.telran.cars.dto.Driver;
import com.telran.cars.items.RentCompanyItem;
import com.telran.cars.models.IRentCompany;

import view.InputOutput;

public class GetMostActiveDriversItem extends RentCompanyItem {

	public GetMostActiveDriversItem(InputOutput inOut, IRentCompany company, String fileName) {
		super(inOut, company, fileName);

	}

	@Override
	public String displayedName() {

		return "Display most active drivers";
	}

	@Override
	public void perform() {
		List<Driver> drivers = company.getMostActiveDrivers();
		if (drivers.isEmpty()) {
			inOut.outputLine("No drivers");
			return;
		}
		drivers.forEach(inOut::outputLine);
	}

}
