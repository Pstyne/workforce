import { getComputers, useComputers } from "../computers/ComputerData.js"
import { getDepartments, useDepartments } from "../departments/DepartmentData.js";
import { getLocations, useLocations } from "../locations/LocationData.js";
import { Employee } from "./Employee.js";
import { getEmployees, useEmployees } from "./EmployeeData.js"

export const EmployeeList = () => {
  getEmployees()
  .then(getComputers)
  .then(getDepartments)
  .then(getLocations)
  .then(() => {
    const employees = useEmployees();
    const computers = useComputers();
    const departments = useDepartments();
    const locations = useLocations();
    document.querySelector('#container').innerHTML = render(employees, computers, departments, locations);
  });
}

const render = (employeeCollection, computerCollection, departmentCollection, locationCollection) => {
  return employeeCollection.map( emp => {
    const employeeComputer = computerCollection.find(computer => computer.id === emp.computerId);
    const employeeDepartment = departmentCollection.find(department => department.id === emp.departmentId);
    const employeeLocation = locationCollection.find(location => location.id === emp.locationId);
    return Employee(emp, employeeComputer, employeeDepartment, employeeLocation);
  }).join('');
}