function sonucEkle() {
    const ad = document.getElementById("ogrenciAd").value;
    const matematik = Number(document.getElementById("matematik").value);
    const turkce = Number(document.getElementById("turkce").value);
    const fen = Number(document.getElementById("fen").value);

    if (ad === "" || matematik === 0 || turkce === 0 || fen === 0) {
        alert("Lütfen tüm sınav bilgilerini doldurun.");
        return;
    }

    const ortalama = (matematik + turkce + fen) / 3;

    let durum = "";
    let sinif = "";

    if (ortalama >= 20) {
        durum = "Başarılı";
        sinif = "good";
    } else if (ortalama >= 12) {
        durum = "Geliştirilmeli";
        sinif = "mid";
    } else {
        durum = "Riskli";
        sinif = "bad";
    }

    const tablo = document.getElementById("raporTablosu");

    const yeniSatir = `
    <tr>
      <td>${ad}</td>
      <td>${matematik}</td>
      <td>${turkce}</td>
      <td>${fen}</td>
      <td><span class="badge ${sinif}">${durum}</span></td>
    </tr>
  `;

    tablo.innerHTML += yeniSatir;

    let tavsiye = "";

    if (matematik < 15) {
        tavsiye += "Matematik neti düşük olduğu için problem çözme ve konu tekrarı yapılmalıdır.\n";
    }

    if (turkce < 15) {
        tavsiye += "Türkçe neti için paragraf ve dil bilgisi çalışmaları artırılmalıdır.\n";
    }

    if (fen < 15) {
        tavsiye += "Fen dersi için konu tekrarı ve test çözümü yapılmalıdır.\n";
    }

    if (tavsiye === "") {
        tavsiye = "Öğrencinin genel durumu iyi. Düzenli deneme çözmeye devam etmelidir.";
    }

    document.getElementById("tavsiye").value = tavsiye;
}