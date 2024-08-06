const fs=require('fs');

const title = process.env.SITE_TITLE || ' Default Site Title';

let html= fs.readFileSync('src/index.html', 'utf-8');


html= html.replace(/<!-- TITLE_PLACEHOLDER --> /g, title);

fs.mkdirSync('build', { recursive:true });
fs.writeFileSync('build/index.html',html);

console.log('Build Complete.');
