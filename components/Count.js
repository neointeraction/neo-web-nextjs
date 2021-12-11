import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import "../css/main.css";

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didViewCountUp: false,
    };
    this.onVisibilityChange = this.onVisibilityChange.bind(this); // Bind for appropriate 'this' context
  }

  onVisibilityChange(isVisible) {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  }
  render() {
    const { countNum, suffixText, countLabel } = this.props;
    return (
      <div className="count-block">
        <h3 className="count-text">
          {/* <CountUp delay={delay} end={countNum} suffix={suffixText}>
            {" "}
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp> */}
          <VisibilitySensor
            onChange={this.onVisibilityChange}
            offset={{
              top: 10,
            }}
            delayedCall
          >
            <CountUp
              start={0}
              end={this.state.didViewCountUp ? countNum : 0}
              suffix={suffixText}
              duration={3}
            />
          </VisibilitySensor>
        </h3>
        <p className="count-label">{countLabel}</p>
      </div>
    );
  }
}
