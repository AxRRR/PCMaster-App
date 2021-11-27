// Function to validate fields no has empty

function ValidateFields(argument){
    return argument !== undefined && argument.length >= 1;
}

module.exports = {
    ValidateFields
}