<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import dayjs, { Dayjs } from "dayjs";

	/**
	 * Specifies the date value.
	 */
	export let value: Dayjs | null;

	/**
	 * Specifies whether to remove decorations so that it can be embedded in other
	 * components.
	 */
	export let embed: boolean = false;

	const dispatch = createEventDispatcher<{ change: Dayjs }>();

	$: if (value) {
		dispatch("change", value);
	}

	function handleChange(event: Event) {
		if (event.currentTarget instanceof HTMLInputElement) {
			value = dayjs(event.currentTarget.value);
		}
	}
</script>

<input
	type="date"
	class:embed
	value={value ? value.format("YYYY-MM-DD") : null}
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
