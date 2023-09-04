import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "mohamed amine BOUCHRIHA",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: "https://media.licdn.com/dms/image/C4D03AQGsX3EN5t_hsA/profile-displayphoto-shrink_800_800/0/1663919500021?e=2147483647&v=beta&t=EDdebE4UbSGzVQoACy1p0shVSz8E4Quu4oultlFiBjQ",
        profession: "Software Developer",
      },
      show: false,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, elapsedTime } = this.state;

    return (
      <div className="App">
        <h1>Person Profile App</h1>
        <button onClick={this.toggleProfile}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time Elapsed: {elapsedTime} seconds since mount.</p>
      </div>
    );
  }
}

export default App;