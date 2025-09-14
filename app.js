document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("spa-content");
  const buttons = document.querySelectorAll(".tabs button");

  const verTodosBtn = document.querySelector(".btn-ir");
  if (verTodosBtn) {
    verTodosBtn.addEventListener("click", () => {
      window.location.href = "https://www.unicatolica.edu.co";
    });
  }

  const sections = {
    muro: `
      <h3>Muro</h3>
      <div class="new-post">
        <textarea placeholder="Escribe algo..."></textarea>
        <button class="btn-compartir">Compartir</button>
      </div>
      
      <div class="post">
        <h4>Invitación a seminario de IA</h4>
        <p>Te invito a particiar en el seminario de IA que se realizará en la universidad Unicátolica, el día 14/09/2025 a las 4:00pm. No faltes!!!.</p>
        <div class="time">Posteado el Lunes a las 8:45pm</div>
        <div class="actions">
          <button>👍 Me gusta</button>
          <button>💬 Comentar</button>
        </div>
      </div>

      <div class="post">
        <h4>Pelicula Kimetsu no Yaiba</h4>
        <p>Te invito a ver la película Kimetsu no Yaiba, que se estrenará el 14/09/2025 quienes van a ir??.</p>
        <div class="time">Posteado el Domingo a las 7:02am</div>
        <div class="actions">
          <button>👍 Me gusta</button>
          <button>💬 Comentar</button>
        </div>
      </div>

      <div class="post">
        <h4>Estudia programación</h4>
        <p>Te invito a unirte a mi grupo de estudio de programación. Estamos aprendiendo JavaScript y sería genial contar contigo.</p>
        <div class="time">Posteado hoy a las 10:00am</div>
        <div class="actions">
          <button>👍 Me gusta</button>
          <button>💬 Comentar</button>
        </div>
      </div>
    `,
    info: `
      <h3>Información</h3>
      <ul class="info-list">
        <li><strong>Email:</strong> andres.diaz02@unicatolica.edu.co</li>
        <li><strong>Teléfono:</strong> 311 111 0011</li>
        <li><strong>Intereses:</strong> Programación web, Diseño UX/UI</li>
        <li><strong>Situación sentimental:</strong> Unión Libre</li>
      </ul>
    `,
    photos: `
      <h3>Photos</h3>
      <div class="photos-grid">
        <img src="assets/images/Photo.jpeg" alt="Foto 1">
        <img src="assets/images/Photo-1.jpeg" alt="Foto 2">
        <img src="assets/images/Photo-2.jpeg" alt="Foto 3">
        <img src="assets/images/Photo-3.jpeg" alt="Foto 4">
        <img src="assets/images/Photo-4.jpeg" alt="Foto 5">
    `,
    boxes: `
      <div class="post">
    <h3>Series favoritas</h3>
    <ul class="info-list">
        <li>Breaking Bad</li>
        <li>Stranger Things</li>
        <li>Dark</li>
    </ul>
    </div>

    <div class="post">
        <h3>Películas favoritas</h3>
        <ul class="info-list">
            <li>Inception</li>
            <li>Interstellar</li>
            <li>El Padrino</li>
        </ul>
    </div>

    <div class="post">
        <h3>Enlaces</h3>
        <ul class="info-list">
            <li><a href="#">Mi Blog</a></li>
        </ul>
    </div>
    `,
      amigos: `
    <h2>Amigos</h2>
    <div class="friends-list">
      <div class="friend">
        <img src="https://i.pravatar.cc/100?img=1" alt="Amigo 1">
        <p>Amigo 1</p>
      </div>
      <div class="friend">
        <img src="https://i.pravatar.cc/100?img=2" alt="Amigo 2">
        <p>Amigo 2</p>
      </div>
      <div class="friend">
        <img src="https://i.pravatar.cc/100?img=3" alt="Amigo 3">
        <p>Amigo 3</p>
      </div>
      <div class="friend">
        <img src="https://i.pravatar.cc/100?img=4" alt="Amigo 4">
        <p>Amigo 4</p>
      </div>
    </div>
    `,
  };


  // Inicializa en Muro
  content.innerHTML = sections.muro;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const section = btn.dataset.section;
      content.innerHTML = sections[section];
    });
  });
});
