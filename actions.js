export function addItem(section, item) {
    return { type: "ADD_ITEM", section, index, item };
}

export function chooseMech(mechId = 0) {
    return { type: "CHOOSE_MECH", mechId };
}

export function removeitem(section, index) {
    return { type: "REMOVE_ITEM", section, index };
}

export function removeAllItems(section) {
    return { type: "REMOVE_ALL", section };
}
