import { useStringParam } from "src/core/hooks/useStringParam";

const BlogPostPage = () => {
  const slug = useStringParam("slug");
  return <>BlogPost: {slug}</>;
};

export default BlogPostPage;
