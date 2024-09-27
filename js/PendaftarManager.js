class PendaftarManager {
  static #pendaftarList = [];

  static async addPendaftar(pendaftar) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.#pendaftarList.push(pendaftar);
        localStorage.setItem(
          "pendaftarList",
          JSON.stringify(this.#pendaftarList)
        );
        resolve(this.#pendaftarList);
      }, 1000); // Simulasi async
    });
  }

  static get pendaftarList() {
    const pendaftarList = localStorage.getItem("pendaftarList");
    this.#pendaftarList = pendaftarList ? JSON.parse(pendaftarList) : [];
    return this.#pendaftarList;
  }

  static getResume() {
    const totalUangSangu = this.#pendaftarList.reduce(
      (total, pendaftar) => total + pendaftar.uangSangu,
      0
    );
    const totalUmur = this.#pendaftarList.reduce(
      (total, pendaftar) => total + pendaftar.umur,
      0
    );
    const jumlahPendaftar = this.#pendaftarList.length;

    const rataRataUangSangu =
      jumlahPendaftar > 0 ? (totalUangSangu / jumlahPendaftar).toFixed(2) : 0;
    const rataRataUmur =
      jumlahPendaftar > 0 ? (totalUmur / jumlahPendaftar).toFixed(2) : 0;

    return `Rata-rata pendaftar memiliki uang sangu sebesar ${rataRataUangSangu} dengan rata-rata umur ${rataRataUmur}`;
  }
}
