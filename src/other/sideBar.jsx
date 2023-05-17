import { Box, Paper } from '@mui/material'
import React from 'react'

const sideBar = () => {
  return (
    <Box sx={{display:'flex' , flexDirection:"column", alignItems:'center'}}>
        <Paper elevation={10} sx={{height:'5rem', width:'3rem'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, consequatur, soluta officiis incidunt voluptates aut fuga porro nesciunt minima doloribus alias, temporibus id suscipit explicabo ducimus architecto veritatis eligendi. Molestiae repellendus deleniti reprehenderit odit.
        </Paper>
    </Box>
  )
}

export default sideBar