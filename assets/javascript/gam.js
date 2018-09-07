







//Game object goes here.

//array

var myPokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];

var guessingPokemon = [];
var selectedPokemon = myPokemon[Math.floor(Math.random() * myPokemon.length)];


//selects a random pokemon from the myPokemon array
function randomWord() {

    console.log(selectedPokemon);
    generatePlaceHolders(selectedPokemon);

    //generates placeholder "_" = to the length of the word

    function generatePlaceHolders() {

        for (i = 0; i < selectedPokemon.length; i++) {
            guessingPokemon.push("_");
        }

        removeCommas(guessingPokemon);
        //removes commas as the separator between array elements

        function removeCommas() {
            document.getElementById("currentword").innerHTML = guessingPokemon.join(" ");





        }
    }
}

function updateDisplay() {
    document.getElementById("currentword").innerHTML = guessingPokemon.join(" ");
}


function makeGuess(userPress) {
    



updateDisplay();
    for (var i = 0; i < selectedPokemon.length; i++) {

        if (selectedPokemon[i] === userPress) {

            guessingPokemon.splice(selectedPokemon.indexOf(userPress), 1, userPress)

            
            

            }
        }

        checkRepeats();
        updateDisplay();
    }

    function checkRepeats(userPress) {

        for (var i = 0; i < 4; i++) {
             
            guessingPokemon.splice(selectedPokemon.indexOf(userPress), 1, userPress)
        }

        }

        












function setupGame() {












    randomWord();




}











setupGame();




document.onkeyup = function (event) {

    //Determines which key was pressed and stores it to a variable userPress.
    var userPress = event.key;

    if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode == 190 || event.keyCode == 222) {
        console.log(userPress);
        makeGuess(userPress);

    }

}
