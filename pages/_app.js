import "assets/css/main.css";
import Head from "next/head";

import MainLayout from "layouts/MainLayout/MainLayout";

import { DataProvider } from "context/DataContext";
import { VideoProvider } from "context/VideoContext";
import { BlogProvider } from "context/BlogContext";
import { BFSIProvider } from "context/BFSIContext";
import { useEffect } from "react";

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

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-12661901-1");
  }, []);

  return (
    <DataProvider>
      <VideoProvider>
        <BlogProvider>
          <BFSIProvider>
            <MainLayout>
              <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <script
                  async
                  src="https://www.googletagmanager.com/gtag/js?id=UA-12661901-1"
                ></script>
              </Head>
              <Component {...pageProps} />
            </MainLayout>
          </BFSIProvider>
        </BlogProvider>
      </VideoProvider>
    </DataProvider>
  );
}

export default MyApp;
