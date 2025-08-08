// === Theme Toggle ===
// Switches between light and dark mode by toggling data-theme attribute
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Load saved theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
});

// === About Section Toggle ===
// Show/hide the About Me bio paragraph
document.getElementById('toggleAboutBtn').addEventListener('click', () => {
  const aboutText = document.getElementById('aboutText');
  aboutText.classList.toggle('hidden');
});

// === Live Input Preview ===
// Updates live preview text as user types their dream project
document.getElementById('liveInput')?.addEventListener('input', (e) => {
  document.getElementById('liveOutput').textContent = e.target.value;
});

// === Custom Form Validation ===
// Validates name, email, and message fields on form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // Clear previous errors and messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('formSuccess').textContent = '';

  // Get form input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let valid = true;

  // Name validation: at least 3 characters
  if (name.length < 3) {
    document.getElementById('nameError').textContent = 'Name must be at least 3 characters.';
    valid = false;
  }

  // Email validation: simple regex pattern
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email address.';
    valid = false;
  }

  // Message validation: at least 10 characters
  if (message.length < 10) {
    document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  // If all valid, show success message and reset form
  if (valid) {
    document.getElementById('formSuccess').textContent = 'Thanks for reaching out!';
    document.getElementById('contactForm').reset();
  }
});

// === Counter Game ===
// Increment, decrement, and reset a displayed counter value
let count = 0;
const countValue = document.getElementById('countValue');

document.getElementById('incrementBtn').addEventListener('click', () => {
  count++;
  countValue.textContent = count;
});

document.getElementById('decrementBtn').addEventListener('click', () => {
  count--;
  countValue.textContent = count;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  count = 0;
  countValue.textContent = count;
});

// === Collapsible FAQ Section ===
// Toggles visibility of answer paragraphs when questions are clicked
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});

// === Simple Dropdown Menu ===
// Toggles dropdown menu visibility on button click
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

// Close dropdown if clicking outside the dropdown button or menu
window.addEventListener('click', (e) => {
  if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add('hidden');
  }
});

// === Tabbed Interface ===
// Switches visible tab content and active tab button on click
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetTab = btn.dataset.tab;

    // Remove active classes from all tabs and contents
    tabButtons.forEach((b) => b.classList.remove('active'));
    tabContents.forEach((content) => content.classList.remove('active'));

    // Add active class to clicked tab and corresponding content
    btn.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
  });
});
