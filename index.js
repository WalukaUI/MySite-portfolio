function iframeRef(frameRef) {
  return frameRef.src ? frameRef.src : frameRef.src;
}

let inside = iframeRef(document.getElementById("one"));

function Listener() {
  let links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (x) => {
        document.getElementById("openBrowser").href=""
      document.getElementById("one").src = x.target.name;
      document.getElementById("openBrowser").href = x.target.name;
    });
  }
}

document.addEventListener("DOMContentLoaded", Listener());
