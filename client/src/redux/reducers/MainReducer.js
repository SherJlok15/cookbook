import { SAVE_DATA, TOGGLE_CLASS_LAST_VERSION } from '../actions/mainActions';

const initialState = {
  data: '',
  show_last_version: false
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
    default:
      return state
  }
}
