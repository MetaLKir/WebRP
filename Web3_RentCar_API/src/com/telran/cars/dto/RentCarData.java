package com.telran.cars.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

public class RentCarData implements Serializable {
    private String regNumber;
    private long licenseId;
    private LocalDate rentDate;
    private int rentDays;

    public RentCarData() {
    }

    public RentCarData(String regNumber, long licenseId, LocalDate rentDate, int rentDays) {
        this.regNumber = regNumber;
        this.licenseId = licenseId;
        this.rentDate = rentDate;
        this.rentDays = rentDays;
    }

    public String getRegNumber() {
        return regNumber;
    }

    public long getLicenseId() {
        return licenseId;
    }

    public LocalDate getRentDate() {
        return rentDate;
    }

    public int getRentDays() {
        return rentDays;
    }

    public void setRegNumber(String regNumber) {
        this.regNumber = regNumber;
    }

    public void setLicenseId(long licenseId) {
        this.licenseId = licenseId;
    }

    public void setRentDate(LocalDate rentDate) {
        this.rentDate = rentDate;
    }

    public void setRentDays(int rentDays) {
        this.rentDays = rentDays;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;

        RentCarData that = (RentCarData) o;
        return licenseId == that.licenseId && rentDays == that.rentDays && Objects.equals(regNumber, that.regNumber) && Objects.equals(rentDate, that.rentDate);
    }

    @Override
    public int hashCode() {
        int result = Objects.hashCode(regNumber);
        result = 31 * result + Long.hashCode(licenseId);
        result = 31 * result + Objects.hashCode(rentDate);
        result = 31 * result + rentDays;
        return result;
    }

    @Override
    public String toString() {
        return "RentCarData{" +
                "regNumber='" + getRegNumber() + '\'' +
                ", licenseId=" + getLicenseId() +
                ", rentDate=" + getRentDate() +
                ", rentDays=" + getRentDays() +
                '}';
    }
}
