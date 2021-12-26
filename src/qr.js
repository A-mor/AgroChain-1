const qrCode = new QRCodeStyling({
  width: 150,
  height: 150,
  data: "Please enter the data and then try to scan me.",
  image: "",
  dotsOptions: {
    color: "#000",
    type: "square"
  },
});
const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById('canvas'));