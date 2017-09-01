import React from 'react';
import List from '../src/precomponents/List';

import '../src/precomponents/List/style.scss';

export default class App extends React.Component {
    render() {
        const items = [
            {
                "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
                "title": "Hello",
                "content": "# testing markdown",
                "time": 1458030208359
            },
            {
                "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775b",
                "title": "Hello2",
                "content": "# testing markdown",
                "time": 1458030208359
            }
        ];
        return (
            <section className="deskmark-component">
                <div>
                    <div>
                        <List items={items}/>
                    </div>
                </div>
            </section>
        )
    }
}