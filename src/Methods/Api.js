import axios from 'axios';

const baseUrl = 'https://localhost:7265/Person';

async function sendRequest(config) {
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getPersons() {
  const config = {
    method: 'get',
    url: baseUrl,
  };

  return await sendRequest(config);
}

async function createPerson(newPerson) {
  const config = {
    method: 'post',
    url: baseUrl,
    data: newPerson,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await sendRequest(config);
}

async function removePerson(personId) {
  const config = {
    method: 'delete',
    url: `${baseUrl}/${personId}`,
  };

  await sendRequest(config);
}

async function savePersonEditing(person) {
  const config = {
    method: 'put',
    url: baseUrl,
    data: person,
  };

  await sendRequest(config);
}

export { getPersons, createPerson, removePerson, savePersonEditing };
