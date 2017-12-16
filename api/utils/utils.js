const handleResponse = (err, data, res) => {
	if (err) {
		return res.json({
			status: 'error',
			message: err.message
		});
	}

	res.json({
		status: 'success',
		data: data
	});
};

const Utils = {
	handleResponse: handleResponse
};

module.exports = Utils;