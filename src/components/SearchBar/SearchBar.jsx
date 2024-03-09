import { useState } from "react";
import css from "./SearchBar.module.css";

export default function SearchBar ({ onSearch }) {

    const [inputValue, setInputValue] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();

        if(inputValue.trim() === '') {
            alert("Please enter search term!")
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
                <button className={css.searchBtn} type="submit">Search</button>
            </form>
        </header>
    )
}