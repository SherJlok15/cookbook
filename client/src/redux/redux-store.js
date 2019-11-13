import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MainReducer from './reducers/MainReducer';
import CreateRecipeReducer from './reducers/CreateRecipeReducer';
import EditRecipeReducer from './reducers/EditRecipeReducer';

const reducers = combineReducers({
  main: MainReducer,
  createRecipe: CreateRecipeReducer,
  editRecipe: EditRecipeReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
