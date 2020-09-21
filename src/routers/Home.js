import React from 'react';
import './Home.css';

class Home extends React.Component{

    state = {
        isLoading: false
    };

    componentDidMount(){
    }

    render(){
        const {isLoading} = this.state;
        return <section className="container">
                    {isLoading ? (
                        <div className="loader">
                            <span className="loader_text">Loading...</span> 
                        </div>    
                    ) : (
                        <div className="mtyt">
                            <span className="loader_text">Hello World</span>
                        </div>
                    )}
                </section>;
            }
}

export default Home;