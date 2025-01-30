import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Joke } from '../hooks/useJokes';

interface FrontPageProps {
    saveJoke?: (joke: Joke) => void
    savedJokes: Joke[]
}

function FrontPage( {savedJokes, saveJoke}: FrontPageProps) {
    const [joke, setJoke] = useState<Joke | null>(null)  
    const [loading, setLoading] = useState<boolean>(false)
    const [fetchTrigger, setFetchTrigger] = useState<number>(0)

    const fetchJoke = () => {
        setLoading(true)
        const controller = new AbortController()
        const signal = controller.signal

        fetch('https://official-joke-api.appspot.com/random_joke', {signal})
        .then(response => response.json())
        .then(data =>  {
            setJoke(data)
            setLoading(false)
        })
        .catch(error => {
            if (error.name === "AbortError") {
                console.log("Fetch aborted")
            } else {
                console.log("Error fetching data", error)
            }   
            setLoading(false)
        })
        return () => controller.abort()
    }

    useEffect(() => {
        fetchJoke()
    }, [fetchTrigger])  

    const handleFetchJoke = () => {
        setFetchTrigger(prev => prev + 1)
    }
    const handleSaveJoke = () => {
        if(joke && saveJoke) {
            saveJoke(joke)
            console.log("Joke saved")
            console.log("savedJokes", savedJokes)   
        }
    }

  return (
    <Box sx={{ padding: 2 }}>
        <Typography variant="h4" component="h1">
            Welcome to the Joker App!
        </Typography>
        <Typography variant="body1">
            Click the button below to get a random joke!
        </Typography>
        <Button variant="contained" sx={{ color: "white"}} onClick={handleFetchJoke}>
            Get Joke
        </Button>

        {loading ? (
                <Typography variant="body1">Loading a joke...</Typography>
            ) : (
                joke && (
                    <Card background-color="grey" key={joke.id} sx={{ marginTop: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {joke.setup}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {joke.punchline}
                            </Typography>
                            <br />    
                            <Button variant="contained" sx={{ color: "white"}} onClick={handleSaveJoke}>
                                Save Joke
                            </Button>
                        </CardContent>
                    </Card>
                )
            )}
    </Box>
  )
}

export default FrontPage