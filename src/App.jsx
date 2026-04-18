import NavBar from "./components/NavBar.jsx";
import useStyles from "./styles/useStyles.js";
import UpBanner from "./components/UpBanner.jsx";

function App() {
    const classes = useStyles();
    return (
        <>
            <NavBar/>
            <main className={classes.main}>
                <UpBanner/>
            </main>
        </>
    )
}

export default App
