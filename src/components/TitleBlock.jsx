import React from 'react';
import {Button, Container, Grid, Typography} from "@mui/material";
import useStyles from "../styles/useStyles.js";

const TitleBlock = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContent}>
            <Container maxWidth="md">
                <Typography
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Dogs lovers
                </Typography>

                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    gutterBottom
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolor eaque eius
                    est eveniet, ex fugit illo iure magni omnis pariatur quia quidem quisquam repellendus sint
                    suscipit, voluptates voluptatum? Quia quidem quisquam repellendus sint
                    suscipit, voluptates voluptatum?
                </Typography>
                <div className={classes.mainButtons}>
                    <Grid container
                          spacing={2}
                          sx={{
                              justifyContent: "center",
                              my: 2,
                          }}
                    >
                        <Grid>
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                Start now
                            </Button>
                        </Grid>
                        <Grid>
                            <Button
                                variant="outlined"
                                color="primary"
                            >
                                Learn more
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default TitleBlock;