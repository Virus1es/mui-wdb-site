import NavBar from "./NavBar.jsx";
import useStyles from "./useStyles.js";
import UpBanner from "./UpBanner.jsx";

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
