# Passwordless Authentication with **tru.ID** PhoneCheck.

## Requirements

- A mobile phone with a SIM card and mobile data connection
- [Node.js](https://nodejs.org)
- [ngrok](https://ngrok.com/)

## Getting Started

Clone the `starter-files` branch via:

```
git clone -b starter-files --single-branch https://github.com/tru-ID/passwordless-auth-phonecheck
```

If you're only interested in the finished code in `main` then run:

```
git clone -b main https://github.com/tru-ID/passwordless-auth-phonecheck.git
```

Create a [tru.ID Account](https://tru.id)

Install the tru.ID CLI via:

```bash
npm i -g @tru_id/cli
```

Input your **tru.ID** credentials which can be found within the tru.ID [console](https://developer.tru.id/console)

Create a new project with the following command in your Terminal in the project root directory:

```bash
tru projects:create passwordless-auth-phonecheck --project-dir .
```

## Starting Project

To start the server first install dependencies with the following commands in your Terminal:

```bash
cd server
npm install
npm start
```

Ngrok is needed to expose your server to the Internet so that your mobile application can communicate with it. Open a new Terminal and run the following command to start an tunnel on port 4000:

```bash
ngrok http 4000
```

This command will give you a `https` tunnel similar to the example shown below:

```bash
https://0d834043fe8d.ngrok.io -> http://localhost:4000
```

To run the mobile application, first you'll need to open a new Terminal instance and install the mobile dependencies with the following commands:

```bash
cd mobile && npm install
```

If you wish to test the mobile application on Android, run the command below:

```bash
npm run android
```

Or if you wish to test the mobile application on iOS, run the command below:

```bash
npx pod-install
npm run ios
```

## References

- [**tru.ID** docs](https://developer.tru.id/docs)

## Meta

Distributed under the MIT License. See [LICENSE](https://github.com/tru-ID/passwordless-auth-web/blob/main/LICENSE.md)

[**tru.ID**](https://tru.id)
