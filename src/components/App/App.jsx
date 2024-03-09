import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar  from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { fetchData }  from '../services/api.js';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal  from "../ImageModal/ImageModal.jsx";

export default function App () {

  const [ images, setImages ] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ page, setPage ] = useState(1);
  const [ isModalOpen, setIsModalOpen] = useState(false);
  const [ selectedImages, setSelectedImages ] = useState({
    src: '',
    description: '',
  });

  useEffect(() => {
    if(!searchQuery) {
      return;
    }
    const getImages = async() =>{
      setLoading(true);

      try {
            const data = await fetchData(searchQuery, page);
            setImages((prevImages) => {
              return [...prevImages, ...data.results] 
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
    if(searchQuery === newQuery) {
      return;
    }
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  }

  const handleModalOpen = ( data ) => {
    setIsModalOpen(true);
    setSelectedImages(data);
  }


  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      {loading && <p>Loading data, please wait...</p> }
      {error && (<p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images.length > 0 && <ImageGallery images={images} onSelect={handleModalOpen}/>}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore}/>}
      {selectedImages && <ImageModal isOpen={isModalOpen} image={selectedImages} onClose={handleClose}/>}
    </>
  )
}