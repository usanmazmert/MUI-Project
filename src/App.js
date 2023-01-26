import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//Components
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Add from "./components/Add"

//MUI Components
import {Stack, Box, createTheme, ThemeProvider} from "@mui/material"
import { useState } from 'react';


function App() {
  const [mode, setMode ] = useState("light");
  const darkTheme = createTheme({
    palette:{
      mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"}>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed/>
          <Rightbar/>
        </Stack >
        <Add/>
      </Box>
    </ThemeProvider>

  );
}

export default App;
