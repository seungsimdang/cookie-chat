import { createPicker } from "https://unpkg.com/picmo@latest/dist/index.js";

const colorCardEls = document.querySelectorAll(".card-color div span");
const leftCardEl = document.querySelector(".left-card");
const addImoEl = document.querySelector(".add-imo");

const chatCardTitle = document.querySelector(".chat-card-title");

// 이모티콘 선택장 생성
const imoContainer = document.querySelector(".pickerContainer");
const picker = createPicker({
  rootElement: imoContainer,
});

// 이모티콘 클릭하면 적용 
picker.addEventListener("emoji:select", (selection) => {
  console.log(selection.emoji);
  chatCardTitle.textContent = selection.emoji;
  imoContainer.classList.remove("active");
});

// 이모티콘 선택장 출력
addImoEl.addEventListener("click", () => {
  imoContainer.classList.toggle("active");
});

// 색상 변경 코드
colorCardEls.forEach((colorCardEl) => {
  colorCardEl.addEventListener("click", () => {
    const backgroundColor = getComputedStyle(colorCardEl).backgroundColor;

    leftCardEl.style.backgroundColor = backgroundColor;
  });
});

// 키워드 추가 코드
const cardTagInputEls = document.querySelectorAll(".card-tag input");
const cardTagBox = document.querySelector(".chat-card-tag");

cardTagInputEls.forEach((cardTagInputEl, i) => {
  cardTagInputEl.addEventListener("change", (e) => {
    const tag = document.querySelector(`.tag-${i}`);
    if (tag) {
      tag.textContent = "# " + e.target.value;
    } else {
      const tagInput = document.createElement("span");
      tagInput.classList.add(`tag-${i}`);
      tagInput.textContent = "# " + e.target.value;
      cardTagBox.appendChild(tagInput);
      console.log(1);
    }
  });
});
