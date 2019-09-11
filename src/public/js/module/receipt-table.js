"use strict";

const selector = {
  table: "js-receipt-table",
  tableRow: "clickable-row"
};

const onClick = (evt) => {
  const row = evt.currentTarget;
  const href = row.dataset.href;
  window.location.href = href;
};

export default class Table {
  constructor(table) {
    const tableRow = table.getElementsByClassName(selector.tableRow);
    this.init(tableRow);
  }

  init(tableRow) {
    for (let row of tableRow) {
      row.addEventListener("click", onClick);
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const tables = document.getElementsByClassName(selector.table);
  for (let table of tables) {
    new Table(table);
  }
});
