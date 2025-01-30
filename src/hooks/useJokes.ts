
import { useState } from 'react';

export interface Joke {
    type: string;
    setup: string;
    punchline: string;
    id: number;
} 

const useJokes = () => {
  const [savedJokes, setSavedJokes] = useState<Joke[]>([]);

  const saveJoke = (joke: Joke) => {
    setSavedJokes((prevJokes) => [...prevJokes, joke])
    console.log('Joke saved:', joke)
    return true
  }
  return {savedJokes, saveJoke}
}

export default useJokes