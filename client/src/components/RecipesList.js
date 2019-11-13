import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipesList(props) {
  return(
    <div className="container ">
      {props.data === '' ?
        <div className="text-center">Loading...</div> :
          props.data.length === 0 ?
            <div>You dont have Recipe</div> :
            <div className="d-flex flex-wrap container justify-content-center ">
              {props.data.map(item => (
                <div key={item._id}
                  className="border-radius max-height-500  d-flex flex-column margin-10 bg-light max-width-400 container">
                  <h3 className="text-primary text-center">
                    {item.title}
                  </h3>
                  <div className="bg-secondary padding-10 border-radius-top">
                    <div className="text-success">
                      created at:
                    </div>
                    <div className="text-light">
                      {new Date(item.updatedAt).toString().split("GMT")[0]}
                    </div>
                  </div>
                  <div className="bg-secondary padding-10">
                    <div className="text-success">
                      Author:
                    </div>
                    <div className="text-light">
                      {item.username}
                    </div>
                  </div>
                  <div className="bg-secondary padding-10 border-radius-bottom">
                    <div className="text-success">
                      I want to cook this dish at:
                    </div>
                    <div className="text-light">
                      {new Date(item.date).toString().split("GMT")[0]}
                    </div>
                  </div>
                  <div className="pre-wrap margin-top-20">
                    {item.text.length > 70 ? item.text.substring(0, 70 - 3) + "..." : item.text}
                  </div>
                  <Link to={"/recipes/"+item._id}
                    className="btn btn-info align-self-end mt-auto p-2 bd-highlight margin-10">
                    Read more
                  </Link>
                </div>
              ))}
            </div>
      }
    </div>
  )
}
