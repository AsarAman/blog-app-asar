import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles (){
  return fs.readdirSync(postsDirectory)
}
export function singlePostData(postIdentifier) {
  const blogSlug = postIdentifier.replace(/\.md$/, ""); //removes the file extension id exists
  const filePath = path.join(postsDirectory, `${blogSlug}.md`);
  const fileContent = fs.readFileSync(filePath);
  const { data, content } = matter(fileContent);

  const postData = {
    slug: blogSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles()

  const allPosts = postFiles.map((potFile) => {
    return singlePostData(potFile);
  });

  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
