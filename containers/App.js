import { connect } from "react-redux";
import { freeTonnage } from "../selectors";
import App from "../components/App";
import mechs from "../mechs.json";

function mapStateToProps(state) {
    const currentMech = mechs[state.mechId];

    return {
        mech: currentMech,
        tonsFree: freeTonnage(state)
    };
}

export default connect(mapStateToProps)(App);
