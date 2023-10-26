import "assets/css/main.css";
import "nextjs-breadcrumbs/dist/index.css";
import Head from "next/head";

import MainLayout from "layouts/MainLayout/MainLayout";
import LandingLayout from "layouts/LandingLayout/LandingLayout";
import LandingHeaderOnlyLayout from "layouts/LandingHeaderOnlyLayout/LandingHeaderOnlyLayout";

import { DataProvider } from "context/DataContext";
import { VideoProvider } from "context/VideoContext";
import { BlogProvider } from "context/BlogContext";
import { BFSIProvider } from "context/BFSIContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { EventProvider } from "context/EventContext";
import { TestimonialProvider } from "context/TestimonialContext";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   var Tawk_API = Tawk_API || {},
  //     Tawk_LoadStart = new Date();
  //   (function () {
  //     var s1 = document.createElement("script"),
  //       s0 = document.getElementsByTagName("script")[0];
  //     s1.async = true;
  //     s1.src = "https://embed.tawk.to/604cf7ed067c2605c0b80804/1f0magu96";
  //     s1.charset = "UTF-8";
  //     s1.setAttribute("crossorigin", "*");
  //     s0.parentNode.insertBefore(s1, s0);
  //   })();
  // }, []);

  // console.log(pageProps, "Component");

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-12661901-1");
  }, []);

  const router = useRouter();
  const { pathname } = router;

  let Layout = MainLayout; // Default layout component

  // Check if the current page needs a different layout
  if (pathname === "/design-workshop") {
    Layout = LandingLayout;
  }

  if (
    pathname === "/registration-thank-you" ||
    pathname === "/contact-thank-you"
  ) {
    Layout = LandingHeaderOnlyLayout;
  }

  return (
    <DataProvider>
      <VideoProvider>
        <BlogProvider>
          <BFSIProvider>
            <EventProvider>
              <TestimonialProvider>
                <Layout>
                  <Head>
                    <link rel="shortcut icon" href="/favicon.png" />
                    <meta
                      property="og:image"
                      itemProp="image"
                      content="https://www.neointeraction.com/link preview image.png"
                    />
                    <script
                      async
                      src="https://www.googletagmanager.com/gtag/js?id=UA-12661901-1"
                    ></script>
                    <script
                      dangerouslySetInnerHTML={{
                        __html: `
     (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "cr09zcax3l");
`,
                      }}
                    />
                    ;
                  </Head>
                  <Component {...pageProps} />
                </Layout>
              </TestimonialProvider>
            </EventProvider>
          </BFSIProvider>
        </BlogProvider>
      </VideoProvider>
    </DataProvider>
  );
}

function getLayout(Component) {
  // Add conditions to return the desired layout component for specific pages
  if (Component === "") {
    return LandingLayout;
  }

  // Default layout component
  return MainLayout;
}

export default MyApp;
