import React from 'react';
import useStyles from "../styles/useStyles.js";
import {Container, Grid} from "@mui/material";
import BlogItem from "./BlogItem.jsx";


const BlogsGrid = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const classes = useStyles();
    return (
        <Container
            className={classes.cardGrid}
            maxWidth="md"
        >
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <BlogItem card={card} key={card}/>
                ))}
            </Grid>
        </Container>
    );
};

export default BlogsGrid;