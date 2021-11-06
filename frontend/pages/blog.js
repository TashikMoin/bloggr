import React from 'react';
import dynamic from 'next/dynamic';

import styles from "./styles/blog.module.css";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export default function Create() {

    let CustomEditor;

    if (typeof window != "undefined") {
        CustomEditor = dynamic(() => import('../components/CustomerEditor/CustomerEditor'));
    }

    return (
        <Container className={styles.container}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="stretch">
                <Grid item xs={2}>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="stretch">
                        <Grid
                            container
                            direction="column"
                            justifyContent="space-between"
                            alignItems="stretch"
                        >
                            <Grid item style={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                                <img src="/chevron-left.png" width="64px" height="64px" />
                            </Grid>

                            <Grid item style={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                                <img src="/heart.png" width="64px" height="64px" />
                                <p className={styles.likeStyle}>Like</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={10}>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="stretch" style={{ paddingTop: "50px" }} >
                        <Grid item xs={12}>
                            {CustomEditor && <CustomEditor />}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    );
};