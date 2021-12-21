function findMatching(name) {
    for (const drivers of name) {
     console.log(drivers.name);   
    }
}

function fuzzyMatch(name) {
    for (const drivers of name) {
        if (name === "Sa") {
            console.log(name);
        }
    }
}

function matchName(drivers) {
    for (const name of drivers) {
        console.log(name, hometown);
    }
}
