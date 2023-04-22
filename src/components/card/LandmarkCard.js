import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {Button, CardActionArea, CardMedia} from "@mui/material";
import style from './LandmarkCard.module.css';
import mock from '../../mock.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const LandmarkCard = ({landmark}) => {
    return (
        <Card sx={{minWidth: 275}} className={style.card}>
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
                <Button className={style.cardButton} variant="contained">View Details</Button>
            </div>
            <div className={style.containerButton}>
                <Button className={style.cardButton} variant="contained">Review</Button>
                <FavoriteBorderIcon style={{position: "absolute", marginLeft: "8rem"}}/>
            </div>
        </Card>
    )
}

export default LandmarkCard;