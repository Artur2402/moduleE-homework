function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.turnOn = function(state) {
    this.isPlugged = state || false;
    if (this.isPlugged) {
        console.log(this.name + " включен(-а)!");
    }
    else {
        console.log(this.name + " выключен(-а)!");
    }
}

function Lamp(name, color, type, power) {
    this.name = name;
    this.color = color;
    this.type = type;
    this.power = power;
}

Lamp.prototype = new ElectricalAppliance();

function PC(name, processor, os, power) {
    this.name = name;
    this.processor = processor;
    this.os = os;
    this.power = power;
}

PC.prototype = new ElectricalAppliance();

function TV(name, resolution, brand, power) {
    this.name = name;
    this.resolution = resolution;
    this.company = brand;
    this.power = power;
}

TV.prototype = new ElectricalAppliance();

function powerUsage(...appliances) {
    let powerUsage = 0;
    for (let appliance of appliances) {
        if (appliance.isPlugged) {
            powerUsage += appliance.power;
        }
    }
    return `Текущее потребление ${powerUsage} кВт/ч`;
}


const lamp1 = new Lamp('Настольная лампа', 'black', 'table lamp', 10);
const lamp2 = new Lamp('Люстра', 'yellow', 'chandelier', 15);
const pc1 = new PC('Компьютер', 'Intel', 'Windows', 100);
const pc2 = new PC('Ноутбук', 'AMD', 'Ubuntu', 55);
const tv1 = new TV('TV в спалне', '1366×768', 'Sony', 90);
const tv2 = new TV('TV в зале', '1920×1080', 'LG', 70);


lamp1.turnOn(true);
lamp2.turnOn(true);
pc1.turnOn(true);
pc2.turnOn(true);
tv1.turnOn(true);
tv2.turnOn(true);
console.log(powerUsage(lamp1, lamp2, pc1, pc2, tv1, tv2));

lamp1.turnOn(false);
pc1.turnOn();
tv1.turnOn();
console.log(powerUsage(lamp1, lamp2, pc1, pc2, tv1, tv2));