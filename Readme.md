# Fake-Chat
A fake chat UI without any serverside implementation. Only the dev server uses express server side and you can also use the server.js for production webserver to serve the static build files

# Demo
http://chat.kenichishibata.net/

# Installation
```
npm install 
npm run start:prod
```

> npm start is for dev server
> use at least node 6.x.x

# Code Design

### Pros
- [x] Composable Design using React JSX
- [x] Fast Protyping Using Materialize Library
- [x] Predictable state (React one way data binding)
- [x] webpack (configurable builds)
- [x] inline css (faster css loading compared to single large file loading)

### Con
- [ ] Relative Slow performance (Have to load the entire Jquery library and Materialize UI CSS JS )

# UI Design

### Pros
- [x] Familiar Design (Material UI is familiar for all android users)
- [x] Obvious clickables (Since the buttons are familiar)
- [x] New Features will be easy to see

### Cons
- [ ] Inflexible and may need more customization for branding


### Todo
If given more time, I would add

1. autoscrolling to bottom
1. real server communication
1. functional channels
1. edit name and avatar
1. register and login


### tested
1. MacOS 10.11.6 (Chrome, Firefox, Safari)
1. Iphone5 (Safari, Opera)
