const express = require('express');
const http = require('http');
const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

const program = new Command();
program
    .requiredOption('-h, --host <host>', 'адреса сервера')
    .requiredOption('-p, --port <port>', 'порт сервера')
    .requiredOption('-c, --cache <cache>', 'шлях до кеш-директорії');

program.parse(process.argv);
const options = program.opts();

const app = express();
app.use(express.json());

const server = http.createServer(app);

server.listen(options.port, options.host, () => {
    console.log(`Сервер запущено на http://${options.host}:${options.port}`);
});