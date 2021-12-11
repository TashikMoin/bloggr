import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import axios from 'axios';
import Router from "next/router";
import { useRouter } from 'next/router';
import styles from "../styles/create.module.css";

import {
    Container,
    Grid,
    TextField
} from "@material-ui/core";

export default function Update() {

    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [content, setContent] = useState(null);
    const router = useRouter();
    const { id } = router.query;



    useEffect(() => {
        if(!id) { return; }
        const fetchData = async () => { 
            const Token = localStorage.getItem('Token');
            await axios.get(`http://localhost:37606/api/blogs/${id}`, { headers: {"Authorization" : `Bearer ${Token}`} })
            .then((response) => {setTitle(response.data.title); setDescription(response.data.description); setContent(response.data.content);})
            .catch((error) => console.log(error));
        }  
        fetchData();
    }, [id]);




    const updateBlog = (event) => 
    {
        event.preventDefault();
        if (title == "" || description == "" || content == "") 
        {
          alert(`Please fill all the required fields!`);
        } 
        else 
        {
            const formData = {
            Title: title,
            Description: description,
            Content: content
            };
            const Token = localStorage.getItem('Token');
            axios.put(`http://localhost:37606/api/blogs/${id}`, formData, { headers: {"Authorization" : `Bearer ${Token}`} })
            .then(response => {alert(`Blog Updated!`); Router.push('/feed')} )
            .catch(error => alert(error));
        }

    };

    return (
        <>
        { (title == null || description == null || content == null) && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width:'98vw'}}>
                Resource Not Available!
            </div>
        )}

        { (title != null && description != null && content != null) && (
        <Container className={styles.container}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="stretch">
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                >
                    <Link href="/feed">
                        <Grid item>
                            <img src="/chevron-left.png" width="64px" height="64px" />
                        </Grid>
                    </Link>

                    <Grid onClick={updateBlog} style={{cursor: 'pointer'}} item className={styles.postButton}>
                        <span> Update </span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="flex-start" alignItems="stretch" style={{ paddingTop: "50px" }} >
                <Grid item xs={12} className={styles.contentShowcase}>
                    <div className={styles.centerTextField}>
                        <TextField
                            id="standard-multiline-static"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            multiline
                            rows={4}
                            variant="standard"
                            className={styles.textFieldStyling}
                        />
                    </div>
                    <div className={styles.centerTextField}>
                        <TextField
                            id="standard-multiline-static"
                            multiline
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            variant="standard"
                            className={styles.textFieldStyling}
                        />
                    </div>
                    <div className={styles.centerTextField}>
                        <TextField
                            id="standard-multiline-static"
                            multiline
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            rows={35}
                            variant="standard"
                            className={styles.textFieldStyling}
                        />
                    </div>
                </Grid>
            </Grid>
        </Container >)
        }
    </>
    );
};