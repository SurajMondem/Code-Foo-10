import React from "react";
import { Grid } from '@material-ui/core';
import "../App.css"

import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.map((video,index) => <VideoItem onVideoSelect={onVideoSelect} key={index} video={video}/>);
    return(
        <Grid className={"videoList"} container spacing={1} style={{overflow: 'scroll', width: '400px',height: '600px'}}>
            {listOfVideos}
        </Grid>
    );
};

export default VideoList;