<template>
  <div>
    <h2>book details</h2> 
    <p>Title: {{book.title}}</p>
    <p>Author: {{book.author}}</p>
    <img :src="book.image_url">
    <button @click="deleteBook">x</button>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  data() {
    return {
      book: {}
    }
  },
  created() {
    api.getBook(this.$route.params.id)
      .then( result => this.book = result)
  },
  methods: {
    deleteBook() {
      api.deleteBook(this.book)
        .then(result => console.log(result))
        .catch(err => console.error(err))
    }
  }
}
</script>

<style scoped>

</style>
