import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'; // {} 안에 원하는 아이콘의 이름을 입력하면 됨
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    // 입력을 위한 state
    const [value, setValue] = useState('');

    // 최초 렌더링 후 재사용 가능한 callback
    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue(''); // 삽입 후 value 초기화

        // submit 이벤트는 기본적으로 새로고침을 발생시키킨다
        // 때문에 preventDefault를 통해 기본 동작을 막는다
        e.preventDefault();
    },[onInsert, value]);

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;