import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateNewRecipe extends Component {
  componentDidUpdate() {
    if (this.props.navbarSearchValue.length > 0 ) {
      window.location = '/recipes/';
    }
  }

  render (props) {
    return (
      <div className="bg-light container vh-100">
        <h3 className="text-center text-muted">Create new recipe</h3>
        <form onSubmit={(event) => this.props.subitNewRecipeForm(event)}
          className="container d-flex flex-column justify-content-center max-width-90 min-width-90">
          <div className="form-group container">
            <label className="text-primary">Username: </label>
            <input
              name="username"
              type='text'
              required
              value={this.props.username}
              onChange={(event)=> this.props.getUsernameValue(event.target.value)}
              placeholder="username"
              title="minlength 3 characters"
              className="form-control"
            />
          <small className="form-text text-muted">minlength 3 characters</small>
          </div>
          <div className="form-group container">
            <label className="text-primary">Title: </label>
            <input
              name="title"
              type='text'
              required
              value={this.props.title}
              onChange={(event)=> this.props.getTitleValue(event.target.value)}
              placeholder="recipe title"
              title="minlength 3 characters"
              className="form-control"
            />
          <small className="form-text text-muted">minlength 3 characters</small>
          </div>
          <div className="form-group container">
            <label className="text-primary">Text: </label>
            <textarea
              name="text"
              required
              value={this.props.text}
              onChange={(event)=> this.props.getTextValue(event.target.value)}
              placeholder="recipe text"
              title="minlength 3 characters"
              className="form-control"
              minLength="3"
              wrap="soft"
              col="10"
              rows="10"
            />
          <small className="form-text text-muted">minlength 3 characters</small>
          </div>
          <div className="form-group container d-flex align-items-center">
            <label className="control-label text-primary margin-right-10">
              I want to cook this dish at:
            </label>
            <DatePicker
              selected={this.props.date}
              onChange={this.props.getDateValue}
              showTimeSelect timeIntervals={5}
              timeCaption="time" dateFormat="MMMM d, yyyy h:mm aa"
              placeholder="date"
              title="back in time"
              required
              className="form-control"
            />
          </div>
          <div className="form-group d-flex justify-content-center container">
            <input type="submit" value="Create new Recipe" className="btn btn-primary block"/>
          </div>
        </form>
      </div>
    )
  }

}
