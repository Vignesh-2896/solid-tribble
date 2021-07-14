const capitalizeString = (stringPassed) => {
    return stringPassed[0].toUpperCase() + stringPassed.slice(1).toLowerCase();
}

module.exports = capitalizeString;