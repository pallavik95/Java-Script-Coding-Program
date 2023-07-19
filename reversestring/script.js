function reverse(){
    let input = document.getElementById("namedata").value;
    console.log(input);
    setTimeout(function (){
       
        stored ="";
            for(let i=input.length-1;i>=0;i--)
            {
               
                stored += input[i];
            }
        
        document.getElementById('display').innerText = stored;
    },2000)
}
reverse();