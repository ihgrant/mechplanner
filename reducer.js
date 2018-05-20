const initialState = {
    isDirty: false,
    loadout: {
        h: [{ Designation: "Small Laser", Tons: 5 }],
        la: [null, null, null, null, null, null, null, null],
        lt: [null, null, null, null, null, null, null, null, null, null],
        ct: [null, null, null, null],
        rt: [null, null, null, null, null, null, null, null, null, null],
        ra: [null, null, null, null, null, null, null, null],
        ll: [null, null, null, null],
        rl: [null, null, null, null]
    },
    mechId: 0
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "CHOOSE_MECH":
            return Object.assign({}, state, {
                isDirty: false,
                mechId: action.mechId
            });
        default:
            return state;
    }
}

export default rootReducer;
