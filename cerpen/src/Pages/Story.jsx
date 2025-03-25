import React, { useState, useEffect } from "react";
import Cover from "../assets/Cover.jpg";
import { BookOpen, Sun, Moon, Share2, Heart } from "lucide-react";
import image1 from "../assets/Picture1.jpg";
import image2 from "../assets/Picture2.jpg";
import image3 from "../assets/Picture3.jpg";

export default function Story() {
  const [theme, setTheme] = useState("light");
  const [isLiked, setIsLiked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const calculateReadingProgress = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener("scroll", calculateReadingProgress);
    return () => window.removeEventListener("scroll", calculateReadingProgress);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className={`
      ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-teal-300 to-orange-300 text-gray-800"
      }
      transition-colors duration-1000
    `}
    >
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-teal-500 to-orange-500 z-50"
        style={{ width: `${readingProgress}%` }}
      />

      <div
        className={`
        fixed top-0 left-0 right-0 z-40
        ${theme === "dark" ? "bg-gray-800/80" : "bg-white/80"}
        backdrop-blur-md shadow-sm
      `}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <BookOpen className="w-6 h-6" />
            <h1 className="text-xl font-bold italic">My Body My Rules</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={toggleLike}
              className={`
                hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full transition-colors
                ${isLiked ? "text-red-500" : ""}
              `}
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-24 pb-12 px-4">
        <div
          className={`
          w-full md:w-8/12 mx-auto 
          ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}
          rounded-2xl shadow-lg p-8
        `}
        >
          {/* Cover and Title Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src={Cover}
              alt="My Body My Rules"
              className="w-48 rounded-xl shadow-md hover:scale-105 transition-transform"
            />
            <div>
              <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-2 italic text-center">
                My Body My Rules
              </h2>
              <p
                className={`text-center text-sm md:text-base
                ${theme === "dark" ? "text-gray-300" : "text-gray-600"}
              `}
              >
                Sebuah perjalanan pemberdayaan diri
              </p>
            </div>
          </div>

          {/* Story Content */}
          <div
            className={`
            space-y-6 
            ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
            leading-relaxed
          `}
          >
            <div className="text-justify space-y-3">
              <p>
                Di sebuah kota yang ramai dan padat seperti Jakarta, Resi adalah
                seorang remaja perempuan berusia 17 tahun, sering kali merasa
                terpinggirkan dalam kehidupan sosialnya. Berbeda dengan
                teman-temannya yang selalu terlihat percaya diri dan ceria, Resi
                merasa dirinya jauh dari kata sempurna. Setiap kali melihat
                cermin, ia hanya bisa mengutuk dirinya sendiri. Bentuk tubuh
                yang tidak sesuai dengan standar kecantikan yang ia lihat di
                media sosial membuatnya merasa terisolasi. Tubuhnya tidak cukup
                langsing, wajahnya tidak cukup cantik, dan yang lebih parah
                lagi, ia merasa bahwa ia tidak cocok berada di tengah-tengah
                orang-orang yang tampaknya memiliki segala sesuatu yang
                sempurna. Ia menghabiskan banyak waktu untuk membuka Instagram
                dan TikTok, merunduk di hadapan layar ponselnya yang menampilkan
                selebgram dan artis-artis cantik dengan tubuh sempurna. Setiap
                kali melihat foto mereka, Resi merasakan sebuah rasa kekosongan
                yang semakin mengganjal di hatinya. “ Bagaimana mereka bisa
                begitu cantik? Bagaimana mereka bisa begitu percaya diri?
                Mengapa dirinya merasa begitu jelek?” ucap Resi dalam hati.
              </p>
              <p>
                Di sekolah, meskipun teman-temannya baik padanya, Resi tetap
                merasa seperti tidak pernah cukup. Ia merasa tubuhnya selalu
                menjadi bahan perbandingan yang tak adil. Beberapa komentar
                teman-temannya yang mungkin tidak dimaksudkan untuk menyakiti
                malah justru membuat hatinya semakin sakit. Tapi bagi Resi,
                kata-kata itu hanya memperburuk perasaannya. Ia merasa tubuhnya
                terlalu jauh dari standar kecantikan yang ia inginkan. Perasaan
                tidak percaya diri itu semakin dalam, menguasai pikirannya.
              </p>
              <p>
                Puncaknya terjadi ketika ia melihat postingan seorang selebgram
                yang ia ikuti, yang mengklaim bahwa rahasia kecantikannya adalah
                diet dan perawatan tubuh menggunakan produk pemutih. "Aku pasti
                bisa seperti mereka," pikir Resi. “Kalau aku punya tubuh seperti
                itu, pasti semua orang akan memperhatikanku dan aku nggak akan
                merasa terpinggirkan lagi.”
              </p>
              <p>
                Keinginan untuk mengubah dirinya semakin mendalam. Resi mulai
                mengurangi porsi makan, bahkan hampir tidak makan sama sekali.
                Ia pun membeli produk-produk kecantikan yang dijual dengan
                iming-iming hasil instan, berharap bisa mendapatkan kulit putih
                dan tubuh ramping seperti yang sering ia lihat di media sosial.
                Meskipun hatinya sedikit ragu, ia tetap melanjutkan usahanya.
                Setiap hari, ia mengikuti rutinitas diet ketat, tanpa pernah
                mendengarkan tubuhnya yang sudah mulai memberi tanda-tanda
                kekurangan energi. Ia tidak peduli. Ia merasa bahwa jika ia
                tidak melakukannya, ia tidak akan pernah bisa mendapatkan
                kehidupan yang lebih baik. Namun, meskipun ia merasa semakin
                sakit karena diet yang terlalu ketat dan penggunaan produk yang
                tidak sesuai dengan jenis kulitnya, Resi terus melanjutkan.
                Hatinya dipenuhi dengan perasaan rendah diri, takut jika ia
                tidak bisa berubah seperti yang ia inginkan.
              </p>
              <p>
                Setelah dua minggu, hasil yang didapatkan tidak sesuai harapan.
                Tubuhnya menjadi lemas, ia mulai merasa pusing dan mual setiap
                kali bangun tidur, dan wajahnya penuh dengan jerawat dan ruam.
                Semua usaha yang telah ia lakukan malah berujung pada kegagalan.
                Meskipun begitu, ia tetap menutupinya dan berusaha terlihat
                baik-baik saja di depan teman-temannya. Namun, rasa sakit itu
                tak dapat ia sembunyikan. Ia mulai merasa kesulitan bernafas,
                dan setiap kali menatap cermin, ia merasa semakin tidak
                mengenali dirinya. "Kenapa ini terjadi?" ia bertanya-tanya dalam
                hati, sesekali meneteskan air mata. Ia ingin menyerah, ingin
                bersembunyi dari dunia luar, dan melupakan segala hal yang telah
                ia perjuangkan.
              </p>
              <p>
                Kondisi Resi semakin memburuk. Wajahnya penuh jerawat dan
                kulitnya terlihat lebih kusam dari sebelumnya. Tubuhnya menjadi
                sangat lemas, dan ia sering kali merasa mual. Sering kali, ia
                menangis sendirian di kamar, memikirkan bagaimana ia bisa
                berubah menjadi cantik dan langsing, seperti yang ia impikan
                selama ini. Suatu hari, setelah seminggu penuh mengurung diri di
                kamar, ibu Resi yaitu Bu Dewi, mulai merasa khawatir. Ia
                memperhatikan bahwa anak perempuannya tidak lagi ceria seperti
                dulu. Resi sering kali mengunci diri di kamar dan jarang keluar.
                Bahkan saat makan, ia hanya menghabiskan sedikit makanan dan
                menolak untuk berbicara banyak. Bu Dewi tahu ada yang tidak
                beres dengan putrinya. Akhirnya, Bu Dewi meminta bantuan Putri
                yaitu sahabat dekat Resi, untuk mencari tahu apa yang sebenarnya
                terjadi.
              </p>
              <div className="lg:flex justify-center gap-3">
                <img src={image1} alt="" className="w-64" />
                <p>
                  "Putri, ada apa dengan Resi? Aku khawatir. Dia nggak seperti
                  biasanya," tanya Bu Dewi dengan penuh perhatian. Putri yang
                  sangat mengerti perasaan Resi, dengan sabar menceritakan apa
                  yang telah terjadi. Ia mengatakan bahwa Resi merasa tidak
                  percaya diri dengan penampilannya dan berusaha untuk berubah
                  menjadi seperti selebgram yang selalu ia lihat di media
                  sosial. "Dia merasa dirinya jelek, Bu. Dia ingin mendapatkan
                  tubuh langsing dan wajah putih seperti yang dia lihat di
                  Instagram," kata Putri dengan penuh kepedulian. Mendengar
                  penjelasan Putri, Bu Dewi merasa sangat sedih. Ia tahu bahwa
                  putrinya adalah seorang gadis yang cantik, namun perasaan
                  rendah diri itu telah meracuni pikirannya. Bu Dewi merasa
                  bahwa sudah saatnya ia bertindak untuk membantu Resi keluar
                  dari keterpurukannya.
                </p>
              </div>

              <div className="flex flex-col-reverse lg:flex-row justify-center gap-3">
                <p>
                  Bu Dewi mencari Resi yang sedang bersembunyi di kamar. Ia
                  duduk di sampingnya, dengan penuh kasih sayang. "Resi, Ibu
                  tahu kamu merasa sangat tertekan, tapi percayalah, kamu tidak
                  perlu menjadi seperti orang lain. Kamu sudah cantik dengan
                  cara kamu sendiri." Resi, yang sudah hampir tidak bisa menahan
                  air matanya, mulai menangis di pelukan ibunya. "Tapi, Bu, aku
                  nggak seperti mereka. Aku merasa jelek, aku merasa nggak cukup
                  baik." Bu Dewi mengelus kepala Resi dan berkata dengan lembut,
                  "Kecantikan sejati bukanlah soal bentuk tubuh atau kulit yang
                  sempurna, tapi tentang bagaimana kamu menerima dirimu sendiri.
                  Tidak ada yang bisa mengubah siapa kamu kecuali dirimu
                  sendiri. Jangan terjebak dalam standar kecantikan yang
                  ditentukan oleh orang lain."Dengan kata-kata ibunya yang penuh
                  kasih, Resi mulai menyadari kesalahannya. Ia tidak perlu
                  membandingkan dirinya dengan orang lain. Ia mulai mengerti
                  bahwa yang paling penting adalah menjadi diri sendiri,
                  mencintai tubuhnya, dan bersyukur atas apa yang telah
                  diberikan kepadanya.
                </p>
                <img src={image2} alt="" className="w-64" />
              </div>

              <p>
                Setelah percakapan itu, Resi memutuskan untuk berhenti mengejar
                citra tubuh yang tidak realistis. Ia mulai mencari informasi
                yang benar mengenai cara diet sehat dan perawatan kulit yang
                sesuai dengan kondisinya. Ia belajar bahwa untuk merawat tubuh
                dan kulit dengan baik, dibutuhkan waktu dan kesabaran, bukan
                dengan cara instan. Lalu Resi melakukan defisit kalori dan
                intermitten fasting. Cara ia melakukan defisit kalori adalah
                dengan makan secukupnya dan disambi olahraga setiap hari.
                Setelah itu cara ia intermitten fasting dengan cara puasa 16 jam
                setelah makan malam dan 8 jam untuk makan. Biasanya Resi mulai
                makan dari jam 11 siang sampai jam 7 malam setelah itu ia stop
                makan. Dibalik itu juga Resi mengurangi konsumsi gula dan
                tepung. Untuk wajah Resi melakukan basic skincare yaitu sabun
                cuci muka, pelembab, dan sunscreen untuk siang hari, tetapi
                setelah skin bariernya mulai baik Resi menggunakan serum vitamin
                C di pagi hari dan serum yang mengandung alpha arbutin di malam
                hari. Untuk eksfoliasinya agar serum bekerja dengan optimal ia
                menggunakan serum yang mengandung aha bha di malam hari seminggu
                3 kali. Ditambah lagi Resi mengonsumsi minum air putih kurang
                lebih 2 liter perhari dan makanan yang berbentuk sayuran serta
                buah.
              </p>
              <div className="lg:flex justify-center gap-3">
                <img src={image3} alt="" className="w-64" />
                <p>
                  Dari situ pelan-pelan, Resi mulai merasa lebih baik. Tubuhnya
                  tidak menjadi langsing seperti yang ia inginkan, tetapi ia
                  merasa lebih sehat. Kulit wajahnya pun mulai membaik, meskipun
                  tidak mulus sempurna, namun jauh lebih baik daripada
                  sebelumnya. Ia sadar bahwa yang paling penting adalah menjaga
                  kesehatan dan merawat diri dengan cara yang benar, bukan
                  mengejar kecantikan yang sementara. Resi belajar untuk
                  menerima dirinya apa adanya. Ia tidak lagi terobsesi dengan
                  standar kecantikan orang lain. Sebaliknya, ia merasa bangga
                  dengan siapa dirinya, karena kini ia tahu bahwa yang paling
                  penting adalah bisa menerima diri sendiri. Akhirnya Ia
                  bertekad untuk menjadi versi terbaik dari dirinya sendiri,
                  dengan cara yang sehat dan penuh rasa syukur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
