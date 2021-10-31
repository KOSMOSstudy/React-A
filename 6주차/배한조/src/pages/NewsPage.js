import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
    // 카테고리가 선택되지 않았으면 all을 기본값으로
    const category = match.params.category || 'all';

    return(
        <>
            <Categories />
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;