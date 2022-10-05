import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images'
import React from 'react';
import { Container } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';

const MainPage = () => {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)
    const navigate = useNavigate()
    const onPhotoEditClick = (photo)=>{
        navigate(`/photos/${photo.title}`)
    }
    const onPhotoRemoveClick =(photo)=>{
        const action = removePhoto(photo.title)
        dispatch(action)
    }
    return (<div className="photo-main">
        <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
        <Container className='text-center'>
            <Link to='/photos/add'>Add new photo</Link>
            <PhotoList photoList={photos} onPhotoEditClick={onPhotoEditClick} onPhotoRemoveClick={onPhotoRemoveClick}/>
        </Container>
    </div>
    )
}
export default MainPage