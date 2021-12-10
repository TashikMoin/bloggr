import React, {useState} from 'react';
import Link from 'next/link';
import axios from 'axios';
import Router from "next/router";
import styles from "./styles/create.module.css";

import {
    Container,
    Grid,
    TextField
} from "@material-ui/core";

export default function Create() {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [content, setContent] = useState();

    const post = (event) => 
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
            axios.post('http://localhost:37606/api/newblog', formData, { headers: {"Authorization" : `Bearer ${Token}`} })
            .then(response => {alert(`Blog Created!`); Router.push('/feed')} )
            .catch(error => alert(error));
        }

    };

    return (
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

                    <Grid onClick={post} style={{cursor: 'pointer'}} item className={styles.postButton}>
                        <span>Post</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="flex-start" alignItems="stretch" style={{ paddingTop: "50px" }} >
                <Grid item xs={12} className={styles.contentShowcase}>
                    <div className={styles.centerTextField}>
                        <TextField
                            id="standard-multiline-static"
                            label="Title"
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
                            label="Description"
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
                            label="Content"
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
        </Container >
    );
};