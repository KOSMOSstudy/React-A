import React from 'react';
import {
  Route
} from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path = "/:category?"
  component = {
    NewsPage
  }
  />;
};




// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback(category => setCategory(category),[]);
//   return (
//     <>
//     <Categories category={category} onSelect={onSelect}/>
//     <NewsList category={category}/> 
//     </>
//   );
// };

// const App =  () => {
//   const[data, setData] = useState(null);
//   const onClick = async() => {
//     try{
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=c33d47e154f7420dba0b22bc0f01c941'
//       );
//       setData(response.data);
//     }catch(e){
//       console.log(e);
//     }

//   };
//   return(
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
//     </div>
//   );
// };

export default App;