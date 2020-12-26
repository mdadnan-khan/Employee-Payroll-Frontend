import config from "../config/config";
import AxiosService from "./axios-service.js";

export default class EmployeeService {
  baseUrl = config.baseUrl;
  getAllEmployees() {
    return AxiosService.getService(`${this.baseUrl}get`);
  }

  getEmployee(id) {
    return AxiosService.getService(`${this.baseUrl}get/${id}`);
  }

  addEmployee(data) {
    return AxiosService.postService(`${this.baseUrl}create`, data);
  }

  deleteEmployee(id) {
    return AxiosService.deleteService(`${this.baseUrl}delete/${id}`);
  }

  updateEmployee(data) {
    return AxiosService.putService(
      `${this.baseUrl}update/${data.employeeId}`,
      data
    );
  }
}
