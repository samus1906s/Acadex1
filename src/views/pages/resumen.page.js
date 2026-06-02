import { layout } from "../layout.js";

export function resumenPage(total, pendientes, progreso, completadas) {
  return layout(
    "Resumen de tareas",
    `
    <h1 class="mb-4">
      <i class="bi bi-bar-chart-fill"></i>
      Resumen de tareas
    </h1>

    <div class="row">

      <div class="col-md-3">
        <div class="card text-bg-primary mb-3">
          <div class="card-body">
            <h5 class="card-title">Total</h5>
            <p class="fs-2">${total}</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-bg-danger mb-3">
          <div class="card-body">
            <h5 class="card-title">Pendientes</h5>
            <p class="fs-2">${pendientes}</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-bg-warning mb-3">
          <div class="card-body">
            <h5 class="card-title">En progreso</h5>
            <p class="fs-2">${progreso}</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-bg-success mb-3">
          <div class="card-body">
            <h5 class="card-title">Completadas</h5>
            <p class="fs-2">${completadas}</p>
          </div>
        </div>
      </div>

    </div>

    <a href="/tareas" class="btn btn-secondary">
      Volver a tareas
    </a>
    `
  );
}