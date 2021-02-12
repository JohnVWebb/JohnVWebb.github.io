let cheese = 0

let clickUpgrades = {
    pickaxe: {
        price: 10,
        quantity: 0,
        multiplier: 1
    },
    miningLaser: {
        price: 25,
        quantity: 0,
        multiplier: 10
    }
}

let automaticUpgrades = {
    rover: {
        price: 50,
        quantity: 0,
        multiplier: 20
    },
    lunarBase: {
        price: 100,
        quantity: 0,
        multiplier: 50
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
    console.log(clickUpgrades.pickaxe.quantity)
    console.log(cheese)
    }
    update()
}

function buyMiningLaser(){
    if( cheese >= clickUpgrades.miningLaser.price){
    clickUpgrades.miningLaser.quantity++
    cheese -= clickUpgrades.miningLaser.price
    console.log(clickUpgrades.miningLaser.quantity)
    console.log(cheese)
    }
    update()
}

function buyRover(){
    if( cheese >= automaticUpgrades.rover.price){
    automaticUpgrades.rover.quantity++
    cheese -= automaticUpgrades.rover.price
    console.log(automaticUpgrades.rover.quantity)
    console.log(cheese)
    }
    update()
}

function buyLunarBase(){
    if( cheese >= automaticUpgrades.lunarBase.price){
    automaticUpgrades.lunarBase.quantity++
    cheese -= automaticUpgrades.lunarBase.price
    console.log(automaticUpgrades.lunarBase.quantity)
    console.log(cheese)
    }
    update()
}

function update(){
    if(cheese < 0){
        cheese = 0
    }
    document.getElementById('playerCheeseAmount').innerText = cheese.toString()
    document.getElementById('pickaxePrice').innerText = ' ' + clickUpgrades.pickaxe.price.toString() 
}

update()