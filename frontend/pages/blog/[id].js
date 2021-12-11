import React, {useState, useEffect} from "react";
import PostStyling from "../styles/Post/Post.module.css"
import { useRouter } from 'next/router';
import Router from "next/router";
import axios from 'axios';
import jwt from 'jwt-decode'
import Link from 'next/link';

const Blog = () => {

    const router = useRouter();
    const { id } = router.query;
    const [user, setUser] = useState({});

    const [data, setData] = useState(null);

    const deleteBlog = () => {
        const deleteBlogAsync = async () => { 
            const Token = localStorage.getItem('Token');
            await axios.delete(`http://localhost:37606/api/blogs/${id}`, { headers: {"Authorization" : `Bearer ${Token}`} })
            .then((response) => { alert(`Blog Deleted Successfully`); })
            .catch((error) => console.log(error));
        }  
        deleteBlogAsync();
        Router.push('/feed');
    }
 
    useEffect(() => {
        if(!id) { return; }
        const Token = localStorage.getItem('Token');
        setUser(jwt(Token));
        const fetchData = async () => { 
            const Token = localStorage.getItem('Token');
            await axios.get(`http://localhost:37606/api/blogs/${id}`, { headers: {"Authorization" : `Bearer ${Token}`} })
            .then((response) => {setData(response.data);})
            .catch((error) => console.log(error));
        }  
        fetchData();
    }, [id]);

  return (
    <>
    { data == null && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width:'98vw'}}>
            Resource Not Available!
        </div>
    )}

    { data != null && ( 
        <div className={PostStyling.container}>
            <div className={PostStyling.postcontainer}>

                <div className={PostStyling.postheader}>

                    <div className={PostStyling.imagecontainer}>
                        <img style={{height: '120px', width: '100px'}} src="/blog.png" alt=""></img>
                    </div>

                    <div className={PostStyling.headingcontainer}>
                        <h1 className={PostStyling.heading}> {data.title} </h1> 
                        <div className={PostStyling.teachername}> <b> Author:</b> {user.Name} </div>
                    </div> 

                </div>

                <h1> Description </h1>
                <div className={PostStyling.description}>
                    <p className={PostStyling.descriptionContent}>
                        {data.description}
                    </p>
                </div>

                <h1> Content </h1>
                <div className={PostStyling.postcontent}>
                    <p className={PostStyling.content}>
                        {data.content}
                    </p>
                </div>

                <div className={PostStyling.buttonContainer}>
                    <Link href={`/update/${id}`}>
                        <a>
                            <button className={PostStyling.lbtn}> Update </button> 
                        </a>
                    </Link> 
                    <button onClick={deleteBlog} className={PostStyling.rbtn}> Delete </button>
                </div>
        
            </div>
        </div>
    )}
    </>
  );
};


export default Blog;