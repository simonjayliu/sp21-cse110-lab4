let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const prop in statistics) {
    if (prop.indexOf('r') == 0 || statistics[prop] % 2 == 1) {
        console.log(statistics[prop]);
    }
}