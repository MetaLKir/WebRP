package com.telran.cars.items.manager;

import java.util.List;

import com.telran.cars.items.RentCompanyItem;
import com.telran.cars.models.IRentCompany;

import view.InputOutput;

public class RemoveModelItem extends RentCompanyItem {

	public RemoveModelItem(InputOutput inOut, IRentCompany company, String fileName) {
		super(inOut, company, fileName);

	}

	@Override
	public String displayedName() {

		return "Remove model";
	}

	@Override
	public void perform() {
		List<String> models = company.getModelNames();
		if (models.isEmpty()) {
			inOut.outputLine("No available models to remove");
			return;
		}
		String modelName = inOut.inputString("Enter model name", models);
		if (modelName == null)
			return;
		
		inOut.outputLine(company.removeModel(modelName));
		
	}

}
