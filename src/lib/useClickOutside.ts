export function useClickOutside(
	element: HTMLElement,
	callbackFunction: () => void,
) {
	function onClick(event: any) {
		if (!element.contains(event.target)) {
			callbackFunction();
		}
	}

	element.ownerDocument.body.addEventListener("click", onClick);

	return {
		update(newCallbackFunction: () => void) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			element.ownerDocument.body.removeEventListener("click", onClick);
		},
	};
}
