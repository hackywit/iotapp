/**
 * Created by hackywit on 2017/8/31.
 */
import React from 'react';
import {render} from 'react-dom';
//导入自定义模块可以不写后缀，但是需要在webpack配置文件中配置
import Loader from './preknowledge/Loader.jsx';
import Profile from './preknowledge/Profile.jsx';
render(<Loader />, document.getElementById('root'));
// render(<Profile name="hackywit" age="24"/>, document.getElementById('container'));
const props = {name: 'hackywit', age: 24};
render(<Profile {...props}/>, document.getElementById('container'));//...为属性扩展