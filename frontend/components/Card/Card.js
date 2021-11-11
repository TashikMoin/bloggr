import React from 'react';

import styles from './card.module.css';

import { Grid } from '@material-ui/core';

export default function CustomCard({ text, date, likes }) {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="stretch" className={styles.cardBox}>
            {/* <Grid item xs={1} className={styles.leftStyling}>
                <img src="/heart.png" width="28px" height="28px" alt="heart" />
                <p className={styles.likeStyle}>{likes}</p>
            </Grid> */}

            <Grid item xs={11} className={styles.rightStyling}>
                <p className={styles.dateStyle}>{date}</p>
                <p className={styles.contentStyle}>{text}</p>
            </Grid>
        </Grid>
    )
}