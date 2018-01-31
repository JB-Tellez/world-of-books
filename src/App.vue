<template>
	<div id="app">
		<nav>
			<router-link to="/">List</router-link>
			<router-link to="/new">New Book</router-link>
		</nav>
		<h1>World of Books</h1>
		<img class="logo" src="https://fusioncw.com/wp-content/uploads/2017/01/books.png">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
    name: 'app'
  }
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	a {
		margin: 10px;
	}

	img.logo {
		width: 20%;
		margin-bottom: 50px
	}
</style>