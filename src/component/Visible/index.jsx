import React from "react";
import { Component } from "react";

class Visible extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      viewHeight: 0,
    };
  }
  //attach our function to document event listener on scrolling whole doc
  componentDidMount() {
    document.addEventListener("scroll", this.isInViewport);

    const height = this.viewElement.clientHeight;
    console.log("height", height);
    this.setState({ height });
    this.setState({ viewHeight: window.innerHeight });
    console.log("viewHeight", this.state.viewHeight);
  }

  //do not forget to remove it after destroyed
  componentWillUnmount() {
    document.removeEventListener("scroll", this.isInViewport);
  }

  //our function which is called anytime document is scrolling (on scrolling)
  isInViewport = () => {
    //get how much pixels left to scrolling our ReactElement
    const top = this.viewElement.getBoundingClientRect().top;

    //here we check if element top reference is on the top of viewport
    /*
     * If the value is positive then top of element is below the top of viewport
     * If the value is zero then top of element is on the top of viewport
     * If the value is negative then top of element is above the top of viewport
     * */

    console.log("number", this.state.viewHeight - this.state.height);
    this.props.setElementStatus(
      top <= this.state.viewHeight - this.state.height
    );
    if (top <= this.state.viewHeight - this.state.height) {
      document.removeEventListener("scroll", this.isInViewport);
      return;
    }
  };

  render() {
    // set reference to our scrolling element
    let setRef = (el) => {
      this.viewElement = el;
    };

    return (
      // add setting function to ref attribute the element which we want to check
      <section className={this.props.className} ref={setRef}>
        {this.props.children}
      </section>
    );
  }
}

export default Visible;
