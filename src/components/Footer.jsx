import React, {useState} from 'react';
import useStyles from "../styles/useStyles.js";
import {BottomNavigation, BottomNavigationAction, Typography} from "@mui/material";
import {Restore, Favorite, LocationOn, Folder} from "@mui/icons-material";

const Footer = () => {
    const classes = useStyles();

    const [value, setValue] = useState("recents");

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    return (
        <footer>
            <Typography
                variant="h6"
                align="center"
                gutterBottom
            >
                Footer
            </Typography>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                className={classes.root}
            >
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<Restore/>}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<Favorite/>}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOn/>}
                />
                <BottomNavigationAction
                    label="Folder"
                    value="folder"
                    icon={<Folder/>}
                />
            </BottomNavigation>
            <Typography
                align="center"
                color="textSecondary"
                variant="subtitle1"
                component="p"
                sx={{
                    my: 1
                }}
            >
                Dogs lovers, animals are cool
            </Typography>
        </footer>
    );
};

export default Footer;