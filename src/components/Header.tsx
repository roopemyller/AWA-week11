
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Header() {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="fixed">
                <Toolbar sx={{backgroundColor: "#124"}}>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                        Joke Generator
                    </Typography>
                    <Button color="inherit" href='/'>Home</Button>
                    <Button color="inherit" href='/saved'>Saved</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;