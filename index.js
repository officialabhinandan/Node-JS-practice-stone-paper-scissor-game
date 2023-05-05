// write a JS code to implement stone paper scissors
let tryAgain = true
//let count1 = 0
//let count2 = 0
while(tryAgain){
let user = prompt("Enter st for Stone, p for Paper and sc for Scissors")
//console.log(user)
let rgn = Math.floor(Math.random() * 3) //rgn = randomly generated number
//console.log(comp)
let comp = ["st", "p", "sc"][rgn]

const match = (comp,user) =>{
  //if(user != 'st' || user != 'sc'|| user != 'p')
  //  return "Invalid input. Please read the game rules carefully."
  if(comp === user){
    return "Match tied."
  }
  else if(comp == 'st' && user == 'p'){
    return "user is winner"
    //count1++
  }
  else if(comp == 'st' && user == 'sc'){
    return "comp is winner"
   //count2++
  }
  else if(comp == 'p' && user == 'sc'){
    return "user is winner"
    //count1++
  }
  else if(comp == 'p' && user == 'st'){
    return "comp is winner"
    //count2++
  }
  else if(comp == 'sc' && user == 'p'){
    return "comp is winner"
    //count2++
  }
  else if(comp == 'sc' && user == 'st'){
    return "user is winner"
    //count1++
  }
  else if(comp == 'sc' && user != 'st' || user != 'sc' || user != 'p'){
    return "Invalid input. Please read the game rules carefully."
  }
  else if(comp == 'st' && user != 'st' || user != 'sc' || user != 'p'){
    return "Invalid input. Please read the game rules carefully."
  }
  else if(comp == 'p' && user != 'st' || user != 'sc' || user != 'p'){
    return "Invalid input. Please read the game rules carefully."
  }
}

let result = match(comp,user)
console.log(`Comp = ${comp} and User = ${user}, Result:  ${result.toUpperCase()}`)
tryAgain = confirm("Do you wanna play again? ")
}
//console.log("Your Final Score: ", `${count1}`)
//console.log("Comp's Final Score: ", `${count2}`)
//count1>count2? console.log("You Won") : console.log("Comp Won")
console.log("Thanks for playing. See you again.")

