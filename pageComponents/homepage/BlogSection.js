import React, { useEffect } from "react";
import Link from "next/link";
import { BlogContext } from "context/BlogContext";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import CardTileUpfront from "components/CardTileUpfront";

const titleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -5 },
};

const subTitleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 5 },
};

const BlogSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <div className="n-blog-section">
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={titleVariant}
          className="n-banner-title"
        >
          <span className="highlight"> Newly </span> in
        </motion.h1>
        <motion.h4
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={subTitleVariant}
          className="n-banner-subtext"
        >
          Read through our curated list of blogs
        </motion.h4>
      </div>
      <BlogContext.Consumer>
        {(context) => (
          <div className="row p-cards">
            {context.state.blogs?.slice(0, 3).map((item) => (
              <div className="col-md-4 mb-5" key={item.id}>
                <Link
                  href={{
                    pathname: `/Blog/${item.blogTitle
                      .replace(
                        /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                        ""
                      )
                      .replace(/ /g, "-")}`,
                  }}
                >
                  <div className="link">
                    <CardTileUpfront
                      className={item.id}
                      category={item.blog_categories.map(
                        (cat) => cat.blogCategoryName
                      )}
                      cardTitle={item.blogTitle}
                      backgroundImages={item.blogCardImage.url}
                      blogtag1={item.blog_categories.map(
                        (cat) => cat.blogCategoryName
                      )}
                      author={item.blogAuthor}
                      postedTime={item.created_at}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </BlogContext.Consumer>
    </div>
  );
};

export default BlogSection;
