import React, { Component } from "react";

class UserItem extends Component {
  render() {
    //destructuring - pull the values out from the state
    const { login, avatar_url, html_url } = this.props.user;

    return (
      //irá mostrar uma imagem de acordo com o que está definido no estado
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>

        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
