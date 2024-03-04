import { useState } from "react";

export default function SearchBar ({ onSearch }) {

    const [inputValue, setInputValue] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();
        // const form = evt.target;
        // const query = form.elements.query.value;

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
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    onChange={handleChange}
                    value={inputValue}
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}