/**
 * Created by hackywit on 2017/8/31.
 */
import React, {Component} from 'react'
import {render} from 'react-dom';

class Greeter extends Component {
    render() {
        return (
            <div>
                Hi there and greetings!
            </div>
        );
    }
}
render(<Greeter />, document.getElementById('root'));