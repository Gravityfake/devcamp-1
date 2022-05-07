import React from "react";

class ProfileClassComp extends React.Component {
  render() {
    return (
      <>
        <p>Firstname : {this.props.firstname}</p>
        <p>Lastname : {this.props.lastname}</p>
        <h1>{this.props.children}</h1>
      </>
    );
  }
}

export default ProfileClassComp;
