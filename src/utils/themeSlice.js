import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name:"theme",
    initialState : {
        theme: document.documentElement.getAttribute("data-theme") === "dark",
    },
    reducers:{
        addToggleFeature: (state) => {
            state.theme = !state.theme
        }

    }

})

export const {addToggleFeature} = themeSlice.actions;

export default themeSlice.reducer;