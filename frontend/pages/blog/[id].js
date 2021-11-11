import React from 'react';

import styles from "../styles/blog.module.css";

import {
    Container,
    Grid,
    TextField
} from "@material-ui/core";

export default function Create() {

    return (
        <Container className={styles.container}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="stretch">
                <Grid item xs={2}>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="stretch">
                        <Grid
                            container
                            direction="column"
                            justifyContent="space-between"
                            alignItems="stretch">
                            <Grid item style={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                                <img src="/chevron-left.png" width="64px" height="64px" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    );
};