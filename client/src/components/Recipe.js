import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Recipe extends Component{
  componentDidMount() {
    this.props.getRecipeId(this.props.match.params.id)
  }
  render(props) {
    return(
      <div className="container  bg-light">
      {this.props.data === '' ?
        <div className="text-center">Loading...</div> :
        this.props.data.filter((item) => {
          return item._id === this.props.match.params.id
        }).map(item =>
          <div key={item._id} className="container">
            <div className="d-flex justify-content-end padding-10">
              <Link to={'/recipes/update/'+this.props.match.params.id}
                className="btn btn-success margin-right-10">
                edit
              </Link>
              <span onClick={this.props.deleteRecipe}
                className="btn btn-danger">
                delete
              </span>
            </div>
            <h3 className="text-primary text-center">{item.title}</h3>
            <div className="padding-10 ">
              <div className="text-success">
                created at:
              </div>
              <div className="text-secondary">
                {new Date(item.updatedAt).toString().split("GMT")[0]}
              </div>
            </div>
            <div className="padding-10">
              <div className="text-success">
                Author:
              </div>
              <div className="text-secondary">
                {item.username}
              </div>
            </div>
            <div className="padding-10">
              <div className="text-success">
                I want to cook this dish at:
              </div>
              <div className="text-secondary">
                {new Date(item.date).toString().split("GMT")[0]}
              </div>
            </div>
            <div className="pre-wrap margin-top-20 d-flex justify-content-center padding-10 bg-white">
              {item.text}
            </div>
            <div onClick={this.props.toggleClassLastVersion}
              className="btn btn-secondary margin-10">
              Last version
            </div>
            <div className={this.props.show_last_version === true ? 'show h-100' : 'hide'}>
              {item.lastVersions.length === 0 ?
              <p>Dont have lastVersions</p> :
              <div>
                {item.lastVersions.map(elem =>
                  <div key={elem.title+Math.random()} className="border-bottom">
                    <h3>{elem.title}</h3>
                    <div>
                      <span className="text-warning">
                        this version is outdated in:
                      </span>
                      <span className="text-secondary">
                        {new Date(elem.edittime).toString().split("GMT")[0]}
                      </span>
                    </div>
                    <div>
                      <span className="text-warning">
                        Author:
                      </span>
                      <span className="text-secondary">
                        {elem.username}
                      </span>
                    </div>
                    <div>
                      <span className="text-warning">
                        I want to cook this dish at:
                      </span>
                      <span className="text-secondary">
                        {new Date(elem.date).toString().split("GMT")[0]}
                      </span>
                    </div>
                    <div className="pre-wrap margin-10">
                      {elem.text}
                    </div>
                  </div>
                )}
              </div>}
            </div>
          </div>
        )
      }
      </div>
    )
  }
}
