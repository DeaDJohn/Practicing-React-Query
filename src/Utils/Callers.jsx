import { useQuery} from "react-query";

import axios from "axios";

export function usePosts() {
    return useQuery("posts", async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    });
  }

const getPostById = async (id) => {
    console.log(id);
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
};

export function usePost(postId) {
    return useQuery(["post", postId], () => getPostById(postId), {
        enabled: !!postId,
    });
}