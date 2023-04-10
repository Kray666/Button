B1 = document.getElementById="b1";
B2 = document.getElementById="b2";
B3 = document.getElementById="b3";
B4 = document.getElementById="b4";
B5 = document.getElementById="b5";
B6 = document.getElementById="b6";
B11 = document.getElementById="1st";
B22 = document.getElementById="2nd";
B33 = document.getElementById="3rd";
B44 = document.getElementById="4th";
B55 = document.getElementById="5th";
B66 = document.getElementById="6th";
B7 = document.getElementById="b7";
B1.addEventListener("click", Show);
B2.addEventListener("click", Show);
B3.addEventListener("click", Show);
B4.addEventListener("click", Show);
B5.addEventListener("click", Show);
B6.addEventListener("click", Show);
 
function Show(){ 
    
    switch(true) {
        case B1:
            b11.style.visibility = "";
            break;
        case B2:
            B22.style.visibility = "";
                break;  
        case B3:
            B33.style.visibility = "";
                    break; 
    }
 
    };

