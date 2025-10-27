package com.telran.cars.items.clerk;

import java.util.List;

import com.telran.cars.dto.*;
import com.telran.cars.items.RentCompanyItem;
import com.telran.cars.models.IRentCompany;


import view.InputOutput;

public class GetCarByModelItem extends RentCompanyItem{

	public GetCarByModelItem(InputOutput inOut, IRentCompany company, String fileName) {
		super(inOut, company, fileName);
		
	}

	@Override
	public String displayedName() {
	
		return "Dispaly free cars by model";
	}

	@Override
	public void perform() {
		List<String> modelNames = company.getModelNames();
		String modelName = inOut.inputString("Enter model name ", modelNames);
		if( modelName== null) return;
		List<Car> modelCars = company.getCarsByModel(modelName);
		if(modelCars.isEmpty()) {
			inOut.outputLine("No cars of "+ modelName);
			return;
		}
		modelCars.forEach(inOut::outputLine);
	}

}
