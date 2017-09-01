import React,{PropTypes} from 'react'

// const propTypes = {
//     hobby: PropTypes.string.isRequired
// };

//没有内部state，没有生命周期函数，只是根据传入的参数展示效果，这类组件称为无状态组件，可以简写
// export default class Hobby extends React.Component {
//     render() {
//         return <li>{this.props.hobby}</li>
//     }
// }
// Hobby.propTypes = propTypes;
export default function (props) {
    return <li>{props.hobby}</li>
}