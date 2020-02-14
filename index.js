(function () {
  // setup app to load game
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(
        function (registration) {
          console.log(
            `ServiceWorker registration successful with scope: ${registration.scope}`
          );
        },
        function (err) {
          console.error(`Service Worker registration failed ${err}`);
        }
      );
    });
  }

  // get the modal
  var modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  let defferedPrompt;
  window.addEventListener("beforeinstallprompt", function (e) {
    console.log("beforeinstallprompt triggered");
    e.preventDefault();
    defferedPrompt = e;
    modal.style.display = "block";
  });
  // When the user clicks anywhere outside of hte modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  function offlinePrompt() {
    defferedPrompt.prompt();
  }
})();
