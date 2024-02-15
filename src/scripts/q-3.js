let wishContainer = document.querySelector(".wish-list");
const addBtn = document.getElementById("add");
const nullDiv = document.querySelector('.null')

checkForEmpty();

addBtn.addEventListener("click", () => {
  if (document.querySelector(".wshInput").value !== "") {
    wishContainer.insertAdjacentHTML(
      "beforeend",
      `
            <div class="wish-item">
                <div class="wish-item-text">
                    ${document.querySelector(".wshInput").value}
                </div>
                <div class="wish-item-action">
                    <button class="del">delete</button>
                </div>
            </div>
        `
    );
    checkForEmpty();
  } else {
    console.log("asd");
    document.querySelector(".wshInput").value = "ало";
  }
  document.querySelector(".wshInput").value = "";
  document.querySelectorAll(".del").forEach((delBtn) => {
    delBtn.addEventListener("click", () => {
      delBtn.closest(".wish-item").remove();
      checkForEmpty();
    });
  });
});

function checkForEmpty() {
    if (wishContainer.childElementCount > 1) {
        nullDiv.classList.add("none");
        console.log('asd')
    }
    else {
        nullDiv.classList.remove("none");

    }
}
