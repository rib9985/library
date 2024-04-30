export default class FormValidate {
  static validateTitle() {
    const title = document.getElementById("title");
    title.addEventListener("input", () => {
      if (!title.validity.valid) {
        title.setCustomValidity("Please input a valid book title");
      }
    });
  }

  static validatePages() {
    const pages = document.getElementById("pages");
    pages.addEventListener("input", () => {
      if (!pages.validity.valid) {
        pages.setCustomValidity("Please input a valid page number");
      }
    });
  }

  static validateAuthor() {
    const author = document.getElementById("author");
    author.addEventListener("input", () => {
      if (!author.validity.valid) {
        author.setCustomValidity("Please input a author name");
      }
    });
  }
}
