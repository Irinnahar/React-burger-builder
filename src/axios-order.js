import axios from 'axios';

const OrderInstance = axios.create({
    baseURL: 'https://react-burgerbuilder-b561e.firebaseio.com/'
})

export default OrderInstance;