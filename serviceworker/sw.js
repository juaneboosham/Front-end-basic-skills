var CACHE_NAME = 'v2';
var urlsToCache = [
    './',
    './index.html',
    './shop.jpg',
    './main.js',
    './default.png'
];

self.addEventListener('install', function (event) {
//   Perform install steps
    event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
console.log('install了v3')
});


self.addEventListener('activate',function(event){
  var cacheWhiteList = ['v2'];
  event.waitUntil(
    // 清除所有旧缓存
    caches.keys().then(function(keyList){
      return Promise.all(keyList.map(function(key){
        if(cacheWhiteList.indexOf(key) === -1){
          return caches.delete(key)
        }
      }))
    })
  )
  console.log('active执行')
})

var picUrl = 'https://s3plus.meituan.net/v1/mss_e602b0ee72a245fd9997b7276211d882/slt-i/logo/circlelogo.png'
// self.addEventListener('fetch',function(event){
//   console.log(event.request)
//   // caches.match() always resolves
//   // but in case of success response will have value
//   event.respondWith(caches.match(event.request)
//   .then(response => {
//         // response may be used only once
//         // we need to save clone to put one copy in cache
//         // and serve second one
//         let responseClone = response.clone();
//         caches.open(CACHE_NAME)
//         .then(cache =>{
//           cache.put(event.request,responseClone)
//         })
//     return response;
//   })
//   .catch(err=>{
//     console.log(err)
//     return false;
//   })
//   )
// })


// 缓存优先的策略
this.addEventListener('fetch', function(event) {
    console.log('fetch事件v3')
    event.respondWith(
    caches.match(event.request)
    .then(function(response){
      // caches.match() always resolves
      // but in case of success response will have value
      // match成功时response有值
      if(response !== undefined){
        // 如果匹配到，直接返回
        return response
      } else {
        return fetch(event.request).then(function(response){
          // response may be used only once
          // we need to save clone to put one copy in cache
          // and serve second one
          console.log('执行了then')
          let responseClone = response.clone();
          caches.open(CACHE_NAME).then(function(cache){
            cache.put(event.request,responseClone)
          });
          return response;
        }).catch(function(){
          console.log('执行了catch')
          return caches.match('./default')
        })
      }
    }))
  });


// // 网络优先的策略
//   this.addEventListener('fetch', function(event) {
//     console.log('fetch事件')
//     event.respondWith(
//     caches.match(event.request)
//     .then(function(cacheRes){
//         return fetch(event.request).then(function(response){
//           let responseClone = response.clone();
//           caches.open(CACHE_NAME).then(function(cache){
//             cache.put(event.request,responseClone)
//           });
//           return response;
//         }).catch(function(){
//           return cacheRes
//         })
//     }))
//   }
// )