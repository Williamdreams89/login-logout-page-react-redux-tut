import {createSlice} from "@reduxjs/toolkit" 

export const userSlice = createSlice({
    name : "user",
    initialState: {value:{ name: "William Dreams", age: 23, email: "williamdreams89@outlook.com"}},
    reducers : {
        login : (state, action) =>{
            state.value = action.payload
        }
    }
})

export default userSlice.reducer;
