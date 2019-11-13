import axios from 'axios';
import {
  GET_USERNAME_VALUE,
  GET_TITLE_VALUE,
  GET_TEXT_VALUE,
  GET_DATE_VALUE,
  SUBMIT_NEW_RECIPE_FORM,
  DELETE_RECIPE,
  GET_RECIPE_ID } from '../actions/createRecipeActions';

const initialState = {
  username: '',
  title: '',
  text: '',
  date: '',
  update: false,
  recipeId: ''
}

export default function CreateRecipeReducer(state = initialState, action) {
  switch(action.type) {
    case GET_USERNAME_VALUE:
      return {
        ...state,
        username: action.value
      }
    case GET_TITLE_VALUE:
      return {
        ...state,
        title: action.value
      }
    case GET_TEXT_VALUE:
      return {
        ...state,
        text: action.value
      }
    case GET_DATE_VALUE:
      return {
        ...state,
        date: action.date
      }
    case SUBMIT_NEW_RECIPE_FORM:
      action.event.preventDefault();
      const newRecipe = {
        username: state.username,
        title: state.title,
        text: state.text,
        date: state.date,
        update: state.update,
        lastVersions: [],
        comments: [],
      }
      axios.post('/recipes/add', newRecipe)
        .then(res => console.log(res.body))
      window.location = '/recipes/'
      return {
        ...state,
        username: '',
        title: '',
        text: '',
        date: '',
      }
    case DELETE_RECIPE:
      axios.delete('/recipes/'+state.recipeId)
        .then(res => console.log(res.data))
      window.location = '/recipes/'
      return {
        ...state,
        recipeId: ''
      }
    case GET_RECIPE_ID:
      return {
        ...state,
        recipeId: action.value
      }
    default:
      return state;
  }
}
