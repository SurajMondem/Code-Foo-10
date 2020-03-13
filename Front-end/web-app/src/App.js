import React, {Component} from 'react';
import Api from './api/ignApi';
import { Grid, Paper } from '@material-ui/core';
import "./App.css"

import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null,
    };

    count = 4;

    componentDidMount() {
        this.handleSubmit();
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video} )
    };

    handleSubmit = async () => {
        const response = await Api.get('videos', {
            params: {
                startIndex: '30',
                count: this.count,
            }
        });

        console.log(response.data.data[0]);

        this.setState({videos: response.data.data,
            selectedVideo: response.data.data[0]});
    };

    updateCount = () => {
        this.count = this.count + 4;
        console.log("count value" + this.count);
        this.handleSubmit();
    };

  render() {

        const { selectedVideo } = this.state;
        const { videos } = this.state;

    return (
        <Grid justify="center" container spacing={3}>
            <Grid item xs={11}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Paper>xs=12</Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={selectedVideo}/>
                    </Grid>
                    <Grid item xs={4} container spacing={2}>
                        <Grid item xs={12} >
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper>
                                <button className={"load-more"} onClick={this.updateCount}>
                                    Load More
                                </button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
  }
}

export default App;
