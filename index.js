// Code your solutions in this file


const names = ['Lisa', 'Kaitlin', 'Jan'];

const eventName = "surprise";

const messagesArray = [];

function writeCards(names,eventName) {
    for (let i = 0; i < names.length; i++) {
        //console.log(`"Thank you, ${names[i]} for the wonderful surprise gift!"`);
        //debugger;

    
        messagesArray.push("Thank you, " + names[i] + ", for the wonderful " + eventName + " gift!");
        

    }
    
    return messagesArray;
}

//Collect the messages in an array and return this array

// -------- while -------------------------------

function countDown(number){
    let i = 0;
    while (number >= 0){
        i++;
        console.log(number);
        number--;
    
    
    }
    return i;

}



console.log(countDown(10));
console.log(countDown(4));


