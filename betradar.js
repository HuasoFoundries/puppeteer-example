var puppeteer = require('puppeteer'),
	betradar = 'http://stats.betradar.com/s4/?clientid=1739&language=en#2_1,3_1,22_1,5_40942,9_headtohead,7_33,178_31';


puppeteer.launch()
	.then(function (browser) {
		return browser.newPage()
			.then(function (page) {
				return page.goto(betradar)
					.then(function () {
						return page.waitFor('.percentagebar');
					}).then(function () {
						return page.content();
					}).then(function (contents) {
						console.log(contents);
						return;
					});
			}).then(function () {
				return browser.close();
			});
	});
