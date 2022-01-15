import { useQueryClient} from "react-query";
import {usePosts} from "../Utils/Callers";
import { Link } from "react-router-dom";

function Posts({ setPostId }) {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = usePosts();

    return (
      <div>

        <h1>Posts</h1>
        <div>
          {status === "loading" ? (
            "Loading..."
          ) : status === "error" ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              <div>
                {data.map((post) => (
                  <p key={post.id}>
                      { console.log( queryClient.getQueryData(["post", post.id]) ) }
                    <Link
                      to={`/posts/${post.id}`}
                      style={
                        // We can access the query data here to show bold links for
                        // ones that are cached
                        queryClient.getQueryData(["post", post.id])
                          ? {
                              fontWeight: "bold",
                              color: "green",
                            }
                          : {}
                      }
                    >
                      {post.title}
                    </Link>
                  </p>
                ))}
              </div>
              <div>{isFetching ? "Background Updating..." : " "}</div>
            </>
          )}
        </div>
      </div>
    );
}

export default Posts
