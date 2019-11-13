import axios from 'axios';
export const EDIT_MODE_GET_USERNAME_VALUE = 'edit_mode_get_username_value';
export const EDIT_MODE_GET_TITLE_VALUE = 'edit_mode_get_title_value';
export const EDIT_MODE_GET_TEXT_VALUE = 'edit_mode_get_text_value';
export const EDIT_MODE_GET_DATE_VALUE = 'edit_mode_get_date_value';
export const EDIT_MODE_SUBMIT_FORM = 'edit_mode_submit_form';
export const EDIT_MODE_LOAD_RECIPE_DATA ='edit_mode_load_recipe_data';
export const EDIT_MODE_SAVE_RECIPE_DATA ='edit_mode_save_recipe_data';

export function editModeGetUsernameValue(value) {
  return {
    type: EDIT_MODE_GET_USERNAME_VALUE,
    value
  }
}

export function editModeGetTitleValue(value) {
  return {
    type: EDIT_MODE_GET_TITLE_VALUE,
    value
  }
}

export function editModeGetTextValue(value) {
  return {
    type: EDIT_MODE_GET_TEXT_VALUE,
    value
  }
}

export function editModeGetDateValue(date) {
  return {
    type: EDIT_MODE_GET_DATE_VALUE,
    date
  }
}

export function editModeSubmitForm(event) {
  return {
    type: EDIT_MODE_SUBMIT_FORM,
    event
  }
}

export function editModeLoadRecipeData(value) {
  return(dispatch) => {
    axios.get('/recipes/'+value)
      .then(res => {
        dispatch(editModeSaveRecipeData(res.data))
      })
  }
}

export function editModeSaveRecipeData(value) {
  return {
    type: EDIT_MODE_SAVE_RECIPE_DATA,
    value
  }
}
