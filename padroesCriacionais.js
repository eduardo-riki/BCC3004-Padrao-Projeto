class House {
    constructor() {
        this.foundation = '';
        this.walls = '';
        this.roof = '';
        this.windows = 0;
        this.doors = 0;
    }

    describe() {
        console.log(`A casa possui ${this.foundation} fundações, parede de ${this.walls}, telhado de ${this.roof}, ${this.windows} janelas, ${this.doors} portas.`);
    }
}

class HouseBuilder {
    constructor() {
        this.house = new House();
    }

    buildFoundation() { }
    buildWalls() { }
    buildRoof() { }
    buildWindows() { }
    buildDoors() { }
    getHouse() { }
}

class SimpleHouseBuilder extends HouseBuilder {
    buildFoundation() {
        this.house.foundation = 'Basica';
    }

    buildWalls() {
        this.house.walls = 'Madeira';
    }

    buildRoof() {
        this.house.roof = 'Cerâmica';
    }

    buildWindows() {
        this.house.windows = 4;
    }

    buildDoors() {
        this.house.doors = 2;
    }

    getHouse() {
        return this.house;
    }
}

class LuxuryHouseBuilder extends HouseBuilder {
    buildFoundation() {
        this.house.foundation = 'Avançada';
    }

    buildWalls() {
        this.house.walls = 'Tijolos';
    }

    buildRoof() {
        this.house.roof = 'PVC';
    }

    buildWindows() {
        this.house.windows = 8;
    }

    buildDoors() {
        this.house.doors = 3;
    }

    getHouse() {
        return this.house;
    }
}

class ConstructionEngineer {
    constructor(builder) {
        this.builder = builder;
    }

    constructHouse() {
        this.builder.buildFoundation();
        this.builder.buildWalls();
        this.builder.buildRoof();
        this.builder.buildWindows();
        this.builder.buildDoors();
    }
}

const simpleHouseBuilder = new SimpleHouseBuilder();
const engineer1 = new ConstructionEngineer(simpleHouseBuilder);
engineer1.constructHouse();
const simpleHouse = simpleHouseBuilder.getHouse();
simpleHouse.describe();

const luxuryHouseBuilder = new LuxuryHouseBuilder();
const engineer2 = new ConstructionEngineer(luxuryHouseBuilder);
engineer2.constructHouse();
const luxuryHouse = luxuryHouseBuilder.getHouse();
luxuryHouse.describe();
