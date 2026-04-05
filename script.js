const form = document.getElementById("ogrenciForm");
const mesaj = document.getElementById("mesaj");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const ad = document.getElementById("adSoyad").value;

    if (ad === "") {
        mesaj.innerText = "Boş bırakma!";
        mesaj.style.color = "red";
    } else {
        mesaj.innerText = "Kaydedildi!";
        mesaj.style.color = "green";
    }
});