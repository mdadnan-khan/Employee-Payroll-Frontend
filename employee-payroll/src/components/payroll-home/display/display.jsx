import React from "react";
import { withRouter } from "react-router-dom";
import "./display.css"
import profile1 from "../../../assets/profile-images/Ellipse -1.png";
import editIcon from "../../../assets/icons/create-black-18dp.svg";
import deleteIcon from "../../../assets/icons/delete-black-18dp.svg"
import EmployeeService from "../../../services/employee-service.js";

const Display = (props) => {

  const employeeService = new EmployeeService();

  const update = (employeeId) => {
    props.history.push(`payroll-form/${employeeId}`);
  };

  const remove = (employeeId) => {
    employeeService
      .deleteEmployee(employeeId)
      .then((data) => {
        console.log("data after delete", data);
        props.getAllEmployee();
      })
      .catch((err) => {
        console.log("error after delete", err);
      });
  };

  return (
    <table id="display" className="display">
      <tbody>
        <tr key={-1}>
          <th> Profile Image </th>
          <th> Name </th>
          <th> Gender </th>
          <th> Department </th>
          <th> Salary </th>
          <th> Start Date </th>
          <th> Actions </th>
        </tr>
        {props.employeeArray &&
          props.employeeArray.map((element, ind) => (
            <tr key={ind}>
              <td>
                <img className="profile" src={profile1} alt="profile" />
              </td>
              <td> {element.name} </td>
              <td> {element.gender} </td>
              <td>
                {element.department &&
                  element.department.map(dept => (
                    <div className="dept-label"> {dept}</div>
                  ))}
              </td>
              <td> {element.salary} </td>
              <td> {element.startDate} </td>
              <td> <img onClick={() => remove(element.id)} src={deleteIcon} alt="delete" />
                <img onClick={() => update(element.id)} src={editIcon} alt="edit" />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default withRouter(Display);
