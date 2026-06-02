export function layout(titulo, contenido) {
    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${titulo}</title>

      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      >
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    </head>

    <body class="bg-light">

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div class="container">

          <button
           class="navbar-toggler"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#menu"
          >
          <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="menu">
          <div class="navbar-nav">

          <a class="navbar-brand" href="/">  
          <i class="bi bi-journal-check">
          Plataforma de Tareas</i>
          </a>

          <div class="navbar-nav">
            <a class="nav-link" href="/">
            <i class="bi bi-house-fill"></i> 
            Inicio
            </a>

            <a class="nav-link" href="/tareas">
            <i class="bi bi-list-task"> </i>
            Tareas
            </a>

            <a class="nav-link" href="/tareas/nueva">
            <i class="bi bi-plus-circle-fill"> </i>
            Nueva tarea
            </a>

            <a class="nav-link" href="/tareas/resumen">
            <i class="bi bi-bar-chart-fill"></i>
            Resumen
            </a>

          </div>
        </div>
      </nav>

      <main class="container">
        ${contenido}
      </main>

      <footer class="bg-dark text-white text-center py-3 mt-5">
      <p class="mb-0">
      Acadex © ${new Date().getFullYear()}
      </p>
      </footer>

      <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js">
      </script>
    </body>
    </html>
  `;
}