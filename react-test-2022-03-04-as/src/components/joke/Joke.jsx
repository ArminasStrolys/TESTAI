import React from "react";
import './joke.css'

// const setup = document.querySelector('div')

let jokesHere = []

fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')
.then(res => res.json())
.then(data => jokesHere = data.jokes.map(e=>{
  return e.type
}))
.then(() => console.log(jokesHere))
// .then(data => data.jokes.map(e=>{
//   console.log(e)
//   if (e.type === 'single'){
//     return setup.innerHTML += `<span><b>Joke:</b> ${e.joke}</span>`
//   } else {
//     return setup.innerHTML += `<span><b>Setup:</b> ${e.setup}<hr/><b>Punchline:</b> ${e.delivery}</span>`
//   }
// }))

export default function Joke() {
  return <>
  <div>
  <p>HI</p>
  </div>
  </>
}