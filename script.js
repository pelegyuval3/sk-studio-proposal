// ── Date ──────────────────────────────────────
document.getElementById('sigDate').textContent =
  new Date().toLocaleDateString('he-IL', {year:'numeric',month:'long',day:'numeric'});

// ── Signature Pad (Pointer Events - works on all devices) ──────────
const canvas = document.getElementById('sigCanvas');
const ctx = canvas.getContext('2d');
const hint = document.getElementById('sigHint');
let drawing = false, lx = 0, ly = 0, hasSig = false;

function initCanvas() {
  const wrap = canvas.parentElement;
  const r = window.devicePixelRatio || 1;
  const w = wrap.offsetWidth;
  const h = wrap.offsetHeight;
  canvas.width = w * r;
  canvas.height = h * r;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(r, r);
  ctx.strokeStyle = '#1A1412';
  ctx.lineWidth = 2.4;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
}

function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  const r = window.devicePixelRatio || 1;
  const scaleX = canvas.width / r / rect.width;
  const scaleY = canvas.height / r / rect.height;
  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY
  };
}

canvas.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  canvas.setPointerCapture(e.pointerId);
  drawing = true;
  const p = getPos(e);
  lx = p.x; ly = p.y;
  if (!hasSig) { hint.style.display = 'none'; hasSig = true; }
}, {passive: false});

canvas.addEventListener('pointermove', (e) => {
  if (!drawing) return;
  e.preventDefault();
  const p = getPos(e);
  ctx.beginPath();
  ctx.moveTo(lx, ly);
  ctx.lineTo(p.x, p.y);
  ctx.stroke();
  lx = p.x; ly = p.y;
}, {passive: false});

canvas.addEventListener('pointerup', () => { drawing = false; });
canvas.addEventListener('pointercancel', () => { drawing = false; });
canvas.addEventListener('pointerleave', () => { drawing = false; });

document.getElementById('clearBtn').addEventListener('click', () => {
  const r = window.devicePixelRatio || 1;
  ctx.clearRect(0, 0, canvas.width / r, canvas.height / r);
  hasSig = false;
  hint.style.display = 'flex';
});

document.getElementById('printBtn').addEventListener('click', () => {
  const imgEl = document.getElementById('sigImg');
  imgEl.src = canvas.toDataURL('image/png');
  imgEl.style.display = 'block';
  canvas.style.display = 'none';
  hint.style.display = 'none';
  setTimeout(() => {
    window.print();
    setTimeout(() => {
      canvas.style.display = 'block';
      imgEl.style.display = 'none';
      if (!hasSig) hint.style.display = 'flex';
    }, 1000);
  }, 150);
});

window.addEventListener('load', () => { setTimeout(initCanvas, 50); });
window.addEventListener('resize', initCanvas);
