class Lottert {
  constructor() {
    this.boostrap();
    document
      .querySelector(".body-title")
      .addEventListener("click", () => this.boostrap());
  }
  boostrap() {
    const codes = this.generateCodes(1, 31, 7);
    this.initStyle();
    this.generateHtml(codes);
  }
  initStyle() {
    const bodyItemsClassName = ".body .body-item";
    const footerItemsClassName = ".footer .body-item";
    const bodyItems = document.querySelectorAll(bodyItemsClassName);
    Array.from(bodyItems).forEach((item) => item.classList.remove("active"));
    const footerItems = document.querySelectorAll(footerItemsClassName);
    Array.from(footerItems).forEach(
      (item, index) => (item.innerHTML = `0${index + 1}`)
    );
  }
  generateCodes(lower, upper, count) {
    const codePool = [];
    for (var i = lower; i <= upper; i++) {
      codePool.push(i);
    }
    const codes = [];
    for (var j = 0; j < count; j++) {
      var index = Math.floor(Math.random() * codePool.length);
      var code = codePool[index];
      codes.push(code);
      codePool.splice(index, 1);
    }
    return codes.sort((a, b) => a - b);
  }
  generateHtml(codes) {
    const footerItems = Array.from(
      document.querySelectorAll(".footer .body-item")
    );
    codes.forEach((code, index) => {
      const find = document.querySelector(`.body-item[data-code="${code}"]`);
      find.classList.add("active");
      footerItems[index].innerHTML = code < 9 ? `0${code}` : code;
    });
  }
}

const lottert = new Lottert();
