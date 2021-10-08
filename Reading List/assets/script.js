window.onload = function()

{   //selecting HTML elements
    let input = document.querySelector(".input");
    const button = document.querySelector(".button-image");
    let list = document.querySelector(".list-items");
    //let deletefromlist = document.querySelector(".delete-button-item");
    
    //adding EventListener
    button.addEventListener("click",addtolist);
    
    
    //adding function addtolist()
    function addtolist(e){
        if(input.value===""){
            alert("You haven't entered a book. You can enter the name of your book! Good Day :)");
        }
        else{
            const booklist = document.createElement("div");
            booklist.classList.add("book-list"); 

            const booklistitem = document.createElement("div");
            booklistitem.classList.add("book-list-item");
            booklistitem.innerText = input.value;

            e.preventDefault();

            booklist.appendChild(booklistitem); 

            //creating delete button
            const deletebutton = document.createElement("div");
            deletebutton.classList.add("delete-button-item");
            deletebutton.innerHTML = "<img src='./assets/images/closed-eyes.png' class='delete-image'>";

            booklist.appendChild(deletebutton);

            list.appendChild(booklist);

            // clearing the input
            input.value = "";
        
        

        /* //deleting EventListener
        if(deletefromlist){
            deletefromlist.addEventListener("click",removefromlist);
        }

        //adding function removefromlist()
        /* function removefromlist(e){
            const element = e.target;
            if(element.classList[0]===".book-list"){
                const removeelement = element.parentElement;
                removeelement.remove();
            }
        }

        console.log(deletefromlist);
        
        let close = document.getElementsByClassName(".delete-button-item");
        let i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
        }
        */
            let current_tasks = document.querySelectorAll(".delete-button-item");
            for(let i=0;i<current_tasks.length;i++)
            {
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();
                }
            }

            //crossing out completed
            let books = document.querySelectorAll(".book-list");
            for(let j=0;j<books.length;j++){
                books[j].onclick = function(){
                    this.classList.toggle("completed");
                }
            }
        }
    }

}