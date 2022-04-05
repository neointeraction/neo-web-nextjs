import React from "react";
import Head from "next/head";
import ReactWOW from "react-wow";
import ReactModal from "react-modal";


import Quotes from "../components/Quotes";
import ImageVideoText from "../components/ImageVideoText";
import SectionTitle from "../components/SectionTitle";
import ProcessCard from "../components/ProcessCard";
import GetQuoteModal from "../components/GetQuoteModal";
import FormContactEBkLP from "../components/FormContactEBkLP";

import Banner from "../images/ebookBanner.jpg";
import EbookImg from "../images/ebookImgBook.jpg";
import Tablet1 from "../images/tablet1.png";
import Tablet2 from "../images/tablet2.png";
import Tablet3 from "../images/tablet3.png";
import { useState } from "react";


const axios = require("axios").default;

function loadScript (src){
  return new Promise(resolve =>{

  
  const script = document.createElement('script')
  script.src = src
  
  script.onload = () => {
    resolve(true)
  }
  script.onerror = () => {
    resolve(false)
  }
  document.body.appendChild(script)
})
}

// async function displayRazorpay() {
//   const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

//   if (!res) {
//     alert('Razorpay SDK failed to load. Are you online?')
//     return
//   }

//   const data = await fetch('https://www.neointeraction.com/server/razorpay', { method: 'POST' }).then((t) =>
//     t.json()
//   )

//   console.log(data)

//   const options = {
//     key:'rzp_live_msovzCS0LY9PTS',
//     currency: data.currency,
//     amount: data.amount.toString(),
//     order_id: data.id,
//     name: 'Ebook',
//     description: 'Thank you for purchasing our Ebook',
//     handler: function (response) {
//       // alert(response.razorpay_payment_id)
//       // alert(response.razorpay_order_id)
//       // alert(response.razorpay_signature)
//     },
//   }
//   const paymentObject = new window.Razorpay(options)
//   paymentObject.open()
//   }

const Ebook = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <Head>
        <title>
          Neointeracton | Creative UX/UI, Motion design and engineering agency
        </title>
        <meta
          name="description"
          content="Neointeraction is a design agency specialized in User experience (UX & UI) designing, engineering as well as motion design with 15 years of experience in B2B enterprise projects."
        />
        <meta
          name="keywords"
          content="UX design,UI engineering, Motion design, UX services, UI services, UX projects, UI projects, Video services, design team, design agency"
        />
        {/* <script
            async
            src="https://js.convertflow.co/production/websites/35164.js"
          ></script> */}
      </Head>
      <div className="container">
        <div className="home-content">
          <h1 className="main-title animated fadeIn delay-0.5s">
            Integrate and practise Agile UX with our E-book
          </h1>
          {/* <h2 className="sub-title main-sub-title animated fadeIn">
            An ebook which helps you to simplify your UX process
          </h2> */}
          {/* <ReactWOW animation="fadeIn" offset={0}>
            <div className="grab-button">
              <button className="custom-btn inactive">
                Grab your E Book Copy Now
              </button>
            </div>
          </ReactWOW> */}
        </div>
      </div>
      <div className="ebook-banner">
        <ReactWOW animation="fadeIn" offset={0}>
          <div className="banner-content ebk-banner">
            <h1 className="ebook-banner-title">
              Learn <span className="title-red">UX</span> <br/>
              Build <span className="title-red">Products</span>
            </h1>
            {/* <button className="custom-btn inactive" onClick={displayRazorpay}>Buy now @ ₹199</button>  https://buy.stripe.com/test_eVa5kueIxg6SaXK144 */}
            {/* <form> <button className="custom-btn inactive" onClick={displayRazorpay}>Click Me</button> <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_ItCgN3ejTHQ3ph" async></script> </form> */} 
            <a className="custom-btn inactive" href="https://buy.stripe.com/test_eVa5kueIxg6SaXK144">Buy now @ ₹199</a>    
            {/* https://buy.stripe.com/3csbJp3xxeSz6vm5kl  */}
          </div>
        </ReactWOW>
      </div>
      <div className="container ebk-container">
        <div className="home-content">
          <div>
            <ReactWOW animation="fadeIn" offset={-200}>
              <div>
                <Quotes
                  quoteText="Agile UX is a set of processes that may seem restrictive but actually 
                  prevents development of fixed mindset about a problem as the process is based on iteration and incremental improvements"
                />
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" delay="0s" offset={0}>
              <div>
                <ImageVideoText
                  video={false}
                  ProjectVideo=""
                  componentOrientation="image-left"
                  ProjectImage={EbookImg}
                  titleText="Why should you buy this book ?"
                  contentText={
                    <div className="ebk-ybuy">
                      <p >
                      This book guides developers and designers to get into the agile mindset and iterate 
                      and develop products that the customers want. For the business or other stakeholders this book 
                      gives a glimpse of the advantages the agile mindset can have in making your product be a great 
                      experience for the users.
                      </p>
                      {/* <ul className="solution-list mb-3">
                        <li>Six steps of Agile Ux</li>
                        <li>How business should view user experience?</li>
                        <li>
                          Create great user experience by following the agile ux
                          design
                        </li>
                      </ul> */}
                     <a className="custom-btn inactive" href="https://buy.stripe.com/test_eVa5kueIxg6SaXK144">Buy now @ ₹199</a>
                    </div>
                  }
                />
              </div>
            </ReactWOW>
            <div className="section-padding">
              <ReactWOW animation="fadeIn" delay="0s" offset={0}>
                <div className="text-center">
                  <SectionTitle
                    title="What’s inside the book"
                    subtitle="Explore different aspects of agile ux design"
                    center
                  />
                </div>
                <div className="row p-cards">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="custom-process-card">
                      <ProcessCard
                        className="process-outcom-card"
                        backgroundImages={Tablet1}
                        infoText="It is iterative and evolving in nature.  It enables teams to make incremental improvements to the product with each iteration."
                        cardTitle="Agile UX: Introduction"
                        noBg
                        customClass={"Tablet1"}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="custom-process-card">
                      <ProcessCard
                        className="process-outcom-card"
                        backgroundImages={Tablet2}
                        infoText="Each stage involves relevant stakeholders in your organization that take part in the process to make your products highly efficient and usable."
                        cardTitle="Agile UX: Implementation"
                        noBg
                        customClass={"Tablet2"}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="custom-process-card">
                      <ProcessCard
                        className="process-outcom-card"
                        backgroundImages={Tablet3}
                        infoText="Frictionless, satisfying user experiences are important for businesses, as they help boost customer satisfaction by providing enhanced accessibility."
                        cardTitle="User Experience & Business"
                        noBg
                        customClass={"Tablet3"}
                      />
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </div>

            <ReactWOW animation="fadeIn" delay="0s" offset={0}>
              <div>
                <ImageVideoText
                  video={false}
                  ProjectVideo=""
                  componentOrientation="image-left"
                  ProjectImage={EbookImg}
                  titleText="Drop your email below"
                  contentText={
                    <div className="ebk-ybuy">
                      <p>
                        Join our tribe to get some awesome freebies and insights
                        into the world of design and our design process.
                      </p>
                    <FormContactEBkLP />
    
                    </div>
                  }
                />
              </div>
            </ReactWOW>
            {/* <ReactWOW animation="fadeIn" offset={-200}>
              <div className="contact-section mb-0">
                <div className="container">
                  <SectionTitle
                    title="Do you want to drop us message ?"
                    subtitle="Want to have a talk with the team."
                  />
                  <button className="custom-btn" onClick={handleOpenModal}>
                    Contact us
                  </button>
                </div>
              </div>
            </ReactWOW> */}
            {/* <ReactModal
              isOpen={open}
              contentLabel="career"
              onRequestClose={handleCloseModal}
              className="career-modal animated zoomIn"
              overlayClassName="Overlay"
            >
              <GetQuoteModal
                formtitle="Contact us"
                togglePopover={handleCloseModal}
              />
            </ReactModal> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebook;