let timeleft = 3;
let generator = setInterval(function (){
    if(timeleft<=0){
        clearInterval(generator);
       
           let num = Math.floor(Math.random()*100)
            console.log(num);
        
    }
    else{
        let count = timeleft + "second remaining";
        console.log(count);
    }
   timeleft = timeleft -1;
},1000)



