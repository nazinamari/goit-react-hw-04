import ImageGallery from "../ImageGallery/ImageGallery";
// import { ImageModal } from "../ImageModal/ImageModal";
import SearchBar  from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { fetchData }  from '../services/api.js';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';

export default function App () {

  const [ images, setImages ] = useState([]);
  const [ query, setQuery ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    
    const getImages = async() =>{
      try {
            setLoading(true);
            setError(false);
            const data = await fetchData(page, query);
            setImages((prewImages) => {
              return page === 1 ? data : [...prewImages, ...data] 
            });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false)
      }
    }
  getImages()
  }, [ page, query ]);
  
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    // setImages([]);
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