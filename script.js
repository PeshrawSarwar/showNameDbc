// an array of quotes
var quoteArray = [
    '"Ahmed"',
    '"Ali"',
    '"Mohammed"',
    '"Osman"',
    '"Jalal"',
    '"Lana"',
    "'Hamno'",
    "'Zheer'",
    "'mohammad'",
    "'Rebaz '",
    "'Hazhar '",
    "'Hawkar'",
    "'Dana'",
    "'Hawkar'",
    "'Arya'",
    "'Hemin'",
    "'Emad'",
    "'Darya'",
    "'Rebin'",
    "'Koraz'",
    "'Kashma'",
    "'Shara'",
    "'Roza'",
    "'SORAN'",
    "'srusht'",
    "'Sanaa'",
    "'Diyari'",
    "'Shaho'",
    "'Berivan'",
    "'Kani'",
    "'Azhi'",
    "'Nabaz'",
    "'goran'",
    "'Nuqlla'",
    "'Renas'",
    "'Zilan'",
    "'Solin'",
    "'Shanga'",
    "'Yara'",
    "'Miran'",
    "'Omer'",
    "'Sara'",
    "'Muhammad'",
    "'Zhirko'",
    "'Peshraw'",
    "'Yusif'",
    "'Najat'",
    "'Shadman'",
    "'Ali'",
    "'Rabar'",
    "'Rayan'",
    "'Shkar'",
    "'Soran'",
    "'Lanya'",
    "'Sara'",
    "'Bilal'",
    "'Dekan'",
    "'Hawkar'",
    "'Rebaz'",
    "'Shanaz'",
    "'Karez'",
    "'Marwan'",
    "'Paiwand'",
    "'Govar'",
    "'Arez'",
    "'Rezhin'",
    "'Dene'",
    "'Ahmed'",
    "'Makwan'",
    "'Ibrahim'",
    "'Zhwan'",
    "'Aiman'",
    "'Sanaa'",
    "'Rasti'",
    "'Hazhan'",
    "'Samir'",
    "'Yahya'",
    "'Karzan'",
    "'Nvar'",
    "'Aland'",
    "'Bzhew'",
    "'Bahast'",
    "'Suahib'",
    "'Soma'",
    "'Chiya'",
    "'Zhir'",
    "'Sarwar'",
    "'Hawshad'",
    "'Lilav'",
    "'Hiwa'",
    "'Oskar'",
    "'Hiwa'",
    "'Ahmed'",
    "'Shilan'",
    "'Atta'",
    "'Parizad'",
    "'Bakhtawar'",
    "'Aland'",
    "'Darko'",
    "'Shakar'",
    "'Binaiy'",
    "'Koraz'",
    "'Hersh'",
    "'Kamal'",
    "'Hersh'",
    "'Kaiwan'",
    "'Shad'",
    "'Hedi'",
    "'Sana'",
    "'Rukhsar'",
    "'Diyar'",
    "'Mabast'",
    "'Shajwan'",
    "'Kochar'",
    "'Sozy'",
    "'Jalil'",
    "'Shaima'"


















];

// define the display element id
display = document.getElementById('display');

var currentElement;

// randomly shuffle array
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remains elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// function to update display with a random element from myArray
function updateDisplay() {
    // generate random 
    var randomElement = quoteArray[Math.floor(Math.random() * quoteArray.length)];

    // if the random element is not the current element
    if (randomElement != currentElement) {
        // fade out
        $("#display").fadeOut("slow", function() {
            // fade out complete
            // change display element
            display.innerHTML = randomElement;
            // fade back in
            $("#display").fadeIn("slow");
        });
        currentElement = randomElement;
    } else {
        // recursive call
        updateDisplay();
    }
}

// initially calling updateDisplay
updateDisplay();

// update display every 3 seconds
setInterval(function() {
    updateDisplay();
}, 3000);