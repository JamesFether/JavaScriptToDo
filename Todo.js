


var input = document.getElementById("Type"); 

var clear = document.getElementById("clear");

var content = document.getElementById("content");

var AddButton = document.getElementById("Add");

var inputfield = document.getElementById("Inputfield"); 

AddButton.onclick = Add; // The Onclick Add to list 

clear.onclick = deleteAll;  // The Onclick delelte all

 //  ???  addButton.onclick = add() // The Onclick Add to list  ???

 

function Add() 
{
    //var myNewItemId = 10;
    var newItem = document.createElement("li"); // Creates a List 
    var newButton = document.createElement("button"); // Adds a new item to the list 
    newButton.classList.add("delete"); // The button for the delete button
    newButton.appendChild(document.createTextNode("x")); // Shows the (X)
    newButton.onclick = MyOnClick; // Delete butoon 
    newItem.appendChild(document.createTextNode(input.value)); //This Adds text to the list.
    newItem.appendChild(newButton); //The delete button. 
    content.appendChild(newItem); //This Adds an Items. 
}



function MyOnClick()  // This adds items 
{    
    this.parentNode.parentNode.removeChild(this.parentNode); 
    return false; 
    
}


function deleteAll() // This deletes the list 
{
document.getElementById("content").innerHTML = ''; 
var txt; if (confirm( "Are you sure?" )); 
}


