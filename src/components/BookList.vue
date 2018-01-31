<template>
	<div class="hello">
		<ul>
			<li v-for="book in books" :key="book.book_id" @click="onBookSelected(book)">
				<p>{{book.title}} by {{book.author}}</p>
				<img :src="book.image_url">
			</li>
		</ul>
	</div>
</template>

<script>
	import api from '../services/api'
	export default {
  name: 'BookList',
  data () {
    return {
      books: []
    }
  },
	methods: {
		onBookSelected(book) {
			this.$router.push('/details/' + book.book_id)
		}
	},
	created() {
		api.getBooks().then( response => this.books = response)
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: block;
		margin: 10px;
	}

	a {
		color: #42b983;
	}
</style>