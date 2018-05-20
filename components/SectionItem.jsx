import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";

export default function SectionItem(
    props = { loadoutItem: null, onAdd: index => {}, onRemove: index => {} }
) {
    return props.loadoutItem ? (
        <ListItem button onClick={props.onRemove}>
            <ListItemText primary={props.loadoutItem.Designation} />
        </ListItem>
    ) : (
        <ListItem button onClick={props.onAdd}>
            <ListItemIcon>
                <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add" />
        </ListItem>
    );
}
