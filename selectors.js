import equipment from "./equipment.json";
import mechs from "./mechs.json";
import slots from "./slots.json";

const jetsAllowedSections = ["lt", "rt", "ct", "ll", "rl"];

export function currentMech(state) {
    return mechs[state.mechId];
}

export function equipmentThatFits(state) {
    const mech = currentMech(state);
    const tonsFree = freeTonnage(state);
    const openSlots =
        slots[state.selectedSection] -
        state.loadout[state.selectedSection].length;
    const currentJumpJets = Object.keys(state.loadout).reduce((sum, el) => {
        return (
            sum +
            state.loadout[el].filter(
                el2 =>
                    el2 &&
                    el2.Designation.toLowerCase().indexOf("jump jet") !== -1
            ).length
        );
    }, 0);
    const underMaxJets = currentJumpJets < mech["Max Jets"];
    const sectionHardpoints = mech.Hardpoints[state.selectedSection];

    const fits = el => el.Slots <= openSlots && el.Tonnage <= tonsFree;
    const jetsAllowed = el =>
        el.Designation.toLowerCase().indexOf("jump jet") !== -1
            ? jetsAllowedSections.includes(state.selectedSection) &&
              underMaxJets
            : true;
    const hasHardpoint = item => {
        if (item.Type === "Equipment") {
            return true;
        }
        const hardpointsUsed = state.loadout[state.selectedSection].filter(
            el => el.Type === item.Type
        ).length;
        return sectionHardpoints[item.Type] - hardpointsUsed >= item.Slots;
    };

    return equipment
        .filter(fits)
        .filter(jetsAllowed)
        .filter(hasHardpoint);
}

export function freeTonnage(state) {
    const mech = currentMech(state);
    const tonsUsed = Object.keys(state.loadout)
        .map(section => {
            return state.loadout[section].reduce(
                (sum, el) => (el ? sum + el.Tonnage : sum),
                0
            );
        })
        .reduce((sum, el) => sum + el, 0);
    return mech["Tons Free"] - tonsUsed;
}
