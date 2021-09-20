import "./style.scss";

function documentReady() {
  var readyStateCheckInterval = setInterval(function () {
    if (document && document.readyState === "complete") {
      initTime();
      clearInterval(readyStateCheckInterval);
    }
  }, 10);
}

documentReady();

function initTime() {
  setInterval(() => {
    let times = document.querySelectorAll(".time");

    let time = new Intl.DateTimeFormat("id-ID", {
      dateStyle: "long",
      timeStyle: "long",
    })
      .format(new Date())
      .replaceAll(".", ":");

    times.forEach((e) => {
      e.innerHTML = time;
    });
  }, 1000);
}
