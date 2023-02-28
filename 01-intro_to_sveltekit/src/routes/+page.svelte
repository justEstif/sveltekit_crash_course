<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main class="container">
	{@html data.post.content}
</main>
