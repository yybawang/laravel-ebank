import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state: {
		snackBar: {
			show : false,
			message : "",
			timeout : 3000,
			top : true,
			right : true,
			color : '',
			buttonText : 'Close'
		},
	},
	mutations: {
		snackBarShow (state,obj) {
			state.snackBar.show = true;
			state.snackBar.message = obj.message;
			state.snackBar.timeout = obj.timeout;
			state.snackBar.top = obj.top;
			state.snackBar.right = obj.right;
			state.snackBar.color = obj.color;
		},
		snackBarHide (state) {
			state.snackBar.show = false;
			state.snackBar.message = "";
		}
	}
})
