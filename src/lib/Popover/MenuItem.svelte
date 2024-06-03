<script lang="ts">
	import { useIcon } from "../Icon";

	import { createEventDispatcher } from "svelte";

	/**
	 * Specifies the text label.
	 */
	export let label: string;

	let selected: boolean = false;

	/**
	 * Specifies the icon.
	 */
	export let icon: string = "";

	/**
	 * Specifies whether the menu item is checked.
	 */
	export let checked: boolean | undefined = undefined;

	const dispatch = createEventDispatcher<{ check: boolean }>();

	$: dispatch("check", checked);
</script>

<div
	class="menu-item"
	class:selected
	on:mouseenter={() => (selected = true)}
	on:mouseleave={() => (selected = false)}
	on:click={() => {
		if (checked !== undefined) checked = !checked;
	}}
	on:keypress
>
	{#if icon}
		<div class="menu-item-icon" use:useIcon={icon} />
	{/if}
	<div class="menu-item-title">{label}</div>
	{#if checked !== undefined && checked}
		<div class="menu-item-icon mod-checked" use:useIcon={"check"} />
	{/if}
</div>
