import { getComputers, useComputers } from "../computers/ComputerData.js"
import { Employee } from "./Employee.js";
import { getEmployees, useEmployees } from "./EmployeeData.js"

export const EmployeeList = () => {
  getEmployees()
  .then(getComputers)
  .then(() => {
    const employees = useEmployees();
    const computers = useComputers();
    document.querySelector('#container').innerHTML = render(employees, computers);
  });
}

const render = (employeeCollection, computerCollection) => {
  return employeeCollection.map( emp => {
    const employeeComputer = computerCollection.find(computer => computer.id === emp.computerId);
    return Employee(emp, employeeComputer);
  }).join('');
}