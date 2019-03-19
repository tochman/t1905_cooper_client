module.exports = {
  launch: {
    headless: false,
    slowMo: 250,
    devtools: true,
    timeout: 100000,
    args: [
      '--disable-setuid-sandbox',
      '--no-sandbox',
      '--ignore-certificate-errors',
      "--disable-popup-blocking",
      "--disable-infobars",
      '--disable-web-security'
    ]
  },
  browserContext: 'default',

  server: {
    command: `BROWSER=none npm run start`,
    port: 3001,
    launchTimeout: 4000,
  },
}