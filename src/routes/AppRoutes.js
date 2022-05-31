import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "../components/Navbar";
import LayaoutPage from "../containers/layaoutPage";


export default class AppRoutes extends Component{
    render(){
        return(
            <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<LayaoutPage/>}/>
                </Routes>
            </Router>
            </>
        )
    }
}