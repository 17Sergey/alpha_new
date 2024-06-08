const rows = document.querySelectorAll(".calculator-row");

const filteredRows = [];

rows.forEach((row) => {
  if (
    row.classList.contains("price__calculator-people-count") ||
    row.classList.contains("price__calculator-summary")
  ) {
    return;
  }

  filteredRows.push(row);
});

filteredRows.forEach((row) => {
  row.addEventListener("click", (e) => {
    if (e.target.parentNode == row) {
      for (child of row.children) {
        child.classList.remove("calculator--selected");
        child.classList.add("calculator--non-selected");
      }
      e.target.classList.add("calculator--selected");
    }
  });
});
