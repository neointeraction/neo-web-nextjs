import ClientSlider from "components/ClientSlider";
import React, { useState, useRef } from "react";
import ReactWOW from "react-wow";
import BannerSectionImage from "../assets/images/landing/banner-section.png";
import BadgeText from "../assets/images/landing/badge.svg";
import SpeakerCard from "components/SpeakerCard";

import Sp1 from "../assets/images/landing/sp1.jpg";
import Sp2 from "../assets/images/landing/sp2.jpg";

import T1 from "../assets/images/landing/t1.jpg";
import T2 from "../assets/images/landing/t2.jpg";
import T3 from "../assets/images/landing/t3.jpg";
import FAQAccordion from "components/FAQAccordion";
import SimpleReactValidator from "simple-react-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const axios = require("axios");

const data = [
  {
    image: Sp1,
    name: "Sam Thomas",
    designation: "CEO, UX Director ",
    info: [
      "M. Des From IIT Bombay: 2001-03",
      "More than 23 years of industry experience.",
      "B.Arch from Madras University.",
      "Handled more than 100+ projects.",
      "Handled more than 100+ clients.",
      "Advisor for many startups and corporates nationally and internationally.",
      "Specialist in ROI based Design Approach",
    ],
  },
  {
    image: Sp2,
    name: "Vanessa Lobo",
    designation: "Aspiring Design Lead",
    info: [
      "B.Arch from University of Mumbai (2011-16) ",
      "More than 7 years of Industry Experience",
      "Handled complete design delivery for 5 projects across diverse domains",
      "Contributing Researcher and Writer for an anthological publication under People Place Project",
      "Researcher for Art Deco Mumbai, documented and added 200 Heritage Buildings to the Art Deco Heritage Inventory",
    ],
  },
];

const programData = [
  {
    time: "10:00 - 10:30",
    info: "Welcome Message Introduction to the workshop session Faculty & Participants Introduction",
    break: false,
  },
  {
    time: "10:30 - 12:00",
    info: "Practical & Effective Tools to Accelerate Design Solutions - Part 1 ",
    break: false,
  },
  {
    time: "12:00 - 12:30",
    info: "High Tea",
    break: true,
  },
  {
    time: "12:30 - 13:00",
    info: "Real-Life case studies Skill development Practices",
    break: false,
  },
  {
    time: "13:00 - 14:00",
    info: "Lunch",
    break: true,
  },
  {
    time: "14:00 - 16:00",
    info: "Practical & Effective Tools to Accelerate Design Solutions - Part 2 ",
    break: false,
  },
  {
    time: "16:00 - 16:30",
    info: "High Tea",
    break: true,
  },
  {
    time: "16:30 - 17:00",
    info: "Conclusion & Vote of Thanks/Feedbacks",
    break: false,
  },
];

const pricing = [
  {
    name: "Entry Fee",
    price: "Rs. 12,000/-",
    ofrText: "Limited Seats !",
  },
  {
    name: "Early Bird Discount",
    price: "10% Discount",
    ofrText: "July 1st - 20th",
  },
  {
    name: "Group Discount",
    price: "15% Discount",
    ofrText: "3 or more Members ",
  },
];

const SuccessToast = () => (
  <div className="success-msg-download width-md">
    <div className="check-wrap"></div>
    <p>
      Thank you for contacting us. We have received your request. Our team will
      connect with you shortly.!
    </p>
  </div>
);

const testimonial = [
  {
    img: T1,
    name: "Allen Stephen",
    quote:
      "I really  like using this product! Hands down, one of the best apps out there!",
  },
  {
    img: T2,
    name: "Ravi Kishore",
    quote: "It was an absolute game-changer for design enthusiasts like me.",
  },
  {
    img: T3,
    name: "Janvi Singh",
    quote:
      " It was wonderful to connect with like-minded individuals and share ideas.",
  },
];

const faqData = [
  {
    question: "If I pay and decide to cancel will I get a refund?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et justo in libero sodales faucibus quis sed ligula. ",
  },
  {
    question: "Want to understand more about the event how can I ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et justo in libero sodales faucibus quis sed ligula. ",
  },
  {
    question:
      "Will you provide accommodation if I am coming from outside the city?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et justo in libero sodales faucibus quis sed ligula. ",
  },
  {
    question: "Where is the event happening?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et justo in libero sodales faucibus quis sed ligula. ",
  },
  {
    question: "What all is covered in the fee?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et justo in libero sodales faucibus quis sed ligula. ",
  },
  {
    question: "Will i get  participation certificate?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et justo in libero sodales faucibus quis sed ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc in turpis vel lectus ultrices cursus. ",
  },
  {
    question: "What is the last date for registration ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et justo in libero sodales faucibus quis sed ligula. ",
  },
  {
    question: "Is there any other way to register for this event ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et justo in libero sodales faucibus quis sed ligula. ",
  },
  {
    question:
      "Can I share my registration to someone else if i am not able to make it ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et justo in libero sodales faucibus quis sed ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc in turpis vel lectus ultrices cursus.",
  },
];

const DesignEventLanding = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();
  const [ip, setIp] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://api.ipify.org?format=json");
      const ipAddress = response.data.ip;
      if (ipAddress) {
        setIp(ipAddress);
      }
    })();
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      mobile: "",
      email: "",
      company: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      setSubmitted(true);
      formData["ip"] = ip;
      try {
        axios
          .post("https://www.neointeraction.com/server/workshopmail", {
            ...formData,
          })
          .then((response) => {
            if (response.data.status === "success") {
              toast(SuccessToast, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              resetForm();
            } else if (response.data.status === "fail") {
              alert("Message failed to send.");
            }
          });
      } catch (err) {
        console.log("Error", err);
      }
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
    }

    setSubmitted(false);
  };

  return (
    <div className="de-landing-container">
      <div className="landing-banner pattern-right">
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-md-7">
              <ReactWOW animation="fadeIn" delay="0s" duration="3s">
                <img
                  style={{ marginBottom: 10 }}
                  src={BadgeText}
                  alt={"BadgeText"}
                />
              </ReactWOW>
              <ReactWOW animation="fadeInDown" delay="0s">
                <h1 className="landing-title">
                  <span className="highlight">
                    Practical and Effective Tools{" "}
                  </span>
                  to Accelerate Design Solutions
                </h1>
              </ReactWOW>
              <ReactWOW animation="fadeIn" delay="0s" duration="4s">
                <div className="venue-container">
                  <ul className="vc-list">
                    <li className="vc-item">1st July 2023</li>
                    <li className="vc-item">10:00 am - 05:00 pm</li>
                    <li className="vc-item">Orchid Hotel, Bangalore</li>
                  </ul>
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" delay="0s">
                <p className="landing-text">
                  If you strongly believe that design can touch people's lives,
                  solve user problems, and improve daily experiences, this
                  design centric workshop is perfect for you.
                </p>
                <div className="registerblock-banner">
                  <button class="custom-btn">Register Now !</button>
                  <p className="landing-text">*Limited seats</p>
                </div>
              </ReactWOW>
            </div>
            <div className="col-md-5">
              <ReactWOW animation="zoomIn" delay="0s" duration="0.8s">
                <div className="contact-form-landing">
                  <h1 className="landing-form-title">Contact Us</h1>
                  <form
                    onSubmit={handleSubmit}
                    className="design-workshop__form"
                  >
                    <div className="form-block">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className={`input-custom  ${
                          formData?.name ? "" : "dark"
                        }`}
                        onBlur={() =>
                          simpleValidator.current.showMessageFor("name")
                        }
                      />
                    </div>
                    {simpleValidator.current.message(
                      "Name",
                      formData?.name,
                      "required|alpha"
                    )}
                    <div className="form-block">
                      <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className={`input-custom  ${
                          formData?.mobile ? "" : "dark"
                        }`}
                        placeholder="Mobile"
                      />
                    </div>
                    {simpleValidator.current.message(
                      "Mobile",
                      formData?.mobile,
                      "required|phone"
                    )}
                    <div className="form-block">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input-custom  ${
                          formData?.email ? "" : "dark"
                        }`}
                        placeholder="Email"
                      />
                    </div>
                    {simpleValidator.current.message(
                      "email",
                      formData?.email,
                      "required|email"
                    )}
                    <div className="form-block">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`input-custom  ${
                          formData?.company ? "" : "dark"
                        }`}
                        placeholder="Company"
                      />
                    </div>
                    <button
                      type="submit"
                      class="custom-btn submit-btn-landing"
                      disabled={submitted}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-client">
        <div className="container animated fadeIn">
          <ReactWOW animation="fadeIn" delay="0s">
            <div>
              <h1 className="landing-title text-center mb-3">Trusted By</h1>
              <ClientSlider landing />
            </div>
          </ReactWOW>
        </div>
      </div>
      <div className="l-about-section">
        <div>
          <ReactWOW animation="fadeIn" delay="0s">
            <div className="landing-about-section">
              <div className="lbs-block">
                <img
                  className="width-100"
                  src={BannerSectionImage}
                  alt={"BannerSectionImage"}
                />
              </div>
              <div className="lbs-block content">
                <ReactWOW animation="fadeInDown" delay="0s">
                  <h1 className="landing-title">About the Event</h1>
                </ReactWOW>
                <ReactWOW animation="fadeInUp" delay="0s">
                  <p className="landing-body-text">
                    We'll take you on an action-packed journey filled with live
                    case studies, proven design-solving methodologies, and rapid
                    design thinking tasks. Don't miss out on the opportunity to
                    learn from the experts in the field.
                  </p>
                  <p className="landing-body-text">
                    Our goal is to enrich aspiring design heads and uplift their
                    design career path. This is your chance to take your design
                    skills to the next level.
                  </p>
                  <p className="landing-body-text">
                    Neointeration Design studio started in 2008, has delivered
                    User experience (UX & UI) designing, and UI Engineering
                    services for B2B, B2C, Startups from different business
                    domains.
                  </p>
                </ReactWOW>
                <ReactWOW animation="fadeInUp" delay="0s">
                  <div>
                    <button class="custom-btn">Register Now !</button>
                  </div>
                </ReactWOW>
              </div>
            </div>
          </ReactWOW>
        </div>
      </div>
      <div className="speaker-section">
        <div className="container">
          <ReactWOW animation="fadeInDown" delay="0s">
            <h1 className="landing-title">Speakers</h1>
          </ReactWOW>
          <ReactWOW animation="fadeInUp" delay="0s">
            <div className="speaker-card-container">
              {data.map((item) => (
                <SpeakerCard
                  image={item.image}
                  name={item.name}
                  designation={item.designation}
                  info={item.info}
                />
              ))}
            </div>
          </ReactWOW>
        </div>
      </div>
      <ReactWOW animation="fadeIn" delay="0s">
        <div className="info-section">
          <div className="pattern-bottom">
            <div className="pattern-left-center">
              <div className="container">
                <ReactWOW animation="fadeInUp" delay="0s">
                  <div className="info-section-card">
                    <ReactWOW animation="fadeIn" delay="0s">
                      <div className="is-block">
                        <h1 className="landing-title">Who should Attend?</h1>
                        <div className="info-content">
                          <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                              <ul className="info-list">
                                <li> Aspiring Design Heads </li>
                                <li> Product Design Manager</li>
                                <li>Senior Product Designer </li>
                                <li>Senior UX Designer </li>
                              </ul>
                            </div>
                            <div className="col-md-4">
                              <ul className="info-list">
                                <li> Senior UI Designer</li>
                                <li> UX Designer</li>
                                <li>Visual Designer</li>
                                <li>UI Designer </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="is-block">
                        <h1 className="landing-title">Event Takeaways </h1>
                        <div className="info-content">
                          <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-8">
                              <ul className="info-list">
                                <li>
                                  Effective whiteboarding techniques for
                                  successful team collaborations?
                                </li>
                                <li>
                                  How to arrive at design objectives clearly and
                                  concisely?
                                </li>
                                <li>How to come out with a design strategy?</li>
                                <li>
                                  How to strategize and plan the design sprints?
                                </li>
                                <li>
                                  How to bring extraordinary aesthetics to your
                                  design?
                                </li>
                                <li>
                                  How to align designs with the business
                                  objectives?
                                </li>
                                <li>What makes a successful design manager?</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="is-block">
                        <h1 className="landing-title">Program Schedule </h1>
                        <div className="info-content">
                          {programData.map((item) => (
                            <div
                              className={`program-block ${
                                item.break ? "break-time" : ""
                              }`}
                            >
                              <div className="pb-time">{item.time}</div>
                              <div className="pb-info">{item.info}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ReactWOW>
                  </div>
                </ReactWOW>
              </div>
            </div>
          </div>
        </div>
      </ReactWOW>
      <ReactWOW animation="fadeIn" delay="0s">
        <div className="register-container">
          <div className="container">
            <h1 className="landing-title">Register Now </h1>
            {/* <p className="landing-subtitle">Limited seats . 5 Days Left !</p> */}
            <div className="price-card-block">
              <div className="row">
                {pricing.map((item) => (
                  <ReactWOW animation="fadeInUp" delay="0s">
                    <div className="col-md-4">
                      <div className="landing-price-card">
                        <h4 className="lpc-title">{item.name}</h4>
                        <div className="price-block">
                          <h4 className="lpc-price">{item.price}</h4>
                          <h4 className="lpc-price-sub">
                            (+18% gst) per person{" "}
                          </h4>
                        </div>
                        <div>
                          <h4 className="lpc-offer">{item.ofrText} </h4>
                          <h4 className="lpc-offer-sub">
                            {item.name === "Early Bird Discount"
                              ? "2023"
                              : item.name === "Group Discount"
                              ? "from same organization"
                              : "-"}
                          </h4>
                        </div>
                        <button class="custom-btn">Register Now</button>
                      </div>
                    </div>
                  </ReactWOW>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ReactWOW>
      <div className="contact-terms-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="contact-title">Contact</h1>
              <p className="landing-text">Allen Stephen</p>
              <p className="landing-text">+91 95133 38744</p>
              <p className="landing-text">allen@neointeraction.com</p>
            </div>
            <div className="col-md-8">
              <h1 className="contact-title">Terms & Conditions</h1>
              <p className="landing-text width-100">
                Participation in event implies agreement to event rules and
                assumes personal responsibility for any associated risks. In
                case of cancellations upto 2 weeks prior to the event you will
                be accommodated for the upcoming events.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ReactWOW animation="fadeInUp" delay="0s">
        <div className="download-brochure">
          <div className="container">
            <div className="row align-center">
              <div className="col-md-5">
                <h1 className="landing-title">Download Brochure</h1>
              </div>
              <div className="col-md-7">
                <div className="form-flex">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={""}
                    onChange={() => {}}
                    className="input-custom dark"
                    placeholder="E-mail ID"
                  />
                  <button class="custom-btn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactWOW>
      <ReactWOW animation="fadeInUp" delay="0s">
        <div className="testimonial-section">
          <div className="container">
            <h1 className="landing-title">Testimonials</h1>
            <div className="t-card-block">
              <div className="row">
                {testimonial.map((item) => (
                  <div className="col-md-4">
                    <div className="testimonial-card">
                      <div className="testimonial-img-container">
                        <img
                          className=""
                          src={item.img}
                          alt={"BannerSectionImage"}
                        />
                      </div>
                      <h1 className="t-title">{item.name}</h1>
                      <h1 className="t-quote">{item.quote}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ReactWOW>
      <ReactWOW animation="fadeInUp" delay="0s">
        <div className="download-brochure">
          <div className="container">
            <div className="row align-center">
              <div className="col-md-5">
                <h1 className="landing-title max-w-80">
                  Subscribe to our latest design news
                </h1>
              </div>
              <div className="col-md-7">
                <div className="form-flex">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={""}
                    onChange={() => {}}
                    className="input-custom dark"
                    placeholder="E-mail ID"
                  />
                  <button class="custom-btn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactWOW>
      <ReactWOW animation="fadeInUp" delay="0s">
        <div className="faq-section">
          <div className="container">
            <h1 className="landing-title">FAQ's</h1>
            <div className="faq-block">
              <FAQAccordion data={faqData} />
            </div>
          </div>
        </div>
      </ReactWOW>
      <ToastContainer />
    </div>
  );
};

export default DesignEventLanding;
