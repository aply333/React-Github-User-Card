import React from "react";
import FollowerCards from "./FollowerCards";

class Followers extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            followersList: []
        }
    }

  componentDidMount() {
    fetch(this.props.apiFollowers)
      .then(res => res.json())
      .then(followers => {
        console.log(
          `%c APP Fetch`,
          "text-decoration:underline; color: orange",
          followers
        );
        this.setState({followersList:followers})
      })
      .catch( err =>
        console.log(
          "%c Fetch Error",
          "text-decoration:underline; color: red",
          err
        )
      );
  }

  render() {
    return (
      <div>
        {this.state.followersList.map( person => {
            return <FollowerCards follower={person}/>
        })}

      </div>
    );
  }
}

export default Followers;
