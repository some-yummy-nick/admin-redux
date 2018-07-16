import store from '../store/';

function setTechnology (text) {
	return {
		type: 'SET_TECHNOLOGY',
		item: text
	}
}

export default  function dispatchBtnAction() {
	const item = "New";
	store.dispatch(setTechnology(item));
}