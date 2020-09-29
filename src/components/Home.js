import React from "react";

class Home extends React.Component{
    render(){
        return  <div className="app">
                    <main>
                        <div className="header">
                            <h1 id="main_title">Convert and Invite!</h1>
                        </div>

                        <div className="my-time-block">
                            <div id="my_time_title">
                                <h2>My Time</h2>
                            </div>
                            <div className="my-time-cardholder">
                                
                            </div>
                        </div>

                        <div className="yout-time">
                            <div id="your_time_title">
                                <h2>Your Time</h2>
                            </div>
                        </div>

                        <div className="footer">

                        </div>
                    </main>
                </div>;
    }
}

export default Home;