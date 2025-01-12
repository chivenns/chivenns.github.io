document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
      link.addEventListener("click", async (event) => {
        event.preventDefault(); // Mencegah navigasi default
        const url = link.href;

        try {
          const response = await fetch(url, { method: "HEAD" }); // Memeriksa status halaman
          if (response.ok) {
            window.location.href = url; // Arahkan jika halaman ada
          } else {
            alert("Mohon Maaf, Link ini Belum ditautkan oleh Moderator Website.");
          }
        } catch (error) {
          alert("Terjadi kesalahan saat memeriksa halaman.");
        }
      });
    });
  });