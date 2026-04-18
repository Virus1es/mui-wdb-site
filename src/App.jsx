import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography
} from "@mui/material";
import {Menu} from '@mui/icons-material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    }
}));

function App() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="Menu"
                            className={classes.menuButton}
                        >
                            <Menu/>
                        </IconButton>

                        <Typography
                            variant="h6"
                            component="h1"
                            className={classes.title}
                        >
                            Dogs lovers
                        </Typography>

                        <Box sx={{mx: 3}}>
                            <Button
                                variant="outlined"
                                color="inherit"
                            >
                                Log In
                            </Button>
                        </Box>

                        <Button
                            variant="contained"
                            color="secondary"
                        >
                            Sign Up
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default App
