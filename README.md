# TopluyoAPP
Bu kütüphane ile oluşturduğunuz web uygulaması topluyo ile haberleşir.

## TopluyoAPP.on("event",callback)
Genel olarak bilgileri getirmek için bu fonksiyon kullanılır.

## TopluyoAPP.up("event","data")
Topluyo'ya çağrı yapmak için bu fonksiyonlar kullanılır.

### TopluyoAPP.on("*",callback)
Tüm event’leri dinlemek için kullanılır.

```js
TopluyoAPP.on("*",function(event){
  console.log(event)
})
```
