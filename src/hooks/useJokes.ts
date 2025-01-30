
import { useState } from 'react';

export interface Joke {
    type: string;
    setup: string;
    punchline: string;
    id: number;
} 

export const useJokes = () => {
  const [savedJokes, setSavedJokes] = useState<Joke[]>([]);

  const saveJoke = (joke: Joke) => {
    setSavedJokes((prevJokes) => [...prevJokes, joke])
    console.log('Joke saved:', joke)
    return true
  }

  const deleteJoke = (id: number) => {
    setSavedJokes((prevJokes) => prevJokes.filter((j) => j.id !== id))
    console.log('Joke deleted:', id)
  }

  return {savedJokes, saveJoke, deleteJoke}
}
