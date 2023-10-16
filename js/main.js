const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{
    return ["Dit is string 1","We saw a batman descending","On a day in spring."]
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("Toward those short trees","We saw a hawk descending","On a day in spring.")
    
    console.log(randomHaiku())

}

start()

function robinHaiku(){
    return ["regel1", "regel2", "regel3"]
}

function EliasHaiku(){
    console.log("Aapje word wakker", "Aapje heeft honger en eet een banaan", "Aapje heeft geen honger meer")
}