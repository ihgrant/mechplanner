import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import MechChoice from "./MechChoice";

const styles = { flex: { flex: 1 } };

function Header(props = { classes: {} }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" className={props.classes.flex}>
                    Mechplanner
                </Typography>
                <MechChoice />
                <Button>Save</Button>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(Header);
