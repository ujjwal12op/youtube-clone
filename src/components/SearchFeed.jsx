import React from 'react'
import {useState,useEffect} from 'react';
import {Box,Typography} from '@mui/material'
import {useParams} from 'react-router-dom';
import {Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

// Useeffect is a lifecycle hook which gets called when the component initally loads.
const SearchFeed = () => {
  // If if initailly keep it empty it will run only after reload.
  
  
  
  const[videos,setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
  },[searchTerm])

  return (
    <Box p={2} sx={{overflowY: 'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
           Search results for : <span style={{color : '#F31503'}}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed
