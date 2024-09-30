
import './App.css'
import Pagamentos from './componentes/pages/Pagamentos'
import {Box} from '@mui/material'

function App() {


  return (
    <Box 
      display="flex"
      width="100vw" 
      height="100vh" 
      py={4}
      justifyContent="center" 
      alignItems="center"
      bgcolor="#4a4648">
        <Pagamentos/>      
    </Box>
  )
}

export default App
