import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Joke } from '../hooks/useJokes';

interface SavedPageProps {
    savedJokes: Joke[]
    deleteJoke: (joke: Joke) => boolean
}

function SavedPage({savedJokes, deleteJoke}: SavedPageProps) {

    console.log("savedJokes", savedJokes)

    return (
        <Box sx={{ marginTop: 4 }}>
            <Typography variant="h5" component="h2">
                Saved Jokes
            </Typography>

            {savedJokes.length === 0 ? (
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                    No saved jokes yet.
                </Typography>
            ) : (
                savedJokes.map((joke) => (
                    <Card key={joke.id} sx={{ marginTop: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {joke.setup}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {joke.punchline}
                            </Typography>
                            <Button variant="contained" sx={{ color: "white"}} onClick={() => deleteJoke(joke)}>Delete</Button>
                        </CardContent>
                    </Card>
                ))
            )}
        </Box>
    )
}

export default SavedPage