import app from './app';
import fs from 'fs';
import https from 'https';

const PORT = process.env.PORT || 8502;

const sslOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/api-psp-ext.festivalcasino.com/fullchain.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/api-psp-ext.festivalcasino.com/privkey.pem')
}

https.createServer(sslOptions, app).listen(443, () => {
    console.log(`🚀 Server running on https://0.0.0.0:${PORT}`);
});