const buttons=document.querySelectorAll('button');
const screen=document.getElementById('screen');

for(let btn of buttons){
    btn.addEventListener('click',(e)=>{
        let btntext=e.target.innerText;

        if(btntext==='X'){
            screen.value+="*";
        }
        else if(btntext==="@"){
            screen.value+=" ";
        }
        else if(btntext==="="){

            try{
                screen.value=eval(screen.value);
            }
            catch(e){
                screen.value="Invalid Operation"
                console.log(e.message);
            }
           
        }
        else{
            screen.value+=btntext;
        }
    })
}



        


