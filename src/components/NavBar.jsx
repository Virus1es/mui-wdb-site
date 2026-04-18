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
import useStyles from "../styles/useStyles.js";
import {useState} from "react";
import LogInDialog from "./LogInDialog.jsx";


const NavBar = () => {
    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
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

                    <Box sx={{mr: 3}}>
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={handleClickOpen}
                        >
                            Log In
                        </Button>
                        <LogInDialog isOpen={isOpen} handleClose={handleClose}/>
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
    );
};

export default NavBar;