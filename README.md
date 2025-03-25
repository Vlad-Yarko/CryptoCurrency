# I thought that web-site that presents real-time prices for crypto is good idea
#### To run this repository on your pc, you need to clone it
#### After you need step by step run parts of the application
#### First of all you need to have installed python and node.js on your local machine
#### Eventually go to "Backend" folder by terminal
#### Do this command for installing all dependencies
```
poetry shell
```
```
poetry install
```
For windows you can use this command
```
$env:PYTHONPATH="app"; poetry run uvicorn app.main:asgi_app
```
#### Backend part is finished, so let's roll to frontend
#### Go to Frontend folder
#### Follow this commands step by step
```
npm install
```
```
npm run dev
```
#### So after running last command you will be able to access the site by link that was you given in terminal
# Enjoy!