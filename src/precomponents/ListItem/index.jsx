// 当声明一个组件的时候，采用下面的顺序规则

// 加载依赖
import React, {PropTypes} from 'react';

// 属性验证
const propTypes = {
    item: PropTypes.object.isRequired
};

// 组件主体，这里是stateless function，所以直接就是一个函数
function ListItem({item}) {
    // 返回JSX结构
    return (
        <a href="#">
            <span>
                {item.time}
            </span>
            {item.title}
        </a>
    );
}

// 添加验证
ListItem.propTypes = propTypes;

// 导出组件
export default ListItem;