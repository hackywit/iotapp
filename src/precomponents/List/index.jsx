import React, { PropTypes } from 'react';
import ListenItem from '../ListItem';

const propTypes = {
    items: PropTypes.array.isRequired
};

//直接大括号解析省略了props，ES6解构写法
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