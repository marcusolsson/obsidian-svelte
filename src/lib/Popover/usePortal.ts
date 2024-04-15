import { tick } from "svelte";

export function usePortal(
	el: HTMLElement,
	target: string | HTMLElement | null = "body",
) {
	let targetEl: HTMLElement | null;
	async function update(newTarget: string | HTMLElement | null) {
		target = newTarget;
		if (typeof target === "string") {
			targetEl = document.querySelector(target) as HTMLElement;
			if (targetEl === null) {
				await tick();
				targetEl = document.querySelector(target) as HTMLElement;
			}
			if (targetEl === null) {
				throw new Error(`No element found matching css selector: "${target}"`);
			}
		} else if (target instanceof HTMLElement) {
			targetEl = target;
		} else if (el?.ownerDocument?.defaultView) {
			if ((target as any) instanceof el.ownerDocument.defaultView.HTMLElement) {
				targetEl = target;
			}
		} else {
			throw new TypeError(
				`Unknown portal target type: ${
					target === null ? "null" : typeof target
				}. Allowed types: string (CSS selector) or HTMLElement.`,
			);
		}
		targetEl?.appendChild(el);
		el.hidden = false;
	}
	update(target);
	return {
		update,
		destroy() {
			if (el.parentNode) el.parentNode.removeChild(el);
		},
	};
}
