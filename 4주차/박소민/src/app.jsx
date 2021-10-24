import { useCallback, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Insert from "./components/insert";
import List from "./components/list";
import Template from "./components/template";

const GlobalStyle = createGlobalStyle`
  body {
    background: grey;
  }
`;

const App = () => {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      text: "dummy 1",
      checked: true,
    },
    {
      id: 2,
      text: "dummy 2",
      checked: true,
    },
    {
      id: 3,
      text: "dummy 3",
      checked: false,
    },
  ]);

  // For key id of new list component
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const toDo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setToDos(toDos.concat(toDo));
      nextId.current += 1;
    },
    [toDos]
  );

  const onRemove = useCallback(
    (id) => {
      setToDos(toDos.filter((toDo) => toDo.id !== id));
    },
    [toDos]
  );

  const onToggle = useCallback((id) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, checked: !toDo.checked } : toDo
      )
    );
  });

  return (
    <>
      <GlobalStyle />
      <Template>
        <Insert onInsert={onInsert} />
        <List toDos={toDos} onRemove={onRemove} onToggle={onToggle} />
      </Template>
    </>
  );
};

export default App;
