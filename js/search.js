const user = document.getElementById("msgsearch");

const newMembers = [
  'Victoria Chambers',
  'Dale Byrd',
  'Dawn Wood',
  'Dan Oliver',
];

user.addEventListener("keyup", () => {
  $("#msgsearch").autocomplete({
    source: newMembers
  });
});
