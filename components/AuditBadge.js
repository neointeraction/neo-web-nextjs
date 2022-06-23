import React, { Component } from "react";
import Link from "next/link";
import { timers } from "jquery";
import UxBadge from "../images/website-badge.svg"







export default class AuditBadge extends Component {

    constructor(props){
      super(props);
      this.state = {
        isPulled:false,
      }
    }
    componentDidMount() {
      setInterval(
        () => this.auditpull(),
        10000
      );
    }

    auditpull() {
      this.setState({
       isPulled:true
      });
    }
    
    render() {
      let {isPulled} = this.state;
        return (
          <div>          
          <div className={`pulldown ${isPulled ? "open " : "closed"}`}>
          <div className={`square-base ${isPulled ? "open " : "closed"}`}>
            <div>
            <Link href={`/UXAudit`}>
            <img src={UxBadge} /> 
            </Link>
            </div>
          </div>
          </div>
          </div>
        );
      }





}
