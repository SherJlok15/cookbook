import { EDIT_MODE_GET_USERNAME_VALUE,
  EDIT_MODE_GET_TITLE_VALUE,
  EDIT_MODE_GET_TEXT_VALUE,
  EDIT_MODE_GET_DATE_VALUE,
  EDIT_MODE_SUBMIT_FORM,
  EDIT_MODE_SAVE_RECIPE_DATA,
} from '../actions/editRecipeActions';
import axios from 'axios';

const initialState = {
  username: '',
  title: '',
  text: '',
  date: '',
  update: true,
  recipeId: '',
  edit_mode_recipe_data: ''
}

export default function EditRecipeReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_MODE_GET_USERNAME_VALUE:
      return {
        ...state,
        username: action.value
      }
    case EDIT_MODE_GET_TITLE_VALUE:
      return {
        ...state,
        title: action.value
      }
    case EDIT_MODE_GET_TEXT_VALUE:
      return {
        ...state,
        text: action.value
      }
    case EDIT_MODE_GET_DATE_VALUE:
      return {
        ...state,
        date: action.date
      }
    case EDIT_MODE_SUBMIT_FORM:
      action.event.preventDefault();
      const editTime = new Date();
      const editedRecipe = {
        username: state.username,
        title: state.title,
        text: state.text,
        date: state.date,
        update: state.update,
        edittime: editTime
      }
      axios.post('/recipes/update/'+state.recipeId, editedRecipe)
        .then(res => console.log(res.body))
      window.location = '/recipes/'+state.recipeId;

      return {
        ...state,
        username: '',
        title: '',
        text: '',
        date: '',
      }
    case EDIT_MODE_SAVE_RECIPE_DATA:
      return {
        ...state,
        edit_mode_recipe_data: [action.value],
        username: action.value.username,
        title: action.value.title,
        text: action.value.text,
        date: new Date(action.value.date),
        recipeId: action.value._id

      }
    default:
      return state
  }
}
