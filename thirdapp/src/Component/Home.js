import React,{Component} from 'react';
import Banner from './Banner';

class Home extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Banner/>
            </div>
        )
    }

    componentDidMount(){
        
    }
}

export default Home;