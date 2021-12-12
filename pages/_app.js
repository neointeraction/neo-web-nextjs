import "../css/main.css";
import Head from "next/head";

import MainLayout from "../layouts/MainLayout/MainLayout";

import { DataProvider } from "../context/DataContext";
import { VideoProvider } from "../context/VideoContext";
import { BlogProvider } from "../context/BlogContext";
import { BFSIProvider } from "../context/BFSIContext";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <VideoProvider>
        <BlogProvider>
          <BFSIProvider>
            <MainLayout>
              <Head>
                <link rel="shortcut icon" href="/favicon.png" />
              </Head>
              <Component {...pageProps} />;
            </MainLayout>
          </BFSIProvider>
        </BlogProvider>
      </VideoProvider>
    </DataProvider>
  );
}

export default MyApp;
