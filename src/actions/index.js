export const OPEN_PAGE = 'OPEN_PAGE';


export function toggleMenu(menuType) {
  return {
    type: OPEN_PAGE,
    payload: menuType,
  }
}