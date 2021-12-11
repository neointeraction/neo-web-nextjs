import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../globalConfig";

export const BFSIContext = React.createContext();

export class BFSIProvider extends Component {
  state = {
    BFSIProject: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(baseUrl + "/bfsi-projects");
      this.setState({ BFSIProject: response.data });
      // console.log(response.data);
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    return (
      <BFSIContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </BFSIContext.Provider>
    );
  }
}
