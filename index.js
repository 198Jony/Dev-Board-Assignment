document.getElementById("discover-something").addEventListener('click',
    function(event){
        event.preventDefault();

       window.location.href="./blog.html";
})

document.getElementById("random-color").addEventListener('click',
    function(event){
        event.preventDefault();

       const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
       document.body.style.backgroundColor = randomColor;
})


const myDate= new Date();
const weekDay = myDate.toLocaleString("en-US", {weekday: "short" });
const month = myDate.toLocaleString("en-US", {month: "short" });
const date = myDate.getDate();
const year = myDate.getFullYear();

document.getElementById("date").innerText = `${weekDay} , 
                                             ${month} ${date} ${year}`;
