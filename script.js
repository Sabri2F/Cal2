
let string = ""; //declare an empty string
let buttons = document.querySelectorAll('.bu'); //declare & point to buttons

Array.from(buttons).forEach((bu) =>{ 
    bu.addEventListener('click', (e)=>{ //add event action on each button
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DE'){
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})