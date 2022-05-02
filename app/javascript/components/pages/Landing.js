import React, { Component } from "react";
import landingBackground from "../assets/landing-bg.jpg";

export default class Header extends Component {
    render() {

        return (
            <>
                <div className="landing-holder">
                    <img src={landingBackground} className="landing-bg" />
                    <div className="register-holder">
                        <a href="/users/sign_in" className="btn draw-border">SIGN-IN/SIGN-UP</a>
                    </div>
                </div>
            </>
        )
    }
}