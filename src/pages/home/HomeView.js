import style from './Home.module.css';
import DeleteButton from "components/buttons/delete";

const HomeView = () => {
    const landmarkId = 3; //delete this in final version

    return (
        <>
            <h1>For now this page is only for component testing</h1>
            <div className={style.delete_button}>
                {/*
                    The width and height of the button can be changed according to
                the preference of the developer who uses the component.
                    The width and height of the button will be set in a class in
                the css module of the parent component (e.g. in these cases we will set
                the height in the delete_button class from 'Home.module.css').
                    The icon (the visible part of the button) will have 70% of the width
                and 70% of the height set in the previously mentioned class
                */}
                <DeleteButton landmarkId={landmarkId}/>
            </div>
        </>
    );
}

export default HomeView
