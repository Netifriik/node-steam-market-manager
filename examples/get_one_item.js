var MarketPriceManager = require('../lib/index.js'); // use require('steam-market-manager') in production
var market = new MarketPriceManager({
	"appID": 730
});

market.getItem({ "name": "StatTrak™ CZ75-Auto | The Fuschia Is Now (Well-Worn)" }, function(err, item) {
	if( err) {
		console.log('Error: ', err);
		return;
	}

	console.log('Item: ', item);
});