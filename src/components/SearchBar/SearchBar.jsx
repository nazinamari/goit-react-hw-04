import { useState } from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar ({ onSearch }) {

    const notify = () => toast('Please enter search term!');

    const [inputValue, setInputValue] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();

        if(inputValue.trim() === '') {
            notify()
            return;
        }
        onSearch(inputValue);
        setInputValue('')
    }

    const handleChange = (evt) => {
        setInputValue(evt.target.value.toLowerCase());
      };

    return (
        <header className={css.header}>
            <form className={css.form} onSubmit={handleSubmit}>
                <label htmlFor="searchQuery" className={css.label}/>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    onChange={handleChange}
                    value={inputValue}
                    placeholder="Search images and photos"
                />
                <button className={css.searchBtn} type="submit">
                    <AiOutlineSearch size="24px" />
                    Search
                </button>
                <Toaster position="top-right" containerStyle={{margin:"12px"}}/>
            </form>
        </header>
    )
}