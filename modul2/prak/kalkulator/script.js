document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("inputBox");
  let buttons = document.querySelectorAll("button");

  let string = "";
  let arr = Array.from(buttons);
  arr.forEach((button) => {
    button.addEventListener("click", (e) => {
      // modulus
      if (e.target.innerHTML == "=") {
        string = eval(string);
        input.value = string;
      } else if (e.target.innerHTML == "C") {
        string = "";
        input.value = string;
      } else if (e.target.innerHTML == "CE") {
        string = string.substring(0, string.length - 1);
        input.value = string;
      } else if (e.target.innerHTML == "^") {
        string += "**";
        input.value = string;
      }
      // eksekusi semua
      else {
        string += e.target.innerHTML;
        input.value = string;
      }
    });
  });
});
