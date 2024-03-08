import { Box, Grid } from '@mui/material'
import React from 'react'

const Collection = () => {
  return (
    <Box>
        <Grid container>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}></Grid>
        </Grid>
    </Box>
  )
}

export default Collection