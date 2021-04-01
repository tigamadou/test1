import React, { Component } from 'react';
import Login from '../components/login'
import Registration from '../components/Registration'
import { Player } from '@lottiefiles/react-lottie-player';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.player = React.createRef();
    }
    render() {
        return (


                <div className="bg-purple-500	h-screen flex justify-between items-center ">
                    <div className="w-full p-20">
                        
                        <Switch>
                            <Route path="/registration">
                                <Registration />
                            </Route>
                            <Route path="/">
                                <Login />
                            </Route>
                        </Switch>
                    </div>
                    <div className="text-center w-full">
                        <div className="rounded-full bg-grey-100">
                        <Player
                            ref={this.player} // set the ref to your class instance
                            autoplay={true}
                            loop={true}
                            controls={true}
                            src="https://assets8.lottiefiles.com/packages/lf20_d74yeM.json"
                            style={{ height: '600px', width: '600px' }}
                        ></Player>
                        </div>
                    </div>
                </div>

        );
    }
}

export default Home;
