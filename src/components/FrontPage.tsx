import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

interface Joke {
    type: string;
    setup: string;
    punchline: string;
    id: number;
}

function FrontPage() {
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
    // test
    useEffect(() => {
        fetchJoke()
    }, [fetchTrigger])  

    const handleButtonClick = () => {
        setFetchTrigger(prev => prev + 1)
    }

  return (
    <Box sx={{ padding: 2 }}>
        <Typography variant="h4" component="h1">
            Welcome to the Joker App!
        </Typography>
        <Typography variant="body1">
            Click the button below to get a random joke!
        </Typography>
        <Button variant="contained" sx={{ color: "white"}} onClick={handleButtonClick}>
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
                        </CardContent>
                    </Card>
                )
            )}
    </Box>
  )
}

export default FrontPage