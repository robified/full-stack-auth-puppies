import tokenService from '../services/tokenService';
const BASE_URL = '/api/puppies';

export function getAll() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options, {mode: "cors"})
  .then(res => res.json());
}

export function create(pup) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(pup)
  }, {mode: "cors"}).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }, {mode: "cors"}).then(res => res.json());
}

export function update(pup) {
  return fetch(`${BASE_URL}/${pup._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(pup)
  }, {mode: "cors"}).then(res => res.json());
}