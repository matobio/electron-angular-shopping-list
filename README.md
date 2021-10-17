# electron-angular-shopping-list

Angular application with electron

# Description

This is an Angular project about a shopping list application. This proyect uses [Electron framework](https://www.electronjs.org/) to deploy as a Windows Desktop App.

# Requirements

- [Node](https://nodejs.org/es/download/)
- [Firebase Database](https://firebase.google.com/?hl=es)

# Install

1. Clone and install

```
> git clone https://github.com/matobio/electron-angular-shopping-list.git
> npm install
```

2. Create and configure your Firebase Database.
3. Replace the file 'src\app\config\credentials.example.ts' by 'src\app\config\credentials.ts'. You must configure your firebase database api endpoint and your api key.

4. Launch the project

```
> npm run start:electron
```

# Deploy

1. Build the project

```
> npm run electron-build
```

2. Package with [Electron Forge](https://www.electronjs.org/es/docs/latest/tutorial/quick-start#package-and-distribute-your-application)

```
> npm run make
```
