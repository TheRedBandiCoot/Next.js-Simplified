import puppeteer from 'puppeteer';
import fs from 'fs';
import { config } from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

config();

async function runPuppeteer() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.setViewport({ width: 50, height: 50 });
    await page.goto('https://courses.webdevsimplified.com/');
    //@ Screenshot
    // await page.screenshot({ path: 'example.png', fullPage: true });
    //@ PDF
    console.log('Processing...');
    // await page.pdf({ path: 'example.pdf', format: 'A4', timeout: 60000 });
    //@ html
    // const html = await page.content();
    //@ Write Html
    // writeFile('index.html', html);
    //   const ele = await page.evaluate()
    //@ title
    // const title = await page.evaluate(() => document.title);
    // console.log(title);
    //@ body
    // const body = await page.evaluate(() => document.body.innerText);
    // console.log(body);
    //@ Links
    // const links = await page.evaluate(() =>
    //   Array.from(document.querySelectorAll('a'), e => e.href)
    // );
    // console.log(links);
    //@ data Scrape, create obj, place data in ob, write data in file
    // const courses = await page.evaluate(() =>
    //   Array.from(document.querySelectorAll('.sc-cSxRuM'), e => {
    //     const image = e.querySelector('.sc-iVheDh .sc-jdHILj')?.src;
    //     const title = e.querySelector('.giUbTB .sc-gLLuof')?.innerText;
    //     const price =
    //       e.querySelector('.giUbTB .sc-ktwOfi')?.innerText || 'NOT Given';
    //     const description = e.querySelector('.giUbTB .sc-kFCroH')?.innerText;
    //     if (!image || !title || !price || !description) return;
    //     return { image, title, price, description };
    //   }).filter(items => items)
    // );
    // console.log(courses);
    // writeFile('course.json', JSON.stringify(courses, null, 2));
    //@ $$Eval
    // const course = await page.$$eval('.sc-cSxRuM', elements =>
    //   elements
    //     .map(e => {
    //       const image = e.querySelector('.sc-iVheDh .sc-jdHILj')?.src;
    //       const title = e.querySelector('.giUbTB .sc-gLLuof')?.innerText;
    //       const price =
    //         e.querySelector('.giUbTB .sc-ktwOfi')?.innerText || 'NOT Given';
    //       const description = e.querySelector('.giUbTB .sc-kFCroH')?.innerText;
    //       if (!image || !title || !price || !description) return;
    //       return { image, title, price, description };
    //     })
    //     .filter(i => i)
    // );

    // console.log(course);

    const body = await page.evaluate(() => document.body.innerHTML);
    await runGemini(body);

    await browser.close();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
// runPuppeteer();

function writeFile(filename, contents) {
  fs.writeFile(filename, contents, err => {
    if (err) throw err;
    console.log('Done writing file ' + filename);
  });
}

// Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function runGemini(data) {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash-latest'
    });
    const prompt = `
            Here is the HTML 
            "${data}"  
            Now generate a json code from this html data I provide and give all courses Title(name), Description,
            Price(If price not available still add that data and just say "Not Available") and image link in json code format.
   `;

    const result = await model.generateContentStream(prompt);
    let text = '';
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log(chunkText);
      text += chunkText;
    }
    writeFile('courses.json', JSON.stringify(text, null, 2));
    console.log('Done, Here Is your AI Result');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//$ For Join separate lines into one line
//@ cmd + shift + p => "Join Lines" -
const text = `
\`\`\`
json
[
  {
    "Title": "TypeScript Simplified",
    "Description": "Instantly increase your earning potential and learn to build scalable projects in just 5 hours",
    "Price": "$60",
    "Image": "https://d31ezp3r8jwmks.cloudfront.net/crbx3rznhvpyuroiflicfzejn060"
  },
  {
    "Title": "Learn CSS Today",
    "Description": "Learn modern CSS features and advanced CSS concepts in less than a day with this highly focused project-based CSS course",
    "Price": "$60",
    "Image": "https://d31ezp3r8jwmks.cloudfront.net/6vxs0mxw4dbu8es4fofpnt1yqj4y"
  },
  {"Title": "React Hooks Simplified",
  "Description": "This course covers every single React hook you need to know in order to create any application. This course also covers 30 unique custom hooks to give you inspiration and ideas on how you can create and use React hooks in your application.",
  "Price": "Free",
  "Image": "https://d31ezp3r8jwmks.cloudfront.net/c6xfjxncxdxcbf8c92mtvmiie1ci"
  }
]
\`\`\`
`;

const dataStr = text.trim().slice(8, -3).replace(/\n/g, '');
//@ console.log(dataStr);
const jsonData = JSON.parse(dataStr);
const jsonStrData = JSON.stringify(jsonData, null, 4);

//@ console.log(text.trim().slice(8, -3));
//@ console.log(jsonStrData);
//$ writeFile('some.json', jsonStrData);
