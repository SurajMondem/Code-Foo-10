import React from "react";
import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.map((video,index) => <VideoItem onVideoSelect={onVideoSelect} key={index} video={video}/>);
    return(
        <Grid container spacing={1}>
            {listOfVideos}
        </Grid>
    );
};

export default VideoList;