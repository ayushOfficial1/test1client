import { Box, Paper } from '@mui/material'
import React from 'react'

const rightBar = () => {
  return (
    <Box sx={{display:'flex' , flexDirection:"column", alignItems:'center'}}>
    <Paper elevation={10} sx={{height:'5rem', width:'3rem'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita neque repudiandae, facilis harum nobis adipisci inventore cum, laboriosam vel omnis delectus ut quod! 
    </Paper>
</Box>
  )
}

export default rightBar