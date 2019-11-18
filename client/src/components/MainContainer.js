import { connect } from 'react-redux';
import Main from './Main';
import {
  loadData,
  toggleClassLastVersion,
  navbarGetSearchInputValue,
  navbarSearchInputResetValue,
} from '../redux/actions/mainActions';

import {
  getUsernameValue,
  getTitleValue,
  getTextValue,
  getDateValue,
  subitNewRecipeForm,
  deleteRecipe,
  getRecipeId } from '../redux/actions/createRecipeActions';

import { editModeGetUsernameValue,
  editModeGetTitleValue,
  editModeGetTextValue,
  editModeGetDateValue,
  editModeLoadRecipeData,
  editModeSubmitForm,
} from '../redux/actions/editRecipeActions';

function mapStateToProps(state) {
  return {
    data: state.main.data,
    username: state.createRecipe.username,
    title: state.createRecipe.title,
    text: state.createRecipe.text,
    date: state.createRecipe.date,
    edit_mode_username: state.editRecipe.username,
    edit_mode_title: state.editRecipe.title,
    edit_mode_text: state.editRecipe.text,
    edit_mode_date: state.editRecipe.date,
    edit_mode_recipe_data: state.editRecipe.edit_mode_recipe_data,
    show_last_version: state.main.show_last_version,
    navbarSearchValue: state.main.navbarSearchValue,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadData()),
    getUsernameValue: (value) => dispatch(getUsernameValue(value)),
    getTitleValue: (value) => dispatch(getTitleValue(value)),
    getTextValue: (value) => dispatch(getTextValue(value)),
    getDateValue: (date) => dispatch(getDateValue(date)),
    subitNewRecipeForm: (event) => dispatch(subitNewRecipeForm(event)),
    deleteRecipe: (value) => dispatch(deleteRecipe(value)),
    getRecipeId: (value) => dispatch(getRecipeId(value)),
    editModeGetUsernameValue: (value) => dispatch(editModeGetUsernameValue(value)),
    editModeGetTitleValue: (value) => dispatch(editModeGetTitleValue(value)),
    editModeGetTextValue: (value) => dispatch(editModeGetTextValue(value)),
    editModeGetDateValue: (date) => dispatch(editModeGetDateValue(date)),
    editModeLoadRecipeData: (value) => dispatch(editModeLoadRecipeData(value)),
    editModeSubmitForm: (event) => dispatch(editModeSubmitForm(event)),
    toggleClassLastVersion: () => dispatch(toggleClassLastVersion()),
    navbarGetSearchInputValue: (value) => dispatch(navbarGetSearchInputValue(value)),
    navbarSearchInputResetValue: () => dispatch(navbarSearchInputResetValue()),
  }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
