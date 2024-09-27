function updateTable(pendaftarList) {
  elements.pendaftarTable.innerHTML = "";

  pendaftarList.forEach((pendaftar, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${i + 1}</td>
    <td>${pendaftar.nama}</td>
    <td>${pendaftar.umur}</td>
    <td>${pendaftar.uangSangu}</td>
    `;
    elements.pendaftarTable.appendChild(row);
  });
}

function updateResume() {
  elements.resumeText.textContent = PendaftarManager.getResume();
}

function openTab(event, tabName) {
  elements.tabContents.forEach((tab) => {
    tab.classList.remove("active");
  });

  elements.tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  elements.tabs[tabName].classList.add("active");
  event.currentTarget.classList.add("active");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.className = "show";

  setTimeout(() => {
    elements.toast.className = elements.toast.className.replace("show", "hide");
  }, 3000);
}
