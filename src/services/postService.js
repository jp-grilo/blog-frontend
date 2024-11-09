import axios from "axios";

const API_URL = "http://localhost:5023/api/posts";

class PostService {
  static async getPosts() {
    let res = null;
    await axios
      .get(API_URL)
      .then((response) => {
        res = response;
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
        throw error;
      });
    return res;
  }

  static async PostPost(post) {
    let res = null;
    await axios
      .post(API_URL, post)
      .then((response) => {
        res = response.data;
      })
      .catch((error) => {
        console.error("There was an error creating the post!", error);
        throw error;
      });
    return res;
  }
}

export default PostService;
