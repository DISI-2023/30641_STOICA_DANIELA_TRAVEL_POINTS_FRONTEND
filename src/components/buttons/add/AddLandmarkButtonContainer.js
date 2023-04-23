import AddLandmarkButtonView from "./AddLandmarkButtonView";

export function AddLandmarkButtonContainer({onChangeShow, addLandmark, onChangeIsAddedNewLandmark}) {
    return (
        <AddLandmarkButtonView buttonHandle={addLandmark} onChangeIsAddedNewLandmark={onChangeIsAddedNewLandmark} onChangeShow={onChangeShow}/>
    );
}