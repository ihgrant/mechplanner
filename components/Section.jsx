import React from "react";
import { connect } from "react-redux";
import { addItem, removeitem } from "../actions";

function Section(
    props = {
        loadout: [],
        name: "",
        onAdd: index => {},
        onRemove: index => {}
    }
) {
    return (
        <div className="column" style={{ border: "1px solid black", flex: 1 }}>
            <h2>{props.name}</h2>
            <ul>
                {props.loadout.map((el, i) => (
                    <li key={i}>
                        {el ? (
                            <span>
                                {el.Designation}{" "}
                                <a onClick={() => props.onRemove(i)}>
                                    {"(remove)"}
                                </a>
                            </span>
                        ) : (
                            <a onClick={() => props.onAdd(i)}>add</a>
                        )}
                    </li>
                ))}
            </ul>
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
