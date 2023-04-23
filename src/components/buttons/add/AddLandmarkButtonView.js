import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import {Button} from "@mui/material";

const AddLandmarkButtonView = ({onChangeShow}) => {
    const handleAddButton = () => {
        onChangeShow((prev) => !prev)
    }

    return (
        <Button style={{width: "12rem", height: "3rem", margin: "1rem 0 0 1rem", backgroundColor: "black"}} variant="contained" endIcon={<AddToPhotosIcon />} onClick={handleAddButton}>
            Add landmark
        </Button>
    );
}

export default AddLandmarkButtonView
