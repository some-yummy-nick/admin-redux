export default function item(state = "react", action) {
	switch (action.type) {
		case "SET_TECHNOLOGY":
			return action.item;

		default:
			return state;
	}
}
