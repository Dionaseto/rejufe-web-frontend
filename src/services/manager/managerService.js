import * as requesterService from '../requester/requesterService';

const isFailureStatus = (result) => !result || result.status >= 400;

export const getById = async (id) => {
  const response = await requesterService.getById(id);
  if (isFailureStatus(response)) throw new Error('Problem with api response');
  return response.data;
};

export const getAllUsers = async () => {
  let times = 0;
  let users = [];
  let response;
  do {
    response = await requesterService.getAllUsers(times);
    if (isFailureStatus(response)) throw new Error('Problem with api response');
    users = users.concat(response.data);
    times += 1;
  } while (response.data.length > 0);
  return users;
};

export const getUserEmailByUsername = async (user) => {
  const response = await requesterService.getUserEmailByUsername(user);
  if (isFailureStatus(response)) throw new Error('Problem with api response');
  return response.data;
};

export const changeUserTypeById = async (typeChange, id) => {
  const response = await requesterService.changeUserTypeById(typeChange, id);
  if (isFailureStatus(response)) throw new Error('Problem with api response');
  return response.data;
};

export const login = async (user) => {
  const response = await requesterService.login(user);
  if (isFailureStatus(response)) throw new Error('Problem with api response');
  const usuario = response.data.user;
  const fields = Object.keys(usuario).find((field) => field.includes('_id'));
  const id = usuario[fields];
  const userStorage = {
    name: response.data.user.name,
    email: response.data.user.email,
    type: response.data.user.type,
    acessToken: response.data.accessToken,
    id,
  };
  localStorage.setItem('user', JSON.stringify(userStorage));
  return response;
};

export const sendResetEmail = async (email) => {
  const response = await requesterService.sendResetEmail(JSON.parse(email));
  if (isFailureStatus(response)) {
    throw new Error('Problem with api response');
  }
  return response;
};
