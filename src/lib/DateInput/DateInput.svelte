<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import dayjs from "dayjs";

	/**
	 * Specifies the date value.
	 */
	export let value: Date | null;

	/**
	 * Specifies whether to remove decorations so that it can be embedded in other
	 * components.
	 */
	export let embed: boolean = false;

	const dispatch = createEventDispatcher<{ change: Date | null }>();

	function handleChange(event: Event) {
		if (event.currentTarget instanceof HTMLInputElement) {
			dispatch(
				"change",
				event.currentTarget.value
					? dayjs(event.currentTarget.value).toDate()
					: null,
			);
		}
	}
</script>

<input
	type="date"
	class:embed
	value={value ? dayjs(value).format("YYYY-MM-DD") : null}
	on:change={handleChange}
/>

<style>
	input {
		border-radius: 9999px;
		border: 0;
		background-color: var(--background-modifier-hover);
		font-family: var(--font-default);
		padding: 0.1em 0.6em;
	}

	.embed {
		margin: 0 8px;
	}
</style>
