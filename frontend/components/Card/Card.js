import React from 'react';

import styles from './card.module.css';

import { Grid } from '@material-ui/core';

export default function CustomCard({ title, description, content }) {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="stretch" className={styles.cardBox}>
            <Grid item xs={11} className={styles.rightStyling}>
                <h1> {title} </h1>
                <p className={styles.dateStyle}>{description}</p>
                <p className={styles.contentStyle}>{content}</p>
            </Grid>
        </Grid>
    )
}