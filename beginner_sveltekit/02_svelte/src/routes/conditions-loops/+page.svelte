<script lang="ts">
	interface IProduct {
		name: string;
		quantity: number;
	}

	let products: IProduct[] = [
		{ name: 't-shirt', quantity: 10 },
		{ name: 'mug', quantity: 30 },
		{ name: 'sticker', quantity: 10 },
		{ name: 'sweatshirt', quantity: 12 }
	];

	let newProduct: IProduct = {
		name: '',
		quantity: 0
	};

	function handleAddProduct() {
		for (const product of products) {
			if (product.name === newProduct.name) {
				product.quantity = newProduct.quantity;
				return;
			}
		}
		products = [...products, newProduct];
	}
</script>

{#each products as product, i}
	{#if product.quantity > 10}
		<h1 class="on-sale">current {product.name} quantity: {product.quantity}</h1>
	{:else if product.quantity === 0}
		<h1 class="out-stock">current {product.name} quantity: {product.quantity}</h1>
	{:else}
		<h1 class="in-stock">current {product.name} quantity: {product.quantity}</h1>
	{/if}
	<button on:click={() => (product.quantity = ++product.quantity)}>Increment</button>
{/each}
<form on:submit|preventDefault={handleAddProduct}>
	<input type="text" bind:value={newProduct.name} />
	<input type="number" bind:value={newProduct.quantity} />
	<button type="submit">Add Product</button>
</form>

<style>
	.in-stock {
		background: lightgreen;
		padding: 4px;
	}
	.out-stock {
		background: red;
		padding: 4px;
	}
	.on-sale {
		background: blue;
		padding: 4px;
	}
</style>
