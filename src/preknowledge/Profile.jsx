// import React from 'react';
import React, {PropTypes} from 'react';
import Hobby from './Hobby.jsx';

//需要验证的属性,这边只是会在调试js的时候报warning,但页面还是会显示出来
const propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: 0,
            hobbies: ['skateboarding', 'rock music']
        };
        //这边手动将回调函数绑定到实例上
        this.likedCallback = this.likedCallback.bind(this);
        this.addHobbyCallback = this.addHobbyCallback.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.likedCallback();
        }, 1000)
    }

    likedCallback() {
        let liked = this.state.liked;
        liked++;
        //set的参数为object类型，重新渲染UI界面
        this.setState({
            liked
        })
    }

    addHobbyCallback() {
        //用this.refs.name来获取DOM节点
        let hobbyInput = this.refs.hobby;
        let val = hobbyInput.value;
        if (val) {
            let hobbies = this.state.hobbies;
            //添加值到数组
            hobbies = [...hobbies, val];
            //更新status，刷新UI
            this.setState({
                hobbies
            }, () => {
                hobbyInput.value = ''
            });
        }
    }

    //render是这个组件渲染的Virtual DOM结构,返回的是一个ReactElement对象
    render() {
        return (
            <div className="profile-component">
                {/*this.props就是传入的属性，这边的注释有点特别*/}
                <h1>我名字叫{this.props.name}</h1>
                <h2>我今年{this.props.age}岁</h2>
                {/*这边只能填属性名，其他的填了都出错*/}
                <button onClick={this.likedCallback}>给我点赞</button>
                <h2>总点赞数：{this.state.liked}</h2>
                <ul>
                    {this.state.hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby}/>)}
                </ul>
                <input type="text" ref="hobby"/>
                <button onClick={this.addHobbyCallback}>添加爱好</button>
            </div>
        )
    }
}
//将要验证赋值给这个组件的propTypes属性
Profile.propTypes = propTypes;