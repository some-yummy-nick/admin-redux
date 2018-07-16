import store from '../store/';

function setAuth (boolean) {
	return {
		type: 'SET_AUTH',
		auth: boolean
	}
}

export const dispatchAuthClick=()=> {
	if(store.getState().auth==false){
		store.dispatch(setAuth(true));
	}
	else{
		store.dispatch(setAuth(false));
	}
};