import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function CreateNewRecipe(props) {
  return (
    <div className="bg-light container vh-100">
      <h3 className="text-center text-muted">Create new recipe</h3>
      <form onSubmit={(event) => props.subitNewRecipeForm(event)}
        className="container d-flex flex-column justify-content-center ">
        <div className="form-group container">
          <label className="text-primary">Username: </label>
          <input
            name="username"
            type='text'
            required
            value={props.username}
            onChange={(event)=> props.getUsernameValue(event.target.value)}
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
            value={props.title}
            onChange={(event)=> props.getTitleValue(event.target.value)}
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
            value={props.text}
            onChange={(event)=> props.getTextValue(event.target.value)}
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
            selected={props.date}
            onChange={props.getDateValue}
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
