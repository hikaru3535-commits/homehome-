/**
 * ほめタマ (SelfBoost Counter & Habit ToDo)
 * Self-Esteem Boosting Mobile Web App v3.2
 */

// ==========================================
// 1. EXTENDABLE QUOTE PACKS ARCHITECTURE
// ==========================================
const QUOTE_PACKS = {
  standard: {
    id: "standard",
    name: "標準ほめ言葉",
    icon: "💖",
    tag: "#自己肯定感アップ",
    messages: [
      "今日も存在してくれてありがとう！✨",
      "あなたは生きているだけで満点です！💯",
      "自分のペースで進めば大丈夫🌸",
      "一歩ずつ前進中！すばらしい！💪",
      "今日もあなたは最高に素敵です💗",
      "自分を甘やかしてあげてね🍵",
      "小さなことでも大きな一歩！🌟",
      "あなたの笑顔が世界を温かくします😊",
      "あなたは愛される価値がある存在です🌈",
      "休むのも立派な行動です🍀",
      "今日のあなたは昨日よりまた輝いてる✨",
      "焦らなくて大丈夫、あなたのテンポで🎵",
      "自分を褒めるあなた、本当に偉い！👍",
      "そのままのあなたが一番素敵です🌺",
      "今日もがんばっている自分に拍手！👏",
      "失敗も成功も全部大切な宝物✨",
      "あなたは世界に一人だけの特別です☀️",
      "よく頑張ったね！偉いぞ〜！🎉",
      "明日もきっと良い日になるよ⭐",
      "いつも応援しています！ずっと見守ってるよ💕",
      "あなたの存在が誰かの癒やしになっています🍀",
      "自分の心の声にやさしく耳を傾けよう👂✨",
      "一回立ち止まっても、また歩き出せばOK！🚶‍♂️",
      "今日も無事に過ごせただけで大勝利！🏆",
      "あなたの優しさはめぐりめぐって自分に返ってくるよ🌸",
      "毎日少しずつ、あなたは強くなってる！🌱",
      "過去の自分と比べず、今の自分を愛そう❤️",
      "完璧じゃなくて大丈夫。ありのままが美しい✨",
      "辛いときは無理せず心を休めてね💤",
      "あなたの積み重ねは決して無駄にならない！📚",
      "周りと違っていい。それがあなたの個性だよ🎨",
      "今日も一つ、素敵な発見ができたね！🔍",
      "自分への小さなプレゼントを忘れずに🎁",
      "あなたの選択はいつも間違いじゃないよ信頼しよう✨",
      "心に太陽を持って、今日も笑顔でいこう☀️",
      "自分の機嫌は自分で取れるあなた、天才！🌟",
      "今日も生き抜いた自分を抱きしめてあげよう🤗",
      "あなたの優しさに救われている人が必ずいるよ💕",
      "どんな小歩も前進！一歩一歩を楽しんで♪",
      "今日も今日とて、あなたは輝いています✨",
      "自分を信じる強さが、あなたには備わっています！🛡️",
      "美味しいものを食べて、心を満たそうね🍙",
      "あなたの未来は希望で満ち溢れています🌈",
      "失敗は挑戦した証！ナイスチャレンジ！👍",
      "今日も自分の一番のファンでいよう📣",
      "小さな幸せを見つける名人だね！🍀",
      "あなたは大切な宝物。大切に扱ってね💎",
      "今日もお疲れ様！ゆっくり休んでね🌙",
      "明日もあなたの輝く一日になりますように✨",
      "ずっとずっと、あなたのことを誇りに思っています！🏆"
    ]
  },
  anime: {
    id: "anime",
    name: "アニメ・情熱の名言",
    icon: "🔥",
    tag: "#アニメ名言",
    messages: [
      "「あきらめたらそこで試合終了ですよ」✨",
      "「逃げちゃダメだ、自分を信じて進もう！」🔥",
      "「心が叫びたがってるんだ。自分の気持ちを大切に！」🌟",
      "「人は誰でも、誰かのヒーローになれる！」🦸‍♂️",
      "「昨日の自分を超えてゆけ！」🚀",
      "「立ち止まってもいい。また歩き出せばいいんだ！」🌱",
      "「君の選択は間違っていない！」🎯",
      "「諦めない心こそが、最大の武器だ！」🛡️",
      "「奇跡は諦めない奴の頭上にしか降りてこない！」🌈",
      "「笑っていれば、きっと良い風が吹く！」🍃",
      "「君は君のままで素晴らしい！」✨",
      "「限界を決めるのは、いつだって自分自身だ！」💥",
      "「仲間と自分を信じて前へ進め！」🤝",
      "「どんな暗闇でも、光は必ず見つかる！」💡",
      "「今日も全力で駆け抜けた君に拍手を！」👏"
    ]
  },
  sports: {
    id: "sports",
    name: "スポーツ・勇気の名言",
    icon: "🏆",
    tag: "#スポーツ名言",
    messages: [
      "「努力は裏切らない。今日の1タップも力になる！」💪",
      "「ナイスファイト！今日の頑張りは素晴らしい！」🔥",
      "「一球入魂！今この瞬間を全力で楽しもう！」⚾",
      "「転んだら起き上がればいい。何度でも挑もう！」🏃‍♂️",
      "「最後まで諦めない姿がカッコいい！」🌟",
      "「限界の一歩先へ！君なら行ける！」🚀",
      "「今日の汗と努力は明日のメダルだ！」🏅",
      "「失敗を恐れるな！挑戦することに価値がある！」🎯",
      "「チームの一員として、君の存在は不可欠だ！」⚽",
      "「自分の可能性を信じて、突き進め！」💥",
      "「継続は力なり。毎日の一歩が未来を作る！」🌱",
      "「ナイスチャレンジ！素晴らしいスピリットだ！」👏",
      "「逆境こそ成長のチャンス！」🌈",
      "「今日も最高のプレイを見せてくれたね！」✨",
      "「君が主役のストーリーはここからだ！」🏆"
    ]
  }
};

const QuoteManager = {
  getActivePack() {
    const packId = state.activeQuotePack || 'standard';
    return QUOTE_PACKS[packId] || QUOTE_PACKS.standard;
  },
  setActivePack(packId) {
    if (QUOTE_PACKS[packId]) {
      state.activeQuotePack = packId;
      saveState();
    }
  },
  getRandomQuote() {
    const pack = this.getActivePack();
    const msgs = pack.messages;
    const idx = Math.floor(Math.random() * msgs.length);
    return { text: msgs[idx], tag: pack.tag };
  }
};

// ==========================================
// 2. MILESTONES DATA & PROCEDURAL LEVELS
// ==========================================
const PREDEFINED_MILESTONES = [
  { count: 5, badge: "🌱 芽生え", title: "はじめの一歩！", quote: "「自分を褒める旅がスタートしました！どんな小さなことでもあなたは最高です！」" },
  { count: 15, badge: "🌸 ひよこ組", title: "ほめ上手マスター！", quote: "「タップを重ねるたびに心が温かくなっていますね。自分を愛するパワーが育っています！」" },
  { count: 30, badge: "⭐ 光のツボミ", title: "自己肯定感UP！", quote: "「30回達成！あなたの心の中にパッと明るい光が灯りました！」" },
  { count: 50, badge: "🔥 ほめ名人", title: "すばらしい継続力！", quote: "「50回達成！自分を大切にできる人は、周囲の人も幸せにできる素敵さを持っています！」" },
  { count: 100, badge: "👑 セルフラブ王", title: "100回達成の奇跡！", quote: "「100回のタップ達成！あなたは自分を最高にリスペクトできる素晴らしい人です！」" },
  { count: 200, badge: "🌈 幸福の太陽", title: "眩しいほどの輝き！", quote: "「200回達成！あなたのおかげで、この場所が温かい優しさで満たされています！」" },
  { count: 500, badge: "🌟 究極の神ほめ", title: "伝説のセルフラブマスター！", quote: "「500回到達！あなたは自分自身の最高の味方であり、ヒーローです！」" }
];

function getLevelInfo(totalCount) {
  let currentLevel = PREDEFINED_MILESTONES[0];
  let nextLevel = PREDEFINED_MILESTONES[1];

  for (let i = 0; i < PREDEFINED_MILESTONES.length; i++) {
    if (totalCount >= PREDEFINED_MILESTONES[i].count) {
      currentLevel = PREDEFINED_MILESTONES[i];
      nextLevel = PREDEFINED_MILESTONES[i + 1] || null;
    } else {
      break;
    }
  }

  if (totalCount >= 500) {
    const extraLevelNum = Math.floor((totalCount - 500) / 100) + 1;
    const currentReq = 500 + (extraLevelNum - 1) * 100;
    const nextReq = 500 + extraLevelNum * 100;

    currentLevel = {
      count: currentReq,
      badge: `💎 Lv.${7 + extraLevelNum} 宇宙クラス`,
      title: `レベル ${7 + extraLevelNum} 達成！`,
      quote: `「累計${totalCount.toLocaleString()}回達成！あなたの自己肯定感は無限大です！」`
    };

    nextLevel = {
      count: nextReq,
      badge: `💎 Lv.${8 + extraLevelNum} 宇宙クラス`,
      title: `レベル ${8 + extraLevelNum} 達成！`,
      quote: `「累計${nextReq.toLocaleString()}回目を目指して突き進みましょう！」`
    };
  }

  return { currentLevel, nextLevel };
}

// ==========================================
// 3. APP STATE MANAGEMENT & DATA MIGRATION
// ==========================================
let state = {
  todayCount: 0,
  totalCount: 0,
  lastActiveDate: new Date().toDateString(),
  streakCount: 1,
  soundEnabled: true,
  theme: 'red',
  displayMode: 'today',
  activeQuotePack: 'standard',
  memos: [],
  unlockedMilestones: [],
  todos: [
    { id: 1, title: '💧 水を1杯飲む', repeatType: 'daily', days: ['mon','tue','wed','thu','fri','sat','sun'], completedDates: [] },
    { id: 2, title: '🧘‍♂️ 1分間の深呼吸', repeatType: 'daily', days: ['mon','tue','wed','thu','fri','sat','sun'], completedDates: [] },
    { id: 3, title: '✨ できたことを1つメモする', repeatType: 'daily', days: ['mon','tue','wed','thu','fri','sat','sun'], completedDates: [] }
  ]
};

const LEGACY_STORAGE_KEYS = ['hometama_app_state_v1', 'hometama_app_state_v2'];
const CURRENT_STORAGE_KEY = 'hometama_app_state_v3';

function loadState() {
  let mergedData = {};

  LEGACY_STORAGE_KEYS.forEach(key => {
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        mergedData = { ...mergedData, ...parsed };
      } catch (e) {}
    }
  });

  const currentRaw = localStorage.getItem(CURRENT_STORAGE_KEY);
  if (currentRaw) {
    try {
      const parsed = JSON.parse(currentRaw);
      mergedData = { ...mergedData, ...parsed };
    } catch (e) {}
  }

  state = { ...state, ...mergedData };

  state.todayCount = Math.max(0, state.todayCount || 0);
  state.totalCount = Math.max(0, state.totalCount || 0);

  // Migration for Legacy ToDos
  if (state.todos && Array.isArray(state.todos)) {
    state.todos = state.todos.map(t => {
      if (!t.repeatType) {
        if (t.repeat === 'daily' || t.repeat === 'weekdays' || t.repeat === 'weekends') {
          t.repeatType = t.repeat;
          t.days = ['mon','tue','wed','thu','fri','sat','sun'];
        } else if (typeof t.repeat === 'string') {
          t.repeatType = 'weekly';
          t.days = [t.repeat];
        } else {
          t.repeatType = 'daily';
          t.days = ['mon','tue','wed','thu','fri','sat','sun'];
        }
      }
      return t;
    });
  } else {
    state.todos = [
      { id: 1, title: '💧 水を1杯飲む', repeatType: 'daily', days: ['mon','tue','wed','thu','fri','sat','sun'], completedDates: [] },
      { id: 2, title: '🧘‍♂️ 1分間の深呼吸', repeatType: 'daily', days: ['mon','tue','wed','thu','fri','sat','sun'], completedDates: [] },
      { id: 3, title: '✨ できたことを1つメモする', repeatType: 'daily', days: ['mon','tue','wed','thu','fri','sat','sun'], completedDates: [] }
    ];
  }

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
  }

  saveState();
}

function saveState() {
  localStorage.setItem(CURRENT_STORAGE_KEY, JSON.stringify(state));
}

// ==========================================
// 4. HABIT TODO REPEAT & COUNTER LINK LOGIC
// ==========================================
function getTodayDateString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function isTodoActiveToday(todo) {
  const now = new Date();
  const dayIndex = now.getDay(); // 0 = sun, 1 = mon, 2 = tue, 3 = wed, 4 = thu, 5 = fri, 6 = sat
  const dayKeys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const todayKey = dayKeys[dayIndex];

  const type = todo.repeatType || todo.repeat;

  if (type === 'daily') return true;
  if (type === 'weekdays' && dayIndex >= 1 && dayIndex <= 5) return true;
  if (type === 'weekends' && (dayIndex === 0 || dayIndex === 6)) return true;
  
  if (type === 'weekly' && Array.isArray(todo.days)) {
    return todo.days.includes(todayKey);
  }

  if (typeof type === 'string' && type === todayKey) return true;

  return false;
}

function getRepeatLabel(todo) {
  const type = todo.repeatType || todo.repeat;
  if (type === 'daily') return '毎日';
  if (type === 'weekdays') return '平日';
  if (type === 'weekends') return '休日';
  
  if (type === 'weekly' && Array.isArray(todo.days) && todo.days.length > 0) {
    const dayNames = { mon: '月', tue: '火', wed: '水', thu: '木', fri: '金', sat: '土', sun: '日' };
    return todo.days.map(d => dayNames[d] || d).join('・');
  }

  return '毎日';
}

function toggleTodoCompletion(todoId) {
  const todayStr = getTodayDateString();
  const todo = state.todos.find(t => t.id === todoId);
  if (!todo) return;

  const isCompleted = todo.completedDates.includes(todayStr);

  if (!isCompleted) {
    todo.completedDates.push(todayStr);
    state.todayCount += 1;
    state.totalCount += 1;

    playCelebrationSound();
    triggerConfetti();

    createFloatingText(`+1 ${todo.title} 完了! 🎉`);
    updateComplimentMessage();
    checkMilestoneUnlocked();
  } else {
    todo.completedDates = todo.completedDates.filter(d => d !== todayStr);
    state.todayCount = Math.max(0, state.todayCount - 1);
    state.totalCount = Math.max(0, state.totalCount - 1);

    if (state.soundEnabled) playTapSound();
    createFloatingText(`-1 取消`);
  }

  saveState();
  renderCounterStats();
  renderLevelProgress();
  renderHomeTodoList();
  renderTodoManagerList();
}

function createFloatingText(text) {
  const floatEl = document.createElement('span');
  floatEl.className = 'floating-plus';
  floatEl.innerText = text;

  const tapBtn = document.getElementById('tap-button');
  const rect = tapBtn.getBoundingClientRect();
  const x = rect.left + rect.width / 2 - 50;
  const y = rect.top + rect.height / 2 - 20;

  floatEl.style.left = `${x}px`;
  floatEl.style.top = `${y}px`;
  floatEl.style.fontSize = '1.1rem';

  document.body.appendChild(floatEl);

  setTimeout(() => floatEl.remove(), 900);
}

function deleteHabitTodo(id) {
  state.todos = state.todos.filter(t => t.id !== id);
  saveState();
  renderHomeTodoList();
  renderTodoManagerList();
}

// ==========================================
// 5. WEB AUDIO SYNTHESIZER
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
  } catch (e) {}
}

function playCelebrationSound() {
  if (!state.soundEnabled) return;
  initAudio();
  if (!audioCtx) return;

  const notes = [523.25, 659.25, 783.99, 1046.50];
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
// 6. HTML5 CANVAS CONFETTI EFFECT
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
        p.vy += 0.4;
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
// 7. UI INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  applyTheme(state.theme);
  initUI();
  renderAll();
});

// DOM Elements
const tapButton = document.getElementById('tap-button');
const counterDisplay = document.getElementById('counter-display');
const btnModeLabel = document.getElementById('btn-mode-label');
const todayCountDisplay = document.getElementById('today-count-display');
const totalCountDisplay = document.getElementById('total-count-display');
const streakCountDisplay = document.getElementById('streak-count-display');
const complimentCard = document.getElementById('compliment-card');
const complimentText = document.getElementById('compliment-text');
const currentPackTag = document.getElementById('current-pack-tag');
const userLevelBadge = document.getElementById('user-level-badge');
const levelNextText = document.getElementById('level-next-text');
const levelProgressFill = document.getElementById('level-progress-fill');

// Mode Switch Buttons
const modeTodayBtn = document.getElementById('mode-today-btn');
const modeTotalBtn = document.getElementById('mode-total-btn');
const statBoxToday = document.getElementById('stat-box-today');
const statBoxTotal = document.getElementById('stat-box-total');

// Sound & Theme Buttons
const soundToggleBtn = document.getElementById('sound-toggle-btn');
const soundIconOn = document.getElementById('sound-icon-on');
const soundIconOff = document.getElementById('sound-icon-off');
const themeModalBtn = document.getElementById('theme-modal-btn');
const themeModal = document.getElementById('theme-modal');
const themeCloseBtn = document.getElementById('theme-close-btn');

// Habit ToDo Modal Elements
const todoModal = document.getElementById('todo-modal');
const todoModalTitle = document.getElementById('todo-modal-title');
const todoModalSubtext = document.getElementById('todo-modal-subtext');
const todoEditIdInput = document.getElementById('todo-edit-id-input');
const addTodoModalBtn = document.getElementById('add-todo-modal-btn');
const managerAddTodoBtn = document.getElementById('manager-add-todo-btn');
const saveTodoBtn = document.getElementById('save-todo-btn');
const cancelTodoBtn = document.getElementById('cancel-todo-btn');
const todoTitleInput = document.getElementById('todo-title-input');
const todoRepeatSelect = document.getElementById('todo-repeat-select');
const todoDaysSelector = document.getElementById('todo-days-selector');

// Tab Navigation
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

function applyTheme(themeName) {
  state.theme = themeName;
  document.body.setAttribute('data-theme', themeName);

  document.querySelectorAll('.theme-option-btn').forEach(btn => {
    if (btn.getAttribute('data-theme') === themeName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  saveState();
}

function setDisplayMode(mode) {
  state.displayMode = mode;
  if (mode === 'today') {
    modeTodayBtn.classList.add('active');
    modeTotalBtn.classList.remove('active');
    statBoxToday.classList.add('active-stat');
    statBoxTotal.classList.remove('active-stat');
    btnModeLabel.innerText = 'TODAY';
  } else {
    modeTodayBtn.classList.remove('active');
    modeTotalBtn.classList.add('active');
    statBoxToday.classList.remove('active-stat');
    statBoxTotal.classList.add('active-stat');
    btnModeLabel.innerText = 'TOTAL';
  }
  renderCounterStats();
  saveState();
}

function openAddTodoModal() {
  todoEditIdInput.value = '';
  todoModalTitle.innerText = '習慣ToDoを作成';
  todoModalSubtext.innerText = '毎日・定期的に続けたいタスクを登録しよう';
  todoTitleInput.value = '';
  todoRepeatSelect.value = 'daily';
  
  // Uncheck all weekday checkboxes
  document.querySelectorAll('#todo-days-selector input[type="checkbox"]').forEach(cb => cb.checked = false);
  todoDaysSelector.classList.add('hidden');

  todoModal.classList.remove('hidden');
  todoTitleInput.focus();
}

function openEditTodoModal(todo) {
  todoEditIdInput.value = todo.id;
  todoModalTitle.innerText = '習慣ToDoを編集';
  todoModalSubtext.innerText = 'タスクの内容や繰り返しスケジュールを変更できます';
  todoTitleInput.value = todo.title;

  const repeatType = todo.repeatType || todo.repeat || 'daily';
  todoRepeatSelect.value = repeatType;

  // Handle weekday checkboxes
  const checkboxes = document.querySelectorAll('#todo-days-selector input[type="checkbox"]');
  checkboxes.forEach(cb => {
    cb.checked = Array.isArray(todo.days) && todo.days.includes(cb.value);
  });

  if (repeatType === 'weekly') {
    todoDaysSelector.classList.remove('hidden');
  } else {
    todoDaysSelector.classList.add('hidden');
  }

  todoModal.classList.remove('hidden');
  todoTitleInput.focus();
}

function handleSaveTodo() {
  const title = todoTitleInput.value.trim();
  if (!title) {
    todoTitleInput.focus();
    return;
  }

  const editId = todoEditIdInput.value ? Number(todoEditIdInput.value) : null;
  const repeatType = todoRepeatSelect.value;
  let selectedDays = [];

  if (repeatType === 'weekly') {
    const checkboxes = document.querySelectorAll('#todo-days-selector input[type="checkbox"]:checked');
    checkboxes.forEach(cb => selectedDays.push(cb.value));
    
    if (selectedDays.length === 0) {
      alert("取り組む曜日を1つ以上選択してください");
      return;
    }
  } else {
    selectedDays = ['mon','tue','wed','thu','fri','sat','sun'];
  }

  if (editId) {
    // Edit existing Todo
    const existing = state.todos.find(t => t.id === editId);
    if (existing) {
      existing.title = title;
      existing.repeatType = repeatType;
      existing.days = selectedDays;
    }
  } else {
    // Create new Todo
    const newTodo = {
      id: Date.now(),
      title: title,
      repeatType: repeatType,
      days: selectedDays,
      completedDates: []
    };
    state.todos.push(newTodo);
  }

  saveState();
  renderHomeTodoList();
  renderTodoManagerList();
  todoModal.classList.add('hidden');
}

function initUI() {
  // 1. One-tap Counter Listener
  tapButton.addEventListener('click', handleTap);

  // 2. Main Display Mode Switchers
  modeTodayBtn.addEventListener('click', () => setDisplayMode('today'));
  modeTotalBtn.addEventListener('click', () => setDisplayMode('total'));
  statBoxToday.addEventListener('click', () => setDisplayMode('today'));
  statBoxTotal.addEventListener('click', () => setDisplayMode('total'));

  // 3. Theme Selector Modal
  themeModalBtn.addEventListener('click', () => {
    themeModal.classList.remove('hidden');
  });
  themeCloseBtn.addEventListener('click', () => {
    themeModal.classList.add('hidden');
  });
  document.querySelectorAll('.theme-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-theme');
      applyTheme(theme);
    });
  });

  // 4. Habit ToDo Modal Open, Select Repeat & Save Listener
  addTodoModalBtn.addEventListener('click', openAddTodoModal);
  managerAddTodoBtn.addEventListener('click', openAddTodoModal);
  cancelTodoBtn.addEventListener('click', () => todoModal.classList.add('hidden'));

  todoRepeatSelect.addEventListener('change', () => {
    if (todoRepeatSelect.value === 'weekly') {
      todoDaysSelector.classList.remove('hidden');
    } else {
      todoDaysSelector.classList.add('hidden');
    }
  });

  saveTodoBtn.addEventListener('click', handleSaveTodo);

  // 5. Sound Toggle Listener
  updateSoundUI();
  soundToggleBtn.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    updateSoundUI();
    saveState();
  });

  // 6. Bottom Tab Switching Listener
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // 7. Memo Category Pills
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeMemoCategory = pill.getAttribute('data-cat');
    });
  });

  // 8. Prompt Chips
  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      memoInput.value = prompt + " ";
      memoInput.focus();
      updateCharCount();
    });
  });

  // 9. Memo Input Char Counter
  memoInput.addEventListener('input', updateCharCount);

  // 10. Add Memo Button
  addMemoBtn.addEventListener('click', handleAddMemo);

  // 11. Memo Filter Tabs
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeMemoFilter = btn.getAttribute('data-filter');
      renderMemoList();
    });
  });

  // 12. Close Modal Listener
  modalCloseBtn.addEventListener('click', () => {
    milestoneModal.classList.add('hidden');
  });

  // 13. Quick Stats Button Modal
  document.getElementById('stats-modal-btn').addEventListener('click', () => {
    switchTab('tab-records');
  });

  setDisplayMode(state.displayMode || 'today');
}

// ==========================================
// 8. CORE COUNTER LOGIC
// ==========================================
function handleTap(e) {
  state.todayCount += 1;
  state.totalCount += 1;

  playTapSound();
  if (navigator.vibrate) {
    navigator.vibrate(15);
  }

  createFloatingPlus(e);
  createButtonRipple(e);
  updateComplimentMessage();
  checkMilestoneUnlocked();

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
  const { text, tag } = QuoteManager.getRandomQuote();

  complimentCard.classList.remove('bounce-pop');
  void complimentCard.offsetWidth;
  complimentCard.classList.add('bounce-pop');

  complimentText.innerText = text;
  currentPackTag.innerText = tag;
}

function checkMilestoneUnlocked() {
  PREDEFINED_MILESTONES.forEach(ms => {
    if (state.totalCount >= ms.count && !state.unlockedMilestones.includes(ms.count)) {
      state.unlockedMilestones.push(ms.count);
      showMilestoneModal(ms);
      playCelebrationSound();
      triggerConfetti();
    }
  });

  if (state.totalCount > 500 && state.totalCount % 100 === 0) {
    if (!state.unlockedMilestones.includes(state.totalCount)) {
      state.unlockedMilestones.push(state.totalCount);
      const { currentLevel } = getLevelInfo(state.totalCount);
      showMilestoneModal(currentLevel);
      playCelebrationSound();
      triggerConfetti();
    }
  }
}

function showMilestoneModal(ms) {
  modalTitle.innerText = ms.title;
  modalCountText.innerText = `累計 ${state.totalCount.toLocaleString()} 回タップ達成！`;
  modalQuoteText.innerText = ms.quote;
  modalBadgeEmoji.innerText = ms.badge.split(' ')[0] || '🎉';
  milestoneModal.classList.remove('hidden');
}

// ==========================================
// 9. MEMO FEATURE LOGIC
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
// 10. RENDERERS & HOME TODO LIST
// ==========================================
function renderHomeTodoList() {
  const container = document.getElementById('home-todo-list');
  const badge = document.getElementById('home-todo-badge');
  container.innerHTML = '';

  const activeTodos = state.todos.filter(isTodoActiveToday);
  const todayStr = getTodayDateString();
  const completedCount = activeTodos.filter(t => t.completedDates.includes(todayStr)).length;

  badge.innerText = `${completedCount}/${activeTodos.length} 完了`;

  if (activeTodos.length === 0) {
    container.innerHTML = `
      <div class="empty-memo-state" style="padding: 12px 0;">
        <p style="font-size: 0.78rem;">今日予定されている習慣ToDoはありません✨</p>
      </div>
    `;
    return;
  }

  activeTodos.forEach(todo => {
    const isCompleted = todo.completedDates.includes(todayStr);
    const item = document.createElement('div');
    item.className = `todo-item ${isCompleted ? 'completed' : ''}`;

    item.innerHTML = `
      <div class="todo-left-content">
        <div class="todo-custom-checkbox" title="完了チェックの切替">${isCompleted ? '✓' : ''}</div>
        <div class="todo-title-clickable" title="タップして修正・変更">
          <span class="todo-item-title">${escapeHTML(todo.title)}</span>
          <span class="todo-edit-icon">✏️</span>
        </div>
      </div>
      <div class="todo-right-controls">
        <span class="todo-repeat-tag">${getRepeatLabel(todo)}</span>
        <button class="todo-delete-btn home-todo-del-btn" data-id="${todo.id}" title="削除">🗑️ 削除</button>
      </div>
    `;

    // Toggle completion on checkbox click
    item.querySelector('.todo-custom-checkbox').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTodoCompletion(todo.id);
    });

    // Open Edit Modal on tapping title area
    item.querySelector('.todo-title-clickable').addEventListener('click', (e) => {
      e.stopPropagation();
      openEditTodoModal(todo);
    });

    // Delete item directly from Home Screen ToDo list
    item.querySelector('.home-todo-del-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteHabitTodo(todo.id);
    });

    container.appendChild(item);
  });
}

function renderTodoManagerList() {
  const container = document.getElementById('todo-manager-list');
  if (!container) return;
  container.innerHTML = '';

  if (state.todos.length === 0) {
    container.innerHTML = `
      <div class="empty-memo-state" style="padding: 12px 0;">
        <p style="font-size: 0.78rem;">登録されている習慣はありません</p>
      </div>
    `;
    return;
  }

  state.todos.forEach(todo => {
    const item = document.createElement('div');
    item.className = 'todo-item';

    item.innerHTML = `
      <div class="todo-title-clickable" style="display:flex; align-items:center; gap:8px;" title="タップして修正・変更">
        <span class="todo-item-title">${escapeHTML(todo.title)}</span>
        <span class="todo-edit-icon">✏️</span>
      </div>
      <div style="display:flex; align-items:center; gap:6px;">
        <span class="todo-repeat-tag">${getRepeatLabel(todo)}</span>
        <button class="todo-delete-btn manager-todo-del-btn" data-id="${todo.id}">🗑️ 削除</button>
      </div>
    `;

    item.querySelector('.todo-title-clickable').addEventListener('click', (e) => {
      e.stopPropagation();
      openEditTodoModal(todo);
    });

    item.querySelector('.manager-todo-del-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteHabitTodo(todo.id);
    });

    container.appendChild(item);
  });
}

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

  if (tabId === 'tab-counter') renderHomeTodoList();
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
  const activeCount = state.displayMode === 'today' ? state.todayCount : state.totalCount;
  counterDisplay.innerText = activeCount.toLocaleString('ja-JP');

  todayCountDisplay.innerText = `${state.todayCount.toLocaleString('ja-JP')}回`;
  totalCountDisplay.innerText = `${state.totalCount.toLocaleString('ja-JP')}回`;
  streakCountDisplay.innerText = `${state.streakCount}日目🔥`;
}

function renderLevelProgress() {
  const { currentLevel, nextLevel } = getLevelInfo(state.totalCount);

  userLevelBadge.innerText = currentLevel.badge;

  if (nextLevel) {
    const prevCount = currentLevel.count;
    const targetCount = nextLevel.count;
    const currentProgress = state.totalCount - prevCount;
    const range = targetCount - prevCount;
    const remaining = targetCount - state.totalCount;

    const percent = Math.min(100, Math.max(0, (currentProgress / range) * 100));

    levelNextText.innerText = `次の目標（${nextLevel.badge}）まで あと${remaining.toLocaleString()}回`;
    levelProgressFill.style.width = `${percent}%`;
  } else {
    levelNextText.innerText = `最高レベル達成！素晴らしい！`;
    levelProgressFill.style.width = `100%`;
  }
}

function renderRecords() {
  // 1. Render Quote Pack Selectors
  const packContainer = document.getElementById('quote-pack-selector');
  packContainer.innerHTML = '';

  Object.values(QUOTE_PACKS).forEach(pack => {
    const btn = document.createElement('button');
    const isActive = (state.activeQuotePack || 'standard') === pack.id;
    btn.className = `pack-option-btn ${isActive ? 'active' : ''}`;
    btn.innerHTML = `
      <div class="pack-name-box">
        <span class="pack-icon">${pack.icon}</span>
        <div>
          <div class="pack-title">${pack.name}</div>
          <div class="pack-count-tag">${pack.messages.length}種類のメッセージ</div>
        </div>
      </div>
      <span class="pack-badge">${isActive ? '選択中' : '切り替える'}</span>
    `;

    btn.addEventListener('click', () => {
      QuoteManager.setActivePack(pack.id);
      renderRecords();
      updateComplimentMessage();
    });

    packContainer.appendChild(btn);
  });

  // 2. Render Todo Manager
  renderTodoManagerList();

  // 3. Render Badges Grid
  const badgesGrid = document.getElementById('badges-grid');
  badgesGrid.innerHTML = '';

  PREDEFINED_MILESTONES.forEach(ms => {
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

  // 4. Render Unlocked Quotes
  const quotesList = document.getElementById('unlocked-quotes-list');
  quotesList.innerHTML = '';

  const unlockedMs = PREDEFINED_MILESTONES.filter(ms => state.unlockedMilestones.includes(ms.count));

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
  renderHomeTodoList();
  renderMemoList();
  renderRecords();
}
