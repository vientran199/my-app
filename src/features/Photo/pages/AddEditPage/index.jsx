import PhotoForm from "features/Photo/components/PhotoForm";
import React from "react"
import Banner from "../../../../components/Banner"
import './styles.scss';
import { useDispatch, useSelector } from "react-redux";
import { addPhoto,editPhoto } from "features/Photo/photoSlice";
import { useNavigate, useParams } from "react-router-dom";


const AddEditPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const photos = useSelector(state => state.photos)
    const {photoId} = useParams()

    const initialValues = photoId ? photos.filter(item => item.title === photoId)[0] : {title: "",categoryId: null, photo: ''}
    console.log(initialValues)
    const handleSubmit = (values) => {
        if(photoId){
            return new Promise((resolve) => {
                setTimeout(() => {
                    const action = editPhoto(values)
                    dispatch(action)
                    navigate('/photos')
                    resolve(true)
                }, 2000)
            })
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                const action = addPhoto(values)
                dispatch(action)
                navigate('/photos')
                resolve(true)
            }, 2000)
        })
    }
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />
            <div className="photo-edit__form">
                <PhotoForm
                    isAddMode={!photoId}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default AddEditPage