import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer M7GNbp9pw4DndK_llzFMzHFlc-YzED7-ig9WZKsNDJy33xyabo-VnphyhEQFUSwXC72ZrUHln2Ds7rK7dMhFH1dxrwuEeQyCUIdxbcITwSFCbCZtAoIBlaQZ_fpxXXYx'
    }
})