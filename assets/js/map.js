document.addEventListener("DOMContentLoaded", (enent) => {
  setTimeout(() => {
    document.querySelector("#contact__map-loader").innerHTML = `
    <iframe
                  class="contact__iframe"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  width="480"
                  height="360"
                  style="border: 0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.4237514688493!2d20.458882676141897!3d44.81293117107084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aae6cb66d79%3A0x50ae0fde7f1d36f3!2sTerazije%2027%2C%20Beograd!5e0!3m2!1ses-419!2srs!4v1694947860319!5m2!1ses-419!2srs"
    ></iframe>
    `;
  }, 1500);
});
