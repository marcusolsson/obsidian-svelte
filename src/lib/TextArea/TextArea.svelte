<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let value: string;
	export let rows: number;
	export let width: string = "auto";
	export let placeholder: string = "";

	const dispatch = createEventDispatcher<{ input: string }>();

	$: dispatch("input", value);
</script>

<textarea bind:value {rows} style={`width: ${width}`} {placeholder} />

<style>
	textarea {
		font-family: var(--font-monospace-default);
	}
</style>
