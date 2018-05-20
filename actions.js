export function closeAddItemDialog() {
    return { type: "ADDITEMDIALOG_CLOSE" };
}

export function openAddItemDialog(section) {
    return { type: "ADDITEMDIALOG_OPEN", section };
}

export function addItem(section, item) {
    return { type: "ITEM_ADD", item };
}

export function chooseMech(mechId = 0) {
    return { type: "CHOOSE_MECH", mechId };
}

export function removeitem(section, index) {
    return { type: "ITEM_REMOVE", section, index };
}

export function removeAllItems(section) {
    return { type: "ITEM_REMOVE_ALL", section };
}
