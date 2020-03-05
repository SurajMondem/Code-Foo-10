import  React , {Component} from 'react';

const corsaccess = `https://cors-anywhere.herokuapp.com/`;
const startIndex = 30;
const  count = 5;

let  finalURL =  `${corsaccess}https://ign-apis.herokuapp.com/videos?startIndex=${startIndex}&count=${count}`;
//videos?startIndex=${startIndex}&count=${count}`
class Videos extends Component {

    constructor(props){
        super(props);

        this.state = {
            results: []
        }
        this.clicked = this.clicked.bind(this);
    }
    clicked(){
        //console.log('clicked');
            return fetch(finalURL)
                .then((response) => response.json())
                .then((responseJson) => {
                    //console.log(responseJson);
                    const  results = responseJson.data.map(obj => obj.assets[0].url);
                    this.setState({results});
                    console.log(this.state.results);
                })
                .catch((error) => {
                    console.error(error);
                });
    }

    render() {
        console.log(finalURL);
        return (
            <div>
                <button onClick={this.clicked}> Get Videos </button>
                {
                    this.state.results.map((link, index) => {
                        console.log(link);
                        var frame = <div key={index} className={"videos"}><iframe  width={"560"} height={"315"} src = {link} frameBorder={"0"} allowFullScreen></iframe></div>
                        return frame;
                    })
                }
                {this.frame}

            </div>
        )
    }
}
export default Videos;

