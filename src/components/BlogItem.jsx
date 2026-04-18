import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Layers, PlayCircle} from "@mui/icons-material";
import useStyles from "../styles/useStyles.js";

const BlogItem = ({card}) => {
    const classes = useStyles();
    return (
        <Grid key={card}
              size={{xs: 12, sm: 6, md: 4}}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1774142532286-2ae46f0c3563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzY1Mjk1MTh8&ixlib=rb-4.1.0&q=80&w=1080"
                    title="Some item"
                    alt="Image placeholder"
                />
                <CardContent
                    className={classes.cardContent}
                >
                    <Typography
                        variant="h5"
                        gutterBottom
                    >
                        Blog post
                    </Typography>
                    <Typography>
                        Blog post. Dogs lovers Dogs lovers Dogs lovers Dogs lovers Dogs lovers Dogs
                        lovers Dogs lovers Dogs lovers Dogs lovers
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                    >
                        View
                    </Button>
                    <Button
                        size="small"
                        color="primary"
                    >
                        Edit
                    </Button>

                    <Layers/>
                    <PlayCircle/>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default BlogItem;