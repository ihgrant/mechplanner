import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

function Heat(props = { heatGenerated: 0, heatSunk: 0 }) {
    const heatPerTurn = props.heatGenerated - props.heatSunk;
    return (
        <Typography variant="display1">{`Heat: ${heatPerTurn} per turn`}</Typography>
    );
}

function mapStateToProps(state) {
    const heatGenerated = Object.keys(state.loadout).reduce((sum, key) => {
        return (
            sum +
            state.loadout[key].reduce(
                (subsum, el) => subsum + (el.Heat || 0),
                0
            )
        );
    }, 0);
    return {
        heatGenerated: heatGenerated,
        heatSunk: 30
    };
}

export default connect(mapStateToProps)(Heat);
