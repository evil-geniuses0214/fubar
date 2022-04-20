import React, {Component} from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardTitle
} from 'reactstrap';

export default class Index extends Component {
    render() {
        let {profiles} = this.props
        return (<>
                <h1>View All</h1>
                {profiles && profiles.map(profile => {
                    return (<div key={profile.id}>
                        <Card>
                            <CardImg alt="safe-house" src={profile.picture}></CardImg>
                            <CardTitle tag="h5">{profile.name}</CardTitle>
                            <CardBody>
                                <p>{profile.branch_of_service}</p>
                                <p>{profile.about_me}</p>
                            </CardBody>
                        </Card>
                    </div>)
                })}
            </>
        )
    }
}