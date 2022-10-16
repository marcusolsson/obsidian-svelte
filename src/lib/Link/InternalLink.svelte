<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	/**
	 * Specifies the link text.
	 */
	export let linkText: string;

	/**
	 * Specifies the path to the source file.
	 */
	export let sourcePath: string;

	/**
	 * Specifies whether the link is resolved.
	 */
	export let resolved: boolean;

	const dispatch = createEventDispatcher<{
		open: { linkText: string; sourcePath: string; newLeaf: boolean };
	}>();
</script>

<a
	href={linkText}
	data-href={linkText}
	class={`internal-link`}
	class:is-unresolved={!resolved}
	target="_blank"
	rel="noopener"
	on:click={(event) => {
		event.stopPropagation();

		dispatch('open', {
			linkText,
			sourcePath,
			newLeaf: event.ctrlKey || event.metaKey
		});
	}}
>
	<slot />
</a>

<style>
	.is-unresolved {
		opacity: 0.5;
	}
</style>
