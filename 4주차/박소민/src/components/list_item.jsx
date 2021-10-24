import React from "react";
import {
  MdRemoveCircleOutline,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  ${(props) =>
    props.checked &&
    css`
      svg {
        color: #22b8cf;
      }
    `}
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
  ${(props) =>
    props.checked &&
    css`
      text-decoration: line-through;
      color: #adb5bd;
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const ListItem = ({ toDo, onRemove, onToggle }) => {
  const { id, text, checked } = toDo;

  return (
    <Wrapper>
      <CheckBox checked={checked} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <Text checked={checked}>{text}</Text>
      </CheckBox>
      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </Wrapper>
  );
};

export default ListItem;
