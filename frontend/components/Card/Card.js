import React from "react";

import Link from "next/link";

import styles from "./card.module.css";

import { Grid } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Card({ title, description, content, href }) {
  const [likes, setLikes] = React.useState(Math.floor(Math.random() * 10));

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
      className={styles.cardBox}
    >
      <Link href={href}>
        <Grid item xs={10} className={styles.rightStyling}>
          <h1> {title} </h1>
          <h2> Saif ul Islam </h2>
          <p className={styles.dateStyle}>{description}</p>
          <p className={styles.contentStyle}>{content}</p>
        </Grid>
      </Link>
      <Grid item xs={1} style={{margin: "25px"}}>
        <FavoriteIcon onClick={() => setLikes(likes + 1)} />
        <p>{likes}</p>
      </Grid>
    </Grid>
  );
}
