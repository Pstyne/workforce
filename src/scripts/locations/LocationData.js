let locations = [];

export const useLocations = () => {
  return locations.slice();
}

export const getLocations = () => {
  return fetch('http://localhost:8088/locations')
  .then(res => res.json())
  .then(data => locations = data);
}