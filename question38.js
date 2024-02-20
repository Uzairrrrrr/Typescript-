function describe_city(name, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(name, " is in ").concat(country, "."));
}
describe_city('Lahore');
describe_city('Karachi');
describe_city('Mumbai', 'India');
