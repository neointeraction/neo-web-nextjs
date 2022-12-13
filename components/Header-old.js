import React, { Component } from "react";
import Link from "next/link";

// import Logo from "assets/images/LOGO.svg";

import Home from "assets/images/Home.svg";
import Close from "assets/images/closeMenu.svg";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuActive: false,
      activeClass: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1) {
        this.setState({ activeClass: "stick" });
      } else if (window.scrollY === 0) {
        this.setState({ activeClass: "" });
      }
    });
  }

  openMenu = (event) => {
    event.stopPropagation();
    this.setState({ menuActive: true });
    let container = document.querySelector(".container");

    let headWrapper = document.querySelector(".header-wrapper");
    document.body.classList.add("scroll-hide");
    container.classList.add("position-container");
    headWrapper.classList.add("menu-overlay");
  };

  closeMenu = (event) => {
    event.stopPropagation();
    this.setState({ menuActive: false });
    let container = document.querySelector(".container");
    let headWrapper = document.querySelector(".header-wrapper");

    document.body.classList.remove("scroll-hide");
    container.classList.remove("position-container");
    headWrapper.classList.remove("menu-overlay");
  };

  render() {
    return (
      <div className="header-wrapper" onClick={this.closeMenu}>
        <div className={`logo ${this.state.activeClass}`}>
          {/* <img src={Logo} alt="logo" /> */}
          <div className="logo-position">
            <div className="logo-container ptop" onClick={this.openMenu}>
              {this.state.menuActive === true && (
                <div className="logo-container expand">
                  <div className="logo-block block1 "></div>
                  <div className="logo-block block2 "></div>
                  <div className="logo-block block3 "></div>
                  <div className="logo-block block4 "></div>
                  <div className="menu-text" onClick={this.closeMenu}>
                    <p>menu</p>
                  </div>
                  <ul className="menu-list">
                    <li>
                      <Link href="/">
                        <span onClick={this.closeMenu} className="menu-link">
                          <img src={Home} alt="home" />
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link href="/ui-ux-design-developer-services-company-bangalore">
                        <span onClick={this.closeMenu} className="menu-link">
                          services
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us">
                        <span onClick={this.closeMenu} className="menu-link">
                          about us
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Projects">
                        <span onClick={this.closeMenu} className="menu-link">
                          projects
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/career">
                        <span onClick={this.closeMenu} className="menu-link">
                          careers
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blogs">
                        <span onClick={this.closeMenu} className="menu-link">
                          blogs
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">
                        <span onClick={this.closeMenu} className="menu-link">
                          contact us
                        </span>
                      </Link>
                    </li>
                    <li onClick={this.closeMenu}>
                      <img src={Close} alt="Close" />
                    </li>
                  </ul>
                </div>
              )}
              {this.state.menuActive === false && (
                <div className="logo-container">
                  <div className="logo-block block1 blockflip1"></div>
                  <div className="logo-block block2 blockflip2"></div>
                  <div className="logo-block block3 blockflip3"></div>
                  <div className="logo-block block4 blockflip4"></div>
                  <div className="logo-text">
                    <p>neointeraction design</p>
                  </div>
                  <div className="menu-text">
                    <p>menu</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
