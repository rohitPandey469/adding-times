let timeNodes;
window.onload = function () {
  timeNodes = document.querySelectorAll("[data-time]");
  timeNodes = Array.from(timeNodes);
  const seconds = timeNodes
    .map((node) => node.dataset.time)
    .map((timeCode) => {
      const [mins, secs] = timeCode.split(":").map(parseFloat);
      return mins * 60 + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);
  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / (60 * 60));
  secondsLeft = seconds % 3600;

  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = seconds % 60;

  console.log(`${hours}: ${mins}: ${secondsLeft}`);
};
