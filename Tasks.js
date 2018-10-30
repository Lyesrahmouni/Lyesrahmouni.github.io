function init()
{

    //Task2
    let images = document.getElementById("container").getElementsByTagName("img");
    images[1].src = "flower2.png";
    images[3].src = "flower2.png";

    //Task 3
    document.getElementById("task3").innerHTML = "Your are doing great!";

    //Task4
    let image = document.getElementById("new_element"), image_a = document.createElement("img");
    image.appendChild(image_a).src = "flower2.png";


    //Task5
    let spans = document.getElementById("rainbow").getElementsByTagName("span");
    let colors = ["red", "orange" , "yellow" , "green" , "blue" ,  "purple" , "pink"];

    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];
    }

    //Task6
    var changeSrc = function (event) {
        let filename = event.target.src.replace(/^.*[\\\/]/, '');
        if (event.target.src) {
            event.target.src = "flower2.png";
        }
        if (filename === "flower1.png") {
            event.target.src = "flower2.png";
        }else if (filename === "flower2.png"){
            event.target.src = "flower1.png";
        }

    };

    document.getElementById("event").addEventListener("mouseover", changeSrc);
}