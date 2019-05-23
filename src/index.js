import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // this.getPositionSuccess = this.getPositionSuccess.bind(this);
  // this.getPositionError = this.getPositionError.bind(this);
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      positionData => this.setState({ lat: positionData.coords.latitude }),
      positionError => this.setState({ errorMessage: positionError.message })
    );
  }

  //   kjjkj(position) {
  //     console.log(position);
  //     this.setState({ lat: position.coords.latitude });
  //   }

  //   getPositionError(error) {
  //     console.log(err);
  //   }
  // React says we have to define render!

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <Spinner message="please accept location request" />;
    }
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
