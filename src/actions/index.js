import { admins } from '../reducers/testData';


export const OPEN_PAGE = 'OPEN_PAGE';
export const TOGGLE_EDIT = 'EDIT_RULE';
export const ADD_RULE = 'ADD_RULE';
export const DELETE_RULE = 'DELETE_RULE';
export const EDIT_RULE = 'EDIT_RULE';
export const CLOSE_FORM = 'CLOSE_FORM';
export const SAVE_SETTINGS = 'SAVE_SETTINGS';
export const CHECK_SIGN_IN = 'CHECK_SIHN_IN';
export const LOGOUT = 'LOGOUT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const EDIT_ACCOUNT = 'EDIT_ACCOUNT';


export function toggleMenu(menuType) {
  return {
    type: OPEN_PAGE,
    payload: menuType,
  }
}

export function addRule(data) {
  return {
    type: ADD_RULE,
    payload: data,
  }
}

export function deleteRule(id) {
  return {
    type: DELETE_RULE,
    payload: id,
  }
}

export function editRule(values, id) {
  return {
    type: EDIT_RULE,
    payload: { values, id },
  }
}

export function saveSettings(values) {
  return {
    type: SAVE_SETTINGS,
    payload: values,
  }
}

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