class Api {
  constructor(options) {
    this.options = options;
  }
  getInfo() {
    return fetch(`${this.options.baseUrl}`, {
      headers: {
        authorization: this.options.headers.authorization
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        document.querySelector('.form__progress').value = result['money1'][0]['sum'];
        document.querySelector('#form__span-progress').textContent = ` ${result['money1'][0]['sum']} `;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  postInfo(info) {
    return fetch(`${this.options.baseUrl}`, {
      method: "POST",
      headers: this.options.headers,
      body: JSON.stringify({"money1": info})
    })
      .then(res => {
        if (res.ok) {
          this.getInfo();
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
     	   console.error(err);
     	});
  }
}

const api = new Api({
  baseUrl: 'https://v2-api.sheety.co/646f322de4a344fdfcdc18515320f404/bestbuddies/money1',
  headers: {
    authorization: progressToken,
    'Content-Type': 'application/json; charset=UTF-8'
  }
});
