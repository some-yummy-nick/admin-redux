export default function auth(state = false, action) {
	switch (action.type) {
		case "SET_AUTH":
			return action.auth;
		default:
			return state;
	}
}