import ClientSlider from "components/ClientSlider";
import TestimonialSlider from "components/TestimonialSlider";
import React, { useState, useRef } from "react";
import ReactWOW from "react-wow";
import BannerSectionImage from "../assets/images/landing/banner-section.png";
import BadgeText from "../assets/images/landing/logo.png";

import FAQAccordion from "components/FAQAccordion";
import SimpleReactValidator from "simple-react-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, createRef } from "react";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import Router from "next/router";
import HeaderImg from "../assets/images/audit/header-img.png";
import FreshImg from "../assets/images/audit/fresh-img.png";
import WhyOne from "../assets/images/audit/why-one.png";
import WhyTwo from "../assets/images/audit/why-two.png";
import WhyThree from "../assets/images/audit/why-three.png";
import WhyFour from "../assets/images/audit/why-four.png";
import WhyFive from "../assets/images/audit/why-five.png";
import WhySix from "../assets/images/audit/why-six.png";
import T1 from "../assets/images/audit/T1.png";
import T2 from "../assets/images/audit/T2.png";
import T3 from "../assets/images/audit/T3.png";
import Expect from "../assets/images/audit/expect.png";

import PhBook from "../assets/images/audit/ph_book.png";
import IcRound from "../assets/images/audit/ic_round-compare-arrows.png";
import IconPark from "../assets/images/audit/icon-park-outline_doc-search-two.png";
import CarbonImp from "../assets/images/audit/carbon_improve-relevance.png";
import IcRoundRule from "../assets/images/audit/ic_round-rule.png";

import CaseStudy from "../assets/images/audit/case-study.png";

import PackOne from "../assets/images/audit/pack-1.png";
import PackTwo from "../assets/images/audit/pack-2.png";
import PackThree from "../assets/images/audit/pack-3.png";

const axios = require("axios");

const SuccessToast = () => (
  <div className="success-msg-download width-md">
    <div className="check-wrap"></div>
    <p>
      Thank you for booking an UX Audit. We have received your request. Our team
      will connect with you shortly.!
    </p>
  </div>
);

const expectData = [
  {
    img: PhBook,
    head: "Data Collection",
    desc: "Uncover engagement blockers and boost website effectiveness.",
  },
  {
    img: IcRoundRule,
    head: "Heuristic Evaluation",
    desc: "Streamline user flows and watch conversions soar.",
  },
  {
    img: CarbonImp,
    head: "Usability Testing ",
    desc: "Remove usability hurdles and unleash your website's true potential.",
  },
  {
    img: IconPark,
    head: "Content Review ",
    desc: "Craft compelling narratives to captivate your audience.",
  },
  {
    img: IcRound,
    head: "Competitive Analysis ",
    desc: "Benchmark your website and stay ahead of the competition.",
  },
];

const whyReasons = [
  {
    img: WhyOne,
    text: "Uncover Usability Issues",
  },
  {
    img: WhyTwo,
    text: "Boost User Engagement",
  },
  {
    img: WhyThree,
    text: "Enhance User Satisfaction",
  },
  {
    img: WhyFour,
    text: "Ensure Accessibility and Compliance",
  },
  {
    img: WhyFive,
    text: "Make Cost-Effective Improvements",
  },
  {
    img: WhySix,
    text: "Enable Data-Driven Decision Making",
  },
];

const testimonial = [
  {
    img: T1,
    name: "Sameer Mathur",
    title: "Senior VP at Tricog Health",
    desc: "They had the expertise to provide out-of-the-box ideas throughout the project",
  },
  {
    img: T2,
    name: "Jacob Varghese",
    title: "Director at Noctil",
    desc: "We were most impressed with their commitment to the project.",
  },
  {
    img: T3,
    name: "Asha Subramanian",
    title: "Founder & CEO at Semantic Web India",
    desc: "They were very accommodative to repeated iterations until the design was accepted by all stakeholders",
  },
];

const packs = [
  {
    img: PackOne,
    heading: "Free",
    price: "0 USD",
    features: [
      "1 Page Analyzed",
      "1 User Portrait",
      "Heuristic Evaluation",
      "Usability Checking",
      "Accessibility Check",
      "Content Review",
    ],
  },
  {
    img: PackTwo,
    heading: "Standard",
    price: "1500 USD",
    features: [
      "20 Page Analyzed",
      "4 User Portrait",
      "All in Basic plan ",
      "Navigation Analysis",
      "Technical Assessment",
      "Comprehensive Report ",
    ],
  },
  {
    img: PackThree,
    heading: "Custom",
    price: "Lets Connect",
    features: [
      "20+ Pages and Custom Requirements Analyzed",
      "4 User Portrait",
      "All in Basic plan ",
      "Navigation Analysis",
      "Competitive Analysis",
      "Technical Assessment",
      "Comprehensive Report",
    ],
  },
];

const faqData = [
  {
    question: "What is a UX Audit?",
    answer:
      "It's like a health check for your digital product, identifying what's working, what's not, and how to enhance it.",
  },
  {
    question: "What does the UX audit process involve?",
    answer: `We examine usability, user testing, interactivity, performance, and design elements to provide actionable insights.`,
  },
  {
    question: "How long does a typical UX audit process take?",
    answer: "It varies, but our goal is to provide prompt recommendations.",
  },
  {
    question: "When do I need a UX Audit ?",
    answer:
      "When you're busy with a project and need a fresh perspective or when seeking actionable insights.",
  },
  {
    question:
      "What are the benefits of conducting a UX audit for my digital product?",
    answer: `Enhance user satisfaction, boost engagement, make cost-effective improvements, and identify critical issues.`,
  },
  {
    question:
      "How often should I consider conducting a UX audit for my digital product ?",
    answer:
      "Regular audits ensure your product stays on the right track; we'll help you determine the right frequency.",
  },
  {
    question: "Who will be conducting the UX audit on my digital product?",
    answer: `Our team of experts with diverse domain experience.`,
  },
  {
    question: "What tools and methods are used in the UX audit process?",
    answer: `We employ various tools, including heuristic evaluation and usability testing, to deliver actionable insights.`,
  },
  {
    question:
      "Do you offer ongoing UX support or follow-up services after the audit?",
    answer:
      "Yes, we can provide ongoing support to implement recommended changes and track improvements.",
  },
];

const UXAudit = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    website: "",
    pack: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();
  const [ip, setIp] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const recaptchaRef = createRef();
  const [selectedPack, setSelectedPack] = useState("Standard");

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

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-1067948097/D8-iCJ_VoNwYEMGwnv0D",
      event_callback: callback,
    });
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      const captchaCode = recaptchaRef.current.getValue();
      if (captchaCode === "") {
        alert("Please click <I'm not a robot> before sending the submitting");
        setSubmitted(false);
        return;
      }
      setSubmitted(true);
      setMailSent(true);
      formData["ip"] = ip;
      try {
        axios
          .post("https://www.neointeraction.com/server/auditemail", {
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
              setMailSent(false);
              setFormData({
                name: "",
                mobile: "",
                email: "",
                company: "",
                employmentType: "",
                organizationName: "",
                specify: "",
              });
              // Router.push("/contact-thank-you");
              // gtag_report_conversion("");
            } else if (response.data.status === "fail") {
              alert("Message failed to send.");
            }
            setSubmitted(false);
          });
      } catch (err) {
        console.log("Error", err);
      }
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
    }
  };

  // function onCaptchaChange(value) {
  //   console.log("Captcha value:", value);
  // }

  return (
    <>
      <Head>
        <title>UX Audit Landing Page</title>
        <meta
          name="description"
          content="1-day UX/UI design workshop from experts using practical and proven design-solving methodologies."
        />
        {/* <meta
          name="keywords"
          content="UX design,UI engineering, Motion design, UX services, UI services, UX projects, UI projects, Video services, design team, design agency"
        /> */}
        <meta property="og:image" content={BannerSectionImage} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-12661901-1"
        ></script>
        <link
          rel="canonical"
          href="https://www.neointeraction.com/design-workshop"
        />
      </Head>
      <div className="de-landing-container audit-page">
        <div className="landing-banner pattern-right">
          <div className="container-fluid">
            <div className="row audit-page-header">
              <div className="col-md-7 col-sm-5 image-container">
                <img src={HeaderImg} alt="Logo" />
              </div>
              <div className="col-md-5 col-sm-12 col-xs-12 form-container">
                <ReactWOW animation="fadeInDown" delay="0s" duration="0.8s">
                  <div
                    id="form"
                    className="contact-form-landing book-audit-form"
                  >
                    <h2 className="landing-form-title">
                      Unlock Business Success with <span>Free UX Audit</span>
                    </h2>
                    <p>
                      Unearth the untapped potential of your digital product
                    </p>
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
                          placeholder="Your name"
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
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`input-custom  ${
                            formData?.email ? "" : "dark"
                          }`}
                          placeholder="Your work email"
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
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          className={`input-custom  ${
                            formData?.mobile ? "" : "dark"
                          }`}
                          placeholder="Your mobile number"
                        />
                      </div>
                      {simpleValidator.current.message(
                        "Mobile",
                        formData?.mobile,
                        "required|phone"
                      )}
                      <div className="form-block">
                        <input
                          type="text"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="Your current website"
                          className={`input-custom  ${
                            formData?.name ? "" : "dark"
                          }`}
                          onBlur={() =>
                            simpleValidator.current.showMessageFor("website")
                          }
                        />
                      </div>
                      {simpleValidator.current.message(
                        "website",
                        formData?.website,
                        "required"
                      )}
                      {/* <ReCAPTCHA
                        sitekey="6Lcux_0nAAAAAHpUZ0no7GR7f5PtLn7rsB8WLtmH"
                        ref={recaptchaRef}
                        size="normal"
                        onChange={onCaptchaChange}
                      /> */}
                      <button
                        type="submit"
                        class={`loader-btns custom-btn submit-btn-landing contact__submit-button ${
                          submitted ? "pointer-events-none" : ""
                        }`}
                      >
                        Book now
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
                  Trusted <span className="highlight">By</span>
                </h2>
                <ClientSlider landing />
              </div>
            </ReactWOW>
          </div>
        </div>
        <section className="need">
          <div>
            <h2>
              Need a fresh set of eyes on your{" "}
              <span className="highlight">digital product</span>?
            </h2>
            <p>
              Do you ever wonder if your website or app is as user-friendly as
              it could be? Are you getting the results you want from your
              digital product? If not, it's time for a UX audit. UX audits can
              help you solve:
            </p>
            <ul>
              <li>Low conversion rates</li>
              <li>High customer support costs</li>
              <li>Negative customer feedback</li>
              <li>A lack of user engagement</li>
              <li>A robust product that lacks user appeal</li>
            </ul>
          </div>
          <img src={FreshImg} alt="Fresh" />
        </section>
        <section className="why">
          <h2>
            Why conduct a <span className="highlight">UX Audit</span> ?
          </h2>
          <p className="subheading">
            Transform your digital product into a user-friendly powerhouse.
          </p>
          <div className="why-cards">
            {whyReasons.map((why) => (
              <WhyCard img={why.img} text={why.text} />
            ))}
          </div>
        </section>
        <section className="expect">
          <div>
            <h1>What to expect?</h1>
            <p className="subheading">Our audit team conducts:</p>
            <ul>
              <li>
                {expectData.map((exp) => (
                  <Expected img={exp.img} head={exp.head} desc={exp.desc} />
                ))}
              </li>
            </ul>
          </div>
          <img src={Expect} alt="A design at his craft" />
        </section>
        <ReactWOW animation="fadeInUp" delay="0s">
          <div className="client-testimonials">
            <div className=" ">
              <h1 className="landing-title">
                Client <span className="highlight">Testimonials</span>
              </h1>
              <div className="t-card-block">
                <div className="row testimonial-desktop">
                  {testimonial.map((item) => (
                    <div className="testimonial-card">
                      <img src={item.img} alt={item.name} />
                      <h3>{item.name}</h3>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="row testimonial-mobile">
                  {/* <TestimonialSlider /> */}
                </div>
              </div>
            </div>
          </div>
        </ReactWOW>
        <ReactWOW animation="fadeInUp" delay="0s">
          <section className="case-studies">
            <h2>
              Our <span className="highlight">Case Studies</span>
            </h2>
            <div className="case-study-card">
              <div>
                <h3>Check out our past UX audits</h3>
                <p>
                  Discover how we've helped our clients improve their user
                  experience.
                </p>
                <button>Download</button>
              </div>
              <img src={CaseStudy} alt="case study" />
            </div>
          </section>
        </ReactWOW>
        <ReactWOW animation="fadeInUp" delay="0s">
          <section className="ux-audit-packs ">
            <h2>
              UX Audit <span className="highlight">Packs</span>
            </h2>
            <div className="pack-cards">
              {packs.map((pack) => (
                <div
                  className={`audit-pack-card ${
                    pack.heading == "Standard" ? "recommand" : ""
                  }`}
                >
                  <img src={pack.img} alt="webpage layout" />
                  <h3>{pack.heading}</h3>
                  <h4 className="highlight">{pack.price}</h4>
                  <ul>
                    {pack.features.map((feature) => (
                      <li>
                        <p>{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <a href="#form">
                    <button
                      onClick={() => {
                        setFormData((prevData) => ({
                          ...prevData,
                          pack: pack.heading,
                        }));
                      }}
                    >
                      Book Now
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </ReactWOW>
        <ReactWOW animation="fadeInUp" delay="0s">
          <div className="faq-section">
            <div className="container">
              <h1 className="landing-title text-center">
                FAQ<span className="highlight">s</span>
              </h1>
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

export default UXAudit;

function WhyCard({ img, text }) {
  return (
    <div className="why-container">
      <img src={img} />
      <p>{text}</p>
    </div>
  );
}

function Expected({ img, head, desc }) {
  return (
    <div className="expected">
      <img src={img} alt="" />
      <div>
        <h2>{head}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}
