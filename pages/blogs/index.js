import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from 'next/image'
import { formatDateToMM, truncateText } from "@/utils/utils";

const Blogs = ({ blogs }) => {
  return (
    <main className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          <div className="flex flex-wrap m-2">
            {blogs?.map((item) => {
              return (
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 relative border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    {item?.yoast_head_json?.og_image?.length >= 0 && (
                      <Image
                        className="lg:h-48 md:h-36 w-full object-fill"
                        src={item?.yoast_head_json?.og_image[0]?.url}
                        alt={item?.yoast_head_json?.og_image[0]?.type}
                      />
                    )}
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Author :
                        <span className="text-green-700">
                          {item?.yoast_head_json?.author}
                        </span>
                      </h2>
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Publication At :{" "}
                        <span className="text-green-700">
                          {formatDateToMM(item?.date)}
                        </span>
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {item?.title?.rendered}
                      </h1>
                      <div
                        className="leading-relaxed mb-3"
                        dangerouslySetInnerHTML={{
                          __html: truncateText(item?.excerpt?.rendered, 0, 74),
                        }}
                      ></div>
                      <div className="flex items-center flex-wrap">
                        <Link href={`/blog/${item.id}`}>
                          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
