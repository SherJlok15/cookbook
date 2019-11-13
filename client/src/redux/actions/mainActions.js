import axios from 'axios';
export const SAVE_DATA = 'save_data';
export const TOGGLE_CLASS_LAST_VERSION = 'toggele_class_last_version';

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
