import blogData from "../data/blog";
import Article from "./Article";

function ArticleList() {
  //console.log(blogData.posts);

  const posts = blogData.posts.map((post) => (
    //console.log(blogData.posts)
    <Article key={post.id} value={post} />
  ));

  console.log(posts);
  return (
    <main>
      <div>{posts}</div>
    </main>
  );
}

export default ArticleList;
