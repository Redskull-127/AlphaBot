const aspi_mob = "https://picsum.photos/720/1080";
const aspi_des = "https://picsum.photos/1920/720";


function mob(apis = aspi_mob) {
  var a = document.createElement("a");
  a.href = apis;
  a.download = apis;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function web(apis = aspi_des) {
  var a = document.createElement("a");
  a.href = apis;
  a.download = apis;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
