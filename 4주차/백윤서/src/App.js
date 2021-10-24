import React, { useCallback, useRef, useState, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({ id: i, text: `todo${i}`, checked: false });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로 추가
      // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false }}
      return todos.concat(action.todo);
    case 'REMOVE':
      // { type: 'REMOVE', id: 1 }
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // `useReducer`를 사용할 때는 원래 두 번째 파라미터에 초기 상태를 넣어주어야 한다.
  // 지금은 대신 undefined를 넣고 세 번째 파라미터에 초기 상태를 만들어주는 함수인 createBulkTodos를 넣음
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // const [todos, setTodos] = useState(createBulkTodos);
  // const [todos, setTodos] = useState([
  //   { id: 1, text: '리액트 기초', checked: true },
  //   { id: 2, text: '컴포넌트 스타일링', checked: true },
  //   { id: 3, text: '일정관리앱', checked: false },
  // ]);
  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);
  // const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({ type: 'INSERT', todo });
      // setTodos((todos) => todos.concat(todo));
      // setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [],
    // [todos],
  );

  const onRemove = useCallback((id) => {
    dispatch({ type: 'Remove', id });
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    // setTodos(todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback(
    (id) => {
      dispatch({ type: 'Toggle', id });
      // setTodos((todos) =>
      /////   todos.map((todo) =>
      //     // 참일 때 새로운 객체 생성
      /////     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      //   ),
      // );
    },
    [],
    // [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
