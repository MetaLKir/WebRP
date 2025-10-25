package com.telran.cars.dto;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

@SuppressWarnings("serial")
public class RemovedCarData implements Serializable {
	Car car;
	List<RentRecord> removedRecords;
	
	public RemovedCarData() {
		
	}

	public RemovedCarData(Car car, List<RentRecord> removedRecords) {
		
		this.car = car;
		this.removedRecords = removedRecords;
	}

	public Car getCar() {
		return car;
	}

	public List<RentRecord> getRemovedRecords() {
		return removedRecords;
	}

	@Override
	public int hashCode() {
		return Objects.hash(car, removedRecords);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RemovedCarData other = (RemovedCarData) obj;
		return Objects.equals(car, other.car) && Objects.equals(removedRecords, other.removedRecords);
	}

	@Override
	public String toString() {
		return "RemovedCarData [car=" + car + ", removedRecords=" + removedRecords + "]";
	}
	
}
