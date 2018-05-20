import React from "react";
import { connect } from "react-redux";
import { addItem, removeitem } from "../actions";
import slots from "../slots.json";

function Section(
    props = {
        loadout: [],
        name: "",
        onAdd: index => {},
        onRemove: index => {},
        section: ""
    }
) {
    const { loadout } = props;
    const sectionSlots = slots[props.section];
    const slotsToRender = Array.from({ length: sectionSlots }).map((el, i) => {
        return (
            <li>
                {loadout[i] ? (
                    <span>
                        {loadout[i].Designation}{" "}
                        <a onClick={() => props.onRemove(i)}>{"(remove)"}</a>
                    </span>
                ) : (
                    <a onClick={() => props.onAdd(i)}>add</a>
                )}
            </li>
        );
    });
    return (
        <div className="column" style={{ border: "1px solid black", flex: 1 }}>
            <h2>{props.name}</h2>
            <ul>{slotsToRender}</ul>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    return {
        loadout: state.loadout[ownProps.section]
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onRemove(index) {
            dispatch(removeitem(ownProps.section, index));
        }
    };
}

export default connect(mapStateToProps)(Section);
