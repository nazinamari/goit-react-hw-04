export default function SearchBar (onSubmit) {
    return (
        <header>
            <form>
                <input
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}