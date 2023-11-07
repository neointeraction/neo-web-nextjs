import React from "react";
import Micro from "assets/images/diwali/micro.png";
import Virtual from "assets/images/diwali/virtual.png";
import Themed from "assets/images/diwali/themed.png";
import Head from "next/head";

const categories = [
  {
    image: Micro,
    name: "Micro-interaction",
  },
  {
    image: Virtual,
    name: "AR Virtual Diwali Decorator",
  },
  {
    image: Themed,
    name: "Diwali-themed Mobile App",
  },
];

const diwali = () => {
  return (
    <>
      <Head>
        <title>
          Diwali Design and Development Contest | Neointeraction Design
        </title>
        <meta
          name="description"
          content="Join our Diwali Design & Development Contest. Illuminate the festival with your creativity. Submit your designs to win exciting prizes."
        />
      </Head>
      <div className="diwali banner-section-home">
        <div className="left-pattern"></div>
        <div className="right-pattern"></div>
        <section className="logo">
          <div className="main-pattern"></div>
        </section>
        <div className="highlights">
          <h1 className="highlight">Let's add a touch of digital</h1>
          <h1 className="highlight">magic to the festival of lights!</h1>
        </div>
        <p className="content">
          Think outside the box, let your imagination run wild, and craft
          delightful digital experiences that capture the spirit of Diwali.
        </p>

        <p className="deadline">
          Submission Deadline: <br /> November 12th, 6:00 PM
        </p>
        <div className="button-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="29"
            viewBox="0 0 58 29"
            fill="none"
          >
            <path d="M29 0L0 15.1905L29 29L58 16.5714L29 0Z" fill="#F713C7" />
          </svg>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdPrbfsKnptKCbmsWoT6wzxPqYJpg5b9oEJ92u-isBWQVYJNQ/viewform?usp=sf_link"
            target="_blank"
          >
            <button type="button">Submit your Design</button>
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="29"
            viewBox="0 0 58 29"
            fill="none"
          >
            <path d="M29 0L0 15.1905L29 29L58 16.5714L29 0Z" fill="#F713C7" />
          </svg>
        </div>

        <p className="condition">*Scroll for instructions</p>

        <section>
          <h2>Choose Your Category:</h2>
          <div className="flex">
            {categories.map((category) => (
              <Category name={category.name} image={category.image} />
            ))}
          </div>
        </section>

        <section className="guidelines">
          <h2>Submission Guidelines:</h2>
          <ol>
            <li>
              <p>
                1. Select one of the categories above and create your design
                masterpiece.
              </p>
            </li>
            <li>
              <p>
                2. Submit your entry and share your concept description via the
                provided form.
              </p>
            </li>
          </ol>
        </section>

        <section className="pattern-container">
          <div className="pattern"></div>
        </section>
      </div>
    </>
  );
};

export default diwali;

const Category = ({ image, name }) => {
  return (
    <div className="category">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};
