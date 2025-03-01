document.getElementById("discover-something").addEventListener('click',
    function(){
       window.location.href="./blog.html";
})

document.getElementById("random-color").addEventListener('click',
    function(){
       const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
       document.body.style.backgroundColor = randomColor;
})


      document.completedBtnID("completed-btn-1");