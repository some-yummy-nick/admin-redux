import React from 'react';
import store from './store/';

export default function List() {
	return <div>list{store.getState().item}</div>;
}