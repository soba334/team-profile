const sections = document.querySelectorAll('.card-section');
let current = 0;
let isScrolling = false;

function activate(index) {
  sections.forEach((sec, i) => {
    sec.classList.remove('active');
    if (i === index) sec.classList.add('active');
  });
}

activate(current); // 初期表示

window.addEventListener('wheel', (e) => {
  if (isScrolling) return;

  isScrolling = true;

  if (e.deltaY > 0) {
    // 下スクロール → 次のカード
    current = (current + 1) % sections.length;
  } else {
    // 上スクロール → 前のカード（0未満なら末尾へ）
    current = (current - 1 + sections.length) % sections.length;
  }

  activate(current);

  setTimeout(() => {
    isScrolling = false;
  }, 800); // スクロール切り替え間隔（CSSと一致させる）
});
