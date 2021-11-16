let departments = [];

export const useDepartments = () => {
  return departments.slice();
}

export const getDepartments = () => {
  return fetch('http://localhost:8088/departments')
  .then(res => res.json())
  .then(data => departments = data);
}