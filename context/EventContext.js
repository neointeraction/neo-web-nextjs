import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../globalConfig";

export const EventContext = React.createContext();

export class EventProvider extends Component {
  state = {
    events: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(baseUrl + "/events");
      this.setState({ events: response.data });
      // console.log(response.data);
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    return (
      <EventContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </EventContext.Provider>
    );
  }
}
