
import { usePost } from "../Utils/Callers";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Post() {
	let { postId } = useParams();
	const { status, data, error, isFetching } = usePost(postId);

	return (
		<div>
			<div>
				<Link to={`/posts/`}  >
					Back
				</Link>
			</div>
			{!postId || status === "loading" ? (
				"Loading..."
			) : status === "error" ? (
				<span>Error: {error}</span>
			) : (
				<>
					<h1>{data.title}</h1>
					<div>
						<p>{data.body}</p>
					</div>
					<div>{isFetching ? "Background Updating..." : " "}</div>
				</>
			)}
		</div>
	);
}

export default Post


