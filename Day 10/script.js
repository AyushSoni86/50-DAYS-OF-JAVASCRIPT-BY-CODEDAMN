// Write a function to remove array element based on object property?

const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    return array.filter(function (obj) {
        return obj.field !== filterField;
    });
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)
