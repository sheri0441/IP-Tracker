# IP Address Tracker

This site take the IP Address and provide you with detail like Location, Timezone, ISP(internet service provider).

## Screenshot

![App Screenshot](design/desktop-design.jpg)

## API Reference

API used in this project is from [APILayer](https://apilayer.com/). This API is free to use.

#### Get all items

```http
  GET /api/items
```

| Parameter    | Type     | Description                |
| :----------- | :------- | :------------------------- |
| `api_key`    | `string` | **Required**. Your API key |
| `IP Address` | `string` | **Required**.              |

#### GET /{ip}

var `myHeaders` = `new Headers()`;
`myHeaders.append("apikey", "Your key come here.");`

`var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};`

`fetch("https://api.apilayer.com/ip_to_location/{ip}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`

## Installation

Install my-project with npm

```sh
  git clone https://github.com/sheri0441/IP-Tracker.git
  cd IP-Tracker
```

Go to src/app.js.

At line 15 add your API Key.

Then run in terminal

```sh
  npm start
```
