




    var computerPick = Math.floor(Math.random() * 120) + 19;
    var lockGame = false;

$("#winTotal").text(computerPick);


var counter = 0;

var diamond = Math.floor(Math.random() * 12) + 1; {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src","assets/images/diamond.png");
    imageCrystal.attr("data-crystalvalue", diamond)
    $("#crystals").append(imageCrystal);
}

var emerald = Math.floor(Math.random() * 12) + 1; {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src","assets/images/greengem.jpg");
    imageCrystal.attr("data-crystalvalue", emerald)
    $("#crystals").append(imageCrystal);
}

var pendant = Math.floor(Math.random() * 12) + 1; {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src","assets/images/pendantgem.jpg");
    imageCrystal.attr("data-crystalvalue", pendant)
    $("#crystals").append(imageCrystal);
}

var stones = Math.floor(Math.random() * 12) + 1; {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src","assets/images/stones.jpg");
    imageCrystal.attr("data-crystalvalue", stones)
    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    

    counter += crystalValue;

    $("#userTotal").text(counter);

    if (counter === computerPick) {
        alert("Winner Winner Chicken Dinner")
    }
    else if (counter >= computerPick)
        alert("Try again, dummy...")
})


  
  
 