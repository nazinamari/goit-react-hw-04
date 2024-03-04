import ImageGallery from "../ImageGallery/ImageGallery";
// import { ImageModal } from "../ImageModal/ImageModal";
import SearchBar  from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { fetchData }  from '../services/api.js';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';

export default function App () {

  const [ images, setImages ] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    if(!searchQuery) {
      return;
    }
    const getImages = async() =>{
      try {
            setLoading(true);
            setError(false);
            const data = await fetchData(searchQuery, page);
            setImages((prevImages) => {
              return page === 1 ? data.results  : [...prevImages, ...data.results] 
            });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false)
      }
    }
  getImages()
  }, [ searchQuery, page ]);
  
  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      {loading && <p>Loading data, please wait...</p> }
      {error && (<p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images.length > 0 && <ImageGallery images={images}/>}
      <LoadMoreBtn onClick={handleLoadMore}/>
      {/* <ImageModal/> */}
    </>
  )
}