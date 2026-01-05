import axios from "axios";

export async function fetchFeaturedBlogs() {
  const { data } = await axios.get("/api/blog/features");
  return data;
}