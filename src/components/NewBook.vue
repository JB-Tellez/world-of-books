<template>
<div>
  <h1>New Book</h1>
  <form @submit.prevent="onSubmit">
    <input v-model="book.title" type="text" placeholder="title">
    <input v-model="book.author" type="text" placeholder="author">
    <input v-model="book.imageUrl" type="text" placeholder="image url">
    <button type="submit">submit</button>
  </form>
</div>

</template>

<script>
import api from '../services/api'

export default {
  
  data() {
    return {
      book : {}
    }
  },
  methods: {
    onSubmit() {
      api.addBook(this.book)
        .then(response => this.$router.push('/'))
    }
  }
}
</script>

<style>

input {
  display: block;
  margin: 0 auto;
}

</style>
