import React from 'react';
import dynamic from 'next/dynamic';

import styles from "./styles/create.module.css";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export default function Create() {

    let CustomEditor;

    if (typeof window != "undefined") {
        CustomEditor = dynamic(() => import('../components/CustomerEditor/CustomerEditor'));
    }

    return (
        <Container className={styles.container}>
            <Grid container direction="column" justifyContent="center" alignItems="stretch">
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                >
                    <Grid item>
                        <img src="/chevron-left.png" width="64px" height="64px" />
                    </Grid>

                    <Grid item className={styles.postButton}>
                        <span>Post</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="flex-start" alignItems="stretch" style={{paddingTop: "50px"}} >
                <Grid item xs={12}>
                    {CustomEditor && <CustomEditor />}
                </Grid>
            </Grid>
        </Container >
    );
};