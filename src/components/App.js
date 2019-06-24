import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "english" };

  onLangguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLangguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLangguageChange("dutch")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
