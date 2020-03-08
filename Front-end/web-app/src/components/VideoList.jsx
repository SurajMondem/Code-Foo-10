import React from "react";

import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.map((video,index) => <VideoItem onVideoSelect={onVideoSelect} key={index} video={video}/>);
    return(listOfVideos);
};

export default VideoList;