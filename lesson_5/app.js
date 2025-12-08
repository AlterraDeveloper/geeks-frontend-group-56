// ECMA -

// ECMAScript
// JavaScript

// ECMAScript 5 (1995-2015)
// ECMAScript 6+

// let const

// ООП - Объектно-ориентированное программирование

{
  /* <Popup size="small" type="error" position="center"></Popup> */
}

class Helper {
  static getRandomId() {
    return Math.random().toString(36).substring(2, 8);
  }
}

class Popup {
  constructor(size = "medium", type = "info", position = "center") {
    this.size = size;
    this.type = type;
    this.position = position;

    this.id = `popup-${Helper.getRandomId()}`;
  }

  show() {
    const popup = document.createElement("div");
    popup.id = this.id;

    popup.classList.add("popup");
    popup.classList.add(this.size);
    popup.classList.add(this.type);
    popup.classList.add(this.position);

    popup.textContent = this.title;
    document.body.appendChild(popup);
  }

  close() {
    const popup = document.getElementById(this.id);
    popup?.remove();
    // if(popup !== null){
    //     popup.remove();
    // }
  }
}

const popup1 = new Popup("large", "info", "center");
const popup2 = new Popup("medium", "success", "top-right");
const popup3 = new Popup("small", "error", "bottom-right");

popup1.title = "Hello, Group 56!!!";
popup2.title = "Домашнее задание принято!";
popup3.title = "3 балла из 10";

popup1.show();
popup2.show();
popup3.show();
