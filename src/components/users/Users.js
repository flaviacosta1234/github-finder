import React, { Component } from "react";
import UserItem from "./UserItem";

class User extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map(user => (
          //o user "todo" está a ser passado como prop para o componente UserItem
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default User;
