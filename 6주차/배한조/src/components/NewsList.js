// 뉴스 데이터 배열 렌더링
import React from "react";
import styled from 'styled-components';
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

// 스타일 컴포넌트
const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    // usePromise 커스텀 Hook 사용
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c0662f2484fb4c458135523c837f41d5`,
        );
    }, [category]);

    // 대기 중일 때
    if(loading) {
        return <NewsListBlock>대기중...</NewsListBlock>
    }

    // response 값이 설정되지 않았을 때
    if(!response) {
        return null;
    }

    // 에러가 발생
    if(error) {
        return <NewsListBlock>에러가 발생했습니다!</NewsListBlock>
    }

    // response 값이 유효할 때
    const { articles } = response.data;
    return (
        <NewsListBlock>
            {/* map 함수를 통해 item 추가 */}
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;