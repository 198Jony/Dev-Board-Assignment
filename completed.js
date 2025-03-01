document.getElementById("history-1").style.display="none";
document.getElementById("history-2").style.display="none";
document.getElementById("history-3").style.display="none";
document.getElementById("history-4").style.display="none";
document.getElementById("history-5").style.display="none";
document.getElementById("history-6").style.display="none";
document.getElementById("history").style.display="block";

document.getElementById('completed-btn-1').addEventListener('click',
    function(){
        
        let myDate=new Date();
        let myNewDate= myDate.toLocaleTimeString();
       
        let count1=0;
        let count2=0;
        count1=count1+1;
        const mileStone = document.getElementById("milestone").innerText;
        const sum = count1+parseInt(mileStone);
        document.getElementById("milestone").innerText=parseInt(sum);

        count2++;
        const taskAssign = document.getElementById("task-assign").innerText;
        const minus = parseInt(taskAssign)-count2;
        document.getElementById("task-assign").innerText=parseInt(minus);
       
        alert('Board Task Successfully');
        if(minus==0){
            alert('Congratulations!!!You have completed all the current task');
        }
        
        document.getElementById('completed-btn-1').disabled= true;
        
        document.getElementById("history-1").style.display="block";
        const allHistory = document.getElementById("history-1");

        const p =document.createElement('p');
        p.innerText=`You have completed the task Fix Mobile Button Issue at ${myNewDate}`;
        allHistory.appendChild(p);
})

document.getElementById('completed-btn-2').addEventListener('click',
    function(){
        
        let myDate=new Date();
        let myNewDate= myDate.toLocaleTimeString();

        let count1=0;
        let count2=0;
        count1=count1+1;
        const mileStone = document.getElementById("milestone").innerText;
        const sum = count1+parseInt(mileStone);
        document.getElementById("milestone").innerText=parseInt(sum);

        count2++;
        const taskAssign = document.getElementById("task-assign").innerText;
        const minus = parseInt(taskAssign)-count2;
        document.getElementById("task-assign").innerText=parseInt(minus);
       
        alert('Board Task Successfully');
        if(minus==0){
            alert('Congratulations!!!You have completed all the current task');
        }
       
        document.getElementById('completed-btn-2').disabled= true;

        document.getElementById("history-2").style.display="block";
        const allHistory = document.getElementById("history-2");

        const p =document.createElement('p');
        p.innerText=`You have completed the task Add Dark Mode at ${myNewDate}`;
        allHistory.appendChild(p);
})

document.getElementById('completed-btn-3').addEventListener('click',
    function(){
        
        let myDate=new Date();
        let myNewDate= myDate.toLocaleTimeString();

        let count1=0;
        let count2=0;
        count1=count1+1;
        const mileStone = document.getElementById("milestone").innerText;
        const sum = count1+parseInt(mileStone);
        document.getElementById("milestone").innerText=parseInt(sum);

        count2++;
        const taskAssign = document.getElementById("task-assign").innerText;
        const minus = parseInt(taskAssign)-count2;
        document.getElementById("task-assign").innerText=parseInt(minus);
        
        alert('Board Task Successfully');
        if(minus==0){
            alert('Congratulations!!!You have completed all the current task');
        }
    
        document.getElementById('completed-btn-3').disabled= true;

        document.getElementById("history-3").style.display="block";
        const allHistory = document.getElementById("history-3");

        const p =document.createElement('p');
        p.innerText=`You have completed the task Optimize Home page  at ${myNewDate}`;
        allHistory.appendChild(p);
})

document.getElementById('completed-btn-4').addEventListener('click',
    function(){
        
        let myDate=new Date();
        let myNewDate= myDate.toLocaleTimeString();

        let count1=0;
        let count2=0;
        count1=count1+1;
        const mileStone = document.getElementById("milestone").innerText;
        const sum = count1+parseInt(mileStone);
        document.getElementById("milestone").innerText=parseInt(sum);

        count2++;
        const taskAssign = document.getElementById("task-assign").innerText;
        const minus = parseInt(taskAssign)-count2;
        document.getElementById("task-assign").innerText=parseInt(minus);
       
        alert('Board Task Successfully');
        if(minus==0){
            alert('Congratulations!!!You have completed all the current task');
        }
        document.getElementById('completed-btn-4').disabled= true;

        document.getElementById("history-4").style.display="block";
        const allHistory = document.getElementById("history-4");

        const p =document.createElement('p');
        p.innerText=`You have completed the task Add new emoji 🤲 at ${myNewDate}`;
        allHistory.appendChild(p);
})

document.getElementById('completed-btn-5').addEventListener('click',
    function(){
        
        let myDate=new Date();
        let myNewDate= myDate.toLocaleTimeString();

        let count1=0;
        let count2=0;
        count1=count1+1;
        const mileStone = document.getElementById("milestone").innerText;
        const sum = count1+parseInt(mileStone);
        document.getElementById("milestone").innerText=parseInt(sum);

        count2++;
        const taskAssign = document.getElementById("task-assign").innerText;
        const minus = parseInt(taskAssign)-count2;
        document.getElementById("task-assign").innerText=parseInt(minus);
       
        alert('Board Task Successfully');
        if(minus==0){
            alert('Congratulations!!!You have completed all the current task');
        }
       
        document.getElementById('completed-btn-5').disabled= true;

        document.getElementById("history-5").style.display="block";
        const allHistory = document.getElementById("history-5");

        const p =document.createElement('p');
        p.innerText=`You have completed the task Integrate OpenAI API  at ${myNewDate}`;
        allHistory.appendChild(p);
})

document.getElementById('completed-btn-6').addEventListener('click',
    function(){
        
        let myDate=new Date();
        let myNewDate= myDate.toLocaleTimeString();

        let count1=0;
        let count2=0;
        count1=count1+1;
        const mileStone = document.getElementById("milestone").innerText;
        const sum = count1+parseInt(mileStone);
        document.getElementById("milestone").innerText=parseInt(sum);

        count2++;
        const taskAssign = document.getElementById("task-assign").innerText;
        const minus = parseInt(taskAssign)-count2;
        document.getElementById("task-assign").innerText=parseInt(minus);
       
        alert('Board Task Successfully');
        if(minus==0){
            alert('Congratulations!!!You have completed all the current task');
        }

        document.getElementById('completed-btn-6').disabled= true;

        document.getElementById("history-6").style.display="block";
        const allHistory = document.getElementById("history-6");

        const p =document.createElement('p');
        p.innerText=`You have completed the task Improve Job searching at ${myNewDate}`;
        allHistory.appendChild(p);

       
})

document.getElementById("clear-history").addEventListener('click',
    function(){
        
        document.getElementById("history").style.display="none";
       
})