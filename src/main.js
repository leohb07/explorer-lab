import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")

function setBgColorCC(props) {
  const color = {
    "visa": ["#099920", "#027702"],
    "master": ["#088ff0", "#023d00"]
  }

ccBgColor01.setAttribute('fill', color[props][0])
ccBgColor02.setAttribute('fill', color[props][1])
}

setBgColorCC("visa")
globalThis.setBgColorCC = setBgColorCC