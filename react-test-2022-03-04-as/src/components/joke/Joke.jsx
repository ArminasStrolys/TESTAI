import React from "react";
import './joke.css'

const setup = document.querySelectorAll('div')[0]

fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')
.then(res => res.json())
// .then(data => console.log(data))
// .then(data => console.log(data.jokes[1].joke))
.then(data => data.jokes.map(e=>{
  console.log(e)
  if (e.type === 'single'){
    return setup.innerHTML += `<span><b>Joke:</b> ${e.joke}</span>`
  } else {
    return setup.innerHTML += `<span><b>Setup:</b> ${e.setup}<hr/><b>Punchline:</b> ${e.delivery}</span>`
  }
}))

export default function Joke() {
  return (
    <>
    </>
  );
}
