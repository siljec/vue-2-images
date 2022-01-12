# images

Followed this course: https://www.udemy.com/course/vue-js-course/

To run it:

1. Create an account on https://imgur.com
2. Set up a developer account https://apidocs.imgur.com, scroll down and click Register your application, and select OAuth 2 authorization with a callback URL, and set the redirect url to the local ip, e.g. `http://192.168.XX.XXX:8080/oauth2/callback`, and get the client id that you need in `src/api/imgur.js`.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
