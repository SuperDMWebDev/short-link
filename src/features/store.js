import {configureStore} from '@reduxjs/toolkit'

import userSlice from './users/userSlice'
import linkSlice from './links/linkSlice'

export const store= configureStore({
    reducer:{
        // o day la tai mik gan users: userSlice.reducer
        users:userSlice.reducer,
        links:linkSlice.reducer
    }
})