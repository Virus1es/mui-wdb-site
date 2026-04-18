import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from '@mui/icons-material';

function App() {
    return (
        <>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="Menu"
                        >
                            <Menu/>
                        </IconButton>

                        <Typography
                            variant="h6"
                            component="h1"
                        >
                            Dogs lovers
                        </Typography>

                        <Box sx={{ mx: 3 }}>
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
