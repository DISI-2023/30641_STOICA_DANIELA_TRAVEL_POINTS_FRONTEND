import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {Button, CardActionArea, CardMedia} from "@mui/material";
import style from './LandmarkCard.module.css';
import mock from '../../mock.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import React, {useEffect, useState} from 'react';
import * as API from "services/api/travelPointsService";
import LandmarkDetails from "pages/landmark/LandmarkDetails";
import AddOfferModal from "./AddOfferModal"
import {useLocation, useNavigate} from "react-router-dom";
import {OFFER} from "navigation/CONSTANTS";
import AddReview from "components/forms";
import EditLandmarkModal from "components/editLandmarkForm/EditLandmarkModal";
import CalendarModal from './CalendarModal'

const LandmarkCard = ({data, deleteLandmarkButtonHandle}) => {
    const isAdmin = JSON.parse(localStorage.getItem('userDetails'))?.role === "ADMIN";
    const [landmark, setLandmark] = useState(data);
    const [show, setShow] = useState(false);
    const [showOffer, setShowOffer] = useState(false);

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [textDescription, setTextDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0.0);
    const [showEditModal, setShowEditModal] = useState(false);
    const [reviewShow, setReviewShow] = useState(false);
    const [offer, setOffer] = useState();
    const [frequency, setFrequency] = useState([])
    const navigate = useNavigate();
    const path = useLocation();
    const from = path.state?.from?.pathname;
    const [showCalendar, setShowCalendar] = useState(false);

    useEffect(() => {
        getOffer()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => updateOffer(), 5000)
        return () => clearInterval(interval)
    }, [offer])

    const updateOffer = () => {
        if (offer === undefined){
            API.getOffer(landmark.id)
                .then(response => {
                    if (response.data.length) {
                        setOffer(response.data[0])
                    }
                })
        } else {
            const endDate = new Date(offer.end).getTime();
            const currentDate = new Date().getTime()
            if (endDate < currentDate) {
                API.deleteOffer(offer.id)
                setOffer(undefined)
            }
        }
    }

    const getOffer = () => {
        API.getOffer(landmark.id)
            .then(response => {
                if (response.data.length) {
                    setOffer(response.data[0])
                }
            })
    }

    const getYearFrequency = () => {
        API.getYearFrequencyForLandmark("2023", landmark.id)
            .then(response => {
                setFrequency(response.data);
            })
    }

    const onViewDetails = () => {
        setShow(true);
    }
    const onViewStatistics = () => {
        getYearFrequency();
        setShowCalendar(true);
    }

    const onAddFav = async (landmark) => {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (userDetails != null) {

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

    const onAddOffer = () => {
        setShowOffer(true);
        console.log(showOffer)
    }

    const restrictLengthOfDescription = (description) => {
        if (description.length > 85)
            return description.substring(0, 85) + "..."
        return description;
    }

    return (
        <div>
            <Card sx={{width: 325, height: 520}} className={style.card}>
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
                            {restrictLengthOfDescription(landmark.textDescription)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <br/>
                <div className={style.containerButton}>
                    <Button className={style.cardButton} style={{backgroundColor: "black" , marginLeft :isAdmin && "-70px", width: isAdmin && "45%",  fontSize: isAdmin && "12px"}} onClick={onViewDetails} variant="contained">View Details</Button>
                    {
                        isAdmin &&  <Button className={style.cardButton} style={{backgroundColor: "black", width: "45%", marginLeft: "15px", fontSize: "12px" }} variant="contained" onClick={onViewStatistics}>View Statistics</Button>
                    }
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
                            onClick={onAddOffer}
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
                        <Button
                            className={style.cardButton}
                            variant="contained"
                            style={{backgroundColor: "black"}}
                            onClick={() => setReviewShow(true)}
                        >
                            Review
                        </Button>
                        <FavoriteBorderIcon onClick={async () => onAddFav(landmark)} style={{position: "absolute", marginLeft: "8rem"}}/>
                    </div>
                }
            </Card>
            <LandmarkDetails
                show={show}
                onHide={()=> setShow(false)}
                landmark={landmark}
                offer={offer}
            />
            <CalendarModal
                show={showCalendar}
                onHide={()=> setShowCalendar(false)}
                frequency={frequency}
            />
            <AddOfferModal
                showOffer={showOffer}
                onHide={()=>setShowOffer(false)}
                landmark={data}
            />

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
            <AddReview
                reviewShow={reviewShow}
                onHide={() => setReviewShow(false)}
                landmarkId={landmark.id}
            />
        </div>

    )
}

export default LandmarkCard;