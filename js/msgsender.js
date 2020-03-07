$("#buttonSender").on("click", function() {
  if (document.getElementById("msgsearch").value == "" ) {
    document.getElementById("buttonSender").textContent = "❌ User Missing! ❌";
    document.getElementById("buttonSender").style.background = "#b09bc2";
  } else if (document.getElementById("msgXuser").value == "" ) {
    document.getElementById("buttonSender").textContent = "❌ Message Missing! ❌";
    document.getElementById("buttonSender").style.background = "#b09bc2";
  } else {
    document.getElementById("buttonSender").textContent = "Message Sent ✔";
    document.getElementById("buttonSender").style.background = "#633e85";
  };
  setTimeout(() => {
    document.getElementById("buttonSender").textContent = "Send";
  }, 3000);
  setTimeout(() => {
    document.getElementById("buttonSender").style.background = "#3d5b81";
  }, 3000);
});
