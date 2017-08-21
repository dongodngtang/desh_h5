import React, {Component, PropTypes} from 'react';
import {History, Link} from 'react-router';
import {connect} from 'react-redux';
import {is, fromJS} from 'immutable';
import {Tool} from '../Config/Tool';
import {Header, template} from './common/mixin';


export default class PaySuccess extends Component {


    render() {
        return (<div className="component_container index_module">

            {this.postInform()}

        </div>)
    }

    postInform = () => {
        console.log('lajsldkjflasdkjf')
    }
}