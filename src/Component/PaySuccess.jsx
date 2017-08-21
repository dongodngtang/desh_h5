import React, {Component, PropTypes} from 'react';
import {getRaceList} from '../Config/RaceDao';


export default class PaySuccess extends Component {


    render() {
        return (<div className="component_container index_module">


        </div>)
    }


    componentDidMount() {
        this.postInform()
    }

    postInform = () => {
        getRaceList(data => {
            console.log(data)
        }, err => {
            console.log(err)
        })
    }
}