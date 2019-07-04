class Person {

    constructor(pos) {
        this.name = "sillyman" + Math.random();
        this.age = 0;
        this.gender = Math.random() > 0.5 ? genders.MALE : genders.FEMALE;
        this.position = pos; // make vec
        this.wealth = 0;
        this.income = 1;
        this.strength = 1;
        this.smarts = 1;
        this.creativity = 1;
        this.social = 1;
        this.availableTech = [];
        this.faction = null;
        this.home = null;
        this.job = jobs.NONE;
    }

    

}