import axios from 'axios'
const URL = 'https://jonny-booklist.herokuapp.com/api/v1'

export default {
  
  getBooks() {
    return axios.get(`${URL}/books`)
      .then(response => response.data)
  },
  getBook(id) {
    return axios.get(`${URL}/books/${id}`).then(response => response.data[0])
  },
  addBook(book) {
    return axios.post(`${URL}/books`, book)
  },
  deleteBook(book) {
    return axios.delete(`${URL}/books/${book.book_id}`)
  }
}