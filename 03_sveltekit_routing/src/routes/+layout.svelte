<script lang="ts">
	import '@picocss/pico';
	import Theme from '../lib/theme.svelte';
</script>

<main class="container">
	<header>
		<Theme />
		<hgroup>
			<h1>SvelteKit Routes</h1>
		</hgroup>
		<nav>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/posts">Posts</a>
				</li>
			</ul>
		</nav>
	</header>

	<slot />
</main>
