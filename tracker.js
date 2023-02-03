const form=document.querySelector('#my-form');
const expinput=document.querySelector('#exp');
const descinput=document.querySelector('#desc');
const catinput=document.querySelector('#cat')
const userlist=document.getElementById('users');


form.addEventListener('submit',onsubmit);

//userlist.addEventListener('click',removeitem);




function onsubmit(e){
    e.preventDefault();
    
    
var showlist=[];
var expvalue=expinput.value;
var descvalue=descinput.value;
var catvalue=catinput.value;
 var myobj ={
    expvalue,
    descvalue,
    catvalue
 }

    showlist.push(myobj);
    localStorage.setItem(myobj.catvalue,JSON.stringify(showlist));
    // localStorage.setItem('name',nameInput.value);
    // localStorage.setItem('email',emailInput.value);
     
    //create li
var li=document.createElement('li');

//create button
var deletebutton=document.createElement('button');
var editbtn=document.createElement('button');
deletebutton.appendChild(document.createTextNode('Delete Expense'));
editbtn.appendChild(document.createTextNode('Edit Expense'));



   
         li=document.createElement('li');
        li.appendChild(document.createTextNode(`${expinput.value} - 
        ${descinput.value} - ${catinput.value}` ));
        
    

       
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild(deletebutton);
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild( document.createTextNode( '\u00A0' ) );
        li.appendChild(editbtn);
         userlist.appendChild(li);

        //clear the fields

        expinput.value='';
        catinput.value='';
        descinput.value='';
    

            deletebutton.onclick =()=>{
                localStorage.removeItem(myobj.catvalue);
                userlist.removeChild(li);
            }
            editbtn.onclick =() =>{
                localStorage.removeItem(myobj.catvalue);
                userlist.removeChild(li);
                document.getElementById('cat').value=myobj.catvalue;
                document.getElementById('desc').value=myobj.descvalue;
                document.getElementById('exp').value=myobj.expvalue;

            }

        // button.onclick = () =>{
        //     localStorage.removeItem(myobj.names);
        //     userlist.removeChild(li);
        //    }

        //    editbtn.onclick = () =>{
            
        //     localStorage.removeItem(myobj.names);
        //     userlist.removeChild(li);
        //     document.getElementById('email').value=myobj.email;
        //     document.getElementById('name').value=myobj.names;
        //    }






    


     //create dlt button
     
}





