const qr_text = document.querySelector(".qr-text");
const size = document.querySelector(".select");
const generatebtn = document.querySelector(".generate-btn");
const downloadbtn = document.querySelector(".download-btn");
const qrcontainer = document.querySelector(".qr_body");

let sizeval = size.value


generatebtn.addEventListener("click" , (e) => {
  e.preventDefault()
  isemptyinput()
  
}
)

size.addEventListener("change" , (e) => {
  sizeval = e.target.value;
  isemptyinput()
  isempy()
}
)

downloadbtn.addEventListener("click" , ()=>{
  let img = document.querySelector(".qr-body img")
  let canvas = document.querySelector("canvas");

  if (img !== null) {
    let imgAttr = img.getAttribute('src');
    downloadbtn.setAttribute("href", imgAttr);
  } else if (canvas !== null) {
    downloadbtn.setAttribute("href", canvas.toDataURL());
  } else {
    alert("No QR code available to download");
  }
})

function isemptyinput(){
  if(qr_text.value.length > 0){
    generateqr()
  }
  else{
    alert("please enter a url or link")
  }
}

function generateqr(){
   qrcontainer.innerHTML = " "
    new QRCode(qrcontainer,{
    text : qr_text.value,
    width :sizeval,
    height : sizeval,
    colorDark : "#000000",
    colorLight : "#ffffff",
  })
}

