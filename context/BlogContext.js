import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../globalConfig";

export const BlogContext = React.createContext();

export class BlogProvider extends Component {
  state = {
    blogs: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(baseUrl + "/blogs");
      this.setState({ blogs: response.data });
      // console.log(response.data);
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    return (
      <BlogContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </BlogContext.Provider>
    );
  }
}
