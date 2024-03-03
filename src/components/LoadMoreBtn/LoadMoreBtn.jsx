// import Button from "@mui/material/Button";


// import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';

export default function LoadMoreBtn ({ onClick, isLoading }) {
    return (
    <button
        onClick={onClick}
        >
        {isLoading ? 'Loading...': 'Load More'}
    </button>
    )
}
