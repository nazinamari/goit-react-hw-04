import { ImageGallery } from "../ImageGallery/ImageGallery";
import { ImageModal } from "../ImageModal/ImageModal";
import { SearchBar } from "../SearchBar/SearchBar";
import { useState } from "react";

export default function App () {

  const [ query, setQuery] = useState("");


  const function handleSubmit () {
  
  }


  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageGallery/>
      <ImageModal/>
    </>
  )
}