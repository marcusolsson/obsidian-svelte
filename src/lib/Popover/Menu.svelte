<script lang="ts">
	import Popover from "./Popover.svelte";

	/**
	 * Specifies the element to anchor the menu to.
	 */
	export let anchorEl: HTMLElement;

	/**
	 * Specifies whether the menu is open or not.
	 */
	export let open: boolean;

	/**
	 * Specifies a function to run when the menu closes.
	 */
	export let onClose: () => void;

	/**
	 * Specifices where to place the menu in relation to the anchor element.
	 */
	export let placement:
		| "auto"
		| "auto-start"
		| "auto-end"
		| "top"
		| "bottom"
		| "right"
		| "left"
		| "top-start"
		| "top-end"
		| "bottom-start"
		| "bottom-end"
		| "right-start"
		| "right-end"
		| "left-start"
		| "left-end" = "bottom-start";
</script>

<Popover {anchorEl} {open} {placement} className="menu" {onClose}>
	<slot />
</Popover>
