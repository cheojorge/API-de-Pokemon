import React, { useEffect, useState } from 'react'

export const Poke = () => {
    const [pokemon, setPokemon] = useState([])
    const [click, setclick] = useState(false)
    useEffect(() => {
        if(click){
            fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
        }
        
    }, [click])
    return (
        <div>
            <button onClick={() => setclick(true)}>Fetch Pokemon</button>
            <ol>
                {
                    pokemon.map((pokemon,index)=>{
                        return(<li key={index}>{pokemon.name}</li>)
                    })
                }
            </ol>
        </div>
    )
}
