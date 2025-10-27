package com.telran.cars.items.statist;

import java.util.List;

import com.telran.cars.items.RentCompanyItem;
import com.telran.cars.models.IRentCompany;

import view.InputOutput;

public class GetMostProfitableItem extends RentCompanyItem{

	public GetMostProfitableItem(InputOutput inOut, IRentCompany company, String fileName) {
		super(inOut, company, fileName);
	
	}

	@Override
	public String displayedName() {
	
		return "Display most profitable model names";
	}

	@Override
	public void perform() {
		fillFromToDates();
		if (from == null || to == null)
			return;
		List<String> models = company.getMostProfitableCarModels(from, to);
		if (models.isEmpty()) {
			inOut.outputLine("No models");
			return;
		}
		models.forEach(inOut::outputLine);
	}

}
