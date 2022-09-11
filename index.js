let bt = document.getElementById("add-btn");
let rembt = document.getElementById("rem-btn");
let libox = document.getElementById("list-box");
let updt = document.getElementById("upt-btn");

let dd=document.getElementsByClassName("fa-solid fa-trash-can");
console.log(dd);

bt.onclick = () => {
  let itmdiv = document.createElement("div");
  itmdiv.className = "par-div";
  let newitm = document.createElement("li");
  itmdiv.appendChild(newitm);
  let icon = document.createElement("i");
  icon.id = "icon-" + (libox.childElementCount + 1);
  // icon.className = "fa-solid fa-trash-can";
  newitm.appendChild(icon);

  newitm.id = "list-" + (libox.childElementCount + 1);
  let str = document.getElementById("txtfill").value;
  let txtnd = document.createTextNode(str);
  let nwnd = newitm.appendChild(txtnd);

  if (str != "") {
    libox.appendChild(newitm);
  }
};

rembt.addEventListener("click", () => {
  let frstitm = libox.firstElementChild;

  libox.removeChild(frstitm);

});

updt.addEventListener("click", () => {
  let frstitm = libox.firstElementChild;

  let newitm = document.createElement("li");

  let str = document.getElementById("txtfill").value;
  let txtnd = document.createTextNode(str);
  newitm.appendChild(txtnd);

  libox.replaceChild(newitm, frstitm);
});
