import { getComputers, useComputers } from "../computers/ComputerData.js"
import { getDepartments, useDepartments } from "../departments/DepartmentData.js";
import { Employee } from "./Employee.js";
import { getEmployees, useEmployees } from "./EmployeeData.js"

export const EmployeeList = () => {
  getEmployees()
  .then(getComputers)
  .then(getDepartments)
  .then(() => {
    const employees = useEmployees();
    const computers = useComputers();
    const departments = useDepartments();
    document.querySelector('#container').innerHTML = render(employees, computers, departments);
  });
}

const render = (employeeCollection, computerCollection, departmentCollection) => {
  return employeeCollection.map( emp => {
    const employeeComputer = computerCollection.find(computer => computer.id === emp.computerId);
    const employeeDepartment = departmentCollection.find(department => department.id === emp.departmentId);
    return Employee(emp, employeeComputer, employeeDepartment);
  }).join('');
}