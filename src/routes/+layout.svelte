<script>
	import Header from '../components/Header.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	// import './styles.css';
</script>

<div class="app">
	<title>MyPrint</title>
	<Navbar>
		<main>
			<slot />
		</main>
	</Navbar>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
	:global(body) {
		color: white;
		min-height: 100vh;
		margin: 0;
		background-attachment: fixed;
		/* background-color: var(--color-bg-1); */
		background-size: 100vw 100vh;
		background: rgb(22, 22, 22);
		color-scheme: dark;
	}




</style>
