import NavBar from "./components/NavBar.jsx";
import useStyles from "./styles/useStyles.js";
import UpBanner from "./components/UpBanner.jsx";
import TitleBlock from "./components/TitleBlock.jsx";
import BlogsGrid from "./components/BlogsGrid.jsx";
import Footer from "./components/Footer.jsx";


function App() {
    const classes = useStyles();

    return (
        <>
            <NavBar/>
            <main className={classes.main}>
                <UpBanner/>
                <TitleBlock/>
                <BlogsGrid/>
            </main>
            <Footer/>
        </>
    )
}

export default App
