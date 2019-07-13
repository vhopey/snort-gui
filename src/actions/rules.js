import { rules } from './testData';

export const FETCH_RULES = 'FETCH_RULES';
export const ADD_RULE = 'ADD_RULE';
export const DELETE_RULE = 'DELETE_RULE';
export const EDIT_RULE = 'EDIT_RULE';

export function fetchRules() {
  return {
    type: FETCH_RULES,
    payload: rules,
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