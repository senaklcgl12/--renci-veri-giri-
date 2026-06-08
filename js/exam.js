function sonucEkle() {
    let ogrenci = document.getElementById("ogrenciAd").value;
    let matematik = Number(document.getElementById("matematik").value);
    let turkce = Number(document.getElementById("turkce").value);
    let fen = Number(document.getElementById("fen").value);

    let toplam = matematik + turkce + fen;
    let durum = "";
    let tavsiyeler = [];

    if (toplam >= 45) {
        durum = "Başarılı";
    } else if (toplam >= 30) {
        durum = "Orta";
    } else {
        durum = "Geliştirilmeli";
    }

    if (matematik < 15) {
        tavsiyeler.push("Matematik: Her gün soru çözümü yapmalısın.");
    } else {
        tavsiyeler.push("Matematik: Performansın iyi görünüyor.");
    }

    if (turkce < 15) {
        tavsiyeler.push("Türkçe: Paragraf ve okuma çalışmaları yapmalısın.");
    } else {
        tavsiyeler.push("Türkçe: Netlerin başarılı.");
    }

    if (fen < 15) {
        tavsiyeler.push("Fen: Konu tekrarı yapmalısın.");
    } else {
        tavsiyeler.push("Fen: Başarın gayet iyi.");
    }

    document.getElementById("raporTablosu").innerHTML = `
        <tr>
            <td>${ogrenci}</td>
            <td>${matematik}</td>
            <td>${turkce}</td>
            <td>${fen}</td>
            <td>${durum}</td>
        </tr>
    `;

    document.getElementById("tavsiye").value = tavsiyeler.join("\n");
}