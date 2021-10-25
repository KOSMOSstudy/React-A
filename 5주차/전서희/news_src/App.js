import React from 'react';
import NewsList from './components/NewsList';
const App = () => {
  return <NewsList / > ;
};

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