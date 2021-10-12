import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    // let name = 'Gary';
    const [name, setName] =useState('Gary');
    const [age, setAge] =useState(25);

    const [blogs,setBlogs] = useState(null)


    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id != id);
    //     setBlogs(newBlogs);
    // }
    
    useEffect(() =>{
        fetch('http://localhost:8000/blogs')
        .then(res =>{
            return res.json();
        })
        .then(data => {
            setBlogs(data)
        })
        console.log('use effect ran')
        console.log(name)
    }, []);

    const handleClick = () => {
        setName('Adina');
        setAge(30);

        console.log('yo')
    }

    const handleClick2 = (name, e) => {
        console.log('yo ' + name, e.target)
        setName('Gary');
        setAge(25);

    }

    

    return ( 
        <div className="home">
                {blogs &&<BlogList blogs={blogs} title = "All Blogs!" />}
                {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title = "Marios' blog!"/>}
            <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name} is { age}  years old</p>
            <button onClick={handleClick}> Click me</button>
            <button onClick={(e) => handleClick2('Gary', e)}> Click me again</button>

        </div>
     );
}
 
export default Home;