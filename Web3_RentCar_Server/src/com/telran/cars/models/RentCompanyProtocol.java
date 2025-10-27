package com.telran.cars.models;

import com.telran.cars.dto.*;
import telran.net.protocol.ProtocolJava;
import telran.net.protocol.RequestJava;
import telran.net.protocol.ResponseJava;
import telran.net.protocol.TCPResponseCode;

import java.io.Serializable;

import static com.telran.cars.api.APIConstants.*;
import static telran.net.protocol.TCPResponseCode.*;

public class RentCompanyProtocol implements ProtocolJava {
    IRentCompany company;

    public RentCompanyProtocol(IRentCompany company) {
        this.company = company;
    }

    @Override
    public ResponseJava getResponse(RequestJava request) {
        String type = request.requestType;
        Serializable data = request.requestData;

        switch (type) {
            case ADD_CAR:
                return _car_add(data);
            case GET_CAR:
                return _car(data);
            case RENT_CAR:
                return _car_rent(data);
            case REMOVE_CAR:
                return _car_remove(data);
            case RETURN_CAR:
                return _car_return(data);
            // ==== Driver Cases ====
            case ADD_DRIVER:
                return _driver_add(data);
            case GET_DRIVER:
                return _driver(data);
            case GET_DRIVER_CARS:
                return _driver_cars(data);
            case GET_CAR_DRIVERS:
                return _drivers_car(data);
            case GET_MOST_ACTIVE_DRIVER:
                return _drivers_active(data);
            // ==== Model Cases ====
            case ADD_MODEL:
                return _model_add(data);
            case GET_MODEL:
                return _model(data);
            case REMOVE_MODEL:
                return _model_remove(data);
            case GET_MODEL_CARS:
                return _model_cars(data);
            case GET_MODELS_CAR:
                return _models(data);
            case GET_MOST_POPULAR_MODELS:
                return _models_popular(data);
            case GET_MOST_PROFITABLE_MODELS:
                return _models_profitable(data);
            // ==== Record Cases ====
            case GET_RECORDS:
                return _records(data);
            case "SAVE":
                return _save(data);
            default:
                return new ResponseJava(TCPResponseCode.UNKNOWN,null);
        }
    }
    // ===== UTILITY =====
    private ResponseJava wrongRequest(String message){
        return new ResponseJava(WRONG_REQUEST, message);
    }

    private ResponseJava _save(Serializable data) {
        ((RentCompanyEmbedded) company).save("company.data");
        return new ResponseJava(OK, null);
    }

    // ===== CAR =====
    private ResponseJava _car_add(Serializable data) {
        try {
            Serializable responseData = company.addCar((Car) data);
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _car(Serializable data) {
        try {
            Serializable responseData = company.getCar((String) data);
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _car_rent(Serializable data) {
        try {
            RentCarData rentCarData = (RentCarData) data;
            Serializable responseData = company.rentCar(
                    rentCarData.getRegNumber(),
                    rentCarData.getLicenseId(),
                    rentCarData.getRentDate(),
                    rentCarData.getRentDays());
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _car_remove(Serializable data) {
        try {
            Serializable responseData = company.removeCar((String) data);
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _car_return(Serializable data) {
        try {
            ReturnCarData returnCarData = (ReturnCarData) data;
            Serializable responseData = company.returnCar(
                    returnCarData.getRegNumber(),
                    returnCarData.getLicenceId(),
                    returnCarData.getReturnDate(),
                    returnCarData.getDamage(),
                    returnCarData.getTankPercent()
            );
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    // ===== DRIVER =====
    private ResponseJava _driver_add(Serializable data) {
        try {
            Serializable responseData = company.addDriver((Driver) data);
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _driver(Serializable data) {
        try {
            Serializable responseData = company.getDriver((long) data);
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _driver_cars(Serializable data) {
        try {
            Serializable responseData = (Serializable) company.getCarsByDriver((long) data);
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _drivers_car(Serializable data) {
        try {
            Serializable responseData = (Serializable) company.getDriversByCar((String) data);
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _drivers_active(Serializable data) {
        try {
            Serializable responseData = (Serializable) company.getMostActiveDrivers();
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    // ===== MODEL =====
    private ResponseJava _model_add(Serializable data) {
        try {
            Serializable responseData = company.addModel((Model) data);
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _model(Serializable data) {
        try {
            Serializable responseData = company.getModel((String) data);
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _model_remove(Serializable data) {
        try {
            Serializable responseData = (Serializable) company.removeModel((String) data);
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _model_cars(Serializable data) {
        try {
            Serializable responseData = (Serializable) company.getCarsByModel((String) data);
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _models(Serializable data) {
        try {
            Serializable responseData = (Serializable) company.getModelNames();
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _models_popular(Serializable data) {
        try {
            StatisticsData statData = (StatisticsData) data;
            Serializable responseData = (Serializable) company.getMostPopularCarModels(
                    statData.getFromDate(),
                    statData.getToDate(),
                    statData.getFromAge(),
                    statData.getToAge()
            );
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    private ResponseJava _models_profitable(Serializable data) {
        try {
            StatisticsData statData = (StatisticsData) data;
            Serializable responseData = (Serializable) company.getMostProfitableCarModels(
                    statData.getFromDate(),
                    statData.getToDate()
            );
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }

    // ===== RECORD =====
    private ResponseJava _records(Serializable data) {
        try {
            StatisticsData statData = (StatisticsData) data;
            Serializable responseData = (Serializable) company.getRentRecordsAtDate(
                    statData.getFromDate(),
                    statData.getToDate()
            );
            return new ResponseJava(OK, responseData);
        } catch (Exception e) {
            return wrongRequest(e.getMessage());
        }
    }
}
