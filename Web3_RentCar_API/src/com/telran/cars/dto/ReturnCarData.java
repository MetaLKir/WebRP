package com.telran.cars.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

public class ReturnCarData implements Serializable {
    private String regNumber;
    private long licenceId;
    private LocalDate returnDate;
    private int damage;
    private int tankPercent;

    public ReturnCarData() {
    }

    public ReturnCarData(String regNumber, long licenceId, LocalDate returnDate, int damage, int tankPercent) {
        this.regNumber = regNumber;
        this.licenceId = licenceId;
        this.returnDate = returnDate;
        this.damage = damage;
        this.tankPercent = tankPercent;
    }

    public String getRegNumber() {
        return regNumber;
    }

    public long getLicenceId() {
        return licenceId;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public int getDamage() {
        return damage;
    }

    public int getTankPercent() {
        return tankPercent;
    }

    public void setRegNumber(String regNumber) {
        this.regNumber = regNumber;
    }

    public void setLicenceId(long licenceId) {
        this.licenceId = licenceId;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }

    public void setDamage(int damage) {
        this.damage = damage;
    }

    public void setTankPercent(int tankPercent) {
        this.tankPercent = tankPercent;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;

        ReturnCarData that = (ReturnCarData) o;
        return licenceId == that.licenceId && damage == that.damage && tankPercent == that.tankPercent && Objects.equals(regNumber, that.regNumber) && Objects.equals(returnDate, that.returnDate);
    }

    @Override
    public int hashCode() {
        int result = Objects.hashCode(regNumber);
        result = 31 * result + Long.hashCode(licenceId);
        result = 31 * result + Objects.hashCode(returnDate);
        result = 31 * result + damage;
        result = 31 * result + tankPercent;
        return result;
    }

    @Override
    public String toString() {
        return "ReturnCarData{" +
                "regNumber='" + getRegNumber() + '\'' +
                ", licenceId=" + getLicenceId() +
                ", returnDate=" + getReturnDate() +
                ", damage=" + getDamage() +
                ", tankPercent=" + getTankPercent() +
                '}';
    }
}
