import React from "react";
import styled, { css } from "styled-components";

const categoryItems = [
  {
    name: "all",
    text: "All",
  },
  {
    name: "business",
    text: "Business",
  },
  {
    name: "entertainment",
    text: "Entertainment",
  },
  {
    name: "health",
    text: "Health",
  },
  {
    name: "science",
    text: "Science",
  },
  {
    name: "sports",
    text: "Sports",
  },
  {
    name: "tech",
    text: "Technology",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const CategoryItem = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;
const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categoryItems.map((c) => (
        <CategoryItem
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </CategoryItem>
      ))}
    </CategoriesBlock>
  );
};
export default Categories;
