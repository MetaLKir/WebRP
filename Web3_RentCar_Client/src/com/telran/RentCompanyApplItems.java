package com.telran;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDate;
import java.util.List;

import com.telran.cars.dto.*;
import com.telran.cars.items.SaveAndExitItem;
import com.telran.cars.items.clerk.AddDriverItem;
import com.telran.cars.items.driver.GetCarItem;
import com.telran.cars.items.driver.GetDriverItem;
import com.telran.cars.items.manager.AddCarItem;
import com.telran.cars.items.manager.AddModelItem;
import com.telran.cars.models.IRentCompany;
import com.telran.cars.models.RentCompanyEmbedded;
import com.telran.utils.Persistable;

import view.ConsoleInputOutput;
import view.ExitItem;
import view.InputOutput;
import view.Item;
import view.Menu;
import view.SubmenuItem;

public class RentCompanyApplItems {
	static IRentCompany company;
	static InputOutput inOut;
	private static final String FILE_NAME = "company_items.data";

	public static void main(String[] args) {
		inOut = new ConsoleInputOutput();
		company = RentCompanyEmbedded.restoreFromFile(FILE_NAME);
		Menu menu =new Menu(getMainMenuItems(), inOut);
		menu.runMenu();
	}

	private static Item[] getMainMenuItems() {
		Item[] items = {
		new SubmenuItem("Clerk", inOut, getClerkItems()),
		new SubmenuItem("Driver", inOut, getDriverItems()),
		new SubmenuItem("Manager", inOut, getManagerItems()),
		new SubmenuItem("Statist", inOut, getStatistItems()),
		new SubmenuItem("Technician", inOut, getTechnicianItems()),
		new SaveAndExitItem(inOut, company, FILE_NAME)
		};
		return items;
	}

	private static Item[] getTechnicianItems() {
		Item[]items = {
				new ExitItem()
		};
		
		return items;
	}

	private static Item[] getStatistItems() {
		Item[]items = {
				new ExitItem()
		};
		
		return items;
	}

	private static Item[] getManagerItems() {
		Item[]items = {
				new AddModelItem(inOut, company, FILE_NAME),
				new AddCarItem(inOut, company, FILE_NAME),
				new ExitItem()
		};
		
		return items;
	}

	private static Item[] getDriverItems() {
		Item[]items = {
				new GetCarItem(inOut, company, FILE_NAME),
				new GetDriverItem(inOut, company, FILE_NAME),
				new ExitItem()
		};
		
		return items;
	}

	private static Item[] getClerkItems() {
		Item[]items = {
				new AddDriverItem(inOut, company, FILE_NAME),
				new ExitItem()
		};
		
		return items;
	}

}
