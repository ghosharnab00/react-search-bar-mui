import React, { useEffect, useState } from 'react'
import { Stack } from '@mui/system';
import { Paper, Box, Typography } from '@mui/material';


export default function FetchProducts({searchstring, list}) {

const filteredList = list.filter((element) => {
    if (searchstring === '') {
        return element;
    }
    else {
        return element.title.toLowerCase().includes(searchstring)
    }
})

  return (
    <Box>
      <Stack spacing={2}
      sx={{
        overflow: 'auto',
        maxHeight: 500,
    
      }}
      >
      {filteredList.map((item) => (
                <Paper key={item.id}
                sx={{
                    textAlign:'left'
                }}  >
                    <Typography><strong>Title:</strong> {item.title}</Typography>
                    <Typography><strong>Desc:</strong> {item.description}</Typography>
                    <Typography><strong>Price:</strong> {item.price}</Typography>
                    <Typography><strong>Rating:</strong> {item.rating}</Typography>
                    <Typography><strong>Brand:</strong> {item.brand}</Typography>
                </Paper>
            ))}
        
</Stack>
    </Box>
  )
}
