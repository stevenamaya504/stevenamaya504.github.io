$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

     //TODO 1 - Enable the Grid
     //toggleGrid();


     //TODO 2 - Create platform
createPlatform(650, 0, 20, 290);
createPlatform(1000, 450, 300, 10, "red");
createPlatform(200, 650, 300, 10, "red");
 createPlatform(600,550, 150, 5, "blue");
createPlatform(1000,20, 10, 10, "lime"); // bright green for a finished platform
createPlatform(1350,350, 150, 5, "blue");
createPlatform(500, 80, 20, 300);
createPlatform(850, 350, 78, 10, "red");
createPlatform(750, 450, 78, 10, "red")


    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 300);
createCollectable("diamond", 600, 250, 0.5, 0.7);
createCollectable("", 1350, 50);
createCollectable("diamond", 850, 170, 0.5, 0.7);



  


    
  // TODO 4 - Create Cannons
createCannon("top", 350, 1000);
createCannon("right", 600,1000);
createCannon("top", 200, 1000);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
