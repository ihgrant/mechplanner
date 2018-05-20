import { connect } from "react-redux";
import App from "../components/App";
import mechs from "../mechs.json";

function mapStateToProps(state) {
    const currentMech = mechs[state.mechId];
    const tonsUsed = Object.keys(state.loadout)
        .map(section => {
            return state.loadout[section].reduce(
                (sum, el) => (el ? sum + el.Tons : sum),
                0
            );
        })
        .reduce((sum, el) => sum + el, 0);
    const tonsFree = currentMech["Tons Free"] - tonsUsed;

    return {
        mech: currentMech,
        tonsFree: tonsFree
    };
}

export default connect(mapStateToProps)(App);
