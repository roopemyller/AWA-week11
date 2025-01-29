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

    const fetchJoke = () => {
        setLoading(true)
        const controller = new AbortController()
        // const signal = controller.signal

        fetch('https://official-joke-api.appspot.com/random_joke')
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
    }, [])  


  return (
    <Box sx={{ padding: 2 }}>
        <Typography variant="h4" component="h1">
            Welcome to the Joker App!
        </Typography>
        <Typography variant="body1">
            Click the button below to get a random joke!
        </Typography>
        <Button variant="contained" sx={{ color: "white"}} onClick={fetchJoke}>
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