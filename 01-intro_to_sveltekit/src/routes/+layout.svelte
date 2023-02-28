<script>
	import '@picocss/pico';
</script>

<header class="container">
	<hgroup>
		<h1>Estif's Example</h1>
		<h2>Creating a Full-stack web app using SvelteKit</h2>
	</hgroup>
	<nav>
		<ul>
			<li>
				<details role="list">
					<summary aria-haspopup="listbox" class="secondary">Pages</summary>
					<ul role="listbox">
						<li>
							<a data-sveltekit-preload-data="tap" href="/">Home Page</a>
						</li>
					</ul>
				</details>
			</li>
		</ul>
	</nav>
</header>
<slot />
