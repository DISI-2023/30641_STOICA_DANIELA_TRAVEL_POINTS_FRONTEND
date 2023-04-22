import {useEffect, useState} from "react";
import * as API from "services/api/travelPointsService";
import WishlistView from "./WishlistView";

export function WishlistContainer() {
    const [wishlist, setWishlist] = useState([]);

    const getWishlist = async () => {
        try {
            const userDetails = JSON.parse(localStorage.getItem('userDetails'));
            const response = await API.getLandmarksFromWishlist(userDetails.id)
            setWishlist(response.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWishlist();
    }, [])

    return (
        <div>
            <WishlistView
                landmarks={wishlist}
            />
        </div>
    );
}