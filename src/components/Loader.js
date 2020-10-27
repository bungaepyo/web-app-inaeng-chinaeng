import React from 'react';
import mtytLoader from '../images/mtyt_loader.svg';
import "../styles/Loader.css";

class Loader extends React.Component {

    componentWillMount(){
        setTimeout(() => { 
            this.props.history.push('/invite');
        }, 3000)
    }

    render() {
     return(
        <div className="loader-holder">
            <object className="loader" type="image/svg+xml" data={mtytLoader}>svg-animation</object>
        </div> 
     );
    }
}
export default Loader;