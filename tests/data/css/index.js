module.exports = function(A) {
	A.add({
		body: {
			'margin-top': '20px',
			'padding': 0,
			'font-weight': 'bold',
			section: {
				'padding-top': '42px'
			},
			p: {
				'line-height': '32px'
			}
		}
	});
	A.add({
		'header .logo a': {
			'font-size': '23px',
			'padding-top': '13.22px',
			span: {
				'font-weight': 'bold'
			}
		}
	});
	// A.import(__dirname + "/config/jjj.js");
}