<script lang="ts">
	type ButtonVariant = "default" | "destructive" | "primary" | "plain";

	/**
	 * Specifies the variant of the button.
	 */
	export let variant: ButtonVariant = "default";

	/**
	 * Specifies whether the button is disabled.
	 */
	export let disabled: boolean = false;

	/**
	 * Specifies the text to display when hovering the button.
	 */
	export let tooltip: string = "";

	/**
	 * Specifies the reference for the underlying button element.
	 */
	export let ref: HTMLButtonElement | null = null;
</script>

<button
	bind:this={ref}
	class:mod-cta={variant === "primary"}
	class:mod-warning={variant === "destructive"}
	class:mod-plain={variant === "plain"}
	aria-label={tooltip}
	on:click
	{disabled}
	class:disabled
>
	<slot />
</button>

<style>
	button {
		/* Add a gap between text and icons. */
		gap: var(--size-4-1);
	}

	.mod-plain {
		background: none;
		box-shadow: none;
		border: none;

		color: var(--text-muted);
	}

	.mod-plain:hover {
		color: var(--text-normal);
	}

	.disabled {
		opacity: 0.6;
	}
</style>
