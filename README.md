#### Create MERN Stack App with TypeScript


##### 1. Initialize the Node.js App with a package.json file

<details>
<summary>Click to view</summary>

###### 1.1 Create App Folder
```
mkdir learning-node-typescript
cd learning-node-typescript
```

###### 1.2 Dependencies

The `-D`, also known as `--dev`, means that both packages should be installed as development dependencies.
```
npm init      

npm i -D typescript ts-node

npm install -D tslint    

npm i -D @types/node      

npm i express 

npm i -D @types/express  

npm i -D nodemon 

npm i cors 
```  

###### 1.3 Configuring TypeScript
```js
{
    "compilerOptions": {
      "module": "commonjs",
      "target": "es6",
      "rootDir": "./",
      "esModuleInterop": true
    }
  }
```

###### 1.4 Updating the `package.json` File
The `start` script that will compile and transpile the TypeScript code, and then runs the resulting .ts
```js
"scripts": {
    "start": "nodemon src/app.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```


##### 2 . Next, Start the server

```
npm run start
```

Alternatively and without `Nodemon`, you could run the server with 
```
npx ts-node app.ts

```

</details>


