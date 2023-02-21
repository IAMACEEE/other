const items = document.getElementById("items");

if (localStorage.getItem("poo") === "poo") {
  var TNI = parseInt(localStorage.getItem("TNI"));
  var actI = localStorage.getItem("actI");
} else {
  localStorage.setItem("poo","poo")
  var TNI = 5;
  var actI = "item-0";
  localStorage.setItem("actI", actI);
  localStorage.setItem("TNI", TNI);
}
var navIts = [];
function NIP(hmm) {
  navIts = [];
  for (let i = 1; i <= hmm; i++) {
    // navIts.push(document.getElementById("item-" + i));
    navIts.push(i);
  }
}

function act(it) {
  for (let j = 0; j < navIts.length; j++) {
    document
      .getElementById("item-" + navIts[j])
      .classList.remove("item-active");
  }
  it.classList.add("item-active");
  actI = it.id;
  localStorage.setItem("actI", actI);
}

function card(val) {
  return (
    '<div class="item" id="item-' +
    val +
    '" onmousedown="act(this)"><div class="content"></div></div>'
  );
}

function ass(op) {
  if (TNI <= 0) {
    TNI = 0;
  }else if (TNI >= 10) {
    TNI = 10;
  }
  items.innerHTML = "";
  TNI += op;
  NIP(TNI);
  for (let k = 1; k <= TNI; k++) {
    items.innerHTML += card(k);
  }
  // console.log(parseInt(actI.toString().slice(5)))
  if (TNI >= parseInt(actI.toString().slice(5))) {
    act(document.getElementById(actI));
  } else {
    actI = "item-0";
    localStorage.setItem("actI", actI);
  }
  localStorage.setItem("TNI", TNI);
}

ass(0);
NIP(TNI);
