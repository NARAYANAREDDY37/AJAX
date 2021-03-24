import { BrainHttp } from "./api/BrainHttp.js";
const serverURL = `http://127.0.0.1:3000/api`;

//DOM Content Loaded

window.addEventListener("DOMContentLoaded", () => {
  fetchAllEmployees();
});

let fetchAllEmployees = () => {
  let http = new BrainHttp();
  let url = `${serverURL}/employees`;
  http.get(url, (error, employees) => {
    if (error) throw Error;
    let employeeRows = "";
    for (let employee of employees) {
      employeeRows += `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.first_name}</td>
                                <td>${employee.last_name}</td>
                                <td>${employee.email}</td>
                                <td>${employee.gender}</td>
                                <td>${employee.ip_address}</td>
                                <td>
                                        <button class="btn btn-secondary mt-0 btn-sm update form-inline-group">Update</button>
                                        <button class="btn btn-danger mt-0 btn-sm delete form-inline-group">Delete</button>                                 
                                </td>
                            </tr>`;
    }
    document.querySelector("#table-body").innerHTML = employeeRows;
  });
};

//add employee form
