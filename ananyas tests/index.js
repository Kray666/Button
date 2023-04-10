show_button = document.getElementById("showBtn");

hide_button = document.getElementById("hideBtn");


imgg = document.getElementById("my-image")


show_button.addEventListener("click", showPic);


function showPic(){

console.log("show")

imgg.style.visibility = ""


};


hide_button.addEventListener("click", hidePic);


function hidePic(){

console.log("hide")

imgg.style.visibility = "hidden"

}