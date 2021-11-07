import React from 'react';
// import dynamic from 'next/dynamic';

import styles from "./styles/create.module.css";

import {
    Container,
    Grid,
    TextField
} from "@material-ui/core";

export default function Create() {

    // let CustomEditor;

    // if (typeof window != "undefined") {
    //     CustomEditor = dynamic(() => import('../components/CustomerEditor/CustomerEditor'));
    // }

    return (
        <Container className={styles.container}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="stretch">
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
            <Grid container direction="row" justifyContent="flex-start" alignItems="stretch" style={{ paddingTop: "50px" }} >
                <Grid item xs={12} className={styles.contentShowcase}>
                    <div className={styles.centerTextField}>
                        <TextField
                            id="standard-multiline-static"
                            label="Title"
                            multiline
                            rows={4}
                            defaultValue="Lorem Ipsum"
                            variant="standard"
                            className={styles.textFieldStyling}
                        />
                    </div>
                    <div className={styles.centerTextField}>
                        <TextField
                            id="standard-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            defaultValue="Lorem Ipsum"
                            variant="standard"
                            className={styles.textFieldStyling}
                        />
                    </div>
                    <div className={styles.centerTextField}>
                        <TextField
                            id="standard-multiline-static"
                            label="Content"
                            multiline
                            rows={4}
                            defaultValue="Lorem Ipsum"
                            variant="standard"
                            className={styles.textFieldStyling}
                        />
                    </div>
                    {/* {CustomEditor && <CustomEditor />} */}
                </Grid>
            </Grid>
        </Container >
    );
};