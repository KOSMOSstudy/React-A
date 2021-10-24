import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {

  // 나중에 추가할 일정 항목에 대한 state
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 공부',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 공부',
      checked: true,
    },
    {
      id: 3,
      text: 'Todo List 제작',
      checked: false,
    },
  ]);
  // 고유값으로 사용될 id
  // ref를 통해 화면에 보여줄 필요가 없는 값들을 관리한다
  const nextId = useRef(4);
  
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // concat으로 원본배열은 보존하고 새로운 복사 배열 생성
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 증가
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      // filter를 통해 선택된 값 이외의 배열을 모두 출력
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
          ),
      );
    },
    [todos],
  );

  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    );
};

export default App;
