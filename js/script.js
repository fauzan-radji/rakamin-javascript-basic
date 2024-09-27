elements.formRegistrasi.addEventListener("submit", async function (event) {
  event.preventDefault();

  const nama = elements.inputNama.value;
  const umur = parseInt(elements.inputUmur.value);
  const uangSangu = parseInt(elements.inputUangSangu.value);

  if (nama.length < 10) {
    elements.errorMessage.textContent = "Nama harus minimal 10 karakter!";
    return;
  }

  if (umur < 25) {
    elements.errorMessage.textContent = "Umur harus minimal 25 tahun!";
    return;
  }

  if (uangSangu < 100000 || uangSangu > 1000000) {
    elements.errorMessage.textContent =
      "Uang sangu harus antara 100.000 dan 1.000.000!";
    return;
  }

  elements.errorMessage.textContent = "";

  elements.submitButton.classList.add("loading");
  elements.submitButton.disabled = true;

  const pendaftar = new Pendaftar(nama, umur, uangSangu);
  const pendaftarList = await PendaftarManager.addPendaftar(pendaftar);

  elements.submitButton.classList.remove("loading");
  elements.submitButton.disabled = false;

  updateTable(pendaftarList);
  updateResume();
  showToast("Pendaftar berhasil ditambahkan!");

  elements.formRegistrasi.reset();
});

document.addEventListener("DOMContentLoaded", async function () {
  updateTable(PendaftarManager.pendaftarList);
  updateResume();
});
