const animeData = {
  "naruto": {
    title: "Naruto",
    image: "naruto.jpg",
    description: "Naruto, köyünün Hokage’si olmayı hayal eden bir ninjanın hikayesidir. Uzun süren yalnızlığının ardından arkadaşlık ve güç yolculuğuna çıkar. İçinde mühürlenmiş dokuz kuyruklu tilki canavarıyla birlikte, zorluklara karşı mücadele eder."
  },
  "demon-slayer": {
    title: "Demon Slayer",
    image: "demon.jpg",
    description: "Tanjiro Kamado'nun ailesi iblisler tarafından katledilir ve kız kardeşi Nezuko bir iblise dönüşür. Tanjiro, onu iyileştirmek ve iblislerle savaşmak için Demon Slayer Corps'a katılır. Dizi, aksiyon dolu sahneleri ve dokunaklı hikayesiyle dikkat çeker."
  },
  "attack-on-titan": {
    title: "Attack on Titan",
    image: "titan.jpg",
    description: "*Attack on Titan* (Shingeki no Kyojin), devlerin, yani \"Titan\"ların insanları yok ettiği bir dünyada geçen bir hikaye. Eren Yeager adlı genç, ailesini titanın öldürmesiyle intikam almaya yemin eder ve askeri birimlere katılır. Eren ve arkadaşları Mikasa ve Armin, devlere karşı savaşırken, devlerin ve insanlığın gizemli geçmişiyle ilgili büyük sırları keşfederler. Dizi, özgürlük, hayatta kalma, ihanet ve fedakarlık gibi temalar etrafında döner."
  },
  "jujutsu-kaisen": {
    title: "Jujutsu Kaisen",
    image: "justu.jpg",
    description: "*Jujutsu Kaisen*, kötü ruhları ve lanetleri yok etmek için savaşan bir grup insanın hikayesini anlatan bir anime ve manga serisi. Ana karakter Yuji Itadori, normal bir lise öğrencisidir, ama bir gün bir lanetli nesne olan bir parça insan parmağını yutar ve bu sayede dünyadaki en güçlü lanet olan Ryomen Sukuna'nın vücuduna girer."
  },
  "astolfo": {
    title: "Astolfo (Kıyamete Kader)",
    image: "femboy.jpg",
    description: "Astolfo, Fate/Apocrypha serisinde \"Rider\" sınıfında yer alan bir hizmetkâr (Servant)'tır. Gerçek tarihte Charlemagne’ın (Şarlman) 12 şovalyesinden biri olarak bilinir. Seride oldukça neşeli ve ne kadar şanslı olduğu ile tanınır. Astolfo, Femboy olarak tanımlanan bir karakterdir."
  },
  "highschool-dxd": {
    title: "High School DxD",
    image: "dxd.jpg",
    description: "*High School DxD*, doğaüstü olayların ve cinsel içeriklerin bolca yer aldığı bir anime serisidir. Ana karakter Issei Hyoudou, bir gün kötü bir iblis tarafından öldürülür, ancak daha sonra bir iblis olarak yeniden hayata döner ve Rias Gremory'nin hizmetine girer. Zamanla, Issei'nin gücü artar ve daha fazla tehlikeyle karşı karşıya kalır."
  }
};

// Menü açma/kapama
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Anime detaylarını gösterme
function showDetails(anime) {
  const details = animeData[anime];
  if (details) {
    document.getElementById("anime-title").innerText = details.title;
    document.getElementById("anime-image").src = details.image;
    document.getElementById("anime-description").innerText = details.description;
    document.getElementById("anime-details").style.display = "block";

    // Sosyal medya paylaşım linklerini ayarla
    document.getElementById("share-facebook").href = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
    document.getElementById("share-twitter").href = `https://twitter.com/intent/tweet?text=${details.title}&url=${window.location.href}`;
    document.getElementById("share-whatsapp").href = `https://wa.me/?text=${details.title} ${window.location.href}`;
    document.getElementById("share-linkedin").href = `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`;
  }
}

// Detayları kapatma
function closeDetails() {
  document.getElementById("anime-details").style.display = "none";
}

// Animeyi oylama (puana ekleme)
function rateAnime(anime) {
  const rating = prompt("Bu animeye 1-5 arası puan verin:");
  if (rating >= 1 && rating <= 5) {
    alert(`Puanınız: ${rating}`);
  } else {
    alert("Geçerli bir puan girin.");
  }
}
