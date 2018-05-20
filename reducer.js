const initialState = {
    addItemDialogOpen: false,
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
    mechId: 0,
    selectedSection: null
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADDITEMDIALOG_CLOSE":
            return Object.assign({}, state, {
                addItemDialogOpen: false,
                selectedSection: null
            });
        case "ADDITEMDIALOG_OPEN":
            return Object.assign({}, state, {
                addItemDialogOpen: true,
                selectedSection: action.section
            });
        case "ITEM_ADD":
            return Object.assign({}, state, {
                isDirty: true,
                loadout: Object.assign({}, state.loadout, {
                    [state.selectedSection]: state.loadout[
                        state.selectedSection
                    ].concat(action.item)
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
