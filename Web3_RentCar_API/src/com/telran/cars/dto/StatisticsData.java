package com.telran.cars.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

public class StatisticsData implements Serializable {
    private LocalDate fromDate;
    private LocalDate toDate;
    private int fromAge;
    private int toAge;

    public StatisticsData() {
    }

    public StatisticsData(LocalDate fromDate, LocalDate toDate, int fromAge, int toAge) {
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.fromAge = fromAge;
        this.toAge = toAge;
    }

    public StatisticsData(LocalDate fromDate, LocalDate toDate) {
        this.fromDate = fromDate;
        this.toDate = toDate;
    }

    public LocalDate getFromDate() {
        return fromDate;
    }

    public LocalDate getToDate() {
        return toDate;
    }

    public int getFromAge() {
        return fromAge;
    }

    public int getToAge() {
        return toAge;
    }

    public void setFromDate(LocalDate fromDate) {
        this.fromDate = fromDate;
    }

    public void setToDate(LocalDate toDate) {
        this.toDate = toDate;
    }

    public void setFromAge(int fromAge) {
        this.fromAge = fromAge;
    }

    public void setToAge(int toAge) {
        this.toAge = toAge;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;

        StatisticsData that = (StatisticsData) o;
        return fromAge == that.fromAge && toAge == that.toAge && Objects.equals(fromDate, that.fromDate) && Objects.equals(toDate, that.toDate);
    }

    @Override
    public int hashCode() {
        int result = Objects.hashCode(fromDate);
        result = 31 * result + Objects.hashCode(toDate);
        result = 31 * result + fromAge;
        result = 31 * result + toAge;
        return result;
    }

    @Override
    public String toString() {
        return "StatisticsData{" +
                "fromDate=" + getFromDate() +
                ", toDate=" + getToDate() +
                ", fromAge=" + getFromAge() +
                ", toAge=" + getToAge() +
                '}';
    }
}
