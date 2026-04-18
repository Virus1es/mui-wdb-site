import React from 'react';
import {Button, Container, Grid, Paper, Typography} from "@mui/material";
import useStyles from "../styles/useStyles.js";

const UpBanner = () => {
    const classes = useStyles();
    return (
        <Paper
            className={classes.mainFeaturesPost}
            sx={{
                backgroundImage: `url(https://images.unsplash.com/photo-1774142532286-2ae46f0c3563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzY1Mjk1MTh8&ixlib=rb-4.1.0&q=80&w=1080)`
            }}
        >
            <Container fixed>
                <div className={classes.overlay}/>
                <Grid container spacing={2}>
                    <Grid size={{md: 6}}>
                        <div className={classes.mainFeaturesPostContent}>
                            <Typography
                                component="h2"
                                variant="h3"
                                color="inherit"
                                gutterBottom
                                sx={{color: "#ddd"}}
                            >
                                Dogs lovers
                            </Typography>
                            <Typography
                                component="h5"
                                variant="h5"
                                color="inherit"
                                gutterBottom
                                sx={{color: "#ddd"}}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti error
                                exercitationem facilis, ipsum libero minus nisi odio optio quia quisquam quo,
                                repudiandae suscipit voluptatum! Expedita laborum molestias placeat quam
                                temporibus?
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                            >
                                Learn more
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default UpBanner;