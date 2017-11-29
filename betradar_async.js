const puppeteer = require('puppeteer'),
	betradar = 'http://stats.betradar.com/s4/?clientid=1739&language=en#2_1,3_1,22_1,5_40942,9_headtohead,7_33,178_31';

(async() => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();


	await page.goto(betradar);
	await page.waitFor('.percentagebar');
	const contents = await page.content();

	console.log(contents);

	await browser.close();
})();
