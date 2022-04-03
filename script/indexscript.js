const aspi = "https://picsum.photos/200/300";

// function downloadVID(name = "MyVid", api = aspi) {
//   // https://picsum.photos/200/300
//   const data = api;
//   const blob = new Blob([data], { type: "image/jpeg" });
//   const href = URL.createObjectURL(blob);
//   const a = Object.assign(document.createElement("a"), {
//     href,
//     style: "display:none",
//     download: name,
//   });

//   document.body.appendChild(a);
//   a.click();
//   URL.revokeObjectURL(href);
//   a.remove();
// }
console.log("wo");
function download(source = aspi) {
  const fileName = source.split("/").pop();
  var el = document.createElement("a");
  el.setAttribute("href", source);
  el.setAttribute("download", fileName);
  document.body.appendChild(el);
  const data = source;
  const blob = new Blob([data], { type: "image/jpeg" });
  const hre = URL.createObjectURL(blob);
  const d = Object.assign(document.createElement("a"), {
    hre,
    style: "display:none",
    download: "fileName",
  });
  document.body.appendChild(d);
  d.click();
  URL.revokeObjectURL(hre);
  d.remove();
  el.click();
  el.remove();
}

function co(apis = aspi) {
  var a = document.createElement("a");
  a.href = apis;
  a.download = apis;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
