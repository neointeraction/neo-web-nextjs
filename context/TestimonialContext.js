import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../globalConfig";

export const TestimonialContext = React.createContext();

export class TestimonialProvider extends Component {
  state = {
    testimonials: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(baseUrl + "/testimonials");
      this.setState({ testimonials: response.data });
      // console.log(response.data);
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    return (
      <TestimonialContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </TestimonialContext.Provider>
    );
  }
}
