// create a phone book where you can input,delete and retireve numbers

let phoneBook=[];

// function to input details name and number
function phoneDetails(param1,param2){
  phoneBook.push(param1,param2);
  console.log(phoneBook);
}
phoneDetails(['ozi',080],['ami',08055544333]

);

// function to delete details

function phoneDelete(){
  phoneBook.pop();
  console.log(phoneBook);
}
phoneDelete();