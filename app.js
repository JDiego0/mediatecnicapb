/**
 * ============================================================
 *  APP.JS – Lógica de interacción
 *  No es necesario editar este archivo para agregar datos.
 *  Toda la información va en data.js
 * ============================================================
 */

// ─── Estado ───────────────────────────────────────────────
let currentProgram = null;
let currentInstitution = null;

// ─── Referencias DOM ──────────────────────────────────────
const introSection = document.getElementById('introSection');
const institutionsSection = document.getElementById('institutionsSection');
const detailSection = document.getElementById('detailSection');
const institutionsList = document.getElementById('institutionsList');
const detailTableBody = document.getElementById('detailTableBody');
const institutionName = document.getElementById('institutionName');
const programTitle = document.getElementById('programTitle');
const countBadge = document.getElementById('countBadge');
const searchInput = document.getElementById('searchInput');
const emptyMsg = document.getElementById('emptyMsg');
const clearSearchBtn = document.getElementById('clearSearch');
const instructivosSection = document.getElementById('instructivosSection');
const instructivosList = document.getElementById('instructivosList');
const instructivosBadge = document.getElementById('instructivosBadge');


// ─── Navegación de programas ──────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.program;
    if (!programas[key]) return;

    // Activar botón
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    currentProgram = key;
    currentInstitution = null;

    searchInput.value = '';
    showInstitutions(key);
  });
});

// ─── Mostrar lista de instituciones ───────────────────────
function showInstitutions(key) {
  const prog = programas[key];
  programTitle.textContent = prog.titulo;

  renderInstitutions(prog.instituciones);

  introSection.classList.add('hidden');
  detailSection.classList.add('hidden');
  institutionsSection.classList.remove('hidden');
}

function renderInstitutions(lista) {
  institutionsList.innerHTML = '';

  if (lista.length === 0) {
    emptyMsg.classList.remove('hidden');
    countBadge.textContent = '0 instituciones';
    return;
  }

  emptyMsg.classList.add('hidden');
  countBadge.textContent = lista.length + (lista.length === 1 ? ' institución' : ' instituciones');

  lista.forEach((inst, i) => {
    const li = document.createElement('li');
    li.className = 'institution-item';
    li.style.animationDelay = (i * 0.05) + 's';
    li.innerHTML = `
      <div class="inst-icon">🏫</div>
      <span class="inst-name">${inst.nombre}</span>
    `;
    li.addEventListener('click', () => showDetail(inst));
    institutionsList.appendChild(li);
  });
}

// ─── Filtro de búsqueda ───────────────────────────────────
searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  clearSearchBtn.style.opacity = q ? '1' : '0.3';

  if (!currentProgram) return;

  if (detailSection.classList.contains('hidden') === false) {
    // Si estamos en detalle, volvemos a lista al escribir
    institutionsSection.classList.remove('hidden');
    detailSection.classList.add('hidden');
  }

  const todas = programas[currentProgram].instituciones;
  const filtradas = todas.filter(inst =>
    inst.nombre.toLowerCase().includes(q)
  );

  renderInstitutions(filtradas);
});

function clearSearch() {
  searchInput.value = '';
  clearSearchBtn.style.opacity = '0.3';
  if (currentProgram) showInstitutions(currentProgram);
}

// ─── Mostrar detalle de institución ───────────────────────
function showDetail(inst) {
  currentInstitution = inst;
  institutionName.textContent = inst.nombre;
  detailTableBody.innerHTML = '';

  inst.grados.forEach(g => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${g.grado}</strong></td>
      <td>${g.profesor}</td>
      <td>
        <a href="${g.drive}" target="_blank" rel="noopener" class="btn-acceder">
          📂 Acceder a carpeta
        </a>
      </td>
    `;
    detailTableBody.appendChild(tr);
  });

  institutionsSection.classList.add('hidden');
  detailSection.classList.remove('hidden');
  detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── Volver a la lista ────────────────────────────────────
function goBack() {
  detailSection.classList.add('hidden');
  institutionsSection.classList.remove('hidden');
}

function showInstructivos() {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  currentProgram = null;
  currentInstitution = null;
  searchInput.value = '';

  introSection.classList.add('hidden');
  institutionsSection.classList.add('hidden');
  detailSection.classList.add('hidden');

  instructivosList.innerHTML = '';
  instructivosBadge.textContent = instructivos.length + ' videos';

  instructivos.forEach((item, i) => {
    const li = document.createElement('li');
    li.className = 'institution-item';
    li.style.animationDelay = (i * 0.05) + 's';
    li.style.cursor = 'pointer';
    li.innerHTML = `
      <div class="inst-icon">▶️</div>
      <span class="inst-name">${item.titulo}</span>
    `;
    li.addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = item.link;
      a.target = '_blank';
      a.rel = 'noreferrer noopener';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
    instructivosList.appendChild(li);
  });

  instructivosSection.classList.remove('hidden');
}

// ─── Init ─────────────────────────────────────────────────
clearSearchBtn.style.opacity = '0.3';
