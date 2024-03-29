interface ClickOutsideProps {
	onClickOutside: () => void;
	anchorEl: HTMLElement;
	open: boolean;
}

export function useClickOutside(
	element: HTMLElement,
	{ onClickOutside, anchorEl, open }: ClickOutsideProps,
) {
	function onClick(event: any) {
		if (
			open &&
			!anchorEl.contains(event.target) &&
			!element.contains(event.target)
		) {
			onClickOutside();
		}
	}

	element.ownerDocument.body.addEventListener("click", onClick);

	return {
		update(props: ClickOutsideProps) {
			onClickOutside = props.onClickOutside;
		},
		destroy() {
			element.ownerDocument.body.removeEventListener("click", onClick);
		},
	};
}
