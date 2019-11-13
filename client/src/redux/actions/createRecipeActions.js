export const GET_USERNAME_VALUE = 'get_username_value';
export const GET_TITLE_VALUE = 'get_title_value';
export const GET_TEXT_VALUE = 'get_text_value';
export const GET_DATE_VALUE = 'get_date_value';
export const SUBMIT_NEW_RECIPE_FORM = 'submit_new_recipe_form';
export const DELETE_RECIPE = 'delete_recipe';
export const GET_RECIPE_ID = 'get_recipe_id';

export function getUsernameValue(value) {
  return {
    type: GET_USERNAME_VALUE,
    value
  }
}

export function getTitleValue(value) {
  return {
    type: GET_TITLE_VALUE,
    value
  }
}

export function getTextValue(value) {
  return {
    type: GET_TEXT_VALUE,
    value
  }
}

export function getDateValue(date) {
  return {
    type: GET_DATE_VALUE,
    date
  }
}

export function subitNewRecipeForm(event) {
  return {
    type: SUBMIT_NEW_RECIPE_FORM,
    event
  }
}

export function deleteRecipe() {
  return {
    type: DELETE_RECIPE
  }
}

export function getRecipeId(value) {
  return {
    type: GET_RECIPE_ID,
    value
  }
}
