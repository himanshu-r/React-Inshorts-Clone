
import './App.css';
import NavInshots from './components/NavInshots';
import {useEffect, useState} from 'react';
import NewsContent from './NewsContent/NewsContent';
import axios from 'axios';
import apikey from "./data/config";
import { Footer } from './components/Footer/Footer';



function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  const newsApi = async() => {
    try{
      const proxyUrl = "cors-anywhere.herokuapp.com/";

      const news = await axios.get(`
      https://${proxyUrl}newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`);

      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);

      // console.log(news.data.articles)
    }catch(err) {
      console.log(err)
    }
  };

  console.log(newsArray)
  
  useEffect(() => {
    newsApi(); 
    //eslint-disable-next-line
  }, [newsResults, category, loadmore])

  return (
    <div className="App">
      <NavInshots setCategory={setCategory} />

      <NewsContent 
      loadmore={loadmore}
      setLoadmore={setLoadmore}
      newsArray={newsArray} 
      newsResults={newsResults} />

      <Footer />
    </div>
  );
}

export default App;
