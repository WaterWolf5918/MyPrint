<script>
	import Navbar from '../components/navbar-Master.svelte';
	// import './styles.css';
</script>

<div class="app">
	<title>MyPrint</title>
	<Navbar>
		<slot></slot>
	</Navbar>

</div>


<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
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
		font-family: Arial, Helvetica, sans-serif;
	}
	


</style>
