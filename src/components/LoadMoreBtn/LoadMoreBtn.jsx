import Button from "@mui/material/Button";

export default function LoadMoreBtn ({ onClick, isLoading }) {
    return (
    <Button style={{
        display: "block",
        margin: "0 auto", 
        marginBottom: "20px", 
        padding:"12px", 
        color:"white", 
        background:"#4051b5"}}
    onClick={onClick}>
        {isLoading 
        ? 'Loading...' 
        : 'Load More'}
    </Button>
    )
}
