var username = "krisjanis2000";

var socket = io.connect("http://192.168.88.250:9998/", {transports: ['websocket']});
// var socket = io.connect("https://tictactoe.info/", {transports: ['websocket']});
setupSocket();


function setupSocket() {
    socket.on('gameState', function (jsonGameState) {
        const gameData = JSON.parse(jsonGameState);
        const username = document.getElementById("username");
        const gold = document.getElementById("gold");

        const shovelName = document.getElementById("shovelName");
        const shovelOwned = document.getElementById("shovelOwned");
        const shovelCost = document.getElementById("shovelCost");

        const excavatorName = document.getElementById("excavatorName");
        const excavatorOwned = document.getElementById("excavatorOwned");
        const excavatorCost = document.getElementById("excavatorCost");

        const mineName = document.getElementById("mineName");
        const mineOwned = document.getElementById("mineOwned");
        const mineCost = document.getElementById("mineCost");

        username.innerHTML = gameData.username;
        gold.innerHTML = Math.floor(gameData.gold)

        shovelName.innerHTML = gameData.equipment.shovel.name
        shovelOwned.innerHTML = gameData.equipment.shovel.numberOwned
        shovelCost.innerHTML = Math.ceil(gameData.equipment.shovel.cost)

        excavatorName.innerHTML = gameData.equipment.excavator.name
        excavatorOwned.innerHTML = gameData.equipment.excavator.numberOwned
        excavatorCost.innerHTML = Math.ceil(gameData.equipment.excavator.cost)

        mineName.innerHTML = gameData.equipment.mine.name
        mineOwned.innerHTML = gameData.equipment.mine.numberOwned
        mineCost.innerHTML = Math.ceil(gameData.equipment.mine.cost)
    });
}


function initializeGame() {
    socket.emit("register", username);
}


function clickGold() {
    socket.emit("clickGold");
}


function buyEquipment(equipmentID) {
    socket.emit("buy", equipmentID);
}
