export const OPEN_PAGE = 'OPEN_PAGE';
export const TOGGLE_EDIT = 'EDIT_RULE';
export const ADD_RULE = 'ADD_RULE';
export const DELETE_RULE = 'DELETE_RULE';
export const EDIT_RULE = 'EDIT_RULE';
export const CLOSE_FORM = 'CLOSE_FORM';


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
  console.log(values)
  return {
    type: EDIT_RULE,
    payload: { values, id },
  }
}