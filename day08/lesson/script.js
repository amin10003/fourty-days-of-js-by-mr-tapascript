//Lexical Environment :- how and where your code is physically placed.
//Execution Context :- the current running code and anything surrounding it which helps to run
//Global Execution Context (GEC)
//Creation Phase *window & *this
//window-global Objact


var name = 'Ali'

function sayNam(){
    console.log(this.name)
}

sayNam()