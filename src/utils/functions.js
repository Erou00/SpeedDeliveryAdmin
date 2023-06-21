

export const first_object_value =  obj => {

    const keys = Object.keys(obj);
    const firstKey = keys[0];
    const firstValue = obj[firstKey];

    return firstValue;
}