import { Api } from "./Api.js";
import { Ui } from "./Ui.js";

const form = document.getElementById("form");
const year = document.getElementById("year");

const container = document.getElementById("container");
const api = new Api();
const ui = new Ui();

document.addEventListener("DOMContentLoaded", async () => {
  const data = await api.Query();
  ui.Template(data, container);
});
const año = new Date().getFullYear();
year.innerText = año;
const dateInput = document.getElementById("fecha");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = await api.Search(dateInput.value);
  ui.Template(query, container);
  form.reset();
});
