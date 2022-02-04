'use strict';

const e = React.createElement;

const App = () => {

	const [text, setText] = React.useState("React button from CDN")

	return e(
		'button',
		{onClick: () => setText('Clicked')},
		text
	);
}

ReactDOM.render(e(App), document.querySelector('#app'));