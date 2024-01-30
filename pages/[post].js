import React from "react";
import getPosts from "../components/getPosts";
import { marked } from "marked";

export default function post({ post }) {
  return (
    <main>
      <div className="container mx-auto w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12 p-4">
        <h1 className="font-bold text-2xl">{post.title}</h1>
        <span className="text-sm">{post.date}</span>
        <img src="https://picsum.photos/800/200" alt="random image" className=" max-w-full" />

        <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} className="mt-10"></div>
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: {
      post: post.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const post = posts.find((post) => post.id === params.post);
  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}
