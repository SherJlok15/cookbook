import React from 'react';
import RecipesListRecipeSchema from './RecipesListRecipeSchema';

export default function RecipesList(props) {
  return(
    <div className="container ">
      {props.data === '' ?
        <div className="text-center text-primary">Loading...</div> :
          props.data.length === 0 ?
            <div>You dont have Recipe</div> :
            <div className="d-flex flex-wrap container justify-content-center">
              {
                props.navbarSearchValue === '' ?
                props.data.map(item => (
                <RecipesListRecipeSchema item={item} key={item._id}/>
              )) :
              props.data.filter(item =>
                item.title.toLowerCase().includes(props.navbarSearchValue.toLowerCase())
              ).length === 0 ?
                <div className="text-center text-danger"><h3>NOT FOUND</h3></div> :
                props.data.filter(item =>
                  item.title.toLowerCase().includes(props.navbarSearchValue.toLowerCase())
                ).map(item => (
                <RecipesListRecipeSchema item={item} key={item._id}/>
                ))
              }
            </div>
      }
    </div>
  )
}
