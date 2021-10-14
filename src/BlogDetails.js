import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
const Blogdetails = () => {
const { id } =useParams();
const { data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)

    return ( 
        <div className="blog-details">
            <h2>Blog details - {id}</h2>
            {isPending && <div> Loading... </div>}
            {error && <div> {error}</div>}
            {blog && (
                <article>
                <h2>{ blog.title }</h2>
                <p>Written By { blog.author}</p>
                <div>{blog.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default Blogdetails;