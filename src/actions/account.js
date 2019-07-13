import {  admins } from './testData';

export const CHECK_SIGN_IN = 'CHECK_SIHN_IN';
export const LOGOUT = 'LOGOUT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const EDIT_ACCOUNT = 'EDIT_ACCOUNT';

export function checkSignIn(name, password) {
  let authorized = admins.map(item => {
    return (item.name === name && item.password === password)
  });
  authorized = authorized.includes(true);
  return {
    type: CHECK_SIGN_IN,
    payload: { name, password, authorized },
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}

export function deleteAccount(id) {
  return {
    type: DELETE_ACCOUNT,
    payload: id,
  }
}

export function createAccount(values) {
  return {
    type: CREATE_ACCOUNT,
    payload: values,
  }
}

export function editAccount(id, values) {
  return {
    type: EDIT_ACCOUNT,
    payload: {id, values},
  }
}