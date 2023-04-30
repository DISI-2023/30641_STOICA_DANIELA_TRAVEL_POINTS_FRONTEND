import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {Button, CardActionArea, CardMedia} from "@mui/material";
import style from './LandmarkCard.module.css';
import mock from '../../mock.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/BorderColor';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import React, {useState} from 'react';
import * as API from "services/api/travelPointsService";
import LandmarkDetails from "pages/landmark/LandmarkDetails";
import EditLandmarkModal from "components/editLandmarkForm/EditLandmarkModal";

const LandmarkCard = ({data, deleteLandmarkButtonHandle}) => {
    const isAdmin = JSON.parse(localStorage.getItem('userDetails'))?.role === "ADMIN";
    const [landmark, setLandmark] = useState(data);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [textDescription, setTextDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0.0);
    const [showEditModal, setShowEditModal] = useState(false);

    const onViewDetails = () => {
        setShow(true);
    }

    const onAddFav = async (landmark) => {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        if(userDetails != null) {

            await API.addToFavourite(landmark.id, userDetails.id);
            window.alert('You added an item to wishlist!')
        }
    }

    const editLandmark = async () => {
        const updatedLandmark = {
            id: landmark.id,
            name: name,
            location: location,
            textDescription: textDescription,
            category: category,
            price: price
        }
        setName('')
        setLocation('')
        setTextDescription('')
        setCategory('')
        setPrice(0.0)
        setLandmark(updatedLandmark)
        return await API.editLandmark(updatedLandmark)
    }

    const openEditModal = () => {
        setName(landmark.name)
        setLocation(landmark.location)
        setTextDescription(landmark.textDescription)
        setCategory(landmark.category)
        setPrice(landmark.price)
        toggleEditModal();
    }

    const toggleEditModal = () => {
        setShowEditModal(prevState => !prevState)
    }

    return (
        <div>
            <Card sx={{width: 325}} className={style.card}>
                <CardActionArea>
                    <CardMedia  // for now the landmark's image is not saved properly.
                        component="img"
                        image={mock}
                        alt="green iguana"
                        className={style.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className={style.title}>
                            {landmark.name}
                            <VolumeUpIcon style={{marginLeft: "10px"}}/>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {landmark.location}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" style={{marginTop: "1rem"}}>
                            {landmark.textDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <br/>
                <div className={style.containerButton}>
                    <Button className={style.cardButton} style={{backgroundColor: "black"}} onClick={onViewDetails} variant="contained">View Details</Button>
                </div>
                {isAdmin ?
                    <div className={style.containerButton}>
                        <Button
                            className={style.smallCardButton}
                            variant="contained"
                            style={{backgroundColor: "green"}}
                            onClick={openEditModal}
                        >
                            Update
                        </Button>
                        <Button
                            className={style.smallCardButton}
                            variant="contained"
                            style={{backgroundColor: "blue"}}
                        >
                            Add Offer
                        </Button>
                        <Button
                            className={style.smallCardButton}
                            variant="contained"
                            style={{backgroundColor: "red"}}
                            onClick={e => deleteLandmarkButtonHandle(e, landmark.id)}
                        >
                            Delete
                        </Button>
                    </div>
                    : <div className={style.containerButton}>
                        <Button className={style.cardButton} variant="contained" style={{backgroundColor: "black"}}>Review</Button>
                        <FavoriteBorderIcon onClick={async () => onAddFav(landmark)} style={{position: "absolute", marginLeft: "8rem"}}/>
                    </div>
                }
            </Card>

            <LandmarkDetails show={show} onHide={()=> setShow(false)} landmark = {landmark}/>
            <EditLandmarkModal
                show={showEditModal}
                onHide={toggleEditModal}
                editLandmark={editLandmark}
                name={name}
                location={location}
                textDescription={textDescription}
                category={category}
                price={price}
                nameInputChangeHandle={setName}
                locationInputChangeHandle={setLocation}
                textDescriptionInputChangeHandle={setTextDescription}
                categoryInputChangeHandle={setCategory}
                priceInputChangeHandle={setPrice}
            />
        </div>

    )
}

export default LandmarkCard;