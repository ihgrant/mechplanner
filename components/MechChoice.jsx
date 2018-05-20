import React from "react";
import { connect } from "react-redux";
import { chooseMech } from "../actions";
import mechs from "../mechs.json";

function MechChoice(props = { onChange: id => {}, options: [], value: 0 }) {
    return (
        <select
            name="mech-choice"
            onChange={e => props.onChange(e.currentTarget.value)}
            value={props.value}
        >
            {props.options.map(el => (
                <option key={el.id} value={el.id}>
                    {el.name}
                </option>
            ))}
        </select>
    );
}

function mapStateToProps(state) {
    return {
        options: mechs.map((el, i) => ({
            id: i,
            name: `${el.Designation} - ${el.Model}`
        })),
        value: state.mechId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChange(mechId) {
            dispatch(chooseMech(Number(mechId)));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MechChoice);
