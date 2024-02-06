import React from "react";
import axios from "axios";
import Link from "next/link";
import { formatDateToDD, formatDateToMM } from "@/utils/utils";

const Blogs = ({ blogs }) => {
  return (
    <main className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          {blogs?.map((item) => {
            return (
              <div className="py-8 px-4 lg:w-1/3" key={item.id}>
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                      {formatDateToMM(item?.date)}
                    </span>
                    <span className="font-medium text-lg text-gray-800 title-font leading-none">
                      {formatDateToDD(item?.date)}
                    </span>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                      Author {item?.author}
                    </h2>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                      {item?.title?.rendered}
                    </h1>
                    <div
                      className="leading-relaxed mb-5"
                      dangerouslySetInnerHTML={{
                        __html: item?.content?.rendered,
                      }}
                    />
                    <Link href={`/blog/${item.id}`} passHref legacyBehavior>
                      <span className="text-indigo-500 inline-flex items-center cursor-pointer">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export async function getServerSideProps() {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/posts`);
    const blogs = res.data;
    return { props: { blogs } };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { props: { blogs: [] } };
  }
}

export default Blogs;
