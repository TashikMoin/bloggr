import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import axios from "axios";
import styles from "./styles/feed.module.css";
import Router from "next/router";
import { Container, Grid } from "@material-ui/core";

import Card from "../components/Card/Card";




export default function Create() {

    const [data, setData] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [Token, setToken] = useState(null);
    useEffect(() => {
        const fetchData = async () => { 
            setToken(localStorage.getItem('Token'));
            await axios.get(`http://localhost:37606/api/blogs`, { headers: {"Authorization" : `Bearer ${localStorage.getItem('Token')}`} })
            .then((response) => {setData([...response.data]);})
            .catch((error) => console.log(error));
        }  
        if(searchString == ''){
            fetchData();
        }
    }, [data, searchString]);

    const searchBlogs = async () => {
        await axios.get(`http://localhost:37606/api/SearchBlogs/${searchString}`, { headers: {"Authorization" : `Bearer ${localStorage.getItem('Token')}`} })
        .then((response) => {setData([...response.data]);})
        .catch((error) => console.log(error));
    }

    const logout = () => {
        localStorage.removeItem('Token');
    }


    return (
        <>
        { Token == null &&
            <div style={{display: 'flex', height: '100vh', width: '98vw', justifyContent: 'center', alignItems: 'center'}}>
                Unauthorized Access !
            </div>
        }

        { Token != null && (
            <Container className={styles.container}>
                <Grid container direction="row" justifyContent="space-between"
                    alignItems="stretch">
                    <Grid item xs={10}>
                        <Grid container direction="column">

                        <div style={{display: 'flex', justifyContent: 'center', color: 'grey'}}>
                            <h1> Your Blogs </h1>
                        </div>

                        <div style={{ display: 'flex', marginTop: '3vh'}}>
                            <input 
                            onChange={(e)=> setSearchString(e.target.value)}
                            value={searchString}
                            placeholder='Search a blog by title.'
                            style={{
                            height: '40px',
                            width: '60vw', 
                            padding: '10px',
                            outline: 'none'}} />
                            <button 
                            onClick={searchBlogs}
                            style={{ cursor: 'pointer', color: '#ffffff', marginLeft: '10px', height: '40px', width: '100px', backgroundColor: '#3627E4'}}> Search</button>
                        </div>



                        {data.map((i, index) => {
                            return (
                                <Link key={index} href={`/blog/${i.blog_Id}`}>
                                    <a>
                                        <Grid style={{margin: '30px'}} item>
                                            <Card 
                                            title={i.title} 
                                            description={i.description}
                                            content={i.content}
                                            />
                                        </Grid>
                                    </a>
                                </Link>
                            );
                        })}
                                


                        </Grid>
                    </Grid>

                    <Grid item xs={2}>
                        <Grid container direction="column" className={styles.buttonSection}>
                            <Link href="/create">
                                <a>
                                    <div className={styles.addPostButton}>
                                        <span className={styles.plus}>+</span>
                                    </div>
                                </a>
                            </Link>
                            <Link href="/profile">
                                <a>
                                    <div className={styles.profileButton}>
                                        <img src="/user.png" width="28px" height="28px" alt="" />
                                    </div>
                                </a>
                            </Link>
                            <Link href="/login">
                                <a>
                                    <div onClick={logout} style={{ color: '#ffffff'}} className={styles.addPostButton}>
                                        Logout
                                    </div>
                                </a>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>)
        }
        </>
    );
};