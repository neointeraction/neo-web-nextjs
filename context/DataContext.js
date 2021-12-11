import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../globalConfig";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    projects: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(baseUrl + "/projects");
      this.setState({ projects: response.data });
      // console.log(response.data);
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
