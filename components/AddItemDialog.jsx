import React from "react";
import { connect } from "react-redux";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { addItem, closeAddItemDialog } from "../actions";
import { equipmentThatFits } from "../selectors";

function AddItemDialog(
    props = {
        items: [],
        onChoose: (section, item) => {},
        onClose: () => {},
        open: false,
        selectedSection: null
    }
) {
    return (
        <Dialog onClose={props.onClose} open={props.open}>
            <DialogTitle>Choose item to add:</DialogTitle>
            <List>
                {props.items.map(el => (
                    <ListItem
                        button
                        key={el.Designation}
                        onClick={() =>
                            props.onChoose(props.selectedSection, el)
                        }
                    >
                        <ListItemText primary={el.Designation} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}

function mapStateToProps(state, ownProps) {
    if (!state.addItemDialogOpen) {
        return { items: [], open: false, selectedSection: null };
    }

    return {
        items: equipmentThatFits(state),
        open: state.addItemDialogOpen,
        selectedSection: state.selectedSection
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChoose(section, item) {
            dispatch(addItem(section, item));
            dispatch(closeAddItemDialog());
        },
        onClose() {
            dispatch(closeAddItemDialog());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemDialog);
