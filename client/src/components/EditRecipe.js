import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditRecipe extends Component {
  componentDidMount() {
    this.props.editModeLoadRecipeData(this.props.match.params.id);

  }
  render(props) {
    return(
      <div className="bg-light container vh-100">
      {this.props.edit_mode_recipe_data === '' ?
       <div className="text-center">Loading...</div> :
       this.props.edit_mode_recipe_data.map(item =>
         <div key={item._id}>
           <h3 className="text-center text-muted">Edit recipe</h3>
           <form onSubmit={(event) => this.props.editModeSubmitForm(event)}
             className="container d-flex flex-column justify-content-center">
             <div className="form-group container">
               <label className="text-primary">Username: </label>
               <input
                 type="text"
                 required
                 value={this.props.edit_mode_username}
                 onChange={(event) => this.props.editModeGetUsernameValue(event.target.value)}
                 className="form-control"
                />
                <small className="form-text text-muted">minlength 3 characters</small>
             </div>
             <div className="form-group container">
               <label className="text-primary">Title: </label>
               <input
                 type="text"
                 required
                 value={this.props.edit_mode_title}
                 onChange={(event) => this.props.editModeGetTitleValue(event.target.value)}
                 className="form-control"
                />
                <small className="form-text text-muted">minlength 3 characters</small>
             </div>
             <div className="form-group container">
               <label className="text-primary">Text: </label>
               <textarea
                 className="form-control"
                 minLength="3"
                 wrap="soft"
                 col="10"
                 rows="10"
                 type="text"
                 required
                 value={this.props.edit_mode_text}
                 onChange={(event) => this.props.editModeGetTextValue(event.target.value)}
                />
                <small className="form-text text-muted">minlength 3 characters</small>
             </div>
             <div className="form-group container d-flex align-items-center">
               <label className="control-label text-primary margin-right-10">
                 I want to cook this dish at:
               </label>
               <DatePicker
                 selected={this.props.edit_mode_date}
                 onChange={this.props.editModeGetDateValue}
                 showTimeSelect timeIntervals={5}
                 timeCaption="time" dateFormat="MMMM d, yyyy h:mm aa"
                 placeholder="date"
                 title="back in time"
                 required
                 className="form-control"
               />
             </div>
             <div className="form-group d-flex justify-content-center container">
               <input type="submit" value="Edit Recipe" className="btn btn-primary block"/>
             </div>
           </form>
         </div>
       )
      }
      </div>
    )
  }
}
