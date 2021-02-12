let cheese = 0
let mineModifier = 0

let clickUpgrades = {
    pickaxe: {
        price: 10,
        quantity: 0,
        multiplier: 1
    },
    miningLaser: {
        price: 25,
        quantity: 0,
        multiplier: 5
    }
}

let automaticUpgrades = {
    rover: {
        price: 50,
        quantity: 0,
        multiplier: 10
    },
    lunarBase: {
        price: 100,
        quantity: 0,
        multiplier: 25
    }
}

function mine(){
    cheese += 1
    update()
}

function buyPickaxe(){
    if( cheese >= clickUpgrades.pickaxe.price){
    clickUpgrades.pickaxe.quantity++
    cheese -= clickUpgrades.pickaxe.price
    clickUpgrades.pickaxe.price += 5
    mineModifier += clickUpgrades.pickaxe.multiplier
    }
    update()
}

function buyMiningLaser(){
    if( cheese >= clickUpgrades.miningLaser.price){
    clickUpgrades.miningLaser.quantity++
    cheese -= clickUpgrades.miningLaser.price
    clickUpgrades.miningLaser.price += 10
    mineModifier += clickUpgrades.miningLaser.multiplier
    }
    update()
}

function buyRover(){
    if( cheese >= automaticUpgrades.rover.price){
    automaticUpgrades.rover.quantity++
    cheese -= automaticUpgrades.rover.price
    automaticUpgrades.rover.price += 25
    mineModifier += automaticUpgrades.rover.multiplier
    }
    update()
}

function buyLunarBase(){
    if( cheese >= automaticUpgrades.lunarBase.price){
    automaticUpgrades.lunarBase.quantity++
    cheese -= automaticUpgrades.lunarBase.price
    automaticUpgrades.lunarBase.price += 50
    mineModifier += automaticUpgrades.lunarBase.multiplier
    }
    update()
}

function update(){
    if(cheese < 0){
        cheese = 0
    }
    document.getElementById('playerCheeseAmount').innerText = cheese.toString()
    document.getElementById('pickaxePrice').innerText = ' ' + clickUpgrades.pickaxe.price.toString() 
    document.getElementById('miningLaserPrice').innerText = ' ' + clickUpgrades.miningLaser.price.toString()
    document.getElementById('roverPrice').innerText = ' ' + automaticUpgrades.rover.price.toString()
    document.getElementById('lunarBasePrice').innerText = ' ' + automaticUpgrades.lunarBase.price.toString()
    document.getElementById('pickaxeAmount').innerText = ' ' + clickUpgrades.pickaxe.quantity.toString() 
    document.getElementById('miningLaserAmount').innerText = ' ' + clickUpgrades.miningLaser.quantity.toString()
    document.getElementById('roverAmount').innerText = ' ' + automaticUpgrades.rover.quantity.toString()
    document.getElementById('lunarBaseAmount').innerText = ' ' + automaticUpgrades.lunarBase.quantity.toString()
    document.getElementById('pickaxeMultiplier').innerText = ' ' + clickUpgrades.pickaxe.multiplier.toString()
    document.getElementById('miningLaserMultiplier').innerText = ' ' + clickUpgrades.miningLaser.multiplier.toString()
    document.getElementById('roverMultiplier').innerText = ' ' + automaticUpgrades.rover.multiplier.toString()
    document.getElementById('lunarBaseMultiplier').innerText = ' ' + automaticUpgrades.lunarBase.multiplier.toString()
    document.getElementById('playerMultiplier').innerText = ' ' + mineModifier
}

update()