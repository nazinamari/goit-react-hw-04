export default function SearchBar ({ onSearch }) {

    function handleSubmit(evt) {
        evt.preventDefault();
        const form = evt.target;
        const query = form.elements.query.value;

        if(form.elements.query.value.trim() === '') {
            alert("Please enter search term!")
            return;
        }

        onSearch(query);
        form.reset();
    }

    // const handleInputChange = event => {
    //     setQuery(event.target.value.toLowerCase());
    // };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    // autocomplete="off"
                    // autofocus
                    // onChange={handleInputChange}
                    name="query" 
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}