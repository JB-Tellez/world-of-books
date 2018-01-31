<template>
  <div>
    <h2>book details</h2> 
    <p>Title: {{book.title}}</p>
    <p>Author: {{book.author}}</p>
    <img :src="book.image_url">
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
  }
}
</script>

<style>

</style>
