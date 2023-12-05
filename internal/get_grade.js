require('dotenv').config();
const puppeteer = require('puppeteer-extra');
const stealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(stealthPlugin());

// Student details
const personalNumber = process.env.PERSONAL_NUMBER;
const pinCode = process.env.PIN_CODE;

/**
 * Function to get the grade for given course code(s) using Puppeteer
 */
async function getGrade(courseCodes) {
    const gradeMap = {};
    try {
        const browser = await puppeteer.launch({ 
            headless: "new",
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--disable-gpu',
            ],
    });
        const page = await browser.newPage();

        await page.goto('https://fsweb.no/studentweb/login.jsf?inst=FSNTNU');
        await page.waitForSelector('#j_idt138\\:j_idt140 > h2:nth-child(2)');

        await page.type('input[id="j_idt138:j_idt140:fodselsnummer"]', personalNumber);
        await page.type('input[id="j_idt138:j_idt140:pincode"]', pinCode);
        await page.click('button[id="j_idt138:j_idt140:login"]');   
        await page.waitForNavigation();

        await page.click('#menuOpener');
        await page.click('#menuBarLeft > ul > li:nth-child(3) > a');

        await page.waitForSelector('#mineResultaterTittel');
        await page.click('#resultatlisteForm\\:j_idt156\\:0');     
        
        await page.waitForNavigation({timeout: 3000}).catch(() => {});

        const parentSelector = '.ui-panel:nth-child(1)';
        const rowsResultatTop = await page.$$(`${parentSelector} .resultatTop`);
        const rowsNone = await page.$$(`${parentSelector} .none`)
        const rows = rowsResultatTop.concat(rowsNone);

        for (const row of rows) {
            const column = await row.$('.col6Resultat');
            const text = await page.evaluate(column => column.textContent, column);
            const match = text.match(/(\S+)\s*\n\s*(\S+)/);
            if (match) {
                const courseCode = match[1];
                const grade = match[2];

                if (courseCodes.includes(courseCode)) {
                    gradeMap[courseCode] = grade;
                }
            }
        }

        await browser.close();
        return gradeMap;
    } catch (e) {
        console.error(`Error occurred during grade count retrieval: ${e.message}`);
        return gradeMap;
    }
}

module.exports =  {getGrade};
