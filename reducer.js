const initialState = {
    isDirty: false,
    loadout: {
        h: [],
        la: [],
        lt: [],
        ct: [],
        rt: [],
        ra: [],
        ll: [],
        rl: []
    },
    mechId: 0
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return Object.assign({}, state, {
                loadout: Object.assign({}, state.loadout, {
                    [action.section]: state.loadout[action.section].concat(
                        action.item
                    )
                })
            });
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
