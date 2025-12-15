// class Helper {
//   static getRandomId() {
//     return Math.random().toString(36).substring(2, 8);
//   }
// }

function getRandomId() {
  return Math.random().toString(36).substring(2, 8);
}

class Popup {
  constructor(options = {}) {
    this.size = options.size ?? "medium";
    this.title = options.title ?? "Вам новое уведомление!";
    this.text = options.text ?? "";
    this.type = options.type ?? "info";
    this.position = options.position ?? "center";
    this.timer = options.timer ?? null;

    this.id = `popup-${getRandomId()}`;
  }

  show() {
    const popup = document.createElement("div");
    popup.id = this.id;

    popup.classList.add("popup");
    popup.classList.add(this.size);
    popup.classList.add(this.type);
    popup.classList.add(this.position);

    // const popupTitle = document.createElement("span");
    // popupTitle.classList.add("popup-title");
    // popupTitle.textContent = this.title;

    // const popupText = document.createElement("span");
    // popupText.classList.add("popup-text");
    // popupText.textContent = this.text;

    // popup.append(popupTitle, popupText);

    popup.innerHTML = `
        <span class="popup-title">${this.title}</span>
        <span class="popup-text">${this.text}</span>
    `;

    document.body.appendChild(popup);

    if (this.timer !== null) {
      const self = this;

      setTimeout(function () {
        self.close();
      }, this.timer * 1000);
    }
  }

  close() {
    const popup = document.getElementById(this.id);
    popup?.classList?.add("hide");
    setTimeout(function () {
      popup?.remove();
    }, 3000);
  }
}

const deadlinePopup = new Popup({
  text: "До конца курса осталось 2 урока!",
  type: "success",
  position: "top-right",
  size: "large",
  timer: 3,
    // title: "Оооо нееееттт!!!"
});

deadlinePopup.show();
