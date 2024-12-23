function run(){

    document.querySelector(".title")[0].addEventListener("click", function(){

        var type = document.querySelectorAll(".title")[0].classList[0];
        type.style.color = 'blue';
       
       });

}
run();

