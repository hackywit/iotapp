import React, { PropTypes } from 'react';
import ListenItem from '../ListItem';

const propTypes = {
    items: PropTypes.array.isRequired
};

export default function List({items}) {
    //循环插入子组件
    items = items.map(
        item => (
            <ListenItem item={item} key={item.id}/>
        )
    );
    return (
        <div>
            {items}
        </div>
    );
}