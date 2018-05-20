import React from "react";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { chooseMech } from "../actions";
import mechs from "../mechs.json";

function MechChoice(props = { onChange: id => {}, options: [], value: 0 }) {
    return (
        <Select
            name="mech-choice"
            onChange={e => props.onChange(e.target.value)}
            value={props.value}
        >
            {props.options.map(el => (
                <MenuItem key={el.id} value={el.id}>
                    {el.name}
                </MenuItem>
            ))}
        </Select>
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
