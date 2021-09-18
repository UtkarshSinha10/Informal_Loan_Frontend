import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.page = "landingPage";
  }
  render() {
    let a;
    switch (this.page) {
      case "signIn":
        a=<p>
          <div>{this.page}</div>
        </p>
        break;
      case "signUp":
        a=<p>
          <div>{this.page}</div>
        </p>
        break;
      default:
        a=<p>
          <div>FUCK</div>
        </p>
        break;
    }
    return (a)
  }
}

export default App;
