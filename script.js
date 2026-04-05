const form = document.getElementById("ogrenciForm");
const mesaj = document.getElementById("mesaj");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const adSoyad = document.getElementById("adSoyad").value.trim();
    const ogrNo = document.getElementById("ogrNo").value.trim();
    const bolum = document.getElementById("bolum").value.trim();
    const sinif = document.getElementById("sinif").value;
    const dogumTarihi = document.getElementById("dogumTarihi").value;
    const cinsiyet = document.getElementById("cinsiyet").value;

    if (
        adSoyad === "" ||
        ogrNo === "" ||
        bolum === "" ||
        sinif === "" ||
        dogumTarihi === "" ||
        cinsiyet === ""
    ) {
        mesaj.textContent = "Lütfen tüm alanları eksiksiz doldurunuz.";
        mesaj.style.color = "red";
        return;
    }

    mesaj.textContent = "Öğrenci bilgileri başarıyla kaydedildi.";
    mesaj.style.color = "green";
});

form.addEventListener("reset", function () {
    mesaj.textContent = "";
});