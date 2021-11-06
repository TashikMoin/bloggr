import React from 'react';

import styles from "./styles/feed.module.css";

import { Container, Grid } from "@material-ui/core";

import Card from "../components/Card/Card";

export default function Create() {

    return (
        <Container className={styles.container}>
            <Grid container direction="row" justifyContent="space-between"
                alignItems="stretch">
                <Grid item xs={10}>
                    <Grid container direction="column">
                        <Grid item>
                            <Card text="Hello, World!" date="1st January, 2020" likes="5" />
                        </Grid>
                        <Grid item>
                            <Card text="Hello, World!" date="1st January, 2020" likes="5" />
                        </Grid>
                        <Grid item>
                            <Card text="Hello, World!" date="1st January, 2020" likes="5" />
                        </Grid>
                        <Grid item>
                            <Card text="Hello, World!" date="1st January, 2020" likes="5" />
                        </Grid>
                        <Grid item>
                            <Card text="Hello, World!" date="1st January, 2020" likes="5" />
                        </Grid>
                        <Grid item>
                            <Card text="Hello, World!" date="1st January, 2020" likes="5" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={2}>
                    <Grid container direction="column" className={styles.buttonSection}>
                        <div className={styles.addPostButton}>
                            <span className={styles.plus}>+</span>
                        </div>
                        <div className={styles.profileButton}>
                            <img src="/user.png" width="28px" height="28px" alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};