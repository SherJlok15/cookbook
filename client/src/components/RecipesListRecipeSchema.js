import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipesListRecipeSchema(props) {
  return (
    <div key={props.item._id}
      className="border-radius max-height-500 max-width-90 min-width-90 d-flex flex-column margin-10 padding-10 bg-light container">
      <h3 className="text-success text-center">
        {props.item.title}
      </h3>
      <div>
        <div className="text-success">
          created at:
        </div>
        <div className="text-muted">
          {new Date(props.item.updatedAt).toString().split("GMT")[0]}
        </div>
      </div>
      <div className="">
        <div className="text-success">
          Author:
        </div>
        <div className="text-muted">
          {props.item.username}
        </div>
      </div>
      <div className="">
        <div className="text-success">
          I want to cook this dish at:
        </div>
        <div className="text-muted">
          {new Date(props.item.date).toString().split("GMT")[0]}
        </div>
      </div>
      <div className="pre-wrap margin-top-20 bg-white padding-10 margin-10">
        {props.item.text.length > 180 ? props.item.text.substring(0, 180 - 3) + "..." : props.item.text}
      </div>
      <Link to={"/recipes/"+props.item._id}
        className="btn btn-info align-self-end mt-auto p-2 bd-highlight margin-10">
        Read more
      </Link>
    </div>
  )
}
