
import axios from 'axios'
export default axios.create({
baseURL:'https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=2132a69109104e2d9dc1110e43ad408b/'
})