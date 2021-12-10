import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import axios from "axios";
import styles from "./styles/feed.module.css";

import { Container, Grid } from "@material-ui/core";

import Card from "../components/Card/Card";




export default function Create() {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => { 
            const Token = localStorage.getItem('Token');
            console.log(`Token here ---> ${Token}`);
            await axios.get(`http://localhost:37606/api/blogs`, { headers: {"Authorization" : `Bearer ${Token}`} })
            .then((response) => {
                    setData([...response.data]);
                    console.log(data);
            })
            .catch((error) => console.log(error));
        }  
        fetchData();
    }, []);


    return (
        <Container className={styles.container}>
            <Grid container direction="row" justifyContent="space-between"
                alignItems="stretch">
                <Grid item xs={10}>
                    <Grid container direction="column">

                    {data.map((i, index) => {
                        return (
                            <Grid key={index} item>
                                <Card 
                                title={i.title} 
                                description={i.description}
                                content={i.content}
                                />
                            </Grid>
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
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};