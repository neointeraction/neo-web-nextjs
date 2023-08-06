import ClientSlider from "components/ClientSlider";
import TestimonialSlider from "components/TestimonialSlider";
import React, { useState, useRef } from "react";
import ReactWOW from "react-wow";
import BannerSectionImage from "../assets/images/landing/banner-section.png";
import BadgeText from "../assets/images/landing/badge.svg";
import SpeakerCard from "components/SpeakerCard";

import Sp1 from "../assets/images/landing/sp1.jpg";
import Sp2 from "../assets/images/landing/sp2.jpg";

import T1 from "../assets/images/landing/t1.png";
import T2 from "../assets/images/landing/t2.jpg";
import T3 from "../assets/images/landing/t3.png";
import FAQAccordion from "components/FAQAccordion";
import SimpleReactValidator from "simple-react-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import logo from "../assets/images/LOGO.svg";
import Head from "next/head";
import Subscription from "components/Subscription";

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

const BrochureDownloadSuccessToast = () => (
  <div className="success-msg-download width-md" style={{ width: "265px" }}>
    <div className="check-wrap"></div>
    <p>We have successfully sent you the brochure. Please check your mail.!</p>
  </div>
);

export const testimonial = [
  {
    img: T1,
    name: "Noah James",
    quote:
      "It was an eye-opening experience, the  presentations were very informative!",
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
      "In case of cancellations upto 2 weeks prior to the event you will be accommodated for the upcoming events.",
  },
  {
    question: "Want to understand more about the event how can I ?",
    answer: `You can get in touch with us by sending us an email to <a href="mailto:allen@neointeraction.com">allen@neointeraction.com</a> . If you have any questions or require further assistance, please feel free to drop us a message in the mentioned email address. We will be more than happy to help you !`,
  },
  {
    question:
      "Will you provide accommodation if I am coming from outside the city?",
    answer:
      "Please note that we are unable to provide accommodation services. However, we can provide recommendations and guidance to help you find the perfect place for your stay.",
  },
  {
    question: "Where is the event happening?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et justo in libero sodales faucibus quis sed ligula. ",
  },
  {
    question: "What all is covered in the fee?",
    answer: `Included within the registration fee, participants will have access to the following amenities at no additional cost : <ol type="1"><li>Real life UX design case studies</li><li>Skill development practices</li><li>Participation certificate</li><li>Giveaways or goodies from our team</li></ol>`,
  },
  {
    question: "Will i get  participation certificate?",
    answer:
      "Upon attending this event,you will be presented with a participation certificate as a token of acknowledgement for your active involvement and engagement.",
  },
  {
    question: "What is the last date for registration ?",
    answer: "Last date of registration: Aug 08, 2023",
  },
  {
    question: "Is there any other way to register for this event ?",
    answer: `You can register for this event  by sending us an email to <a href="mailto:allen@neointeraction.com">allen@neointeraction.com</a> . If you have any questions or require further assistance, please feel free to drop us a message in the mentioned email address. We will be more than happy to help you !`,
  },
  {
    question:
      "Can I share my registration to someone else if i am not able to make it ?",
    answer: `You are welcome to share your registration with others two weeks before the event.We kindly request that you keep us informed about this by sending an email to <a href="mailto:allen@neointeraction.com">allen@neointeraction.com</a> with the other participants details.`,
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
  const [mailSent, setMailSent] = useState(false);
  const [brochureDetails, setBrochureDetails] = useState({
    name: "",
    email: "",
  });
  const [isBrochureSubmitting, setIsBrochureSubmitting] = useState(false);

  const handleDownloadBrochure = () => {
    // subscribeEmail
    if (brochureDetails.name && brochureDetails.email) {
      setIsBrochureSubmitting(true);
      try {
        axios
          .post("https://www.neointeraction.com/server/brochure", {
            ...brochureDetails,
          })
          .then((response) => {
            if (response.data.status === "success") {
              toast(BrochureDownloadSuccessToast, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setBrochureDetails({
                name: "",
                email: "",
              });

              setIsBrochureSubmitting(false);
            } else if (response.data.status === "fail") {
              alert("Message failed to send.");

              setIsBrochureSubmitting(false);
            }
          });
      } catch (err) {
        setIsBrochureSubmitting(false);
        console.log("Error", err);
      }
    }
  };

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
      setMailSent(true);
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
              setMailSent(false);
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
    setTimeout(() => setSubmitted(false), 5000);
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  return (
    <>
      <Head>
        <title>
          Master UX UI Design Workshop : Accelerate Your Design Career with
          these Practical and Effective Tools
        </title>
        <meta
          name="description"
          content="1-day UX/UI design workshop from experts using practical and proven design-solving methodologies."
        />
        {/* <meta
          name="keywords"
          content="UX design,UI engineering, Motion design, UX services, UI services, UX projects, UI projects, Video services, design team, design agency"
        /> */}
        <meta property="og:image" content={BannerSectionImage} />

        <link
          rel="canonical"
          href="https://www.neointeraction.com/design-workshop"
        />
      </Head>
      <div className="de-landing-container">
        <div className="landing-banner pattern-right">
          <div className="container-fluid custom-container">
            <div className="row">
              <div className="col-md-7">
                <ReactWOW animation="fadeInDown" delay="0s">
                  <div className="badge-img">
                    <img
                      style={{ marginBottom: 10 }}
                      src={BadgeText}
                      alt={"BadgeText"}
                    />
                  </div>
                </ReactWOW>
                <ReactWOW animation="fadeInDown" delay="0s">
                  <h1 className="landing-title mob-center">
                    <span className="highlight">
                      Practical and Effective Tools{" "}
                    </span>
                    to Accelerate Design Solutions
                  </h1>
                </ReactWOW>
                <ReactWOW animation="fadeInDown" delay="0s">
                  <div className="venue-container">
                    <ul className="vc-list">
                      <li className="vc-item mob-one">
                        Orchid Hotel, Bangalore
                      </li>
                      <li className="vc-item mob-two">1st July 2023</li>
                      <li className="vc-item mob-three">10:00 am - 05:00 pm</li>
                    </ul>
                  </div>
                </ReactWOW>
                <ReactWOW animation="fadeInDown" delay="0s">
                  <p className="landing-text">
                    If you strongly believe that design can touch people's
                    lives, solve user problems, and improve daily experiences,
                    this design centric workshop is perfect for you.
                  </p>
                  <div className="registerblock-banner">
                    <a
                      href="https://rzp.io/l/oKso1anR64"
                      style={{ textDecoration: "none" }}
                    >
                      <button class="custom-btn mob-btn-center">
                        Register Now !
                      </button>
                    </a>
                    <p className="landing-text mob-hide">*Limited seats</p>
                  </div>
                </ReactWOW>
              </div>
              <div className="col-md-5">
                <ReactWOW animation="fadeInDown" delay="0s" duration="0.8s">
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
                        "required|alpha_space"
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
                        class={`loader-btns custom-btn submit-btn-landing contact__submit-button ${
                          submitted ? "pointer-events-none" : ""
                        }`}
                        disabled={submitted}
                      >
                        Submit
                        {mailSent ? (
                          <div className="progress-bar">
                            <div className="circle border"></div>
                          </div>
                        ) : (
                          <></>
                        )}
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
                <h2 className="landing-title text-center mb-3 trusted__by">
                  Trusted By
                </h2>
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
                    alt={"UX design workshop by Neointeraction"}
                  />
                </div>
                <div className="lbs-block content">
                  <ReactWOW animation="fadeInDown" delay="0s">
                    <h2 className="landing-title">About the Event</h2>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" delay="0s">
                    <p className="landing-body-text">
                      We'll take you on an action-packed journey filled with
                      live case studies, proven design-solving methodologies,
                      and rapid design thinking tasks. Don't miss out on the
                      opportunity to learn from the experts in the field.
                    </p>
                    <p className="landing-body-text">
                      Our goal is to enrich aspiring design heads and uplift
                      their design career path. This is your chance to take your
                      design skills to the next level.
                    </p>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" delay="0s">
                    <div>
                      <a href="https://rzp.io/l/oKso1anR64">
                        <button class="custom-btn">Register Now !</button>
                      </a>
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
              <h2 className="landing-title">Speakers</h2>
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
                          <h2 className="landing-title">Who should Attend?</h2>
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
                          <h2 className="landing-title">Event Takeaways </h2>
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
                                    How to arrive at design objectives clearly
                                    and concisely?
                                  </li>
                                  <li>
                                    How to come out with a design strategy?
                                  </li>
                                  <li>
                                    How to strategize and plan the design
                                    sprints?
                                  </li>
                                  <li>
                                    How to bring extraordinary aesthetics to
                                    your design?
                                  </li>
                                  <li>
                                    How to align designs with the business
                                    objectives?
                                  </li>
                                  <li>
                                    What makes a successful design manager?
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="is-block">
                          <h2 className="landing-title">Program Schedule </h2>
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
              <h2 className="landing-title">Register Now </h2>
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
                          <a href="https://rzp.io/l/oKso1anR64">
                            <button class="custom-btn">Register Now</button>
                          </a>
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
              <div className="col-md-4 contact">
                <h1 className="contact-title">Contact</h1>
                <p className="landing-text">Allen Stephen</p>
                <p className="landing-text">+91 95133 38744</p>
                <p className="landing-text">allen@neointeraction.com</p>
              </div>
              <div className="col-md-12">
                <h3 className="contact-title">Terms & Conditions</h3>
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
                  <h2 className="landing-title">Download Brochure</h2>
                </div>
                <div className="col-md-7">
                  <div className="form-flex">
                    <input
                      type="text"
                      id="brochure-name"
                      name="brochure-name"
                      value={brochureDetails.name}
                      onChange={(e) => {
                        setBrochureDetails({
                          ...brochureDetails,
                          name: e.target.value,
                        });
                      }}
                      className={`input-custom ${
                        brochureDetails.name ? "" : "dark"
                      }`}
                      placeholder="Name"
                    />
                    <input
                      type="email"
                      id="brochure-email"
                      name="brochure-email"
                      value={brochureDetails.email}
                      onChange={(e) => {
                        setBrochureDetails({
                          ...brochureDetails,
                          email: e.target.value,
                        });
                      }}
                      className={`input-custom ${
                        brochureDetails.email ? "" : "dark"
                      }`}
                      placeholder="E-mail ID"
                    />
                    <button
                      type="submit"
                      class="custom-btn"
                      onClick={handleDownloadBrochure}
                      disabled={isBrochureSubmitting}
                    >
                      Submit
                    </button>
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
                <div className="row testimonial-desktop">
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
                <div className="row testimonial-mobile">
                  <TestimonialSlider />
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
                  <h2 className="landing-title max-w-80">
                    Subscribe to our latest design news
                  </h2>
                </div>
                <Subscription />
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
    </>
  );
};

export default DesignEventLanding;
