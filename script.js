// ==========================================
// JAVASCRIPT WEBSITE NGAWI
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. EFEK SAAT HALAMAN DIBUKA
    // ==========================================

    document.body.classList.add("js-ready");


    // ==========================================
    // 2. MEMBUAT TOMBOL MODE TERANG / GELAP
    // ==========================================

    const tombolTema = document.createElement("button");

    tombolTema.className = "theme-button";

    tombolTema.textContent = "☀️ Mode Terang";

    document.body.prepend(tombolTema);


    // Cek tema yang tersimpan
    if (localStorage.getItem("tema") === "terang") {

        document.body.classList.add("light-mode");

        tombolTema.textContent = "🌙 Mode Gelap";

    }


    // Ketika tombol diklik
    tombolTema.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");


        const modeTerang =
            document.body.classList.contains("light-mode");


        if (modeTerang) {

            localStorage.setItem("tema", "terang");

            tombolTema.textContent = "🌙 Mode Gelap";

        } else {

            localStorage.setItem("tema", "gelap");

            tombolTema.textContent = "☀️ Mode Terang";

        }

    });


    // ==========================================
    // 3. EFEK KLIK PADA LINK
    // ==========================================

    const semuaLink =
        document.querySelectorAll("ul li a");


    semuaLink.forEach(function (link) {

        link.addEventListener("click", function () {

            link.classList.add("clicked");


            setTimeout(function () {

                link.classList.remove("clicked");

            }, 300);

        });

    });


    // ==========================================
    // 4. INTERAKTIF UNTUK HALAMAN RESEP
    // ==========================================

    const semuaBahan =
        document.querySelectorAll("ol li");


    if (semuaBahan.length > 0) {

        const progress =
            document.createElement("p");


        progress.className =
            "recipe-progress";


        progress.textContent =
            "Bahan selesai: 0/" +
            semuaBahan.length;


        document.querySelector("ol")
            .before(progress);


        semuaBahan.forEach(function (bahan) {

            bahan.addEventListener("click", function () {

                bahan.classList.toggle("checked");


                const selesai =
                    document.querySelectorAll(
                        "ol li.checked"
                    ).length;


                progress.textContent =
                    "Bahan selesai: " +
                    selesai +
                    "/" +
                    semuaBahan.length;


                if (selesai === semuaBahan.length) {

                    progress.textContent =
                        "Semua bahan sudah dicek! 🎉";

                }

            });

        });

    }


    // ==========================================
    // 5. PROGRESS MEMBACA CERITA
    // ==========================================

    const chapter =
        document.querySelectorAll("body > h2");


    const paragraf =
        document.querySelectorAll("body > p");


    if (chapter.length > 0 && paragraf.length > 0) {

        const progressBar =
            document.createElement("div");


        progressBar.className =
            "reading-progress";


        progressBar.innerHTML =
            "<span></span>";


        document.body.prepend(progressBar);


        const bar =
            progressBar.querySelector("span");


        // Ketika halaman di-scroll
        window.addEventListener("scroll", function () {

            const tinggiHalaman =
                document.documentElement.scrollHeight -
                window.innerHeight;


            const posisi =
                window.scrollY;


            let persen = 0;


            if (tinggiHalaman > 0) {

                persen =
                    (posisi / tinggiHalaman) * 100;

            }


            bar.style.width =
                Math.min(100, persen) + "%";

        });


        // ==========================================
        // 6. CHAPTER BISA DIKLIK
        // ==========================================

        chapter.forEach(function (judul, index) {

            if (index < paragraf.length) {

                judul.classList.add(
                    "chapter-link"
                );


                judul.addEventListener(
                    "click",
                    function () {

                        paragraf[index]
                            .scrollIntoView({

                                behavior: "smooth",

                                block: "center"

                            });

                    }
                );

            }

        });

    }

});