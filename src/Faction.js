
class Faction {

    constructor() {
        this.name = 'something silly' + Math.random();
        this.age = 0;
        this.members = [];
        this.type = factionTypes.PRIMITIVE;
        this.policies = [];
        this.tax = 0.0;
    }

}