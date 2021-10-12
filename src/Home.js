import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    // let name = 'Gary';
    const [name, setName] =useState('Gary');
    const [age, setAge] =useState(25);

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    
    ])

    const handleClick = () => {
        setName('Adina');
        setAge(30);

        console.log('yo')
    }

    const handleClick2 = (name, e) => {
        console.log('yo ' + name, e.target)
    }


    return ( 
        <div className="home">
                <BlogList blogs={blogs} title = "All Blogs!"/>
                <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title = "Marios' blog!"/>
 
            <p>{name} is { age}  years old</p>
            <button onClick={handleClick}> Click me</button>
            <button onClick={(e) => handleClick2('Gary', e)}> Click me again</button>

        </div>
     );
}
 
export default Home;