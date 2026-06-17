// State Management
let currentTab = 'dashboard';
let activeSubject = 'quant';
let currentWorkspaceTopic = null;
let currentWorkspaceSubject = null;

// Quiz State
let quizQuestions = [];
let quizUserAnswers = [];
let quizCurrentQuestionIndex = 0;
let quizTimerInterval = null;
let quizTimeElapsed = 0;

// Local news fallback data (SSC CGL Relevant Current Affairs)
const fallbackNews = [
  {
    title: "Press Information Bureau (PIB) Highlights: Cabinet Approves Key Infrastructure Projects",
    description: "Union Cabinet has approved multiple major rail-road connectivity projects across Andhra Pradesh, Bihar, and North-Eastern states, enhancing logistics corridors.",
    date: "June 17, 2026",
    link: "https://pib.gov.in",
    tag: "National"
  },
  {
    title: "Understanding Article 370 Judgment: Key Legal and Polity Concepts for General Awareness",
    description: "A comprehensive breakdown of legal definitions, historical context, and constitutional articles related to federal relations in India, frequently asked in Tier 2 GA.",
    date: "June 16, 2026",
    link: "#",
    tag: "Polity"
  },
  {
    title: "English Vocabulary Booster: 50 High-Frequency Idioms & Phrases for SSC CGL 2026",
    description: "An compiled list of phrases and idioms from recent TCS-pattern papers including detailed meanings, origins, and sentence examples.",
    date: "June 15, 2026",
    link: "#",
    tag: "English"
  },
  {
    title: "Economic Survey Snippets: Direct Tax Collections Show 18% Year-on-Year Growth",
    description: "Key statistics on direct tax collections, GST revenues, and GDP projections. Crucial data points for Economic questions in SSC General Awareness.",
    date: "June 14, 2026",
    link: "https://pib.gov.in",
    tag: "Economics"
  },
  {
    title: "DRDO Successfully Tests Next-Gen Anti-Radiation Missile (RudraM-II)",
    description: "The flight test was conducted from a Su-30MKI fighter aircraft off the coast of Odisha. Important update for Science & Tech syllabus in Tier 1 and 2.",
    date: "June 13, 2026",
    link: "https://pib.gov.in",
    tag: "Defense"
  }
];

// Active cloud run backend URL
let backendUrl = ""; // Will be populated dynamically if deployed

// Quotes array
const quotes = [
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" }
];

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initStreak();
  initQuote();
  updateProgressDisplays();
  filterSubject('quant', document.getElementById('pillQuant'));
  fetchNews();
  renderPlanner();
  updateCurrentDate();
});

// Update current date
function updateCurrentDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date();
  document.getElementById('currentDate').textContent = today.toLocaleDateString('en-US', options);
}

// Theme Switcher Logic
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const storedTheme = localStorage.getItem("theme") || "dark";
  
  document.documentElement.setAttribute("data-theme", storedTheme);
  themeToggle.checked = storedTheme === "dark";
  
  themeToggle.addEventListener("change", (e) => {
    const theme = e.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });
}

// Tab Switching
function switchTab(tabId) {
  currentTab = tabId;
  
  // Update nav link active classes
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => link.classList.remove("active"));
  
  // Update view visibility
  const views = document.querySelectorAll(".tab-view");
  views.forEach(view => view.classList.remove("active"));
  
  const activeView = document.getElementById(`view${capitalizeFirstLetter(tabId)}`);
  if (activeView) activeView.classList.add("active");
  
  // Set corresponding nav link as active
  let activeNav = null;
  if (tabId === 'dashboard') activeNav = document.getElementById('navDashboard');
  else if (tabId === 'planner') activeNav = document.getElementById('navPlanner');
  else if (tabId === 'syllabus') activeNav = document.getElementById('navSyllabus');
  else if (tabId === 'current-affairs') activeNav = document.getElementById('navCurrentAffairs');
  
  if (activeNav) activeNav.classList.add("active");
  
  // Update Page Title
  const titleMap = {
    'dashboard': 'Welcome Back, Aspirant',
    'planner': 'SSC CGL Study Planner',
    'syllabus': 'Syllabus Concepts & Practice',
    'current-affairs': 'Daily Current Affairs News'
  };
  document.getElementById('pageTitle').textContent = titleMap[tabId] || 'AspirantFlow';
  
  // Close sidebar on mobile after clicking
  const sidebar = document.getElementById("appSidebar");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  }

  // If entering syllabus tab and workspace is open, close it to show the grid
  if (tabId === 'syllabus') {
    closeWorkspace();
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById("appSidebar");
  sidebar.classList.toggle("open");
}

// Motivational Quotes
function initQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];
  document.getElementById("motivationalQuote").textContent = `"${selectedQuote.text}"`;
  document.getElementById("motivationalAuthor").textContent = `- ${selectedQuote.author}`;
}

// Streak Calculation
function initStreak() {
  const streakCountEl = document.getElementById("streakCount");
  let streak = parseInt(localStorage.getItem("studyStreak") || "0");
  const lastStudyDate = localStorage.getItem("lastStudyDate");
  const todayStr = new Date().toDateString();
  
  if (lastStudyDate) {
    const lastDate = new Date(lastStudyDate);
    const today = new Date(todayStr);
    const diffTime = Math.abs(today - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      // Studied yesterday, keep streak
    } else if (diffDays > 1) {
      // Missed more than a day, reset streak
      streak = 0;
      localStorage.setItem("studyStreak", "0");
    }
  } else {
    streak = 0;
  }
  
  streakCountEl.textContent = streak;
}

// Increment streak (called when a quiz is submitted successfully)
function incrementStreak() {
  let streak = parseInt(localStorage.getItem("studyStreak") || "0");
  const lastStudyDate = localStorage.getItem("lastStudyDate");
  const todayStr = new Date().toDateString();
  
  if (lastStudyDate !== todayStr) {
    streak += 1;
    localStorage.setItem("studyStreak", streak.toString());
    localStorage.setItem("lastStudyDate", todayStr);
    document.getElementById("streakCount").textContent = streak;
  }
}

// Syllabus Filters & Render
function filterSubject(subjectId, element) {
  activeSubject = subjectId;
  
  // Update subject pills active class
  const pills = document.querySelectorAll(".subject-pills .pill");
  pills.forEach(pill => pill.classList.remove("active"));
  if (element) element.classList.add("active");
  
  // Render topics grid
  renderTopics();
}

function renderTopics() {
  const topicsGrid = document.getElementById("topicsGrid");
  const subject = syllabusData[activeSubject];
  
  if (!subject) return;
  
  // Set custom subject color variable on the grid
  const colorsMap = {
    'quant': 'var(--color-quant)',
    'reasoning': 'var(--color-reasoning)',
    'english': 'var(--color-english)',
    'general': 'var(--color-general)'
  };
  topicsGrid.style.setProperty('--active-subject-color', colorsMap[activeSubject]);
  
  topicsGrid.innerHTML = '';
  
  subject.topics.forEach(topic => {
    const completed = isTopicCompleted(activeSubject, topic.id);
    const card = document.createElement("div");
    card.className = "glass-card topic-card";
    card.onclick = () => openWorkspace(activeSubject, topic.id);
    
    card.innerHTML = `
      <h4>${topic.title}</h4>
      <p>${topic.concept}</p>
      <div class="topic-card-footer">
        <span class="topic-status ${completed ? 'status-completed' : 'status-incomplete'}">
          <i class="${completed ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'}"></i>
          ${completed ? 'Completed' : 'Not Started'}
        </span>
        <span class="btn-icon-arrow">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    `;
    topicsGrid.appendChild(card);
  });
}

// Workspace Concept & Quiz View
function openWorkspace(subjectId, topicId) {
  const subject = syllabusData[subjectId];
  if (!subject) return;
  const topic = subject.topics.find(t => t.id === topicId);
  if (!topic) return;
  
  currentWorkspaceSubject = subjectId;
  currentWorkspaceTopic = topicId;
  
  // Hide topics grid and show workspace card
  document.getElementById("topicsGrid").classList.add("hidden");
  const workspace = document.getElementById("studyWorkspace");
  workspace.classList.remove("hidden");
  
  // Setup header
  document.getElementById("workspaceTitle").textContent = `${topic.title} - ${subject.title}`;
  
  // Render Concepts & Tricks
  document.getElementById("conceptText").textContent = topic.concept;
  
  const tricksList = document.getElementById("tricksList");
  tricksList.innerHTML = '';
  topic.tricks.forEach(trick => {
    const div = document.createElement("div");
    div.className = "trick-item";
    
    // Replace bullet formats or newlines with paragraph spacing
    let formattedText = trick.replace(/\n/g, "<br>");
    // Support basic markdown bolding
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    
    div.innerHTML = formattedText;
    tricksList.appendChild(div);
  });
  
  // Trigger MathJax typeset to render formulas beautifully
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
  
  // Switch to Concept Tab by default
  switchWorkspaceTab('concept');
  
  // Prepare Quiz Data
  quizQuestions = topic.questions;
  resetQuizState();
}

function closeWorkspace() {
  document.getElementById("studyWorkspace").classList.add("hidden");
  document.getElementById("topicsGrid").classList.remove("hidden");
  currentWorkspaceTopic = null;
  currentWorkspaceSubject = null;
  
  // Stop quiz timer if running
  clearInterval(quizTimerInterval);
  
  // Re-render topics to update completion badges
  renderTopics();
  updateProgressDisplays();
  renderPlanner();
}

function switchWorkspaceTab(type) {
  const tabs = document.querySelectorAll(".w-tab");
  tabs.forEach(t => t.classList.remove("active"));
  
  const panels = document.querySelectorAll(".workspace-panel");
  panels.forEach(p => p.classList.remove("active"));
  
  if (type === 'concept') {
    document.getElementById("tabConcept").classList.add("active");
    document.getElementById("panelConcept").classList.add("active");
  } else if (type === 'quiz') {
    document.getElementById("tabQuiz").classList.add("active");
    document.getElementById("panelQuiz").classList.add("active");
    // Start quiz timer on first enter
    if (quizQuestions.length > 0 && !quizTimerInterval && document.getElementById("quizResults").classList.contains("hidden")) {
      startQuizTimer();
    }
  }
}

// Quiz Implementation
function resetQuizState() {
  quizUserAnswers = new Array(quizQuestions.length).fill(null);
  quizCurrentQuestionIndex = 0;
  quizTimeElapsed = 0;
  clearInterval(quizTimerInterval);
  quizTimerInterval = null;
  
  // Hide results and show questions
  document.getElementById("quizResults").classList.add("hidden");
  document.getElementById("questionCard").classList.remove("hidden");
  document.getElementById("quizTimerContainer").classList.remove("hidden");
  document.getElementById("quizProgressText").classList.remove("hidden");
  document.getElementById("btnPrevQuestion").classList.remove("hidden");
  document.getElementById("btnNextQuestion").classList.remove("hidden");
  
  loadQuestion(0);
}

function startQuizTimer() {
  quizTimeElapsed = 0;
  updateTimerDisplay();
  
  quizTimerInterval = setInterval(() => {
    quizTimeElapsed++;
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(quizTimeElapsed / 60).toString().padStart(2, '0');
  const seconds = (quizTimeElapsed % 60).toString().padStart(2, '0');
  document.getElementById("quizTimerText").textContent = `${minutes}:${seconds}`;
}

function loadQuestion(index) {
  quizCurrentQuestionIndex = index;
  const question = quizQuestions[index];
  
  document.getElementById("quizProgressText").textContent = `Question ${index + 1} of ${quizQuestions.length}`;
  
  const questionCard = document.getElementById("questionCard");
  questionCard.innerHTML = `
    <h3>${question.text}</h3>
    <div class="quiz-options">
      ${question.options.map((option, i) => `
        <button class="option-btn ${quizUserAnswers[index] === i ? 'selected' : ''}" onclick="selectOption(${i})">
          <span class="option-index">${String.fromCharCode(65 + i)}</span>
          <span>${option}</span>
        </button>
      `).join('')}
    </div>
  `;
  
  // Enable/disable buttons
  document.getElementById("btnPrevQuestion").disabled = index === 0;
  
  const isLast = index === quizQuestions.length - 1;
  if (isLast) {
    document.getElementById("btnNextQuestion").classList.add("hidden");
    document.getElementById("btnSubmitQuiz").classList.remove("hidden");
  } else {
    document.getElementById("btnNextQuestion").classList.remove("hidden");
    document.getElementById("btnSubmitQuiz").classList.add("hidden");
  }
}

function selectOption(optionIndex) {
  quizUserAnswers[quizCurrentQuestionIndex] = optionIndex;
  
  // Re-highlight options
  const optionButtons = document.querySelectorAll(".option-btn");
  optionButtons.forEach((btn, i) => {
    if (i === optionIndex) btn.classList.add("selected");
    else btn.classList.remove("selected");
  });
}

function prevQuestion() {
  if (quizCurrentQuestionIndex > 0) {
    loadQuestion(quizCurrentQuestionIndex - 1);
  }
}

function nextQuestion() {
  if (quizCurrentQuestionIndex < quizQuestions.length - 1) {
    loadQuestion(quizCurrentQuestionIndex + 1);
  }
}

function submitQuiz() {
  // Check if all answered
  const unanswered = quizUserAnswers.findIndex(ans => ans === null);
  if (unanswered !== -1) {
    alert("Please answer all questions before submitting.");
    loadQuestion(unanswered);
    return;
  }
  
  clearInterval(quizTimerInterval);
  
  // Calculate Score
  let score = 0;
  quizQuestions.forEach((q, idx) => {
    if (quizUserAnswers[idx] === q.answer) {
      score++;
    }
  });
  
  // Update completion status in local storage
  // If user scores 3 or more (60%), mark as completed
  const isSuccess = score >= 3;
  if (isSuccess) {
    markTopicCompleted(currentWorkspaceSubject, currentWorkspaceTopic);
    incrementStreak();
  }
  
  // Show Results View
  document.getElementById("questionCard").classList.add("hidden");
  document.getElementById("quizTimerContainer").classList.add("hidden");
  document.getElementById("quizProgressText").classList.add("hidden");
  document.getElementById("btnPrevQuestion").classList.add("hidden");
  document.getElementById("btnNextQuestion").classList.add("hidden");
  document.getElementById("btnSubmitQuiz").classList.add("hidden");
  
  const resultsDiv = document.getElementById("quizResults");
  resultsDiv.classList.remove("hidden");
  
  document.getElementById("quizScoreVal").textContent = `${score}/${quizQuestions.length}`;
  
  const feedbackEl = document.getElementById("quizScoreFeedback");
  if (score === 5) {
    feedbackEl.innerHTML = "🏆 <strong>Outstanding! Perfect Score!</strong> You have fully cleared the concept.";
  } else if (score >= 3) {
    feedbackEl.innerHTML = "🎉 <strong>Well Done!</strong> You passed the concept assessment and marked it completed.";
  } else {
    feedbackEl.innerHTML = "❌ <strong>Try Again:</strong> You scored less than 3/5. Study the concepts and tricks, review the explanations below, and try again to mark this topic completed.";
  }
  
  // Render explanations list
  const explanationsList = document.getElementById("explanationsList");
  explanationsList.innerHTML = '';
  
  quizQuestions.forEach((q, idx) => {
    const isCorrect = quizUserAnswers[idx] === q.answer;
    const div = document.createElement("div");
    div.className = "explanation-item";
    
    div.innerHTML = `
      <div class="explanation-q-title">
        <i class="fa-solid ${isCorrect ? 'fa-circle-check ex-correct' : 'fa-circle-xmark ex-incorrect'}"></i>
        <span>Question ${idx + 1}: ${q.text}</span>
      </div>
      <div>Your Answer: <strong>${q.options[quizUserAnswers[idx]]}</strong></div>
      ${!isCorrect ? `<div>Correct Answer: <strong class="ex-correct">${q.options[q.answer]}</strong></div>` : ''}
      <div class="explanation-details">
        <strong>Detailed Explanation:</strong><br>
        ${q.explanation.replace(/\n/g, "<br>")}
      </div>
    `;
    explanationsList.appendChild(div);
  });
  
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

function restartQuiz() {
  resetQuizState();
  startQuizTimer();
}

// LocalStorage Progress Tracking
function isTopicCompleted(subjectId, topicId) {
  const completedTopics = JSON.parse(localStorage.getItem("completedTopics") || "{}");
  return completedTopics[`${subjectId}_${topicId}`] === true;
}

function markTopicCompleted(subjectId, topicId) {
  const completedTopics = JSON.parse(localStorage.getItem("completedTopics") || "{}");
  completedTopics[`${subjectId}_${topicId}`] = true;
  localStorage.setItem("completedTopics", JSON.stringify(completedTopics));
  
  // Sync checkbox in study planner if generated
  syncPlannerCheckboxes();
}

function markTopicIncomplete(subjectId, topicId) {
  const completedTopics = JSON.parse(localStorage.getItem("completedTopics") || "{}");
  delete completedTopics[`${subjectId}_${topicId}`];
  localStorage.setItem("completedTopics", JSON.stringify(completedTopics));
  
  // Sync checkbox in study planner if generated
  syncPlannerCheckboxes();
}

// Calculate progress percentage
function getSubjectProgress(subjectId) {
  const subject = syllabusData[subjectId];
  if (!subject) return 0;
  
  const total = subject.topics.length;
  let completed = 0;
  subject.topics.forEach(t => {
    if (isTopicCompleted(subjectId, t.id)) {
      completed++;
    }
  });
  
  return total > 0 ? Math.round((completed / total) * 100) : 0;
}

function updateProgressDisplays() {
  const subjects = ['quant', 'reasoning', 'english', 'general'];
  
  subjects.forEach(sub => {
    const progress = getSubjectProgress(sub);
    document.getElementById(`${sub}Progress`).style.width = `${progress}%`;
    document.getElementById(`${sub}ProgressText`).textContent = `${progress}%`;
  });
}

// Study Planner Generator (Roadmap)
function generatePlanner() {
  const duration = parseInt(document.getElementById("plannerDuration").value);
  const hours = parseInt(document.getElementById("plannerHours").value);
  
  // Assemble all topics from the syllabus
  const allTopics = [];
  Object.keys(syllabusData).forEach(subjectId => {
    syllabusData[subjectId].topics.forEach(topic => {
      allTopics.push({
        subjectId: subjectId,
        subjectTitle: syllabusData[subjectId].title,
        id: topic.id,
        title: topic.title,
        concept: topic.concept
      });
    });
  });
  
  // Distribute topics into weeks
  // Let's assume an average CGL syllabus contains 15-20 topics. Here we have a small set, but we can distribute them.
  // Express = 12 weeks, Standard = 26 weeks, Foundation = 52 weeks
  const totalWeeks = duration === 90 ? 12 : duration === 180 ? 24 : 48;
  const planWeeks = [];
  
  // Distribute topics over weeks
  for (let w = 0; w < totalWeeks; w++) {
    planWeeks.push({
      weekNumber: w + 1,
      days: []
    });
  }
  
  // Simple algorithm to distribute topics round-robin
  allTopics.forEach((topic, idx) => {
    const targetWeekIdx = idx % totalWeeks;
    const targetDayIdx = Math.floor(idx / totalWeeks) % 6 + 1; // Days 1 to 6
    
    let weekObj = planWeeks[targetWeekIdx];
    let dayObj = weekObj.days.find(d => d.dayNumber === targetDayIdx);
    
    if (!dayObj) {
      dayObj = { dayNumber: targetDayIdx, topics: [] };
      weekObj.days.push(dayObj);
    }
    
    dayObj.topics.push(topic);
  });
  
  // Sort days in each week
  planWeeks.forEach(week => {
    week.days.sort((a, b) => a.dayNumber - b.dayNumber);
  });
  
  const plannerState = {
    duration: duration,
    hours: hours,
    weeks: planWeeks,
    createdAt: new Date().toDateString()
  };
  
  localStorage.setItem("studyPlanner", JSON.stringify(plannerState));
  renderPlanner();
}

function renderPlanner() {
  const plannerData = localStorage.getItem("studyPlanner");
  const timelineWeeksEl = document.getElementById("timelineWeeks");
  const dashboardChecklistEl = document.getElementById("todayChecklist");
  
  if (!plannerData) {
    document.getElementById("dashboardPlannerType").textContent = "No active plan";
    return;
  }
  
  const plan = JSON.parse(plannerData);
  document.getElementById("dashboardPlannerType").textContent = `${plan.duration}-Day Plan (${plan.hours}h/Day)`;
  
  timelineWeeksEl.innerHTML = '';
  
  let totalTopics = 0;
  let completedTopics = 0;
  
  plan.weeks.forEach(week => {
    // Generate checklist of topics in this week
    let weekTopicsList = [];
    week.days.forEach(day => {
      day.topics.forEach(topic => {
        weekTopicsList.push({ ...topic, dayNumber: day.dayNumber });
      });
    });
    
    if (weekTopicsList.length === 0) return;
    
    const totalInWeek = weekTopicsList.length;
    let completedInWeek = 0;
    weekTopicsList.forEach(t => {
      totalTopics++;
      if (isTopicCompleted(t.subjectId, t.id)) {
        completedInWeek++;
        completedTopics++;
      }
    });
    
    const weekProgressPercent = Math.round((completedInWeek / totalInWeek) * 100);
    
    const weekCard = document.createElement("div");
    weekCard.className = "timeline-week-card";
    
    weekCard.innerHTML = `
      <div class="week-header" onclick="toggleWeekCollapse(this)">
        <h4><i class="fa-regular fa-calendar-check"></i> Week ${week.weekNumber}</h4>
        <div class="week-progress-container">
          <span class="week-progress-text">${completedInWeek}/${totalInWeek} Topics (${weekProgressPercent}%)</span>
          <div class="progress-bar-container w-100">
            <div class="progress-bar" style="width: ${weekProgressPercent}%; background-color: var(--primary)"></div>
          </div>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      
      <div class="week-days-grid">
        ${week.days.map(day => `
          <div class="day-card">
            <div class="day-title">
              Day ${day.dayNumber}
              <span class="badge">Study Target</span>
            </div>
            <div class="day-topics">
              ${day.topics.map(topic => {
                const isCompleted = isTopicCompleted(topic.subjectId, topic.id);
                return `
                  <label class="day-topic-item ${isCompleted ? 'completed' : ''}">
                    <input type="checkbox" class="planner-checkbox" 
                           data-subject="${topic.subjectId}" 
                           data-topic="${topic.id}" 
                           ${isCompleted ? 'checked' : ''} 
                           onchange="handlePlannerCheckboxChange(this)">
                    <span>[${getSubjectAbbr(topic.subjectId)}] ${topic.title}</span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
    timelineWeeksEl.appendChild(weekCard);
  });
  
  // Update overall progress info
  const overallPercent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  const progressPercentEl = document.getElementById("plannerProgressPercent");
  if (progressPercentEl) progressPercentEl.textContent = `Plan Progress: ${overallPercent}%`;
  
  const overallProgressEl = document.getElementById("plannerOverallProgress");
  if (overallProgressEl) overallProgressEl.style.width = `${overallPercent}%`;
  
  // Render Dashboard checklist (Show current incomplete items first)
  renderDashboardChecklist(plan);
}

function getSubjectAbbr(subjectId) {
  const map = {
    'quant': 'Quant',
    'reasoning': 'Reason',
    'english': 'Eng',
    'general': 'GA'
  };
  return map[subjectId] || 'Topic';
}

function toggleWeekCollapse(headerEl) {
  const gridEl = headerEl.nextElementSibling;
  const icon = headerEl.querySelector(".fa-chevron-down, .fa-chevron-right");
  
  if (gridEl.style.display === "none") {
    gridEl.style.display = "grid";
    icon.className = "fa-solid fa-chevron-down";
  } else {
    gridEl.style.display = "none";
    icon.className = "fa-solid fa-chevron-right";
  }
}

function handlePlannerCheckboxChange(checkbox) {
  const subjectId = checkbox.dataset.subject;
  const topicId = checkbox.dataset.topic;
  
  if (checkbox.checked) {
    markTopicCompleted(subjectId, topicId);
  } else {
    markTopicIncomplete(subjectId, topicId);
  }
  
  // Re-render planner to update counts
  renderPlanner();
  updateProgressDisplays();
}

function syncPlannerCheckboxes() {
  const checkboxes = document.querySelectorAll(".planner-checkbox");
  checkboxes.forEach(box => {
    const subjectId = box.dataset.subject;
    const topicId = box.dataset.topic;
    box.checked = isTopicCompleted(subjectId, topicId);
    
    // update parent class
    const parent = box.closest(".day-topic-item");
    if (parent) {
      if (box.checked) parent.classList.add("completed");
      else parent.classList.remove("completed");
    }
  });
}

function renderDashboardChecklist(plan) {
  const checklistEl = document.getElementById("todayChecklist");
  checklistEl.innerHTML = '';
  
  let todaysTopics = [];
  
  // Find the first week that is not 100% completed
  let targetWeek = null;
  for (let week of plan.weeks) {
    let weekComplete = true;
    for (let day of week.days) {
      for (let topic of day.topics) {
        if (!isTopicCompleted(topic.subjectId, topic.id)) {
          weekComplete = false;
          break;
        }
      }
      if (!weekComplete) break;
    }
    if (!weekComplete) {
      targetWeek = week;
      break;
    }
  }
  
  if (!targetWeek && plan.weeks.length > 0) {
    // Everything is completed!
    checklistEl.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-circle-check" style="color: var(--success)"></i>
        <p><strong>Congratulations!</strong> You have covered all scheduled topics in your plan. Go ahead and start a new roadmap!</p>
        <button class="btn btn-primary" onclick="switchTab('planner')">Reconfigure Planner</button>
      </div>
    `;
    return;
  }
  
  // Get all incomplete topics in this target week
  targetWeek.days.forEach(day => {
    day.topics.forEach(topic => {
      if (!isTopicCompleted(topic.subjectId, topic.id)) {
        todaysTopics.push({ ...topic, weekNumber: targetWeek.weekNumber, dayNumber: day.dayNumber });
      }
    });
  });
  
  // Limit to 4 tasks on dashboard to avoid overload
  const displayTasks = todaysTopics.slice(0, 4);
  
  if (displayTasks.length === 0) {
    checklistEl.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-circle-check" style="color: var(--success)"></i>
        <p>No pending topics for this week! Great job. Move to the next week in your planner tab.</p>
        <button class="btn btn-primary" onclick="switchTab('planner')">Go to Planner</button>
      </div>
    `;
    return;
  }
  
  displayTasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "checklist-item";
    div.innerHTML = `
      <input type="checkbox" class="checklist-checkbox" 
             data-subject="${task.subjectId}" 
             data-topic="${task.id}" 
             onclick="handleDashboardCheckbox(this)">
      <div class="checklist-details">
        <h4>${task.title}</h4>
        <p>Subject: ${task.subjectTitle} &bull; Week ${task.weekNumber}, Day ${task.dayNumber}</p>
      </div>
      <button class="btn btn-text" onclick="switchTab('syllabus'); openWorkspace('${task.subjectId}', '${task.id}');">Study <i class="fa-solid fa-arrow-right"></i></button>
    `;
    checklistEl.appendChild(div);
  });
}

function handleDashboardCheckbox(checkbox) {
  const subjectId = checkbox.dataset.subject;
  const topicId = checkbox.dataset.topic;
  
  if (checkbox.checked) {
    markTopicCompleted(subjectId, topicId);
    checkbox.closest(".checklist-item").classList.add("completed");
  } else {
    markTopicIncomplete(subjectId, topicId);
    checkbox.closest(".checklist-item").classList.remove("completed");
  }
  
  // Delay re-render briefly for visual feedback
  setTimeout(() => {
    renderPlanner();
    updateProgressDisplays();
  }, 400);
}

// Current Affairs News Fetcher
async function fetchNews(forceSync = false) {
  const newsGrid = document.getElementById("newsGrid");
  const dashboardNewsList = document.getElementById("dashboardNewsList");
  
  if (forceSync) {
    if (newsGrid) newsGrid.innerHTML = `
      <div class="loading-state py-40">
        <i class="fa-solid fa-circle-notch fa-spin"></i>
        <p>Syncing latest news from live feeds...</p>
      </div>
    `;
    if (dashboardNewsList) dashboardNewsList.innerHTML = `<div class="loading-state"><i class="fa-solid fa-circle-notch fa-spin"></i></div>`;
  }
  
  let newsList = [...mockCurrentAffairs];
  
  try {
    // Fetch live Indian headlines from Saurav's NewsAPI mirror (highly stable and CORS-enabled)
    const response = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json");
    if (response.ok) {
      const data = await response.json();
      if (data && data.articles) {
        // Map live articles to CGL Current Affairs format
        const liveArticles = data.articles.slice(0, 10).map(art => {
          const pubDate = new Date(art.publishedAt);
          const cleanDate = isNaN(pubDate) ? "Today" : pubDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
          
          let description = art.description || art.content || "";
          if (description.length > 200) {
            description = description.substring(0, 200) + "...";
          }
          
          // Classify topic
          let tag = "National";
          const text = (art.title + " " + description).toUpperCase();
          if (text.includes("ECONOM") || text.includes("TAX") || text.includes("BANK") || text.includes("MARKET") || text.includes("RUPEE")) tag = "Economy";
          else if (text.includes("SCIENCE") || text.includes("SPACE") || text.includes("ISRO") || text.includes("DRDO") || text.includes("NASA") || text.includes("TECH")) tag = "Science & Tech";
          else if (text.includes("COURT") || text.includes("JUDGE") || text.includes("CONSTITUTION") || text.includes("BILL") || text.includes("ARTICLE") || text.includes("GOVERNMENT") || text.includes("PARLIAMENT") || text.includes("POLITICAL")) tag = "Polity";
          else if (text.includes("RAILWAY") || text.includes("METRO") || text.includes("HIGHWAY") || text.includes("PORT") || text.includes("INFRA")) tag = "Infrastructure";
          else if (text.includes("ARMY") || text.includes("DEFENSE") || text.includes("NAVY") || text.includes("MISSILE") || text.includes("DRDO")) tag = "Defense";
          else if (text.includes("CRICKET") || text.includes("SPORTS") || text.includes("OLYMPICS") || text.includes("IPL")) tag = "Sports";

          return {
            title: art.title,
            description: description,
            date: cleanDate,
            link: art.url,
            tag: tag
          };
        });
        
        // Merge lists (Live news prepended, then mock CGL specific news)
        newsList = [...liveArticles, ...mockCurrentAffairs];
        
        // De-duplicate by title
        const seen = new Set();
        newsList = newsList.filter(item => {
          const k = item.title.toLowerCase();
          return seen.has(k) ? false : seen.add(k);
        });
      }
    }
  } catch (error) {
    console.warn("Live news fetch failed. Falling back to embedded current affairs data.", error);
  }
  
  renderNewsGrid(newsList);
  renderDashboardNews(newsList);
}

function renderNewsGrid(newsList) {
  const newsGrid = document.getElementById("newsGrid");
  if (!newsGrid) return;
  
  newsGrid.innerHTML = '';
  
  if (newsList.length === 0) {
    newsGrid.innerHTML = `
      <div class="empty-state py-40">
        <i class="fa-solid fa-face-frown"></i>
        <p>No current affairs found at the moment. Try again later.</p>
      </div>
    `;
    return;
  }
  
  newsList.forEach(news => {
    const card = document.createElement("div");
    card.className = "glass-card news-card";
    
    card.innerHTML = `
      <div class="news-card-header">
        <span class="news-tag">${news.tag || 'General'}</span>
        <span class="date-display">${news.date}</span>
      </div>
      <h3>${news.title}</h3>
      <p>${news.description}</p>
      <div class="news-card-footer">
        <span>Source: Official Feeds</span>
        ${news.link && news.link !== '#' ? `<a href="${news.link}" target="_blank">Read Source <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
      </div>
    `;
    newsGrid.appendChild(card);
  });
}

function renderDashboardNews(newsList) {
  const dashboardNewsList = document.getElementById("dashboardNewsList");
  if (!dashboardNewsList) return;
  
  dashboardNewsList.innerHTML = '';
  
  const previewList = newsList.slice(0, 3);
  
  if (previewList.length === 0) {
    dashboardNewsList.innerHTML = `<p class="text-muted">No news snippets available.</p>`;
    return;
  }
  
  previewList.forEach(news => {
    const item = document.createElement("div");
    item.className = "news-snippet";
    item.innerHTML = `
      <span class="news-date">${news.date} &bull; ${news.tag || 'General'}</span>
      <h4>${news.title}</h4>
      <p>${news.description.substring(0, 100)}...</p>
    `;
    dashboardNewsList.appendChild(item);
  });
}

function filterNews() {
  const query = document.getElementById("searchNews").value.toLowerCase();
  
  // Selectively search local copy
  const filtered = fallbackNews.filter(news => {
    return news.title.toLowerCase().includes(query) || 
           news.description.toLowerCase().includes(query) || 
           (news.tag && news.tag.toLowerCase().includes(query));
  });
  
  renderNewsGrid(filtered);
}

// Helper Utilities
function capitalizeFirstLetter(string) {
  if (!string) return '';
  // Convert current-affairs to CurrentAffairs
  if (string.includes('-')) {
    return string.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
