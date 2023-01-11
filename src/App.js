import { Grid } from '@mui/material';
import './App.css';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import { useState } from 'react';
import VideoList from './components/VideoList';

function App() {
  
  const[videos,setVideos]=useState([]);
  const[selectedVideo,setSelectedVideo]=useState({ id:{} , snippet:{} });

  return (
    <Grid style={{justifyContent:"center"}} container spacing={10}>
      <Grid item xs={11}>
         <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar
                 onSubmit={handleSubmit}
              /> 
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
               <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
            </Grid>
         </Grid>
      </Grid>
    </Grid>
  );
   async function handleSubmit(searchTerm){
     const {data:{items:videos}} = await youtube.get("search",{
      params:{
        part:"snippet",
        maxResult:5,
        key:"AIzaSyAQNId3YhYX4ygwTJLsozA_yfxZ8samwO0",
        q:searchTerm
      }
     });
     setVideos(videos);
     setSelectedVideo(videos[0])
   }
}

export default App;
