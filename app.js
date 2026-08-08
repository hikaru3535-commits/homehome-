/**
 * ほめタマ (SelfBoost Counter & Memo)
 * Self-Esteem Boosting Mobile Web App
 */

// ==========================================
// 1. COMPLIMENT & POSITIVE MESSAGES DATA
// ==========================================
const TAP_MESSAGES = [
  "今日も存在してくれてありがとう！✨",
  "あなたは生きているだけで満点です！💯",
  "自分のペースで進めば大丈夫🌸",
  "一歩ずつ前進中！すばらしい！💪",
  "今日もあなたは最高に素敵です💖",
  "自分を甘やかしてあげてね🍵",
  "小さなことでも大きな一歩！🌟",
  "あなたの笑顔が世界を温かくします😊",
  "あなたは愛される価値がある存在です🌈",
  "休むのも立派な行動です🍀",
  "今日のあなたは昨日よりまた輝いてる✨",
  "焦らなくて大丈夫、あなたのテンポで🎵",
  "自分を褒めるあなた、本当に偉い！👍",
  "そのままのあなたが一番素敵です💗",
  "今日もがんばっている自分に拍手！👏",
  "失敗も成功も全部大切な宝物✨",
  "あなたは世界に一人だけの特別です🌺",
  "よく頑張ったね！偉いぞ〜！🎉",
  "明日もきっと良い日になるよ⭐",
  "いつも応援しています！ずっと見守ってるよ💕"
];

const MILESTONES = [
  { count: 5, badge: "🌱 芽生え", title: "はじめの一歩！", quote: "「自分を褒める旅がスタートしました！どんな小さなことでもあなたは最高です！」" },
  { count: 15, badge: "🌸 ひよこ組", title: "ほめ上手マスター！", quote: "「タップを重ねるたびに心が温かくなっていますね。自分を愛するパワーが育っています！」" },
  { count: 30, badge: "⭐ 光のツボミ", title: "自己肯定感UP！", quote: "「30回達成！あなたの心の中にパッと明るい光が灯りました！」" },
  { count: 50, badge: "🔥 ほめ名人", title: "すばらしい継続力！", quote: "「50回達成！自分を大切にできる人は、周囲の人も幸せにできる素敵さを持っています！」" },
  { count: 100, badge: "👑 セルフラブ王", title: "100回達成の奇跡！", quote: "「100回のタップ達成！あなたは自分を最高にリスペクトできる素晴らしい人です！」" },
  { count: 200, badge: "🌈 幸福の太陽", title: "眩しいほどの輝き！", quote: "「200回達成！あなたのおかげで、この場所が温かい優しさで満たされています！」" },
  { count: 500, badge: "🌟 究極の神ほめ", title: "伝説のセルフラブマスター！", quote: "「500回到達！あなたは自分自身の最高の味方であり、ヒーローです！」" }
];

// ==========================================
// 2. APP STATE MANAGEMENT
// ==========================================
let state = {
  todayCount: 0,
  totalCount: 0,
  lastActiveDate: new Date().toDateString(),
  streakCount: 1,
  soundEnabled: true,
  memos: [],
  unlockedMilestones: []
};

// LocalStorage Persistence Key
const STORAGE_KEY = 'hometama_app_state_v1';

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
    } catch (e) {
      console.error("State parse error:", e);
    }
  }

  // Check date for Daily Counter reset & Streak update
  const todayStr = new Date().toDateString();
  if (state.lastActiveDate !== todayStr) {
    const lastDate = new Date(state.lastActiveDate);
    const now = new Date();
    const diffDays = Math.round((now - lastDate) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      state.streakCount += 1;
    } else if (diffDays > 1) {
      state.streakCount = 1;
    }
    state.todayCount = 0;
    state.lastActiveDate = todayStr;
    saveState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ==========================================
// 3. WEB AUDIO SYNTHESIZER (SOUND EFFECTS)
// ==========================================
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playTapSound() {
  if (!state.soundEnabled) return;
  initAudio();
  if (!audioCtx) return;

  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    // Pitch rises slightly with tap count modulo
    const baseFreq = 440 + (state.todayCount % 12) * 20;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, audioCtx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.12);
  } catch (e) {
    console.log("Audio play error:", e);
  }
}

function playCelebrationSound() {
  if (!state.soundEnabled) return;
  initAudio();
  if (!audioCtx) return;

  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  notes.forEach((freq, idx) => {
    setTimeout(() => {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
      } catch (e) {}
    }, idx * 90);
  });
}

// ==========================================
// 4. HTML5 CANVAS CONFETTI EFFECT
// ==========================================
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function triggerConfetti() {
  particles = [];
  const colors = ['#ff5e7e', '#fbbf24', '#34d399', '#c084fc', '#60a5fa', '#f472b6'];
  const particleCount = 70;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2 + 50,
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -14 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 10,
      opacity: 1,
      shape: Math.random() > 0.4 ? 'rect' : 'circle'
    });
  }

  animateConfetti();
}

let confettiAnimationId = null;
function animateConfetti() {
  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let activeParticles = 0;

    particles.forEach(p => {
      if (p.opacity > 0) {
        activeParticles++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.4; // Gravity
        p.rotation += p.rSpeed;
        p.opacity -= 0.015;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    });

    if (activeParticles > 0) {
      confettiAnimationId = requestAnimationFrame(loop);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  loop();
}

// ==========================================
// 5. UI INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initUI();
  renderAll();
});

// DOM Elements
const tapButton = document.getElementById('tap-button');
const counterDisplay = document.getElementById('counter-display');
const todayCountDisplay = document.getElementById('today-count-display');
const totalCountDisplay = document.getElementById('total-count-display');
const streakCountDisplay = document.getElementById('streak-count-display');
const complimentCard = document.getElementById('compliment-card');
const complimentText = document.getElementById('compliment-text');
const userLevelBadge = document.getElementById('user-level-badge');
const levelNextText = document.getElementById('level-next-text');
const levelProgressFill = document.getElementById('level-progress-fill');
const rippleContainer = document.getElementById('ripple-container');

// Sound Buttons
const soundToggleBtn = document.getElementById('sound-toggle-btn');
const soundIconOn = document.getElementById('sound-icon-on');
const soundIconOff = document.getElementById('sound-icon-off');

// Tab Buttons
const navItems = document.querySelectorAll('.nav-item');
const tabPanes = document.querySelectorAll('.tab-pane');

// Memo Elements
const memoInput = document.getElementById('memo-input');
const addMemoBtn = document.getElementById('add-memo-btn');
const memoList = document.getElementById('memo-list');
const charCount = document.getElementById('char-count');
const categoryPills = document.querySelectorAll('.category-pill');
const promptChips = document.querySelectorAll('.prompt-chip');
const filterBtns = document.querySelectorAll('.filter-btn');

// Modal Elements
const milestoneModal = document.getElementById('milestone-modal');
const modalTitle = document.getElementById('modal-title');
const modalCountText = document.getElementById('modal-count-text');
const modalQuoteText = document.getElementById('modal-quote-text');
const modalBadgeEmoji = document.getElementById('modal-badge-emoji');
const modalCloseBtn = document.getElementById('modal-close-btn');

let activeMemoCategory = 'できたこと';
let activeMemoFilter = 'all';

function initUI() {
  // 1. One-tap Counter Listener
  tapButton.addEventListener('click', handleTap);

  // 2. Sound Toggle Listener
  updateSoundUI();
  soundToggleBtn.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    updateSoundUI();
    saveState();
  });

  // 3. Bottom Tab Switching Listener
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // 4. Memo Category Pills
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeMemoCategory = pill.getAttribute('data-cat');
    });
  });

  // 5. Prompt Chips
  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      memoInput.value = prompt + " ";
      memoInput.focus();
      updateCharCount();
    });
  });

  // 6. Memo Input Char Counter
  memoInput.addEventListener('input', updateCharCount);

  // 7. Add Memo Button
  addMemoBtn.addEventListener('click', handleAddMemo);

  // 8. Memo Filter Tabs
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeMemoFilter = btn.getAttribute('data-filter');
      renderMemoList();
    });
  });

  // 9. Close Modal Listener
  modalCloseBtn.addEventListener('click', () => {
    milestoneModal.classList.add('hidden');
  });

  // 10. Quick Stats Button Modal
  document.getElementById('stats-modal-btn').addEventListener('click', () => {
    switchTab('tab-records');
  });
}

// ==========================================
// 6. CORE COUNTER LOGIC
// ==========================================
function handleTap(e) {
  state.todayCount += 1;
  state.totalCount += 1;

  // Sound & Haptic
  playTapSound();
  if (navigator.vibrate) {
    navigator.vibrate(15);
  }

  // Floating +1 animation
  createFloatingPlus(e);

  // Button Ripple Effect
  createButtonRipple(e);

  // Random compliment message update
  updateComplimentMessage();

  // Check Milestone
  checkMilestoneUnlocked();

  // Save & Render
  saveState();
  renderCounterStats();
  renderLevelProgress();
}

function createFloatingPlus(e) {
  const floatEl = document.createElement('span');
  floatEl.className = 'floating-plus';
  floatEl.innerText = '+1 ❤️';
  
  const rect = tapButton.getBoundingClientRect();
  const x = (e.clientX || rect.left + rect.width / 2) - 30;
  const y = (e.clientY || rect.top + rect.height / 2) - 20;

  floatEl.style.left = `${x}px`;
  floatEl.style.top = `${y}px`;

  document.body.appendChild(floatEl);

  setTimeout(() => {
    floatEl.remove();
  }, 800);
}

function createButtonRipple(e) {
  const ripple = document.createElement('span');
  ripple.className = 'click-ripple';

  const rect = tapButton.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = `${size}px`;

  const x = (e.clientX ? e.clientX - rect.left : rect.width / 2) - size / 2;
  const y = (e.clientY ? e.clientY - rect.top : rect.height / 2) - size / 2;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  tapButton.appendChild(ripple);

  setTimeout(() => ripple.remove(), 500);
}

function updateComplimentMessage() {
  const randomIndex = Math.floor(Math.random() * TAP_MESSAGES.length);
  const msg = TAP_MESSAGES[randomIndex];

  complimentCard.classList.remove('bounce-pop');
  void complimentCard.offsetWidth; // Trigger reflow
  complimentCard.classList.add('bounce-pop');

  complimentText.innerText = msg;
}

function getCurrentMilestoneInfo() {
  let currentLevel = MILESTONES[0];
  let nextLevel = MILESTONES[1];

  for (let i = 0; i < MILESTONES.length; i++) {
    if (state.totalCount >= MILESTONES[i].count) {
      currentLevel = MILESTONES[i];
      nextLevel = MILESTONES[i + 1] || null;
    } else {
      break;
    }
  }
  return { currentLevel, nextLevel };
}

function checkMilestoneUnlocked() {
  MILESTONES.forEach(ms => {
    if (state.totalCount >= ms.count && !state.unlockedMilestones.includes(ms.count)) {
      state.unlockedMilestones.push(ms.count);
      showMilestoneModal(ms);
      playCelebrationSound();
      triggerConfetti();
    }
  });
}

function showMilestoneModal(ms) {
  modalTitle.innerText = ms.title;
  modalCountText.innerText = `累計 ${ms.count} 回タップ達成！`;
  modalQuoteText.innerText = ms.quote;
  modalBadgeEmoji.innerText = ms.badge.split(' ')[0] || '🎉';
  milestoneModal.classList.remove('hidden');
}

// ==========================================
// 7. MEMO FEATURE LOGIC
// ==========================================
function updateCharCount() {
  const len = memoInput.value.length;
  charCount.innerText = `${len}/200`;
  if (len > 200) {
    charCount.style.color = '#ef4444';
  } else {
    charCount.style.color = 'var(--text-light)';
  }
}

function handleAddMemo() {
  const text = memoInput.value.trim();
  if (!text) {
    memoInput.focus();
    return;
  }
  if (text.length > 200) {
    alert("メモは200文字以内で入力してください");
    return;
  }

  const now = new Date();
  const dateStr = `${now.getMonth() + 1}/${now.getDate()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const newMemo = {
    id: Date.now(),
    text: text,
    category: activeMemoCategory,
    date: dateStr
  };

  state.memos.unshift(newMemo);
  saveState();

  memoInput.value = '';
  updateCharCount();
  renderMemoList();

  // Subtle tap feedback
  if (state.soundEnabled) playTapSound();
}

function deleteMemo(id) {
  state.memos = state.memos.filter(m => m.id !== id);
  saveState();
  renderMemoList();
}

function renderMemoList() {
  memoList.innerHTML = '';

  const filtered = activeMemoFilter === 'all'
    ? state.memos
    : state.memos.filter(m => m.category === activeMemoFilter);

  if (filtered.length === 0) {
    memoList.innerHTML = `
      <div class="empty-memo-state">
        <div class="empty-icon">🌱</div>
        <p style="font-weight:700;">まだメモがありません</p>
        <p style="font-size:0.75rem; margin-top:4px;">今日できたことや、自分をほめる一言を書き残してみましょう！</p>
      </div>
    `;
    return;
  }

  filtered.forEach(memo => {
    const card = document.createElement('div');
    card.className = 'memo-card';

    let catEmoji = '💪';
    if (memo.category === '自分ほめ') catEmoji = '✨';
    if (memo.category === '感謝') catEmoji = '🌸';
    if (memo.category === 'いいこと') catEmoji = '🍀';

    card.innerHTML = `
      <div class="memo-card-top">
        <span class="memo-cat-badge">${catEmoji} ${memo.category}</span>
        <span class="memo-date">${memo.date}</span>
      </div>
      <div class="memo-text-content">${escapeHTML(memo.text)}</div>
      <div class="memo-card-actions">
        <button class="memo-action-btn delete-btn" data-id="${memo.id}">削除</button>
      </div>
    `;

    card.querySelector('.delete-btn').addEventListener('click', () => {
      deleteMemo(memo.id);
    });

    memoList.appendChild(card);
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// ==========================================
// 8. TAB NAVIGATION & RENDERERS
// ==========================================
function switchTab(tabId) {
  navItems.forEach(item => {
    if (item.getAttribute('data-tab') === tabId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  tabPanes.forEach(pane => {
    if (pane.id === tabId) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });

  if (tabId === 'tab-memo') renderMemoList();
  if (tabId === 'tab-records') renderRecords();
}

function updateSoundUI() {
  if (state.soundEnabled) {
    soundIconOn.classList.remove('hidden');
    soundIconOff.classList.add('hidden');
  } else {
    soundIconOn.classList.add('hidden');
    soundIconOff.classList.remove('hidden');
  }
}

function renderCounterStats() {
  counterDisplay.innerText = state.todayCount;
  todayCountDisplay.innerText = `${state.todayCount}回`;
  totalCountDisplay.innerText = `${state.totalCount}回`;
  streakCountDisplay.innerText = `${state.streakCount}日目🔥`;
}

function renderLevelProgress() {
  const { currentLevel, nextLevel } = getCurrentMilestoneInfo();

  userLevelBadge.innerText = currentLevel.badge;

  if (nextLevel) {
    const prevCount = currentLevel.count;
    const targetCount = nextLevel.count;
    const currentProgress = state.totalCount - prevCount;
    const range = targetCount - prevCount;
    const remaining = targetCount - state.totalCount;

    const percent = Math.min(100, Math.max(0, (currentProgress / range) * 100));

    levelNextText.innerText = `次の目標（${nextLevel.badge}）まで あと${remaining}回`;
    levelProgressFill.style.width = `${percent}%`;
  } else {
    levelNextText.innerText = `最高ランク到達！素晴らしい！`;
    levelProgressFill.style.width = `100%`;
  }
}

function renderRecords() {
  // Render Badges
  const badgesGrid = document.getElementById('badges-grid');
  badgesGrid.innerHTML = '';

  MILESTONES.forEach(ms => {
    const isUnlocked = state.unlockedMilestones.includes(ms.count);
    const item = document.createElement('div');
    item.className = `badge-item ${isUnlocked ? 'unlocked' : 'locked'}`;

    const [emoji, name] = ms.badge.split(' ');

    item.innerHTML = `
      <div class="badge-icon">${isUnlocked ? emoji : '🔒'}</div>
      <div class="badge-name">${name || ms.badge}</div>
      <div class="badge-condition">${ms.count}回タップ</div>
    `;

    badgesGrid.appendChild(item);
  });

  // Render Unlocked Quotes
  const quotesList = document.getElementById('unlocked-quotes-list');
  quotesList.innerHTML = '';

  const unlockedMs = MILESTONES.filter(ms => state.unlockedMilestones.includes(ms.count));

  if (unlockedMs.length === 0) {
    quotesList.innerHTML = `
      <div class="empty-memo-state">
        <p style="font-size:0.8rem;">タップして目標回数を達成すると、ここに心が温まるスペシャルメッセージが追加されます✨</p>
      </div>
    `;
    return;
  }

  unlockedMs.forEach(ms => {
    const card = document.createElement('div');
    card.className = 'quote-collect-card';
    card.innerHTML = `
      <div class="quote-collect-num">${ms.count}回達成</div>
      <div class="quote-collect-body">${ms.quote}</div>
    `;
    quotesList.appendChild(card);
  });
}

function renderAll() {
  renderCounterStats();
  renderLevelProgress();
  renderMemoList();
  renderRecords();
}
