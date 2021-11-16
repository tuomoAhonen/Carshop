import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Carlist from './components/Carlist';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">
            Car Shop
          </Typography>
        </Toolbar>
      </AppBar>
      <Carlist/>
    </div>
  );
}

export default App;
