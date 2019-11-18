import {
  SAVE_DATA, TOGGLE_CLASS_LAST_VERSION,
  NAVBAR_GET_SEARCH_INPUT_VALUE,
  NAVBAR_SEARCH_INPUT_RESET_VALUE,
 } from '../actions/mainActions';

const initialState = {
  data: '',
  show_last_version: false,
  navbarSearchValue: ''
}

export default function MainReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        data: action.value
      }
    case TOGGLE_CLASS_LAST_VERSION:
      const lastVersionBool = state.show_last_version === true ? false : true;
      return {
        ...state,
        show_last_version: lastVersionBool
      }
    case NAVBAR_GET_SEARCH_INPUT_VALUE:
      return {
        ...state,
        navbarSearchValue:action.value
      }
    case NAVBAR_SEARCH_INPUT_RESET_VALUE:
      return {
        ...state,
        navbarSearchValue: ''
      }
    default:
      return state
  }
}
