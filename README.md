<div align="center">
  <img src="https://raw.githubusercontent.com/gabrielsanttana/ecoleta/ba0115fbfd3504f23b9cd7231cd3666c991422f2/frontend/src/assets/logo.svg" width="170" heigth="170" />
</div>  

#####

<p align="center">An application that helps people identify recycling collection points ♻️</p>

## 🛠️ Technologies

<ul>
  <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://expressjs.com/">Express</a></li>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
  <li><a href="https://www.sqlite.org/index.html">SQLite</a></li>
  <li><a href="http://knexjs.org/">Knex.js</a></li>
  <li><a href="https://socket.io/">Socket.io</a></li>
</ul>

## ⚙️ Requirements

<ul>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://www.npmjs.com/">NPM</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
  <li><a href="https://expo.io/">Expo CLI</a></li>
</ul>

## 🚀 Installation

```
$ git clone https://github.com/gabrielsanttana/ecoleta
```

### 🗄️ API
```bash
$ cd ecoleta/backend
$ npm install
$ npm run migrate
$ npm run seed
$ npm run dev
```

The API will start serving on http://localhost:3333

### 💻 Web

```bash
$ cd ecoleta/frontend
$ npm install
$ npm start 
```

The application will pop-up in the browser on http://localhost:3000

### 📱 Mobile

To run the mobile application, it's necessary to have an React Native Expo environment setup and the Expo mobile app installed on your smartphone.
It's also necessary that both the smartphone and the computer are connected to the same network.

With that:

```bash
$ npm install -g expo-cli
$ cd be-the-hero/mobile
$ npm install
$ npm start
```

<p>A new window with application log will open in the browser</p>
<p>Then, you can load the app by scanning the QR code with the Expo mobile app or by using the local URL</p>

## ⚖️ License

[MIT License](https://github.com/gabrielsanttana/ecoleta/blob/master/LICENSE)

