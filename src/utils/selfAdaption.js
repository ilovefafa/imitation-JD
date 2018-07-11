export default function () {
  const html = document.getElementsByTagName('html')[0]
  const width = document.documentElement.clientWidth
  html.style.fontSize = 40 * (width / 320) + "px";
  window.onresize = () => {
    const width = document.documentElement.clientWidth
    html.style.fontSize = 40 * (width / 320) + "px";
  }
}

