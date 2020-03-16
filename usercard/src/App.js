import React from "react";
import "./App.css";
import MyCard from "./Components/MyCard";
import Followers from "./Components/Followers";

class App extends React.Component {
  state = {
    userImg: "",
    userName: "",
    followers:[]
  };

  apiLocation = `https://api.github.com/users/aply333`;

  componentDidMount() {
    fetch(this.apiLocation)
      .then(res => res.json())
      .then(usr => {
        console.log(
          `%c APP Fetch`,
          "text-decoration:underline; color: orange",
          usr
        );
        this.setState({ userImg: usr.avatar_url, userName: usr.login });
      })
      .catch(err =>
        console.log(
          "%c Fetch Error",
          "text-decoration:underline; color: red",
          err
        )
      );
  }

  apiFollowers = 'https://api.github.com/users/aply333/followers';


  render() {
    return (
      <div>
        <MyCard userName={this.state.userName} userImg={this.state.userImg} />
        <br/>
        <Followers 
          apiFollowers={this.apiFollowers}
          state={this.state}/>
      </div>
    );
  }
}

export default App;
