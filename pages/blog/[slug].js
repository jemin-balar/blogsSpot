import axios from "axios";
import React from "react";

const Slug = ({ blog }) => {
  return blog ? (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            {blog?.yoast_head_json?.author}
          </h1>
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-3">
            {blog?.slug}
          </h2>
          <h2 className="text-xs text-gray-500 tracking-widest font-medium title-font mb-3">
            {blog?.yoast_head_json?.og_description}
          </h2>
          <p
            className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"
            dangerouslySetInnerHTML={{
              __html: blog?.content?.rendered,
            }}
          ></p>
        </div>
      </div>
    </section>
  ) : (
    <div>Loading...</div>
  );
};

export async function getServerSideProps(context) {
  try {
    let { slug } = context.query;
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/posts/${slug}`
    );
    const blog = res.data;
    return { props: { blog } };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return { props: { blog: null } };
  }
}

export default Slug;
