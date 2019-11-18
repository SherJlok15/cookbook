import axios from 'axios';
export const SAVE_DATA = 'save_data';
export const TOGGLE_CLASS_LAST_VERSION = 'toggele_class_last_version';
export const NAVBAR_GET_SEARCH_INPUT_VALUE = 'navbar_get_search_input_value';
export const NAVBAR_SEARCH_INPUT_RESET_VALUE = 'navbar_search_input_reset_value';

export function loadData() {
  return(dispatch) => {
    axios.get('http://localhost:5000/recipes')
      .then(res => {
        dispatch(saveData(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
};

export function saveData(value){
  return {
    type: SAVE_DATA,
    value
  }
};

export function toggleClassLastVersion(){
  return {
    type: TOGGLE_CLASS_LAST_VERSION,
  }
};

export function navbarGetSearchInputValue(value){
  return {
    type: NAVBAR_GET_SEARCH_INPUT_VALUE,
    value
  }
};

export function navbarSearchInputResetValue(){
  return {
    type: NAVBAR_SEARCH_INPUT_RESET_VALUE,
  }
};
