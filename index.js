// Code your solution here

const drivers = [
    "Bobby",
    "Bobby Joe",
    "Alice",
    "Charlie",
    "alice",
    "David",
];

// Sample array of driver objects
const driverObjects = [
    { name: "Bobby", hometown: "New York" },
    { name: "Alice", hometown: "Los Angeles" },
    { name: "Charlie", hometown: "Chicago" },
    { name: "David", hometown: "San Francisco" },
];

// 1. findMatching: Case insensitive match of driver names
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// 2. fuzzyMatch: Drivers whose names begin with the provided letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// 3. matchName: Match driver objects by name
function matchName(driverObjects, name) {
    return driverObjects.filter(driver => driver.name === name);
}

