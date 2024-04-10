<script lang="ts">
	import { usePortal } from "./usePortal";

	// DOM Element or CSS Selector
	export let target: HTMLElement | string = "body";
</script>

<div use:usePortal={target} hidden>
	<slot />
</div>
