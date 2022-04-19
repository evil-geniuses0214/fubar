import React, { Component } from "react";

export default class Index extends Component {
    render() {
        let { profiles } = this.props
        return (
            <>
                <h1>Index</h1>
                {profiles.map(profile => {
                    return (
                        <h1 key={profile.id}>
                            {profile.name}
                        </h1>
                    )
                })}
            </>
        )
    }
}