'use client'

import { useState, useEffect } from 'react';

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@300;400;600&family=DM+Sans:wght@400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #ffffff;
  color: #1e293b;
  line-height: 1.6;
}

/* ============================================
   HEADER
   ============================================ */

header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.header-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 48px;
}

.header-top {
  display: flex;
  align-items: center;
  padding: 16px 0 12px 0;
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.header-logo .logo-text h1 {
  font-family: 'Lora', serif;
  font-size: 20px;
  font-weight: 300;
  color: #475569;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.header-logo .logo-text p {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  color: #64748b;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-top: 2px;
}

/* ============================================
   NAVIGATION - 2-ROW GRID
   ============================================ */

.nav-grid {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto auto;
  gap: 0;
  padding: 0 0 0 0;
  border-top: 1px solid #f1f5f9;
}

.nav-tab {
  padding: 10px 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  white-space: nowrap;
  text-align: center;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.nav-tab:hover {
  color: #1e293b;
  background: #f8fafc;
}

.nav-tab.active {
  color: #475569;
  font-weight: 600;
  border-bottom-color: #475569;
}

/* Mobile hamburger */
.mobile-toggle {
  display: none;
  background: none;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 18px;
  color: #475569;
  margin-left: auto;
}

@media (max-width: 768px) {
  .header-inner {
    padding: 0 16px;
  }
  .mobile-toggle {
    display: block;
  }
  .nav-grid {
    display: none;
  }
  .nav-grid.open {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-bottom: 8px;
  }
  .nav-grid.open .nav-tab {
    text-align: left;
    padding: 10px 0;
    border-bottom: 1px solid #f1f5f9;
  }
}

/* ============================================
   MAIN CONTENT
   ============================================ */

.main-content {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 48px;
}

@media (max-width: 768px) {
  .main-content {
    padding: 40px 16px;
  }
}

/* ============================================
   HERO
   ============================================ */

.hero {
  background: linear-gradient(135deg, #0f172a 0%, #1a2744 100%);
  border-radius: 20px;
  padding: 100px;
  margin-bottom: 60px;
  color: white;
  overflow: hidden;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: -200px;
  right: -100px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -150px;
  left: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 191, 165, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text h1 {
  font-family: 'Lora', serif;
  font-size: 56px;
  font-weight: 300;
  margin-bottom: 28px;
  line-height: 1.1;
  letter-spacing: -1px;
}

.hero-text p {
  font-size: 16px;
  color: #cbd5e1;
  margin-bottom: 40px;
  line-height: 1.8;
  max-width: 520px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
}

.hero-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pillar-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  position: relative;
  z-index: 1;
  margin-top: 60px;
}

.pillar-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.pillar-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.pillar-card.navy::before { background: #475569; }
.pillar-card.teal::before { background: #00bfa5; }
.pillar-card.gold::before { background: #fbbf24; }

.pillar-card h3 {
  font-family: 'Lora', serif;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 8px;
  color: white;
}

.pillar-card p {
  font-size: 14px;
  color: #94a3b8;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 1024px) {
  .hero {
    padding: 60px;
  }
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-text h1 {
    font-size: 40px;
  }
  .hero-icon {
    display: none;
  }
  .pillar-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 24px;
    border-radius: 12px;
  }
  .hero-text h1 {
    font-size: 32px;
  }
}

/* ============================================
   BUTTONS
   ============================================ */

.btn {
  padding: 14px 32px;
  border-radius: 8px;
  border: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: #2563eb;
  color: white;
}

.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
}

.btn-secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-outline {
  background: transparent;
  border: 2px solid #e2e8f0;
  color: #64748b;
}

.btn-outline:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
  color: #475569;
}

/* ============================================
   SECTION TYPOGRAPHY
   ============================================ */

.section-title {
  font-family: 'Lora', serif;
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 12px;
  color: #1e293b;
  letter-spacing: -0.5px;
}

.section-subtitle {
  font-size: 16px;
  color: #64748b;
  margin-bottom: 48px;
  line-height: 1.8;
  max-width: 800px;
}

/* ============================================
   CARDS & CONTAINERS
   ============================================ */

.card-white {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 32px;
  transition: box-shadow 0.2s ease;
}

.card-white:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.card-header {
  background: linear-gradient(135deg, #0f172a 0%, #1a2744 100%);
  color: white;
  padding: 40px;
  border-radius: 12px 12px 0 0;
  margin: -40px -40px 32px -40px;
}

.card-header h2 {
  font-family: 'Lora', serif;
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 8px;
}

.card-header p {
  color: #cbd5e1;
  font-size: 14px;
}

/* ============================================
   GRIDS
   ============================================ */

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .grid-3, .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}

.box {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;
}

.box:hover {
  border-color: #cbd5e1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

/* ============================================
   COLOR SWATCHES
   ============================================ */

.color-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

@media (max-width: 768px) {
  .color-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.color-swatch {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.color-swatch:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.color-display {
  height: 120px;
}

.color-specs {
  padding: 16px;
  font-size: 12px;
  background: white;
}

.color-name {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 6px;
  font-size: 13px;
}

.color-code {
  font-family: 'SF Mono', 'Fira Code', monospace;
  color: #64748b;
  line-height: 1.8;
  font-size: 11px;
}

/* ============================================
   TABLES
   ============================================ */

.spec-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.spec-table th {
  background: #f8fafc;
  padding: 14px 16px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #e2e8f0;
  color: #1e293b;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.spec-table td {
  padding: 14px 16px;
  border-bottom: 1px solid #f1f5f9;
  color: #475569;
}

.spec-table tr:hover td {
  background: #f8fafc;
}

/* ============================================
   ICON SHOWCASE
   ============================================ */

.icon-showcase {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

/* ============================================
   CHECKLIST & FLOW
   ============================================ */

.checklist-item {
  display: flex;
  gap: 14px;
  margin-bottom: 16px;
  align-items: flex-start;
}

.checklist-icon {
  width: 22px;
  height: 22px;
  background: #2563eb;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 11px;
  flex-shrink: 0;
  margin-top: 1px;
}

.checklist-text {
  font-size: 14px;
  color: #1e293b;
  line-height: 1.6;
}

.flow-diagram {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.flow-box {
  background: white;
  border: 2px solid #475569;
  border-radius: 8px;
  padding: 16px 28px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
}

.flow-arrow {
  font-size: 20px;
  color: #cbd5e1;
}

/* ============================================
   PLACEHOLDER SECTIONS
   ============================================ */

.placeholder-section {
  text-align: center;
  padding: 80px 40px;
  background: #f8fafc;
  border: 2px dashed #e2e8f0;
  border-radius: 16px;
}

.placeholder-section .placeholder-icon {
  width: 56px;
  height: 56px;
  background: #f1f5f9;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 24px;
  color: #94a3b8;
}

.placeholder-section h3 {
  font-family: 'Lora', serif;
  font-size: 20px;
  font-weight: 400;
  color: #475569;
  margin-bottom: 8px;
}

.placeholder-section p {
  font-size: 14px;
  color: #94a3b8;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ============================================
   PILLAR ACCENT BORDERS
   ============================================ */

.accent-navy { border-left: 3px solid #475569; }
.accent-teal { border-left: 3px solid #00bfa5; }
.accent-gold { border-left: 3px solid #fbbf24; }

/* ============================================
   DO / DON'T CARDS
   ============================================ */

.do-card {
  border: 1px solid #bbf7d0;
  background: #f0fdf4;
  border-radius: 12px;
  padding: 24px;
}

.dont-card {
  border: 1px solid #fecaca;
  background: #fef2f2;
  border-radius: 12px;
  padding: 24px;
}

/* ============================================
   REVIEW MODE
   ============================================ */

.review-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #0f172a;
  color: white;
  padding: 10px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  font-size: 13px;
  border-top: 3px solid #00bfa5;
}

.review-bar-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.review-bar-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00bfa5;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.review-bar-actions {
  display: flex;
  gap: 12px;
}

.review-bar-btn {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  padding: 6px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.review-bar-btn:hover {
  background: rgba(255,255,255,0.2);
}

.review-bar-btn.export {
  background: #00bfa5;
  border-color: #00bfa5;
}

.review-bar-btn.export:hover {
  background: #00a68e;
}

/* Inline review blocks */
.rb {
  border: 1.5px dashed #00bfa5;
  border-radius: 10px;
  overflow: hidden;
  background: #f0fdfa;
}

.rb-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background: linear-gradient(135deg, #0f172a, #1a2744);
}

.rb-header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rb-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #00bfa5;
}

.rb-label {
  color: #e2e8f0;
  font-size: 12px;
  font-weight: 500;
}

.rb-count {
  color: #94a3b8;
  font-size: 11px;
}

.rb-comments {
  padding: 12px 16px 0;
}

.rb-comment {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px 14px;
  margin-bottom: 8px;
  position: relative;
}

.rb-comment-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.rb-author {
  font-weight: 600;
  font-size: 12px;
  color: #1e293b;
}

.rb-time {
  font-size: 11px;
  color: #94a3b8;
}

.rb-text {
  font-size: 13px;
  color: #334155;
  line-height: 1.5;
  white-space: pre-wrap;
  padding-right: 48px;
}

.rb-actions {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.15s;
}

.rb-comment:hover .rb-actions {
  opacity: 1;
}

.rb-actions button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: #94a3b8;
  padding: 2px 6px;
  border-radius: 4px;
  transition: all 0.15s;
}

.rb-actions button:hover {
  color: #475569;
  background: #f1f5f9;
}

.rb-actions button:last-child:hover {
  color: #ef4444;
  background: #fef2f2;
}

.rb-edit-area {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rb-edit-input {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #00bfa5;
  border-radius: 6px;
  font-size: 13px;
  font-family: 'DM Sans', sans-serif;
  resize: vertical;
  min-height: 50px;
  color: #1e293b;
  line-height: 1.5;
}

.rb-edit-input:focus {
  outline: none;
}

.rb-edit-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.rb-save-btn, .rb-cancel-btn {
  padding: 5px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  font-family: 'DM Sans', sans-serif;
}

.rb-save-btn {
  background: #00bfa5;
  color: white;
}

.rb-save-btn:hover {
  background: #00a68e;
}

.rb-cancel-btn {
  background: #f1f5f9;
  color: #64748b;
}

.rb-cancel-btn:hover {
  background: #e2e8f0;
}

.rb-input-row {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
}

.rb-input {
  flex: 1;
  padding: 9px 14px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 13px;
  font-family: 'DM Sans', sans-serif;
  color: #1e293b;
  background: white;
  transition: border-color 0.2s;
}

.rb-input:focus {
  outline: none;
  border-color: #00bfa5;
}

.rb-input::placeholder {
  color: #94a3b8;
}

.rb-add-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: none;
  background: #00bfa5;
  color: white;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  flex-shrink: 0;
}

.rb-add-btn:hover {
  background: #00a68e;
}

.rb-add-btn:disabled {
  background: #cbd5e1;
  cursor: not-allowed;
}

.review-toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #0f172a;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 13px;
  z-index: 200;
  animation: toast-in 0.3s ease;
  border-left: 3px solid #00bfa5;
}

@keyframes toast-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

body.review-active {
  padding-bottom: 52px;
}

.nav-tab-wrapper {
  position: relative;
  display: flex;
}

.nav-tab-wrapper .nav-tab {
  flex: 1;
}

.tab-comment-dot {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #00bfa5;
  pointer-events: none;
}
`;

export default function Mockups() {
  const [activeTab, setActiveTab] = useState('hero');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [comments, setComments] = useState({});
  const [toast, setToast] = useState(null);

  // Review mode: activate via ?review=true URL param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('review') === 'true') {
      setReviewMode(true);
      document.body.classList.add('review-active');
    }
    try {
      const saved = localStorage.getItem('ws-review-comments');
      if (saved) setComments(JSON.parse(saved));
    } catch (e) { /* ignore */ }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('ws-review-comments', JSON.stringify(comments));
    } catch (e) { /* ignore */ }
  }, [comments]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const addComment = (blockKey, text, author = 'Steve') => {
    if (!text.trim()) return;
    const newComment = {
      id: Date.now(),
      text: text.trim(),
      author,
      time: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }),
    };
    setComments(prev => ({
      ...prev,
      [blockKey]: [...(prev[blockKey] || []), newComment],
    }));
  };

  const editComment = (blockKey, commentId, newText) => {
    setComments(prev => ({
      ...prev,
      [blockKey]: (prev[blockKey] || []).map(c =>
        c.id === commentId ? { ...c, text: newText, edited: true } : c
      ),
    }));
  };

  const deleteComment = (blockKey, commentId) => {
    setComments(prev => ({
      ...prev,
      [blockKey]: (prev[blockKey] || []).filter(c => c.id !== commentId),
    }));
  };

  const totalComments = Object.values(comments).reduce((sum, arr) => sum + arr.length, 0);

  const tabHasComments = (tabId) => {
    return Object.keys(comments).some(key => key.startsWith(tabId + ':') && comments[key].length > 0);
  };

  const exportComments = () => {
    const lines = [];
    const tabMap = {};
    tabs.forEach(t => tabMap[t.id] = t.label);
    Object.entries(comments).forEach(([blockKey, blockComments]) => {
      if (!blockComments || blockComments.length === 0) return;
      const [tabId, ...rest] = blockKey.split(':');
      const tabLabel = tabMap[tabId] || tabId;
      const subLabel = rest.join(':').replace(/-/g, ' ');
      lines.push(`\n--- ${tabLabel} > ${subLabel} ---`);
      blockComments.forEach(c => {
        lines.push(`[${c.time}] ${c.author}: ${c.text}${c.edited ? ' (edited)' : ''}`);
      });
    });
    if (lines.length === 0) {
      showToast('No comments to export');
      return;
    }
    const text = `WhiteSpace Brand System - Review Notes\nExported ${new Date().toLocaleDateString()}\n${lines.join('\n')}`;
    navigator.clipboard.writeText(text).then(() => {
      showToast('All notes copied to clipboard');
    }).catch(() => {
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'whitespace-review-notes.txt';
      a.click();
      URL.revokeObjectURL(url);
      showToast('Notes downloaded as file');
    });
  };

  const clearAllComments = () => {
    if (window.confirm('Clear all review notes? This cannot be undone.')) {
      setComments({});
      localStorage.removeItem('ws-review-comments');
      showToast('All notes cleared');
    }
  };

  // Inline review block component
  const ReviewBlock = ({ blockKey, label }) => {
    const [draft, setDraft] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');
    const blockComments = comments[blockKey] || [];
    if (!reviewMode) return null;

    return (
      <div className="rb" style={{ marginTop: '24px' }}>
        <div className="rb-header">
          <div className="rb-header-left">
            <div className="rb-dot"></div>
            <span className="rb-label">{label}</span>
          </div>
          <span className="rb-count">{blockComments.length}</span>
        </div>
        {blockComments.length > 0 && (
          <div className="rb-comments">
            {blockComments.map(c => (
              <div key={c.id} className="rb-comment">
                {editingId === c.id ? (
                  <div className="rb-edit-area">
                    <textarea
                      className="rb-edit-input"
                      value={editText}
                      onChange={e => setEditText(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                          editComment(blockKey, c.id, editText);
                          setEditingId(null);
                        }
                        if (e.key === 'Escape') setEditingId(null);
                      }}
                      autoFocus
                    />
                    <div className="rb-edit-actions">
                      <button className="rb-save-btn" onClick={() => { editComment(blockKey, c.id, editText); setEditingId(null); }}>Save</button>
                      <button className="rb-cancel-btn" onClick={() => setEditingId(null)}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="rb-comment-meta">
                      <span className="rb-author">{c.author}{c.edited ? ' \u00b7 edited' : ''}</span>
                      <span className="rb-time">{c.time}</span>
                    </div>
                    <div className="rb-text">{c.text}</div>
                    <div className="rb-actions">
                      <button onClick={() => { setEditingId(c.id); setEditText(c.text); }} title="Edit">{'\u270E'}</button>
                      <button onClick={() => deleteComment(blockKey, c.id)} title="Delete">{'\u2715'}</button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="rb-input-row">
          <input
            type="text"
            className="rb-input"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && draft.trim()) {
                addComment(blockKey, draft);
                setDraft('');
              }
            }}
            placeholder="Add a note..."
          />
          <button
            className="rb-add-btn"
            disabled={!draft.trim()}
            onClick={() => { addComment(blockKey, draft); setDraft(''); }}
          >+</button>
        </div>
      </div>
    );
  };

  const Icon = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="2.5 0 253.78 231.71" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-2.5, 0)">
        <path fill="#475569" d="M220.27,231.1c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.05c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
        <path fill="#fbbf24" d="M258.78,3.79c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
      </g>
      <g transform="translate(2.5, 0)">
        <path fill="#475569" d="M66.27,231.1c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21C0,10.5,8.75,1.75,19.25,1.75c3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
        <path fill="#00bfa5" d="M143.27.61c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V57.75C77,25.2,102.9,0,134.75,0c2.89,0,5.74.21,8.52.61Z"/>
      </g>
    </svg>
  );

  const tabs = [
    // Row 1 (11 items)
    { id: 'hero', label: 'Website Hero' },
    { id: 'brand-story', label: 'Brand Story' },
    { id: 'guidelines', label: 'Guidelines' },
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'logos', label: 'Logos' },
    { id: 'components', label: 'Components' },
    { id: 'voice', label: 'Voice' },
    { id: 'imagery', label: 'Imagery' },
    { id: 'certification', label: 'Certification' },
    { id: 'curriculum', label: 'Curriculum' },
    // Row 2 (11 items)
    { id: 'email', label: 'Email' },
    { id: 'social', label: 'Social' },
    { id: 'certificate', label: 'Certificate' },
    { id: 'presentation', label: 'Presentation' },
    { id: 'workshop', label: 'Workshop' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'dos', label: "Do's & Don'ts" },
    { id: 'accessibility', label: 'Accessibility' },
    { id: 'applications', label: 'Applications' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'implementation', label: 'Implementation' },
  ];

  return (
    <>
      <style>{styles}</style>
      
      {/* ==================== HEADER ==================== */}
      <header>
        <div className="header-inner">
          <div className="header-top">
            <div className="header-logo">
              <svg height="60" viewBox="0 0 940.29 233.84" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#f2f2f2" x="311.49" y="123.09" width="628.8" height="110.75"/>
                                <g transform="translate(-2.5, 0)">
                  <path fill="#475569" d="M220.27,231.92c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.87c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
                  <path fill="#fbbf24" d="M258.78,4.61c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21.82c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
                </g>
                <g transform="translate(2.5, 0)">
                  <path fill="#475569" d="M66.27,231.92c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21.82C0,11.32,8.75,2.57,19.25,2.57c3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
                  <path fill="#00bfa5" d="M143.27,1.43c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V58.57C77,26.02,102.9.82,134.75.82c2.89,0,5.74.21,8.52.61Z"/>
                </g>
                <path fill="#475569" d="M325.17,25.86l-1.44-4.33c-1.78-5.55-2.85-9.14-3.22-10.77l-6.22.22v-4.88h26.97v3.66c-3.04.15-5.18.65-6.44,1.5-1.26.85-1.89,2.24-1.89,4.16,0,1.78.37,3.92,1.11,6.44,1.33,4.96,3.11,10.51,5.33,16.65.37,1.11.81,2.42,1.33,3.94.52,1.52,1.11,3.27,1.78,5.27.44,1.55,1,3.26,1.67,5.11.67,1.85,1.15,3.18,1.44,4,1.48,4,2.59,7.18,3.33,9.55h.22c1.48-5.03,3-9.92,4.55-14.65,2.66-8.58,5.59-17.65,8.77-27.19,3.33-9.99,5.33-16.21,5.99-18.65h3.55c.89,3.04,2.4,7.79,4.55,14.26,2.15,6.48,3.7,11.16,4.66,14.04,2.22,6.37,3.74,10.88,4.55,13.54.59,2,1.55,5,2.89,8.99,1.48,4.29,2.66,7.96,3.55,10.99h.33c1.78-5.77,3.29-10.54,4.55-14.32,3.77-10.73,6.84-19.98,9.21-27.75.81-2.74,1.55-5.03,2.22-6.88,1.41-3.77,2.55-6.47,3.44-8.1l-8.88.33v-4.88h22.53v3.66c-2.66.3-4.68.85-6.05,1.67-1.37.82-2.59,2.28-3.66,4.38-1.07,2.11-2.42,5.57-4.05,10.38l-5.66,16.87c-5.92,17.98-10.69,31.93-14.32,41.85h-3.33l-20.76-59.38-19.54,59.38h-3.22l-19.87-59.05Z"/>
                <path fill="#475569" d="M430.73,80.48c2.14,0,3.7-.54,4.66-1.61.96-1.07,1.54-2.46,1.72-4.16.18-1.7.28-4.29.28-7.77V14.43c0-2.81.11-5.22.33-7.21l-7.88.44V3c4.44,0,7.6-.26,9.49-.78,1.89-.52,3.35-1.26,4.38-2.22h3.22v33.85c2.59-2.15,5.51-3.9,8.77-5.27,3.26-1.37,6.4-2.05,9.43-2.05,6.36,0,10.99,2,13.88,5.99,2.89,4,4.37,10.29,4.44,18.87l.11,20.65c0,3.33-.15,5.85-.44,7.55l6.99-.33v4.55h-22.64v-3.33c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.48-2.44,1.67-4.11.18-1.67.28-4.27.28-7.83v-15.54c0-6.36-1-11.12-3-14.26-2-3.14-5.14-4.72-9.44-4.72-2.74,0-5.46.65-8.16,1.94-2.7,1.3-4.87,2.94-6.49,4.94v32.75c0,2.89-.19,5.4-.56,7.55l6.99-.33v4.55h-22.64v-3.33Z"/>
                <path fill="#475569" d="M498.88,80.48c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.48-2.44,1.67-4.11.18-1.67.28-4.27.28-7.83v-25.31c0-2.15.15-4.55.44-7.21l-7.88.44v-4.66c4.37,0,7.49-.26,9.38-.78,1.89-.52,3.35-1.26,4.38-2.22h3.22v44.84c0,3.33-.15,5.85-.44,7.55l6.99-.33v4.55h-22.64v-3.33ZM505.76,14.26c-1.18-1.29-1.78-2.83-1.78-4.61s.61-3.33,1.83-4.66c1.22-1.33,2.61-2,4.16-2,1.7,0,3.12.65,4.27,1.94,1.15,1.3,1.72,2.87,1.72,4.72s-.61,3.31-1.83,4.61c-1.22,1.3-2.65,1.94-4.27,1.94s-2.92-.65-4.11-1.94Z"/>
                <path fill="#475569" d="M538.18,65.16l.22-32.19-8.55.11v-4.77c3.55-.07,6.57-1.68,9.05-4.83,2.48-3.14,4.31-6.72,5.49-10.71h3.77v15.54h18.65v4.33l-18.65.22c-.08,11.32-.13,19.17-.17,23.53-.04,4.37-.06,6.81-.06,7.33,0,5.25.63,9.16,1.89,11.71,1.26,2.55,3.44,3.83,6.55,3.83,1.92,0,3.83-.59,5.72-1.78,1.89-1.18,3.53-2.81,4.94-4.88l3,2.44c-2.89,4.29-5.74,7.12-8.55,8.49-2.81,1.37-5.55,2.05-8.21,2.05-10.14,0-15.17-6.81-15.1-20.42Z"/>
                <path fill="#475569" d="M588.96,81.97c-4.11-2.4-7.35-5.84-9.71-10.32-2.37-4.48-3.55-9.64-3.55-15.48,0-5.18,1.18-10.05,3.55-14.6,2.37-4.55,5.68-8.2,9.93-10.93,4.25-2.74,9.08-4.11,14.49-4.11,4.22,0,8.03.93,11.43,2.77,3.4,1.85,6.1,4.61,8.1,8.27s3,8.16,3,13.49l-39.07.67c-.07,8.88,1.39,15.8,4.38,20.76,3,4.96,7.64,7.44,13.93,7.44,3.4,0,6.9-.89,10.49-2.66,3.59-1.78,6.34-3.96,8.27-6.55l2.66,2.22c-2.81,4.29-6.46,7.48-10.93,9.55-4.48,2.07-8.86,3.11-13.15,3.11-5.11,0-9.71-1.2-13.82-3.61ZM615.76,47.06c0-4.44-1-8.25-3-11.43-2-3.18-5-4.77-8.99-4.77-9.18,0-14.62,5.4-16.32,16.21h28.31Z"/>
                <path fill="#475569" d="M652.78,84.14c-3.52-.96-6.6-2.37-9.27-4.22l.55,4.77h-5.77l-.67-23.64h4.33c.37,6.37,2.55,11.27,6.55,14.71,4,3.44,9.06,5.16,15.21,5.16,4.51,0,8.31-1.24,11.38-3.72,3.07-2.48,4.61-5.86,4.61-10.16,0-3.18-.87-5.9-2.61-8.16-1.74-2.26-3.88-4.14-6.44-5.66-2.55-1.52-6.01-3.27-10.38-5.27-4.96-2.37-8.9-4.44-11.82-6.22-2.92-1.78-5.42-4.12-7.49-7.05-2.07-2.92-3.11-6.53-3.11-10.82,0-2.96.68-5.92,2.05-8.88,1.37-2.96,3.74-5.48,7.1-7.55,3.37-2.07,7.83-3.11,13.38-3.11,3.33,0,6.68.43,10.04,1.28,3.37.85,6.46,2.31,9.27,4.38l-.44-4.77h5.66v24.42h-4c-.37-5.84-2.24-10.78-5.61-14.82-3.37-4.03-8.08-6.05-14.15-6.05-4.44,0-7.92,1.24-10.43,3.72-2.52,2.48-3.77,5.57-3.77,9.27,0,2.96.85,5.51,2.55,7.66,1.7,2.15,3.77,3.92,6.22,5.33,2.44,1.41,5.88,3.15,10.32,5.22,5.03,2.29,9.08,4.37,12.16,6.22,3.07,1.85,5.68,4.27,7.83,7.27,2.15,3,3.22,6.68,3.22,11.04s-1.02,7.81-3.05,10.99c-2.04,3.18-5.01,5.66-8.94,7.44-3.92,1.78-8.59,2.66-13.99,2.66-3.48,0-6.98-.48-10.49-1.44Z"/>
                <path fill="#475569" d="M697.9,108.78c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.46-2.41,1.61-4,.15-1.59.26-4.24.33-7.94l.22-53.61c0-3.11.15-5.51.44-7.21l-7.88.44v-4.66c4.37,0,7.36-.24,8.99-.72,1.63-.48,2.96-1.24,4-2.28h3.33c.29,3.63.44,5.62.44,5.99,2.22-2,4.88-3.61,7.99-4.83,3.11-1.22,6.18-1.83,9.21-1.83,4.37,0,8.4,1.13,12.1,3.39,3.7,2.26,6.68,5.48,8.94,9.66,2.26,4.18,3.39,9.01,3.39,14.49,0,6.14-1.3,11.6-3.89,16.37-2.59,4.77-6.05,8.49-10.38,11.16-4.33,2.66-9.01,4-14.04,4s-9.55-1.22-13.32-3.66v18.43c0,3.33-.15,5.84-.44,7.55l6.99-.33v4.55h-22.64v-3.33ZM736.14,77.92c2.55-2.15,4.53-5.14,5.94-8.99,1.4-3.85,2.11-8.21,2.11-13.1,0-6.66-1.43-12.3-4.27-16.93-2.85-4.62-7.09-6.94-12.71-6.94-2.44,0-4.81.59-7.1,1.78-2.29,1.18-4.29,2.66-5.99,4.44.07.52.11,2.77.11,6.77l-.11,31.86c3.77,2.89,8.1,4.33,12.99,4.33,3.48,0,6.49-1.07,9.05-3.22Z"/>
                <path fill="#475569" d="M768.89,81.92c-2.85-2.44-4.27-5.62-4.27-9.55,0-4.29,1.72-7.92,5.16-10.88,3.44-2.96,7.77-5.16,12.99-6.6,5.22-1.44,10.45-2.13,15.71-2.05v-6.88c0-4.81-.7-8.56-2.11-11.27-1.41-2.7-4.4-4.05-8.99-4.05-2.29,0-4.48.48-6.55,1.44-2.07.96-3.59,2.41-4.55,4.33.96,1.04,1.44,2.44,1.44,4.22,0,1.11-.41,2.16-1.22,3.16-.82,1-2,1.5-3.55,1.5s-2.77-.5-3.66-1.5c-.89-1-1.33-2.31-1.33-3.94,0-2.44.94-4.68,2.83-6.72,1.89-2.03,4.51-3.64,7.88-4.83,3.37-1.18,7.12-1.78,11.27-1.78,6.22,0,10.8,1.65,13.76,4.94,2.96,3.29,4.4,8.49,4.33,15.6l-.11,24.98c0,2.37-.15,4.88-.44,7.55l7.88-.44v4.66h-15.87c-.22-1.11-.48-3.22-.78-6.33-5.4,5.4-11.21,8.1-17.43,8.1-5.4,0-9.53-1.22-12.38-3.66ZM791.47,77.64c2.29-1.07,4.62-2.72,6.99-4.94-.07-1.11-.11-3-.11-5.66l.11-10.43c-6.07.22-11.47,1.46-16.21,3.72-4.74,2.26-7.1,5.72-7.1,10.38,0,2.74.81,4.85,2.44,6.33,1.63,1.48,3.7,2.22,6.22,2.22,2.81,0,5.37-.54,7.66-1.61Z"/>
                <path fill="#475569" d="M836.82,82.14c-4.18-2.29-7.49-5.59-9.93-9.88-2.44-4.29-3.66-9.36-3.66-15.21,0-5.18,1.24-10.12,3.72-14.82,2.48-4.7,5.92-8.49,10.32-11.38,4.4-2.89,9.38-4.33,14.93-4.33,4,0,7.55.63,10.66,1.89,3.11,1.26,5.53,2.92,7.27,5,1.74,2.07,2.61,4.33,2.61,6.77,0,1.7-.48,3.11-1.44,4.22-.96,1.11-2.29,1.66-4,1.66s-2.85-.54-3.66-1.61c-.82-1.07-1.22-2.2-1.22-3.39,0-1.85.55-3.33,1.67-4.44-.82-2.29-2.39-3.87-4.72-4.72-2.33-.85-4.64-1.28-6.94-1.28-3.4,0-6.46.93-9.16,2.77-2.7,1.85-4.83,4.55-6.38,8.1-1.55,3.55-2.33,7.81-2.33,12.77s.79,9.36,2.39,13.21c1.59,3.85,3.83,6.86,6.71,9.05,2.89,2.18,6.22,3.27,9.99,3.27,3.33,0,6.6-.91,9.82-2.72,3.22-1.81,5.75-4.09,7.6-6.83l2.89,2.22c-2.74,4.29-6.27,7.55-10.6,9.77-4.33,2.22-8.57,3.33-12.71,3.33-5.03,0-9.64-1.15-13.82-3.44Z"/>
                <path fill="#475569" d="M895.65,81.97c-4.11-2.4-7.35-5.84-9.71-10.32-2.37-4.48-3.55-9.64-3.55-15.48,0-5.18,1.18-10.05,3.55-14.6,2.37-4.55,5.68-8.2,9.93-10.93,4.25-2.74,9.08-4.11,14.49-4.11,4.22,0,8.03.93,11.43,2.77,3.4,1.85,6.1,4.61,8.1,8.27s3,8.16,3,13.49l-39.07.67c-.07,8.88,1.39,15.8,4.38,20.76,3,4.96,7.64,7.44,13.93,7.44,3.4,0,6.9-.89,10.49-2.66,3.59-1.78,6.34-3.96,8.27-6.55l2.66,2.22c-2.81,4.29-6.46,7.48-10.93,9.55-4.48,2.07-8.86,3.11-13.15,3.11-5.11,0-9.71-1.2-13.82-3.61ZM922.46,47.06c0-4.44-1-8.25-3-11.43-2-3.18-5-4.77-8.99-4.77-9.18,0-14.62,5.4-16.32,16.21h28.31Z"/>
                <g transform="translate(330, 155)" fill="#475569">
                  <path d="M18.75,43.78c-3.7,0-6.96-.9-9.76-2.7-2.81-1.8-5.01-4.32-6.6-7.54-1.6-3.23-2.39-6.98-2.39-11.26s.8-7.97,2.39-11.2c1.59-3.23,3.79-5.75,6.6-7.57,2.8-1.82,6.06-2.73,9.76-2.73s7.08.91,9.9,2.73c2.82,1.82,5.01,4.35,6.57,7.57,1.56,3.23,2.34,6.96,2.34,11.2s-.78,8.03-2.34,11.26c-1.56,3.23-3.75,5.74-6.57,7.54-2.82,1.8-6.12,2.7-9.9,2.7ZM18.81,38.49c2.64,0,4.95-.65,6.93-1.96,1.98-1.31,3.51-3.17,4.59-5.58,1.08-2.42,1.62-5.31,1.62-8.67s-.54-6.26-1.62-8.67c-1.08-2.42-2.61-4.27-4.59-5.55-1.98-1.29-4.29-1.93-6.93-1.93s-4.95.64-6.93,1.93c-1.98,1.29-3.52,3.14-4.62,5.55-1.1,2.42-1.65,5.31-1.65,8.67s.55,6.26,1.65,8.67c1.1,2.42,2.64,4.28,4.62,5.58,1.98,1.31,4.29,1.96,6.93,1.96Z"/>
                  <path d="M59.56,43.78c-2.16,0-4.04-.48-5.64-1.43-1.59-.95-2.82-2.38-3.69-4.28-.86-1.9-1.29-4.3-1.29-7.19V13.13h5.5v17.11c0,2.81.57,4.93,1.71,6.36,1.14,1.43,2.77,2.14,4.9,2.14,1.43,0,2.72-.38,3.88-1.13,1.16-.75,2.06-1.84,2.72-3.27.66-1.43.99-3.17.99-5.23v-15.98h5.5v29.94h-4.9l-.39-5.11c-.84,1.82-2.07,3.25-3.69,4.28-1.61,1.03-3.48,1.54-5.61,1.54Z"/>
                  <path d="M98.56,43.06c-1.72,0-3.23-.3-4.51-.89-1.28-.59-2.27-1.58-2.97-2.97-.7-1.39-1.04-3.27-1.04-5.64v-15.38h-4.79v-5.05h4.79l.66-7.48h4.84v7.48h7.86v5.05h-7.86v15.44c0,1.7.33,2.86.99,3.48.66.61,1.8.92,3.41.92h3.19v5.05h-4.56Z"/>
                  <path d="M126.99,43.78c-2.68,0-5.06-.66-7.15-1.99-2.09-1.33-3.73-3.16-4.92-5.49-1.19-2.34-1.79-5.05-1.79-8.14s.6-5.87,1.79-8.23c1.19-2.36,2.83-4.2,4.92-5.52,2.09-1.33,4.47-1.99,7.15-1.99,3.37,0,6.2.95,8.47,2.85,2.27,1.9,3.72,4.48,4.35,7.72h-5.72c-.37-1.74-1.2-3.09-2.5-4.04-1.3-.95-2.85-1.43-4.65-1.43-1.47,0-2.82.41-4.07,1.22-1.25.81-2.25,2-3,3.56-.75,1.56-1.13,3.5-1.13,5.79,0,1.7.22,3.22.66,4.54.44,1.33,1.04,2.45,1.79,3.36.75.91,1.62,1.59,2.61,2.05.99.46,2.03.68,3.13.68,1.21,0,2.3-.21,3.27-.62.97-.42,1.8-1.04,2.48-1.87.68-.83,1.15-1.82,1.4-2.97h5.72c-.62,3.17-2.07,5.71-4.35,7.63-2.27,1.92-5.1,2.88-8.47,2.88Z"/>
                  <path d="M164.39,43.78c-2.6,0-4.94-.65-7.01-1.96-2.07-1.31-3.7-3.14-4.9-5.49-1.19-2.36-1.79-5.08-1.79-8.17s.6-5.93,1.81-8.29c1.21-2.36,2.86-4.19,4.95-5.49,2.09-1.31,4.44-1.96,7.04-1.96s4.99.65,7.04,1.96c2.05,1.31,3.68,3.13,4.87,5.46,1.19,2.34,1.79,5.09,1.79,8.26s-.6,5.92-1.79,8.26c-1.19,2.34-2.83,4.16-4.92,5.46-2.09,1.31-4.46,1.96-7.09,1.96ZM164.39,38.67c1.5,0,2.87-.4,4.1-1.19,1.23-.79,2.22-1.97,2.97-3.53.75-1.56,1.13-3.51,1.13-5.85s-.37-4.29-1.1-5.85c-.73-1.56-1.71-2.74-2.94-3.53-1.23-.79-2.58-1.19-4.04-1.19s-2.82.4-4.07,1.19c-1.25.79-2.25,1.97-3,3.53-.75,1.56-1.13,3.52-1.13,5.85s.38,4.29,1.13,5.85c.75,1.56,1.74,2.74,2.97,3.53,1.23.79,2.56,1.19,3.99,1.19Z"/>
                  <path d="M190.19,43.06V13.13h4.95l.39,4.22c.88-1.54,2.05-2.75,3.52-3.62,1.47-.87,3.12-1.31,4.95-1.31,1.39,0,2.66.21,3.79.62,1.14.42,2.15,1.04,3.03,1.87.88.83,1.59,1.86,2.14,3.09.99-1.74,2.32-3.11,3.99-4.1,1.67-.99,3.44-1.48,5.31-1.48,2.24,0,4.16.49,5.77,1.46,1.61.97,2.84,2.42,3.69,4.34.84,1.92,1.26,4.31,1.26,7.16v17.7h-5.44v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.36,0-2.57.38-3.63,1.13-1.06.75-1.9,1.84-2.5,3.27-.6,1.43-.91,3.17-.91,5.23v15.92h-5.5v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.28,0-2.46.38-3.52,1.13-1.06.75-1.91,1.84-2.53,3.27-.62,1.43-.93,3.17-.93,5.23v15.92h-5.5Z"/>
                  <path d="M258.11,43.78c-2.64,0-4.99-.65-7.04-1.96-2.05-1.31-3.66-3.13-4.81-5.46-1.16-2.34-1.73-5.05-1.73-8.14s.58-5.93,1.73-8.29c1.15-2.36,2.76-4.2,4.81-5.52,2.05-1.33,4.44-1.99,7.15-1.99s5.04.65,6.98,1.96c1.94,1.31,3.45,3.04,4.51,5.2,1.06,2.16,1.6,4.54,1.6,7.16,0,.4,0,.82-.03,1.28-.02.46-.05.96-.08,1.52h-22.66v-4.22h17.27c-.11-2.49-.88-4.44-2.31-5.85-1.43-1.41-3.21-2.11-5.33-2.11-1.5,0-2.88.37-4.12,1.1-1.25.73-2.25,1.8-3,3.21-.75,1.41-1.13,3.18-1.13,5.32v1.66c0,2.22.38,4.09,1.13,5.61.75,1.52,1.75,2.67,3,3.45,1.25.77,2.6,1.16,4.07,1.16,1.76,0,3.21-.42,4.35-1.25,1.14-.83,1.98-1.96,2.53-3.39h5.5c-.48,1.82-1.28,3.46-2.42,4.9-1.14,1.45-2.54,2.58-4.21,3.42-1.67.83-3.58,1.25-5.75,1.25Z"/>
                  <path d="M302.77,43.06V1.48h11.82c4.47,0,8.18.85,11.11,2.55,2.93,1.7,5.11,4.11,6.52,7.22,1.41,3.11,2.12,6.8,2.12,11.08s-.71,7.96-2.12,11.05c-1.41,3.09-3.57,5.48-6.49,7.16-2.92,1.68-6.63,2.52-11.14,2.52h-11.82ZM308.27,38.08h6.1c3.56,0,6.38-.63,8.47-1.9,2.09-1.27,3.58-3.08,4.48-5.44.9-2.36,1.35-5.16,1.35-8.4s-.45-6.12-1.35-8.49-2.39-4.2-4.48-5.46c-2.09-1.27-4.91-1.9-8.47-1.9h-6.1v31.6Z"/>
                  <path d="M349.36,56.13l6.76-16.39h-1.59l-10.95-26.61h5.94l8.69,21.74,8.74-21.74h5.78l-17.6,43.01h-5.77Z"/>
                  <path d="M383.07,43.06V13.13h4.95l.33,5.11c.88-1.78,2.13-3.2,3.74-4.25,1.61-1.05,3.47-1.57,5.56-1.57,2.2,0,4.09.48,5.67,1.43,1.58.95,2.81,2.39,3.69,4.31.88,1.92,1.32,4.33,1.32,7.22v17.7h-5.5v-17.11c0-2.77-.57-4.87-1.71-6.3-1.14-1.43-2.79-2.14-4.95-2.14-1.43,0-2.71.37-3.85,1.1-1.14.73-2.04,1.81-2.72,3.24-.68,1.43-1.02,3.17-1.02,5.23v15.98h-5.5Z"/>
                  <path d="M430.04,43.78c-2.27,0-4.16-.42-5.67-1.25-1.5-.83-2.62-1.95-3.35-3.36-.73-1.41-1.1-2.92-1.1-4.54,0-1.98.48-3.67,1.43-5.08.95-1.4,2.31-2.48,4.07-3.24,1.76-.75,3.87-1.13,6.32-1.13h7.21c0-1.74-.24-3.19-.71-4.34-.48-1.15-1.18-2.01-2.12-2.58-.94-.57-2.12-.86-3.55-.86-1.65,0-3.06.43-4.23,1.28-1.17.85-1.91,2.11-2.2,3.77h-5.5c.22-2.1.89-3.89,2.01-5.38,1.12-1.49,2.56-2.63,4.32-3.45,1.76-.81,3.63-1.22,5.61-1.22,2.6,0,4.79.5,6.54,1.48,1.76.99,3.09,2.39,3.99,4.19.9,1.8,1.35,3.95,1.35,6.44v18.53h-4.79l-.44-5.05c-.4.79-.88,1.54-1.43,2.26-.55.71-1.2,1.33-1.95,1.84-.75.52-1.61.92-2.58,1.22-.97.3-2.04.45-3.22.45ZM431.09,38.97c1.17,0,2.24-.26,3.19-.77.95-.51,1.77-1.22,2.45-2.11.68-.89,1.19-1.9,1.54-3.03.35-1.13.54-2.29.58-3.48v-.18h-6.54c-1.58,0-2.85.21-3.82.62-.97.42-1.68.98-2.12,1.69-.44.71-.66,1.54-.66,2.49s.21,1.83.63,2.52c.42.69,1.04,1.24,1.84,1.63.81.4,1.78.59,2.92.59Z"/>
                  <path d="M456.99,43.06V13.13h4.95l.39,4.22c.88-1.54,2.05-2.75,3.52-3.62,1.47-.87,3.12-1.31,4.95-1.31,1.39,0,2.66.21,3.79.62,1.14.42,2.15,1.04,3.03,1.87.88.83,1.59,1.86,2.14,3.09.99-1.74,2.32-3.11,3.99-4.1,1.67-.99,3.44-1.48,5.31-1.48,2.24,0,4.16.49,5.77,1.46,1.61.97,2.84,2.42,3.69,4.34.84,1.92,1.26,4.31,1.26,7.16v17.7h-5.44v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.36,0-2.57.38-3.63,1.13-1.06.75-1.9,1.84-2.5,3.27-.6,1.43-.91,3.17-.91,5.23v15.92h-5.5v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.28,0-2.46.38-3.52,1.13-1.06.75-1.91,1.84-2.53,3.27-.62,1.43-.93,3.17-.93,5.23v15.92h-5.5Z"/>
                  <path d="M515.57,7.48c-1.06,0-1.93-.36-2.61-1.07-.68-.71-1.02-1.62-1.02-2.73s.34-1.95,1.02-2.64c.68-.69,1.55-1.04,2.61-1.04s1.89.35,2.58,1.04c.7.69,1.04,1.57,1.04,2.64s-.35,2.02-1.04,2.73c-.7.71-1.56,1.07-2.58,1.07ZM512.76,43.06V13.13h5.5v29.94h-5.5Z"/>
                  <path d="M544.44,43.78c-2.68,0-5.06-.66-7.15-1.99-2.09-1.33-3.73-3.16-4.92-5.49-1.19-2.34-1.79-5.05-1.79-8.14s.6-5.87,1.79-8.23c1.19-2.36,2.83-4.2,4.92-5.52,2.09-1.33,4.47-1.99,7.15-1.99,3.37,0,6.2.95,8.47,2.85,2.27,1.9,3.72,4.48,4.35,7.72h-5.72c-.37-1.74-1.2-3.09-2.5-4.04-1.3-.95-2.85-1.43-4.65-1.43-1.47,0-2.82.41-4.07,1.22-1.25.81-2.25,2-3,3.56-.75,1.56-1.13,3.5-1.13,5.79,0,1.7.22,3.22.66,4.54.44,1.33,1.04,2.45,1.79,3.36.75.91,1.62,1.59,2.61,2.05.99.46,2.03.68,3.13.68,1.21,0,2.3-.21,3.27-.62.97-.42,1.8-1.04,2.48-1.87.68-.83,1.15-1.82,1.4-2.97h5.72c-.62,3.17-2.07,5.71-4.35,7.63-2.27,1.92-5.1,2.88-8.47,2.88Z"/>
                  <path d="M579.92,43.78c-2.35,0-4.4-.42-6.16-1.25-1.76-.83-3.15-2-4.18-3.5-1.03-1.5-1.65-3.27-1.87-5.29h5.61c.18.95.54,1.82,1.07,2.61.53.79,1.27,1.43,2.2,1.9.93.48,2.04.71,3.33.71,1.21,0,2.21-.19,3-.56.79-.38,1.37-.89,1.73-1.54.37-.65.55-1.36.55-2.11,0-1.11-.25-1.95-.74-2.52-.5-.57-1.23-1.03-2.2-1.37-.97-.34-2.14-.64-3.49-.92-1.28-.24-2.52-.56-3.71-.98-1.19-.42-2.26-.94-3.19-1.57-.94-.63-1.68-1.44-2.23-2.41-.55-.97-.83-2.17-.83-3.59,0-1.7.42-3.24,1.27-4.6.84-1.37,2.04-2.44,3.6-3.21,1.56-.77,3.4-1.16,5.53-1.16,3.08,0,5.56.79,7.42,2.38,1.87,1.58,2.97,3.82,3.3,6.71h-5.33c-.15-1.35-.7-2.39-1.65-3.12-.95-.73-2.22-1.1-3.8-1.1s-2.79.34-3.63,1.01c-.84.67-1.27,1.56-1.27,2.67,0,.71.24,1.35.72,1.9.48.55,1.18,1.02,2.12,1.4.94.38,2.08.72,3.44,1.04,1.94.4,3.69.89,5.23,1.49,1.54.59,2.77,1.47,3.69,2.61.92,1.15,1.38,2.79,1.38,4.93.04,1.86-.39,3.5-1.29,4.93-.9,1.43-2.16,2.53-3.79,3.33-1.63.79-3.57,1.19-5.8,1.19Z"/>
                </g>
              </svg>
            </div>
            <button 
              className="mobile-toggle"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              {mobileNavOpen ? '\u2715' : '\u2630'}
            </button>
          </div>

          {/* 2-Row Navigation Grid */}
          <nav className={`nav-grid ${mobileNavOpen ? 'open' : ''}`}>
            {tabs.map(tab => (
              <div key={tab.id} className="nav-tab-wrapper">
                <button
                  className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileNavOpen(false);
                  }}
                >
                  {tab.label}
                </button>
                {reviewMode && tabHasComments(tab.id) && (
                  <div className="tab-comment-dot" title="Has notes"></div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="main-content">

        {/* ==================== WEBSITE HERO ==================== */}
        {activeTab === 'hero' && (
          <>
            <div className="hero">
              <div className="hero-content">
                <div className="hero-text">
                  <h1>Master the System That Turns Competitive Markets Into Premium Positioning</h1>
                  <p>
                    The Outcome Dynamics methodology gives you a proven, repeatable system 
                    to uncover what organizations are overlooking, integrate their assets into a working 
                    system, and deliver outcomes that justify premium engagements.
                  </p>
                  <div className="hero-buttons">
                    <button className="btn btn-primary">Get Certified</button>
                    <button className="btn btn-secondary">Learn More</button>
                  </div>
                </div>
                <div className="hero-icon">
                  <Icon size={280} />
                </div>
              </div>

              <div className="pillar-cards">
                <div className="pillar-card navy">
                  <h3>Expectation</h3>
                  <p>Clarity about what organizational assets exist and what they are truly worth.</p>
                </div>
                <div className="pillar-card teal">
                  <h3>Systemization</h3>
                  <p>A proven methodology for how assets work together as an integrated system.</p>
                </div>
                <div className="pillar-card gold">
                  <h3>Realization</h3>
                  <p>Systematic conversion of organizational assets into measurable customer value.</p>
                </div>
              </div>
            </div>
            <ReviewBlock blockKey="voice:pillars" label="Messaging Pillars" />

            <div className="card-white" style={{ marginTop: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '4px', height: '40px', background: 'linear-gradient(to bottom, #475569, #00bfa5)', borderRadius: '2px' }}></div>
                <div>
                  <h3 style={{ fontFamily: 'Lora, serif', fontSize: '20px', fontWeight: '400', color: '#1e293b' }}>Outcome Dynamics</h3>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>By Bill Adams - Launching September 2026 via Forbes Books</p>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.8', maxWidth: '700px' }}>
                The definitive guide to understanding how organizations systematically convert their assets 
                into value creation. Built on the patented Value Collaborator System methodology.
              </p>
            </div>
            <ReviewBlock blockKey="hero:general" label="General Feedback" />
          </>
        )}

        {/* ==================== BRAND STORY ==================== */}
        {activeTab === 'brand-story' && (
          <>
            <h2 className="section-title">Brand Story</h2>
            <p className="section-subtitle">
              The philosophy, methodology, and purpose behind the WhiteSpace Outcome Dynamics.
            </p>

            <div className="icon-showcase" style={{ marginBottom: '48px', padding: '80px' }}>
              <Icon size={320} />
            </div>

            <div className="card-white">
              <h3 style={{ fontFamily: 'Lora, serif', fontSize: '24px', fontWeight: '300', color: '#1e293b', marginBottom: '20px' }}>
                Every market has white space - the gap between commodity competition and premium positioning that most organizations never see.
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.8', marginBottom: '24px', maxWidth: '760px' }}>
                Outcome Dynamics was developed by Bill Adams after decades of observing the same pattern: 
                why do organizations consistently undervalue what they already have? Through decades of consulting 
                experience, Adams developed the Value Collaborator System - a patented methodology that reveals, 
                organizes, and monetizes organizational assets.
              </p>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.8', maxWidth: '760px' }}>
                The Framework rests on three pillars - Expectation, Systemization, and Realization - each 
                representing a phase in the journey from asset awareness to measurable value creation.
              </p>
            </div>

            <div className="grid-3" style={{ marginTop: '40px' }}>
              <div className="box accent-navy" style={{ paddingLeft: '28px' }}>
                <h4 style={{ fontFamily: 'Lora, serif', fontSize: '18px', fontWeight: '400', color: '#475569', marginBottom: '12px' }}>Expectation</h4>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                  Establishing clarity about what organizational assets exist, their current state, and their unrealized potential.
                </p>
              </div>
              <div className="box accent-teal" style={{ paddingLeft: '28px' }}>
                <h4 style={{ fontFamily: 'Lora, serif', fontSize: '18px', fontWeight: '400', color: '#00bfa5', marginBottom: '12px' }}>Systemization</h4>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                  Applying a proven methodology to integrate assets into a working system where every element amplifies the others.
                </p>
              </div>
              <div className="box accent-gold" style={{ paddingLeft: '28px' }}>
                <h4 style={{ fontFamily: 'Lora, serif', fontSize: '18px', fontWeight: '400', color: '#d97706', marginBottom: '12px' }}>Realization</h4>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                  Systematically converting organizational assets into measurable customer value and business outcomes.
                </p>
              </div>
            </div>

            <div className="card-white" style={{ marginTop: '40px', textAlign: 'center', padding: '48px' }}>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>Ready to deliver this to your clients?</p>
              <button className="btn btn-primary">Explore the Certification Program</button>
            </div>
            <ReviewBlock blockKey="brand-story:narrative" label="Brand Narrative" />
            <ReviewBlock blockKey="brand-story:general" label="General Feedback" />
          </>
        )}

        {/* ==================== GUIDELINES ==================== */}
        {activeTab === 'guidelines' && (
          <>
            <h2 className="section-title">Brand Guidelines</h2>
            <p className="section-subtitle">
              Logo usage rules, clear space requirements, and application standards.
            </p>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Logo Usage</h3>
              <div className="grid-3">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '40px', marginBottom: '12px' }}>
                    <Icon size={120} />
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>Primary Mark</p>
                  <p style={{ fontSize: '12px', color: '#64748b' }}>Full color on light</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ background: '#0f172a', borderRadius: '12px', padding: '40px', marginBottom: '12px' }}>
                    <Icon size={120} />
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>On Dark</p>
                  <p style={{ fontSize: '12px', color: '#64748b' }}>Full color on dark backgrounds</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ background: '#475569', borderRadius: '12px', padding: '40px', marginBottom: '12px' }}>
                    <svg width={120} height={120} viewBox="2.5 0 253.78 231.71" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#ffffff" d="M220.27,231.1c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.05c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
                      <path fill="#ffffff" d="M66.27,231.1c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21C0,10.5,8.75,1.75,19.25,1.75c3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
                      <path fill="#fbbf24" d="M258.78,3.79c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
                      <path fill="#00bfa5" d="M143.27.61c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V57.75C77,25.2,102.9,0,134.75,0c2.89,0,5.74.21,8.52.61Z"/>
                    </svg>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>On Navy</p>
                  <p style={{ fontSize: '12px', color: '#64748b' }}>Navy brackets become white</p>
                </div>
              </div>
            </div>

            <ReviewBlock blockKey="guidelines:usage-rules" label="Logo Usage Rules" />
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Minimum Sizing</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Application</th>
                    <th>Minimum Height</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Header / Navigation</td>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>60px</td>
                    <td>Website header, app bars</td>
                  </tr>
                  <tr>
                    <td>Prominent Display</td>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>120px</td>
                    <td>Hero sections, presentations, print</td>
                  </tr>
                  <tr>
                    <td>Icon Only</td>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>40px</td>
                    <td>Favicon, social avatar, small spaces</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ReviewBlock blockKey="guidelines:sizing" label="Minimum Sizing" />
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Clear Space</h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8', marginBottom: '16px' }}>
                Maintain a minimum clear space equal to the height of the icon's top bracket on all sides. 
                No other elements - text, graphics, or borders - should enter this exclusion zone.
              </p>
              <div style={{ display: 'flex', gap: '32px', fontSize: '13px' }}>
                <div>
                  <strong style={{ color: '#1e293b' }}>File Formats:</strong>
                  <span style={{ color: '#64748b' }}> SVG (preferred), PNG (transparency), PDF (print)</span>
                </div>
              </div>
            </div>

            <ReviewBlock blockKey="guidelines:clear-space" label="Clear Space" />
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Logo Misuse</h3>
              <div className="grid-3">
                <div className="dont-card" style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ background: '#fef2f2', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
                    <div style={{ transform: 'scaleX(1.5)', display: 'inline-block' }}>
                      <Icon size={60} />
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#dc2626', marginBottom: '4px' }}>{'\u2717'} Don't stretch or distort</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Always maintain original proportions</p>
                </div>
                <div className="dont-card" style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ background: '#fef2f2', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
                    <div style={{ transform: 'rotate(15deg)', display: 'inline-block' }}>
                      <Icon size={60} />
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#dc2626', marginBottom: '4px' }}>{'\u2717'} Don't rotate or tilt</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>The mark should always be upright</p>
                </div>
                <div className="dont-card" style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ background: '#fef2f2', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
                    <svg width={60} height={60} viewBox="2.5 0 253.78 231.71" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#e74c3c" d="M220.27,231.1c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.05c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
                      <path fill="#e74c3c" d="M66.27,231.1c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21C0,10.5,8.75,1.75,19.25,1.75c3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
                      <path fill="#f39c12" d="M258.78,3.79c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
                      <path fill="#2ecc71" d="M143.27.61c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V57.75C77,25.2,102.9,0,134.75,0c2.89,0,5.74.21,8.52.61Z"/>
                    </svg>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#dc2626', marginBottom: '4px' }}>{'\u2717'} Don't change brand colors</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Only use approved color variants</p>
                </div>
                <div className="dont-card" style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ background: '#fef2f2', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
                    <div style={{ filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.4))', display: 'inline-block' }}>
                      <Icon size={60} />
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#dc2626', marginBottom: '4px' }}>{'\u2717'} Don't add drop shadows</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>No effects, glows, or bevels</p>
                </div>
                <div className="dont-card" style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ background: '#fef2f2', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
                    <div style={{ opacity: 0.3, display: 'inline-block' }}>
                      <Icon size={60} />
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#dc2626', marginBottom: '4px' }}>{'\u2717'} Don't reduce opacity</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Always display at full opacity</p>
                </div>
                <div className="dont-card" style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ backgroundImage: 'linear-gradient(45deg, #ddd 25%, transparent 25%), linear-gradient(-45deg, #ddd 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ddd 75%), linear-gradient(-45deg, transparent 75%, #ddd 75%)', backgroundSize: '16px 16px', backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
                    <Icon size={60} />
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#dc2626', marginBottom: '4px' }}>{'\u2717'} Don't place on busy backgrounds</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Use solid, approved backgrounds only</p>
                </div>
              </div>
            </div>
            <ReviewBlock blockKey="guidelines:misuse" label="Logo Misuse" />
            <ReviewBlock blockKey="guidelines:general" label="General Feedback" />
          </>
        )}

        {/* ==================== COLORS ==================== */}
        {activeTab === 'colors' && (
          <>
            <h2 className="section-title">Color System</h2>
            <p className="section-subtitle">
              Brand colors carry meaning. Navy for authority, Teal for innovation, Gold for value realization, Blue for action.
            </p>

            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '20px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Primary Palette</h3>
            <div className="color-grid">
              <div className="color-swatch">
                <div className="color-display" style={{ backgroundColor: '#475569' }}></div>
                <div className="color-specs">
                  <div className="color-name">Navy</div>
                  <div className="color-code">HEX: #475569<br/>RGB: 71, 85, 105<br/>Role: Authority, Foundation</div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-display" style={{ backgroundColor: '#00bfa5' }}></div>
                <div className="color-specs">
                  <div className="color-name">Teal</div>
                  <div className="color-code">HEX: #00bfa5<br/>RGB: 0, 191, 165<br/>Role: Innovation, Progress</div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-display" style={{ backgroundColor: '#fbbf24' }}></div>
                <div className="color-specs">
                  <div className="color-name">Gold</div>
                  <div className="color-code">HEX: #fbbf24<br/>RGB: 251, 191, 36<br/>Role: Realization, Value</div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-display" style={{ backgroundColor: '#2563eb' }}></div>
                <div className="color-specs">
                  <div className="color-name">Blue</div>
                  <div className="color-code">HEX: #2563eb<br/>RGB: 37, 99, 235<br/>Role: CTAs, Interaction</div>
                </div>
              </div>
            </div>

            <ReviewBlock blockKey="colors:primary-palette" label="Primary Palette" />

            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '20px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Neutral Grays</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '12px', marginBottom: '48px' }}>
              {[
                { name: 'Gray 900', hex: '#1e293b' },
                { name: 'Gray 700', hex: '#475569' },
                { name: 'Gray 500', hex: '#64748b' },
                { name: 'Gray 300', hex: '#cbd5e1' },
                { name: 'Gray 200', hex: '#e2e8f0' },
                { name: 'Gray 100', hex: '#f1f5f9' },
                { name: 'Gray 50', hex: '#f8fafc' },
              ].map(c => (
                <div key={c.hex} style={{ textAlign: 'center' }}>
                  <div style={{ height: '48px', borderRadius: '8px', backgroundColor: c.hex, border: '1px solid #e2e8f0', marginBottom: '8px' }}></div>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#1e293b' }}>{c.name}</p>
                  <p style={{ fontSize: '10px', fontFamily: 'monospace', color: '#64748b' }}>{c.hex}</p>
                </div>
              ))}
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>Contrast & Accessibility</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Combination</th>
                    <th>Contrast Ratio</th>
                    <th>WCAG AA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Navy on White</td>
                    <td style={{ fontFamily: 'monospace' }}>5.9:1</td>
                    <td style={{ color: '#16a34a', fontWeight: '600' }}>Pass</td>
                  </tr>
                  <tr>
                    <td>Gray 700 on White</td>
                    <td style={{ fontFamily: 'monospace' }}>5.9:1</td>
                    <td style={{ color: '#16a34a', fontWeight: '600' }}>Pass</td>
                  </tr>
                  <tr>
                    <td>Blue on White</td>
                    <td style={{ fontFamily: 'monospace' }}>4.6:1</td>
                    <td style={{ color: '#16a34a', fontWeight: '600' }}>Pass</td>
                  </tr>
                  <tr>
                    <td>Teal on White</td>
                    <td style={{ fontFamily: 'monospace' }}>2.9:1</td>
                    <td style={{ color: '#dc2626', fontWeight: '600' }}>Large text only</td>
                  </tr>
                  <tr>
                    <td>Gold on White</td>
                    <td style={{ fontFamily: 'monospace' }}>1.9:1</td>
                    <td style={{ color: '#dc2626', fontWeight: '600' }}>Decorative only</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ReviewBlock blockKey="colors:general" label="General Feedback" />
          </>
        )}

        {/* ==================== TYPOGRAPHY ==================== */}
        {activeTab === 'typography' && (
          <>
            <h2 className="section-title">Typography</h2>
            <p className="section-subtitle">
              Lora for headlines and brand-forward moments. DM Sans for body, UI, and everything else.
            </p>

            <div className="grid-2" style={{ marginBottom: '40px' }}>
              <div className="card-white">
                <h3 style={{ fontFamily: 'Lora, serif', fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>Lora - Headlines</h3>
                <p style={{ fontFamily: 'Lora, serif', fontSize: '48px', fontWeight: '300', color: '#1e293b', lineHeight: '1.1', letterSpacing: '-1px', marginBottom: '16px' }}>
                  Light 300
                </p>
                <p style={{ fontFamily: 'Lora, serif', fontSize: '32px', fontWeight: '400', color: '#1e293b', lineHeight: '1.2', marginBottom: '16px' }}>
                  Regular 400
                </p>
                <p style={{ fontFamily: 'Lora, serif', fontSize: '20px', fontWeight: '600', color: '#1e293b', lineHeight: '1.3' }}>
                  Semi-Bold 600
                </p>
              </div>
              <div className="card-white">
                <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>DM Sans - Body & UI</h3>
                <p style={{ fontSize: '16px', fontWeight: '400', color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
                  Regular 400 - Body text and general content. Optimized for comfortable reading at 16px with 1.6 line height.
                </p>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b', marginBottom: '16px' }}>
                  Medium 500 - Labels, navigation, emphasized text
                </p>
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>
                  Semi-Bold 600 - Buttons, section headers, strong emphasis
                </p>
              </div>
            <ReviewBlock blockKey="typography:font-pairing" label="Font Pairing" />
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Type Scale</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Font</th>
                    <th>Weight</th>
                    <th>Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>56px</td>
                    <td>Lora</td>
                    <td>300 Light</td>
                    <td>Hero headlines (-1px letter-spacing)</td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>40px</td>
                    <td>Lora</td>
                    <td>400 Regular</td>
                    <td>Page titles</td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>32px</td>
                    <td>Lora</td>
                    <td>300 Light</td>
                    <td>Section headers (-0.5px letter-spacing)</td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>24px</td>
                    <td>Lora</td>
                    <td>400 Regular</td>
                    <td>Card titles, subsection headers</td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>16px</td>
                    <td>DM Sans</td>
                    <td>400 Regular</td>
                    <td>Body text (1.6 line-height)</td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>14px</td>
                    <td>DM Sans</td>
                    <td>500 Medium</td>
                    <td>Labels, buttons, navigation</td>
                  </tr>
                  <tr>
                    <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>12px</td>
                    <td>DM Sans</td>
                    <td>400 Regular</td>
                    <td>Captions, fine print (minimum size)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Web Font Embedding</h3>
              <div style={{ background: '#0f172a', borderRadius: '8px', padding: '20px', fontFamily: "'SF Mono', 'Fira Code', monospace", fontSize: '12px', color: '#94a3b8', lineHeight: '1.8', overflowX: 'auto' }}>
                <span style={{ color: '#64748b' }}>/* Google Fonts import */</span><br/>
                <span style={{ color: '#fbbf24' }}>@import</span> url(<span style={{ color: '#00bfa5' }}>'https://fonts.googleapis.com/css2?family=Lora:wght@300;400;600&family=DM+Sans:wght@400;500;600&display=swap'</span>);
              </div>
            </div>
            <ReviewBlock blockKey="typography:general" label="General Feedback" />
          </>
        )}

        {/* ==================== LOGOS ==================== */}
        {activeTab === 'logos' && (
          <>
            <h2 className="section-title">Logo System</h2>
            <p className="section-subtitle">
              The four-bracket icon mark, combimark, lockup variations, and approved background treatments.
            </p>

            {/* Icon Mark */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Icon Mark</h3>
            <div className="icon-showcase">
              <Icon size={280} />
            </div>
            <p style={{ fontSize: '14px', color: '#64748b', textAlign: 'center', marginTop: '-28px', marginBottom: '48px' }}>
              Four interlocking brackets: Slate (Expectation) - Teal (Systemization) - Slate (Foundation) - Gold (Realization)
            </p>

            {/* Icon on backgrounds */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Icon - Background Variants</h3>
            <div className="grid-3" style={{ marginBottom: '48px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '40px', marginBottom: '12px', border: '1px solid #e2e8f0' }}>
                  <Icon size={100} />
                </div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>On Light</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Full brand colors</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#0f172a', borderRadius: '12px', padding: '40px', marginBottom: '12px' }}>
                  <svg width={100} height={100} viewBox="2.5 0 253.78 231.71" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M220.27,231.1c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.05c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
                    <path fill="#ffffff" d="M66.27,231.1c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21C0,10.5,8.75,1.75,19.25,1.75c3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
                    <path fill="#fbbf24" d="M258.78,3.79c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
                    <path fill="#00bfa5" d="M143.27.61c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V57.75C77,25.2,102.9,0,134.75,0c2.89,0,5.74.21,8.52.61Z"/>
                  </svg>
                </div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>On Dark</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Navy brackets become white</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#475569', borderRadius: '12px', padding: '40px', marginBottom: '12px' }}>
                  <svg width={100} height={100} viewBox="2.5 0 253.78 231.71" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M220.27,231.1c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.05c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
                    <path fill="#ffffff" d="M66.27,231.1c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21C0,10.5,8.75,1.75,19.25,1.75c3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
                    <path fill="#fbbf24" d="M258.78,3.79c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
                    <path fill="#00bfa5" d="M143.27.61c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V57.75C77,25.2,102.9,0,134.75,0c2.89,0,5.74.21,8.52.61Z"/>
                  </svg>
                </div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>On Navy</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Navy brackets become white</p>
              </div>
            </div>

            {/* Combimark */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Combimark</h3>
            <div className="card-white" style={{ padding: '60px', textAlign: 'center', marginBottom: '48px' }}>
              <svg height="80" viewBox="0 0 940.29 233.84" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#f2f2f2" x="311.49" y="123.09" width="628.8" height="110.75"/>
                                <g transform="translate(-2.5, 0)">
                  <path fill="#475569" d="M220.27,231.92c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.87c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
                  <path fill="#fbbf24" d="M258.78,4.61c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21.82c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
                </g>
                <g transform="translate(2.5, 0)">
                  <path fill="#475569" d="M66.27,231.92c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21.82C0,11.32,8.75,2.57,19.25,2.57c3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
                  <path fill="#00bfa5" d="M143.27,1.43c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V58.57C77,26.02,102.9.82,134.75.82c2.89,0,5.74.21,8.52.61Z"/>
                </g>
                <path fill="#475569" d="M325.17,25.86l-1.44-4.33c-1.78-5.55-2.85-9.14-3.22-10.77l-6.22.22v-4.88h26.97v3.66c-3.04.15-5.18.65-6.44,1.5-1.26.85-1.89,2.24-1.89,4.16,0,1.78.37,3.92,1.11,6.44,1.33,4.96,3.11,10.51,5.33,16.65.37,1.11.81,2.42,1.33,3.94.52,1.52,1.11,3.27,1.78,5.27.44,1.55,1,3.26,1.67,5.11.67,1.85,1.15,3.18,1.44,4,1.48,4,2.59,7.18,3.33,9.55h.22c1.48-5.03,3-9.92,4.55-14.65,2.66-8.58,5.59-17.65,8.77-27.19,3.33-9.99,5.33-16.21,5.99-18.65h3.55c.89,3.04,2.4,7.79,4.55,14.26,2.15,6.48,3.7,11.16,4.66,14.04,2.22,6.37,3.74,10.88,4.55,13.54.59,2,1.55,5,2.89,8.99,1.48,4.29,2.66,7.96,3.55,10.99h.33c1.78-5.77,3.29-10.54,4.55-14.32,3.77-10.73,6.84-19.98,9.21-27.75.81-2.74,1.55-5.03,2.22-6.88,1.41-3.77,2.55-6.47,3.44-8.1l-8.88.33v-4.88h22.53v3.66c-2.66.3-4.68.85-6.05,1.67-1.37.82-2.59,2.28-3.66,4.38-1.07,2.11-2.42,5.57-4.05,10.38l-5.66,16.87c-5.92,17.98-10.69,31.93-14.32,41.85h-3.33l-20.76-59.38-19.54,59.38h-3.22l-19.87-59.05Z"/>
                <path fill="#475569" d="M430.73,80.48c2.14,0,3.7-.54,4.66-1.61.96-1.07,1.54-2.46,1.72-4.16.18-1.7.28-4.29.28-7.77V14.43c0-2.81.11-5.22.33-7.21l-7.88.44V3c4.44,0,7.6-.26,9.49-.78,1.89-.52,3.35-1.26,4.38-2.22h3.22v33.85c2.59-2.15,5.51-3.9,8.77-5.27,3.26-1.37,6.4-2.05,9.43-2.05,6.36,0,10.99,2,13.88,5.99,2.89,4,4.37,10.29,4.44,18.87l.11,20.65c0,3.33-.15,5.85-.44,7.55l6.99-.33v4.55h-22.64v-3.33c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.48-2.44,1.67-4.11.18-1.67.28-4.27.28-7.83v-15.54c0-6.36-1-11.12-3-14.26-2-3.14-5.14-4.72-9.44-4.72-2.74,0-5.46.65-8.16,1.94-2.7,1.3-4.87,2.94-6.49,4.94v32.75c0,2.89-.19,5.4-.56,7.55l6.99-.33v4.55h-22.64v-3.33Z"/>
                <path fill="#475569" d="M498.88,80.48c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.48-2.44,1.67-4.11.18-1.67.28-4.27.28-7.83v-25.31c0-2.15.15-4.55.44-7.21l-7.88.44v-4.66c4.37,0,7.49-.26,9.38-.78,1.89-.52,3.35-1.26,4.38-2.22h3.22v44.84c0,3.33-.15,5.85-.44,7.55l6.99-.33v4.55h-22.64v-3.33ZM505.76,14.26c-1.18-1.29-1.78-2.83-1.78-4.61s.61-3.33,1.83-4.66c1.22-1.33,2.61-2,4.16-2,1.7,0,3.12.65,4.27,1.94,1.15,1.3,1.72,2.87,1.72,4.72s-.61,3.31-1.83,4.61c-1.22,1.3-2.65,1.94-4.27,1.94s-2.92-.65-4.11-1.94Z"/>
                <path fill="#475569" d="M538.18,65.16l.22-32.19-8.55.11v-4.77c3.55-.07,6.57-1.68,9.05-4.83,2.48-3.14,4.31-6.72,5.49-10.71h3.77v15.54h18.65v4.33l-18.65.22c-.08,11.32-.13,19.17-.17,23.53-.04,4.37-.06,6.81-.06,7.33,0,5.25.63,9.16,1.89,11.71,1.26,2.55,3.44,3.83,6.55,3.83,1.92,0,3.83-.59,5.72-1.78,1.89-1.18,3.53-2.81,4.94-4.88l3,2.44c-2.89,4.29-5.74,7.12-8.55,8.49-2.81,1.37-5.55,2.05-8.21,2.05-10.14,0-15.17-6.81-15.1-20.42Z"/>
                <path fill="#475569" d="M588.96,81.97c-4.11-2.4-7.35-5.84-9.71-10.32-2.37-4.48-3.55-9.64-3.55-15.48,0-5.18,1.18-10.05,3.55-14.6,2.37-4.55,5.68-8.2,9.93-10.93,4.25-2.74,9.08-4.11,14.49-4.11,4.22,0,8.03.93,11.43,2.77,3.4,1.85,6.1,4.61,8.1,8.27s3,8.16,3,13.49l-39.07.67c-.07,8.88,1.39,15.8,4.38,20.76,3,4.96,7.64,7.44,13.93,7.44,3.4,0,6.9-.89,10.49-2.66,3.59-1.78,6.34-3.96,8.27-6.55l2.66,2.22c-2.81,4.29-6.46,7.48-10.93,9.55-4.48,2.07-8.86,3.11-13.15,3.11-5.11,0-9.71-1.2-13.82-3.61ZM615.76,47.06c0-4.44-1-8.25-3-11.43-2-3.18-5-4.77-8.99-4.77-9.18,0-14.62,5.4-16.32,16.21h28.31Z"/>
                <path fill="#475569" d="M652.78,84.14c-3.52-.96-6.6-2.37-9.27-4.22l.55,4.77h-5.77l-.67-23.64h4.33c.37,6.37,2.55,11.27,6.55,14.71,4,3.44,9.06,5.16,15.21,5.16,4.51,0,8.31-1.24,11.38-3.72,3.07-2.48,4.61-5.86,4.61-10.16,0-3.18-.87-5.9-2.61-8.16-1.74-2.26-3.88-4.14-6.44-5.66-2.55-1.52-6.01-3.27-10.38-5.27-4.96-2.37-8.9-4.44-11.82-6.22-2.92-1.78-5.42-4.12-7.49-7.05-2.07-2.92-3.11-6.53-3.11-10.82,0-2.96.68-5.92,2.05-8.88,1.37-2.96,3.74-5.48,7.1-7.55,3.37-2.07,7.83-3.11,13.38-3.11,3.33,0,6.68.43,10.04,1.28,3.37.85,6.46,2.31,9.27,4.38l-.44-4.77h5.66v24.42h-4c-.37-5.84-2.24-10.78-5.61-14.82-3.37-4.03-8.08-6.05-14.15-6.05-4.44,0-7.92,1.24-10.43,3.72-2.52,2.48-3.77,5.57-3.77,9.27,0,2.96.85,5.51,2.55,7.66,1.7,2.15,3.77,3.92,6.22,5.33,2.44,1.41,5.88,3.15,10.32,5.22,5.03,2.29,9.08,4.37,12.16,6.22,3.07,1.85,5.68,4.27,7.83,7.27,2.15,3,3.22,6.68,3.22,11.04s-1.02,7.81-3.05,10.99c-2.04,3.18-5.01,5.66-8.94,7.44-3.92,1.78-8.59,2.66-13.99,2.66-3.48,0-6.98-.48-10.49-1.44Z"/>
                <path fill="#475569" d="M697.9,108.78c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.46-2.41,1.61-4,.15-1.59.26-4.24.33-7.94l.22-53.61c0-3.11.15-5.51.44-7.21l-7.88.44v-4.66c4.37,0,7.36-.24,8.99-.72,1.63-.48,2.96-1.24,4-2.28h3.33c.29,3.63.44,5.62.44,5.99,2.22-2,4.88-3.61,7.99-4.83,3.11-1.22,6.18-1.83,9.21-1.83,4.37,0,8.4,1.13,12.1,3.39,3.7,2.26,6.68,5.48,8.94,9.66,2.26,4.18,3.39,9.01,3.39,14.49,0,6.14-1.3,11.6-3.89,16.37-2.59,4.77-6.05,8.49-10.38,11.16-4.33,2.66-9.01,4-14.04,4s-9.55-1.22-13.32-3.66v18.43c0,3.33-.15,5.84-.44,7.55l6.99-.33v4.55h-22.64v-3.33ZM736.14,77.92c2.55-2.15,4.53-5.14,5.94-8.99,1.4-3.85,2.11-8.21,2.11-13.1,0-6.66-1.43-12.3-4.27-16.93-2.85-4.62-7.09-6.94-12.71-6.94-2.44,0-4.81.59-7.1,1.78-2.29,1.18-4.29,2.66-5.99,4.44.07.52.11,2.77.11,6.77l-.11,31.86c3.77,2.89,8.1,4.33,12.99,4.33,3.48,0,6.49-1.07,9.05-3.22Z"/>
                <path fill="#475569" d="M768.89,81.92c-2.85-2.44-4.27-5.62-4.27-9.55,0-4.29,1.72-7.92,5.16-10.88,3.44-2.96,7.77-5.16,12.99-6.6,5.22-1.44,10.45-2.13,15.71-2.05v-6.88c0-4.81-.7-8.56-2.11-11.27-1.41-2.7-4.4-4.05-8.99-4.05-2.29,0-4.48.48-6.55,1.44-2.07.96-3.59,2.41-4.55,4.33.96,1.04,1.44,2.44,1.44,4.22,0,1.11-.41,2.16-1.22,3.16-.82,1-2,1.5-3.55,1.5s-2.77-.5-3.66-1.5c-.89-1-1.33-2.31-1.33-3.94,0-2.44.94-4.68,2.83-6.72,1.89-2.03,4.51-3.64,7.88-4.83,3.37-1.18,7.12-1.78,11.27-1.78,6.22,0,10.8,1.65,13.76,4.94,2.96,3.29,4.4,8.49,4.33,15.6l-.11,24.98c0,2.37-.15,4.88-.44,7.55l7.88-.44v4.66h-15.87c-.22-1.11-.48-3.22-.78-6.33-5.4,5.4-11.21,8.1-17.43,8.1-5.4,0-9.53-1.22-12.38-3.66ZM791.47,77.64c2.29-1.07,4.62-2.72,6.99-4.94-.07-1.11-.11-3-.11-5.66l.11-10.43c-6.07.22-11.47,1.46-16.21,3.72-4.74,2.26-7.1,5.72-7.1,10.38,0,2.74.81,4.85,2.44,6.33,1.63,1.48,3.7,2.22,6.22,2.22,2.81,0,5.37-.54,7.66-1.61Z"/>
                <path fill="#475569" d="M836.82,82.14c-4.18-2.29-7.49-5.59-9.93-9.88-2.44-4.29-3.66-9.36-3.66-15.21,0-5.18,1.24-10.12,3.72-14.82,2.48-4.7,5.92-8.49,10.32-11.38,4.4-2.89,9.38-4.33,14.93-4.33,4,0,7.55.63,10.66,1.89,3.11,1.26,5.53,2.92,7.27,5,1.74,2.07,2.61,4.33,2.61,6.77,0,1.7-.48,3.11-1.44,4.22-.96,1.11-2.29,1.66-4,1.66s-2.85-.54-3.66-1.61c-.82-1.07-1.22-2.2-1.22-3.39,0-1.85.55-3.33,1.67-4.44-.82-2.29-2.39-3.87-4.72-4.72-2.33-.85-4.64-1.28-6.94-1.28-3.4,0-6.46.93-9.16,2.77-2.7,1.85-4.83,4.55-6.38,8.1-1.55,3.55-2.33,7.81-2.33,12.77s.79,9.36,2.39,13.21c1.59,3.85,3.83,6.86,6.71,9.05,2.89,2.18,6.22,3.27,9.99,3.27,3.33,0,6.6-.91,9.82-2.72,3.22-1.81,5.75-4.09,7.6-6.83l2.89,2.22c-2.74,4.29-6.27,7.55-10.6,9.77-4.33,2.22-8.57,3.33-12.71,3.33-5.03,0-9.64-1.15-13.82-3.44Z"/>
                <path fill="#475569" d="M895.65,81.97c-4.11-2.4-7.35-5.84-9.71-10.32-2.37-4.48-3.55-9.64-3.55-15.48,0-5.18,1.18-10.05,3.55-14.6,2.37-4.55,5.68-8.2,9.93-10.93,4.25-2.74,9.08-4.11,14.49-4.11,4.22,0,8.03.93,11.43,2.77,3.4,1.85,6.1,4.61,8.1,8.27s3,8.16,3,13.49l-39.07.67c-.07,8.88,1.39,15.8,4.38,20.76,3,4.96,7.64,7.44,13.93,7.44,3.4,0,6.9-.89,10.49-2.66,3.59-1.78,6.34-3.96,8.27-6.55l2.66,2.22c-2.81,4.29-6.46,7.48-10.93,9.55-4.48,2.07-8.86,3.11-13.15,3.11-5.11,0-9.71-1.2-13.82-3.61ZM922.46,47.06c0-4.44-1-8.25-3-11.43-2-3.18-5-4.77-8.99-4.77-9.18,0-14.62,5.4-16.32,16.21h28.31Z"/>
                <g transform="translate(330, 155)" fill="#475569">
                  <path d="M18.75,43.78c-3.7,0-6.96-.9-9.76-2.7-2.81-1.8-5.01-4.32-6.6-7.54-1.6-3.23-2.39-6.98-2.39-11.26s.8-7.97,2.39-11.2c1.59-3.23,3.79-5.75,6.6-7.57,2.8-1.82,6.06-2.73,9.76-2.73s7.08.91,9.9,2.73c2.82,1.82,5.01,4.35,6.57,7.57,1.56,3.23,2.34,6.96,2.34,11.2s-.78,8.03-2.34,11.26c-1.56,3.23-3.75,5.74-6.57,7.54-2.82,1.8-6.12,2.7-9.9,2.7ZM18.81,38.49c2.64,0,4.95-.65,6.93-1.96,1.98-1.31,3.51-3.17,4.59-5.58,1.08-2.42,1.62-5.31,1.62-8.67s-.54-6.26-1.62-8.67c-1.08-2.42-2.61-4.27-4.59-5.55-1.98-1.29-4.29-1.93-6.93-1.93s-4.95.64-6.93,1.93c-1.98,1.29-3.52,3.14-4.62,5.55-1.1,2.42-1.65,5.31-1.65,8.67s.55,6.26,1.65,8.67c1.1,2.42,2.64,4.28,4.62,5.58,1.98,1.31,4.29,1.96,6.93,1.96Z"/>
                  <path d="M59.56,43.78c-2.16,0-4.04-.48-5.64-1.43-1.59-.95-2.82-2.38-3.69-4.28-.86-1.9-1.29-4.3-1.29-7.19V13.13h5.5v17.11c0,2.81.57,4.93,1.71,6.36,1.14,1.43,2.77,2.14,4.9,2.14,1.43,0,2.72-.38,3.88-1.13,1.16-.75,2.06-1.84,2.72-3.27.66-1.43.99-3.17.99-5.23v-15.98h5.5v29.94h-4.9l-.39-5.11c-.84,1.82-2.07,3.25-3.69,4.28-1.61,1.03-3.48,1.54-5.61,1.54Z"/>
                  <path d="M98.56,43.06c-1.72,0-3.23-.3-4.51-.89-1.28-.59-2.27-1.58-2.97-2.97-.7-1.39-1.04-3.27-1.04-5.64v-15.38h-4.79v-5.05h4.79l.66-7.48h4.84v7.48h7.86v5.05h-7.86v15.44c0,1.7.33,2.86.99,3.48.66.61,1.8.92,3.41.92h3.19v5.05h-4.56Z"/>
                  <path d="M126.99,43.78c-2.68,0-5.06-.66-7.15-1.99-2.09-1.33-3.73-3.16-4.92-5.49-1.19-2.34-1.79-5.05-1.79-8.14s.6-5.87,1.79-8.23c1.19-2.36,2.83-4.2,4.92-5.52,2.09-1.33,4.47-1.99,7.15-1.99,3.37,0,6.2.95,8.47,2.85,2.27,1.9,3.72,4.48,4.35,7.72h-5.72c-.37-1.74-1.2-3.09-2.5-4.04-1.3-.95-2.85-1.43-4.65-1.43-1.47,0-2.82.41-4.07,1.22-1.25.81-2.25,2-3,3.56-.75,1.56-1.13,3.5-1.13,5.79,0,1.7.22,3.22.66,4.54.44,1.33,1.04,2.45,1.79,3.36.75.91,1.62,1.59,2.61,2.05.99.46,2.03.68,3.13.68,1.21,0,2.3-.21,3.27-.62.97-.42,1.8-1.04,2.48-1.87.68-.83,1.15-1.82,1.4-2.97h5.72c-.62,3.17-2.07,5.71-4.35,7.63-2.27,1.92-5.1,2.88-8.47,2.88Z"/>
                  <path d="M164.39,43.78c-2.6,0-4.94-.65-7.01-1.96-2.07-1.31-3.7-3.14-4.9-5.49-1.19-2.36-1.79-5.08-1.79-8.17s.6-5.93,1.81-8.29c1.21-2.36,2.86-4.19,4.95-5.49,2.09-1.31,4.44-1.96,7.04-1.96s4.99.65,7.04,1.96c2.05,1.31,3.68,3.13,4.87,5.46,1.19,2.34,1.79,5.09,1.79,8.26s-.6,5.92-1.79,8.26c-1.19,2.34-2.83,4.16-4.92,5.46-2.09,1.31-4.46,1.96-7.09,1.96ZM164.39,38.67c1.5,0,2.87-.4,4.1-1.19,1.23-.79,2.22-1.97,2.97-3.53.75-1.56,1.13-3.51,1.13-5.85s-.37-4.29-1.1-5.85c-.73-1.56-1.71-2.74-2.94-3.53-1.23-.79-2.58-1.19-4.04-1.19s-2.82.4-4.07,1.19c-1.25.79-2.25,1.97-3,3.53-.75,1.56-1.13,3.52-1.13,5.85s.38,4.29,1.13,5.85c.75,1.56,1.74,2.74,2.97,3.53,1.23.79,2.56,1.19,3.99,1.19Z"/>
                  <path d="M190.19,43.06V13.13h4.95l.39,4.22c.88-1.54,2.05-2.75,3.52-3.62,1.47-.87,3.12-1.31,4.95-1.31,1.39,0,2.66.21,3.79.62,1.14.42,2.15,1.04,3.03,1.87.88.83,1.59,1.86,2.14,3.09.99-1.74,2.32-3.11,3.99-4.1,1.67-.99,3.44-1.48,5.31-1.48,2.24,0,4.16.49,5.77,1.46,1.61.97,2.84,2.42,3.69,4.34.84,1.92,1.26,4.31,1.26,7.16v17.7h-5.44v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.36,0-2.57.38-3.63,1.13-1.06.75-1.9,1.84-2.5,3.27-.6,1.43-.91,3.17-.91,5.23v15.92h-5.5v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.28,0-2.46.38-3.52,1.13-1.06.75-1.91,1.84-2.53,3.27-.62,1.43-.93,3.17-.93,5.23v15.92h-5.5Z"/>
                  <path d="M258.11,43.78c-2.64,0-4.99-.65-7.04-1.96-2.05-1.31-3.66-3.13-4.81-5.46-1.16-2.34-1.73-5.05-1.73-8.14s.58-5.93,1.73-8.29c1.15-2.36,2.76-4.2,4.81-5.52,2.05-1.33,4.44-1.99,7.15-1.99s5.04.65,6.98,1.96c1.94,1.31,3.45,3.04,4.51,5.2,1.06,2.16,1.6,4.54,1.6,7.16,0,.4,0,.82-.03,1.28-.02.46-.05.96-.08,1.52h-22.66v-4.22h17.27c-.11-2.49-.88-4.44-2.31-5.85-1.43-1.41-3.21-2.11-5.33-2.11-1.5,0-2.88.37-4.12,1.1-1.25.73-2.25,1.8-3,3.21-.75,1.41-1.13,3.18-1.13,5.32v1.66c0,2.22.38,4.09,1.13,5.61.75,1.52,1.75,2.67,3,3.45,1.25.77,2.6,1.16,4.07,1.16,1.76,0,3.21-.42,4.35-1.25,1.14-.83,1.98-1.96,2.53-3.39h5.5c-.48,1.82-1.28,3.46-2.42,4.9-1.14,1.45-2.54,2.58-4.21,3.42-1.67.83-3.58,1.25-5.75,1.25Z"/>
                  <path d="M302.77,43.06V1.48h11.82c4.47,0,8.18.85,11.11,2.55,2.93,1.7,5.11,4.11,6.52,7.22,1.41,3.11,2.12,6.8,2.12,11.08s-.71,7.96-2.12,11.05c-1.41,3.09-3.57,5.48-6.49,7.16-2.92,1.68-6.63,2.52-11.14,2.52h-11.82ZM308.27,38.08h6.1c3.56,0,6.38-.63,8.47-1.9,2.09-1.27,3.58-3.08,4.48-5.44.9-2.36,1.35-5.16,1.35-8.4s-.45-6.12-1.35-8.49-2.39-4.2-4.48-5.46c-2.09-1.27-4.91-1.9-8.47-1.9h-6.1v31.6Z"/>
                  <path d="M349.36,56.13l6.76-16.39h-1.59l-10.95-26.61h5.94l8.69,21.74,8.74-21.74h5.78l-17.6,43.01h-5.77Z"/>
                  <path d="M383.07,43.06V13.13h4.95l.33,5.11c.88-1.78,2.13-3.2,3.74-4.25,1.61-1.05,3.47-1.57,5.56-1.57,2.2,0,4.09.48,5.67,1.43,1.58.95,2.81,2.39,3.69,4.31.88,1.92,1.32,4.33,1.32,7.22v17.7h-5.5v-17.11c0-2.77-.57-4.87-1.71-6.3-1.14-1.43-2.79-2.14-4.95-2.14-1.43,0-2.71.37-3.85,1.1-1.14.73-2.04,1.81-2.72,3.24-.68,1.43-1.02,3.17-1.02,5.23v15.98h-5.5Z"/>
                  <path d="M430.04,43.78c-2.27,0-4.16-.42-5.67-1.25-1.5-.83-2.62-1.95-3.35-3.36-.73-1.41-1.1-2.92-1.1-4.54,0-1.98.48-3.67,1.43-5.08.95-1.4,2.31-2.48,4.07-3.24,1.76-.75,3.87-1.13,6.32-1.13h7.21c0-1.74-.24-3.19-.71-4.34-.48-1.15-1.18-2.01-2.12-2.58-.94-.57-2.12-.86-3.55-.86-1.65,0-3.06.43-4.23,1.28-1.17.85-1.91,2.11-2.2,3.77h-5.5c.22-2.1.89-3.89,2.01-5.38,1.12-1.49,2.56-2.63,4.32-3.45,1.76-.81,3.63-1.22,5.61-1.22,2.6,0,4.79.5,6.54,1.48,1.76.99,3.09,2.39,3.99,4.19.9,1.8,1.35,3.95,1.35,6.44v18.53h-4.79l-.44-5.05c-.4.79-.88,1.54-1.43,2.26-.55.71-1.2,1.33-1.95,1.84-.75.52-1.61.92-2.58,1.22-.97.3-2.04.45-3.22.45ZM431.09,38.97c1.17,0,2.24-.26,3.19-.77.95-.51,1.77-1.22,2.45-2.11.68-.89,1.19-1.9,1.54-3.03.35-1.13.54-2.29.58-3.48v-.18h-6.54c-1.58,0-2.85.21-3.82.62-.97.42-1.68.98-2.12,1.69-.44.71-.66,1.54-.66,2.49s.21,1.83.63,2.52c.42.69,1.04,1.24,1.84,1.63.81.4,1.78.59,2.92.59Z"/>
                  <path d="M456.99,43.06V13.13h4.95l.39,4.22c.88-1.54,2.05-2.75,3.52-3.62,1.47-.87,3.12-1.31,4.95-1.31,1.39,0,2.66.21,3.79.62,1.14.42,2.15,1.04,3.03,1.87.88.83,1.59,1.86,2.14,3.09.99-1.74,2.32-3.11,3.99-4.1,1.67-.99,3.44-1.48,5.31-1.48,2.24,0,4.16.49,5.77,1.46,1.61.97,2.84,2.42,3.69,4.34.84,1.92,1.26,4.31,1.26,7.16v17.7h-5.44v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.36,0-2.57.38-3.63,1.13-1.06.75-1.9,1.84-2.5,3.27-.6,1.43-.91,3.17-.91,5.23v15.92h-5.5v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.28,0-2.46.38-3.52,1.13-1.06.75-1.91,1.84-2.53,3.27-.62,1.43-.93,3.17-.93,5.23v15.92h-5.5Z"/>
                  <path d="M515.57,7.48c-1.06,0-1.93-.36-2.61-1.07-.68-.71-1.02-1.62-1.02-2.73s.34-1.95,1.02-2.64c.68-.69,1.55-1.04,2.61-1.04s1.89.35,2.58,1.04c.7.69,1.04,1.57,1.04,2.64s-.35,2.02-1.04,2.73c-.7.71-1.56,1.07-2.58,1.07ZM512.76,43.06V13.13h5.5v29.94h-5.5Z"/>
                  <path d="M544.44,43.78c-2.68,0-5.06-.66-7.15-1.99-2.09-1.33-3.73-3.16-4.92-5.49-1.19-2.34-1.79-5.05-1.79-8.14s.6-5.87,1.79-8.23c1.19-2.36,2.83-4.2,4.92-5.52,2.09-1.33,4.47-1.99,7.15-1.99,3.37,0,6.2.95,8.47,2.85,2.27,1.9,3.72,4.48,4.35,7.72h-5.72c-.37-1.74-1.2-3.09-2.5-4.04-1.3-.95-2.85-1.43-4.65-1.43-1.47,0-2.82.41-4.07,1.22-1.25.81-2.25,2-3,3.56-.75,1.56-1.13,3.5-1.13,5.79,0,1.7.22,3.22.66,4.54.44,1.33,1.04,2.45,1.79,3.36.75.91,1.62,1.59,2.61,2.05.99.46,2.03.68,3.13.68,1.21,0,2.3-.21,3.27-.62.97-.42,1.8-1.04,2.48-1.87.68-.83,1.15-1.82,1.4-2.97h5.72c-.62,3.17-2.07,5.71-4.35,7.63-2.27,1.92-5.1,2.88-8.47,2.88Z"/>
                  <path d="M579.92,43.78c-2.35,0-4.4-.42-6.16-1.25-1.76-.83-3.15-2-4.18-3.5-1.03-1.5-1.65-3.27-1.87-5.29h5.61c.18.95.54,1.82,1.07,2.61.53.79,1.27,1.43,2.2,1.9.93.48,2.04.71,3.33.71,1.21,0,2.21-.19,3-.56.79-.38,1.37-.89,1.73-1.54.37-.65.55-1.36.55-2.11,0-1.11-.25-1.95-.74-2.52-.5-.57-1.23-1.03-2.2-1.37-.97-.34-2.14-.64-3.49-.92-1.28-.24-2.52-.56-3.71-.98-1.19-.42-2.26-.94-3.19-1.57-.94-.63-1.68-1.44-2.23-2.41-.55-.97-.83-2.17-.83-3.59,0-1.7.42-3.24,1.27-4.6.84-1.37,2.04-2.44,3.6-3.21,1.56-.77,3.4-1.16,5.53-1.16,3.08,0,5.56.79,7.42,2.38,1.87,1.58,2.97,3.82,3.3,6.71h-5.33c-.15-1.35-.7-2.39-1.65-3.12-.95-.73-2.22-1.1-3.8-1.1s-2.79.34-3.63,1.01c-.84.67-1.27,1.56-1.27,2.67,0,.71.24,1.35.72,1.9.48.55,1.18,1.02,2.12,1.4.94.38,2.08.72,3.44,1.04,1.94.4,3.69.89,5.23,1.49,1.54.59,2.77,1.47,3.69,2.61.92,1.15,1.38,2.79,1.38,4.93.04,1.86-.39,3.5-1.29,4.93-.9,1.43-2.16,2.53-3.79,3.33-1.63.79-3.57,1.19-5.8,1.19Z"/>
                </g>
              </svg>
              <p style={{ fontSize: '14px', color: '#64748b', textAlign: 'center', marginTop: '16px' }}>
                Icon mark + "WhiteSpace Outcome Dynamics" wordmark. Gray band grounds the second line.
              </p>
            </div>

            {/* Lockup Variations */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Lockup Variations</h3>
            <div className="grid-3" style={{ marginBottom: '48px' }}>
              <div className="box" style={{ textAlign: 'center', padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={100} />
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginTop: '16px' }}>Icon Only</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Favicons, avatars, small spaces</p>
              </div>
              <div className="box" style={{ textAlign: 'center', padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <svg height="80" viewBox="0 0 940.29 233.84" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '16px' }}>
                  <rect fill="#f2f2f2" x="311.49" y="123.09" width="628.8" height="110.75"/>
                                    <g transform="translate(-2.5, 0)">
                    <path fill="#475569" d="M220.27,231.92c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.87c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
                    <path fill="#fbbf24" d="M258.78,4.61c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21.82c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
                  </g>
                  <g transform="translate(2.5, 0)">
                    <path fill="#475569" d="M66.27,231.92c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21.82C0,11.32,8.75,2.57,19.25,2.57c3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
                    <path fill="#00bfa5" d="M143.27,1.43c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V58.57C77,26.02,102.9.82,134.75.82c2.89,0,5.74.21,8.52.61Z"/>
                  </g>
                  <path fill="#475569" d="M325.17,25.86l-1.44-4.33c-1.78-5.55-2.85-9.14-3.22-10.77l-6.22.22v-4.88h26.97v3.66c-3.04.15-5.18.65-6.44,1.5-1.26.85-1.89,2.24-1.89,4.16,0,1.78.37,3.92,1.11,6.44,1.33,4.96,3.11,10.51,5.33,16.65.37,1.11.81,2.42,1.33,3.94.52,1.52,1.11,3.27,1.78,5.27.44,1.55,1,3.26,1.67,5.11.67,1.85,1.15,3.18,1.44,4,1.48,4,2.59,7.18,3.33,9.55h.22c1.48-5.03,3-9.92,4.55-14.65,2.66-8.58,5.59-17.65,8.77-27.19,3.33-9.99,5.33-16.21,5.99-18.65h3.55c.89,3.04,2.4,7.79,4.55,14.26,2.15,6.48,3.7,11.16,4.66,14.04,2.22,6.37,3.74,10.88,4.55,13.54.59,2,1.55,5,2.89,8.99,1.48,4.29,2.66,7.96,3.55,10.99h.33c1.78-5.77,3.29-10.54,4.55-14.32,3.77-10.73,6.84-19.98,9.21-27.75.81-2.74,1.55-5.03,2.22-6.88,1.41-3.77,2.55-6.47,3.44-8.1l-8.88.33v-4.88h22.53v3.66c-2.66.3-4.68.85-6.05,1.67-1.37.82-2.59,2.28-3.66,4.38-1.07,2.11-2.42,5.57-4.05,10.38l-5.66,16.87c-5.92,17.98-10.69,31.93-14.32,41.85h-3.33l-20.76-59.38-19.54,59.38h-3.22l-19.87-59.05Z"/>
                  <path fill="#475569" d="M430.73,80.48c2.14,0,3.7-.54,4.66-1.61.96-1.07,1.54-2.46,1.72-4.16.18-1.7.28-4.29.28-7.77V14.43c0-2.81.11-5.22.33-7.21l-7.88.44V3c4.44,0,7.6-.26,9.49-.78,1.89-.52,3.35-1.26,4.38-2.22h3.22v33.85c2.59-2.15,5.51-3.9,8.77-5.27,3.26-1.37,6.4-2.05,9.43-2.05,6.36,0,10.99,2,13.88,5.99,2.89,4,4.37,10.29,4.44,18.87l.11,20.65c0,3.33-.15,5.85-.44,7.55l6.99-.33v4.55h-22.64v-3.33c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.48-2.44,1.67-4.11.18-1.67.28-4.27.28-7.83v-15.54c0-6.36-1-11.12-3-14.26-2-3.14-5.14-4.72-9.44-4.72-2.74,0-5.46.65-8.16,1.94-2.7,1.3-4.87,2.94-6.49,4.94v32.75c0,2.89-.19,5.4-.56,7.55l6.99-.33v4.55h-22.64v-3.33Z"/>
                  <path fill="#475569" d="M498.88,80.48c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.48-2.44,1.67-4.11.18-1.67.28-4.27.28-7.83v-25.31c0-2.15.15-4.55.44-7.21l-7.88.44v-4.66c4.37,0,7.49-.26,9.38-.78,1.89-.52,3.35-1.26,4.38-2.22h3.22v44.84c0,3.33-.15,5.85-.44,7.55l6.99-.33v4.55h-22.64v-3.33ZM505.76,14.26c-1.18-1.29-1.78-2.83-1.78-4.61s.61-3.33,1.83-4.66c1.22-1.33,2.61-2,4.16-2,1.7,0,3.12.65,4.27,1.94,1.15,1.3,1.72,2.87,1.72,4.72s-.61,3.31-1.83,4.61c-1.22,1.3-2.65,1.94-4.27,1.94s-2.92-.65-4.11-1.94Z"/>
                  <path fill="#475569" d="M538.18,65.16l.22-32.19-8.55.11v-4.77c3.55-.07,6.57-1.68,9.05-4.83,2.48-3.14,4.31-6.72,5.49-10.71h3.77v15.54h18.65v4.33l-18.65.22c-.08,11.32-.13,19.17-.17,23.53-.04,4.37-.06,6.81-.06,7.33,0,5.25.63,9.16,1.89,11.71,1.26,2.55,3.44,3.83,6.55,3.83,1.92,0,3.83-.59,5.72-1.78,1.89-1.18,3.53-2.81,4.94-4.88l3,2.44c-2.89,4.29-5.74,7.12-8.55,8.49-2.81,1.37-5.55,2.05-8.21,2.05-10.14,0-15.17-6.81-15.1-20.42Z"/>
                  <path fill="#475569" d="M588.96,81.97c-4.11-2.4-7.35-5.84-9.71-10.32-2.37-4.48-3.55-9.64-3.55-15.48,0-5.18,1.18-10.05,3.55-14.6,2.37-4.55,5.68-8.2,9.93-10.93,4.25-2.74,9.08-4.11,14.49-4.11,4.22,0,8.03.93,11.43,2.77,3.4,1.85,6.1,4.61,8.1,8.27s3,8.16,3,13.49l-39.07.67c-.07,8.88,1.39,15.8,4.38,20.76,3,4.96,7.64,7.44,13.93,7.44,3.4,0,6.9-.89,10.49-2.66,3.59-1.78,6.34-3.96,8.27-6.55l2.66,2.22c-2.81,4.29-6.46,7.48-10.93,9.55-4.48,2.07-8.86,3.11-13.15,3.11-5.11,0-9.71-1.2-13.82-3.61ZM615.76,47.06c0-4.44-1-8.25-3-11.43-2-3.18-5-4.77-8.99-4.77-9.18,0-14.62,5.4-16.32,16.21h28.31Z"/>
                  <path fill="#475569" d="M652.78,84.14c-3.52-.96-6.6-2.37-9.27-4.22l.55,4.77h-5.77l-.67-23.64h4.33c.37,6.37,2.55,11.27,6.55,14.71,4,3.44,9.06,5.16,15.21,5.16,4.51,0,8.31-1.24,11.38-3.72,3.07-2.48,4.61-5.86,4.61-10.16,0-3.18-.87-5.9-2.61-8.16-1.74-2.26-3.88-4.14-6.44-5.66-2.55-1.52-6.01-3.27-10.38-5.27-4.96-2.37-8.9-4.44-11.82-6.22-2.92-1.78-5.42-4.12-7.49-7.05-2.07-2.92-3.11-6.53-3.11-10.82,0-2.96.68-5.92,2.05-8.88,1.37-2.96,3.74-5.48,7.1-7.55,3.37-2.07,7.83-3.11,13.38-3.11,3.33,0,6.68.43,10.04,1.28,3.37.85,6.46,2.31,9.27,4.38l-.44-4.77h5.66v24.42h-4c-.37-5.84-2.24-10.78-5.61-14.82-3.37-4.03-8.08-6.05-14.15-6.05-4.44,0-7.92,1.24-10.43,3.72-2.52,2.48-3.77,5.57-3.77,9.27,0,2.96.85,5.51,2.55,7.66,1.7,2.15,3.77,3.92,6.22,5.33,2.44,1.41,5.88,3.15,10.32,5.22,5.03,2.29,9.08,4.37,12.16,6.22,3.07,1.85,5.68,4.27,7.83,7.27,2.15,3,3.22,6.68,3.22,11.04s-1.02,7.81-3.05,10.99c-2.04,3.18-5.01,5.66-8.94,7.44-3.92,1.78-8.59,2.66-13.99,2.66-3.48,0-6.98-.48-10.49-1.44Z"/>
                  <path fill="#475569" d="M697.9,108.78c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.46-2.41,1.61-4,.15-1.59.26-4.24.33-7.94l.22-53.61c0-3.11.15-5.51.44-7.21l-7.88.44v-4.66c4.37,0,7.36-.24,8.99-.72,1.63-.48,2.96-1.24,4-2.28h3.33c.29,3.63.44,5.62.44,5.99,2.22-2,4.88-3.61,7.99-4.83,3.11-1.22,6.18-1.83,9.21-1.83,4.37,0,8.4,1.13,12.1,3.39,3.7,2.26,6.68,5.48,8.94,9.66,2.26,4.18,3.39,9.01,3.39,14.49,0,6.14-1.3,11.6-3.89,16.37-2.59,4.77-6.05,8.49-10.38,11.16-4.33,2.66-9.01,4-14.04,4s-9.55-1.22-13.32-3.66v18.43c0,3.33-.15,5.84-.44,7.55l6.99-.33v4.55h-22.64v-3.33ZM736.14,77.92c2.55-2.15,4.53-5.14,5.94-8.99,1.4-3.85,2.11-8.21,2.11-13.1,0-6.66-1.43-12.3-4.27-16.93-2.85-4.62-7.09-6.94-12.71-6.94-2.44,0-4.81.59-7.1,1.78-2.29,1.18-4.29,2.66-5.99,4.44.07.52.11,2.77.11,6.77l-.11,31.86c3.77,2.89,8.1,4.33,12.99,4.33,3.48,0,6.49-1.07,9.05-3.22Z"/>
                  <path fill="#475569" d="M768.89,81.92c-2.85-2.44-4.27-5.62-4.27-9.55,0-4.29,1.72-7.92,5.16-10.88,3.44-2.96,7.77-5.16,12.99-6.6,5.22-1.44,10.45-2.13,15.71-2.05v-6.88c0-4.81-.7-8.56-2.11-11.27-1.41-2.7-4.4-4.05-8.99-4.05-2.29,0-4.48.48-6.55,1.44-2.07.96-3.59,2.41-4.55,4.33.96,1.04,1.44,2.44,1.44,4.22,0,1.11-.41,2.16-1.22,3.16-.82,1-2,1.5-3.55,1.5s-2.77-.5-3.66-1.5c-.89-1-1.33-2.31-1.33-3.94,0-2.44.94-4.68,2.83-6.72,1.89-2.03,4.51-3.64,7.88-4.83,3.37-1.18,7.12-1.78,11.27-1.78,6.22,0,10.8,1.65,13.76,4.94,2.96,3.29,4.4,8.49,4.33,15.6l-.11,24.98c0,2.37-.15,4.88-.44,7.55l7.88-.44v4.66h-15.87c-.22-1.11-.48-3.22-.78-6.33-5.4,5.4-11.21,8.1-17.43,8.1-5.4,0-9.53-1.22-12.38-3.66ZM791.47,77.64c2.29-1.07,4.62-2.72,6.99-4.94-.07-1.11-.11-3-.11-5.66l.11-10.43c-6.07.22-11.47,1.46-16.21,3.72-4.74,2.26-7.1,5.72-7.1,10.38,0,2.74.81,4.85,2.44,6.33,1.63,1.48,3.7,2.22,6.22,2.22,2.81,0,5.37-.54,7.66-1.61Z"/>
                  <path fill="#475569" d="M836.82,82.14c-4.18-2.29-7.49-5.59-9.93-9.88-2.44-4.29-3.66-9.36-3.66-15.21,0-5.18,1.24-10.12,3.72-14.82,2.48-4.7,5.92-8.49,10.32-11.38,4.4-2.89,9.38-4.33,14.93-4.33,4,0,7.55.63,10.66,1.89,3.11,1.26,5.53,2.92,7.27,5,1.74,2.07,2.61,4.33,2.61,6.77,0,1.7-.48,3.11-1.44,4.22-.96,1.11-2.29,1.66-4,1.66s-2.85-.54-3.66-1.61c-.82-1.07-1.22-2.2-1.22-3.39,0-1.85.55-3.33,1.67-4.44-.82-2.29-2.39-3.87-4.72-4.72-2.33-.85-4.64-1.28-6.94-1.28-3.4,0-6.46.93-9.16,2.77-2.7,1.85-4.83,4.55-6.38,8.1-1.55,3.55-2.33,7.81-2.33,12.77s.79,9.36,2.39,13.21c1.59,3.85,3.83,6.86,6.71,9.05,2.89,2.18,6.22,3.27,9.99,3.27,3.33,0,6.6-.91,9.82-2.72,3.22-1.81,5.75-4.09,7.6-6.83l2.89,2.22c-2.74,4.29-6.27,7.55-10.6,9.77-4.33,2.22-8.57,3.33-12.71,3.33-5.03,0-9.64-1.15-13.82-3.44Z"/>
                  <path fill="#475569" d="M895.65,81.97c-4.11-2.4-7.35-5.84-9.71-10.32-2.37-4.48-3.55-9.64-3.55-15.48,0-5.18,1.18-10.05,3.55-14.6,2.37-4.55,5.68-8.2,9.93-10.93,4.25-2.74,9.08-4.11,14.49-4.11,4.22,0,8.03.93,11.43,2.77,3.4,1.85,6.1,4.61,8.1,8.27s3,8.16,3,13.49l-39.07.67c-.07,8.88,1.39,15.8,4.38,20.76,3,4.96,7.64,7.44,13.93,7.44,3.4,0,6.9-.89,10.49-2.66,3.59-1.78,6.34-3.96,8.27-6.55l2.66,2.22c-2.81,4.29-6.46,7.48-10.93,9.55-4.48,2.07-8.86,3.11-13.15,3.11-5.11,0-9.71-1.2-13.82-3.61ZM922.46,47.06c0-4.44-1-8.25-3-11.43-2-3.18-5-4.77-8.99-4.77-9.18,0-14.62,5.4-16.32,16.21h28.31Z"/>
                  <g transform="translate(330, 155)" fill="#475569">
                  <path d="M18.75,43.78c-3.7,0-6.96-.9-9.76-2.7-2.81-1.8-5.01-4.32-6.6-7.54-1.6-3.23-2.39-6.98-2.39-11.26s.8-7.97,2.39-11.2c1.59-3.23,3.79-5.75,6.6-7.57,2.8-1.82,6.06-2.73,9.76-2.73s7.08.91,9.9,2.73c2.82,1.82,5.01,4.35,6.57,7.57,1.56,3.23,2.34,6.96,2.34,11.2s-.78,8.03-2.34,11.26c-1.56,3.23-3.75,5.74-6.57,7.54-2.82,1.8-6.12,2.7-9.9,2.7ZM18.81,38.49c2.64,0,4.95-.65,6.93-1.96,1.98-1.31,3.51-3.17,4.59-5.58,1.08-2.42,1.62-5.31,1.62-8.67s-.54-6.26-1.62-8.67c-1.08-2.42-2.61-4.27-4.59-5.55-1.98-1.29-4.29-1.93-6.93-1.93s-4.95.64-6.93,1.93c-1.98,1.29-3.52,3.14-4.62,5.55-1.1,2.42-1.65,5.31-1.65,8.67s.55,6.26,1.65,8.67c1.1,2.42,2.64,4.28,4.62,5.58,1.98,1.31,4.29,1.96,6.93,1.96Z"/>
                  <path d="M59.56,43.78c-2.16,0-4.04-.48-5.64-1.43-1.59-.95-2.82-2.38-3.69-4.28-.86-1.9-1.29-4.3-1.29-7.19V13.13h5.5v17.11c0,2.81.57,4.93,1.71,6.36,1.14,1.43,2.77,2.14,4.9,2.14,1.43,0,2.72-.38,3.88-1.13,1.16-.75,2.06-1.84,2.72-3.27.66-1.43.99-3.17.99-5.23v-15.98h5.5v29.94h-4.9l-.39-5.11c-.84,1.82-2.07,3.25-3.69,4.28-1.61,1.03-3.48,1.54-5.61,1.54Z"/>
                  <path d="M98.56,43.06c-1.72,0-3.23-.3-4.51-.89-1.28-.59-2.27-1.58-2.97-2.97-.7-1.39-1.04-3.27-1.04-5.64v-15.38h-4.79v-5.05h4.79l.66-7.48h4.84v7.48h7.86v5.05h-7.86v15.44c0,1.7.33,2.86.99,3.48.66.61,1.8.92,3.41.92h3.19v5.05h-4.56Z"/>
                  <path d="M126.99,43.78c-2.68,0-5.06-.66-7.15-1.99-2.09-1.33-3.73-3.16-4.92-5.49-1.19-2.34-1.79-5.05-1.79-8.14s.6-5.87,1.79-8.23c1.19-2.36,2.83-4.2,4.92-5.52,2.09-1.33,4.47-1.99,7.15-1.99,3.37,0,6.2.95,8.47,2.85,2.27,1.9,3.72,4.48,4.35,7.72h-5.72c-.37-1.74-1.2-3.09-2.5-4.04-1.3-.95-2.85-1.43-4.65-1.43-1.47,0-2.82.41-4.07,1.22-1.25.81-2.25,2-3,3.56-.75,1.56-1.13,3.5-1.13,5.79,0,1.7.22,3.22.66,4.54.44,1.33,1.04,2.45,1.79,3.36.75.91,1.62,1.59,2.61,2.05.99.46,2.03.68,3.13.68,1.21,0,2.3-.21,3.27-.62.97-.42,1.8-1.04,2.48-1.87.68-.83,1.15-1.82,1.4-2.97h5.72c-.62,3.17-2.07,5.71-4.35,7.63-2.27,1.92-5.1,2.88-8.47,2.88Z"/>
                  <path d="M164.39,43.78c-2.6,0-4.94-.65-7.01-1.96-2.07-1.31-3.7-3.14-4.9-5.49-1.19-2.36-1.79-5.08-1.79-8.17s.6-5.93,1.81-8.29c1.21-2.36,2.86-4.19,4.95-5.49,2.09-1.31,4.44-1.96,7.04-1.96s4.99.65,7.04,1.96c2.05,1.31,3.68,3.13,4.87,5.46,1.19,2.34,1.79,5.09,1.79,8.26s-.6,5.92-1.79,8.26c-1.19,2.34-2.83,4.16-4.92,5.46-2.09,1.31-4.46,1.96-7.09,1.96ZM164.39,38.67c1.5,0,2.87-.4,4.1-1.19,1.23-.79,2.22-1.97,2.97-3.53.75-1.56,1.13-3.51,1.13-5.85s-.37-4.29-1.1-5.85c-.73-1.56-1.71-2.74-2.94-3.53-1.23-.79-2.58-1.19-4.04-1.19s-2.82.4-4.07,1.19c-1.25.79-2.25,1.97-3,3.53-.75,1.56-1.13,3.52-1.13,5.85s.38,4.29,1.13,5.85c.75,1.56,1.74,2.74,2.97,3.53,1.23.79,2.56,1.19,3.99,1.19Z"/>
                  <path d="M190.19,43.06V13.13h4.95l.39,4.22c.88-1.54,2.05-2.75,3.52-3.62,1.47-.87,3.12-1.31,4.95-1.31,1.39,0,2.66.21,3.79.62,1.14.42,2.15,1.04,3.03,1.87.88.83,1.59,1.86,2.14,3.09.99-1.74,2.32-3.11,3.99-4.1,1.67-.99,3.44-1.48,5.31-1.48,2.24,0,4.16.49,5.77,1.46,1.61.97,2.84,2.42,3.69,4.34.84,1.92,1.26,4.31,1.26,7.16v17.7h-5.44v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.36,0-2.57.38-3.63,1.13-1.06.75-1.9,1.84-2.5,3.27-.6,1.43-.91,3.17-.91,5.23v15.92h-5.5v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.28,0-2.46.38-3.52,1.13-1.06.75-1.91,1.84-2.53,3.27-.62,1.43-.93,3.17-.93,5.23v15.92h-5.5Z"/>
                  <path d="M258.11,43.78c-2.64,0-4.99-.65-7.04-1.96-2.05-1.31-3.66-3.13-4.81-5.46-1.16-2.34-1.73-5.05-1.73-8.14s.58-5.93,1.73-8.29c1.15-2.36,2.76-4.2,4.81-5.52,2.05-1.33,4.44-1.99,7.15-1.99s5.04.65,6.98,1.96c1.94,1.31,3.45,3.04,4.51,5.2,1.06,2.16,1.6,4.54,1.6,7.16,0,.4,0,.82-.03,1.28-.02.46-.05.96-.08,1.52h-22.66v-4.22h17.27c-.11-2.49-.88-4.44-2.31-5.85-1.43-1.41-3.21-2.11-5.33-2.11-1.5,0-2.88.37-4.12,1.1-1.25.73-2.25,1.8-3,3.21-.75,1.41-1.13,3.18-1.13,5.32v1.66c0,2.22.38,4.09,1.13,5.61.75,1.52,1.75,2.67,3,3.45,1.25.77,2.6,1.16,4.07,1.16,1.76,0,3.21-.42,4.35-1.25,1.14-.83,1.98-1.96,2.53-3.39h5.5c-.48,1.82-1.28,3.46-2.42,4.9-1.14,1.45-2.54,2.58-4.21,3.42-1.67.83-3.58,1.25-5.75,1.25Z"/>
                  <path d="M302.77,43.06V1.48h11.82c4.47,0,8.18.85,11.11,2.55,2.93,1.7,5.11,4.11,6.52,7.22,1.41,3.11,2.12,6.8,2.12,11.08s-.71,7.96-2.12,11.05c-1.41,3.09-3.57,5.48-6.49,7.16-2.92,1.68-6.63,2.52-11.14,2.52h-11.82ZM308.27,38.08h6.1c3.56,0,6.38-.63,8.47-1.9,2.09-1.27,3.58-3.08,4.48-5.44.9-2.36,1.35-5.16,1.35-8.4s-.45-6.12-1.35-8.49-2.39-4.2-4.48-5.46c-2.09-1.27-4.91-1.9-8.47-1.9h-6.1v31.6Z"/>
                  <path d="M349.36,56.13l6.76-16.39h-1.59l-10.95-26.61h5.94l8.69,21.74,8.74-21.74h5.78l-17.6,43.01h-5.77Z"/>
                  <path d="M383.07,43.06V13.13h4.95l.33,5.11c.88-1.78,2.13-3.2,3.74-4.25,1.61-1.05,3.47-1.57,5.56-1.57,2.2,0,4.09.48,5.67,1.43,1.58.95,2.81,2.39,3.69,4.31.88,1.92,1.32,4.33,1.32,7.22v17.7h-5.5v-17.11c0-2.77-.57-4.87-1.71-6.3-1.14-1.43-2.79-2.14-4.95-2.14-1.43,0-2.71.37-3.85,1.1-1.14.73-2.04,1.81-2.72,3.24-.68,1.43-1.02,3.17-1.02,5.23v15.98h-5.5Z"/>
                  <path d="M430.04,43.78c-2.27,0-4.16-.42-5.67-1.25-1.5-.83-2.62-1.95-3.35-3.36-.73-1.41-1.1-2.92-1.1-4.54,0-1.98.48-3.67,1.43-5.08.95-1.4,2.31-2.48,4.07-3.24,1.76-.75,3.87-1.13,6.32-1.13h7.21c0-1.74-.24-3.19-.71-4.34-.48-1.15-1.18-2.01-2.12-2.58-.94-.57-2.12-.86-3.55-.86-1.65,0-3.06.43-4.23,1.28-1.17.85-1.91,2.11-2.2,3.77h-5.5c.22-2.1.89-3.89,2.01-5.38,1.12-1.49,2.56-2.63,4.32-3.45,1.76-.81,3.63-1.22,5.61-1.22,2.6,0,4.79.5,6.54,1.48,1.76.99,3.09,2.39,3.99,4.19.9,1.8,1.35,3.95,1.35,6.44v18.53h-4.79l-.44-5.05c-.4.79-.88,1.54-1.43,2.26-.55.71-1.2,1.33-1.95,1.84-.75.52-1.61.92-2.58,1.22-.97.3-2.04.45-3.22.45ZM431.09,38.97c1.17,0,2.24-.26,3.19-.77.95-.51,1.77-1.22,2.45-2.11.68-.89,1.19-1.9,1.54-3.03.35-1.13.54-2.29.58-3.48v-.18h-6.54c-1.58,0-2.85.21-3.82.62-.97.42-1.68.98-2.12,1.69-.44.71-.66,1.54-.66,2.49s.21,1.83.63,2.52c.42.69,1.04,1.24,1.84,1.63.81.4,1.78.59,2.92.59Z"/>
                  <path d="M456.99,43.06V13.13h4.95l.39,4.22c.88-1.54,2.05-2.75,3.52-3.62,1.47-.87,3.12-1.31,4.95-1.31,1.39,0,2.66.21,3.79.62,1.14.42,2.15,1.04,3.03,1.87.88.83,1.59,1.86,2.14,3.09.99-1.74,2.32-3.11,3.99-4.1,1.67-.99,3.44-1.48,5.31-1.48,2.24,0,4.16.49,5.77,1.46,1.61.97,2.84,2.42,3.69,4.34.84,1.92,1.26,4.31,1.26,7.16v17.7h-5.44v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.36,0-2.57.38-3.63,1.13-1.06.75-1.9,1.84-2.5,3.27-.6,1.43-.91,3.17-.91,5.23v15.92h-5.5v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.28,0-2.46.38-3.52,1.13-1.06.75-1.91,1.84-2.53,3.27-.62,1.43-.93,3.17-.93,5.23v15.92h-5.5Z"/>
                  <path d="M515.57,7.48c-1.06,0-1.93-.36-2.61-1.07-.68-.71-1.02-1.62-1.02-2.73s.34-1.95,1.02-2.64c.68-.69,1.55-1.04,2.61-1.04s1.89.35,2.58,1.04c.7.69,1.04,1.57,1.04,2.64s-.35,2.02-1.04,2.73c-.7.71-1.56,1.07-2.58,1.07ZM512.76,43.06V13.13h5.5v29.94h-5.5Z"/>
                  <path d="M544.44,43.78c-2.68,0-5.06-.66-7.15-1.99-2.09-1.33-3.73-3.16-4.92-5.49-1.19-2.34-1.79-5.05-1.79-8.14s.6-5.87,1.79-8.23c1.19-2.36,2.83-4.2,4.92-5.52,2.09-1.33,4.47-1.99,7.15-1.99,3.37,0,6.2.95,8.47,2.85,2.27,1.9,3.72,4.48,4.35,7.72h-5.72c-.37-1.74-1.2-3.09-2.5-4.04-1.3-.95-2.85-1.43-4.65-1.43-1.47,0-2.82.41-4.07,1.22-1.25.81-2.25,2-3,3.56-.75,1.56-1.13,3.5-1.13,5.79,0,1.7.22,3.22.66,4.54.44,1.33,1.04,2.45,1.79,3.36.75.91,1.62,1.59,2.61,2.05.99.46,2.03.68,3.13.68,1.21,0,2.3-.21,3.27-.62.97-.42,1.8-1.04,2.48-1.87.68-.83,1.15-1.82,1.4-2.97h5.72c-.62,3.17-2.07,5.71-4.35,7.63-2.27,1.92-5.1,2.88-8.47,2.88Z"/>
                  <path d="M579.92,43.78c-2.35,0-4.4-.42-6.16-1.25-1.76-.83-3.15-2-4.18-3.5-1.03-1.5-1.65-3.27-1.87-5.29h5.61c.18.95.54,1.82,1.07,2.61.53.79,1.27,1.43,2.2,1.9.93.48,2.04.71,3.33.71,1.21,0,2.21-.19,3-.56.79-.38,1.37-.89,1.73-1.54.37-.65.55-1.36.55-2.11,0-1.11-.25-1.95-.74-2.52-.5-.57-1.23-1.03-2.2-1.37-.97-.34-2.14-.64-3.49-.92-1.28-.24-2.52-.56-3.71-.98-1.19-.42-2.26-.94-3.19-1.57-.94-.63-1.68-1.44-2.23-2.41-.55-.97-.83-2.17-.83-3.59,0-1.7.42-3.24,1.27-4.6.84-1.37,2.04-2.44,3.6-3.21,1.56-.77,3.4-1.16,5.53-1.16,3.08,0,5.56.79,7.42,2.38,1.87,1.58,2.97,3.82,3.3,6.71h-5.33c-.15-1.35-.7-2.39-1.65-3.12-.95-.73-2.22-1.1-3.8-1.1s-2.79.34-3.63,1.01c-.84.67-1.27,1.56-1.27,2.67,0,.71.24,1.35.72,1.9.48.55,1.18,1.02,2.12,1.4.94.38,2.08.72,3.44,1.04,1.94.4,3.69.89,5.23,1.49,1.54.59,2.77,1.47,3.69,2.61.92,1.15,1.38,2.79,1.38,4.93.04,1.86-.39,3.5-1.29,4.93-.9,1.43-2.16,2.53-3.79,3.33-1.63.79-3.57,1.19-5.8,1.19Z"/>
                </g>
                </svg>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginTop: '16px' }}>Combimark (Horizontal)</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Headers, navigation, primary lockup</p>
              </div>
              <div className="box" style={{ textAlign: 'center', padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <svg height="180" viewBox="0 0 628.8 521.48" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '16px' }}>
                  <rect fill="#f2f2f2" x="0" y="410.72" width="628.8" height="110.75"/>
                  <path fill="#475569" d="M405.28,231.1c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.05c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
                  <path fill="#475569" d="M251.28,231.1c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21c0-10.5,8.75-19.25,19.25-19.25,3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
                  <path fill="#fbbf24" d="M443.79,3.79c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
                  <path fill="#00bfa5" d="M328.28.61c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V57.75c0-32.55,25.9-57.75,57.75-57.75,2.89,0,5.74.21,8.52.61Z"/>
                  <path fill="#475569" d="M15.65,313.5l-1.44-4.33c-1.78-5.55-2.85-9.14-3.22-10.77l-6.22.22v-4.88h26.97v3.66c-3.04.15-5.18.65-6.44,1.5-1.26.85-1.89,2.24-1.89,4.16,0,1.78.37,3.92,1.11,6.44,1.33,4.96,3.11,10.51,5.33,16.65.37,1.11.81,2.42,1.33,3.94.52,1.52,1.11,3.27,1.78,5.27.44,1.55,1,3.26,1.67,5.11.67,1.85,1.15,3.18,1.44,4,1.48,4,2.59,7.18,3.33,9.55h.22c1.48-5.03,3-9.92,4.55-14.65,2.66-8.58,5.59-17.65,8.77-27.19,3.33-9.99,5.33-16.21,5.99-18.65h3.55c.89,3.04,2.4,7.79,4.55,14.26,2.15,6.48,3.7,11.16,4.66,14.04,2.22,6.37,3.74,10.88,4.55,13.54.59,2,1.55,5,2.89,8.99,1.48,4.29,2.66,7.96,3.55,10.99h.33c1.78-5.77,3.29-10.54,4.55-14.32,3.77-10.73,6.84-19.98,9.21-27.75.81-2.74,1.55-5.03,2.22-6.88,1.41-3.77,2.55-6.47,3.44-8.1l-8.88.33v-4.88h22.53v3.66c-2.66.3-4.68.85-6.05,1.67-1.37.82-2.59,2.28-3.66,4.38-1.07,2.11-2.42,5.57-4.05,10.38l-5.66,16.87c-5.92,17.98-10.69,31.93-14.32,41.85h-3.33l-20.76-59.38-19.54,59.38h-3.22l-19.87-59.05Z"/>
                  <path fill="#475569" d="M121.21,368.11c2.14,0,3.7-.54,4.66-1.61.96-1.07,1.54-2.46,1.72-4.16.18-1.7.28-4.29.28-7.77v-52.5c0-2.81.11-5.22.33-7.21l-7.88.44v-4.66c4.44,0,7.6-.26,9.49-.78,1.89-.52,3.35-1.26,4.38-2.22h3.22v33.85c2.59-2.15,5.51-3.9,8.77-5.27,3.26-1.37,6.4-2.05,9.43-2.05,6.36,0,10.99,2,13.88,5.99,2.89,4,4.37,10.29,4.44,18.87l.11,20.65c0,3.33-.15,5.85-.44,7.55l6.99-.33v4.55h-22.64v-3.33c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.48-2.44,1.67-4.11.18-1.67.28-4.27.28-7.83v-15.54c0-6.36-1-11.12-3-14.26-2-3.14-5.14-4.72-9.44-4.72-2.74,0-5.46.65-8.16,1.94-2.7,1.3-4.87,2.94-6.49,4.94v32.75c0,2.89-.19,5.4-.56,7.55l6.99-.33v4.55h-22.64v-3.33Z"/>
                  <path fill="#475569" d="M189.36,368.11c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.48-2.44,1.67-4.11.18-1.67.28-4.27.28-7.83v-25.31c0-2.15.15-4.55.44-7.21l-7.88.44v-4.66c4.37,0,7.49-.26,9.38-.78,1.89-.52,3.35-1.26,4.38-2.22h3.22v44.84c0,3.33-.15,5.85-.44,7.55l6.99-.33v4.55h-22.64v-3.33ZM196.24,301.9c-1.18-1.29-1.78-2.83-1.78-4.61s.61-3.33,1.83-4.66c1.22-1.33,2.61-2,4.16-2,1.7,0,3.12.65,4.27,1.94,1.15,1.3,1.72,2.87,1.72,4.72s-.61,3.31-1.83,4.61c-1.22,1.3-2.65,1.94-4.27,1.94s-2.92-.65-4.11-1.94Z"/>
                  <path fill="#475569" d="M228.65,352.79l.22-32.19-8.55.11v-4.77c3.55-.07,6.57-1.68,9.05-4.83,2.48-3.14,4.31-6.72,5.49-10.71h3.77v15.54h18.65v4.33l-18.65.22c-.08,11.32-.13,19.17-.17,23.53-.04,4.37-.06,6.81-.06,7.33,0,5.25.63,9.16,1.89,11.71,1.26,2.55,3.44,3.83,6.55,3.83,1.92,0,3.83-.59,5.72-1.78,1.89-1.18,3.53-2.81,4.94-4.88l3,2.44c-2.89,4.29-5.74,7.12-8.55,8.49-2.81,1.37-5.55,2.05-8.21,2.05-10.14,0-15.17-6.81-15.1-20.42Z"/>
                  <path fill="#475569" d="M279.43,369.61c-4.11-2.4-7.35-5.84-9.71-10.32-2.37-4.48-3.55-9.64-3.55-15.48,0-5.18,1.18-10.05,3.55-14.6,2.37-4.55,5.68-8.2,9.93-10.93,4.25-2.74,9.08-4.11,14.49-4.11,4.22,0,8.03.93,11.43,2.77,3.4,1.85,6.1,4.61,8.1,8.27s3,8.16,3,13.49l-39.07.67c-.07,8.88,1.39,15.8,4.38,20.76,3,4.96,7.64,7.44,13.93,7.44,3.4,0,6.9-.89,10.49-2.66,3.59-1.78,6.34-3.96,8.27-6.55l2.66,2.22c-2.81,4.29-6.46,7.48-10.93,9.55-4.48,2.07-8.86,3.11-13.15,3.11-5.11,0-9.71-1.2-13.82-3.61ZM306.24,334.7c0-4.44-1-8.25-3-11.43-2-3.18-5-4.77-8.99-4.77-9.18,0-14.62,5.4-16.32,16.21h28.31Z"/>
                  <path fill="#475569" d="M343.26,371.77c-3.52-.96-6.6-2.37-9.27-4.22l.55,4.77h-5.77l-.67-23.64h4.33c.37,6.37,2.55,11.27,6.55,14.71,4,3.44,9.06,5.16,15.21,5.16,4.51,0,8.31-1.24,11.38-3.72,3.07-2.48,4.61-5.86,4.61-10.16,0-3.18-.87-5.9-2.61-8.16-1.74-2.26-3.88-4.14-6.44-5.66-2.55-1.52-6.01-3.27-10.38-5.27-4.96-2.37-8.9-4.44-11.82-6.22-2.92-1.78-5.42-4.12-7.49-7.05-2.07-2.92-3.11-6.53-3.11-10.82,0-2.96.68-5.92,2.05-8.88,1.37-2.96,3.74-5.48,7.1-7.55,3.37-2.07,7.83-3.11,13.38-3.11,3.33,0,6.68.43,10.04,1.28,3.37.85,6.46,2.31,9.27,4.38l-.44-4.77h5.66v24.42h-4c-.37-5.84-2.24-10.78-5.61-14.82-3.37-4.03-8.08-6.05-14.15-6.05-4.44,0-7.92,1.24-10.43,3.72-2.52,2.48-3.77,5.57-3.77,9.27,0,2.96.85,5.51,2.55,7.66,1.7,2.15,3.77,3.92,6.22,5.33,2.44,1.41,5.88,3.15,10.32,5.22,5.03,2.29,9.08,4.37,12.16,6.22,3.07,1.85,5.68,4.27,7.83,7.27,2.15,3,3.22,6.68,3.22,11.04s-1.02,7.81-3.05,10.99c-2.04,3.18-5.01,5.66-8.94,7.44-3.92,1.78-8.59,2.66-13.99,2.66-3.48,0-6.98-.48-10.49-1.44Z"/>
                  <path fill="#475569" d="M388.38,396.42c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.46-2.41,1.61-4,.15-1.59.26-4.24.33-7.94l.22-53.61c0-3.11.15-5.51.44-7.21l-7.88.44v-4.66c4.37,0,7.36-.24,8.99-.72,1.63-.48,2.96-1.24,4-2.28h3.33c.29,3.63.44,5.62.44,5.99,2.22-2,4.88-3.61,7.99-4.83,3.11-1.22,6.18-1.83,9.21-1.83,4.37,0,8.4,1.13,12.1,3.39,3.7,2.26,6.68,5.48,8.94,9.66,2.26,4.18,3.39,9.01,3.39,14.49,0,6.14-1.3,11.6-3.89,16.37-2.59,4.77-6.05,8.49-10.38,11.16-4.33,2.66-9.01,4-14.04,4s-9.55-1.22-13.32-3.66v18.43c0,3.33-.15,5.84-.44,7.55l6.99-.33v4.55h-22.64v-3.33ZM426.62,365.56c2.55-2.15,4.53-5.14,5.94-8.99,1.4-3.85,2.11-8.21,2.11-13.1,0-6.66-1.43-12.3-4.27-16.93-2.85-4.62-7.09-6.94-12.71-6.94-2.44,0-4.81.59-7.1,1.78-2.29,1.18-4.29,2.66-5.99,4.44.07.52.11,2.77.11,6.77l-.11,31.86c3.77,2.89,8.1,4.33,12.99,4.33,3.48,0,6.49-1.07,9.05-3.22Z"/>
                  <path fill="#475569" d="M459.36,369.55c-2.85-2.44-4.27-5.62-4.27-9.55,0-4.29,1.72-7.92,5.16-10.88,3.44-2.96,7.77-5.16,12.99-6.6,5.22-1.44,10.45-2.13,15.71-2.05v-6.88c0-4.81-.7-8.56-2.11-11.27-1.41-2.7-4.4-4.05-8.99-4.05-2.29,0-4.48.48-6.55,1.44-2.07.96-3.59,2.41-4.55,4.33.96,1.04,1.44,2.44,1.44,4.22,0,1.11-.41,2.16-1.22,3.16-.82,1-2,1.5-3.55,1.5s-2.77-.5-3.66-1.5c-.89-1-1.33-2.31-1.33-3.94,0-2.44.94-4.68,2.83-6.72,1.89-2.03,4.51-3.64,7.88-4.83,3.37-1.18,7.12-1.78,11.27-1.78,6.22,0,10.8,1.65,13.76,4.94,2.96,3.29,4.4,8.49,4.33,15.6l-.11,24.98c0,2.37-.15,4.88-.44,7.55l7.88-.44v4.66h-15.87c-.22-1.11-.48-3.22-.78-6.33-5.4,5.4-11.21,8.1-17.43,8.1-5.4,0-9.53-1.22-12.38-3.66ZM481.95,365.28c2.29-1.07,4.62-2.72,6.99-4.94-.07-1.11-.11-3-.11-5.66l.11-10.43c-6.07.22-11.47,1.46-16.21,3.72-4.74,2.26-7.1,5.72-7.1,10.38,0,2.74.81,4.85,2.44,6.33,1.63,1.48,3.7,2.22,6.22,2.22,2.81,0,5.37-.54,7.66-1.61Z"/>
                  <path fill="#475569" d="M527.3,369.78c-4.18-2.29-7.49-5.59-9.93-9.88-2.44-4.29-3.66-9.36-3.66-15.21,0-5.18,1.24-10.12,3.72-14.82,2.48-4.7,5.92-8.49,10.32-11.38,4.4-2.89,9.38-4.33,14.93-4.33,4,0,7.55.63,10.66,1.89,3.11,1.26,5.53,2.92,7.27,5,1.74,2.07,2.61,4.33,2.61,6.77,0,1.7-.48,3.11-1.44,4.22-.96,1.11-2.29,1.66-4,1.66s-2.85-.54-3.66-1.61c-.82-1.07-1.22-2.2-1.22-3.39,0-1.85.55-3.33,1.67-4.44-.82-2.29-2.39-3.87-4.72-4.72-2.33-.85-4.64-1.28-6.94-1.28-3.4,0-6.46.93-9.16,2.77-2.7,1.85-4.83,4.55-6.38,8.1-1.55,3.55-2.33,7.81-2.33,12.77s.79,9.36,2.39,13.21c1.59,3.85,3.83,6.86,6.71,9.05,2.89,2.18,6.22,3.27,9.99,3.27,3.33,0,6.6-.91,9.82-2.72,3.22-1.81,5.75-4.09,7.6-6.83l2.89,2.22c-2.74,4.29-6.27,7.55-10.6,9.77-4.33,2.22-8.57,3.33-12.71,3.33-5.03,0-9.64-1.15-13.82-3.44Z"/>
                  <path fill="#475569" d="M586.13,369.61c-4.11-2.4-7.35-5.84-9.71-10.32-2.37-4.48-3.55-9.64-3.55-15.48,0-5.18,1.18-10.05,3.55-14.6,2.37-4.55,5.68-8.2,9.93-10.93,4.25-2.74,9.08-4.11,14.49-4.11,4.22,0,8.03.93,11.43,2.77,3.4,1.85,6.1,4.61,8.1,8.27s3,8.16,3,13.49l-39.07.67c-.07,8.88,1.39,15.8,4.38,20.76,3,4.96,7.64,7.44,13.93,7.44,3.4,0,6.9-.89,10.49-2.66,3.59-1.78,6.34-3.96,8.27-6.55l2.66,2.22c-2.81,4.29-6.46,7.48-10.93,9.55-4.48,2.07-8.86,3.11-13.15,3.11-5.11,0-9.71-1.2-13.82-3.61ZM612.93,334.7c0-4.44-1-8.25-3-11.43-2-3.18-5-4.77-8.99-4.77-9.18,0-14.62,5.4-16.32,16.21h28.31Z"/>
                  <path fill="#475569" d="M37.93,486.98c-4.9,0-9.13-1.09-12.71-3.28-3.58-2.18-6.32-5.23-8.24-9.14-1.92-3.91-2.88-8.46-2.88-13.64s.96-9.73,2.88-13.64c1.92-3.91,4.67-6.96,8.24-9.14,3.58-2.18,7.81-3.28,12.71-3.28,5.76,0,10.44,1.37,14.04,4.1s5.9,6.6,6.91,11.59h-6.7c-.77-3.12-2.33-5.63-4.68-7.52-2.35-1.9-5.54-2.84-9.58-2.84-3.55,0-6.66.83-9.32,2.48s-4.72,4.03-6.16,7.13c-1.44,3.1-2.16,6.8-2.16,11.12s.72,8.03,2.16,11.12,3.49,5.47,6.16,7.13c2.66,1.66,5.77,2.48,9.32,2.48,4.03,0,7.22-.92,9.58-2.77,2.35-1.85,3.91-4.31,4.68-7.38h6.7c-1.01,4.85-3.31,8.64-6.91,11.38-3.6,2.74-8.28,4.1-14.04,4.1Z"/>
                  <path fill="#475569" d="M67.3,486.12v-51.84h6.05v51.84h-6.05Z"/>
                  <path fill="#475569" d="M95.16,486.98c-2.93,0-5.38-.52-7.34-1.55-1.97-1.03-3.43-2.4-4.39-4.1-.96-1.7-1.44-3.56-1.44-5.58,0-2.45.64-4.52,1.91-6.23,1.27-1.7,3.07-3,5.4-3.89,2.33-.89,5.08-1.33,8.24-1.33h9.58c0-2.25-.35-4.14-1.04-5.65-.7-1.51-1.7-2.65-3.02-3.42-1.32-.77-2.96-1.15-4.93-1.15-2.3,0-4.3.58-5.98,1.73-1.68,1.15-2.71,2.86-3.1,5.11h-6.19c.29-2.59,1.16-4.76,2.63-6.52,1.46-1.75,3.32-3.1,5.58-4.03,2.26-.94,4.61-1.4,7.06-1.4,3.36,0,6.16.61,8.39,1.84,2.23,1.22,3.9,2.93,5,5.11,1.1,2.18,1.66,4.76,1.66,7.74v22.46h-5.4l-.36-6.41c-.48,1.01-1.09,1.96-1.84,2.84-.74.89-1.61,1.66-2.59,2.3-.98.65-2.12,1.16-3.42,1.55-1.3.38-2.76.58-4.39.58ZM96.1,481.87c1.68,0,3.2-.35,4.57-1.04,1.37-.7,2.53-1.66,3.49-2.88.96-1.22,1.69-2.58,2.2-4.07.5-1.49.76-3.05.76-4.68v-.22h-9.07c-2.35,0-4.25.28-5.69.83s-2.47,1.32-3.1,2.3c-.62.98-.94,2.1-.94,3.35s.3,2.42.9,3.38c.6.96,1.49,1.71,2.66,2.23,1.18.53,2.58.79,4.21.79Z"/>
                  <path fill="#475569" d="M122.52,486.12v-36.29h5.47l.43,6.91c.82-1.63,1.86-3.02,3.13-4.18,1.27-1.15,2.81-2.04,4.61-2.66,1.8-.62,3.85-.94,6.16-.94v6.34h-2.23c-1.54,0-3,.21-4.39.61-1.39.41-2.63,1.07-3.71,1.98-1.08.91-1.92,2.15-2.52,3.71-.6,1.56-.9,3.49-.9,5.8v18.72h-6.05Z"/>
                  <path fill="#475569" d="M152.76,442.13c-1.2,0-2.2-.4-2.99-1.19s-1.19-1.79-1.19-2.99.4-2.17,1.19-2.92c.79-.74,1.79-1.12,2.99-1.12s2.14.37,2.95,1.12c.82.75,1.22,1.72,1.22,2.92s-.41,2.2-1.22,2.99c-.82.79-1.8,1.19-2.95,1.19ZM149.74,486.12v-36.29h6.05v36.29h-6.05Z"/>
                  <path fill="#475569" d="M180.7,486.12c-2.16,0-4.03-.33-5.62-1.01-1.58-.67-2.8-1.81-3.64-3.42-.84-1.61-1.26-3.78-1.26-6.52v-20.23h-6.34v-5.11h6.34l.79-8.78h5.26v8.78h10.51v5.11h-10.51v20.23c0,2.26.46,3.78,1.37,4.57.91.79,2.52,1.19,4.82,1.19h3.89v5.18h-5.62Z"/>
                  <path fill="#475569" d="M198.63,501.96l8.86-19.87h-2.09l-14.26-32.26h6.55l11.81,27.72,12.46-27.72h6.26l-23.26,52.13h-6.34Z"/>
                  <path fill="#475569" d="M254.21,486.12v-50.4h30.67v4.97h-24.62v17.71h20.95v4.9h-20.95v22.82h-6.05Z"/>
                  <path fill="#475569" d="M292.37,486.12v-36.29h5.47l.43,6.91c.82-1.63,1.86-3.02,3.13-4.18,1.27-1.15,2.81-2.04,4.61-2.66,1.8-.62,3.85-.94,6.16-.94v6.34h-2.23c-1.54,0-3,.21-4.39.61-1.39.41-2.63,1.07-3.71,1.98-1.08.91-1.92,2.15-2.52,3.71-.6,1.56-.9,3.49-.9,5.8v18.72h-6.05Z"/>
                  <path fill="#475569" d="M330.82,486.98c-2.93,0-5.38-.52-7.34-1.55-1.97-1.03-3.43-2.4-4.39-4.1-.96-1.7-1.44-3.56-1.44-5.58,0-2.45.64-4.52,1.91-6.23,1.27-1.7,3.07-3,5.4-3.89,2.33-.89,5.08-1.33,8.24-1.33h9.58c0-2.25-.35-4.14-1.04-5.65-.7-1.51-1.7-2.65-3.02-3.42-1.32-.77-2.96-1.15-4.93-1.15-2.3,0-4.3.58-5.98,1.73-1.68,1.15-2.71,2.86-3.1,5.11h-6.19c.29-2.59,1.16-4.76,2.63-6.52,1.46-1.75,3.32-3.1,5.58-4.03,2.26-.94,4.61-1.4,7.06-1.4,3.36,0,6.16.61,8.39,1.84,2.23,1.22,3.9,2.93,5,5.11,1.1,2.18,1.66,4.76,1.66,7.74v22.46h-5.4l-.36-6.41c-.48,1.01-1.09,1.96-1.84,2.84-.74.89-1.61,1.66-2.59,2.3-.98.65-2.12,1.16-3.42,1.55-1.3.38-2.76.58-4.39.58ZM331.75,481.87c1.68,0,3.2-.35,4.57-1.04,1.37-.7,2.53-1.66,3.49-2.88.96-1.22,1.69-2.58,2.2-4.07.5-1.49.76-3.05.76-4.68v-.22h-9.07c-2.35,0-4.25.28-5.69.83s-2.47,1.32-3.1,2.3c-.62.98-.94,2.1-.94,3.35s.3,2.42.9,3.38c.6.96,1.49,1.71,2.66,2.23,1.18.53,2.58.79,4.21.79Z"/>
                  <path fill="#475569" d="M358.18,486.12v-36.29h5.47l.36,5.18c1.15-1.87,2.7-3.35,4.64-4.43,1.94-1.08,4.07-1.62,6.37-1.62,1.87,0,3.56.25,5.08.76,1.51.5,2.86,1.27,4.03,2.3,1.18,1.03,2.1,2.34,2.77,3.92,1.25-2.21,2.98-3.92,5.18-5.15,2.21-1.22,4.54-1.84,6.98-1.84,2.83,0,5.28.57,7.34,1.69,2.06,1.13,3.67,2.83,4.82,5.11,1.15,2.28,1.73,5.17,1.73,8.68v21.67h-5.98v-21.02c0-3.65-.74-6.38-2.23-8.21-1.49-1.82-3.6-2.74-6.34-2.74-1.87,0-3.55.49-5.04,1.48-1.49.98-2.66,2.41-3.53,4.28-.86,1.87-1.3,4.18-1.3,6.91v19.3h-6.05v-21.02c0-3.65-.74-6.38-2.23-8.21-1.49-1.82-3.58-2.74-6.26-2.74-1.82,0-3.48.49-4.97,1.48-1.49.98-2.66,2.41-3.53,4.28-.86,1.87-1.3,4.18-1.3,6.91v19.3h-6.05Z"/>
                  <path fill="#475569" d="M438.24,486.98c-3.36,0-6.36-.79-9-2.38-2.64-1.58-4.71-3.8-6.19-6.66-1.49-2.86-2.23-6.18-2.23-9.97s.73-7.18,2.2-10.01c1.46-2.83,3.53-5.04,6.19-6.62s5.72-2.38,9.18-2.38,6.58.79,9.07,2.38c2.5,1.58,4.4,3.66,5.72,6.23,1.32,2.57,1.98,5.39,1.98,8.46v1.51c0,.53-.02,1.13-.07,1.8h-29.74v-4.68h23.83c-.14-3.31-1.24-5.9-3.28-7.78-2.04-1.87-4.6-2.81-7.67-2.81-2.02,0-3.91.47-5.69,1.4-1.78.94-3.19,2.3-4.25,4.1-1.06,1.8-1.58,4.04-1.58,6.73v2.02c0,2.98.54,5.47,1.62,7.49,1.08,2.02,2.5,3.53,4.25,4.54,1.75,1.01,3.64,1.51,5.65,1.51,2.54,0,4.64-.56,6.3-1.69,1.66-1.13,2.87-2.67,3.64-4.64h5.98c-.62,2.21-1.66,4.17-3.1,5.87-1.44,1.7-3.23,3.06-5.36,4.07-2.14,1.01-4.62,1.51-7.45,1.51Z"/>
                  <path fill="#475569" d="M469.13,486.12l-10.66-36.29h6.05l8.28,30.6h-1.08l9-30.6h6.84l9.14,30.53-1.15.07,8.21-30.6h6.12l-10.58,36.29h-6.19l-9.5-31.97h1.22l-9.5,31.97h-6.19Z"/>
                  <path fill="#475569" d="M531.55,486.98c-3.36,0-6.38-.78-9.07-2.34-2.69-1.56-4.8-3.77-6.34-6.62-1.54-2.86-2.3-6.18-2.3-9.97s.78-7.26,2.34-10.12c1.56-2.85,3.7-5.06,6.41-6.62,2.71-1.56,5.75-2.34,9.11-2.34s6.52.78,9.18,2.34,4.78,3.77,6.34,6.62c1.56,2.86,2.34,6.21,2.34,10.04s-.79,7.19-2.38,10.04c-1.58,2.86-3.72,5.06-6.41,6.62-2.69,1.56-5.76,2.34-9.22,2.34ZM531.62,481.8c2.06,0,3.98-.51,5.76-1.55,1.78-1.03,3.22-2.58,4.32-4.64,1.1-2.06,1.66-4.61,1.66-7.63s-.54-5.63-1.62-7.67c-1.08-2.04-2.5-3.58-4.25-4.61-1.75-1.03-3.68-1.55-5.8-1.55s-3.92.52-5.72,1.55c-1.8,1.03-3.24,2.57-4.32,4.61s-1.62,4.6-1.62,7.67.54,5.57,1.62,7.63c1.08,2.06,2.5,3.61,4.25,4.64,1.75,1.03,3.66,1.55,5.72,1.55Z"/>
                  <path fill="#475569" d="M558.05,486.12v-36.29h5.47l.43,6.91c.82-1.63,1.86-3.02,3.13-4.18,1.27-1.15,2.81-2.04,4.61-2.66,1.8-.62,3.85-.94,6.16-.94v6.34h-2.23c-1.54,0-3,.21-4.39.61-1.39.41-2.63,1.07-3.71,1.98-1.08.91-1.92,2.15-2.52,3.71-.6,1.56-.9,3.49-.9,5.8v18.72h-6.05Z"/>
                  <path fill="#475569" d="M584.69,486.12v-51.84h6.05v51.84h-6.05ZM607.01,486.12l-17.28-19.87,15.77-16.42h7.42l-18.07,18.58.07-4.32,19.8,22.03h-7.7Z"/>
                </svg>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>Vertical Combimark</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Print, presentations, square formats</p>
              </div>
            </div>

            {/* Sizing specs */}
            <div className="card-white">
            <ReviewBlock blockKey="logos:lockups" label="Lockup Variations" />
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Sizing Reference</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Asset</th>
                    <th>Recommended Height</th>
                    <th>Minimum Height</th>
                    <th>Context</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Combimark</td>
                    <td style={{ fontFamily: 'monospace' }}>60px</td>
                    <td style={{ fontFamily: 'monospace' }}>40px</td>
                    <td>Website header, app bars</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Combimark (full)</td>
                    <td style={{ fontFamily: 'monospace' }}>80-120px</td>
                    <td style={{ fontFamily: 'monospace' }}>60px</td>
                    <td>Hero sections, presentations, print</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Icon only</td>
                    <td style={{ fontFamily: 'monospace' }}>40-280px</td>
                    <td style={{ fontFamily: 'monospace' }}>24px</td>
                    <td>Favicons (24px), avatars (40px), hero (280px)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Horizontal lockup</td>
                    <td style={{ fontFamily: 'monospace' }}>36-44px</td>
                    <td style={{ fontFamily: 'monospace' }}>32px</td>
                    <td>Compact headers, email signatures</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* File formats */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>File Formats</h3>
              <div className="grid-3">
                <div className="box" style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'monospace', fontSize: '24px', color: '#2563eb', marginBottom: '8px', fontWeight: '600' }}>SVG</p>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>Primary / Web</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>Vector, infinitely scalable. Use for all digital applications.</p>
                </div>
                <div className="box" style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'monospace', fontSize: '24px', color: '#00bfa5', marginBottom: '8px', fontWeight: '600' }}>PNG</p>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>Raster / Transparency</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>2048px exports for social, presentations, and email.</p>
                </div>
                <div className="box" style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'monospace', fontSize: '24px', color: '#475569', marginBottom: '8px', fontWeight: '600' }}>PDF</p>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>Print / Production</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>Vector with embedded fonts for offset and large format print.</p>
                </div>
              </div>
            </div>
            <ReviewBlock blockKey="logos:general" label="General Feedback" />
          </>
        )}

        {/* ==================== COMPONENTS ==================== */}
        {activeTab === 'components' && (
          <>
            <h2 className="section-title">Design Components</h2>
            <p className="section-subtitle">
              Reusable UI elements, interaction states, and implementation patterns.
            </p>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Buttons</h3>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <button className="btn btn-primary">Primary Action</button>
                <button className="btn btn-outline">Secondary</button>
                <button className="btn" style={{ background: 'transparent', color: '#2563eb', fontWeight: '600', fontSize: '14px', padding: '14px 32px' }}>Tertiary Link</button>
              </div>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Variant</th>
                    <th>Background</th>
                    <th>Text</th>
                    <th>Padding</th>
                    <th>Radius</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Primary</td>
                    <td style={{ fontFamily: 'monospace' }}>#2563eb</td>
                    <td>White, 600</td>
                    <td>14px 32px</td>
                    <td>8px</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Secondary</td>
                    <td>Transparent</td>
                    <td>#64748b, 500</td>
                    <td>14px 32px</td>
                    <td>8px</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Tertiary</td>
                    <td>None</td>
                    <td>#2563eb, 600</td>
                    <td>14px 32px</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: '16px' }}>Cards</h3>
            <div className="grid-3">
              <div className="box">
                <h4 style={{ marginBottom: '8px', color: '#1e293b', fontWeight: '600', fontSize: '14px' }}>Standard Card</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>1px border #e2e8f0, 12px radius, 24px padding. Subtle shadow on hover.</p>
              </div>
              <div className="card-white" style={{ margin: 0, padding: '24px' }}>
                <h4 style={{ marginBottom: '8px', color: '#1e293b', fontWeight: '600', fontSize: '14px' }}>Content Card</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Larger padding (40px), used for primary content sections.</p>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #0f172a, #1a2744)', borderRadius: '12px', padding: '24px', color: 'white' }}>
                <h4 style={{ marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Dark Card</h4>
                <p style={{ fontSize: '13px', color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>For hero blocks, CTAs, and emphasis sections.</p>
              </div>
            </div>
            <ReviewBlock blockKey="components:general" label="General Feedback" />
          </>
        )}

        {/* ==================== VOICE ==================== */}
        {activeTab === 'voice' && (
          <>
            <h2 className="section-title">Voice & Messaging</h2>
            <p className="section-subtitle">
              Brand voice, messaging hierarchy, and copy guidelines for all channels.
            </p>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Brand Voice Attributes</h3>
              <div className="grid-4">
                {[
                  { symbol: '\u25C6', label: 'Authoritative', desc: 'Backed by methodology, credentials, and results' },
                  { symbol: '\u25C7', label: 'Clear', desc: 'Active voice, short sentences, concrete examples' },
                  { symbol: '\u25C8', label: 'Professional', desc: 'Enterprise-grade, McKinsey-caliber language' },
                  { symbol: '\u25CB', label: 'Accessible', desc: 'Approachable without being casual' },
                ].map((attr, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', marginBottom: '12px' }}>{attr.symbol}</div>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '6px' }}>{attr.label}</h4>
                    <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>{attr.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-white">
            <ReviewBlock blockKey="voice:attributes" label="Voice Attributes" />
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Messaging Pillars</h3>
              <div className="grid-3">
                <div className="box accent-navy" style={{ paddingLeft: '28px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Expectation</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Stop competing. Start commanding. Move from crowded markets to premium positioning.</p>
                </div>
                <div className="box accent-teal" style={{ paddingLeft: '28px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Systemization</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Structure creates value. Methodology transforms complexity into clarity.</p>
                </div>
                <div className="box accent-gold" style={{ paddingLeft: '28px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Realization</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Monetize assets. Measure results. Deliver measurable impact.</p>
                </div>
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>Primary Tagline</h3>
              <p style={{ fontFamily: 'Lora, serif', fontSize: '24px', fontWeight: '300', color: '#1e293b', marginBottom: '12px' }}>
                "Master the System That Turns Competitive Markets Into Premium Positioning"
              </p>
              <p style={{ fontSize: '13px', color: '#64748b' }}>Primary tagline - consultant-facing. For client-facing contexts, use: "See Your Organizational Assets Clearly."</p>
            </div>
            <ReviewBlock blockKey="voice:general" label="General Feedback" />
          </>
        )}

        {/* ==================== IMAGERY ==================== */}
        {activeTab === 'imagery' && (
          <>
            <h2 className="section-title">Photography & Imagery</h2>
            <p className="section-subtitle">
              Visual style, photography direction, and image guidelines for the brand.
            </p>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Photography Style</h3>
              <div className="grid-2">
                <div>
                  <h4 style={{ marginBottom: '10px', fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>Tone & Mood</h4>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8', margin: 0 }}>
                    Professional, aspirational, authentic. Show real people in real working environments.
                    Avoid generic stock photography with forced poses or cliche handshakes.
                  </p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '10px', fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>Composition</h4>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8', margin: 0 }}>
                    Clean framing with generous negative space. Natural lighting preferred.
                    Warm color grading, slightly desaturated to match brand warmth. Center-frame portraits.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid-2">
              <div className="do-card">
                <h4 style={{ marginBottom: '12px', color: '#16a34a', fontWeight: '600', fontSize: '13px' }}>DO</h4>
                <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: '1.7' }}>
                  Show authentic workplace moments, diverse professionals collaborating, 
                  thoughtful compositions with natural lighting, strategic use of brand colors in environment.
                </p>
              </div>
              <div className="dont-card">
                <h4 style={{ marginBottom: '12px', color: '#dc2626', fontWeight: '600', fontSize: '13px' }}>DON'T</h4>
                <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: '1.7' }}>
                  Use generic stock photography, posed/artificial scenarios, 
                  clip art or low-res images, overly saturated or filtered effects.
                </p>
              </div>
            </div>
            <ReviewBlock blockKey="imagery:general" label="General Feedback" />
          </>
        )}

        {/* ==================== CERTIFICATION ==================== */}
        {activeTab === 'certification' && (
          <>
            <h2 className="section-title">Certification Program</h2>
            <p className="section-subtitle">
              A highly selective program for consultants who want to master the Value Collaborator System. Below: how the brand system creates a cohesive, modular training experience.
            </p>

            {/* Program header card */}
            <div className="card-white">
              <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <Icon size={48} />
                  <div>
                    <h2>WhiteSpace Clarity Certification</h2>
                    <p>Master the Value Collaborator System. Transform how organizations see their assets.</p>
                  </div>
                </div>
              </div>
              <div className="grid-3">
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '40px', fontWeight: '300', color: '#475569', marginBottom: '8px' }}>2-3</p>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Candidates per cohort</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '40px', fontWeight: '300', color: '#00bfa5', marginBottom: '8px' }}>3</p>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Core pillars mastered</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '40px', fontWeight: '300', color: '#fbbf24', marginBottom: '8px' }}>1:1</p>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Personal vetting by Steve Smith</p>
                </div>
              </div>
            </div>

            {/* Selectivity messaging */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Why Selective?</h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.8', maxWidth: '700px' }}>
                The WhiteSpace Clarity Certification is not a commodity credential. Each candidate is personally vetted to ensure they have the experience, mindset, and commitment to represent the methodology at the highest level. This selectivity is what makes certified consultants immediately credible with enterprise clients.
              </p>
            </div>
            <ReviewBlock blockKey="certification:selectivity" label="Selectivity & Positioning" />

            {/* MODULAR DESIGN SYSTEM FOR TRAINING */}
            <div style={{ borderTop: '2px solid #e2e8f0', marginTop: '48px', paddingTop: '48px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '8px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Training Design System</h3>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '40px', maxWidth: '640px', lineHeight: '1.7' }}>
                These modular components show how the brand system translates into training materials for enrolled consultants. Every element uses the same bracket geometry, pillar colors, and typography.
              </p>

              {/* Module navigation cards */}
              <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Module Cards</h4>
              <div className="grid-3" style={{ marginBottom: '48px' }}>
                {[
                  { num: '01', title: 'Expectation', subtitle: 'Asset Discovery & Valuation', color: '#475569', progress: 100 },
                  { num: '02', title: 'Systemization', subtitle: 'Framework Integration', color: '#00bfa5', progress: 65 },
                  { num: '03', title: 'Realization', subtitle: 'Value Conversion & Measurement', color: '#fbbf24', progress: 0 },
                ].map((mod, i) => (
                  <div key={i} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', transition: 'all 0.2s ease' }}>
                    <div style={{ height: '4px', background: mod.color }}></div>
                    <div style={{ padding: '28px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: '600', color: mod.color, background: `${mod.color}14`, padding: '4px 10px', borderRadius: '4px' }}>MODULE {mod.num}</span>
                        <span style={{ fontSize: '11px', fontWeight: '600', color: mod.progress === 100 ? '#16a34a' : mod.progress > 0 ? mod.color : '#94a3b8' }}>
                          {mod.progress === 100 ? 'Complete' : mod.progress > 0 ? `${mod.progress}%` : 'Locked'}
                        </span>
                      </div>
                      <h4 style={{ fontFamily: 'Lora, serif', fontSize: '20px', fontWeight: '400', color: '#1e293b', marginBottom: '4px' }}>{mod.title}</h4>
                      <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 20px 0' }}>{mod.subtitle}</p>
                      <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${mod.progress}%`, background: mod.color, borderRadius: '2px', transition: 'width 0.3s ease' }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lesson layout mockup */}
              <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Lesson Layout</h4>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', marginBottom: '48px' }}>
                {/* Lesson header bar */}
                <div style={{ background: 'linear-gradient(135deg, #0f172a, #1a2744)', padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Icon size={28} />
                    <div>
                      <p style={{ fontSize: '11px', color: '#00bfa5', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase', margin: '0 0 2px 0' }}>Module 02 - Systemization</p>
                      <p style={{ fontFamily: 'Lora, serif', fontSize: '18px', fontWeight: '300', color: 'white', margin: 0 }}>Lesson 2.3: Mapping Asset Dependencies</p>
                    </div>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748b', background: 'rgba(255,255,255,0.08)', padding: '6px 14px', borderRadius: '6px' }}>45 min</span>
                </div>
                {/* Lesson content area */}
                <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '32px' }}>
                  <div>
                    <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '12px', width: '90%' }}></div>
                    <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '12px', width: '100%' }}></div>
                    <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '12px', width: '75%' }}></div>
                    <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '24px', width: '85%' }}></div>
                    {/* Key concept callout */}
                    <div style={{ borderLeft: '3px solid #00bfa5', background: '#f0fdfa', padding: '20px 24px', borderRadius: '0 8px 8px 0', marginBottom: '24px' }}>
                      <p style={{ fontSize: '11px', fontWeight: '600', color: '#00bfa5', letterSpacing: '0.5px', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Key Concept</p>
                      <p style={{ fontSize: '14px', color: '#1e293b', margin: 0, lineHeight: '1.6' }}>Asset dependencies determine how value flows through an organization. Mapping them reveals both bottlenecks and multiplication opportunities.</p>
                    </div>
                    <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '12px', width: '95%' }}></div>
                    <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', width: '60%' }}></div>
                  </div>
                  {/* Sidebar */}
                  <div style={{ borderLeft: '1px solid #f1f5f9', paddingLeft: '32px' }}>
                    <p style={{ fontSize: '11px', fontWeight: '600', color: '#1e293b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '16px' }}>In This Lesson</p>
                    {['Asset mapping framework', 'Dependency identification', 'Value flow analysis', 'Bottleneck diagnosis'].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '4px', border: i < 2 ? 'none' : '2px solid #e2e8f0', background: i < 2 ? '#00bfa5' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px', flexShrink: 0 }}>{i < 2 ? '\u2713' : ''}</div>
                        <span style={{ fontSize: '13px', color: i < 2 ? '#1e293b' : '#64748b' }}>{item}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: '24px', padding: '16px', background: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>
                      <Icon size={32} />
                      <p style={{ fontSize: '11px', color: '#64748b', marginTop: '8px', margin: '8px 0 0 0' }}>Pillar: Systemization</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress dashboard mockup */}
              <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Consultant Dashboard</h4>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px', marginBottom: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ width: '48px', height: '48px', background: '#475569', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Lora, serif', fontSize: '18px', fontWeight: '400' }}>JD</div>
                  <div>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0 0 2px 0' }}>Jane Davidson</p>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Cohort 2026-A - In Progress</p>
                  </div>
                </div>
                {/* Pillar progress bars */}
                {[
                  { label: 'Expectation', color: '#475569', pct: 100 },
                  { label: 'Systemization', color: '#00bfa5', pct: 65 },
                  { label: 'Realization', color: '#fbbf24', pct: 0 },
                ].map((p, i) => (
                  <div key={i} style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>{p.label}</span>
                      <span style={{ fontSize: '12px', fontWeight: '600', color: p.pct === 100 ? '#16a34a' : p.color }}>{p.pct === 100 ? 'Complete' : p.pct > 0 ? `${p.pct}%` : 'Not started'}</span>
                    </div>
                    <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${p.pct}%`, background: p.color, borderRadius: '4px' }}></div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: '24px', padding: '20px', background: '#f8fafc', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Icon size={32} />
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', margin: '0 0 2px 0' }}>Next: Lesson 2.4 - Integration Patterns</p>
                    <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Continue in the Systemization module</p>
                  </div>
                  <button className="btn btn-primary" style={{ marginLeft: 'auto', padding: '10px 24px', fontSize: '13px' }}>Continue</button>
                </div>
              </div>

              {/* Bracket-derived decorative elements */}
              <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Brand Elements - Modular Toolkit</h4>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px', lineHeight: '1.7', maxWidth: '640px' }}>
                Design elements derived from the bracket icon geometry. Use these to create section dividers, callout frames, and visual hierarchy in any certification material.
              </p>
              <div className="grid-2" style={{ marginBottom: '48px' }}>
                {/* Bracket-line divider */}
                <div className="box" style={{ padding: '32px', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '20px' }}>Section Divider</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                    <div style={{ height: '2px', flex: 1, background: '#475569', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '24px', background: '#00bfa5', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '24px', background: '#475569', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '24px', background: '#fbbf24', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', flex: 1, background: '#475569', borderRadius: '1px' }}></div>
                  </div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '16px' }}>Three-pillar divider for section breaks</p>
                </div>
                {/* Pillar accent chips */}
                <div className="box" style={{ padding: '32px', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '20px' }}>Pillar Tags</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#475569', background: '#47556914', padding: '6px 14px', borderRadius: '20px' }}>Expectation</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#00bfa5', background: '#00bfa514', padding: '6px 14px', borderRadius: '20px' }}>Systemization</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#d97706', background: '#fbbf2414', padding: '6px 14px', borderRadius: '20px' }}>Realization</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '16px' }}>Use to categorize lessons, resources, and assessments</p>
                </div>
                {/* Bracket callout frame */}
                <div className="box" style={{ padding: '32px', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '20px' }}>Quote Frame</p>
                  <div style={{ position: 'relative', padding: '24px 32px' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', background: 'linear-gradient(to bottom, #475569, #00bfa5, #fbbf24)', borderRadius: '2px' }}></div>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '16px', fontWeight: '300', color: '#1e293b', lineHeight: '1.6', fontStyle: 'italic', textAlign: 'left', margin: 0 }}>
                      "The best consultants don't just see assets - they see the connections between them."
                    </p>
                    <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'left', marginTop: '8px' }}>- Bill Adams, Outcome Dynamics</p>
                  </div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '12px' }}>Gradient bracket line for attributed quotes</p>
                </div>
                {/* Icon as watermark */}
                <div className="box" style={{ padding: '32px', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '20px' }}>Watermark Treatment</p>
                  <div style={{ position: 'relative', background: '#f8fafc', borderRadius: '8px', padding: '32px', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.06 }}>
                      <Icon size={140} />
                    </div>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '16px', fontWeight: '400', color: '#1e293b', position: 'relative', zIndex: 1, margin: 0 }}>Assessment Complete</p>
                    <p style={{ fontSize: '13px', color: '#64748b', position: 'relative', zIndex: 1, margin: '4px 0 0 0' }}>Module 01 - Expectation</p>
                  </div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '16px' }}>Subtle icon watermark for branded documents</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button className="btn btn-primary">Schedule a Discovery Conversation</button>
            </div>
            <ReviewBlock blockKey="certification:general" label="General Feedback" />
          </>
        )}

        {/* ==================== CURRICULUM ==================== */}
        {activeTab === 'curriculum' && (
          <Placeholder icon="&#128218;" title="Curriculum" description="Module breakdown, learning objectives, lesson content, and assessment methods for the certification program." />
        )}

        {/* ==================== EMAIL ==================== */}
        {activeTab === 'email' && (
          <>
            <h2 className="section-title">Email Templates</h2>
            <p className="section-subtitle">
              Branded email signatures, marketing email layouts, and formatting standards for all outbound communications.
            </p>

            {/* Email Signature - Steve */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Email Signatures</h3>
            <div className="grid-2" style={{ marginBottom: '40px' }}>
              <div className="card-white" style={{ margin: 0 }}>
                <p style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '16px' }}>Steve Smith</p>
                <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ borderRight: '2px solid #00bfa5', paddingRight: '16px', flexShrink: 0 }}>
                      <Icon size={36} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Lora, serif', fontSize: '15px', fontWeight: '400', color: '#1e293b', margin: '0 0 2px 0' }}>Steve Smith</p>
                      <p style={{ fontSize: '12px', color: '#475569', margin: '0 0 10px 0' }}>Managing Partner, Consult WhiteSpace</p>
                      <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.8' }}>
                        steve@consultwhitespace.com<br/>
                        (555) 123-4567
                      </div>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
                        <div style={{ height: '2px', width: '16px', background: '#475569', borderRadius: '1px' }}></div>
                        <div style={{ height: '2px', width: '16px', background: '#00bfa5', borderRadius: '1px' }}></div>
                        <div style={{ height: '2px', width: '16px', background: '#fbbf24', borderRadius: '1px' }}></div>
                      </div>
                      <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '8px', fontStyle: 'italic' }}>WhiteSpace Outcome Dynamics - consultwhitespace.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-white" style={{ margin: 0 }}>
                <p style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '16px' }}>Bill Adams</p>
                <div style={{ background: '#fafafa', borderRadius: '8px', padding: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ borderRight: '2px solid #00bfa5', paddingRight: '16px', flexShrink: 0 }}>
                      <Icon size={36} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Lora, serif', fontSize: '15px', fontWeight: '400', color: '#1e293b', margin: '0 0 2px 0' }}>Bill Adams</p>
                      <p style={{ fontSize: '12px', color: '#475569', margin: '0 0 10px 0' }}>Founder, Value Collaborator System</p>
                      <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.8' }}>
                        bill@consultwhitespace.com<br/>
                        (555) 987-6543
                      </div>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
                        <div style={{ height: '2px', width: '16px', background: '#475569', borderRadius: '1px' }}></div>
                        <div style={{ height: '2px', width: '16px', background: '#00bfa5', borderRadius: '1px' }}></div>
                        <div style={{ height: '2px', width: '16px', background: '#fbbf24', borderRadius: '1px' }}></div>
                      </div>
                      <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '8px', fontStyle: 'italic' }}>Author: Outcome Dynamics (Forbes Books, Sept 2026)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature specs */}
            <div className="card-white" style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Signature Specifications</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ fontWeight: '600' }}>Icon</td><td>Bracket mark, 36px height, left of divider</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Divider</td><td>2px solid Teal (#00bfa5), full height</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Name</td><td>Lora Regular 400, 15px, #1e293b</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Title</td><td>DM Sans Regular 400, 12px, #475569</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Contact</td><td>DM Sans Regular 400, 11px, #64748b</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Pillar Bar</td><td>Three 16px bars (Slate/Teal/Gold), 2px height, 6px gap</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Tagline</td><td>DM Sans Italic 400, 10px, #94a3b8 - differs per person</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Format</td><td>HTML email signature - no images where possible (inline SVG preferred)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Marketing Email - Discovery Outreach */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Marketing Email - Discovery Outreach</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: '#f1f5f9', borderRadius: '12px', padding: '24px' }}>
                <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', maxWidth: '480px', margin: '0 auto' }}>
                  {/* Email header */}
                  <div style={{ background: 'linear-gradient(135deg, #0f172a, #1a2744)', padding: '32px 32px 24px 32px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.05 }}>
                      <Icon size={120} />
                    </div>
                    <Icon size={28} />
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '20px', fontWeight: '300', color: 'white', margin: '16px 0 4px 0', lineHeight: '1.3' }}>The framework your clients have been waiting for.</p>
                    <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>The WhiteSpace Outcome Dynamics</p>
                  </div>
                  {/* Email body */}
                  <div style={{ padding: '28px 32px' }}>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '95%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '100%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '80%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '24px', width: '60%' }}></div>

                    {/* Three pillar callouts */}
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                      {[
                        { label: 'Discover', color: '#475569' },
                        { label: 'Integrate', color: '#00bfa5' },
                        { label: 'Convert', color: '#fbbf24' },
                      ].map((p, i) => (
                        <div key={i} style={{ flex: 1, textAlign: 'center', padding: '12px 8px', borderTop: `3px solid ${p.color}`, background: '#f8fafc', borderRadius: '0 0 6px 6px' }}>
                          <p style={{ fontSize: '11px', fontWeight: '600', color: p.color, margin: 0 }}>{p.label}</p>
                        </div>
                      ))}
                    </div>

                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '90%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '24px', width: '70%' }}></div>

                    {/* CTA button */}
                    <div style={{ textAlign: 'center' }}>
                      <button className="btn btn-primary" style={{ fontSize: '13px', padding: '12px 28px' }}>Schedule a Discovery Conversation</button>
                    </div>
                  </div>
                  {/* Email footer */}
                  <div style={{ padding: '20px 32px', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
                    <Icon size={20} />
                    <p style={{ fontSize: '10px', color: '#94a3b8', margin: '6px 0 0 0' }}>Consult WhiteSpace LLC - consultwhitespace.com</p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Layout Structure</h4>
                  {['Dark gradient header with icon and headline', 'Body text: 2-3 short paragraphs max', 'Three-pillar callout strip (Discover / Integrate / Convert)', 'Single primary CTA button (Blue #2563eb)', 'Centered footer with icon and company link'].map((item, i) => (
                    <div key={i} className="checklist-item" style={{ marginBottom: '10px' }}>
                      <div className="checklist-icon">{'\u2713'}</div>
                      <div className="checklist-text" style={{ fontSize: '13px' }}>{item}</div>
                    </div>
                  ))}
                </div>
                <div className="card-white" style={{ margin: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Subject Line Guidelines</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Lead with insight or question, not company name. Keep under 50 characters. No exclamation marks, no ALL CAPS. Examples: "The asset gap most consultants miss" or "What if your methodology had a system behind it?"
                  </p>
                </div>
              </div>
            </div>

            {/* Marketing Email - Book Announcement */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Marketing Email - Book Announcement</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: '#f1f5f9', borderRadius: '12px', padding: '24px' }}>
                <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', maxWidth: '480px', margin: '0 auto' }}>
                  {/* Slate header for book */}
                  <div style={{ background: 'linear-gradient(135deg, #475569, #334155)', padding: '32px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', left: '-40px', bottom: '-40px', opacity: 0.06 }}>
                      <Icon size={160} />
                    </div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                      {/* Book mockup */}
                      <div style={{ width: '80px', height: '110px', background: 'linear-gradient(135deg, #1e293b, #0f172a)', borderRadius: '3px', boxShadow: '6px 3px 16px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '12px', flexShrink: 0, border: '1px solid rgba(255,255,255,0.08)' }}>
                        <Icon size={18} />
                        <p style={{ fontFamily: 'Lora, serif', fontSize: '8px', fontWeight: '400', color: 'white', textAlign: 'center', marginTop: '6px', lineHeight: '1.3' }}>Outcome Dynamics</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '10px', fontWeight: '600', color: '#fbbf24', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Coming September 2026</p>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: '18px', fontWeight: '300', color: 'white', lineHeight: '1.3', margin: '0 0 4px 0' }}>Outcome Dynamics</p>
                        <p style={{ fontSize: '11px', color: '#cbd5e1', margin: 0 }}>By Bill Adams - Forbes Books</p>
                      </div>
                    </div>
                  </div>
                  {/* Body */}
                  <div style={{ padding: '28px 32px' }}>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '100%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '85%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '24px', width: '70%' }}></div>

                    <div style={{ borderLeft: '3px solid #fbbf24', paddingLeft: '16px', marginBottom: '24px' }}>
                      <p style={{ fontFamily: 'Lora, serif', fontSize: '14px', fontWeight: '300', color: '#1e293b', fontStyle: 'italic', lineHeight: '1.6', margin: 0 }}>
                        "Organizations sit on millions in unrealized value - not because they lack resources, but because they lack clarity."
                      </p>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                      <button className="btn btn-primary" style={{ fontSize: '13px', padding: '12px 28px' }}>Learn More About the Book</button>
                    </div>
                  </div>
                  <div style={{ padding: '20px 32px', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
                    <Icon size={20} />
                    <p style={{ fontSize: '10px', color: '#94a3b8', margin: '6px 0 0 0' }}>Consult WhiteSpace LLC - consultwhitespace.com</p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Design Notes</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: '0 0 12px 0' }}>
                    Slate gradient header (not dark navy) to differentiate from the standard outreach template. Book cover mockup left, title and publishing details right. Gold accent for the launch date.
                  </p>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Pull quote uses Gold bracket line to tie to the Realization pillar. Single CTA - either "Learn More" pre-launch or "Order Now" post-launch.
                  </p>
                </div>
                <div className="card-white" style={{ margin: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Send Sequence</h4>
                  {['Teaser (June): Key insight, no cover', 'Reveal (July): Full cover + launch date', 'Pre-order (August): Direct CTA', 'Launch (September): Personal note from Bill', 'Follow-up (October): Early reader reactions'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '11px', fontWeight: '600', color: '#475569', background: '#47556910', padding: '2px 8px', borderRadius: '4px', flexShrink: 0 }}>{i + 1}</span>
                      <span style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ReviewBlock blockKey="email:discovery-outreach" label="Discovery Outreach Email" />

            {/* Transactional/Welcome Email */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Certification Welcome Email</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: '#f1f5f9', borderRadius: '12px', padding: '24px' }}>
                <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', maxWidth: '480px', margin: '0 auto' }}>
                  {/* Pillar bar top */}
                  <div style={{ height: '4px', background: 'linear-gradient(to right, #475569 30%, #00bfa5 30%, #00bfa5 55%, #475569 55%, #475569 75%, #fbbf24 75%)' }}></div>
                  <div style={{ padding: '32px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                      <Icon size={36} />
                      <p style={{ fontFamily: 'Lora, serif', fontSize: '22px', fontWeight: '300', color: '#1e293b', margin: '16px 0 4px 0' }}>Welcome to the Program</p>
                      <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Your certification journey begins now.</p>
                    </div>

                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '100%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '90%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '24px', width: '75%' }}></div>

                    {/* Three steps */}
                    {[
                      { num: '1', label: 'Access your learning portal', color: '#475569' },
                      { num: '2', label: 'Review Module 01: Expectation', color: '#00bfa5' },
                      { num: '3', label: 'Schedule your first mentoring session', color: '#fbbf24' },
                    ].map((step, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px', padding: '12px 16px', background: '#f8fafc', borderRadius: '8px' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '600', flexShrink: 0 }}>{step.num}</div>
                        <span style={{ fontSize: '13px', color: '#1e293b' }}>{step.label}</span>
                      </div>
                    ))}

                    <div style={{ textAlign: 'center', marginTop: '24px' }}>
                      <button className="btn btn-primary" style={{ fontSize: '13px', padding: '12px 28px' }}>Access Your Portal</button>
                    </div>
                  </div>
                  <div style={{ padding: '20px 32px', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
                    <Icon size={20} />
                    <p style={{ fontSize: '10px', color: '#94a3b8', margin: '6px 0 0 0' }}>Consult WhiteSpace LLC - consultwhitespace.com</p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Template Purpose</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Sent immediately after a consultant is accepted into the certification program. This is their first branded touchpoint as an enrolled participant - it should feel premium and welcoming, not transactional. The three numbered steps use pillar colors to foreshadow the methodology structure.
                  </p>
                </div>
                <div className="card-white" style={{ margin: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Layout Notes</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    White background with pillar gradient top bar (not dark header) to differentiate from marketing emails. Centered icon and welcome message. Numbered onboarding steps with pillar-colored circles. Single "Access Your Portal" CTA.
                  </p>
                </div>
              </div>
            </div>

            {/* Email formatting rules */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Email Design Standards</h3>
              <div className="grid-2">
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Layout Rules</h4>
                  {[
                    'Max width: 600px centered (email client standard)',
                    'Header: 32px padding, icon at 28px height',
                    'Body: 32px horizontal padding, 16px base font size',
                    'CTA: Blue #2563eb, centered, minimum 44px height',
                    'Footer: Icon 20px, 10px legal text, centered',
                    'One primary CTA per email - never two competing buttons',
                  ].map((item, i) => (
                    <div key={i} className="checklist-item" style={{ marginBottom: '10px' }}>
                      <div className="checklist-icon">{'\u2713'}</div>
                      <div className="checklist-text" style={{ fontSize: '13px' }}>{item}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Typography in Email</h4>
                  <table className="spec-table" style={{ fontSize: '13px' }}>
                    <tbody>
                      <tr><td style={{ fontWeight: '600' }}>Headlines</td><td>Georgia (Lora fallback), 20-22px, Light</td></tr>
                      <tr><td style={{ fontWeight: '600' }}>Body</td><td>Arial (DM Sans fallback), 14-16px, #475569</td></tr>
                      <tr><td style={{ fontWeight: '600' }}>CTA Text</td><td>Arial Bold, 13-14px, white on #2563eb</td></tr>
                      <tr><td style={{ fontWeight: '600' }}>Fine Print</td><td>Arial, 10px, #94a3b8</td></tr>
                    </tbody>
                  </table>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '12px', lineHeight: '1.6' }}>
                    Note: Web fonts (Lora, DM Sans) don't render reliably in most email clients. Use Georgia and Arial as safe fallbacks. The brand feel carries through color, spacing, and the icon mark.
                  </p>
                </div>
              </div>
            </div>

            {/* Template variants table */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Template Variants</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Template</th>
                    <th>Header Style</th>
                    <th>Trigger</th>
                    <th>CTA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Discovery Outreach</td>
                    <td>Dark gradient</td>
                    <td>Manual send / marketing automation</td>
                    <td>Schedule a Discovery Conversation</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Book Announcement</td>
                    <td>Slate gradient</td>
                    <td>Book campaign sequence</td>
                    <td>Learn More / Order Now</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Certification Welcome</td>
                    <td>Pillar top bar (white bg)</td>
                    <td>Acceptance into program</td>
                    <td>Access Your Portal</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Module Completion</td>
                    <td>Pillar color of completed module</td>
                    <td>Module assessment passed</td>
                    <td>Continue to Next Module</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Certification Complete</td>
                    <td>Dark gradient + certificate preview</td>
                    <td>All three pillars passed</td>
                    <td>Download Your Certificate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ReviewBlock blockKey="email:general" label="General Feedback" />
          </>
        )}

        {/* ==================== SOCIAL ==================== */}
        {activeTab === 'social' && (
          <>
            <h2 className="section-title">Social Media</h2>
            <p className="section-subtitle">
              LinkedIn creative templates, post formats, and content guidelines. All examples use the approved brand system.
            </p>

            {/* LinkedIn Post - Thought Leadership */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Thought Leadership Post</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                {/* Post image */}
                <div style={{ background: 'linear-gradient(135deg, #0f172a, #1a2744)', padding: '48px 40px', position: 'relative', overflow: 'hidden', aspectRatio: '1200/627' }}>
                  <div style={{ position: 'absolute', right: '-40px', bottom: '-40px', opacity: 0.05 }}>
                    <Icon size={240} />
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', gap: '6px', marginBottom: '24px' }}>
                      <div style={{ height: '3px', width: '32px', background: '#475569', borderRadius: '2px' }}></div>
                      <div style={{ height: '3px', width: '32px', background: '#00bfa5', borderRadius: '2px' }}></div>
                      <div style={{ height: '3px', width: '32px', background: '#fbbf24', borderRadius: '2px' }}></div>
                    </div>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '22px', fontWeight: '300', color: 'white', lineHeight: '1.4', margin: '0 0 16px 0', maxWidth: '320px' }}>
                      Most organizations undervalue what they already have.
                    </p>
                    <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Bill Adams - Outcome Dynamics</p>
                  </div>
                </div>
                {/* Post caption preview */}
                <div style={{ padding: '20px' }}>
                  <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    <strong style={{ color: '#1e293b' }}>Caption format:</strong> Hook question or bold statement. 2-3 sentences of insight. CTA to discovery conversation or book.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Image Specs</h4>
                  <table className="spec-table" style={{ fontSize: '13px' }}>
                    <tbody>
                      <tr><td style={{ fontWeight: '600', width: '120px' }}>Size</td><td>1200 x 627px</td></tr>
                      <tr><td style={{ fontWeight: '600' }}>Background</td><td>Dark gradient (#0f172a to #1a2744)</td></tr>
                      <tr><td style={{ fontWeight: '600' }}>Typography</td><td>Lora Light 300, white</td></tr>
                      <tr><td style={{ fontWeight: '600' }}>Decoration</td><td>Three-pillar divider bar, icon watermark</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-white" style={{ margin: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Post Guidelines</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Lead with insight, not promotion. Reference the methodology without jargon. End with a question or soft CTA. Tag the WhiteSpace company page.
                  </p>
                </div>
              </div>
            </div>

            <ReviewBlock blockKey="social:thought-leadership" label="Thought Leadership Post" />

            {/* LinkedIn Post - Certification Announcement */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Certification Announcement</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ background: 'white', padding: '48px 40px', position: 'relative', overflow: 'hidden', aspectRatio: '1200/627', border: '1px solid #f1f5f9' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #475569 30%, #00bfa5 30%, #00bfa5 55%, #475569 55%, #475569 75%, #fbbf24 75%)' }}></div>
                  <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.04 }}>
                    <Icon size={200} />
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <Icon size={32} />
                    <p style={{ fontSize: '11px', fontWeight: '600', color: '#00bfa5', letterSpacing: '0.5px', textTransform: 'uppercase', margin: '16px 0 8px 0' }}>Now Certified</p>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '24px', fontWeight: '300', color: '#1e293b', lineHeight: '1.3', margin: '0 0 8px 0' }}>Jane Davidson</p>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 20px 0' }}>WhiteSpace Outcome Dynamics - Cohort 2026-A</p>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      {['Expectation', 'Systemization', 'Realization'].map((p, i) => (
                        <span key={i} style={{ fontSize: '10px', fontWeight: '600', color: ['#475569', '#00bfa5', '#d97706'][i], background: ['#47556910', '#00bfa510', '#fbbf2410'][i], padding: '4px 10px', borderRadius: '12px' }}>{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    <strong style={{ color: '#1e293b' }}>Caption format:</strong> Congratulate by name. Mention cohort and pillars mastered. Reinforce selectivity. Tag the certified consultant.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>When to Use</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Post from the company page when a consultant completes certification. The certified consultant should reshare with their own commentary. This is the highest-engagement content type - it's personal, celebratory, and demonstrates program traction.
                  </p>
                </div>
                <div className="card-white" style={{ margin: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Layout Notes</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Light background with pillar gradient top bar. Pillar tags visually reinforce what was mastered. Clean, credential-forward - not promotional.
                  </p>
                </div>
              </div>
            </div>

            <ReviewBlock blockKey="social:cert-announcement" label="Certification Announcement Post" />

            {/* LinkedIn Post - Book Promo */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Book Launch - Outcome Dynamics</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ background: 'linear-gradient(135deg, #475569, #334155)', padding: '48px 40px', position: 'relative', overflow: 'hidden', aspectRatio: '1200/627' }}>
                  <div style={{ position: 'absolute', left: '-60px', top: '-60px', opacity: 0.06 }}>
                    <Icon size={280} />
                  </div>
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '32px', height: '100%' }}>
                    {/* Book mockup */}
                    <div style={{ width: '120px', height: '160px', background: 'linear-gradient(135deg, #1e293b, #0f172a)', borderRadius: '4px', boxShadow: '8px 4px 20px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '16px', flexShrink: 0, border: '1px solid rgba(255,255,255,0.1)' }}>
                      <Icon size={24} />
                      <p style={{ fontFamily: 'Lora, serif', fontSize: '11px', fontWeight: '400', color: 'white', textAlign: 'center', marginTop: '8px', lineHeight: '1.2' }}>Outcome Dynamics</p>
                      <p style={{ fontSize: '7px', color: '#94a3b8', textAlign: 'center', marginTop: '4px' }}>Bill Adams</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '10px', fontWeight: '600', color: '#fbbf24', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 8px 0' }}>September 2026</p>
                      <p style={{ fontFamily: 'Lora, serif', fontSize: '20px', fontWeight: '300', color: 'white', lineHeight: '1.3', margin: '0 0 8px 0' }}>Outcome<br/>Dynamics</p>
                      <p style={{ fontSize: '11px', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>The definitive guide to organizational asset conversion. Forbes Books.</p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    <strong style={{ color: '#1e293b' }}>Caption format:</strong> Announce the book with a key insight from it. Link to pre-order or landing page. Use the book launch as a credibility anchor for all other content.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Campaign Sequence</h4>
                  {['Teaser: Key insight from the book (no cover reveal)', 'Cover reveal: Full visual with launch date', 'Pre-order: Direct CTA with landing page link', 'Launch day: Personal post from Bill', 'Post-launch: Reader testimonials and press'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '11px', fontWeight: '600', color: '#475569', background: '#47556910', padding: '2px 8px', borderRadius: '4px', flexShrink: 0 }}>{i + 1}</span>
                      <span style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="card-white" style={{ margin: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Layout Notes</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    Slate background (not dark navy) to differentiate from thought leadership posts. Book mockup left, copy right. Gold accent for launch date.
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn Post - Carousel/Video */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Video Series Frame</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ background: '#0f172a', padding: '0', position: 'relative', overflow: 'hidden', aspectRatio: '1200/627' }}>
                  {/* Video frame mockup */}
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 2 }}>
                      <Icon size={20} />
                      <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', fontWeight: '500' }}>WhiteSpace Outcome Dynamics</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '40px 24px 20px 24px', zIndex: 2 }}>
                      <p style={{ fontFamily: 'Lora, serif', fontSize: '16px', fontWeight: '300', color: 'white', margin: '0 0 4px 0' }}>Why Consultants Leave McKinsey</p>
                      <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>Steve Smith & Bill Adams - Episode 3</p>
                    </div>
                    {/* Play button */}
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.3)', zIndex: 2 }}>
                      <div style={{ width: 0, height: 0, borderLeft: '18px solid white', borderTop: '11px solid transparent', borderBottom: '11px solid transparent', marginLeft: '4px' }}></div>
                    </div>
                    {/* Fake video background */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)', opacity: 0.5 }}></div>
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    <strong style={{ color: '#1e293b' }}>Video overlay:</strong> Icon lockup top-left, episode title bottom with gradient fade. Consistent across all series episodes.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card-white" style={{ margin: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>LinkedIn Video Series</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: '0 0 16px 0' }}>
                    6-episode series tied to the Outcome Dynamics launch. Each episode maps to the methodology and builds toward the certification pitch.
                  </p>
                  {['Competitive differentiation', 'Client story as proof', 'Methodology deep-dive', 'Asset discovery walkthrough', 'Book preview / key insights', 'Certification program overview'].map((ep, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'center' }}>
                      <span style={{ fontSize: '10px', fontWeight: '600', color: ['#475569', '#00bfa5', '#475569', '#00bfa5', '#d97706', '#475569'][i], background: ['#47556910', '#00bfa510', '#47556910', '#00bfa510', '#fbbf2410', '#47556910'][i], padding: '2px 8px', borderRadius: '4px', flexShrink: 0 }}>EP {i + 1}</span>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>{ep}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Guidelines */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Content Guidelines</h3>
              <div className="grid-3">
                <div className="do-card">
                  <h4 style={{ color: '#16a34a', fontWeight: '600', fontSize: '13px', marginBottom: '12px' }}>{'\u2713'} DO</h4>
                  <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: '1.7' }}>
                    Lead with insight over promotion. Use client outcomes as proof points. Reference the three pillars by name. Tag certified consultants. Link to discovery conversations.
                  </p>
                </div>
                <div className="dont-card">
                  <h4 style={{ color: '#dc2626', fontWeight: '600', fontSize: '13px', marginBottom: '12px' }}>{'\u2717'} DON'T</h4>
                  <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: '1.7' }}>
                    Use transactional language ("buy", "purchase", "deal"). Post without a visual. Use internal methodology jargon. Post more than 3x per week from the company page.
                  </p>
                </div>
                <div className="card-white" style={{ margin: 0, padding: '24px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Hashtags</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['#WhiteSpaceFramework', '#OutcomeDynamics', '#ConsultingCertification', '#ValueCollaborator', '#OrganizationalAssets', '#ConsultingExcellence'].map((tag, i) => (
                      <span key={i} style={{ fontSize: '11px', color: '#2563eb', background: '#2563eb10', padding: '4px 10px', borderRadius: '12px' }}>{tag}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '12px' }}>Use 3-4 per post. First two are mandatory.</p>
                </div>
              </div>
            </div>
            <ReviewBlock blockKey="social:general" label="General Feedback" />
          </>
        )}

        {/* ==================== CERTIFICATE ==================== */}
        {activeTab === 'certificate' && (
          <>
            <h2 className="section-title">Certificate Design</h2>
            <p className="section-subtitle">
              Certification credential, digital badge, and display guidelines for certified WhiteSpace consultants.
            </p>

            {/* Certificate mockup */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Certificate of Completion</h3>
            <div className="card-white" style={{ padding: '48px', marginBottom: '48px' }}>
              <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '4px', padding: '60px', maxWidth: '720px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
                {/* Top pillar bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #475569 30%, #00bfa5 30%, #00bfa5 55%, #475569 55%, #475569 75%, #fbbf24 75%)' }}></div>
                {/* Corner watermark */}
                <div style={{ position: 'absolute', right: '-30px', bottom: '-30px', opacity: 0.04 }}>
                  <Icon size={200} />
                </div>

                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <Icon size={40} />
                  <p style={{ fontSize: '10px', fontWeight: '600', color: '#64748b', letterSpacing: '2px', textTransform: 'uppercase', margin: '16px 0 4px 0' }}>WhiteSpace Outcome Dynamics</p>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '28px', fontWeight: '300', color: '#1e293b', margin: '24px 0 8px 0' }}>Certificate of Completion</p>
                  <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 32px 0' }}>This certifies that</p>

                  <p style={{ fontFamily: 'Lora, serif', fontSize: '36px', fontWeight: '400', color: '#1e293b', margin: '0 0 8px 0', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', display: 'inline-block', minWidth: '300px' }}>Jane Davidson</p>
                  <p style={{ fontSize: '14px', color: '#64748b', margin: '16px 0 32px 0', lineHeight: '1.7', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
                    has successfully completed all requirements of the WhiteSpace Clarity Certification program and demonstrated mastery of the Value Collaborator System.
                  </p>

                  {/* Pillar badges */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '32px' }}>
                    {[
                      { label: 'Expectation', color: '#475569' },
                      { label: 'Systemization', color: '#00bfa5' },
                      { label: 'Realization', color: '#fbbf24' },
                    ].map((p, i) => (
                      <div key={i} style={{ textAlign: 'center' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: `2px solid ${p.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px auto' }}>
                          <span style={{ color: p.color, fontSize: '16px', fontWeight: '600' }}>{'\u2713'}</span>
                        </div>
                        <p style={{ fontSize: '10px', fontWeight: '600', color: p.color, margin: 0 }}>{p.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Signatures */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', marginTop: '24px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ borderBottom: '1px solid #cbd5e1', width: '160px', marginBottom: '8px', height: '24px' }}></div>
                      <p style={{ fontSize: '12px', fontWeight: '600', color: '#1e293b', margin: '0 0 2px 0' }}>Steve Smith</p>
                      <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Managing Partner</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ borderBottom: '1px solid #cbd5e1', width: '160px', marginBottom: '8px', height: '24px' }}></div>
                      <p style={{ fontSize: '12px', fontWeight: '600', color: '#1e293b', margin: '0 0 2px 0' }}>Bill Adams</p>
                      <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Founder, Value Collaborator System</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px', fontSize: '11px', color: '#94a3b8' }}>
                    <span>Cohort 2026-A</span>
                    <span>|</span>
                    <span>Issued March 15, 2026</span>
                    <span>|</span>
                    <span>Credential ID: WCF-2026-0042</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Badge */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Digital Badge</h3>
            <div className="grid-3" style={{ marginBottom: '48px' }}>
              <div className="box" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #0f172a, #1a2744)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', border: '3px solid #00bfa5', boxShadow: '0 0 0 6px #0f172a, 0 0 0 8px #475569' }}>
                  <Icon size={32} />
                  <p style={{ fontSize: '7px', fontWeight: '600', color: '#00bfa5', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>Certified</p>
                </div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>LinkedIn Badge</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>120x120px - Profile credential</p>
              </div>
              <div className="box" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '12px', background: 'white', border: '2px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <Icon size={28} />
                  <p style={{ fontSize: '8px', fontWeight: '600', color: '#475569', letterSpacing: '0.5px', marginTop: '6px' }}>CERTIFIED</p>
                  <div style={{ display: 'flex', gap: '3px', marginTop: '4px' }}>
                    <div style={{ width: '12px', height: '2px', background: '#475569', borderRadius: '1px' }}></div>
                    <div style={{ width: '12px', height: '2px', background: '#00bfa5', borderRadius: '1px' }}></div>
                    <div style={{ width: '12px', height: '2px', background: '#fbbf24', borderRadius: '1px' }}></div>
                  </div>
                </div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>Email Badge</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Light variant for signatures</p>
              </div>
              <div className="box" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '12px', background: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '32px', color: '#475569' }}>{'\u2764'}</div>
                  <p style={{ fontSize: '7px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', marginTop: '4px' }}>SCAN TO VERIFY</p>
                </div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>QR Verification</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Links to credential page</p>
              </div>
            </div>

            {/* Credential display guidelines */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Credential Display Rules</h3>
              <div className="grid-2">
                <div className="do-card">
                  <h4 style={{ color: '#16a34a', fontWeight: '600', fontSize: '13px', marginBottom: '12px' }}>{'\u2713'} Approved Uses</h4>
                  <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: '1.7' }}>
                    LinkedIn profile credentials section. Email signature badge. Consulting proposals and engagement decks. Personal website or portfolio. Conference speaker bios.
                  </p>
                </div>
                <div className="dont-card">
                  <h4 style={{ color: '#dc2626', fontWeight: '600', fontSize: '13px', marginBottom: '12px' }}>{'\u2717'} Not Permitted</h4>
                  <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: '1.7' }}>
                    Modifying the badge colors or layout. Claiming certification without completing all three pillars. Using "WhiteSpace Certified" without the full credential ID. Displaying an expired credential.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Certificate Specifications</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ fontWeight: '600' }}>Print Size</td><td>11" x 8.5" (landscape)</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Paper</td><td>100lb premium linen or cotton stock</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Typography</td><td>Lora Light (name), DM Sans (body), uppercase tracking for labels</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Top Bar</td><td>4px pillar gradient (Slate 30% / Teal 25% / Slate 20% / Gold 25%)</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Credential ID</td><td>Format: WCF-[YEAR]-[SEQUENTIAL 4-DIGIT]</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Digital Format</td><td>PDF with embedded fonts, 300 DPI for print</td></tr>
                </tbody>
              </table>
            </div>
            <ReviewBlock blockKey="certificate:general" label="General Feedback" />
          </>
        )}

        {/* ==================== PRESENTATION ==================== */}
        {activeTab === 'presentation' && (
          <>
            <h2 className="section-title">Presentation Deck</h2>
            <p className="section-subtitle">
              Slide masters, layout patterns, and formatting guidelines for consulting presentations and workshop decks.
            </p>

            {/* Title slide */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Title Slide</h3>
            <div className="card-white" style={{ padding: '40px', marginBottom: '40px' }}>
              <div style={{ background: 'linear-gradient(135deg, #0f172a, #1a2744)', borderRadius: '8px', padding: '60px', aspectRatio: '16/9', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', right: '60px', bottom: '-40px', opacity: 0.04 }}>
                  <Icon size={320} />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Icon size={36} />
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '32px', fontWeight: '300', color: 'white', margin: '20px 0 12px 0', lineHeight: '1.2' }}>Organizational Asset<br/>Discovery Workshop</p>
                  <div style={{ display: 'flex', gap: '8px', margin: '20px 0 0 0' }}>
                    <div style={{ height: '2px', width: '40px', background: '#475569', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '40px', background: '#00bfa5', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '40px', background: '#fbbf24', borderRadius: '1px' }}></div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#94a3b8', margin: '20px 0 0 0' }}>Prepared for Acme Corp - March 2026</p>
                </div>
              </div>
            </div>

            {/* Section divider slide */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Section Divider</h3>
            <div className="card-white" style={{ padding: '40px', marginBottom: '40px' }}>
              <div style={{ background: '#475569', borderRadius: '8px', padding: '60px', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: '-40px', bottom: '-40px', opacity: 0.08 }}>
                  <Icon size={260} />
                </div>
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#00bfa5', letterSpacing: '2px', textTransform: 'uppercase' }}>Section 02</span>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '36px', fontWeight: '300', color: 'white', margin: '12px 0 0 0' }}>Systemization</p>
                  <p style={{ fontSize: '14px', color: '#cbd5e1', marginTop: '8px' }}>How assets work together as an integrated system</p>
                </div>
              </div>
            </div>

            {/* Content slide */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Content Slide</h3>
            <div className="card-white" style={{ padding: '40px', marginBottom: '40px' }}>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '48px', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #475569 30%, #00bfa5 30%, #00bfa5 55%, #475569 55%, #475569 75%, #fbbf24 75%)' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ maxWidth: '55%' }}>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '24px', fontWeight: '300', color: '#1e293b', margin: '0 0 24px 0' }}>Asset Mapping Results</p>
                    <div style={{ borderLeft: '3px solid #00bfa5', paddingLeft: '16px', marginBottom: '16px' }}>
                      <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.7', margin: 0 }}>
                        Analysis revealed 14 underutilized assets across three business units, representing an estimated $2.4M in unrealized annual value.
                      </p>
                    </div>
                    {['Customer relationship data', 'Process IP and workflows', 'Brand equity in adjacent markets'].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: ['#475569', '#00bfa5', '#fbbf24'][i], flexShrink: 0 }}></div>
                        <span style={{ fontSize: '14px', color: '#1e293b' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ width: '35%', background: '#f8fafc', borderRadius: '8px', padding: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {[
                        { label: 'Identified', value: '14', color: '#475569' },
                        { label: 'In System', value: '8', color: '#00bfa5' },
                        { label: 'Monetized', value: '3', color: '#fbbf24' },
                      ].map((stat, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '12px', color: '#64748b' }}>{stat.label}</span>
                          <span style={{ fontFamily: 'Lora, serif', fontSize: '24px', fontWeight: '300', color: stat.color }}>{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Footer */}
                <div style={{ position: 'absolute', bottom: '16px', left: '48px', right: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Icon size={16} />
                  <span style={{ fontSize: '10px', color: '#94a3b8' }}>Confidential - Acme Corp</span>
                  <span style={{ fontSize: '10px', color: '#94a3b8' }}>12</span>
                </div>
              </div>
            </div>

            {/* Data/chart slide */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Data Visualization Slide</h3>
            <div className="card-white" style={{ padding: '40px', marginBottom: '48px' }}>
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '48px', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #475569 30%, #00bfa5 30%, #00bfa5 55%, #475569 55%, #475569 75%, #fbbf24 75%)' }}></div>
                <p style={{ fontFamily: 'Lora, serif', fontSize: '20px', fontWeight: '300', color: '#1e293b', margin: '0 0 32px 0' }}>Value Realization Over Time</p>
                {/* Fake chart */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '140px', paddingBottom: '24px', borderBottom: '1px solid #e2e8f0' }}>
                  {[30, 42, 55, 48, 68, 75, 82, 95, 88, 110, 125, 140].map((h, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '100%', height: `${h * 0.8}px`, background: i < 4 ? '#475569' : i < 8 ? '#00bfa5' : '#fbbf24', borderRadius: '3px 3px 0 0', opacity: 0.8 }}></div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                  {['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4'].map((q, i) => (
                    <span key={i} style={{ fontSize: '9px', color: '#94a3b8', flex: 1, textAlign: 'center' }}>{q}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '24px', marginTop: '16px' }}>
                  {[{ label: 'Expectation', color: '#475569' }, { label: 'Systemization', color: '#00bfa5' }, { label: 'Realization', color: '#fbbf24' }].map((l, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: l.color }}></div>
                      <span style={{ fontSize: '11px', color: '#64748b' }}>{l.label}</span>
                    </div>
                  ))}
                </div>
                <div style={{ position: 'absolute', bottom: '16px', left: '48px', right: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Icon size={16} />
                  <span style={{ fontSize: '10px', color: '#94a3b8' }}>Confidential - Acme Corp</span>
                  <span style={{ fontSize: '10px', color: '#94a3b8' }}>18</span>
                </div>
              </div>
            </div>

            {/* Slide specs */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Deck Specifications</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ fontWeight: '600' }}>Aspect Ratio</td><td>16:9 (1920 x 1080px)</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Title Slides</td><td>Dark gradient background, Lora Light 32px, pillar divider</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Section Dividers</td><td>Pillar color background (Slate, Teal, or Gold), centered Lora title</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Content Slides</td><td>White background, pillar gradient top bar, Lora 24px headers</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Footer</td><td>Icon mark left, confidentiality note center, page number right</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Charts</td><td>Pillar colors only - Slate for phase 1, Teal for phase 2, Gold for phase 3</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Bullet Style</td><td>Pillar-colored dots (6px), not dashes or arrows</td></tr>
                </tbody>
              </table>
            </div>
            <ReviewBlock blockKey="presentation:general" label="General Feedback" />
          </>
        )}

        {/* ==================== WORKSHOP ==================== */}
        {activeTab === 'workshop' && (
          <>
            <h2 className="section-title">Workshop</h2>
            <p className="section-subtitle">
              Full-day workshop structure aligned to the three pillars. Facilitator guide, session breakdown, and materials checklist.
            </p>

            {/* Workshop overview card */}
            <div className="card-white" style={{ marginBottom: '40px' }}>
              <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Icon size={36} />
                  <div>
                    <h2>Asset Discovery & Valuation Workshop</h2>
                    <p>A structured full-day engagement using the WhiteSpace Outcome Dynamics</p>
                  </div>
                </div>
              </div>
              <div className="grid-4">
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '32px', fontWeight: '300', color: '#475569' }}>8</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Hours total</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '32px', fontWeight: '300', color: '#00bfa5' }}>3</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Core sessions</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '32px', fontWeight: '300', color: '#fbbf24' }}>6-12</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Participants</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '32px', fontWeight: '300', color: '#2563eb' }}>1</p>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Action plan delivered</p>
                </div>
              </div>
            </div>

            {/* Agenda timeline */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Full-Day Agenda</h3>

            {/* Morning - Expectation */}
            <div style={{ marginBottom: '24px' }}>
              {[
                { time: '8:30 - 9:00', title: 'Welcome & Framework Introduction', desc: 'Overview of the day, introductions, and the three-pillar methodology explained.', color: '#475569', pillar: null },
                { time: '9:00 - 10:30', title: 'Session 1: Expectation - Asset Discovery', desc: 'Guided inventory of organizational assets. Participants map what exists across people, processes, IP, relationships, and brand equity.', color: '#475569', pillar: 'Expectation' },
                { time: '10:30 - 10:45', title: 'Break', desc: null, color: '#e2e8f0', pillar: null },
                { time: '10:45 - 12:00', title: 'Session 1 (cont.): Asset Valuation', desc: 'Each identified asset is scored on current utilization, potential value, and accessibility. The Asset Gap Map is produced.', color: '#475569', pillar: 'Expectation' },
                { time: '12:00 - 1:00', title: 'Lunch', desc: null, color: '#e2e8f0', pillar: null },
                { time: '1:00 - 2:30', title: 'Session 2: Systemization - Integration Mapping', desc: 'Participants connect assets into systems. Identify dependencies, bottlenecks, and multiplication opportunities. The Asset System Map is produced.', color: '#00bfa5', pillar: 'Systemization' },
                { time: '2:30 - 2:45', title: 'Break', desc: null, color: '#e2e8f0', pillar: null },
                { time: '2:45 - 4:00', title: 'Session 3: Realization - Value Conversion Plan', desc: 'Transform the System Map into actionable initiatives. Each asset system gets a 90-day conversion plan with measurable outcomes.', color: '#fbbf24', pillar: 'Realization' },
                { time: '4:00 - 4:30', title: 'Action Plan & Close', desc: 'Consolidated action plan delivered. Next steps, accountability assignments, and follow-up schedule established.', color: '#2563eb', pillar: null },
              ].map((session, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: session.desc ? '20px' : '12px 20px', background: session.desc ? 'white' : '#f8fafc', borderRadius: '8px', borderLeft: `3px solid ${session.color}`, marginBottom: '8px', border: session.desc ? `1px solid #e2e8f0` : 'none', borderLeftWidth: '3px', borderLeftColor: session.color, borderLeftStyle: 'solid' }}>
                  <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: session.color === '#e2e8f0' ? '#94a3b8' : session.color, margin: 0 }}>{session.time}</p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', margin: 0 }}>{session.title}</h4>
                      {session.pillar && (
                        <span style={{ fontSize: '10px', fontWeight: '600', color: session.color, background: `${session.color}14`, padding: '2px 8px', borderRadius: '10px' }}>{session.pillar}</span>
                      )}
                    </div>
                    {session.desc && <p style={{ fontSize: '13px', color: '#64748b', margin: '6px 0 0 0', lineHeight: '1.6' }}>{session.desc}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Deliverables */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', marginTop: '48px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Workshop Deliverables</h3>
            <div className="grid-3" style={{ marginBottom: '48px' }}>
              <div className="box accent-navy" style={{ paddingLeft: '28px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>Asset Gap Map</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Complete inventory of organizational assets with utilization scores and unrealized potential estimates.</p>
              </div>
              <div className="box accent-teal" style={{ paddingLeft: '28px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#00bfa5', marginBottom: '8px' }}>Asset System Map</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Visual dependency map showing how assets connect, where bottlenecks exist, and where value multiplies.</p>
              </div>
              <div className="box accent-gold" style={{ paddingLeft: '28px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#d97706', marginBottom: '8px' }}>90-Day Action Plan</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Prioritized conversion initiatives with owners, timelines, KPIs, and expected value capture for each.</p>
              </div>
            </div>

            {/* Materials checklist */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Facilitator Materials Checklist</h3>
              <div className="grid-2">
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Printed Materials</h4>
                  {['Participant workbook (branded, spiral-bound)', 'Asset inventory worksheets (per participant)', 'System mapping templates (A3 format)', '90-day planning templates', 'Certificate of participation'].map((item, i) => (
                    <div key={i} className="checklist-item">
                      <div className="checklist-icon">{'\u2713'}</div>
                      <div className="checklist-text">{item}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Room Setup & Digital</h4>
                  {['Presentation deck (see Presentation tab)', 'Whiteboard or flip charts with markers', 'Post-it notes in pillar colors (slate, teal, gold)', 'Name tents with WhiteSpace branding', 'Follow-up email template with action plan PDF'].map((item, i) => (
                    <div key={i} className="checklist-item">
                      <div className="checklist-icon">{'\u2713'}</div>
                      <div className="checklist-text">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Facilitator notes */}
            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Facilitator Notes</h3>
              <div style={{ borderLeft: '3px solid #00bfa5', paddingLeft: '20px' }}>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.8', marginBottom: '12px' }}>
                  The three sessions are sequenced intentionally - Expectation must complete before Systemization begins, and Systemization before Realization. Do not allow the group to jump ahead to "solutions" before the asset inventory is thorough. The most common facilitator mistake is letting the group rush past discovery.
                </p>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: 0 }}>
                  Use the pillar colors physically in the room - slate post-its for assets, teal for system connections, gold for value conversion opportunities. This reinforces the methodology visually and makes the Asset System Map immediately legible.
                </p>
              </div>
            </div>
            <ReviewBlock blockKey="workshop:general" label="General Feedback" />
          </>
        )}

        {/* ==================== MOBILE ==================== */}
        {activeTab === 'mobile' && (
          <>
            <h2 className="section-title">Mobile & Responsive</h2>
            <p className="section-subtitle">
              Breakpoints, typography scaling, touch targets, and responsive layout guidelines.
            </p>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Breakpoints</h3>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Device</th>
                    <th>Width</th>
                    <th>Padding</th>
                    <th>Headline Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Desktop</td>
                    <td style={{ fontFamily: 'monospace' }}>1200px+</td>
                    <td>48px</td>
                    <td>56px Lora Light</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Tablet</td>
                    <td style={{ fontFamily: 'monospace' }}>768px - 1199px</td>
                    <td>32px</td>
                    <td>40px Lora Light</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600' }}>Mobile</td>
                    <td style={{ fontFamily: 'monospace' }}>&lt; 768px</td>
                    <td>16px</td>
                    <td>32px Lora Light</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Touch Targets</h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8' }}>
                All interactive elements must have a minimum touch target of 44x44px on mobile devices. 
                Buttons should use the full-width layout on screens below 768px. Form fields should be 
                at minimum 48px height for comfortable touch interaction.
              </p>
            </div>
            <ReviewBlock blockKey="mobile:general" label="General Feedback" />
          </>
        )}

        {/* ==================== DO'S & DON'TS ==================== */}
        {activeTab === 'dos' && (
          <>
            <h2 className="section-title">Do's & Don'ts</h2>
            <p className="section-subtitle">
              Correct and incorrect brand applications at a glance.
            </p>

            {[
              { doTitle: 'Logo Usage', doText: 'Use the full lockup at correct proportions. Maintain clear space around the mark. Display on approved background colors.', dontText: 'Stretch, rotate, or skew the mark. Change individual bracket colors. Apply drop shadows, gradients, or effects. Place on busy backgrounds.' },
              { doTitle: 'Color', doText: 'Use Navy for authority, Teal for innovation, Gold for realization. Colors carry meaning tied to the three pillars.', dontText: 'Use colors purely for decoration. Mix with off-brand palette colors. Use Teal or Gold for body text (accessibility failures).' },
              { doTitle: 'CTAs', doText: 'Drive toward discovery conversations and consultations. Frame the certification program as selective and high-value.', dontText: 'Include shopping carts or transactional language. Use "Buy Now" or "Add to Cart." This is consultative, not e-commerce.' },
            ].map((pair, i) => (
              <div key={i} className="grid-2" style={{ marginBottom: '24px' }}>
                <div className="do-card">
                  <h4 style={{ color: '#16a34a', fontWeight: '600', fontSize: '14px', marginBottom: '16px' }}>{'\u2713'} DO - {pair.doTitle}</h4>
                  <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: '1.7' }}>{pair.doText}</p>
                </div>
                <div className="dont-card">
                  <h4 style={{ color: '#dc2626', fontWeight: '600', fontSize: '14px', marginBottom: '16px' }}>{'\u2717'} DON'T - {pair.doTitle}</h4>
                  <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: '1.7' }}>{pair.dontText}</p>
                </div>
              </div>
            ))}
            <ReviewBlock blockKey="dos:general" label="General Feedback" />
          </>
        )}

        {/* ==================== ACCESSIBILITY ==================== */}
        {activeTab === 'accessibility' && (
          <>
            <h2 className="section-title">Accessibility</h2>
            <p className="section-subtitle">
              WCAG AA compliance standards, testing checklist, and inclusive design requirements.
            </p>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>WCAG AA Checklist</h3>
              {[
                'Color contrast minimum 4.5:1 for body text, 3:1 for large text (18px+)',
                'Minimum font size 12px for all text (16px preferred for body)',
                'Line height 1.5 or greater for body text',
                'Minimum 44x44px touch targets on mobile',
                'Full keyboard navigation support for all interactive elements',
                'Visible focus indicators on all focusable elements',
                'Form labels associated with inputs (no placeholder-only labels)',
                'Meaningful alt text on all non-decorative images',
                'Video and audio content must include transcripts',
                'Error messages must be descriptive and associated with fields',
              ].map((item, i) => (
                <div key={i} className="checklist-item">
                  <div className="checklist-icon">{'\u2713'}</div>
                  <div className="checklist-text">{item}</div>
                </div>
              ))}
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Testing Tools</h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.8' }}>
                WAVE Web Accessibility Evaluator, Axe DevTools browser extension, 
                Chrome DevTools Lighthouse audit, and manual keyboard navigation testing.
              </p>
            </div>
            <ReviewBlock blockKey="accessibility:general" label="General Feedback" />
          </>
        )}

        {/* ==================== APPLICATIONS ==================== */}
        {activeTab === 'applications' && (
          <>
            <h2 className="section-title">Applications</h2>
            <p className="section-subtitle">
              The brand system in action across real-world touchpoints. Each mockup uses the approved design system.
            </p>

            {/* Business Card */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Business Card</h3>
            <div className="grid-2" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '40px', border: '1px solid #e2e8f0' }}>
                <div style={{ background: 'white', borderRadius: '8px', padding: '32px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', aspectRatio: '3.5/2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #475569 30%, #00bfa5 30%, #00bfa5 55%, #475569 55%, #475569 75%, #fbbf24 75%)' }}></div>
                  <Icon size={28} />
                  <div>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '16px', fontWeight: '400', color: '#1e293b', margin: '0 0 2px 0' }}>Steve Smith</p>
                    <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Managing Partner</p>
                  </div>
                  <div style={{ fontSize: '10px', color: '#64748b', lineHeight: '1.8' }}>
                    steve@consultwhitespace.com<br/>
                    (555) 123-4567
                  </div>
                </div>
                <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', marginTop: '12px' }}>Front - 3.5" x 2"</p>
              </div>
              <div style={{ background: 'white', borderRadius: '12px', padding: '40px', border: '1px solid #e2e8f0' }}>
                <div style={{ background: 'linear-gradient(135deg, #0f172a, #1a2744)', borderRadius: '8px', padding: '32px', aspectRatio: '3.5/2', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', right: '-30px', bottom: '-30px', opacity: 0.06 }}>
                    <Icon size={180} />
                  </div>
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <svg height="80" viewBox="0 0 628.8 521.48" xmlns="http://www.w3.org/2000/svg">
                      <rect fill="rgba(255,255,255,0.06)" x="0" y="410.72" width="628.8" height="110.75"/>
                      <path fill="#ffffff" d="M405.28,231.1c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.05c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
                      <path fill="#ffffff" d="M251.28,231.1c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21c0-10.5,8.75-19.25,19.25-19.25,3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
                      <path fill="#fbbf24" d="M443.79,3.79c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
                      <path fill="#00bfa5" d="M328.28.61c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V57.75c0-32.55,25.9-57.75,57.75-57.75,2.89,0,5.74.21,8.52.61Z"/>
                      <path fill="rgba(255,255,255,0.7)" d="M15.65,313.5l-1.44-4.33c-1.78-5.55-2.85-9.14-3.22-10.77l-6.22.22v-4.88h26.97v3.66c-3.04.15-5.18.65-6.44,1.5-1.26.85-1.89,2.24-1.89,4.16,0,1.78.37,3.92,1.11,6.44,1.33,4.96,3.11,10.51,5.33,16.65.37,1.11.81,2.42,1.33,3.94.52,1.52,1.11,3.27,1.78,5.27.44,1.55,1,3.26,1.67,5.11.67,1.85,1.15,3.18,1.44,4,1.48,4,2.59,7.18,3.33,9.55h.22c1.48-5.03,3-9.92,4.55-14.65,2.66-8.58,5.59-17.65,8.77-27.19,3.33-9.99,5.33-16.21,5.99-18.65h3.55c.89,3.04,2.4,7.79,4.55,14.26,2.15,6.48,3.7,11.16,4.66,14.04,2.22,6.37,3.74,10.88,4.55,13.54.59,2,1.55,5,2.89,8.99,1.48,4.29,2.66,7.96,3.55,10.99h.33c1.78-5.77,3.29-10.54,4.55-14.32,3.77-10.73,6.84-19.98,9.21-27.75.81-2.74,1.55-5.03,2.22-6.88,1.41-3.77,2.55-6.47,3.44-8.1l-8.88.33v-4.88h22.53v3.66c-2.66.3-4.68.85-6.05,1.67-1.37.82-2.59,2.28-3.66,4.38-1.07,2.11-2.42,5.57-4.05,10.38l-5.66,16.87c-5.92,17.98-10.69,31.93-14.32,41.85h-3.33l-20.76-59.38-19.54,59.38h-3.22l-19.87-59.05Z"/>
                      <path fill="rgba(255,255,255,0.7)" d="M121.21,368.11c2.14,0,3.7-.54,4.66-1.61.96-1.07,1.54-2.46,1.72-4.16.18-1.7.28-4.29.28-7.77v-52.5c0-2.81.11-5.22.33-7.21l-7.88.44v-4.66c4.44,0,7.6-.26,9.49-.78,1.89-.52,3.35-1.26,4.38-2.22h3.22v33.85c2.59-2.15,5.51-3.9,8.77-5.27,3.26-1.37,6.4-2.05,9.43-2.05,6.36,0,10.99,2,13.88,5.99,2.89,4,4.37,10.29,4.44,18.87l.11,20.65c0,3.33-.15,5.85-.44,7.55l6.99-.33v4.55h-22.64v-3.33c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.48-2.44,1.67-4.11.18-1.67.28-4.27.28-7.83v-15.54c0-6.36-1-11.12-3-14.26-2-3.14-5.14-4.72-9.44-4.72-2.74,0-5.46.65-8.16,1.94-2.7,1.3-4.87,2.94-6.49,4.94v32.75c0,2.89-.19,5.4-.56,7.55l6.99-.33v4.55h-22.64v-3.33Z"/>
                      <path fill="rgba(255,255,255,0.7)" d="M189.36,368.11c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.48-2.44,1.67-4.11.18-1.67.28-4.27.28-7.83v-25.31c0-2.15.15-4.55.44-7.21l-7.88.44v-4.66c4.37,0,7.49-.26,9.38-.78,1.89-.52,3.35-1.26,4.38-2.22h3.22v44.84c0,3.33-.15,5.85-.44,7.55l6.99-.33v4.55h-22.64v-3.33ZM196.24,301.9c-1.18-1.29-1.78-2.83-1.78-4.61s.61-3.33,1.83-4.66c1.22-1.33,2.61-2,4.16-2,1.7,0,3.12.65,4.27,1.94,1.15,1.3,1.72,2.87,1.72,4.72s-.61,3.31-1.83,4.61c-1.22,1.3-2.65,1.94-4.27,1.94s-2.92-.65-4.11-1.94Z"/>
                      <path fill="rgba(255,255,255,0.7)" d="M228.65,352.79l.22-32.19-8.55.11v-4.77c3.55-.07,6.57-1.68,9.05-4.83,2.48-3.14,4.31-6.72,5.49-10.71h3.77v15.54h18.65v4.33l-18.65.22c-.08,11.32-.13,19.17-.17,23.53-.04,4.37-.06,6.81-.06,7.33,0,5.25.63,9.16,1.89,11.71,1.26,2.55,3.44,3.83,6.55,3.83,1.92,0,3.83-.59,5.72-1.78,1.89-1.18,3.53-2.81,4.94-4.88l3,2.44c-2.89,4.29-5.74,7.12-8.55,8.49-2.81,1.37-5.55,2.05-8.21,2.05-10.14,0-15.17-6.81-15.1-20.42Z"/>
                      <path fill="rgba(255,255,255,0.7)" d="M279.43,369.61c-4.11-2.4-7.35-5.84-9.71-10.32-2.37-4.48-3.55-9.64-3.55-15.48,0-5.18,1.18-10.05,3.55-14.6,2.37-4.55,5.68-8.2,9.93-10.93,4.25-2.74,9.08-4.11,14.49-4.11,4.22,0,8.03.93,11.43,2.77,3.4,1.85,6.1,4.61,8.1,8.27s3,8.16,3,13.49l-39.07.67c-.07,8.88,1.39,15.8,4.38,20.76,3,4.96,7.64,7.44,13.93,7.44,3.4,0,6.9-.89,10.49-2.66,3.59-1.78,6.34-3.96,8.27-6.55l2.66,2.22c-2.81,4.29-6.46,7.48-10.93,9.55-4.48,2.07-8.86,3.11-13.15,3.11-5.11,0-9.71-1.2-13.82-3.61ZM306.24,334.7c0-4.44-1-8.25-3-11.43-2-3.18-5-4.77-8.99-4.77-9.18,0-14.62,5.4-16.32,16.21h28.31Z"/>
                      <path fill="rgba(255,255,255,0.7)" d="M343.26,371.77c-3.52-.96-6.6-2.37-9.27-4.22l.55,4.77h-5.77l-.67-23.64h4.33c.37,6.37,2.55,11.27,6.55,14.71,4,3.44,9.06,5.16,15.21,5.16,4.51,0,8.31-1.24,11.38-3.72,3.07-2.48,4.61-5.86,4.61-10.16,0-3.18-.87-5.9-2.61-8.16-1.74-2.26-3.88-4.14-6.44-5.66-2.55-1.52-6.01-3.27-10.38-5.27-4.96-2.37-8.9-4.44-11.82-6.22-2.92-1.78-5.42-4.12-7.49-7.05-2.07-2.92-3.11-6.53-3.11-10.82,0-2.96.68-5.92,2.05-8.88,1.37-2.96,3.74-5.48,7.1-7.55,3.37-2.07,7.83-3.11,13.38-3.11,3.33,0,6.68.43,10.04,1.28,3.37.85,6.46,2.31,9.27,4.38l-.44-4.77h5.66v24.42h-4c-.37-5.84-2.24-10.78-5.61-14.82-3.37-4.03-8.08-6.05-14.15-6.05-4.44,0-7.92,1.24-10.43,3.72-2.52,2.48-3.77,5.57-3.77,9.27,0,2.96.85,5.51,2.55,7.66,1.7,2.15,3.77,3.92,6.22,5.33,2.44,1.41,5.88,3.15,10.32,5.22,5.03,2.29,9.08,4.37,12.16,6.22,3.07,1.85,5.68,4.27,7.83,7.27,2.15,3,3.22,6.68,3.22,11.04s-1.02,7.81-3.05,10.99c-2.04,3.18-5.01,5.66-8.94,7.44-3.92,1.78-8.59,2.66-13.99,2.66-3.48,0-6.98-.48-10.49-1.44Z"/>
                      <path fill="rgba(255,255,255,0.7)" d="M388.38,396.42c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.46-2.41,1.61-4,.15-1.59.26-4.24.33-7.94l.22-53.61c0-3.11.15-5.51.44-7.21l-7.88.44v-4.66c4.37,0,7.36-.24,8.99-.72,1.63-.48,2.96-1.24,4-2.28h3.33c.29,3.63.44,5.62.44,5.99,2.22-2,4.88-3.61,7.99-4.83,3.11-1.22,6.18-1.83,9.21-1.83,4.37,0,8.4,1.13,12.1,3.39,3.7,2.26,6.68,5.48,8.94,9.66,2.26,4.18,3.39,9.01,3.39,14.49,0,6.14-1.3,11.6-3.89,16.37-2.59,4.77-6.05,8.49-10.38,11.16-4.33,2.66-9.01,4-14.04,4s-9.55-1.22-13.32-3.66v18.43c0,3.33-.15,5.84-.44,7.55l6.99-.33v4.55h-22.64v-3.33ZM426.62,365.56c2.55-2.15,4.53-5.14,5.94-8.99,1.4-3.85,2.11-8.21,2.11-13.1,0-6.66-1.43-12.3-4.27-16.93-2.85-4.62-7.09-6.94-12.71-6.94-2.44,0-4.81.59-7.1,1.78-2.29,1.18-4.29,2.66-5.99,4.44.07.52.11,2.77.11,6.77l-.11,31.86c3.77,2.89,8.1,4.33,12.99,4.33,3.48,0,6.49-1.07,9.05-3.22Z"/>
                      <path fill="rgba(255,255,255,0.7)" d="M459.36,369.55c-2.85-2.44-4.27-5.62-4.27-9.55,0-4.29,1.72-7.92,5.16-10.88,3.44-2.96,7.77-5.16,12.99-6.6,5.22-1.44,10.45-2.13,15.71-2.05v-6.88c0-4.81-.7-8.56-2.11-11.27-1.41-2.7-4.4-4.05-8.99-4.05-2.29,0-4.48.48-6.55,1.44-2.07.96-3.59,2.41-4.55,4.33.96,1.04,1.44,2.44,1.44,4.22,0,1.11-.41,2.16-1.22,3.16-.82,1-2,1.5-3.55,1.5s-2.77-.5-3.66-1.5c-.89-1-1.33-2.31-1.33-3.94,0-2.44.94-4.68,2.83-6.72,1.89-2.03,4.51-3.64,7.88-4.83,3.37-1.18,7.12-1.78,11.27-1.78,6.22,0,10.8,1.65,13.76,4.94,2.96,3.29,4.4,8.49,4.33,15.6l-.11,24.98c0,2.37-.15,4.88-.44,7.55l7.88-.44v4.66h-15.87c-.22-1.11-.48-3.22-.78-6.33-5.4,5.4-11.21,8.1-17.43,8.1-5.4,0-9.53-1.22-12.38-3.66ZM481.95,365.28c2.29-1.07,4.62-2.72,6.99-4.94-.07-1.11-.11-3-.11-5.66l.11-10.43c-6.07.22-11.47,1.46-16.21,3.72-4.74,2.26-7.1,5.72-7.1,10.38,0,2.74.81,4.85,2.44,6.33,1.63,1.48,3.7,2.22,6.22,2.22,2.81,0,5.37-.54,7.66-1.61Z"/>
                      <path fill="rgba(255,255,255,0.7)" d="M527.3,369.78c-4.18-2.29-7.49-5.59-9.93-9.88-2.44-4.29-3.66-9.36-3.66-15.21,0-5.18,1.24-10.12,3.72-14.82,2.48-4.7,5.92-8.49,10.32-11.38,4.4-2.89,9.38-4.33,14.93-4.33,4,0,7.55.63,10.66,1.89,3.11,1.26,5.53,2.92,7.27,5,1.74,2.07,2.61,4.33,2.61,6.77,0,1.7-.48,3.11-1.44,4.22-.96,1.11-2.29,1.66-4,1.66s-2.85-.54-3.66-1.61c-.82-1.07-1.22-2.2-1.22-3.39,0-1.85.55-3.33,1.67-4.44-.82-2.29-2.39-3.87-4.72-4.72-2.33-.85-4.64-1.28-6.94-1.28-3.4,0-6.46.93-9.16,2.77-2.7,1.85-4.83,4.55-6.38,8.1-1.55,3.55-2.33,7.81-2.33,12.77s.79,9.36,2.39,13.21c1.59,3.85,3.83,6.86,6.71,9.05,2.89,2.18,6.22,3.27,9.99,3.27,3.33,0,6.6-.91,9.82-2.72,3.22-1.81,5.75-4.09,7.6-6.83l2.89,2.22c-2.74,4.29-6.27,7.55-10.6,9.77-4.33,2.22-8.57,3.33-12.71,3.33-5.03,0-9.64-1.15-13.82-3.44Z"/>
                      <path fill="rgba(255,255,255,0.7)" d="M586.13,369.61c-4.11-2.4-7.35-5.84-9.71-10.32-2.37-4.48-3.55-9.64-3.55-15.48,0-5.18,1.18-10.05,3.55-14.6,2.37-4.55,5.68-8.2,9.93-10.93,4.25-2.74,9.08-4.11,14.49-4.11,4.22,0,8.03.93,11.43,2.77,3.4,1.85,6.1,4.61,8.1,8.27s3,8.16,3,13.49l-39.07.67c-.07,8.88,1.39,15.8,4.38,20.76,3,4.96,7.64,7.44,13.93,7.44,3.4,0,6.9-.89,10.49-2.66,3.59-1.78,6.34-3.96,8.27-6.55l2.66,2.22c-2.81,4.29-6.46,7.48-10.93,9.55-4.48,2.07-8.86,3.11-13.15,3.11-5.11,0-9.71-1.2-13.82-3.61ZM612.93,334.7c0-4.44-1-8.25-3-11.43-2-3.18-5-4.77-8.99-4.77-9.18,0-14.62,5.4-16.32,16.21h28.31Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M37.93,486.98c-4.9,0-9.13-1.09-12.71-3.28-3.58-2.18-6.32-5.23-8.24-9.14-1.92-3.91-2.88-8.46-2.88-13.64s.96-9.73,2.88-13.64c1.92-3.91,4.67-6.96,8.24-9.14,3.58-2.18,7.81-3.28,12.71-3.28,5.76,0,10.44,1.37,14.04,4.1s5.9,6.6,6.91,11.59h-6.7c-.77-3.12-2.33-5.63-4.68-7.52-2.35-1.9-5.54-2.84-9.58-2.84-3.55,0-6.66.83-9.32,2.48s-4.72,4.03-6.16,7.13c-1.44,3.1-2.16,6.8-2.16,11.12s.72,8.03,2.16,11.12,3.49,5.47,6.16,7.13c2.66,1.66,5.77,2.48,9.32,2.48,4.03,0,7.22-.92,9.58-2.77,2.35-1.85,3.91-4.31,4.68-7.38h6.7c-1.01,4.85-3.31,8.64-6.91,11.38-3.6,2.74-8.28,4.1-14.04,4.1Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M67.3,486.12v-51.84h6.05v51.84h-6.05Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M95.16,486.98c-2.93,0-5.38-.52-7.34-1.55-1.97-1.03-3.43-2.4-4.39-4.1-.96-1.7-1.44-3.56-1.44-5.58,0-2.45.64-4.52,1.91-6.23,1.27-1.7,3.07-3,5.4-3.89,2.33-.89,5.08-1.33,8.24-1.33h9.58c0-2.25-.35-4.14-1.04-5.65-.7-1.51-1.7-2.65-3.02-3.42-1.32-.77-2.96-1.15-4.93-1.15-2.3,0-4.3.58-5.98,1.73-1.68,1.15-2.71,2.86-3.1,5.11h-6.19c.29-2.59,1.16-4.76,2.63-6.52,1.46-1.75,3.32-3.1,5.58-4.03,2.26-.94,4.61-1.4,7.06-1.4,3.36,0,6.16.61,8.39,1.84,2.23,1.22,3.9,2.93,5,5.11,1.1,2.18,1.66,4.76,1.66,7.74v22.46h-5.4l-.36-6.41c-.48,1.01-1.09,1.96-1.84,2.84-.74.89-1.61,1.66-2.59,2.3-.98.65-2.12,1.16-3.42,1.55-1.3.38-2.76.58-4.39.58ZM96.1,481.87c1.68,0,3.2-.35,4.57-1.04,1.37-.7,2.53-1.66,3.49-2.88.96-1.22,1.69-2.58,2.2-4.07.5-1.49.76-3.05.76-4.68v-.22h-9.07c-2.35,0-4.25.28-5.69.83s-2.47,1.32-3.1,2.3c-.62.98-.94,2.1-.94,3.35s.3,2.42.9,3.38c.6.96,1.49,1.71,2.66,2.23,1.18.53,2.58.79,4.21.79Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M122.52,486.12v-36.29h5.47l.43,6.91c.82-1.63,1.86-3.02,3.13-4.18,1.27-1.15,2.81-2.04,4.61-2.66,1.8-.62,3.85-.94,6.16-.94v6.34h-2.23c-1.54,0-3,.21-4.39.61-1.39.41-2.63,1.07-3.71,1.98-1.08.91-1.92,2.15-2.52,3.71-.6,1.56-.9,3.49-.9,5.8v18.72h-6.05Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M152.76,442.13c-1.2,0-2.2-.4-2.99-1.19s-1.19-1.79-1.19-2.99.4-2.17,1.19-2.92c.79-.74,1.79-1.12,2.99-1.12s2.14.37,2.95,1.12c.82.75,1.22,1.72,1.22,2.92s-.41,2.2-1.22,2.99c-.82.79-1.8,1.19-2.95,1.19ZM149.74,486.12v-36.29h6.05v36.29h-6.05Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M180.7,486.12c-2.16,0-4.03-.33-5.62-1.01-1.58-.67-2.8-1.81-3.64-3.42-.84-1.61-1.26-3.78-1.26-6.52v-20.23h-6.34v-5.11h6.34l.79-8.78h5.26v8.78h10.51v5.11h-10.51v20.23c0,2.26.46,3.78,1.37,4.57.91.79,2.52,1.19,4.82,1.19h3.89v5.18h-5.62Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M198.63,501.96l8.86-19.87h-2.09l-14.26-32.26h6.55l11.81,27.72,12.46-27.72h6.26l-23.26,52.13h-6.34Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M254.21,486.12v-50.4h30.67v4.97h-24.62v17.71h20.95v4.9h-20.95v22.82h-6.05Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M292.37,486.12v-36.29h5.47l.43,6.91c.82-1.63,1.86-3.02,3.13-4.18,1.27-1.15,2.81-2.04,4.61-2.66,1.8-.62,3.85-.94,6.16-.94v6.34h-2.23c-1.54,0-3,.21-4.39.61-1.39.41-2.63,1.07-3.71,1.98-1.08.91-1.92,2.15-2.52,3.71-.6,1.56-.9,3.49-.9,5.8v18.72h-6.05Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M330.82,486.98c-2.93,0-5.38-.52-7.34-1.55-1.97-1.03-3.43-2.4-4.39-4.1-.96-1.7-1.44-3.56-1.44-5.58,0-2.45.64-4.52,1.91-6.23,1.27-1.7,3.07-3,5.4-3.89,2.33-.89,5.08-1.33,8.24-1.33h9.58c0-2.25-.35-4.14-1.04-5.65-.7-1.51-1.7-2.65-3.02-3.42-1.32-.77-2.96-1.15-4.93-1.15-2.3,0-4.3.58-5.98,1.73-1.68,1.15-2.71,2.86-3.1,5.11h-6.19c.29-2.59,1.16-4.76,2.63-6.52,1.46-1.75,3.32-3.1,5.58-4.03,2.26-.94,4.61-1.4,7.06-1.4,3.36,0,6.16.61,8.39,1.84,2.23,1.22,3.9,2.93,5,5.11,1.1,2.18,1.66,4.76,1.66,7.74v22.46h-5.4l-.36-6.41c-.48,1.01-1.09,1.96-1.84,2.84-.74.89-1.61,1.66-2.59,2.3-.98.65-2.12,1.16-3.42,1.55-1.3.38-2.76.58-4.39.58ZM331.75,481.87c1.68,0,3.2-.35,4.57-1.04,1.37-.7,2.53-1.66,3.49-2.88.96-1.22,1.69-2.58,2.2-4.07.5-1.49.76-3.05.76-4.68v-.22h-9.07c-2.35,0-4.25.28-5.69.83s-2.47,1.32-3.1,2.3c-.62.98-.94,2.1-.94,3.35s.3,2.42.9,3.38c.6.96,1.49,1.71,2.66,2.23,1.18.53,2.58.79,4.21.79Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M358.18,486.12v-36.29h5.47l.36,5.18c1.15-1.87,2.7-3.35,4.64-4.43,1.94-1.08,4.07-1.62,6.37-1.62,1.87,0,3.56.25,5.08.76,1.51.5,2.86,1.27,4.03,2.3,1.18,1.03,2.1,2.34,2.77,3.92,1.25-2.21,2.98-3.92,5.18-5.15,2.21-1.22,4.54-1.84,6.98-1.84,2.83,0,5.28.57,7.34,1.69,2.06,1.13,3.67,2.83,4.82,5.11,1.15,2.28,1.73,5.17,1.73,8.68v21.67h-5.98v-21.02c0-3.65-.74-6.38-2.23-8.21-1.49-1.82-3.6-2.74-6.34-2.74-1.87,0-3.55.49-5.04,1.48-1.49.98-2.66,2.41-3.53,4.28-.86,1.87-1.3,4.18-1.3,6.91v19.3h-6.05v-21.02c0-3.65-.74-6.38-2.23-8.21-1.49-1.82-3.58-2.74-6.26-2.74-1.82,0-3.48.49-4.97,1.48-1.49.98-2.66,2.41-3.53,4.28-.86,1.87-1.3,4.18-1.3,6.91v19.3h-6.05Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M438.24,486.98c-3.36,0-6.36-.79-9-2.38-2.64-1.58-4.71-3.8-6.19-6.66-1.49-2.86-2.23-6.18-2.23-9.97s.73-7.18,2.2-10.01c1.46-2.83,3.53-5.04,6.19-6.62s5.72-2.38,9.18-2.38,6.58.79,9.07,2.38c2.5,1.58,4.4,3.66,5.72,6.23,1.32,2.57,1.98,5.39,1.98,8.46v1.51c0,.53-.02,1.13-.07,1.8h-29.74v-4.68h23.83c-.14-3.31-1.24-5.9-3.28-7.78-2.04-1.87-4.6-2.81-7.67-2.81-2.02,0-3.91.47-5.69,1.4-1.78.94-3.19,2.3-4.25,4.1-1.06,1.8-1.58,4.04-1.58,6.73v2.02c0,2.98.54,5.47,1.62,7.49,1.08,2.02,2.5,3.53,4.25,4.54,1.75,1.01,3.64,1.51,5.65,1.51,2.54,0,4.64-.56,6.3-1.69,1.66-1.13,2.87-2.67,3.64-4.64h5.98c-.62,2.21-1.66,4.17-3.1,5.87-1.44,1.7-3.23,3.06-5.36,4.07-2.14,1.01-4.62,1.51-7.45,1.51Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M469.13,486.12l-10.66-36.29h6.05l8.28,30.6h-1.08l9-30.6h6.84l9.14,30.53-1.15.07,8.21-30.6h6.12l-10.58,36.29h-6.19l-9.5-31.97h1.22l-9.5,31.97h-6.19Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M531.55,486.98c-3.36,0-6.38-.78-9.07-2.34-2.69-1.56-4.8-3.77-6.34-6.62-1.54-2.86-2.3-6.18-2.3-9.97s.78-7.26,2.34-10.12c1.56-2.85,3.7-5.06,6.41-6.62,2.71-1.56,5.75-2.34,9.11-2.34s6.52.78,9.18,2.34,4.78,3.77,6.34,6.62c1.56,2.86,2.34,6.21,2.34,10.04s-.79,7.19-2.38,10.04c-1.58,2.86-3.72,5.06-6.41,6.62-2.69,1.56-5.76,2.34-9.22,2.34ZM531.62,481.8c2.06,0,3.98-.51,5.76-1.55,1.78-1.03,3.22-2.58,4.32-4.64,1.1-2.06,1.66-4.61,1.66-7.63s-.54-5.63-1.62-7.67c-1.08-2.04-2.5-3.58-4.25-4.61-1.75-1.03-3.68-1.55-5.8-1.55s-3.92.52-5.72,1.55c-1.8,1.03-3.24,2.57-4.32,4.61s-1.62,4.6-1.62,7.67.54,5.57,1.62,7.63c1.08,2.06,2.5,3.61,4.25,4.64,1.75,1.03,3.66,1.55,5.72,1.55Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M558.05,486.12v-36.29h5.47l.43,6.91c.82-1.63,1.86-3.02,3.13-4.18,1.27-1.15,2.81-2.04,4.61-2.66,1.8-.62,3.85-.94,6.16-.94v6.34h-2.23c-1.54,0-3,.21-4.39.61-1.39.41-2.63,1.07-3.71,1.98-1.08.91-1.92,2.15-2.52,3.71-.6,1.56-.9,3.49-.9,5.8v18.72h-6.05Z"/>
                      <path fill="rgba(255,255,255,0.5)" d="M584.69,486.12v-51.84h6.05v51.84h-6.05ZM607.01,486.12l-17.28-19.87,15.77-16.42h7.42l-18.07,18.58.07-4.32,19.8,22.03h-7.7Z"/>
                    </svg>
                  </div>
                </div>
                <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', marginTop: '12px' }}>Back - Dark with watermark</p>
              </div>
            </div>

            {/* Email Signature */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Email Signature</h3>
            <div className="card-white" style={{ marginBottom: '48px' }}>
              <div style={{ maxWidth: '500px', padding: '20px', background: '#fafafa', borderRadius: '8px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ borderRight: '2px solid #00bfa5', paddingRight: '16px' }}>
                    <Icon size={36} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '15px', fontWeight: '400', color: '#1e293b', margin: '0 0 2px 0' }}>Steve Smith</p>
                    <p style={{ fontSize: '12px', color: '#475569', margin: '0 0 8px 0' }}>Managing Partner, Consult WhiteSpace</p>
                    <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.8' }}>
                      <span>steve@consultwhitespace.com</span>
                      <span style={{ margin: '0 8px', color: '#cbd5e1' }}>|</span>
                      <span>(555) 123-4567</span>
                    </div>
                    <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '8px', fontStyle: 'italic' }}>Author of Outcome Dynamics (Forbes Books, Sept 2026)</p>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>Bracket icon + teal divider line. Book credit included for Steve and Bill.</p>
            </div>

            {/* LinkedIn Banner */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>LinkedIn Banner</h3>
            <div className="card-white" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'linear-gradient(135deg, #0f172a, #1a2744)', borderRadius: '8px', padding: '40px 48px', aspectRatio: '4/1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: '-60px', top: '-60px', opacity: 0.04 }}>
                  <Icon size={300} />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '24px', fontWeight: '300', color: 'white', margin: '0 0 4px 0' }}>Master the System That Turns Competitive Markets Into Premium Positioning</p>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Consulting Certification - Value Collaborator System - Outcome Dynamics</p>
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Icon size={56} />
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>1584 x 396px - Company page and personal profiles</p>
            </div>

            {/* Presentation Cover */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Presentation Title Slide</h3>
            <div className="card-white" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'linear-gradient(135deg, #0f172a, #1a2744)', borderRadius: '8px', padding: '60px', aspectRatio: '16/9', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', right: '60px', bottom: '-40px', opacity: 0.04 }}>
                  <Icon size={320} />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Icon size={36} />
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '32px', fontWeight: '300', color: 'white', margin: '20px 0 12px 0', lineHeight: '1.2' }}>Organizational Asset<br/>Discovery Workshop</p>
                  <div style={{ display: 'flex', gap: '8px', margin: '20px 0 0 0' }}>
                    <div style={{ height: '2px', width: '40px', background: '#475569', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '40px', background: '#00bfa5', borderRadius: '1px' }}></div>
                    <div style={{ height: '2px', width: '40px', background: '#fbbf24', borderRadius: '1px' }}></div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#94a3b8', margin: '20px 0 0 0' }}>Prepared for Acme Corp - March 2026</p>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>16:9 slide master - pillar divider line below title</p>
            </div>

            {/* Zoom Background */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Virtual Background</h3>
            <div className="card-white" style={{ marginBottom: '48px' }}>
              <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '40px', aspectRatio: '16/9', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: '40px', top: '40px', opacity: 0.07 }}>
                  <Icon size={200} />
                </div>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Icon size={24} />
                  <div>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '13px', fontWeight: '300', color: '#475569', margin: 0 }}>WhiteSpace</p>
                    <p style={{ fontSize: '8px', color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '500', margin: 0 }}>Outcome Dynamics</p>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>Clean background with subtle watermark. Logo lockup bottom-right. Center clear for speaker.</p>
            </div>

            {/* Report Cover */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Engagement Report Cover</h3>
            <div className="card-white">
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '60px', aspectRatio: '8.5/11', maxWidth: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #475569 30%, #00bfa5 30%, #00bfa5 55%, #475569 55%, #475569 75%, #fbbf24 75%)' }}></div>
                <Icon size={36} />
                <div>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '24px', fontWeight: '300', color: '#1e293b', lineHeight: '1.3', margin: '0 0 8px 0' }}>Asset Discovery<br/>& Valuation Report</p>
                  <div style={{ height: '1px', background: '#e2e8f0', margin: '16px 0' }}></div>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Prepared for Acme Corp</p>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: '4px 0 0 0' }}>March 2026 - Confidential</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon size={20} />
                  <p style={{ fontSize: '10px', color: '#94a3b8', margin: 0 }}>WhiteSpace Outcome Dynamics</p>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>8.5" x 11" - Pillar gradient top bar, icon watermark optional</p>
            </div>
            <ReviewBlock blockKey="applications:general" label="General Feedback" />
          </>
        )}

        {/* ==================== DOWNLOADS ==================== */}
        {activeTab === 'downloads' && (
          <>
            <h2 className="section-title">Assets & Downloads</h2>
            <p className="section-subtitle">
              Complete file library for brand assets, templates, and implementation resources.
            </p>

            {(() => {
              const downloadSvg = (svgContent, filename) => {
                const blob = new Blob([svgContent], { type: 'image/svg+xml' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              };

              const downloadText = (content, filename, type) => {
                const blob = new Blob([content], { type });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              };

              const iconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="2.5 0 253.78 231.71">
  <path fill="#475569" d="M220.27,231.1c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.05c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
  <path fill="#475569" d="M66.27,231.1c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21C0,10.5,8.75,1.75,19.25,1.75c3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
  <path fill="#fbbf24" d="M258.78,3.79c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
  <path fill="#00bfa5" d="M143.27.61c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V57.75C77,25.2,102.9,0,134.75,0c2.89,0,5.74.21,8.52.61Z"/>
</svg>`;

              const iconWhiteSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="2.5 0 253.78 231.71">
  <path fill="#ffffff" d="M220.27,231.1c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.05c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
  <path fill="#ffffff" d="M66.27,231.1c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21C0,10.5,8.75,1.75,19.25,1.75c3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
  <path fill="#fbbf24" d="M258.78,3.79c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
  <path fill="#00bfa5" d="M143.27.61c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V57.75C77,25.2,102.9,0,134.75,0c2.89,0,5.74.21,8.52.61Z"/>
</svg>`;

              const colorsCss = `:root {
  /* Primary Palette */
  --wc-slate: #475569;
  --wc-teal: #00bfa5;
  --wc-gold: #fbbf24;
  --wc-blue: #2563eb;

  /* Neutral Grays */
  --wc-gray-900: #1e293b;
  --wc-gray-700: #475569;
  --wc-gray-500: #64748b;
  --wc-gray-300: #cbd5e1;
  --wc-gray-200: #e2e8f0;
  --wc-gray-100: #f1f5f9;
  --wc-gray-50: #f8fafc;

  /* Semantic */
  --wc-bg-dark: #0f172a;
  --wc-bg-dark-end: #1a2744;
  --wc-text-primary: #1e293b;
  --wc-text-secondary: #475569;
  --wc-text-muted: #64748b;
  --wc-text-faint: #94a3b8;
  --wc-border: #e2e8f0;
  --wc-border-light: #f1f5f9;

  /* Typography */
  --wc-font-headline: 'Lora', Georgia, serif;
  --wc-font-body: 'DM Sans', Arial, sans-serif;

  /* Spacing */
  --wc-radius-sm: 8px;
  --wc-radius-md: 12px;
  --wc-radius-lg: 16px;
  --wc-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --wc-shadow-hover: 0 16px 32px rgba(0, 0, 0, 0.08);
}`;

              const files = [
                { name: 'Icon Mark (SVG)', desc: 'Full color bracket mark, vector', size: '1 KB', available: true, action: () => downloadSvg(iconSvg, 'whitespace-icon-mark.svg') },
                { name: 'Icon Mark - White (SVG)', desc: 'White brackets for dark backgrounds', size: '1 KB', available: true, action: () => downloadSvg(iconWhiteSvg, 'whitespace-icon-mark-white.svg') },
                { name: 'Combimark - Horizontal (SVG)', desc: 'Icon + wordmark lockup, 940px', size: '18 KB', available: true, action: () => {
                  const el = document.querySelector('[data-combimark-h]');
                  if (el) downloadSvg(el.outerHTML, 'whitespace-combimark-horizontal.svg');
                }},
                { name: 'Combimark - Vertical (SVG)', desc: 'Stacked icon + wordmark', size: '14 KB', available: true, action: () => {
                  const el = document.querySelector('[data-combimark-v]');
                  if (el) downloadSvg(el.outerHTML, 'whitespace-combimark-vertical.svg');
                }},
                { name: 'Color Swatches (CSS)', desc: 'CSS custom properties for web implementation', size: '1 KB', available: true, action: () => downloadText(colorsCss, 'whitespace-colors.css', 'text/css') },
                { name: 'Logo Mark (PNG)', desc: 'Raster with transparency, 2048px', size: '-', available: false },
                { name: 'Brand Guidelines (PDF)', desc: 'Complete printable standards document', size: '-', available: false },
                { name: 'Presentation Template', desc: 'PowerPoint/Google Slides master deck', size: '-', available: false },
              ];

              return (
                <>
                  {/* Hidden SVGs for download extraction */}
                  <svg data-combimark-h xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940.29 233.84" style={{ display: 'none' }}>
                    <rect fill="#f2f2f2" x="311.49" y="123.09" width="628.8" height="110.75"/>
                                        <g transform="translate(-2.5, 0)">
                      <path fill="#475569" d="M220.27,231.92c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.87c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
                      <path fill="#fbbf24" d="M258.78,4.61c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21.82c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
                    </g>
                    <g transform="translate(2.5, 0)">
                      <path fill="#475569" d="M66.27,231.92c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21.82C0,11.32,8.75,2.57,19.25,2.57c3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
                      <path fill="#00bfa5" d="M143.27,1.43c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V58.57C77,26.02,102.9.82,134.75.82c2.89,0,5.74.21,8.52.61Z"/>
                    </g>
                    <path fill="#475569" d="M325.17,25.86l-1.44-4.33c-1.78-5.55-2.85-9.14-3.22-10.77l-6.22.22v-4.88h26.97v3.66c-3.04.15-5.18.65-6.44,1.5-1.26.85-1.89,2.24-1.89,4.16,0,1.78.37,3.92,1.11,6.44,1.33,4.96,3.11,10.51,5.33,16.65.37,1.11.81,2.42,1.33,3.94.52,1.52,1.11,3.27,1.78,5.27.44,1.55,1,3.26,1.67,5.11.67,1.85,1.15,3.18,1.44,4,1.48,4,2.59,7.18,3.33,9.55h.22c1.48-5.03,3-9.92,4.55-14.65,2.66-8.58,5.59-17.65,8.77-27.19,3.33-9.99,5.33-16.21,5.99-18.65h3.55c.89,3.04,2.4,7.79,4.55,14.26,2.15,6.48,3.7,11.16,4.66,14.04,2.22,6.37,3.74,10.88,4.55,13.54.59,2,1.55,5,2.89,8.99,1.48,4.29,2.66,7.96,3.55,10.99h.33c1.78-5.77,3.29-10.54,4.55-14.32,3.77-10.73,6.84-19.98,9.21-27.75.81-2.74,1.55-5.03,2.22-6.88,1.41-3.77,2.55-6.47,3.44-8.1l-8.88.33v-4.88h22.53v3.66c-2.66.3-4.68.85-6.05,1.67-1.37.82-2.59,2.28-3.66,4.38-1.07,2.11-2.42,5.57-4.05,10.38l-5.66,16.87c-5.92,17.98-10.69,31.93-14.32,41.85h-3.33l-20.76-59.38-19.54,59.38h-3.22l-19.87-59.05Z"/>
                    <path fill="#475569" d="M430.73,80.48c2.14,0,3.7-.54,4.66-1.61.96-1.07,1.54-2.46,1.72-4.16.18-1.7.28-4.29.28-7.77V14.43c0-2.81.11-5.22.33-7.21l-7.88.44V3c4.44,0,7.6-.26,9.49-.78,1.89-.52,3.35-1.26,4.38-2.22h3.22v33.85c2.59-2.15,5.51-3.9,8.77-5.27,3.26-1.37,6.4-2.05,9.43-2.05,6.36,0,10.99,2,13.88,5.99,2.89,4,4.37,10.29,4.44,18.87l.11,20.65c0,3.33-.15,5.85-.44,7.55l6.99-.33v4.55h-22.64v-3.33c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.48-2.44,1.67-4.11.18-1.67.28-4.27.28-7.83v-15.54c0-6.36-1-11.12-3-14.26-2-3.14-5.14-4.72-9.44-4.72-2.74,0-5.46.65-8.16,1.94-2.7,1.3-4.87,2.94-6.49,4.94v32.75c0,2.89-.19,5.4-.56,7.55l6.99-.33v4.55h-22.64v-3.33Z"/>
                    <path fill="#475569" d="M498.88,80.48c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.48-2.44,1.67-4.11.18-1.67.28-4.27.28-7.83v-25.31c0-2.15.15-4.55.44-7.21l-7.88.44v-4.66c4.37,0,7.49-.26,9.38-.78,1.89-.52,3.35-1.26,4.38-2.22h3.22v44.84c0,3.33-.15,5.85-.44,7.55l6.99-.33v4.55h-22.64v-3.33ZM505.76,14.26c-1.18-1.29-1.78-2.83-1.78-4.61s.61-3.33,1.83-4.66c1.22-1.33,2.61-2,4.16-2,1.7,0,3.12.65,4.27,1.94,1.15,1.3,1.72,2.87,1.72,4.72s-.61,3.31-1.83,4.61c-1.22,1.3-2.65,1.94-4.27,1.94s-2.92-.65-4.11-1.94Z"/>
                    <path fill="#475569" d="M538.18,65.16l.22-32.19-8.55.11v-4.77c3.55-.07,6.57-1.68,9.05-4.83,2.48-3.14,4.31-6.72,5.49-10.71h3.77v15.54h18.65v4.33l-18.65.22c-.08,11.32-.13,19.17-.17,23.53-.04,4.37-.06,6.81-.06,7.33,0,5.25.63,9.16,1.89,11.71,1.26,2.55,3.44,3.83,6.55,3.83,1.92,0,3.83-.59,5.72-1.78,1.89-1.18,3.53-2.81,4.94-4.88l3,2.44c-2.89,4.29-5.74,7.12-8.55,8.49-2.81,1.37-5.55,2.05-8.21,2.05-10.14,0-15.17-6.81-15.1-20.42Z"/>
                    <path fill="#475569" d="M588.96,81.97c-4.11-2.4-7.35-5.84-9.71-10.32-2.37-4.48-3.55-9.64-3.55-15.48,0-5.18,1.18-10.05,3.55-14.6,2.37-4.55,5.68-8.2,9.93-10.93,4.25-2.74,9.08-4.11,14.49-4.11,4.22,0,8.03.93,11.43,2.77,3.4,1.85,6.1,4.61,8.1,8.27s3,8.16,3,13.49l-39.07.67c-.07,8.88,1.39,15.8,4.38,20.76,3,4.96,7.64,7.44,13.93,7.44,3.4,0,6.9-.89,10.49-2.66,3.59-1.78,6.34-3.96,8.27-6.55l2.66,2.22c-2.81,4.29-6.46,7.48-10.93,9.55-4.48,2.07-8.86,3.11-13.15,3.11-5.11,0-9.71-1.2-13.82-3.61ZM615.76,47.06c0-4.44-1-8.25-3-11.43-2-3.18-5-4.77-8.99-4.77-9.18,0-14.62,5.4-16.32,16.21h28.31Z"/>
                    <path fill="#475569" d="M652.78,84.14c-3.52-.96-6.6-2.37-9.27-4.22l.55,4.77h-5.77l-.67-23.64h4.33c.37,6.37,2.55,11.27,6.55,14.71,4,3.44,9.06,5.16,15.21,5.16,4.51,0,8.31-1.24,11.38-3.72,3.07-2.48,4.61-5.86,4.61-10.16,0-3.18-.87-5.9-2.61-8.16-1.74-2.26-3.88-4.14-6.44-5.66-2.55-1.52-6.01-3.27-10.38-5.27-4.96-2.37-8.9-4.44-11.82-6.22-2.92-1.78-5.42-4.12-7.49-7.05-2.07-2.92-3.11-6.53-3.11-10.82,0-2.96.68-5.92,2.05-8.88,1.37-2.96,3.74-5.48,7.1-7.55,3.37-2.07,7.83-3.11,13.38-3.11,3.33,0,6.68.43,10.04,1.28,3.37.85,6.46,2.31,9.27,4.38l-.44-4.77h5.66v24.42h-4c-.37-5.84-2.24-10.78-5.61-14.82-3.37-4.03-8.08-6.05-14.15-6.05-4.44,0-7.92,1.24-10.43,3.72-2.52,2.48-3.77,5.57-3.77,9.27,0,2.96.85,5.51,2.55,7.66,1.7,2.15,3.77,3.92,6.22,5.33,2.44,1.41,5.88,3.15,10.32,5.22,5.03,2.29,9.08,4.37,12.16,6.22,3.07,1.85,5.68,4.27,7.83,7.27,2.15,3,3.22,6.68,3.22,11.04s-1.02,7.81-3.05,10.99c-2.04,3.18-5.01,5.66-8.94,7.44-3.92,1.78-8.59,2.66-13.99,2.66-3.48,0-6.98-.48-10.49-1.44Z"/>
                    <path fill="#475569" d="M697.9,108.78c2.15,0,3.68-.54,4.61-1.61.92-1.07,1.46-2.41,1.61-4,.15-1.59.26-4.24.33-7.94l.22-53.61c0-3.11.15-5.51.44-7.21l-7.88.44v-4.66c4.37,0,7.36-.24,8.99-.72,1.63-.48,2.96-1.24,4-2.28h3.33c.29,3.63.44,5.62.44,5.99,2.22-2,4.88-3.61,7.99-4.83,3.11-1.22,6.18-1.83,9.21-1.83,4.37,0,8.4,1.13,12.1,3.39,3.7,2.26,6.68,5.48,8.94,9.66,2.26,4.18,3.39,9.01,3.39,14.49,0,6.14-1.3,11.6-3.89,16.37-2.59,4.77-6.05,8.49-10.38,11.16-4.33,2.66-9.01,4-14.04,4s-9.55-1.22-13.32-3.66v18.43c0,3.33-.15,5.84-.44,7.55l6.99-.33v4.55h-22.64v-3.33ZM736.14,77.92c2.55-2.15,4.53-5.14,5.94-8.99,1.4-3.85,2.11-8.21,2.11-13.1,0-6.66-1.43-12.3-4.27-16.93-2.85-4.62-7.09-6.94-12.71-6.94-2.44,0-4.81.59-7.1,1.78-2.29,1.18-4.29,2.66-5.99,4.44.07.52.11,2.77.11,6.77l-.11,31.86c3.77,2.89,8.1,4.33,12.99,4.33,3.48,0,6.49-1.07,9.05-3.22Z"/>
                    <path fill="#475569" d="M768.89,81.92c-2.85-2.44-4.27-5.62-4.27-9.55,0-4.29,1.72-7.92,5.16-10.88,3.44-2.96,7.77-5.16,12.99-6.6,5.22-1.44,10.45-2.13,15.71-2.05v-6.88c0-4.81-.7-8.56-2.11-11.27-1.41-2.7-4.4-4.05-8.99-4.05-2.29,0-4.48.48-6.55,1.44-2.07.96-3.59,2.41-4.55,4.33.96,1.04,1.44,2.44,1.44,4.22,0,1.11-.41,2.16-1.22,3.16-.82,1-2,1.5-3.55,1.5s-2.77-.5-3.66-1.5c-.89-1-1.33-2.31-1.33-3.94,0-2.44.94-4.68,2.83-6.72,1.89-2.03,4.51-3.64,7.88-4.83,3.37-1.18,7.12-1.78,11.27-1.78,6.22,0,10.8,1.65,13.76,4.94,2.96,3.29,4.4,8.49,4.33,15.6l-.11,24.98c0,2.37-.15,4.88-.44,7.55l7.88-.44v4.66h-15.87c-.22-1.11-.48-3.22-.78-6.33-5.4,5.4-11.21,8.1-17.43,8.1-5.4,0-9.53-1.22-12.38-3.66ZM791.47,77.64c2.29-1.07,4.62-2.72,6.99-4.94-.07-1.11-.11-3-.11-5.66l.11-10.43c-6.07.22-11.47,1.46-16.21,3.72-4.74,2.26-7.1,5.72-7.1,10.38,0,2.74.81,4.85,2.44,6.33,1.63,1.48,3.7,2.22,6.22,2.22,2.81,0,5.37-.54,7.66-1.61Z"/>
                    <path fill="#475569" d="M836.82,82.14c-4.18-2.29-7.49-5.59-9.93-9.88-2.44-4.29-3.66-9.36-3.66-15.21,0-5.18,1.24-10.12,3.72-14.82,2.48-4.7,5.92-8.49,10.32-11.38,4.4-2.89,9.38-4.33,14.93-4.33,4,0,7.55.63,10.66,1.89,3.11,1.26,5.53,2.92,7.27,5,1.74,2.07,2.61,4.33,2.61,6.77,0,1.7-.48,3.11-1.44,4.22-.96,1.11-2.29,1.66-4,1.66s-2.85-.54-3.66-1.61c-.82-1.07-1.22-2.2-1.22-3.39,0-1.85.55-3.33,1.67-4.44-.82-2.29-2.39-3.87-4.72-4.72-2.33-.85-4.64-1.28-6.94-1.28-3.4,0-6.46.93-9.16,2.77-2.7,1.85-4.83,4.55-6.38,8.1-1.55,3.55-2.33,7.81-2.33,12.77s.79,9.36,2.39,13.21c1.59,3.85,3.83,6.86,6.71,9.05,2.89,2.18,6.22,3.27,9.99,3.27,3.33,0,6.6-.91,9.82-2.72,3.22-1.81,5.75-4.09,7.6-6.83l2.89,2.22c-2.74,4.29-6.27,7.55-10.6,9.77-4.33,2.22-8.57,3.33-12.71,3.33-5.03,0-9.64-1.15-13.82-3.44Z"/>
                    <path fill="#475569" d="M895.65,81.97c-4.11-2.4-7.35-5.84-9.71-10.32-2.37-4.48-3.55-9.64-3.55-15.48,0-5.18,1.18-10.05,3.55-14.6,2.37-4.55,5.68-8.2,9.93-10.93,4.25-2.74,9.08-4.11,14.49-4.11,4.22,0,8.03.93,11.43,2.77,3.4,1.85,6.1,4.61,8.1,8.27s3,8.16,3,13.49l-39.07.67c-.07,8.88,1.39,15.8,4.38,20.76,3,4.96,7.64,7.44,13.93,7.44,3.4,0,6.9-.89,10.49-2.66,3.59-1.78,6.34-3.96,8.27-6.55l2.66,2.22c-2.81,4.29-6.46,7.48-10.93,9.55-4.48,2.07-8.86,3.11-13.15,3.11-5.11,0-9.71-1.2-13.82-3.61ZM922.46,47.06c0-4.44-1-8.25-3-11.43-2-3.18-5-4.77-8.99-4.77-9.18,0-14.62,5.4-16.32,16.21h28.31Z"/>
                    <g transform="translate(330, 155)" fill="#475569">
                  <path d="M18.75,43.78c-3.7,0-6.96-.9-9.76-2.7-2.81-1.8-5.01-4.32-6.6-7.54-1.6-3.23-2.39-6.98-2.39-11.26s.8-7.97,2.39-11.2c1.59-3.23,3.79-5.75,6.6-7.57,2.8-1.82,6.06-2.73,9.76-2.73s7.08.91,9.9,2.73c2.82,1.82,5.01,4.35,6.57,7.57,1.56,3.23,2.34,6.96,2.34,11.2s-.78,8.03-2.34,11.26c-1.56,3.23-3.75,5.74-6.57,7.54-2.82,1.8-6.12,2.7-9.9,2.7ZM18.81,38.49c2.64,0,4.95-.65,6.93-1.96,1.98-1.31,3.51-3.17,4.59-5.58,1.08-2.42,1.62-5.31,1.62-8.67s-.54-6.26-1.62-8.67c-1.08-2.42-2.61-4.27-4.59-5.55-1.98-1.29-4.29-1.93-6.93-1.93s-4.95.64-6.93,1.93c-1.98,1.29-3.52,3.14-4.62,5.55-1.1,2.42-1.65,5.31-1.65,8.67s.55,6.26,1.65,8.67c1.1,2.42,2.64,4.28,4.62,5.58,1.98,1.31,4.29,1.96,6.93,1.96Z"/>
                  <path d="M59.56,43.78c-2.16,0-4.04-.48-5.64-1.43-1.59-.95-2.82-2.38-3.69-4.28-.86-1.9-1.29-4.3-1.29-7.19V13.13h5.5v17.11c0,2.81.57,4.93,1.71,6.36,1.14,1.43,2.77,2.14,4.9,2.14,1.43,0,2.72-.38,3.88-1.13,1.16-.75,2.06-1.84,2.72-3.27.66-1.43.99-3.17.99-5.23v-15.98h5.5v29.94h-4.9l-.39-5.11c-.84,1.82-2.07,3.25-3.69,4.28-1.61,1.03-3.48,1.54-5.61,1.54Z"/>
                  <path d="M98.56,43.06c-1.72,0-3.23-.3-4.51-.89-1.28-.59-2.27-1.58-2.97-2.97-.7-1.39-1.04-3.27-1.04-5.64v-15.38h-4.79v-5.05h4.79l.66-7.48h4.84v7.48h7.86v5.05h-7.86v15.44c0,1.7.33,2.86.99,3.48.66.61,1.8.92,3.41.92h3.19v5.05h-4.56Z"/>
                  <path d="M126.99,43.78c-2.68,0-5.06-.66-7.15-1.99-2.09-1.33-3.73-3.16-4.92-5.49-1.19-2.34-1.79-5.05-1.79-8.14s.6-5.87,1.79-8.23c1.19-2.36,2.83-4.2,4.92-5.52,2.09-1.33,4.47-1.99,7.15-1.99,3.37,0,6.2.95,8.47,2.85,2.27,1.9,3.72,4.48,4.35,7.72h-5.72c-.37-1.74-1.2-3.09-2.5-4.04-1.3-.95-2.85-1.43-4.65-1.43-1.47,0-2.82.41-4.07,1.22-1.25.81-2.25,2-3,3.56-.75,1.56-1.13,3.5-1.13,5.79,0,1.7.22,3.22.66,4.54.44,1.33,1.04,2.45,1.79,3.36.75.91,1.62,1.59,2.61,2.05.99.46,2.03.68,3.13.68,1.21,0,2.3-.21,3.27-.62.97-.42,1.8-1.04,2.48-1.87.68-.83,1.15-1.82,1.4-2.97h5.72c-.62,3.17-2.07,5.71-4.35,7.63-2.27,1.92-5.1,2.88-8.47,2.88Z"/>
                  <path d="M164.39,43.78c-2.6,0-4.94-.65-7.01-1.96-2.07-1.31-3.7-3.14-4.9-5.49-1.19-2.36-1.79-5.08-1.79-8.17s.6-5.93,1.81-8.29c1.21-2.36,2.86-4.19,4.95-5.49,2.09-1.31,4.44-1.96,7.04-1.96s4.99.65,7.04,1.96c2.05,1.31,3.68,3.13,4.87,5.46,1.19,2.34,1.79,5.09,1.79,8.26s-.6,5.92-1.79,8.26c-1.19,2.34-2.83,4.16-4.92,5.46-2.09,1.31-4.46,1.96-7.09,1.96ZM164.39,38.67c1.5,0,2.87-.4,4.1-1.19,1.23-.79,2.22-1.97,2.97-3.53.75-1.56,1.13-3.51,1.13-5.85s-.37-4.29-1.1-5.85c-.73-1.56-1.71-2.74-2.94-3.53-1.23-.79-2.58-1.19-4.04-1.19s-2.82.4-4.07,1.19c-1.25.79-2.25,1.97-3,3.53-.75,1.56-1.13,3.52-1.13,5.85s.38,4.29,1.13,5.85c.75,1.56,1.74,2.74,2.97,3.53,1.23.79,2.56,1.19,3.99,1.19Z"/>
                  <path d="M190.19,43.06V13.13h4.95l.39,4.22c.88-1.54,2.05-2.75,3.52-3.62,1.47-.87,3.12-1.31,4.95-1.31,1.39,0,2.66.21,3.79.62,1.14.42,2.15,1.04,3.03,1.87.88.83,1.59,1.86,2.14,3.09.99-1.74,2.32-3.11,3.99-4.1,1.67-.99,3.44-1.48,5.31-1.48,2.24,0,4.16.49,5.77,1.46,1.61.97,2.84,2.42,3.69,4.34.84,1.92,1.26,4.31,1.26,7.16v17.7h-5.44v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.36,0-2.57.38-3.63,1.13-1.06.75-1.9,1.84-2.5,3.27-.6,1.43-.91,3.17-.91,5.23v15.92h-5.5v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.28,0-2.46.38-3.52,1.13-1.06.75-1.91,1.84-2.53,3.27-.62,1.43-.93,3.17-.93,5.23v15.92h-5.5Z"/>
                  <path d="M258.11,43.78c-2.64,0-4.99-.65-7.04-1.96-2.05-1.31-3.66-3.13-4.81-5.46-1.16-2.34-1.73-5.05-1.73-8.14s.58-5.93,1.73-8.29c1.15-2.36,2.76-4.2,4.81-5.52,2.05-1.33,4.44-1.99,7.15-1.99s5.04.65,6.98,1.96c1.94,1.31,3.45,3.04,4.51,5.2,1.06,2.16,1.6,4.54,1.6,7.16,0,.4,0,.82-.03,1.28-.02.46-.05.96-.08,1.52h-22.66v-4.22h17.27c-.11-2.49-.88-4.44-2.31-5.85-1.43-1.41-3.21-2.11-5.33-2.11-1.5,0-2.88.37-4.12,1.1-1.25.73-2.25,1.8-3,3.21-.75,1.41-1.13,3.18-1.13,5.32v1.66c0,2.22.38,4.09,1.13,5.61.75,1.52,1.75,2.67,3,3.45,1.25.77,2.6,1.16,4.07,1.16,1.76,0,3.21-.42,4.35-1.25,1.14-.83,1.98-1.96,2.53-3.39h5.5c-.48,1.82-1.28,3.46-2.42,4.9-1.14,1.45-2.54,2.58-4.21,3.42-1.67.83-3.58,1.25-5.75,1.25Z"/>
                  <path d="M302.77,43.06V1.48h11.82c4.47,0,8.18.85,11.11,2.55,2.93,1.7,5.11,4.11,6.52,7.22,1.41,3.11,2.12,6.8,2.12,11.08s-.71,7.96-2.12,11.05c-1.41,3.09-3.57,5.48-6.49,7.16-2.92,1.68-6.63,2.52-11.14,2.52h-11.82ZM308.27,38.08h6.1c3.56,0,6.38-.63,8.47-1.9,2.09-1.27,3.58-3.08,4.48-5.44.9-2.36,1.35-5.16,1.35-8.4s-.45-6.12-1.35-8.49-2.39-4.2-4.48-5.46c-2.09-1.27-4.91-1.9-8.47-1.9h-6.1v31.6Z"/>
                  <path d="M349.36,56.13l6.76-16.39h-1.59l-10.95-26.61h5.94l8.69,21.74,8.74-21.74h5.78l-17.6,43.01h-5.77Z"/>
                  <path d="M383.07,43.06V13.13h4.95l.33,5.11c.88-1.78,2.13-3.2,3.74-4.25,1.61-1.05,3.47-1.57,5.56-1.57,2.2,0,4.09.48,5.67,1.43,1.58.95,2.81,2.39,3.69,4.31.88,1.92,1.32,4.33,1.32,7.22v17.7h-5.5v-17.11c0-2.77-.57-4.87-1.71-6.3-1.14-1.43-2.79-2.14-4.95-2.14-1.43,0-2.71.37-3.85,1.1-1.14.73-2.04,1.81-2.72,3.24-.68,1.43-1.02,3.17-1.02,5.23v15.98h-5.5Z"/>
                  <path d="M430.04,43.78c-2.27,0-4.16-.42-5.67-1.25-1.5-.83-2.62-1.95-3.35-3.36-.73-1.41-1.1-2.92-1.1-4.54,0-1.98.48-3.67,1.43-5.08.95-1.4,2.31-2.48,4.07-3.24,1.76-.75,3.87-1.13,6.32-1.13h7.21c0-1.74-.24-3.19-.71-4.34-.48-1.15-1.18-2.01-2.12-2.58-.94-.57-2.12-.86-3.55-.86-1.65,0-3.06.43-4.23,1.28-1.17.85-1.91,2.11-2.2,3.77h-5.5c.22-2.1.89-3.89,2.01-5.38,1.12-1.49,2.56-2.63,4.32-3.45,1.76-.81,3.63-1.22,5.61-1.22,2.6,0,4.79.5,6.54,1.48,1.76.99,3.09,2.39,3.99,4.19.9,1.8,1.35,3.95,1.35,6.44v18.53h-4.79l-.44-5.05c-.4.79-.88,1.54-1.43,2.26-.55.71-1.2,1.33-1.95,1.84-.75.52-1.61.92-2.58,1.22-.97.3-2.04.45-3.22.45ZM431.09,38.97c1.17,0,2.24-.26,3.19-.77.95-.51,1.77-1.22,2.45-2.11.68-.89,1.19-1.9,1.54-3.03.35-1.13.54-2.29.58-3.48v-.18h-6.54c-1.58,0-2.85.21-3.82.62-.97.42-1.68.98-2.12,1.69-.44.71-.66,1.54-.66,2.49s.21,1.83.63,2.52c.42.69,1.04,1.24,1.84,1.63.81.4,1.78.59,2.92.59Z"/>
                  <path d="M456.99,43.06V13.13h4.95l.39,4.22c.88-1.54,2.05-2.75,3.52-3.62,1.47-.87,3.12-1.31,4.95-1.31,1.39,0,2.66.21,3.79.62,1.14.42,2.15,1.04,3.03,1.87.88.83,1.59,1.86,2.14,3.09.99-1.74,2.32-3.11,3.99-4.1,1.67-.99,3.44-1.48,5.31-1.48,2.24,0,4.16.49,5.77,1.46,1.61.97,2.84,2.42,3.69,4.34.84,1.92,1.26,4.31,1.26,7.16v17.7h-5.44v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.36,0-2.57.38-3.63,1.13-1.06.75-1.9,1.84-2.5,3.27-.6,1.43-.91,3.17-.91,5.23v15.92h-5.5v-17.11c0-2.77-.52-4.87-1.57-6.3-1.04-1.43-2.58-2.14-4.59-2.14-1.28,0-2.46.38-3.52,1.13-1.06.75-1.91,1.84-2.53,3.27-.62,1.43-.93,3.17-.93,5.23v15.92h-5.5Z"/>
                  <path d="M515.57,7.48c-1.06,0-1.93-.36-2.61-1.07-.68-.71-1.02-1.62-1.02-2.73s.34-1.95,1.02-2.64c.68-.69,1.55-1.04,2.61-1.04s1.89.35,2.58,1.04c.7.69,1.04,1.57,1.04,2.64s-.35,2.02-1.04,2.73c-.7.71-1.56,1.07-2.58,1.07ZM512.76,43.06V13.13h5.5v29.94h-5.5Z"/>
                  <path d="M544.44,43.78c-2.68,0-5.06-.66-7.15-1.99-2.09-1.33-3.73-3.16-4.92-5.49-1.19-2.34-1.79-5.05-1.79-8.14s.6-5.87,1.79-8.23c1.19-2.36,2.83-4.2,4.92-5.52,2.09-1.33,4.47-1.99,7.15-1.99,3.37,0,6.2.95,8.47,2.85,2.27,1.9,3.72,4.48,4.35,7.72h-5.72c-.37-1.74-1.2-3.09-2.5-4.04-1.3-.95-2.85-1.43-4.65-1.43-1.47,0-2.82.41-4.07,1.22-1.25.81-2.25,2-3,3.56-.75,1.56-1.13,3.5-1.13,5.79,0,1.7.22,3.22.66,4.54.44,1.33,1.04,2.45,1.79,3.36.75.91,1.62,1.59,2.61,2.05.99.46,2.03.68,3.13.68,1.21,0,2.3-.21,3.27-.62.97-.42,1.8-1.04,2.48-1.87.68-.83,1.15-1.82,1.4-2.97h5.72c-.62,3.17-2.07,5.71-4.35,7.63-2.27,1.92-5.1,2.88-8.47,2.88Z"/>
                  <path d="M579.92,43.78c-2.35,0-4.4-.42-6.16-1.25-1.76-.83-3.15-2-4.18-3.5-1.03-1.5-1.65-3.27-1.87-5.29h5.61c.18.95.54,1.82,1.07,2.61.53.79,1.27,1.43,2.2,1.9.93.48,2.04.71,3.33.71,1.21,0,2.21-.19,3-.56.79-.38,1.37-.89,1.73-1.54.37-.65.55-1.36.55-2.11,0-1.11-.25-1.95-.74-2.52-.5-.57-1.23-1.03-2.2-1.37-.97-.34-2.14-.64-3.49-.92-1.28-.24-2.52-.56-3.71-.98-1.19-.42-2.26-.94-3.19-1.57-.94-.63-1.68-1.44-2.23-2.41-.55-.97-.83-2.17-.83-3.59,0-1.7.42-3.24,1.27-4.6.84-1.37,2.04-2.44,3.6-3.21,1.56-.77,3.4-1.16,5.53-1.16,3.08,0,5.56.79,7.42,2.38,1.87,1.58,2.97,3.82,3.3,6.71h-5.33c-.15-1.35-.7-2.39-1.65-3.12-.95-.73-2.22-1.1-3.8-1.1s-2.79.34-3.63,1.01c-.84.67-1.27,1.56-1.27,2.67,0,.71.24,1.35.72,1.9.48.55,1.18,1.02,2.12,1.4.94.38,2.08.72,3.44,1.04,1.94.4,3.69.89,5.23,1.49,1.54.59,2.77,1.47,3.69,2.61.92,1.15,1.38,2.79,1.38,4.93.04,1.86-.39,3.5-1.29,4.93-.9,1.43-2.16,2.53-3.79,3.33-1.63.79-3.57,1.19-5.8,1.19Z"/>
                </g>
                  </svg>
                  <svg data-combimark-v xmlns="http://www.w3.org/2000/svg" viewBox="0 0 628.8 521.48" style={{ display: 'none' }}>
                    <rect fill="#f2f2f2" x="0" y="410.72" width="628.8" height="110.75"/>
                    <path fill="#475569" d="M405.28,231.1c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.05c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
                    <path fill="#475569" d="M251.28,231.1c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21c0-10.5,8.75-19.25,19.25-19.25,3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
                    <path fill="#fbbf24" d="M443.79,3.79c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
                    <path fill="#00bfa5" d="M328.28.61c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V57.75c0-32.55,25.9-57.75,57.75-57.75,2.89,0,5.74.21,8.52.61Z"/>
                  </svg>

                  {files.map((file, i) => (
                    <div key={i} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 24px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>{file.name}</h4>
                        <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>{file.desc}{file.available ? ` - ${file.size}` : ''}</p>
                      </div>
                      {file.available ? (
                        <button onClick={file.action} style={{ background: '#2563eb', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}>Download</button>
                      ) : (
                        <span style={{ fontSize: '12px', fontWeight: '500', color: '#94a3b8', padding: '8px 20px', background: '#f8fafc', borderRadius: '6px', whiteSpace: 'nowrap' }}>Coming Soon</span>
                      )}
                    </div>
                  ))}
                </>
              );
            })()}

            <div className="card-white" style={{ marginTop: '32px', textAlign: 'center' }}>
              <p style={{ fontSize: '14px', color: '#64748b' }}>Questions about assets or need custom formats?</p>
              <p style={{ fontSize: '14px', color: '#1e293b', fontWeight: '600', marginTop: '8px' }}>Contact Steve Smith</p>
            </div>
            <ReviewBlock blockKey="downloads:general" label="General Feedback" />
          </>
        )}

        {/* ==================== IMPLEMENTATION ==================== */}
        {activeTab === 'implementation' && (
          <>
            <h2 className="section-title">Implementation</h2>
            <p className="section-subtitle">
              Step-by-step rollout roadmap, asset generation workflow, and template replication guide.
            </p>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>8-Week Rollout Roadmap</h3>
              {[
                { week: 'Weeks 1-2', title: 'Internal Training', desc: 'Steve, Bill, and team onboard to brand system', color: '#475569' },
                { week: 'Weeks 3-4', title: 'Asset Generation', desc: 'Business cards, templates, signage, collateral produced', color: '#475569' },
                { week: 'Weeks 5-6', title: 'Website & LinkedIn Launch', desc: 'Site goes live, LinkedIn video series begins', color: '#00bfa5' },
                { week: 'Weeks 7-8', title: 'Program Go-Live', desc: 'Certification program opens, consultation bookings active', color: '#fbbf24' },
              ].map((phase, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px', background: '#f8fafc', borderRadius: '8px', borderLeft: `3px solid ${phase.color}`, marginBottom: '12px' }}>
                  <div style={{ minWidth: '80px' }}>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: phase.color }}>{phase.week}</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>{phase.title}</h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Asset Generation Workflow</h3>
              <div className="flow-diagram">
                <div className="flow-box">Design</div>
                <div className="flow-arrow">{'\u2192'}</div>
                <div className="flow-box">Develop</div>
                <div className="flow-arrow">{'\u2192'}</div>
                <div className="flow-box">Test</div>
                <div className="flow-arrow">{'\u2192'}</div>
                <div className="flow-box">Deploy</div>
              </div>
            </div>

            <div className="card-white">
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>For New Projects (TARGA Replication)</h3>
              {[
                'Download brand guidelines and review all sections',
                'Create project files using brand templates',
                'Apply colors, typography, and spacing from system',
                'Replace logo assets with project-specific marks',
                'Test for accessibility (WCAG AA compliance)',
                'Archive final assets with version number',
              ].map((item, i) => (
                <div key={i} className="checklist-item">
                  <div className="checklist-icon">{'\u2713'}</div>
                  <div className="checklist-text">{item}</div>
                </div>
              ))}
            </div>
            <ReviewBlock blockKey="implementation:general" label="General Feedback" />
          </>
        )}

      </div>

      {/* Review Mode Bottom Bar */}
      {reviewMode && (
        <div className="review-bar">
          <div className="review-bar-left">
            <div className="review-bar-dot"></div>
            <span>Review Mode - {totalComments} total note{totalComments !== 1 ? 's' : ''} across all sections</span>
          </div>
          <div className="review-bar-actions">
            <button className="review-bar-btn" onClick={clearAllComments}>Clear All</button>
            <button className="review-bar-btn export" onClick={exportComments}>Export Notes</button>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {toast && <div className="review-toast">{toast}</div>}
    </>
  );
}

function Placeholder({ icon, title, description }) {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{description}</p>
      <div className="placeholder-section">
        <div className="placeholder-icon" dangerouslySetInnerHTML={{ __html: icon }}></div>
        <h3>Content In Development</h3>
        <p>This section is being built. Full content and specifications coming soon.</p>
      </div>
    </>
  );
}
