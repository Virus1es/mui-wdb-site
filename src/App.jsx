import NavBar from "./components/NavBar.jsx";
import useStyles from "./styles/useStyles.js";
import UpBanner from "./components/UpBanner.jsx";
import {Container, Typography} from "@mui/material";

function App() {
    const classes = useStyles();
    return (
        <>
            <NavBar/>
            <main className={classes.main}>
                <UpBanner/>
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
                    </Container>
                </div>
            </main>
        </>
    )
}

export default App
