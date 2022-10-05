const { createSlice } = require("@reduxjs/toolkit");

const photo = createSlice({
    name: 'photos',
    initialState:[],
    reducers: {
        addPhoto: (state,actions) =>{
            const newPhoto = actions.payload
            state.push(newPhoto)
        },
        removePhoto: (state,actions) =>{
            return state.filter(item => item.title !== actions.payload)
        },
        editPhoto:(state,actions)=>{
            const editedPhoto = actions.payload
            const photoIndex = state.findIndex(photo => photo.title === editedPhoto.title)
            if(photoIndex >=0){
                state[photoIndex] = editedPhoto
            }
        }
    }
})

const {actions,reducer} = photo

export const {addPhoto,removePhoto,editPhoto} = actions
export default reducer