import React from 'react'
import getPosts from '../components/getPosts';

export default function post({post}) {
  console.log(post);
  return (
    <div>{post.title}</div>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map(post => ({
    params: {
      post: post.id
    }
  }));

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const post = posts.find(post => post.id === params.post);
  return {
    props: {
      post
    },
    revalidate: 1
  }
}