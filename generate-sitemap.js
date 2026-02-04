const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

async function generate() {
  const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  ];

  const stream = new SitemapStream({
    hostname: 'https://aitutorlabs.co.in'
  });

  links.forEach(link => stream.write(link));
  stream.end();

  const sitemap = await streamToPromise(stream);
  fs.writeFileSync('./public/sitemap.xml', sitemap.toString());

  console.log('✅ Sitemap created at public/sitemap.xml');
}

generate();
