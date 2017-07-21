import './Hello.scss';
import { connect } from 'dva';

// count 对应 model 里的state 在后面 connect 的时候绑定
const CountApp = ({count, dispatch}) => {
    const handleClick = () => dispatch( {
        type: 'count/add'
    });

    return (
        <div className="hello_root">
            <div className="hello_high">
                Highest Records: { count.record }
            </div>

            <div className="hello_curr">{ count.current }</div>

            <button
                className="hello_btn"
                onClick={handleClick}
            >+</button>
    </div>
  )
};

export default connect((state) => ( { count: state.count } ))(CountApp);


const combineReducers = reducers => {
    return (state = {}, action) => {

        const keys = Object.keys(reducers); // 拿到每一个reducer名

        return keys.reduce(
            (nextState, key) => {
                /**
                 * prev => {}
                 * curr => 当前reducer
                 * nextState[key] => {}
                 * */
                nextState[key] = reducers[key](state[key], action);
                return nextState;
            },
            {}
        );
    };
};
