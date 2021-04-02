// console.warn("SW file from Public.");

let cacheData = "appS1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/static/js/vendors~main.chunk.js",
        "/static/js/main.chunk.js",
        "/index.html",
        "/",
        "/user",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  // code for show notification
  console.warn("url", event.request.url);

  if (!navigator.onLine) {
    if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
      event.waitUntil(
        this.registration.showNotification("Noti", {
          body: "Internet connection not working, some issues are there",
          icon:
            "https://pics.freeicons.io/uploads/icons/png/19108918321553750384-512.png",
        })
      );
    }
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
  //end
});
