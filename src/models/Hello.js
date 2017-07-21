
export default {

    // 全局state所用的key
    namespace: 'count',

    // 默认数据
    state: {
        record : 0,
        current: 0,
    },

    /**
     * 唯一可以更新state的地方
     * (state, action) => newState
     * */
    reducers: {
        add (state) {
            const current = state.record;
            const newCurrent = current + 1;
            return {
                ...state,
                record: newCurrent > current ? newCurrent : current,
                current: newCurrent
            }
        },

        minus (state) {
            return {
                ...state,
                current: state.current - 1
            }
        }
    }
};
