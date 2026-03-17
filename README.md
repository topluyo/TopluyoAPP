# TopluyoAPP
Bu kütüphane ile oluşturduğunuz web uygulaması topluyo ile haberleşir.
# Hızlı Kurulum
```html
<script src="https://topluyo.github.io/TopluyoAPP/TopluyoAPP.js"></script>
```
## TopluyoAPP.on("event",callback)
Genel olarak bilgileri getirmek için bu fonksiyon kullanılır.
## TopluyoAPP.up("event","data")
Topluyo'ya çağrı yapmak için bu fonksiyonlar kullanılır.
### TopluyoAPP.on("*",callback)
Tüm event’leri dinlemek için kullanılır.
```js
TopluyoAPP.on("*",function(event){
  console.log(event.type)
  /*
    ">signal/user" | 
    ">signal/connected" | 
    ">signal/disconnected" | 
    ">signal/kicked" | 
    ">signal/message" | 
    ">signal/room"
  */
  console.log(event.source)
  /*
    BigInt | 0n
  */
  console.log(event.data)
  /*
    any
  */
})
```
### TopluyoAPP.on(">signal/user",callback(data,source))
Bu event ile şuanki kullanıcı hakkında bilgi alınır.
```js
TopluyoAPP.on(">signal/user",function(data,source){
  console.log(data)
  /*
    {
      id: 2022n,
      image: "https://cdn.topluyo.com/user/6849fb6038c9e.webp",
      name: "Hasan Delibaş",
      nick: "hasandelibas",
      userID: "1"
    }
  */

  console.log(source)
  /*
    2022n
  */
})
```

### TopluyoAPP.on(">signal/connected",callback(data,source))
Bu event ile bu kanala yeni katılan kullanıcı hakkında bilgi verir.
```js
TopluyoAPP.on(">signal/connected",function(data,source){
  console.log(data)
  /*
    {
      id: 2022n,
      image: "https://cdn.topluyo.com/user/6849fb6038c9e.webp",
      name: "Hasan Delibaş",
      nick: "hasandelibas",
      userID: "1"
    }
  */

  console.log(source)
  /*
    2022n
  */
})
```
### TopluyoAPP.on(">signal/disconnected",callback(data,source))
Bu event ile bu kanaldan ayrılan kullanıcı hakkında bilgi verir.
```js
TopluyoAPP.on(">signal/disconnected",function(data,source){
  console.log(data)
  /*
    {
      id: 2022n,
      image: "https://cdn.topluyo.com/user/6849fb6038c9e.webp",
      name: "Hasan Delibaş",
      nick: "hasandelibas",
      userID: "1"
    }
  */

  console.log(source)
  /*
    2022n
  */
})
```


### TopluyoAPP.on(">signal/room",callback(data,source))
Bu event odadaki kişiler değiştiğinde, yeni biri katıldığında yada biri ayrıldığında tetiklenir. Mevcut kişilerin bilgisini verir.
```js
TopluyoAPP.on(">signal/room",function(data,source){
  console.log(data)
  /*
    [
      {
        id: 2042n,
        image: "https://cdn.topluyo.com/user/6849fb6038c9e.webp",
        name: "Hasan Delibaş",
        nick: "hasandelibas",
        userID: "1"
      },{
        id: 2045n,
        image: "https://cdn.topluyo.com/user/6869bc6561ca7.gif",
        name: "Eren",
        nick: "kursun2bucuk",
        userID: "17"
      }
    ]
  */

  console.log(source)
  /*
    2022n
  */
})
```
