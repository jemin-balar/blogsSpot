import React from "react";
import styles from "./styles.module.css";

const about = () => {
  return (
    <section className={styles.secmain}>
      <div className={styles.mainbox}>
        <div className={styles.section1}>
          <h1>What Is blogsSpot</h1>
          <p>
            Certainly! A blog post is a piece of content published on a blog,
            typically in the form of an article, essay, or commentary. Blogs are
            websites or online platforms where individuals or organizations
            regularly publish written content on various topics such as personal
            experiences, news, opinions, tutorials, reviews, and more.
          </p>
        </div>
        <div className={styles.section2}>
          <h1>Our Purpose</h1>
          <div>
            <p>
              <span className="text-blue-700">Title</span> : Every blog post has
              a title that succinctly describes the content and topic of the
              post. The title is often displayed prominently at the top of the
              post and serves to attract readers' attention.
            </p>
            <p>
              <span className="text-blue-700">Content</span>: The main body of
              the blog post contains the actual written content, which can vary
              in length depending on the topic and depth of discussion. This
              content typically includes text, images, videos, and other
              multimedia elements to enhance the reader's experience.
            </p>
            <p>
              <span className="text-blue-700">Author</span>: The main body of
              the blog post contains the actual written content, which can vary
              in length depending on the topic and depth of discussion. This
              content typically includes text, images, videos, and other
              multimedia elements to enhance the reader's experience.
            </p>
            <p>
              <span className="text-blue-700">Categories/Tags</span> : Blog
              posts are often categorized or tagged based on their topic or
              theme. Categories help organize content and make it easier for
              readers to navigate the blog and find related posts on specific
              subjects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default about;
