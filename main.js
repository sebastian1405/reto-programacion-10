const showData = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const values = Object.fromEntries(data.entries());
  values.complex = data.getAll("complex");
  console.log(values);
};
function main() {
  const form = document.getElementById("preferences");
  form.addEventListener("submit", showData);
}

main();
