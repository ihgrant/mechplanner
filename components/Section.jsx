import React from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SectionItem from "./SectionItem";
import { addItem, openAddItemDialog, removeitem } from "../actions";
import { currentMech } from "../selectors";
import slots from "../slots.json";

function Section(
    props = {
        hardpoints: { Ballistic: 0, Energy: 0, Missile: 0, Support: 0 },
        loadout: [],
        name: "",
        onAdd: index => {},
        onRemove: index => {},
        section: ""
    }
) {
    const { hardpoints, loadout } = props;
    const sectionSlots = slots[props.section];
    const slotsToRender = Array.from({ length: sectionSlots }).map((el, i) => {
        return (
            <SectionItem
                key={i}
                loadoutItem={loadout[i]}
                onAdd={() => props.onAdd(i)}
            />
        );
    });
    return (
        <Card style={{ flex: 1 }}>
            <CardContent>
                <Typography style={{ textAlign: "center" }} variant="title">
                    {props.name}
                </Typography>
                <Typography
                    style={{ textAlign: "center" }}
                    variant="subheading"
                >{`B${hardpoints.Ballistic} E${hardpoints.Energy} M${
                    hardpoints.Missile
                } S${hardpoints.Support}`}</Typography>
            </CardContent>
            <List>{slotsToRender}</List>
        </Card>
    );
}

function mapStateToProps(state, ownProps) {
    return {
        hardpoints: currentMech(state).Hardpoints[ownProps.section],
        loadout: state.loadout[ownProps.section]
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onAdd(index) {
            dispatch(openAddItemDialog(ownProps.section));
        },
        onRemove(index) {
            dispatch(removeitem(ownProps.section, index));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Section);
