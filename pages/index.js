import React from "react";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/blogs");
  }, []);

  return <main></main>;
};

export default HomePage;
