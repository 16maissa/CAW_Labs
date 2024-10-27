window.onload = function() {
    
    var walls = document.querySelectorAll(".boundary");    
    var end = document.getElementById("end");   
    var start = document.getElementById("start");    
    var status = document.getElementById("status");
   
    var lost = false;
    var gameOn = false;
    
    //exercise1

     // var boundary1 = document.getElementById("boundary1");   
     // boundary1.addEventListener("mouseover", function() {
     //     boundary1.classList.add("youlose");
     // });


   //exercise2
    function markWallsRed() {
        walls.forEach(function(wall) {
            wall.classList.add("youlose");
        });
        status.textContent = "You lose!";
        lost = true;
        gameOn = false; 
       
    }

    //exercise3 I replace it with exercise 6

    //   end.addEventListener("mouseover", function() {
    //     if (!lost) {
            
    //         alert("You win!");
    //     }
    // });

   //exercise4
    start.addEventListener("click", function() {
        walls.forEach(function(wall) {
            wall.classList.remove("youlose");
        });
       
        lost = false;
        gameOn = true;
        
        status.textContent = "Move the mouse over the 'S' to begin.";
    });

    
    start.addEventListener("mouseover", function() {
        if (!gameOn && !lost) {
            gameOn = true;
            
        }
    });
    //exercise5   I put  lab2part2 in github

    //exercise6
    walls.forEach(function(wall) {
        wall.addEventListener("mouseover", function() {
            if (gameOn) {
                markWallsRed();
            }
        });
    });

    
    end.addEventListener("mouseover", function() {
        if (gameOn && !lost) {
            status.textContent = "You win!";
        }
        gameOn = false;
        
    });
//exercise7
    document.body.addEventListener("mouseleave", function() {
        if (gameOn && !lost ) {
            markWallsRed();
        }
    });
};
