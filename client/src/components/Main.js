import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import NavBar from './NavBar';
import RecipesList from './RecipesList';
import CreateNewRecipe from './CreateNewRecipe';
import Recipe from './Recipe';
import EditRecipe from './EditRecipe';
import Footer from './Footer';

export default class Main extends Component {
  componentDidMount() {
    this.props.loadData()
  }

  render(props) {
    return (
      <div className="wrapper">
        <div className="content header-img">
        <NavBar/>
        <main className="">
          <Switch>
            <Route exact path='/recipes/'>
              <RecipesList data={this.props.data}/>
            </Route>
            <Route path='/recipes/add/'>
              <CreateNewRecipe
                getUsernameValue={this.props.getUsernameValue} username={this.props.username}
                getTitleValue={this.props.getTitleValue} title={this.props.title}
                getTextValue={this.props.getTextValue} text={this.props.text}
                getDateValue={this.props.getDateValue} date={this.props.date}
                subitNewRecipeForm={this.props.subitNewRecipeForm}
              />
            </Route>
            <Route exact path='/recipes/:id'
              render={(props) =>
                <Recipe{...props}
                  data={this.props.data}
                  deleteRecipe={this.props.deleteRecipe}
                  getRecipeId={this.props.getRecipeId}
                  toggleClassLastVersion={this.props.toggleClassLastVersion}
                  show_last_version={this.props.show_last_version}
                  />
              }/>
            <Route exact path='/recipes/update/:id'
              render={(props) =>
                <EditRecipe{...props}
                  edit_mode_recipe_data={this.props.edit_mode_recipe_data}
                  editModeGetUsernameValue={this.props.editModeGetUsernameValue}
                  edit_mode_username={this.props.edit_mode_username}
                  editModeGetTitleValue={this.props.editModeGetTitleValue}
                  edit_mode_title={this.props.edit_mode_title}
                  editModeGetTextValue={this.props.editModeGetTextValue}
                  edit_mode_text={this.props.edit_mode_text}
                  editModeGetDateValue={this.props.editModeGetDateValue}
                  edit_mode_date={this.props.edit_mode_date}
                  editModeLoadRecipeData={this.props.editModeLoadRecipeData}
                  editModeSubmitForm={this.props.editModeSubmitForm}
                />
              }/>
            <Redirect to="/recipes/"/>
          </Switch>
        </main>
        </div>
        <footer className="footer">
          <Footer/>
        </footer>
      </div>
    )
  }
}
