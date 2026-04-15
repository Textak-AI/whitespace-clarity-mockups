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
.pillar-card.blue::before { background: #2563eb; }

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
.accent-blue { border-left: 3px solid #2563eb; }

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
    // Load comments from server
    fetch('/api/review').then(r => r.json()).then(data => {
      if (data && typeof data === 'object') setComments(data);
    }).catch(() => {});
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const apiPost = async (body) => {
    try {
      const res = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.comments) setComments(data.comments);
      return data;
    } catch (e) {
      showToast('Failed to save - check connection');
      return null;
    }
  };

  const addComment = (blockKey, text) => {
    if (!text.trim()) return;
    // Optimistic update
    const newComment = {
      id: Date.now(),
      text: text.trim(),
      author: 'Steve',
      time: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }),
    };
    setComments(prev => ({
      ...prev,
      [blockKey]: [...(prev[blockKey] || []), newComment],
    }));
    apiPost({ action: 'add', blockKey, comment: text.trim() });
  };

  const editComment = (blockKey, commentId, newText) => {
    setComments(prev => ({
      ...prev,
      [blockKey]: (prev[blockKey] || []).map(c =>
        c.id === commentId ? { ...c, text: newText, edited: true } : c
      ),
    }));
    apiPost({ action: 'edit', blockKey, commentId, newText });
  };

  const deleteComment = (blockKey, commentId) => {
    setComments(prev => ({
      ...prev,
      [blockKey]: (prev[blockKey] || []).filter(c => c.id !== commentId),
    }));
    apiPost({ action: 'delete', blockKey, commentId });
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
      apiPost({ action: 'clear' });
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
              <svg height="60" viewBox="0 0 1413.1225 380.0855" xmlns="http://www.w3.org/2000/svg">
              <rect x="475.9759" y="205.0902" width="916.6589" height="152.3079" fill="#f2f2f2"/>
  <path d="M507.696,70.7172l-2.0522-6.1385c-2.5287-7.8792-4.0497-12.9734-4.5627-15.2821l-8.8137.3115v-6.9265h38.2603v5.2039c-4.3062.2199-7.348.9161-9.1437,2.1256-1.7775,1.2095-2.6752,3.1701-2.6752,5.9004,0,2.5103.5315,5.5704,1.5757,9.1252,1.8873,7.0365,4.4162,14.9156,7.5677,23.6196.5315,1.5757,1.1545,3.4448,1.8873,5.5889.733,2.1622,1.5757,4.6543,2.5103,7.4761.623,2.1988,1.411,4.6177,2.3637,7.238.9527,2.6203,1.631,4.5077,2.0522,5.662,2.1072,5.662,3.6648,10.1882,4.7275,13.5414h.3115c2.1072-7.1464,4.2512-14.0727,6.45-20.7794,3.7748-12.1854,7.9342-25.0304,12.4419-38.5903,4.7275-14.1826,7.5677-22.9966,8.5023-26.4598h5.039c1.2644,4.3062,3.4083,11.0493,6.45,20.2296,3.0418,9.1802,5.2405,15.8318,6.6149,19.918,3.1517,9.0337,5.2957,15.4287,6.45,19.2219.843,2.8402,2.199,7.0914,4.1044,12.7534,2.089,6.0835,3.7747,11.2874,5.039,15.5937h.4764c2.5103-8.1907,4.6725-14.9522,6.45-20.3211,5.3505-15.2272,9.7117-28.3471,13.065-39.378,1.1545-3.8847,2.199-7.1464,3.1517-9.7667,1.9972-5.3505,3.6282-9.1802,4.8743-11.4892l-12.6069.4765v-6.9265h31.9753v5.2039c-3.7747.4215-6.6334,1.2095-8.5756,2.3637s-3.6832,3.2251-5.204,6.2119-3.4449,7.8976-5.7538,14.7325l-8.0259,23.9311c-8.3923,25.5069-15.1722,45.2968-20.3212,59.3694h-4.7275l-29.4466-84.2533-27.7241,84.2533h-4.5627l-28.1821-83.7771.0366.0366.0008.0002Z" fill="#475569"/>
  <path d="M657.4574,148.1908c3.0418,0,5.2405-.7512,6.6149-2.2906,1.356-1.521,2.1806-3.4816,2.4371-5.9004s.3847-6.0835.3847-11.0309V54.4821c0-3.9947.165-7.4029.4764-10.2432l-11.1777.623v-6.615c6.3034,0,10.7928-.3665,13.468-1.0995s4.7459-1.7775,6.2118-3.1517h4.5627v48.027c3.6648-3.0417,7.8242-5.5339,12.4419-7.4761,4.6175-1.9423,9.0703-2.9136,13.3764-2.9136,9.0337,0,15.5937,2.8402,19.6799,8.5022,4.1044,5.662,6.1935,14.5859,6.3034,26.7713l.165,29.3c0,4.7275-.2199,8.3007-.623,10.7012l9.9133-.4765v6.45h-32.1218v-4.7275c3.0418,0,5.2224-.7512,6.5416-2.2906,1.3192-1.521,2.1072-3.4632,2.3638-5.827s.4031-6.0653.4031-11.1043v-22.0437c0-9.0337-1.411-15.7768-4.2512-20.2296-2.8402-4.4528-7.2929-6.6881-13.3949-6.6881-3.8847,0-7.751.9161-11.5808,2.7486s-6.9081,4.1778-9.217,6.9996v46.4513c0,4.0863-.2566,7.6595-.788,10.7012l9.9132-.4765v6.45h-32.1218v-4.7275l.0184.0734.0006-.0002Z" fill="#475569"/>
  <path d="M754.1527,148.1908c3.0418,0,5.2224-.7512,6.5416-2.2906,1.3192-1.521,2.1072-3.4632,2.3638-5.827s.3847-6.0653.3847-11.1043v-35.915c0-3.0417.2016-6.45.623-10.2432l-11.1777.623v-6.615c6.1935,0,10.6278-.3665,13.3031-1.0995,2.6752-.733,4.7459-1.7775,6.2118-3.1517h4.5627v63.6207c0,4.7275-.2016,8.3007-.623,10.7012l9.9133-.4765v6.45h-32.1218v-4.7275l.0182.055.0004.0002ZM763.9193,54.244c-1.6857-1.8325-2.5103-4.0129-2.5103-6.5416s.8611-4.7275,2.6021-6.615,3.7014-2.8402,5.9004-2.8402c2.4188,0,4.4344.9161,6.0653,2.7486s2.4371,4.0679,2.4371,6.6881-.8611,4.6909-2.6021,6.5416c-1.7407,1.8325-3.7563,2.7486-6.0653,2.7486s-4.1413-.9161-5.827-2.7486v.0184h-.0002Z" fill="#475569"/>
  <path d="M809.8942,126.4586l.3115-45.6633-12.1305.165v-6.7799c5.039-.11,9.3086-2.3821,12.8268-6.8531,3.5182-4.4528,6.1201-9.5283,7.7876-15.1906h5.3505v22.0437h26.4598v6.1385l-26.4598.3115c-.11,16.0701-.1833,27.1926-.2381,33.3861-.055,6.1935-.0734,9.6567-.0734,10.3897,0,7.4579.898,12.9916,2.6752,16.6198s4.8743,5.4423,9.2902,5.4423c2.7302,0,5.4239-.843,8.1175-2.5287,2.6752-1.6857,5.0208-3.9947,6.9998-6.9265l4.2512,3.4632c-4.0863,6.0835-8.1357,10.1148-12.1305,12.0389-3.9947,1.9422-7.8792,2.9136-11.6539,2.9136-14.3844,0-21.5306-9.6567-21.4206-28.9701h.0366-.0002Z" fill="#475569"/>
  <path d="M881.9439,150.3164c-5.827-3.4083-10.4263-8.3007-13.7796-14.6407-3.3533-6.3584-5.039-13.6696-5.039-21.9705,0-7.348,1.6857-14.256,5.039-20.706,3.3533-6.45,8.0626-11.6358,14.0911-15.5203,6.0285-3.8847,12.8818-5.827,20.5595-5.827,5.9919,0,11.3974,1.3192,16.2167,3.9397s8.6672,6.5416,11.489,11.7273c2.8218,5.1858,4.2512,11.5808,4.2512,19.1303l-55.43.9529c-.11,12.6069,1.9607,22.4102,6.2118,29.4466,4.2512,7.0365,10.8478,10.5547,19.7715,10.5547,4.8193,0,9.7849-1.2645,14.8791-3.7748,5.094-2.5287,8.9971-5.607,11.7273-9.2902l3.7747,3.1517c-3.9947,6.0835-9.162,10.6097-15.5203,13.5414-6.3584,2.9318-12.5701,4.4159-18.6538,4.4159-7.238,0-13.7796-1.7041-19.6065-5.1124l.0182-.0184v-.0005ZM919.9661,100.7868c0-6.3034-1.411-11.7089-4.2512-16.2167s-7.0914-6.7799-12.7534-6.7799c-13.0283,0-20.7426,7.6595-23.1431,22.9966h40.166-.0184.0001Z" fill="#475569"/>
  <path d="M972.5006,153.3947c-4.984-1.356-9.3636-3.3533-13.1566-5.9919l.788,6.7799h-8.1907l-.9345-33.551h6.1385c.5314,9.0337,3.6282,15.9786,9.2902,20.871,5.662,4.8743,12.8634,7.3296,21.5674,7.3296,6.395,0,11.7823-1.7591,16.1433-5.2773,4.3612-3.5182,6.5416-8.3191,6.5416-14.4026,0-4.5077-1.2277-8.3741-3.7014-11.5808-2.4737-3.2067-5.5155-5.882-9.1253-8.026-3.6282-2.1438-8.5388-4.6543-14.7325-7.4761-7.0365-3.3533-12.6253-6.3034-16.7663-8.8137-4.1413-2.5287-7.696-5.8454-10.6278-10.0048-2.9318-4.1413-4.4162-9.2718-4.4162-15.3555,0-4.1962.9711-8.3922,2.9136-12.6069,1.9422-4.1962,5.2957-7.7694,10.0782-10.7012s11.1043-4.416,18.9835-4.416c4.7277,0,9.4734.6046,14.256,1.8141,4.7825,1.2095,9.162,3.2799,13.1566,6.2119l-.623-6.7799h8.0259v34.6505h-5.6622c-.5314-8.3007-3.1699-15.3005-7.9526-21.0175-4.7825-5.717-11.4708-8.5756-20.083-8.5756-6.3034,0-11.2327,1.7591-14.8057,5.2773-3.5732,3.5182-5.3505,7.8976-5.3505,13.1565,0,4.1962,1.2094,7.8242,3.6282,10.8662s5.3505,5.5704,8.8137,7.5677,8.3373,4.4709,14.6407,7.4029c7.1464,3.2617,12.8818,6.1935,17.2428,8.8137,4.3612,2.6203,8.0626,6.0653,11.1043,10.3163s4.5627,9.4736,4.5627,15.667-1.4476,11.0859-4.3244,15.5937c-2.8952,4.5078-7.1096,8.026-12.68,10.5547s-12.1854,3.7748-19.8448,3.7748c-4.9292,0-9.8948-.678-14.8791-2.0522l-.0182-.0184-.0005-.0002Z" fill="#475569"/>
  <path d="M1036.5062,188.3384c3.0418,0,5.2224-.7696,6.5416-2.2906s2.0706-3.4083,2.2905-5.662c.2016-2.2538.3665-6.0103.4764-11.2509l.3115-76.0626c0-4.416.2016-7.8242.623-10.2432l-11.1775.623v-6.615c6.1935,0,10.4447-.3481,12.7535-1.0261s4.1962-1.7591,5.6622-3.2251h4.7277c.4215,5.149.623,7.971.623,8.5022,3.1517-2.8402,6.9265-5.1124,11.3425-6.8531s8.759-2.6021,13.065-2.6021c6.1935,0,11.9105,1.5942,17.1694,4.8009,5.2405,3.2067,9.4734,7.7694,12.68,13.7064,3.2067,5.9369,4.8009,12.79,4.8009,20.5595,0,8.7222-1.8325,16.4548-5.5155,23.2347-3.683,6.7799-8.5756,12.0389-14.7325,15.8318-6.1385,3.7748-12.79,5.662-19.9181,5.662s-13.5414-1.7407-18.892-5.2039v26.1483c0,4.7275-.2199,8.3007-.623,10.7012l9.9132-.4765v6.45h-32.1218v-4.7275.0184h-.0001ZM1090.7633,144.5626c3.6282-3.0417,6.4318-7.293,8.429-12.7534,1.9974-5.4605,2.9868-11.6539,2.9868-18.5804,0-9.4552-2.0156-17.4443-6.0653-24.0227-4.0497-6.56-10.0598-9.8398-18.0307-9.8398-3.4632,0-6.8347.843-10.0782,2.5103-3.2617,1.6857-6.0835,3.7748-8.5023,6.3034.11.733.165,3.9397.165,9.6017l-.165,45.2052c5.3505,4.0863,11.4892,6.1385,18.4339,6.1385,4.9292,0,9.217-1.521,12.8268-4.5627h0Z" fill="#475569"/>
  <path d="M1137.2145,150.243c-4.0497-3.4632-6.0653-7.971-6.0653-13.5414,0-6.0835,2.4371-11.2325,7.3296-15.4287,4.8741-4.1962,11.0311-7.3296,18.4338-9.3636,7.4027-2.0522,14.824-3.0233,22.2818-2.9136v-9.7667c0-6.8165-1.0077-12.1488-2.9868-15.9786-1.9974-3.8297-6.2485-5.7538-12.7535-5.7538-3.2617,0-6.3584.678-9.2902,2.0522-2.9502,1.3742-5.0942,3.4083-6.45,6.1385,1.356,1.466,2.0522,3.4632,2.0522,5.9919,0,1.5757-.5865,3.0783-1.7407,4.4893s-2.8402,2.1256-5.039,2.1256-3.9397-.7146-5.204-2.1256-1.8875-3.2799-1.8875-5.5889c0-3.4632,1.3377-6.6334,4.0129-9.5283,2.6752-2.8952,6.395-5.1674,11.1774-6.8531s10.0966-2.5103,15.9784-2.5103c8.8138,0,15.3187,2.3456,19.5334,6.9996,4.1962,4.6727,6.2485,12.0389,6.1385,22.117l-.1649,35.4385c0,3.3533-.2199,6.9265-.623,10.7012l11.1775-.623v6.615h-22.5202c-.3115-1.5757-.678-4.5627-1.0995-8.9787-7.6594,7.6595-15.9052,11.489-24.719,11.489-7.6594,0-13.523-1.7407-17.5543-5.2039h-.0178v.0002ZM1169.2631,144.1777c3.2617-1.521,6.5599-3.8663,9.9133-6.9996-.11-1.5757-.1649-4.2512-.1649-8.026l.1649-14.8057c-8.6122.3115-16.2717,2.0706-22.9965,5.2773-6.725,3.2067-10.0782,8.1175-10.0782,14.7325,0,3.8847,1.1545,6.8715,3.4632,8.9787s5.2405,3.1517,8.8138,3.1517c3.9947,0,7.6045-.7696,10.8662-2.2906l.0184-.0184h-.0001Z" fill="#475569"/>
  <path d="M1233.5982,150.5545c-5.937-3.2617-10.6279-7.9342-14.0911-14.0179s-5.2039-13.2849-5.2039-21.5672c0-7.348,1.759-14.3476,5.2773-21.0175,3.5182-6.6699,8.3925-12.0389,14.6407-16.1433,6.2485-4.0863,13.3031-6.1385,21.1824-6.1385,5.6622,0,10.7013.898,15.1172,2.6752,4.4159,1.7957,7.8426,4.1413,10.3163,7.0914,2.4737,2.9318,3.7014,6.1385,3.7014,9.6017,0,2.4187-.678,4.416-2.0522,5.9919-1.3742,1.5757-3.2617,2.3637-5.6622,2.3637s-4.0497-.7512-5.2039-2.2906c-1.1545-1.521-1.7407-3.1151-1.7407-4.8009,0-2.6203.788-4.7275,2.3637-6.3034-1.1545-3.2617-3.3898-5.4789-6.6884-6.6881-3.2983-1.2095-6.5966-1.8141-9.8399-1.8141-4.8375,0-9.162,1.3192-12.9917,3.9397s-6.8531,6.45-9.0521,11.4892c-2.1989,5.039-3.2983,11.0859-3.2983,18.1039s1.1176,13.2849,3.3898,18.7454c2.2537,5.4605,5.4239,9.7483,9.5286,12.8268,4.1044,3.0967,8.8138,4.6543,14.1826,4.6543,4.7277,0,9.3635-1.2826,13.9445-3.8663,4.5628-2.5653,8.1541-5.8088,10.7928-9.6933l4.1044,3.1517c-3.8848,6.0835-8.9053,10.7012-15.044,13.853-6.1385,3.1517-12.1488,4.7275-18.0307,4.7275-7.1464,0-13.6696-1.6307-19.6066-4.8743h-.0362l.0003-.0002Z" fill="#475569"/>
  <path d="M1317.0639,150.3164c-5.827-3.4083-10.4263-8.3007-13.7796-14.6407-3.3533-6.3584-5.039-13.6696-5.039-21.9705,0-7.348,1.6857-14.256,5.039-20.706,3.3533-6.45,8.0626-11.6358,14.0911-15.5203,6.0285-3.8847,12.8818-5.827,20.5595-5.827,5.9919,0,11.3974,1.3192,16.2166,3.9397s8.6672,6.5416,11.4893,11.7273,4.2512,11.5808,4.2512,19.1303l-55.43.9529c-.11,12.6069,1.9607,22.4102,6.2118,29.4466,4.2512,7.0365,10.8477,10.5547,19.7715,10.5547,4.8192,0,9.7851-1.2645,14.8791-3.7748,5.0942-2.5287,8.9971-5.607,11.7274-9.2902l3.7748,3.1517c-3.9947,6.0835-9.162,10.6097-15.5203,13.5414-6.3584,2.9318-12.5701,4.4159-18.6538,4.4159-7.238,0-13.7796-1.7041-19.6066-5.1124l.0184-.0184-.0003-.0005ZM1355.0861,100.7868c0-6.3034-1.411-11.7089-4.2512-16.2167s-7.0914-6.7799-12.7535-6.7799c-13.0283,0-20.7427,7.6595-23.1431,22.9966h40.1661-.0183Z" fill="#475569"/>
  <path d="M531.3174,313.1765c-5.9808,0-11.2349-1.3465-15.7645-4.042-4.5296-2.6928-8.0537-6.4532-10.5697-11.2795-2.5173-4.8252-3.7743-10.4363-3.7743-16.8306,0-6.3357,1.257-11.9148,3.7743-16.7427,2.516-4.8252,6.0401-8.5988,10.5697-11.3236,4.5296-2.7221,9.7837-4.0858,15.7645-4.0858,6.0983,0,11.4131,1.3637,15.9426,4.0858,4.5303,2.7248,8.0385,6.4984,10.5249,11.3236,2.4873,4.8279,3.7302,10.407,3.7302,16.7427,0,6.3943-1.2429,12.0055-3.7302,16.8306-2.4867,4.8266-5.9947,8.5867-10.5249,11.2795-4.5296,2.6955-9.8444,4.042-15.9426,4.042ZM531.3174,306.6033c4.4996,0,8.452-1.0209,11.8573-3.0638,3.4039-2.0429,6.0394-4.9733,7.9049-8.7924,1.8648-3.8204,2.7975-8.3934,2.7975-13.7228s-.9327-9.9026-2.7975-13.7227c-1.8654-3.8191-4.5009-6.7347-7.9049-8.7483-3.4053-2.0122-7.3577-3.0197-11.8573-3.0197-4.4409,0-8.3638,1.0075-11.768,3.0197-3.4053,2.0136-6.0394,4.9292-7.9049,8.7483-1.8648,3.8204-2.7975,8.3934-2.7975,13.7227s.9327,9.9026,2.7975,13.7228c1.8654,3.8191,4.4996,6.7492,7.9049,8.7924,3.4039,2.0429,7.3271,3.0638,11.768,3.0638Z" fill="#748293"/>
  <path d="M588.2486,313.1765c-3.4346,0-6.4391-.6819-9.0143-2.0429-2.5759-1.361-4.5602-3.4641-5.9508-6.3064-1.3924-2.8423-2.0877-6.3943-2.0877-10.6578v-26.8225h7.4607v26.0234c0,4.4409.9775,7.7863,2.9311,10.0359,1.9543,2.2511,4.7077,3.3746,8.2605,3.3746,2.4866,0,4.7363-.6058,6.7499-1.82,2.0122-1.2129,3.5969-2.9597,4.7518-5.2401,1.1543-2.2792,1.7314-5.1067,1.7314-8.4827v-23.8909h7.4607v44.7635h-6.7499l-.4438-7.8156c-1.3631,2.7836-3.3753,4.9599-6.0394,6.5279-2.6648,1.5678-5.6845,2.354-9.0598,2.354l-.0003-.0005Z" fill="#748293"/>
  <path d="M640.4725,312.1104c-2.6641,0-4.974-.4138-6.9274-1.2436-1.9543-.8287-3.4501-2.2338-4.4855-4.218-1.0368-1.9843-1.5539-4.6636-1.5539-8.0385v-24.957h-7.8163v-6.3064h7.8163l.9768-10.8367h6.4839v10.8367h12.967v6.3064h-12.967v24.957c0,2.7836.5617,4.6622,1.6873,5.6391,1.1243.9782,3.1086,1.4665,5.9508,1.4665h4.7965v6.3943h-6.9281l-.0005.0002Z" fill="#748293"/>
  <path d="M676.6218,313.1765c-4.2053,0-7.9796-.9768-11.3242-2.9316-3.346-1.9536-5.966-4.6918-7.8604-8.2159-1.8961-3.5214-2.8422-7.5927-2.8422-12.2124,0-4.7356.9462-8.851,2.8422-12.3445,1.8941-3.4935,4.5143-6.2316,7.8604-8.2159,3.3446-1.9829,7.1189-2.9756,11.3242-2.9756,5.3289,0,9.7697,1.3772,13.3226,4.1299,3.5521,2.753,5.802,6.4398,6.7499,11.0582h-7.6388c-.5926-2.7823-2.0422-4.944-4.3514-6.4839-2.3099-1.5385-5.034-2.3099-8.1711-2.3099-2.5466,0-4.9006.6378-7.0617,1.9095-2.1617,1.2742-3.9076,3.1838-5.2401,5.73-1.3317,2.546-1.9981,5.6832-1.9981,9.4141,0,2.7836.3842,5.2548,1.1549,7.4166.7686,2.1617,1.8054,3.9524,3.1086,5.3737,1.3017,1.4199,2.8268,2.5019,4.5744,3.2412,1.7455.7405,3.5661,1.1102,5.4623,1.1102,2.1311,0,4.0544-.3404,5.7726-1.0209,1.7166-.6805,3.1672-1.7028,4.3521-3.0652,1.1836-1.361,1.9836-2.9597,2.3978-4.7959h7.6388c-.9482,4.5009-3.2126,8.1571-6.7947,10.9686-3.5828,2.813-8.009,4.2194-13.2778,4.2194l-.0003.0002Z" fill="#748293"/>
  <path d="M727.2459,313.1765c-4.1453,0-7.8755-.9634-11.1909-2.8863-3.3167-1.9243-5.9212-4.6477-7.8156-8.1718-1.8961-3.5228-2.8422-7.6234-2.8422-12.3017,0-4.7959.9613-8.955,2.8863-12.4778,1.9236-3.5228,4.5589-6.2462,7.9049-8.1718,3.3446-1.9229,7.0903-2.8863,11.2356-2.8863,4.2628,0,8.0378.9634,11.3236,2.8863,3.2867,1.9254,5.8913,4.6491,7.8163,8.1718,1.9236,3.5228,2.8863,7.6527,2.8863,12.3899s-.9768,8.8669-2.9311,12.3899c-1.9536,3.5241-4.5889,6.2476-7.9042,8.1718-3.3167,1.9229-7.1055,2.8863-11.369,2.8863v-.0002ZM727.3352,306.7808c2.5446,0,4.9138-.6351,7.1051-1.9095,2.1897-1.2717,3.9665-3.1813,5.3289-5.7286,1.3617-2.5446,2.0429-5.6845,2.0429-9.4141,0-3.7884-.666-6.9415-1.9981-9.4595-1.3324-2.5153-3.0797-4.4101-5.2401-5.6845-2.1624-1.2717-4.545-1.9095-7.1496-1.9095-2.4873,0-4.8404.6378-7.061,1.9095-2.2204,1.2742-3.9972,3.1692-5.3296,5.6845-1.3317,2.518-1.9981,5.6711-1.9981,9.4595,0,3.7295.6664,6.8694,1.9981,9.4141,1.3324,2.5473,3.0783,4.4569,5.2401,5.7286,2.1611,1.2742,4.5148,1.9095,7.0617,1.9095h-.0003Z" fill="#748293"/>
  <path d="M759.929,312.1104v-44.7635h6.7506l.4438,6.3943c1.421-2.3085,3.3305-4.1299,5.7286-5.4616,2.3985-1.3331,5.0186-1.9988,7.8604-1.9988,2.3099,0,4.3968.3108,6.2616.9327,1.8655.6219,3.5221,1.5692,4.974,2.8423,1.4505,1.2742,2.5893,2.8863,3.4194,4.8399,1.5392-2.7221,3.6709-4.8399,6.395-6.3503,2.7227-1.5092,5.595-2.2644,8.6153-2.2644,3.4928,0,6.5125.6967,9.0591,2.087,2.5453,1.3917,4.5296,3.4948,5.9508,6.3064,1.421,2.8129,2.1318,6.3812,2.1318,10.7019v26.7345h-7.3718v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.4409-3.376-7.8163-3.376-2.3092,0-4.3821.6085-6.2169,1.8214-1.8362,1.2142-3.286,2.9756-4.3521,5.2842-1.0654,2.3099-1.5987,5.1521-1.5987,8.5268v23.8028h-7.4607v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.4114-3.376-7.7267-3.376-2.251,0-4.2942.6085-6.1283,1.8214-1.8362,1.2142-3.2867,2.9756-4.3521,5.2842-1.0661,2.3099-1.5994,5.1521-1.5994,8.5268v23.8028h-7.4607Z" fill="#748293"/>
  <path d="M858.6933,313.1765c-4.1453,0-7.8462-.9768-11.1021-2.9316-3.2572-1.9536-5.8041-4.6918-7.6381-8.2159-1.8362-3.5214-2.7534-7.622-2.7534-12.3004,0-4.737.9021-8.851,2.7089-12.3458,1.8054-3.4935,4.3521-6.2169,7.6381-8.1705,3.2867-1.955,7.061-2.9315,11.3242-2.9315,4.3815,0,8.1119.9768,11.1909,2.9315,3.0783,1.9536,5.4316,4.5155,7.061,7.682,1.628,3.1679,2.4426,6.6479,2.4426,10.4363v1.8654c0,.6512-.0306,1.3917-.0888,2.2204h-36.6816v-5.7738h29.3987c-.1774-4.0858-1.5253-7.2832-4.0413-9.5915-2.5174-2.3099-5.6704-3.4641-9.4588-3.4641-2.4866,0-4.8266.5764-7.0169,1.7321-2.191,1.1543-3.9384,2.8423-5.2401,5.0626-1.3031,2.2204-1.9536,4.9879-1.9536,8.3039v2.4873c0,3.6723.666,6.7492,1.9981,9.2366s3.0779,4.3514,5.2401,5.595c2.1611,1.2436,4.4855,1.8654,6.9722,1.8654,3.1379,0,5.7286-.6953,7.7715-2.087,2.0429-1.3903,3.5375-3.2999,4.4848-5.7286h7.3719c-.77,2.7234-2.0422,5.1374-3.819,7.2377-1.7762,2.1029-3.9824,3.775-6.6165,5.0185-2.6355,1.2436-5.6998,1.8654-9.1925,1.8654v.0005Z" fill="#748293"/>
  <path d="M913.5806,312.1104v-62.1719h18.2964c7.2832,0,13.292,1.2583,18.0296,3.775,4.7363,2.5166,8.2446,6.0994,10.5249,10.7471,2.2785,4.6491,3.4194,10.2282,3.4194,16.7413,0,6.3943-1.1409,11.9014-3.4194,16.5198-2.2806,4.6184-5.7886,8.1718-10.5249,10.6578-4.7377,2.4873-10.7465,3.7309-18.0296,3.7309h-18.2964ZM921.0413,305.8935h10.6579c6.0401,0,10.8498-.9913,14.4328-2.9756,3.5821-1.9829,6.1428-4.8252,7.6826-8.5268,1.5392-3.6989,2.3092-8.0957,2.3092-13.189,0-5.2094-.77-9.681-2.3092-13.4106-1.5399-3.7309-4.1006-6.6025-7.6826-8.6161-3.5828-2.0122-8.3927-3.0197-14.4328-3.0197h-10.6579v49.738-.0002Z" fill="#748293"/>
  <path d="M981.3987,331.6499l10.9246-24.5128h-2.5759l-17.5852-39.7902h8.0816l14.5662,34.1938,15.3656-34.1938h7.7267l-28.6875,64.3028h-7.8163l.0002.0002Z" fill="#748293"/>
  <path d="M1025.8959,312.1104v-44.7635h6.7506l.3549,7.8156c1.421-2.7823,3.4487-4.9585,6.0842-6.5279,2.6341-1.5678,5.6397-2.354,9.0143-2.354,3.4935,0,6.5131.6967,9.0598,2.087,2.5446,1.3917,4.5296,3.4948,5.9508,6.3064,1.421,2.8129,2.1318,6.3811,2.1318,10.7019v26.7345h-7.4614v-25.9352c0-4.4982-.9921-7.8728-2.9749-10.1241-1.9843-2.2497-4.7825-3.376-8.3934-3.376-2.4866,0-4.707.6085-6.6613,1.8214-1.9543,1.2142-3.508,2.9611-4.6629,5.2401-1.1543,2.2806-1.7321,5.1067-1.7321,8.4813v23.8923h-7.4607l.0003.0003Z" fill="#748293"/>
  <path d="M1093.915,313.1765c-3.6123,0-6.632-.6378-9.0591-1.9095-2.4285-1.2731-4.234-2.9611-5.4175-5.0626-1.1856-2.1018-1.7769-4.3969-1.7769-6.8842,0-3.0197.7839-5.5791,2.354-7.682,1.5678-2.1018,3.7884-3.7002,6.6613-4.7959,2.8709-1.0956,6.2616-1.6439,10.1693-1.6439h11.8128c0-2.7823-.4303-5.1067-1.2877-6.9721-.8593-1.8641-2.1024-3.2706-3.7302-4.218-1.6294-.9475-3.6568-1.421-6.0842-1.421-2.8422,0-5.3003.7098-7.3718,2.1311-2.0729,1.421-3.346,3.5241-3.819,6.3064h-7.6381c.3549-3.1972,1.4344-5.8754,3.2413-8.0385,1.8061-2.1604,4.0999-3.8191,6.8836-4.9733,2.7829-1.1543,5.6845-1.7321,8.7042-1.7321,4.144,0,7.594.7553,10.3468,2.2644,2.7534,1.5105,4.8104,3.6123,6.1728,6.3064,1.3617,2.6955,2.0429,5.8767,2.0429,9.5477v27.7113h-6.6613l-.4444-7.9049c-.5926,1.2436-1.3472,2.4139-2.2645,3.508-.9186,1.0968-1.9843,2.0429-3.1972,2.8423-1.2142.7994-2.6201,1.4372-4.2194,1.9095-1.5987.4737-3.4053.7112-5.4175.7112v-.0002ZM1095.07,306.8703c2.0716,0,3.9517-.4283,5.6397-1.2876,1.6873-.858,3.1224-2.0429,4.3073-3.5535,1.1836-1.5092,2.087-3.1813,2.7089-5.0174.6219-1.8348.9327-3.7602.9327-5.7738v-.2656h-11.1909c-2.9016,0-5.2401.3415-7.0169,1.0209-1.7762.6819-3.0497,1.6294-3.819,2.8423-.77,1.2142-1.1543,2.5914-1.1543,4.1299,0,1.5987.369,2.9904,1.1101,4.174.7394,1.1863,1.8341,2.1029,3.286,2.7541,1.4505.6526,3.1826.9768,5.1962.9768h0Z" fill="#748293"/>
  <path d="M1128.4785,312.1104v-44.7635h6.7506l.4438,6.3943c1.421-2.3085,3.3305-4.1299,5.7286-5.4616,2.3985-1.3331,5.0185-1.9988,7.8604-1.9988,2.3099,0,4.3969.3108,6.2616.9327,1.8654.6219,3.5221,1.5692,4.974,2.8423,1.4506,1.2742,2.5893,2.8863,3.4193,4.8399,1.5392-2.7221,3.6709-4.8399,6.395-6.3503,2.7227-1.5092,5.595-2.2644,8.6153-2.2644,3.4927,0,6.5125.6967,9.0591,2.087,2.5452,1.3917,4.5296,3.4948,5.9508,6.3064,1.4211,2.8129,2.1317,6.3812,2.1317,10.7019v26.7345h-7.3718v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.441-3.376-7.8163-3.376-2.3092,0-4.3821.6085-6.2168,1.8214-1.8362,1.2142-3.2861,2.9756-4.3521,5.2842-1.0654,2.3099-1.5987,5.1521-1.5987,8.5268v23.8028h-7.4607v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.4115-3.376-7.7267-3.376-2.2511,0-4.2942.6085-6.1283,1.8214-1.8362,1.2142-3.2867,2.9756-4.3521,5.2842-1.0661,2.3099-1.5994,5.1521-1.5994,8.5268v23.8028h-7.4607Z" fill="#748293"/>
  <path d="M1213.3124,257.8435c-1.4806,0-2.7089-.4883-3.6856-1.4651-.9767-.9782-1.4657-2.2058-1.4657-3.6868,0-1.4785.489-2.6782,1.4657-3.5962s2.2052-1.3772,3.6856-1.3772c1.4211,0,2.6341.459,3.6417,1.3772,1.0061.918,1.5098,2.1177,1.5098,3.5962,0,1.4812-.5037,2.7089-1.5098,3.6868-1.0075.9768-2.2203,1.4651-3.6417,1.4651ZM1209.582,312.1104v-44.7635h7.4607v44.7635h-7.4607Z" fill="#748293"/>
  <path d="M1251.3547,313.1765c-4.2054,0-7.9796-.9768-11.3242-2.9316-3.346-1.9536-5.966-4.6918-7.8604-8.2159-1.8961-3.5214-2.8423-7.5927-2.8423-12.2124,0-4.7356.9461-8.851,2.8423-12.3445,1.8941-3.4935,4.5144-6.2316,7.8604-8.2159,3.3446-1.9829,7.119-2.9756,11.3242-2.9756,5.3289,0,9.7696,1.3772,13.3226,4.1299,3.5521,2.753,5.802,6.4398,6.7499,11.0582h-7.6387c-.5926-2.7823-2.0422-4.944-4.3514-6.4839-2.3099-1.5385-5.034-2.3099-8.1711-2.3099-2.5466,0-4.9006.6378-7.0617,1.9095-2.1618,1.2742-3.9076,3.1838-5.2401,5.73-1.3318,2.546-1.9981,5.6832-1.9981,9.4141,0,2.7836.3843,5.2548,1.1549,7.4166.7687,2.1617,1.8055,3.9524,3.1086,5.3737,1.3017,1.4199,2.8268,2.5019,4.5743,3.2412,1.7455.7405,3.5662,1.1102,5.4623,1.1102,2.1311,0,4.0545-.3404,5.7726-1.0209,1.7166-.6805,3.1672-1.7028,4.3521-3.0652,1.1835-1.361,1.9836-2.9597,2.3978-4.7959h7.6387c-.9482,4.5009-3.2126,8.1571-6.7947,10.9686-3.5827,2.813-8.0089,4.2194-13.2778,4.2194v.0002Z" fill="#748293"/>
  <path d="M1299.5213,313.1765c-3.6716,0-6.898-.6219-9.681-1.8654-2.7836-1.2436-4.9885-2.9756-6.6165-5.1962-1.6294-2.2204-2.62-4.8399-2.9756-7.8597h7.6381c.2962,1.5399.9175,2.9611,1.8654,4.2633.9468,1.3024,2.2344,2.3526,3.8638,3.1517,1.628.7994,3.6261,1.1997,5.9947,1.1997,2.0722,0,3.7891-.3108,5.1515-.9327,1.3617-.6219,2.3833-1.4651,3.0645-2.5314.6798-1.0661,1.0215-2.2204,1.0215-3.4641,0-1.8348-.4303-3.2265-1.2877-4.174-.8593-.9461-2.1184-1.7014-3.7749-2.2644-1.6586-.563-3.6723-1.0516-6.0395-1.4665-1.9543-.3549-3.8791-.8273-5.7733-1.421-1.8955-.5912-3.5834-1.3758-5.0626-2.3526-1.4806-.9782-2.6508-2.1763-3.508-3.5975-.8593-1.421-1.2877-3.1665-1.2877-5.2401,0-2.5446.666-4.8104,1.9981-6.7947,1.3325-1.9829,3.2113-3.5375,5.6398-4.6623,2.4274-1.125,5.2696-1.688,8.5267-1.688,4.7959,0,8.6736,1.1543,11.6346,3.4641,2.9604,2.3085,4.7077,5.6552,5.2401,10.0359h-7.3718c-.2969-2.2497-1.2583-4.0099-2.8864-5.2842-1.6294-1.2731-3.8638-1.9095-6.7061-1.9095-2.7836,0-4.8999.563-6.3503,1.6866-1.4512,1.1263-2.1758,2.6073-2.1758,4.4409,0,1.1863.3997,2.2365,1.199,3.1531.7994.9193,1.9981,1.7028,3.5969,2.354,1.5994.6526,3.5221,1.1849,5.7733,1.5987,2.9604.5337,5.6538,1.2436,8.0824,2.1324,2.4274.8873,4.3969,2.2058,5.9067,3.9524s2.2644,4.218,2.2644,7.4152c0,2.7848-.6966,5.2121-2.087,7.2832-1.3917,2.0736-3.3612,3.6868-5.9067,4.8411-2.5459,1.1543-5.537,1.7321-8.9705,1.7321l-.0003-.0002Z" fill="#748293"/>
  <path d="M1341.0487,241.6223v3.8556h-7.4553v19.4525h-4.6268v-19.4525h-7.4553v-3.8556h19.5374ZM1366.2423,264.9306l-.8568-13.7107c-.0857-1.7998-.0857-4.0276-.1718-6.5129h-.2567c-.5998,2.0565-1.2853,4.7988-1.9711,6.941l-4.1987,12.9395h-4.7988l-4.1987-13.2819c-.4288-1.7998-1.1143-4.5418-1.628-6.5986h-.2574c0,2.1422-.0857,4.3707-.1713,6.5129l-.8568,13.7107h-4.4564l1.7141-23.3083h6.941l4.0276,11.3967c.5137,1.7998.9422,3.5132,1.5423,5.9131h.0857c.5998-2.1422,1.1143-4.1133,1.628-5.8267l4.0276-11.4829h6.6842l1.7998,23.3083h-4.6275l-.0003-.0002Z" fill="#748293"/>
  <path d="M350.1959,365.6097c-4.1613.6094-8.4122.9293-12.738.9293-47.6892,0-86.4573-38.4055-86.4573-87.9931V100.4578c0-12.1113-6.6011-22.3486-16.061-27.254,3.8618-2.0109,8.2027-3.1383,12.753-3.1383,15.7168,0,28.814,13.3299,28.814,30.3923v178.0881c0,45.0782,32.0473,80.9243,73.6893,87.0638h0Z" fill="#475569"/>
  <path d="M119.683,365.6097c-4.1613.6094-8.4272.9293-12.753.9293-47.6742,0-86.4423-38.4055-86.4423-87.9931V45.5384c0-15.9961,13.0972-29.3259,28.814-29.3259,4.5505,0,8.8912,1.1272,12.753,3.1076-9.4599,4.8445-16.061,14.8534-16.061,26.2181v233.0075c0,45.0782,32.0473,80.9243,73.6893,87.0638v.0002Z" fill="#475569"/>
  <path d="M407.8392,19.3203c-9.46,4.8293-16.076,14.8534-16.076,26.2181v234.0741c0,17.0624-13.0972,30.3923-28.814,30.3923-2.0806,0-4.1313-.2286-6.0921-.6855-2.3201-.5333-4.5505-1.3558-6.6459-2.4526.045-.0152.0747-.0457.1198-.0609,2.3799-1.2492,4.5802-2.8336,6.5261-4.7073,5.7629-5.5148,9.4152-13.4824,9.4152-22.4858V45.5384c0-15.9961,13.0972-29.3259,28.814-29.3259,4.4757,0,8.7565,1.097,12.5735,3.0165.0598.0304.1198.0609.1795.0913h0Z" fill="#fbbf24"/>
  <path d="M234.9396,14.4758c-41.642,6.1394-73.6893,41.9703-73.6893,87.0485v178.0881c0,17.0624-13.0972,30.3923-28.814,30.3923-4.5505,0-8.8912-1.1272-12.753-3.1383,9.4599-4.9054,16.061-15.1429,16.061-27.254V101.5241c0-49.5875,38.7682-87.9776,86.4423-87.9776,4.326,0,8.5918.3199,12.753.9293Z" fill="#00bfa5"/>
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
                    The Outcome Dynamics™ methodology gives you a proven, repeatable system 
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
                <div className="pillar-card blue">
                  <h3>Validation</h3>
                  <p>Lock in gains and predict the future. Know which metrics predict which outcomes.</p>
                </div>
              </div>
            </div>
            <ReviewBlock blockKey="voice:dimensions" label="Messaging Dimensions" />

            <div className="card-white" style={{ marginTop: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '4px', height: '40px', background: 'linear-gradient(to bottom, #475569, #00bfa5)', borderRadius: '2px' }}></div>
                <div>
                  <h3 style={{ fontFamily: 'Lora, serif', fontSize: '20px', fontWeight: '400', color: '#1e293b' }}>Outcome Dynamics™</h3>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>By Bill Adams - Launching September 2026 via Forbes Books</p>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.8', maxWidth: '700px' }}>
                The definitive guide to understanding how organizations systematically convert their assets 
                into value creation. Built on the patented Value Collaborator System™ methodology.
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
              The philosophy, methodology, and purpose behind the WhiteSpace Outcome Dynamics™.
            </p>

            <div className="icon-showcase" style={{ marginBottom: '48px', padding: '80px' }}>
              <Icon size={320} />
            </div>

            <div className="card-white">
              <h3 style={{ fontFamily: 'Lora, serif', fontSize: '24px', fontWeight: '300', color: '#1e293b', marginBottom: '20px' }}>
                Every market has white space - the gap between commodity competition and premium positioning that most organizations never see.
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.8', marginBottom: '24px', maxWidth: '760px' }}>
                Outcome Dynamics™ was developed by Bill Adams after decades of observing the same pattern: 
                why do organizations consistently undervalue what they already have? Through decades of consulting 
                experience, Adams developed the Value Collaborator System™ - a patented methodology that reveals, 
                organizes, and monetizes organizational assets.
              </p>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.8', maxWidth: '760px' }}>
                The Framework rests on four phases - Expectation, Systemization, Realization, and Validation - each 
                representing a stage in the journey from asset awareness to measurable, predictable value creation.
              </p>
            </div>

            <div className="grid-4" style={{ marginTop: '40px' }}>
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
              <div className="box accent-blue" style={{ paddingLeft: '28px' }}>
                <h4 style={{ fontFamily: 'Lora, serif', fontSize: '18px', fontWeight: '400', color: '#2563eb', marginBottom: '12px' }}>Validation</h4>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                  Lock in gains and predict the future. Know which metrics predict which outcomes and scale with mathematical certainty.
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
                      <g transform="translate(-2.5, 0)">
                        <path fill="#ffffff" d="M220.27,231.1c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.05c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
                        <path fill="#fbbf24" d="M258.78,3.79c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
                      </g>
                      <g transform="translate(2.5, 0)">
                        <path fill="#ffffff" d="M66.27,231.1c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21C0,10.5,8.75,1.75,19.25,1.75c3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
                        <path fill="#00bfa5" d="M143.27.61c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V57.75C77,25.2,102.9,0,134.75,0c2.89,0,5.74.21,8.52.61Z"/>
                      </g>
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
                  <div className="color-code">HEX: #fbbf24<br/>RGB: 251, 191, 36<br/>Role: Realization &amp; Validation</div>
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
              Four interlocking brackets: Slate (Expectation) - Teal (Systemization) - Blue (Realization) - Gold (Validation)
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
                    <g transform="translate(-2.5, 0)">
                      <path fill="#ffffff" d="M220.27,231.1c-2.78.4-5.62.61-8.51.61-31.86,0-57.76-25.21-57.76-57.76V57.05c0-7.95-4.41-14.67-10.73-17.89,2.58-1.32,5.48-2.06,8.52-2.06,10.5,0,19.25,8.75,19.25,19.95v116.9c0,29.59,21.41,53.12,49.23,57.15Z"/>
                      <path fill="#fbbf24" d="M258.78,3.79c-6.32,3.17-10.74,9.75-10.74,17.21v153.65c0,11.2-8.75,19.95-19.25,19.95-1.39,0-2.76-.15-4.07-.45-1.55-.35-3.04-.89-4.44-1.61.03-.01.05-.03.08-.04,1.59-.82,3.06-1.86,4.36-3.09,3.85-3.62,6.29-8.85,6.29-14.76V21c0-10.5,8.75-19.25,19.25-19.25,2.99,0,5.85.72,8.4,1.98.04.02.08.04.12.06Z"/>
                    </g>
                    <g transform="translate(2.5, 0)">
                      <path fill="#ffffff" d="M66.27,231.1c-2.78.4-5.63.61-8.52.61-31.85,0-57.75-25.21-57.75-57.76V21C0,10.5,8.75,1.75,19.25,1.75c3.04,0,5.94.74,8.52,2.04-6.32,3.18-10.73,9.75-10.73,17.21v152.95c0,29.59,21.41,53.12,49.23,57.15Z"/>
                      <path fill="#00bfa5" d="M143.27.61c-27.82,4.03-49.23,27.55-49.23,57.14v116.9c0,11.2-8.75,19.95-19.25,19.95-3.04,0-5.94-.74-8.52-2.06,6.32-3.22,10.73-9.94,10.73-17.89V57.75C77,25.2,102.9,0,134.75,0c2.89,0,5.74.21,8.52.61Z"/>
                    </g>
                  </svg>
                </div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>On Navy</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Navy brackets become white</p>
              </div>
            </div>

            {/* Combimark */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Combimark</h3>
            <div className="card-white" style={{ padding: '60px', textAlign: 'center', marginBottom: '48px' }}>
              <svg height="80" viewBox="0 0 1413.1225 380.0855" xmlns="http://www.w3.org/2000/svg">
              <rect x="475.9759" y="205.0902" width="916.6589" height="152.3079" fill="#f2f2f2"/>
  <path d="M507.696,70.7172l-2.0522-6.1385c-2.5287-7.8792-4.0497-12.9734-4.5627-15.2821l-8.8137.3115v-6.9265h38.2603v5.2039c-4.3062.2199-7.348.9161-9.1437,2.1256-1.7775,1.2095-2.6752,3.1701-2.6752,5.9004,0,2.5103.5315,5.5704,1.5757,9.1252,1.8873,7.0365,4.4162,14.9156,7.5677,23.6196.5315,1.5757,1.1545,3.4448,1.8873,5.5889.733,2.1622,1.5757,4.6543,2.5103,7.4761.623,2.1988,1.411,4.6177,2.3637,7.238.9527,2.6203,1.631,4.5077,2.0522,5.662,2.1072,5.662,3.6648,10.1882,4.7275,13.5414h.3115c2.1072-7.1464,4.2512-14.0727,6.45-20.7794,3.7748-12.1854,7.9342-25.0304,12.4419-38.5903,4.7275-14.1826,7.5677-22.9966,8.5023-26.4598h5.039c1.2644,4.3062,3.4083,11.0493,6.45,20.2296,3.0418,9.1802,5.2405,15.8318,6.6149,19.918,3.1517,9.0337,5.2957,15.4287,6.45,19.2219.843,2.8402,2.199,7.0914,4.1044,12.7534,2.089,6.0835,3.7747,11.2874,5.039,15.5937h.4764c2.5103-8.1907,4.6725-14.9522,6.45-20.3211,5.3505-15.2272,9.7117-28.3471,13.065-39.378,1.1545-3.8847,2.199-7.1464,3.1517-9.7667,1.9972-5.3505,3.6282-9.1802,4.8743-11.4892l-12.6069.4765v-6.9265h31.9753v5.2039c-3.7747.4215-6.6334,1.2095-8.5756,2.3637s-3.6832,3.2251-5.204,6.2119-3.4449,7.8976-5.7538,14.7325l-8.0259,23.9311c-8.3923,25.5069-15.1722,45.2968-20.3212,59.3694h-4.7275l-29.4466-84.2533-27.7241,84.2533h-4.5627l-28.1821-83.7771.0366.0366.0008.0002Z" fill="#475569"/>
  <path d="M657.4574,148.1908c3.0418,0,5.2405-.7512,6.6149-2.2906,1.356-1.521,2.1806-3.4816,2.4371-5.9004s.3847-6.0835.3847-11.0309V54.4821c0-3.9947.165-7.4029.4764-10.2432l-11.1777.623v-6.615c6.3034,0,10.7928-.3665,13.468-1.0995s4.7459-1.7775,6.2118-3.1517h4.5627v48.027c3.6648-3.0417,7.8242-5.5339,12.4419-7.4761,4.6175-1.9423,9.0703-2.9136,13.3764-2.9136,9.0337,0,15.5937,2.8402,19.6799,8.5022,4.1044,5.662,6.1935,14.5859,6.3034,26.7713l.165,29.3c0,4.7275-.2199,8.3007-.623,10.7012l9.9133-.4765v6.45h-32.1218v-4.7275c3.0418,0,5.2224-.7512,6.5416-2.2906,1.3192-1.521,2.1072-3.4632,2.3638-5.827s.4031-6.0653.4031-11.1043v-22.0437c0-9.0337-1.411-15.7768-4.2512-20.2296-2.8402-4.4528-7.2929-6.6881-13.3949-6.6881-3.8847,0-7.751.9161-11.5808,2.7486s-6.9081,4.1778-9.217,6.9996v46.4513c0,4.0863-.2566,7.6595-.788,10.7012l9.9132-.4765v6.45h-32.1218v-4.7275l.0184.0734.0006-.0002Z" fill="#475569"/>
  <path d="M754.1527,148.1908c3.0418,0,5.2224-.7512,6.5416-2.2906,1.3192-1.521,2.1072-3.4632,2.3638-5.827s.3847-6.0653.3847-11.1043v-35.915c0-3.0417.2016-6.45.623-10.2432l-11.1777.623v-6.615c6.1935,0,10.6278-.3665,13.3031-1.0995,2.6752-.733,4.7459-1.7775,6.2118-3.1517h4.5627v63.6207c0,4.7275-.2016,8.3007-.623,10.7012l9.9133-.4765v6.45h-32.1218v-4.7275l.0182.055.0004.0002ZM763.9193,54.244c-1.6857-1.8325-2.5103-4.0129-2.5103-6.5416s.8611-4.7275,2.6021-6.615,3.7014-2.8402,5.9004-2.8402c2.4188,0,4.4344.9161,6.0653,2.7486s2.4371,4.0679,2.4371,6.6881-.8611,4.6909-2.6021,6.5416c-1.7407,1.8325-3.7563,2.7486-6.0653,2.7486s-4.1413-.9161-5.827-2.7486v.0184h-.0002Z" fill="#475569"/>
  <path d="M809.8942,126.4586l.3115-45.6633-12.1305.165v-6.7799c5.039-.11,9.3086-2.3821,12.8268-6.8531,3.5182-4.4528,6.1201-9.5283,7.7876-15.1906h5.3505v22.0437h26.4598v6.1385l-26.4598.3115c-.11,16.0701-.1833,27.1926-.2381,33.3861-.055,6.1935-.0734,9.6567-.0734,10.3897,0,7.4579.898,12.9916,2.6752,16.6198s4.8743,5.4423,9.2902,5.4423c2.7302,0,5.4239-.843,8.1175-2.5287,2.6752-1.6857,5.0208-3.9947,6.9998-6.9265l4.2512,3.4632c-4.0863,6.0835-8.1357,10.1148-12.1305,12.0389-3.9947,1.9422-7.8792,2.9136-11.6539,2.9136-14.3844,0-21.5306-9.6567-21.4206-28.9701h.0366-.0002Z" fill="#475569"/>
  <path d="M881.9439,150.3164c-5.827-3.4083-10.4263-8.3007-13.7796-14.6407-3.3533-6.3584-5.039-13.6696-5.039-21.9705,0-7.348,1.6857-14.256,5.039-20.706,3.3533-6.45,8.0626-11.6358,14.0911-15.5203,6.0285-3.8847,12.8818-5.827,20.5595-5.827,5.9919,0,11.3974,1.3192,16.2167,3.9397s8.6672,6.5416,11.489,11.7273c2.8218,5.1858,4.2512,11.5808,4.2512,19.1303l-55.43.9529c-.11,12.6069,1.9607,22.4102,6.2118,29.4466,4.2512,7.0365,10.8478,10.5547,19.7715,10.5547,4.8193,0,9.7849-1.2645,14.8791-3.7748,5.094-2.5287,8.9971-5.607,11.7273-9.2902l3.7747,3.1517c-3.9947,6.0835-9.162,10.6097-15.5203,13.5414-6.3584,2.9318-12.5701,4.4159-18.6538,4.4159-7.238,0-13.7796-1.7041-19.6065-5.1124l.0182-.0184v-.0005ZM919.9661,100.7868c0-6.3034-1.411-11.7089-4.2512-16.2167s-7.0914-6.7799-12.7534-6.7799c-13.0283,0-20.7426,7.6595-23.1431,22.9966h40.166-.0184.0001Z" fill="#475569"/>
  <path d="M972.5006,153.3947c-4.984-1.356-9.3636-3.3533-13.1566-5.9919l.788,6.7799h-8.1907l-.9345-33.551h6.1385c.5314,9.0337,3.6282,15.9786,9.2902,20.871,5.662,4.8743,12.8634,7.3296,21.5674,7.3296,6.395,0,11.7823-1.7591,16.1433-5.2773,4.3612-3.5182,6.5416-8.3191,6.5416-14.4026,0-4.5077-1.2277-8.3741-3.7014-11.5808-2.4737-3.2067-5.5155-5.882-9.1253-8.026-3.6282-2.1438-8.5388-4.6543-14.7325-7.4761-7.0365-3.3533-12.6253-6.3034-16.7663-8.8137-4.1413-2.5287-7.696-5.8454-10.6278-10.0048-2.9318-4.1413-4.4162-9.2718-4.4162-15.3555,0-4.1962.9711-8.3922,2.9136-12.6069,1.9422-4.1962,5.2957-7.7694,10.0782-10.7012s11.1043-4.416,18.9835-4.416c4.7277,0,9.4734.6046,14.256,1.8141,4.7825,1.2095,9.162,3.2799,13.1566,6.2119l-.623-6.7799h8.0259v34.6505h-5.6622c-.5314-8.3007-3.1699-15.3005-7.9526-21.0175-4.7825-5.717-11.4708-8.5756-20.083-8.5756-6.3034,0-11.2327,1.7591-14.8057,5.2773-3.5732,3.5182-5.3505,7.8976-5.3505,13.1565,0,4.1962,1.2094,7.8242,3.6282,10.8662s5.3505,5.5704,8.8137,7.5677,8.3373,4.4709,14.6407,7.4029c7.1464,3.2617,12.8818,6.1935,17.2428,8.8137,4.3612,2.6203,8.0626,6.0653,11.1043,10.3163s4.5627,9.4736,4.5627,15.667-1.4476,11.0859-4.3244,15.5937c-2.8952,4.5078-7.1096,8.026-12.68,10.5547s-12.1854,3.7748-19.8448,3.7748c-4.9292,0-9.8948-.678-14.8791-2.0522l-.0182-.0184-.0005-.0002Z" fill="#475569"/>
  <path d="M1036.5062,188.3384c3.0418,0,5.2224-.7696,6.5416-2.2906s2.0706-3.4083,2.2905-5.662c.2016-2.2538.3665-6.0103.4764-11.2509l.3115-76.0626c0-4.416.2016-7.8242.623-10.2432l-11.1775.623v-6.615c6.1935,0,10.4447-.3481,12.7535-1.0261s4.1962-1.7591,5.6622-3.2251h4.7277c.4215,5.149.623,7.971.623,8.5022,3.1517-2.8402,6.9265-5.1124,11.3425-6.8531s8.759-2.6021,13.065-2.6021c6.1935,0,11.9105,1.5942,17.1694,4.8009,5.2405,3.2067,9.4734,7.7694,12.68,13.7064,3.2067,5.9369,4.8009,12.79,4.8009,20.5595,0,8.7222-1.8325,16.4548-5.5155,23.2347-3.683,6.7799-8.5756,12.0389-14.7325,15.8318-6.1385,3.7748-12.79,5.662-19.9181,5.662s-13.5414-1.7407-18.892-5.2039v26.1483c0,4.7275-.2199,8.3007-.623,10.7012l9.9132-.4765v6.45h-32.1218v-4.7275.0184h-.0001ZM1090.7633,144.5626c3.6282-3.0417,6.4318-7.293,8.429-12.7534,1.9974-5.4605,2.9868-11.6539,2.9868-18.5804,0-9.4552-2.0156-17.4443-6.0653-24.0227-4.0497-6.56-10.0598-9.8398-18.0307-9.8398-3.4632,0-6.8347.843-10.0782,2.5103-3.2617,1.6857-6.0835,3.7748-8.5023,6.3034.11.733.165,3.9397.165,9.6017l-.165,45.2052c5.3505,4.0863,11.4892,6.1385,18.4339,6.1385,4.9292,0,9.217-1.521,12.8268-4.5627h0Z" fill="#475569"/>
  <path d="M1137.2145,150.243c-4.0497-3.4632-6.0653-7.971-6.0653-13.5414,0-6.0835,2.4371-11.2325,7.3296-15.4287,4.8741-4.1962,11.0311-7.3296,18.4338-9.3636,7.4027-2.0522,14.824-3.0233,22.2818-2.9136v-9.7667c0-6.8165-1.0077-12.1488-2.9868-15.9786-1.9974-3.8297-6.2485-5.7538-12.7535-5.7538-3.2617,0-6.3584.678-9.2902,2.0522-2.9502,1.3742-5.0942,3.4083-6.45,6.1385,1.356,1.466,2.0522,3.4632,2.0522,5.9919,0,1.5757-.5865,3.0783-1.7407,4.4893s-2.8402,2.1256-5.039,2.1256-3.9397-.7146-5.204-2.1256-1.8875-3.2799-1.8875-5.5889c0-3.4632,1.3377-6.6334,4.0129-9.5283,2.6752-2.8952,6.395-5.1674,11.1774-6.8531s10.0966-2.5103,15.9784-2.5103c8.8138,0,15.3187,2.3456,19.5334,6.9996,4.1962,4.6727,6.2485,12.0389,6.1385,22.117l-.1649,35.4385c0,3.3533-.2199,6.9265-.623,10.7012l11.1775-.623v6.615h-22.5202c-.3115-1.5757-.678-4.5627-1.0995-8.9787-7.6594,7.6595-15.9052,11.489-24.719,11.489-7.6594,0-13.523-1.7407-17.5543-5.2039h-.0178v.0002ZM1169.2631,144.1777c3.2617-1.521,6.5599-3.8663,9.9133-6.9996-.11-1.5757-.1649-4.2512-.1649-8.026l.1649-14.8057c-8.6122.3115-16.2717,2.0706-22.9965,5.2773-6.725,3.2067-10.0782,8.1175-10.0782,14.7325,0,3.8847,1.1545,6.8715,3.4632,8.9787s5.2405,3.1517,8.8138,3.1517c3.9947,0,7.6045-.7696,10.8662-2.2906l.0184-.0184h-.0001Z" fill="#475569"/>
  <path d="M1233.5982,150.5545c-5.937-3.2617-10.6279-7.9342-14.0911-14.0179s-5.2039-13.2849-5.2039-21.5672c0-7.348,1.759-14.3476,5.2773-21.0175,3.5182-6.6699,8.3925-12.0389,14.6407-16.1433,6.2485-4.0863,13.3031-6.1385,21.1824-6.1385,5.6622,0,10.7013.898,15.1172,2.6752,4.4159,1.7957,7.8426,4.1413,10.3163,7.0914,2.4737,2.9318,3.7014,6.1385,3.7014,9.6017,0,2.4187-.678,4.416-2.0522,5.9919-1.3742,1.5757-3.2617,2.3637-5.6622,2.3637s-4.0497-.7512-5.2039-2.2906c-1.1545-1.521-1.7407-3.1151-1.7407-4.8009,0-2.6203.788-4.7275,2.3637-6.3034-1.1545-3.2617-3.3898-5.4789-6.6884-6.6881-3.2983-1.2095-6.5966-1.8141-9.8399-1.8141-4.8375,0-9.162,1.3192-12.9917,3.9397s-6.8531,6.45-9.0521,11.4892c-2.1989,5.039-3.2983,11.0859-3.2983,18.1039s1.1176,13.2849,3.3898,18.7454c2.2537,5.4605,5.4239,9.7483,9.5286,12.8268,4.1044,3.0967,8.8138,4.6543,14.1826,4.6543,4.7277,0,9.3635-1.2826,13.9445-3.8663,4.5628-2.5653,8.1541-5.8088,10.7928-9.6933l4.1044,3.1517c-3.8848,6.0835-8.9053,10.7012-15.044,13.853-6.1385,3.1517-12.1488,4.7275-18.0307,4.7275-7.1464,0-13.6696-1.6307-19.6066-4.8743h-.0362l.0003-.0002Z" fill="#475569"/>
  <path d="M1317.0639,150.3164c-5.827-3.4083-10.4263-8.3007-13.7796-14.6407-3.3533-6.3584-5.039-13.6696-5.039-21.9705,0-7.348,1.6857-14.256,5.039-20.706,3.3533-6.45,8.0626-11.6358,14.0911-15.5203,6.0285-3.8847,12.8818-5.827,20.5595-5.827,5.9919,0,11.3974,1.3192,16.2166,3.9397s8.6672,6.5416,11.4893,11.7273,4.2512,11.5808,4.2512,19.1303l-55.43.9529c-.11,12.6069,1.9607,22.4102,6.2118,29.4466,4.2512,7.0365,10.8477,10.5547,19.7715,10.5547,4.8192,0,9.7851-1.2645,14.8791-3.7748,5.0942-2.5287,8.9971-5.607,11.7274-9.2902l3.7748,3.1517c-3.9947,6.0835-9.162,10.6097-15.5203,13.5414-6.3584,2.9318-12.5701,4.4159-18.6538,4.4159-7.238,0-13.7796-1.7041-19.6066-5.1124l.0184-.0184-.0003-.0005ZM1355.0861,100.7868c0-6.3034-1.411-11.7089-4.2512-16.2167s-7.0914-6.7799-12.7535-6.7799c-13.0283,0-20.7427,7.6595-23.1431,22.9966h40.1661-.0183Z" fill="#475569"/>
  <path d="M531.3174,313.1765c-5.9808,0-11.2349-1.3465-15.7645-4.042-4.5296-2.6928-8.0537-6.4532-10.5697-11.2795-2.5173-4.8252-3.7743-10.4363-3.7743-16.8306,0-6.3357,1.257-11.9148,3.7743-16.7427,2.516-4.8252,6.0401-8.5988,10.5697-11.3236,4.5296-2.7221,9.7837-4.0858,15.7645-4.0858,6.0983,0,11.4131,1.3637,15.9426,4.0858,4.5303,2.7248,8.0385,6.4984,10.5249,11.3236,2.4873,4.8279,3.7302,10.407,3.7302,16.7427,0,6.3943-1.2429,12.0055-3.7302,16.8306-2.4867,4.8266-5.9947,8.5867-10.5249,11.2795-4.5296,2.6955-9.8444,4.042-15.9426,4.042ZM531.3174,306.6033c4.4996,0,8.452-1.0209,11.8573-3.0638,3.4039-2.0429,6.0394-4.9733,7.9049-8.7924,1.8648-3.8204,2.7975-8.3934,2.7975-13.7228s-.9327-9.9026-2.7975-13.7227c-1.8654-3.8191-4.5009-6.7347-7.9049-8.7483-3.4053-2.0122-7.3577-3.0197-11.8573-3.0197-4.4409,0-8.3638,1.0075-11.768,3.0197-3.4053,2.0136-6.0394,4.9292-7.9049,8.7483-1.8648,3.8204-2.7975,8.3934-2.7975,13.7227s.9327,9.9026,2.7975,13.7228c1.8654,3.8191,4.4996,6.7492,7.9049,8.7924,3.4039,2.0429,7.3271,3.0638,11.768,3.0638Z" fill="#748293"/>
  <path d="M588.2486,313.1765c-3.4346,0-6.4391-.6819-9.0143-2.0429-2.5759-1.361-4.5602-3.4641-5.9508-6.3064-1.3924-2.8423-2.0877-6.3943-2.0877-10.6578v-26.8225h7.4607v26.0234c0,4.4409.9775,7.7863,2.9311,10.0359,1.9543,2.2511,4.7077,3.3746,8.2605,3.3746,2.4866,0,4.7363-.6058,6.7499-1.82,2.0122-1.2129,3.5969-2.9597,4.7518-5.2401,1.1543-2.2792,1.7314-5.1067,1.7314-8.4827v-23.8909h7.4607v44.7635h-6.7499l-.4438-7.8156c-1.3631,2.7836-3.3753,4.9599-6.0394,6.5279-2.6648,1.5678-5.6845,2.354-9.0598,2.354l-.0003-.0005Z" fill="#748293"/>
  <path d="M640.4725,312.1104c-2.6641,0-4.974-.4138-6.9274-1.2436-1.9543-.8287-3.4501-2.2338-4.4855-4.218-1.0368-1.9843-1.5539-4.6636-1.5539-8.0385v-24.957h-7.8163v-6.3064h7.8163l.9768-10.8367h6.4839v10.8367h12.967v6.3064h-12.967v24.957c0,2.7836.5617,4.6622,1.6873,5.6391,1.1243.9782,3.1086,1.4665,5.9508,1.4665h4.7965v6.3943h-6.9281l-.0005.0002Z" fill="#748293"/>
  <path d="M676.6218,313.1765c-4.2053,0-7.9796-.9768-11.3242-2.9316-3.346-1.9536-5.966-4.6918-7.8604-8.2159-1.8961-3.5214-2.8422-7.5927-2.8422-12.2124,0-4.7356.9462-8.851,2.8422-12.3445,1.8941-3.4935,4.5143-6.2316,7.8604-8.2159,3.3446-1.9829,7.1189-2.9756,11.3242-2.9756,5.3289,0,9.7697,1.3772,13.3226,4.1299,3.5521,2.753,5.802,6.4398,6.7499,11.0582h-7.6388c-.5926-2.7823-2.0422-4.944-4.3514-6.4839-2.3099-1.5385-5.034-2.3099-8.1711-2.3099-2.5466,0-4.9006.6378-7.0617,1.9095-2.1617,1.2742-3.9076,3.1838-5.2401,5.73-1.3317,2.546-1.9981,5.6832-1.9981,9.4141,0,2.7836.3842,5.2548,1.1549,7.4166.7686,2.1617,1.8054,3.9524,3.1086,5.3737,1.3017,1.4199,2.8268,2.5019,4.5744,3.2412,1.7455.7405,3.5661,1.1102,5.4623,1.1102,2.1311,0,4.0544-.3404,5.7726-1.0209,1.7166-.6805,3.1672-1.7028,4.3521-3.0652,1.1836-1.361,1.9836-2.9597,2.3978-4.7959h7.6388c-.9482,4.5009-3.2126,8.1571-6.7947,10.9686-3.5828,2.813-8.009,4.2194-13.2778,4.2194l-.0003.0002Z" fill="#748293"/>
  <path d="M727.2459,313.1765c-4.1453,0-7.8755-.9634-11.1909-2.8863-3.3167-1.9243-5.9212-4.6477-7.8156-8.1718-1.8961-3.5228-2.8422-7.6234-2.8422-12.3017,0-4.7959.9613-8.955,2.8863-12.4778,1.9236-3.5228,4.5589-6.2462,7.9049-8.1718,3.3446-1.9229,7.0903-2.8863,11.2356-2.8863,4.2628,0,8.0378.9634,11.3236,2.8863,3.2867,1.9254,5.8913,4.6491,7.8163,8.1718,1.9236,3.5228,2.8863,7.6527,2.8863,12.3899s-.9768,8.8669-2.9311,12.3899c-1.9536,3.5241-4.5889,6.2476-7.9042,8.1718-3.3167,1.9229-7.1055,2.8863-11.369,2.8863v-.0002ZM727.3352,306.7808c2.5446,0,4.9138-.6351,7.1051-1.9095,2.1897-1.2717,3.9665-3.1813,5.3289-5.7286,1.3617-2.5446,2.0429-5.6845,2.0429-9.4141,0-3.7884-.666-6.9415-1.9981-9.4595-1.3324-2.5153-3.0797-4.4101-5.2401-5.6845-2.1624-1.2717-4.545-1.9095-7.1496-1.9095-2.4873,0-4.8404.6378-7.061,1.9095-2.2204,1.2742-3.9972,3.1692-5.3296,5.6845-1.3317,2.518-1.9981,5.6711-1.9981,9.4595,0,3.7295.6664,6.8694,1.9981,9.4141,1.3324,2.5473,3.0783,4.4569,5.2401,5.7286,2.1611,1.2742,4.5148,1.9095,7.0617,1.9095h-.0003Z" fill="#748293"/>
  <path d="M759.929,312.1104v-44.7635h6.7506l.4438,6.3943c1.421-2.3085,3.3305-4.1299,5.7286-5.4616,2.3985-1.3331,5.0186-1.9988,7.8604-1.9988,2.3099,0,4.3968.3108,6.2616.9327,1.8655.6219,3.5221,1.5692,4.974,2.8423,1.4505,1.2742,2.5893,2.8863,3.4194,4.8399,1.5392-2.7221,3.6709-4.8399,6.395-6.3503,2.7227-1.5092,5.595-2.2644,8.6153-2.2644,3.4928,0,6.5125.6967,9.0591,2.087,2.5453,1.3917,4.5296,3.4948,5.9508,6.3064,1.421,2.8129,2.1318,6.3812,2.1318,10.7019v26.7345h-7.3718v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.4409-3.376-7.8163-3.376-2.3092,0-4.3821.6085-6.2169,1.8214-1.8362,1.2142-3.286,2.9756-4.3521,5.2842-1.0654,2.3099-1.5987,5.1521-1.5987,8.5268v23.8028h-7.4607v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.4114-3.376-7.7267-3.376-2.251,0-4.2942.6085-6.1283,1.8214-1.8362,1.2142-3.2867,2.9756-4.3521,5.2842-1.0661,2.3099-1.5994,5.1521-1.5994,8.5268v23.8028h-7.4607Z" fill="#748293"/>
  <path d="M858.6933,313.1765c-4.1453,0-7.8462-.9768-11.1021-2.9316-3.2572-1.9536-5.8041-4.6918-7.6381-8.2159-1.8362-3.5214-2.7534-7.622-2.7534-12.3004,0-4.737.9021-8.851,2.7089-12.3458,1.8054-3.4935,4.3521-6.2169,7.6381-8.1705,3.2867-1.955,7.061-2.9315,11.3242-2.9315,4.3815,0,8.1119.9768,11.1909,2.9315,3.0783,1.9536,5.4316,4.5155,7.061,7.682,1.628,3.1679,2.4426,6.6479,2.4426,10.4363v1.8654c0,.6512-.0306,1.3917-.0888,2.2204h-36.6816v-5.7738h29.3987c-.1774-4.0858-1.5253-7.2832-4.0413-9.5915-2.5174-2.3099-5.6704-3.4641-9.4588-3.4641-2.4866,0-4.8266.5764-7.0169,1.7321-2.191,1.1543-3.9384,2.8423-5.2401,5.0626-1.3031,2.2204-1.9536,4.9879-1.9536,8.3039v2.4873c0,3.6723.666,6.7492,1.9981,9.2366s3.0779,4.3514,5.2401,5.595c2.1611,1.2436,4.4855,1.8654,6.9722,1.8654,3.1379,0,5.7286-.6953,7.7715-2.087,2.0429-1.3903,3.5375-3.2999,4.4848-5.7286h7.3719c-.77,2.7234-2.0422,5.1374-3.819,7.2377-1.7762,2.1029-3.9824,3.775-6.6165,5.0185-2.6355,1.2436-5.6998,1.8654-9.1925,1.8654v.0005Z" fill="#748293"/>
  <path d="M913.5806,312.1104v-62.1719h18.2964c7.2832,0,13.292,1.2583,18.0296,3.775,4.7363,2.5166,8.2446,6.0994,10.5249,10.7471,2.2785,4.6491,3.4194,10.2282,3.4194,16.7413,0,6.3943-1.1409,11.9014-3.4194,16.5198-2.2806,4.6184-5.7886,8.1718-10.5249,10.6578-4.7377,2.4873-10.7465,3.7309-18.0296,3.7309h-18.2964ZM921.0413,305.8935h10.6579c6.0401,0,10.8498-.9913,14.4328-2.9756,3.5821-1.9829,6.1428-4.8252,7.6826-8.5268,1.5392-3.6989,2.3092-8.0957,2.3092-13.189,0-5.2094-.77-9.681-2.3092-13.4106-1.5399-3.7309-4.1006-6.6025-7.6826-8.6161-3.5828-2.0122-8.3927-3.0197-14.4328-3.0197h-10.6579v49.738-.0002Z" fill="#748293"/>
  <path d="M981.3987,331.6499l10.9246-24.5128h-2.5759l-17.5852-39.7902h8.0816l14.5662,34.1938,15.3656-34.1938h7.7267l-28.6875,64.3028h-7.8163l.0002.0002Z" fill="#748293"/>
  <path d="M1025.8959,312.1104v-44.7635h6.7506l.3549,7.8156c1.421-2.7823,3.4487-4.9585,6.0842-6.5279,2.6341-1.5678,5.6397-2.354,9.0143-2.354,3.4935,0,6.5131.6967,9.0598,2.087,2.5446,1.3917,4.5296,3.4948,5.9508,6.3064,1.421,2.8129,2.1318,6.3811,2.1318,10.7019v26.7345h-7.4614v-25.9352c0-4.4982-.9921-7.8728-2.9749-10.1241-1.9843-2.2497-4.7825-3.376-8.3934-3.376-2.4866,0-4.707.6085-6.6613,1.8214-1.9543,1.2142-3.508,2.9611-4.6629,5.2401-1.1543,2.2806-1.7321,5.1067-1.7321,8.4813v23.8923h-7.4607l.0003.0003Z" fill="#748293"/>
  <path d="M1093.915,313.1765c-3.6123,0-6.632-.6378-9.0591-1.9095-2.4285-1.2731-4.234-2.9611-5.4175-5.0626-1.1856-2.1018-1.7769-4.3969-1.7769-6.8842,0-3.0197.7839-5.5791,2.354-7.682,1.5678-2.1018,3.7884-3.7002,6.6613-4.7959,2.8709-1.0956,6.2616-1.6439,10.1693-1.6439h11.8128c0-2.7823-.4303-5.1067-1.2877-6.9721-.8593-1.8641-2.1024-3.2706-3.7302-4.218-1.6294-.9475-3.6568-1.421-6.0842-1.421-2.8422,0-5.3003.7098-7.3718,2.1311-2.0729,1.421-3.346,3.5241-3.819,6.3064h-7.6381c.3549-3.1972,1.4344-5.8754,3.2413-8.0385,1.8061-2.1604,4.0999-3.8191,6.8836-4.9733,2.7829-1.1543,5.6845-1.7321,8.7042-1.7321,4.144,0,7.594.7553,10.3468,2.2644,2.7534,1.5105,4.8104,3.6123,6.1728,6.3064,1.3617,2.6955,2.0429,5.8767,2.0429,9.5477v27.7113h-6.6613l-.4444-7.9049c-.5926,1.2436-1.3472,2.4139-2.2645,3.508-.9186,1.0968-1.9843,2.0429-3.1972,2.8423-1.2142.7994-2.6201,1.4372-4.2194,1.9095-1.5987.4737-3.4053.7112-5.4175.7112v-.0002ZM1095.07,306.8703c2.0716,0,3.9517-.4283,5.6397-1.2876,1.6873-.858,3.1224-2.0429,4.3073-3.5535,1.1836-1.5092,2.087-3.1813,2.7089-5.0174.6219-1.8348.9327-3.7602.9327-5.7738v-.2656h-11.1909c-2.9016,0-5.2401.3415-7.0169,1.0209-1.7762.6819-3.0497,1.6294-3.819,2.8423-.77,1.2142-1.1543,2.5914-1.1543,4.1299,0,1.5987.369,2.9904,1.1101,4.174.7394,1.1863,1.8341,2.1029,3.286,2.7541,1.4505.6526,3.1826.9768,5.1962.9768h0Z" fill="#748293"/>
  <path d="M1128.4785,312.1104v-44.7635h6.7506l.4438,6.3943c1.421-2.3085,3.3305-4.1299,5.7286-5.4616,2.3985-1.3331,5.0185-1.9988,7.8604-1.9988,2.3099,0,4.3969.3108,6.2616.9327,1.8654.6219,3.5221,1.5692,4.974,2.8423,1.4506,1.2742,2.5893,2.8863,3.4193,4.8399,1.5392-2.7221,3.6709-4.8399,6.395-6.3503,2.7227-1.5092,5.595-2.2644,8.6153-2.2644,3.4927,0,6.5125.6967,9.0591,2.087,2.5452,1.3917,4.5296,3.4948,5.9508,6.3064,1.4211,2.8129,2.1317,6.3812,2.1317,10.7019v26.7345h-7.3718v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.441-3.376-7.8163-3.376-2.3092,0-4.3821.6085-6.2168,1.8214-1.8362,1.2142-3.2861,2.9756-4.3521,5.2842-1.0654,2.3099-1.5987,5.1521-1.5987,8.5268v23.8028h-7.4607v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.4115-3.376-7.7267-3.376-2.2511,0-4.2942.6085-6.1283,1.8214-1.8362,1.2142-3.2867,2.9756-4.3521,5.2842-1.0661,2.3099-1.5994,5.1521-1.5994,8.5268v23.8028h-7.4607Z" fill="#748293"/>
  <path d="M1213.3124,257.8435c-1.4806,0-2.7089-.4883-3.6856-1.4651-.9767-.9782-1.4657-2.2058-1.4657-3.6868,0-1.4785.489-2.6782,1.4657-3.5962s2.2052-1.3772,3.6856-1.3772c1.4211,0,2.6341.459,3.6417,1.3772,1.0061.918,1.5098,2.1177,1.5098,3.5962,0,1.4812-.5037,2.7089-1.5098,3.6868-1.0075.9768-2.2203,1.4651-3.6417,1.4651ZM1209.582,312.1104v-44.7635h7.4607v44.7635h-7.4607Z" fill="#748293"/>
  <path d="M1251.3547,313.1765c-4.2054,0-7.9796-.9768-11.3242-2.9316-3.346-1.9536-5.966-4.6918-7.8604-8.2159-1.8961-3.5214-2.8423-7.5927-2.8423-12.2124,0-4.7356.9461-8.851,2.8423-12.3445,1.8941-3.4935,4.5144-6.2316,7.8604-8.2159,3.3446-1.9829,7.119-2.9756,11.3242-2.9756,5.3289,0,9.7696,1.3772,13.3226,4.1299,3.5521,2.753,5.802,6.4398,6.7499,11.0582h-7.6387c-.5926-2.7823-2.0422-4.944-4.3514-6.4839-2.3099-1.5385-5.034-2.3099-8.1711-2.3099-2.5466,0-4.9006.6378-7.0617,1.9095-2.1618,1.2742-3.9076,3.1838-5.2401,5.73-1.3318,2.546-1.9981,5.6832-1.9981,9.4141,0,2.7836.3843,5.2548,1.1549,7.4166.7687,2.1617,1.8055,3.9524,3.1086,5.3737,1.3017,1.4199,2.8268,2.5019,4.5743,3.2412,1.7455.7405,3.5662,1.1102,5.4623,1.1102,2.1311,0,4.0545-.3404,5.7726-1.0209,1.7166-.6805,3.1672-1.7028,4.3521-3.0652,1.1835-1.361,1.9836-2.9597,2.3978-4.7959h7.6387c-.9482,4.5009-3.2126,8.1571-6.7947,10.9686-3.5827,2.813-8.0089,4.2194-13.2778,4.2194v.0002Z" fill="#748293"/>
  <path d="M1299.5213,313.1765c-3.6716,0-6.898-.6219-9.681-1.8654-2.7836-1.2436-4.9885-2.9756-6.6165-5.1962-1.6294-2.2204-2.62-4.8399-2.9756-7.8597h7.6381c.2962,1.5399.9175,2.9611,1.8654,4.2633.9468,1.3024,2.2344,2.3526,3.8638,3.1517,1.628.7994,3.6261,1.1997,5.9947,1.1997,2.0722,0,3.7891-.3108,5.1515-.9327,1.3617-.6219,2.3833-1.4651,3.0645-2.5314.6798-1.0661,1.0215-2.2204,1.0215-3.4641,0-1.8348-.4303-3.2265-1.2877-4.174-.8593-.9461-2.1184-1.7014-3.7749-2.2644-1.6586-.563-3.6723-1.0516-6.0395-1.4665-1.9543-.3549-3.8791-.8273-5.7733-1.421-1.8955-.5912-3.5834-1.3758-5.0626-2.3526-1.4806-.9782-2.6508-2.1763-3.508-3.5975-.8593-1.421-1.2877-3.1665-1.2877-5.2401,0-2.5446.666-4.8104,1.9981-6.7947,1.3325-1.9829,3.2113-3.5375,5.6398-4.6623,2.4274-1.125,5.2696-1.688,8.5267-1.688,4.7959,0,8.6736,1.1543,11.6346,3.4641,2.9604,2.3085,4.7077,5.6552,5.2401,10.0359h-7.3718c-.2969-2.2497-1.2583-4.0099-2.8864-5.2842-1.6294-1.2731-3.8638-1.9095-6.7061-1.9095-2.7836,0-4.8999.563-6.3503,1.6866-1.4512,1.1263-2.1758,2.6073-2.1758,4.4409,0,1.1863.3997,2.2365,1.199,3.1531.7994.9193,1.9981,1.7028,3.5969,2.354,1.5994.6526,3.5221,1.1849,5.7733,1.5987,2.9604.5337,5.6538,1.2436,8.0824,2.1324,2.4274.8873,4.3969,2.2058,5.9067,3.9524s2.2644,4.218,2.2644,7.4152c0,2.7848-.6966,5.2121-2.087,7.2832-1.3917,2.0736-3.3612,3.6868-5.9067,4.8411-2.5459,1.1543-5.537,1.7321-8.9705,1.7321l-.0003-.0002Z" fill="#748293"/>
  <path d="M1341.0487,241.6223v3.8556h-7.4553v19.4525h-4.6268v-19.4525h-7.4553v-3.8556h19.5374ZM1366.2423,264.9306l-.8568-13.7107c-.0857-1.7998-.0857-4.0276-.1718-6.5129h-.2567c-.5998,2.0565-1.2853,4.7988-1.9711,6.941l-4.1987,12.9395h-4.7988l-4.1987-13.2819c-.4288-1.7998-1.1143-4.5418-1.628-6.5986h-.2574c0,2.1422-.0857,4.3707-.1713,6.5129l-.8568,13.7107h-4.4564l1.7141-23.3083h6.941l4.0276,11.3967c.5137,1.7998.9422,3.5132,1.5423,5.9131h.0857c.5998-2.1422,1.1143-4.1133,1.628-5.8267l4.0276-11.4829h6.6842l1.7998,23.3083h-4.6275l-.0003-.0002Z" fill="#748293"/>
  <path d="M350.1959,365.6097c-4.1613.6094-8.4122.9293-12.738.9293-47.6892,0-86.4573-38.4055-86.4573-87.9931V100.4578c0-12.1113-6.6011-22.3486-16.061-27.254,3.8618-2.0109,8.2027-3.1383,12.753-3.1383,15.7168,0,28.814,13.3299,28.814,30.3923v178.0881c0,45.0782,32.0473,80.9243,73.6893,87.0638h0Z" fill="#475569"/>
  <path d="M119.683,365.6097c-4.1613.6094-8.4272.9293-12.753.9293-47.6742,0-86.4423-38.4055-86.4423-87.9931V45.5384c0-15.9961,13.0972-29.3259,28.814-29.3259,4.5505,0,8.8912,1.1272,12.753,3.1076-9.4599,4.8445-16.061,14.8534-16.061,26.2181v233.0075c0,45.0782,32.0473,80.9243,73.6893,87.0638v.0002Z" fill="#475569"/>
  <path d="M407.8392,19.3203c-9.46,4.8293-16.076,14.8534-16.076,26.2181v234.0741c0,17.0624-13.0972,30.3923-28.814,30.3923-2.0806,0-4.1313-.2286-6.0921-.6855-2.3201-.5333-4.5505-1.3558-6.6459-2.4526.045-.0152.0747-.0457.1198-.0609,2.3799-1.2492,4.5802-2.8336,6.5261-4.7073,5.7629-5.5148,9.4152-13.4824,9.4152-22.4858V45.5384c0-15.9961,13.0972-29.3259,28.814-29.3259,4.4757,0,8.7565,1.097,12.5735,3.0165.0598.0304.1198.0609.1795.0913h0Z" fill="#fbbf24"/>
  <path d="M234.9396,14.4758c-41.642,6.1394-73.6893,41.9703-73.6893,87.0485v178.0881c0,17.0624-13.0972,30.3923-28.814,30.3923-4.5505,0-8.8912-1.1272-12.753-3.1383,9.4599-4.9054,16.061-15.1429,16.061-27.254V101.5241c0-49.5875,38.7682-87.9776,86.4423-87.9776,4.326,0,8.5918.3199,12.753.9293Z" fill="#00bfa5"/>
              </svg>
              <p style={{ fontSize: '14px', color: '#64748b', textAlign: 'center', marginTop: '16px' }}>
                Icon mark + "WhiteSpace Outcome Dynamics™" wordmark. Gray band grounds the second line.
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
                <svg height="80" viewBox="0 0 1413.1225 380.0855" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '16px' }}>
                  <rect x="475.9759" y="205.0902" width="916.6589" height="152.3079" fill="#f2f2f2"/>
  <path d="M507.696,70.7172l-2.0522-6.1385c-2.5287-7.8792-4.0497-12.9734-4.5627-15.2821l-8.8137.3115v-6.9265h38.2603v5.2039c-4.3062.2199-7.348.9161-9.1437,2.1256-1.7775,1.2095-2.6752,3.1701-2.6752,5.9004,0,2.5103.5315,5.5704,1.5757,9.1252,1.8873,7.0365,4.4162,14.9156,7.5677,23.6196.5315,1.5757,1.1545,3.4448,1.8873,5.5889.733,2.1622,1.5757,4.6543,2.5103,7.4761.623,2.1988,1.411,4.6177,2.3637,7.238.9527,2.6203,1.631,4.5077,2.0522,5.662,2.1072,5.662,3.6648,10.1882,4.7275,13.5414h.3115c2.1072-7.1464,4.2512-14.0727,6.45-20.7794,3.7748-12.1854,7.9342-25.0304,12.4419-38.5903,4.7275-14.1826,7.5677-22.9966,8.5023-26.4598h5.039c1.2644,4.3062,3.4083,11.0493,6.45,20.2296,3.0418,9.1802,5.2405,15.8318,6.6149,19.918,3.1517,9.0337,5.2957,15.4287,6.45,19.2219.843,2.8402,2.199,7.0914,4.1044,12.7534,2.089,6.0835,3.7747,11.2874,5.039,15.5937h.4764c2.5103-8.1907,4.6725-14.9522,6.45-20.3211,5.3505-15.2272,9.7117-28.3471,13.065-39.378,1.1545-3.8847,2.199-7.1464,3.1517-9.7667,1.9972-5.3505,3.6282-9.1802,4.8743-11.4892l-12.6069.4765v-6.9265h31.9753v5.2039c-3.7747.4215-6.6334,1.2095-8.5756,2.3637s-3.6832,3.2251-5.204,6.2119-3.4449,7.8976-5.7538,14.7325l-8.0259,23.9311c-8.3923,25.5069-15.1722,45.2968-20.3212,59.3694h-4.7275l-29.4466-84.2533-27.7241,84.2533h-4.5627l-28.1821-83.7771.0366.0366.0008.0002Z" fill="#475569"/>
  <path d="M657.4574,148.1908c3.0418,0,5.2405-.7512,6.6149-2.2906,1.356-1.521,2.1806-3.4816,2.4371-5.9004s.3847-6.0835.3847-11.0309V54.4821c0-3.9947.165-7.4029.4764-10.2432l-11.1777.623v-6.615c6.3034,0,10.7928-.3665,13.468-1.0995s4.7459-1.7775,6.2118-3.1517h4.5627v48.027c3.6648-3.0417,7.8242-5.5339,12.4419-7.4761,4.6175-1.9423,9.0703-2.9136,13.3764-2.9136,9.0337,0,15.5937,2.8402,19.6799,8.5022,4.1044,5.662,6.1935,14.5859,6.3034,26.7713l.165,29.3c0,4.7275-.2199,8.3007-.623,10.7012l9.9133-.4765v6.45h-32.1218v-4.7275c3.0418,0,5.2224-.7512,6.5416-2.2906,1.3192-1.521,2.1072-3.4632,2.3638-5.827s.4031-6.0653.4031-11.1043v-22.0437c0-9.0337-1.411-15.7768-4.2512-20.2296-2.8402-4.4528-7.2929-6.6881-13.3949-6.6881-3.8847,0-7.751.9161-11.5808,2.7486s-6.9081,4.1778-9.217,6.9996v46.4513c0,4.0863-.2566,7.6595-.788,10.7012l9.9132-.4765v6.45h-32.1218v-4.7275l.0184.0734.0006-.0002Z" fill="#475569"/>
  <path d="M754.1527,148.1908c3.0418,0,5.2224-.7512,6.5416-2.2906,1.3192-1.521,2.1072-3.4632,2.3638-5.827s.3847-6.0653.3847-11.1043v-35.915c0-3.0417.2016-6.45.623-10.2432l-11.1777.623v-6.615c6.1935,0,10.6278-.3665,13.3031-1.0995,2.6752-.733,4.7459-1.7775,6.2118-3.1517h4.5627v63.6207c0,4.7275-.2016,8.3007-.623,10.7012l9.9133-.4765v6.45h-32.1218v-4.7275l.0182.055.0004.0002ZM763.9193,54.244c-1.6857-1.8325-2.5103-4.0129-2.5103-6.5416s.8611-4.7275,2.6021-6.615,3.7014-2.8402,5.9004-2.8402c2.4188,0,4.4344.9161,6.0653,2.7486s2.4371,4.0679,2.4371,6.6881-.8611,4.6909-2.6021,6.5416c-1.7407,1.8325-3.7563,2.7486-6.0653,2.7486s-4.1413-.9161-5.827-2.7486v.0184h-.0002Z" fill="#475569"/>
  <path d="M809.8942,126.4586l.3115-45.6633-12.1305.165v-6.7799c5.039-.11,9.3086-2.3821,12.8268-6.8531,3.5182-4.4528,6.1201-9.5283,7.7876-15.1906h5.3505v22.0437h26.4598v6.1385l-26.4598.3115c-.11,16.0701-.1833,27.1926-.2381,33.3861-.055,6.1935-.0734,9.6567-.0734,10.3897,0,7.4579.898,12.9916,2.6752,16.6198s4.8743,5.4423,9.2902,5.4423c2.7302,0,5.4239-.843,8.1175-2.5287,2.6752-1.6857,5.0208-3.9947,6.9998-6.9265l4.2512,3.4632c-4.0863,6.0835-8.1357,10.1148-12.1305,12.0389-3.9947,1.9422-7.8792,2.9136-11.6539,2.9136-14.3844,0-21.5306-9.6567-21.4206-28.9701h.0366-.0002Z" fill="#475569"/>
  <path d="M881.9439,150.3164c-5.827-3.4083-10.4263-8.3007-13.7796-14.6407-3.3533-6.3584-5.039-13.6696-5.039-21.9705,0-7.348,1.6857-14.256,5.039-20.706,3.3533-6.45,8.0626-11.6358,14.0911-15.5203,6.0285-3.8847,12.8818-5.827,20.5595-5.827,5.9919,0,11.3974,1.3192,16.2167,3.9397s8.6672,6.5416,11.489,11.7273c2.8218,5.1858,4.2512,11.5808,4.2512,19.1303l-55.43.9529c-.11,12.6069,1.9607,22.4102,6.2118,29.4466,4.2512,7.0365,10.8478,10.5547,19.7715,10.5547,4.8193,0,9.7849-1.2645,14.8791-3.7748,5.094-2.5287,8.9971-5.607,11.7273-9.2902l3.7747,3.1517c-3.9947,6.0835-9.162,10.6097-15.5203,13.5414-6.3584,2.9318-12.5701,4.4159-18.6538,4.4159-7.238,0-13.7796-1.7041-19.6065-5.1124l.0182-.0184v-.0005ZM919.9661,100.7868c0-6.3034-1.411-11.7089-4.2512-16.2167s-7.0914-6.7799-12.7534-6.7799c-13.0283,0-20.7426,7.6595-23.1431,22.9966h40.166-.0184.0001Z" fill="#475569"/>
  <path d="M972.5006,153.3947c-4.984-1.356-9.3636-3.3533-13.1566-5.9919l.788,6.7799h-8.1907l-.9345-33.551h6.1385c.5314,9.0337,3.6282,15.9786,9.2902,20.871,5.662,4.8743,12.8634,7.3296,21.5674,7.3296,6.395,0,11.7823-1.7591,16.1433-5.2773,4.3612-3.5182,6.5416-8.3191,6.5416-14.4026,0-4.5077-1.2277-8.3741-3.7014-11.5808-2.4737-3.2067-5.5155-5.882-9.1253-8.026-3.6282-2.1438-8.5388-4.6543-14.7325-7.4761-7.0365-3.3533-12.6253-6.3034-16.7663-8.8137-4.1413-2.5287-7.696-5.8454-10.6278-10.0048-2.9318-4.1413-4.4162-9.2718-4.4162-15.3555,0-4.1962.9711-8.3922,2.9136-12.6069,1.9422-4.1962,5.2957-7.7694,10.0782-10.7012s11.1043-4.416,18.9835-4.416c4.7277,0,9.4734.6046,14.256,1.8141,4.7825,1.2095,9.162,3.2799,13.1566,6.2119l-.623-6.7799h8.0259v34.6505h-5.6622c-.5314-8.3007-3.1699-15.3005-7.9526-21.0175-4.7825-5.717-11.4708-8.5756-20.083-8.5756-6.3034,0-11.2327,1.7591-14.8057,5.2773-3.5732,3.5182-5.3505,7.8976-5.3505,13.1565,0,4.1962,1.2094,7.8242,3.6282,10.8662s5.3505,5.5704,8.8137,7.5677,8.3373,4.4709,14.6407,7.4029c7.1464,3.2617,12.8818,6.1935,17.2428,8.8137,4.3612,2.6203,8.0626,6.0653,11.1043,10.3163s4.5627,9.4736,4.5627,15.667-1.4476,11.0859-4.3244,15.5937c-2.8952,4.5078-7.1096,8.026-12.68,10.5547s-12.1854,3.7748-19.8448,3.7748c-4.9292,0-9.8948-.678-14.8791-2.0522l-.0182-.0184-.0005-.0002Z" fill="#475569"/>
  <path d="M1036.5062,188.3384c3.0418,0,5.2224-.7696,6.5416-2.2906s2.0706-3.4083,2.2905-5.662c.2016-2.2538.3665-6.0103.4764-11.2509l.3115-76.0626c0-4.416.2016-7.8242.623-10.2432l-11.1775.623v-6.615c6.1935,0,10.4447-.3481,12.7535-1.0261s4.1962-1.7591,5.6622-3.2251h4.7277c.4215,5.149.623,7.971.623,8.5022,3.1517-2.8402,6.9265-5.1124,11.3425-6.8531s8.759-2.6021,13.065-2.6021c6.1935,0,11.9105,1.5942,17.1694,4.8009,5.2405,3.2067,9.4734,7.7694,12.68,13.7064,3.2067,5.9369,4.8009,12.79,4.8009,20.5595,0,8.7222-1.8325,16.4548-5.5155,23.2347-3.683,6.7799-8.5756,12.0389-14.7325,15.8318-6.1385,3.7748-12.79,5.662-19.9181,5.662s-13.5414-1.7407-18.892-5.2039v26.1483c0,4.7275-.2199,8.3007-.623,10.7012l9.9132-.4765v6.45h-32.1218v-4.7275.0184h-.0001ZM1090.7633,144.5626c3.6282-3.0417,6.4318-7.293,8.429-12.7534,1.9974-5.4605,2.9868-11.6539,2.9868-18.5804,0-9.4552-2.0156-17.4443-6.0653-24.0227-4.0497-6.56-10.0598-9.8398-18.0307-9.8398-3.4632,0-6.8347.843-10.0782,2.5103-3.2617,1.6857-6.0835,3.7748-8.5023,6.3034.11.733.165,3.9397.165,9.6017l-.165,45.2052c5.3505,4.0863,11.4892,6.1385,18.4339,6.1385,4.9292,0,9.217-1.521,12.8268-4.5627h0Z" fill="#475569"/>
  <path d="M1137.2145,150.243c-4.0497-3.4632-6.0653-7.971-6.0653-13.5414,0-6.0835,2.4371-11.2325,7.3296-15.4287,4.8741-4.1962,11.0311-7.3296,18.4338-9.3636,7.4027-2.0522,14.824-3.0233,22.2818-2.9136v-9.7667c0-6.8165-1.0077-12.1488-2.9868-15.9786-1.9974-3.8297-6.2485-5.7538-12.7535-5.7538-3.2617,0-6.3584.678-9.2902,2.0522-2.9502,1.3742-5.0942,3.4083-6.45,6.1385,1.356,1.466,2.0522,3.4632,2.0522,5.9919,0,1.5757-.5865,3.0783-1.7407,4.4893s-2.8402,2.1256-5.039,2.1256-3.9397-.7146-5.204-2.1256-1.8875-3.2799-1.8875-5.5889c0-3.4632,1.3377-6.6334,4.0129-9.5283,2.6752-2.8952,6.395-5.1674,11.1774-6.8531s10.0966-2.5103,15.9784-2.5103c8.8138,0,15.3187,2.3456,19.5334,6.9996,4.1962,4.6727,6.2485,12.0389,6.1385,22.117l-.1649,35.4385c0,3.3533-.2199,6.9265-.623,10.7012l11.1775-.623v6.615h-22.5202c-.3115-1.5757-.678-4.5627-1.0995-8.9787-7.6594,7.6595-15.9052,11.489-24.719,11.489-7.6594,0-13.523-1.7407-17.5543-5.2039h-.0178v.0002ZM1169.2631,144.1777c3.2617-1.521,6.5599-3.8663,9.9133-6.9996-.11-1.5757-.1649-4.2512-.1649-8.026l.1649-14.8057c-8.6122.3115-16.2717,2.0706-22.9965,5.2773-6.725,3.2067-10.0782,8.1175-10.0782,14.7325,0,3.8847,1.1545,6.8715,3.4632,8.9787s5.2405,3.1517,8.8138,3.1517c3.9947,0,7.6045-.7696,10.8662-2.2906l.0184-.0184h-.0001Z" fill="#475569"/>
  <path d="M1233.5982,150.5545c-5.937-3.2617-10.6279-7.9342-14.0911-14.0179s-5.2039-13.2849-5.2039-21.5672c0-7.348,1.759-14.3476,5.2773-21.0175,3.5182-6.6699,8.3925-12.0389,14.6407-16.1433,6.2485-4.0863,13.3031-6.1385,21.1824-6.1385,5.6622,0,10.7013.898,15.1172,2.6752,4.4159,1.7957,7.8426,4.1413,10.3163,7.0914,2.4737,2.9318,3.7014,6.1385,3.7014,9.6017,0,2.4187-.678,4.416-2.0522,5.9919-1.3742,1.5757-3.2617,2.3637-5.6622,2.3637s-4.0497-.7512-5.2039-2.2906c-1.1545-1.521-1.7407-3.1151-1.7407-4.8009,0-2.6203.788-4.7275,2.3637-6.3034-1.1545-3.2617-3.3898-5.4789-6.6884-6.6881-3.2983-1.2095-6.5966-1.8141-9.8399-1.8141-4.8375,0-9.162,1.3192-12.9917,3.9397s-6.8531,6.45-9.0521,11.4892c-2.1989,5.039-3.2983,11.0859-3.2983,18.1039s1.1176,13.2849,3.3898,18.7454c2.2537,5.4605,5.4239,9.7483,9.5286,12.8268,4.1044,3.0967,8.8138,4.6543,14.1826,4.6543,4.7277,0,9.3635-1.2826,13.9445-3.8663,4.5628-2.5653,8.1541-5.8088,10.7928-9.6933l4.1044,3.1517c-3.8848,6.0835-8.9053,10.7012-15.044,13.853-6.1385,3.1517-12.1488,4.7275-18.0307,4.7275-7.1464,0-13.6696-1.6307-19.6066-4.8743h-.0362l.0003-.0002Z" fill="#475569"/>
  <path d="M1317.0639,150.3164c-5.827-3.4083-10.4263-8.3007-13.7796-14.6407-3.3533-6.3584-5.039-13.6696-5.039-21.9705,0-7.348,1.6857-14.256,5.039-20.706,3.3533-6.45,8.0626-11.6358,14.0911-15.5203,6.0285-3.8847,12.8818-5.827,20.5595-5.827,5.9919,0,11.3974,1.3192,16.2166,3.9397s8.6672,6.5416,11.4893,11.7273,4.2512,11.5808,4.2512,19.1303l-55.43.9529c-.11,12.6069,1.9607,22.4102,6.2118,29.4466,4.2512,7.0365,10.8477,10.5547,19.7715,10.5547,4.8192,0,9.7851-1.2645,14.8791-3.7748,5.0942-2.5287,8.9971-5.607,11.7274-9.2902l3.7748,3.1517c-3.9947,6.0835-9.162,10.6097-15.5203,13.5414-6.3584,2.9318-12.5701,4.4159-18.6538,4.4159-7.238,0-13.7796-1.7041-19.6066-5.1124l.0184-.0184-.0003-.0005ZM1355.0861,100.7868c0-6.3034-1.411-11.7089-4.2512-16.2167s-7.0914-6.7799-12.7535-6.7799c-13.0283,0-20.7427,7.6595-23.1431,22.9966h40.1661-.0183Z" fill="#475569"/>
  <path d="M531.3174,313.1765c-5.9808,0-11.2349-1.3465-15.7645-4.042-4.5296-2.6928-8.0537-6.4532-10.5697-11.2795-2.5173-4.8252-3.7743-10.4363-3.7743-16.8306,0-6.3357,1.257-11.9148,3.7743-16.7427,2.516-4.8252,6.0401-8.5988,10.5697-11.3236,4.5296-2.7221,9.7837-4.0858,15.7645-4.0858,6.0983,0,11.4131,1.3637,15.9426,4.0858,4.5303,2.7248,8.0385,6.4984,10.5249,11.3236,2.4873,4.8279,3.7302,10.407,3.7302,16.7427,0,6.3943-1.2429,12.0055-3.7302,16.8306-2.4867,4.8266-5.9947,8.5867-10.5249,11.2795-4.5296,2.6955-9.8444,4.042-15.9426,4.042ZM531.3174,306.6033c4.4996,0,8.452-1.0209,11.8573-3.0638,3.4039-2.0429,6.0394-4.9733,7.9049-8.7924,1.8648-3.8204,2.7975-8.3934,2.7975-13.7228s-.9327-9.9026-2.7975-13.7227c-1.8654-3.8191-4.5009-6.7347-7.9049-8.7483-3.4053-2.0122-7.3577-3.0197-11.8573-3.0197-4.4409,0-8.3638,1.0075-11.768,3.0197-3.4053,2.0136-6.0394,4.9292-7.9049,8.7483-1.8648,3.8204-2.7975,8.3934-2.7975,13.7227s.9327,9.9026,2.7975,13.7228c1.8654,3.8191,4.4996,6.7492,7.9049,8.7924,3.4039,2.0429,7.3271,3.0638,11.768,3.0638Z" fill="#748293"/>
  <path d="M588.2486,313.1765c-3.4346,0-6.4391-.6819-9.0143-2.0429-2.5759-1.361-4.5602-3.4641-5.9508-6.3064-1.3924-2.8423-2.0877-6.3943-2.0877-10.6578v-26.8225h7.4607v26.0234c0,4.4409.9775,7.7863,2.9311,10.0359,1.9543,2.2511,4.7077,3.3746,8.2605,3.3746,2.4866,0,4.7363-.6058,6.7499-1.82,2.0122-1.2129,3.5969-2.9597,4.7518-5.2401,1.1543-2.2792,1.7314-5.1067,1.7314-8.4827v-23.8909h7.4607v44.7635h-6.7499l-.4438-7.8156c-1.3631,2.7836-3.3753,4.9599-6.0394,6.5279-2.6648,1.5678-5.6845,2.354-9.0598,2.354l-.0003-.0005Z" fill="#748293"/>
  <path d="M640.4725,312.1104c-2.6641,0-4.974-.4138-6.9274-1.2436-1.9543-.8287-3.4501-2.2338-4.4855-4.218-1.0368-1.9843-1.5539-4.6636-1.5539-8.0385v-24.957h-7.8163v-6.3064h7.8163l.9768-10.8367h6.4839v10.8367h12.967v6.3064h-12.967v24.957c0,2.7836.5617,4.6622,1.6873,5.6391,1.1243.9782,3.1086,1.4665,5.9508,1.4665h4.7965v6.3943h-6.9281l-.0005.0002Z" fill="#748293"/>
  <path d="M676.6218,313.1765c-4.2053,0-7.9796-.9768-11.3242-2.9316-3.346-1.9536-5.966-4.6918-7.8604-8.2159-1.8961-3.5214-2.8422-7.5927-2.8422-12.2124,0-4.7356.9462-8.851,2.8422-12.3445,1.8941-3.4935,4.5143-6.2316,7.8604-8.2159,3.3446-1.9829,7.1189-2.9756,11.3242-2.9756,5.3289,0,9.7697,1.3772,13.3226,4.1299,3.5521,2.753,5.802,6.4398,6.7499,11.0582h-7.6388c-.5926-2.7823-2.0422-4.944-4.3514-6.4839-2.3099-1.5385-5.034-2.3099-8.1711-2.3099-2.5466,0-4.9006.6378-7.0617,1.9095-2.1617,1.2742-3.9076,3.1838-5.2401,5.73-1.3317,2.546-1.9981,5.6832-1.9981,9.4141,0,2.7836.3842,5.2548,1.1549,7.4166.7686,2.1617,1.8054,3.9524,3.1086,5.3737,1.3017,1.4199,2.8268,2.5019,4.5744,3.2412,1.7455.7405,3.5661,1.1102,5.4623,1.1102,2.1311,0,4.0544-.3404,5.7726-1.0209,1.7166-.6805,3.1672-1.7028,4.3521-3.0652,1.1836-1.361,1.9836-2.9597,2.3978-4.7959h7.6388c-.9482,4.5009-3.2126,8.1571-6.7947,10.9686-3.5828,2.813-8.009,4.2194-13.2778,4.2194l-.0003.0002Z" fill="#748293"/>
  <path d="M727.2459,313.1765c-4.1453,0-7.8755-.9634-11.1909-2.8863-3.3167-1.9243-5.9212-4.6477-7.8156-8.1718-1.8961-3.5228-2.8422-7.6234-2.8422-12.3017,0-4.7959.9613-8.955,2.8863-12.4778,1.9236-3.5228,4.5589-6.2462,7.9049-8.1718,3.3446-1.9229,7.0903-2.8863,11.2356-2.8863,4.2628,0,8.0378.9634,11.3236,2.8863,3.2867,1.9254,5.8913,4.6491,7.8163,8.1718,1.9236,3.5228,2.8863,7.6527,2.8863,12.3899s-.9768,8.8669-2.9311,12.3899c-1.9536,3.5241-4.5889,6.2476-7.9042,8.1718-3.3167,1.9229-7.1055,2.8863-11.369,2.8863v-.0002ZM727.3352,306.7808c2.5446,0,4.9138-.6351,7.1051-1.9095,2.1897-1.2717,3.9665-3.1813,5.3289-5.7286,1.3617-2.5446,2.0429-5.6845,2.0429-9.4141,0-3.7884-.666-6.9415-1.9981-9.4595-1.3324-2.5153-3.0797-4.4101-5.2401-5.6845-2.1624-1.2717-4.545-1.9095-7.1496-1.9095-2.4873,0-4.8404.6378-7.061,1.9095-2.2204,1.2742-3.9972,3.1692-5.3296,5.6845-1.3317,2.518-1.9981,5.6711-1.9981,9.4595,0,3.7295.6664,6.8694,1.9981,9.4141,1.3324,2.5473,3.0783,4.4569,5.2401,5.7286,2.1611,1.2742,4.5148,1.9095,7.0617,1.9095h-.0003Z" fill="#748293"/>
  <path d="M759.929,312.1104v-44.7635h6.7506l.4438,6.3943c1.421-2.3085,3.3305-4.1299,5.7286-5.4616,2.3985-1.3331,5.0186-1.9988,7.8604-1.9988,2.3099,0,4.3968.3108,6.2616.9327,1.8655.6219,3.5221,1.5692,4.974,2.8423,1.4505,1.2742,2.5893,2.8863,3.4194,4.8399,1.5392-2.7221,3.6709-4.8399,6.395-6.3503,2.7227-1.5092,5.595-2.2644,8.6153-2.2644,3.4928,0,6.5125.6967,9.0591,2.087,2.5453,1.3917,4.5296,3.4948,5.9508,6.3064,1.421,2.8129,2.1318,6.3812,2.1318,10.7019v26.7345h-7.3718v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.4409-3.376-7.8163-3.376-2.3092,0-4.3821.6085-6.2169,1.8214-1.8362,1.2142-3.286,2.9756-4.3521,5.2842-1.0654,2.3099-1.5987,5.1521-1.5987,8.5268v23.8028h-7.4607v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.4114-3.376-7.7267-3.376-2.251,0-4.2942.6085-6.1283,1.8214-1.8362,1.2142-3.2867,2.9756-4.3521,5.2842-1.0661,2.3099-1.5994,5.1521-1.5994,8.5268v23.8028h-7.4607Z" fill="#748293"/>
  <path d="M858.6933,313.1765c-4.1453,0-7.8462-.9768-11.1021-2.9316-3.2572-1.9536-5.8041-4.6918-7.6381-8.2159-1.8362-3.5214-2.7534-7.622-2.7534-12.3004,0-4.737.9021-8.851,2.7089-12.3458,1.8054-3.4935,4.3521-6.2169,7.6381-8.1705,3.2867-1.955,7.061-2.9315,11.3242-2.9315,4.3815,0,8.1119.9768,11.1909,2.9315,3.0783,1.9536,5.4316,4.5155,7.061,7.682,1.628,3.1679,2.4426,6.6479,2.4426,10.4363v1.8654c0,.6512-.0306,1.3917-.0888,2.2204h-36.6816v-5.7738h29.3987c-.1774-4.0858-1.5253-7.2832-4.0413-9.5915-2.5174-2.3099-5.6704-3.4641-9.4588-3.4641-2.4866,0-4.8266.5764-7.0169,1.7321-2.191,1.1543-3.9384,2.8423-5.2401,5.0626-1.3031,2.2204-1.9536,4.9879-1.9536,8.3039v2.4873c0,3.6723.666,6.7492,1.9981,9.2366s3.0779,4.3514,5.2401,5.595c2.1611,1.2436,4.4855,1.8654,6.9722,1.8654,3.1379,0,5.7286-.6953,7.7715-2.087,2.0429-1.3903,3.5375-3.2999,4.4848-5.7286h7.3719c-.77,2.7234-2.0422,5.1374-3.819,7.2377-1.7762,2.1029-3.9824,3.775-6.6165,5.0185-2.6355,1.2436-5.6998,1.8654-9.1925,1.8654v.0005Z" fill="#748293"/>
  <path d="M913.5806,312.1104v-62.1719h18.2964c7.2832,0,13.292,1.2583,18.0296,3.775,4.7363,2.5166,8.2446,6.0994,10.5249,10.7471,2.2785,4.6491,3.4194,10.2282,3.4194,16.7413,0,6.3943-1.1409,11.9014-3.4194,16.5198-2.2806,4.6184-5.7886,8.1718-10.5249,10.6578-4.7377,2.4873-10.7465,3.7309-18.0296,3.7309h-18.2964ZM921.0413,305.8935h10.6579c6.0401,0,10.8498-.9913,14.4328-2.9756,3.5821-1.9829,6.1428-4.8252,7.6826-8.5268,1.5392-3.6989,2.3092-8.0957,2.3092-13.189,0-5.2094-.77-9.681-2.3092-13.4106-1.5399-3.7309-4.1006-6.6025-7.6826-8.6161-3.5828-2.0122-8.3927-3.0197-14.4328-3.0197h-10.6579v49.738-.0002Z" fill="#748293"/>
  <path d="M981.3987,331.6499l10.9246-24.5128h-2.5759l-17.5852-39.7902h8.0816l14.5662,34.1938,15.3656-34.1938h7.7267l-28.6875,64.3028h-7.8163l.0002.0002Z" fill="#748293"/>
  <path d="M1025.8959,312.1104v-44.7635h6.7506l.3549,7.8156c1.421-2.7823,3.4487-4.9585,6.0842-6.5279,2.6341-1.5678,5.6397-2.354,9.0143-2.354,3.4935,0,6.5131.6967,9.0598,2.087,2.5446,1.3917,4.5296,3.4948,5.9508,6.3064,1.421,2.8129,2.1318,6.3811,2.1318,10.7019v26.7345h-7.4614v-25.9352c0-4.4982-.9921-7.8728-2.9749-10.1241-1.9843-2.2497-4.7825-3.376-8.3934-3.376-2.4866,0-4.707.6085-6.6613,1.8214-1.9543,1.2142-3.508,2.9611-4.6629,5.2401-1.1543,2.2806-1.7321,5.1067-1.7321,8.4813v23.8923h-7.4607l.0003.0003Z" fill="#748293"/>
  <path d="M1093.915,313.1765c-3.6123,0-6.632-.6378-9.0591-1.9095-2.4285-1.2731-4.234-2.9611-5.4175-5.0626-1.1856-2.1018-1.7769-4.3969-1.7769-6.8842,0-3.0197.7839-5.5791,2.354-7.682,1.5678-2.1018,3.7884-3.7002,6.6613-4.7959,2.8709-1.0956,6.2616-1.6439,10.1693-1.6439h11.8128c0-2.7823-.4303-5.1067-1.2877-6.9721-.8593-1.8641-2.1024-3.2706-3.7302-4.218-1.6294-.9475-3.6568-1.421-6.0842-1.421-2.8422,0-5.3003.7098-7.3718,2.1311-2.0729,1.421-3.346,3.5241-3.819,6.3064h-7.6381c.3549-3.1972,1.4344-5.8754,3.2413-8.0385,1.8061-2.1604,4.0999-3.8191,6.8836-4.9733,2.7829-1.1543,5.6845-1.7321,8.7042-1.7321,4.144,0,7.594.7553,10.3468,2.2644,2.7534,1.5105,4.8104,3.6123,6.1728,6.3064,1.3617,2.6955,2.0429,5.8767,2.0429,9.5477v27.7113h-6.6613l-.4444-7.9049c-.5926,1.2436-1.3472,2.4139-2.2645,3.508-.9186,1.0968-1.9843,2.0429-3.1972,2.8423-1.2142.7994-2.6201,1.4372-4.2194,1.9095-1.5987.4737-3.4053.7112-5.4175.7112v-.0002ZM1095.07,306.8703c2.0716,0,3.9517-.4283,5.6397-1.2876,1.6873-.858,3.1224-2.0429,4.3073-3.5535,1.1836-1.5092,2.087-3.1813,2.7089-5.0174.6219-1.8348.9327-3.7602.9327-5.7738v-.2656h-11.1909c-2.9016,0-5.2401.3415-7.0169,1.0209-1.7762.6819-3.0497,1.6294-3.819,2.8423-.77,1.2142-1.1543,2.5914-1.1543,4.1299,0,1.5987.369,2.9904,1.1101,4.174.7394,1.1863,1.8341,2.1029,3.286,2.7541,1.4505.6526,3.1826.9768,5.1962.9768h0Z" fill="#748293"/>
  <path d="M1128.4785,312.1104v-44.7635h6.7506l.4438,6.3943c1.421-2.3085,3.3305-4.1299,5.7286-5.4616,2.3985-1.3331,5.0185-1.9988,7.8604-1.9988,2.3099,0,4.3969.3108,6.2616.9327,1.8654.6219,3.5221,1.5692,4.974,2.8423,1.4506,1.2742,2.5893,2.8863,3.4193,4.8399,1.5392-2.7221,3.6709-4.8399,6.395-6.3503,2.7227-1.5092,5.595-2.2644,8.6153-2.2644,3.4927,0,6.5125.6967,9.0591,2.087,2.5452,1.3917,4.5296,3.4948,5.9508,6.3064,1.4211,2.8129,2.1317,6.3812,2.1317,10.7019v26.7345h-7.3718v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.441-3.376-7.8163-3.376-2.3092,0-4.3821.6085-6.2168,1.8214-1.8362,1.2142-3.2861,2.9756-4.3521,5.2842-1.0654,2.3099-1.5987,5.1521-1.5987,8.5268v23.8028h-7.4607v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.4115-3.376-7.7267-3.376-2.2511,0-4.2942.6085-6.1283,1.8214-1.8362,1.2142-3.2867,2.9756-4.3521,5.2842-1.0661,2.3099-1.5994,5.1521-1.5994,8.5268v23.8028h-7.4607Z" fill="#748293"/>
  <path d="M1213.3124,257.8435c-1.4806,0-2.7089-.4883-3.6856-1.4651-.9767-.9782-1.4657-2.2058-1.4657-3.6868,0-1.4785.489-2.6782,1.4657-3.5962s2.2052-1.3772,3.6856-1.3772c1.4211,0,2.6341.459,3.6417,1.3772,1.0061.918,1.5098,2.1177,1.5098,3.5962,0,1.4812-.5037,2.7089-1.5098,3.6868-1.0075.9768-2.2203,1.4651-3.6417,1.4651ZM1209.582,312.1104v-44.7635h7.4607v44.7635h-7.4607Z" fill="#748293"/>
  <path d="M1251.3547,313.1765c-4.2054,0-7.9796-.9768-11.3242-2.9316-3.346-1.9536-5.966-4.6918-7.8604-8.2159-1.8961-3.5214-2.8423-7.5927-2.8423-12.2124,0-4.7356.9461-8.851,2.8423-12.3445,1.8941-3.4935,4.5144-6.2316,7.8604-8.2159,3.3446-1.9829,7.119-2.9756,11.3242-2.9756,5.3289,0,9.7696,1.3772,13.3226,4.1299,3.5521,2.753,5.802,6.4398,6.7499,11.0582h-7.6387c-.5926-2.7823-2.0422-4.944-4.3514-6.4839-2.3099-1.5385-5.034-2.3099-8.1711-2.3099-2.5466,0-4.9006.6378-7.0617,1.9095-2.1618,1.2742-3.9076,3.1838-5.2401,5.73-1.3318,2.546-1.9981,5.6832-1.9981,9.4141,0,2.7836.3843,5.2548,1.1549,7.4166.7687,2.1617,1.8055,3.9524,3.1086,5.3737,1.3017,1.4199,2.8268,2.5019,4.5743,3.2412,1.7455.7405,3.5662,1.1102,5.4623,1.1102,2.1311,0,4.0545-.3404,5.7726-1.0209,1.7166-.6805,3.1672-1.7028,4.3521-3.0652,1.1835-1.361,1.9836-2.9597,2.3978-4.7959h7.6387c-.9482,4.5009-3.2126,8.1571-6.7947,10.9686-3.5827,2.813-8.0089,4.2194-13.2778,4.2194v.0002Z" fill="#748293"/>
  <path d="M1299.5213,313.1765c-3.6716,0-6.898-.6219-9.681-1.8654-2.7836-1.2436-4.9885-2.9756-6.6165-5.1962-1.6294-2.2204-2.62-4.8399-2.9756-7.8597h7.6381c.2962,1.5399.9175,2.9611,1.8654,4.2633.9468,1.3024,2.2344,2.3526,3.8638,3.1517,1.628.7994,3.6261,1.1997,5.9947,1.1997,2.0722,0,3.7891-.3108,5.1515-.9327,1.3617-.6219,2.3833-1.4651,3.0645-2.5314.6798-1.0661,1.0215-2.2204,1.0215-3.4641,0-1.8348-.4303-3.2265-1.2877-4.174-.8593-.9461-2.1184-1.7014-3.7749-2.2644-1.6586-.563-3.6723-1.0516-6.0395-1.4665-1.9543-.3549-3.8791-.8273-5.7733-1.421-1.8955-.5912-3.5834-1.3758-5.0626-2.3526-1.4806-.9782-2.6508-2.1763-3.508-3.5975-.8593-1.421-1.2877-3.1665-1.2877-5.2401,0-2.5446.666-4.8104,1.9981-6.7947,1.3325-1.9829,3.2113-3.5375,5.6398-4.6623,2.4274-1.125,5.2696-1.688,8.5267-1.688,4.7959,0,8.6736,1.1543,11.6346,3.4641,2.9604,2.3085,4.7077,5.6552,5.2401,10.0359h-7.3718c-.2969-2.2497-1.2583-4.0099-2.8864-5.2842-1.6294-1.2731-3.8638-1.9095-6.7061-1.9095-2.7836,0-4.8999.563-6.3503,1.6866-1.4512,1.1263-2.1758,2.6073-2.1758,4.4409,0,1.1863.3997,2.2365,1.199,3.1531.7994.9193,1.9981,1.7028,3.5969,2.354,1.5994.6526,3.5221,1.1849,5.7733,1.5987,2.9604.5337,5.6538,1.2436,8.0824,2.1324,2.4274.8873,4.3969,2.2058,5.9067,3.9524s2.2644,4.218,2.2644,7.4152c0,2.7848-.6966,5.2121-2.087,7.2832-1.3917,2.0736-3.3612,3.6868-5.9067,4.8411-2.5459,1.1543-5.537,1.7321-8.9705,1.7321l-.0003-.0002Z" fill="#748293"/>
  <path d="M1341.0487,241.6223v3.8556h-7.4553v19.4525h-4.6268v-19.4525h-7.4553v-3.8556h19.5374ZM1366.2423,264.9306l-.8568-13.7107c-.0857-1.7998-.0857-4.0276-.1718-6.5129h-.2567c-.5998,2.0565-1.2853,4.7988-1.9711,6.941l-4.1987,12.9395h-4.7988l-4.1987-13.2819c-.4288-1.7998-1.1143-4.5418-1.628-6.5986h-.2574c0,2.1422-.0857,4.3707-.1713,6.5129l-.8568,13.7107h-4.4564l1.7141-23.3083h6.941l4.0276,11.3967c.5137,1.7998.9422,3.5132,1.5423,5.9131h.0857c.5998-2.1422,1.1143-4.1133,1.628-5.8267l4.0276-11.4829h6.6842l1.7998,23.3083h-4.6275l-.0003-.0002Z" fill="#748293"/>
  <path d="M350.1959,365.6097c-4.1613.6094-8.4122.9293-12.738.9293-47.6892,0-86.4573-38.4055-86.4573-87.9931V100.4578c0-12.1113-6.6011-22.3486-16.061-27.254,3.8618-2.0109,8.2027-3.1383,12.753-3.1383,15.7168,0,28.814,13.3299,28.814,30.3923v178.0881c0,45.0782,32.0473,80.9243,73.6893,87.0638h0Z" fill="#475569"/>
  <path d="M119.683,365.6097c-4.1613.6094-8.4272.9293-12.753.9293-47.6742,0-86.4423-38.4055-86.4423-87.9931V45.5384c0-15.9961,13.0972-29.3259,28.814-29.3259,4.5505,0,8.8912,1.1272,12.753,3.1076-9.4599,4.8445-16.061,14.8534-16.061,26.2181v233.0075c0,45.0782,32.0473,80.9243,73.6893,87.0638v.0002Z" fill="#475569"/>
  <path d="M407.8392,19.3203c-9.46,4.8293-16.076,14.8534-16.076,26.2181v234.0741c0,17.0624-13.0972,30.3923-28.814,30.3923-2.0806,0-4.1313-.2286-6.0921-.6855-2.3201-.5333-4.5505-1.3558-6.6459-2.4526.045-.0152.0747-.0457.1198-.0609,2.3799-1.2492,4.5802-2.8336,6.5261-4.7073,5.7629-5.5148,9.4152-13.4824,9.4152-22.4858V45.5384c0-15.9961,13.0972-29.3259,28.814-29.3259,4.4757,0,8.7565,1.097,12.5735,3.0165.0598.0304.1198.0609.1795.0913h0Z" fill="#fbbf24"/>
  <path d="M234.9396,14.4758c-41.642,6.1394-73.6893,41.9703-73.6893,87.0485v178.0881c0,17.0624-13.0972,30.3923-28.814,30.3923-4.5505,0-8.8912-1.1272-12.753-3.1383,9.4599-4.9054,16.061-15.1429,16.061-27.254V101.5241c0-49.5875,38.7682-87.9776,86.4423-87.9776,4.326,0,8.5918.3199,12.753.9293Z" fill="#00bfa5"/>
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
                  <text
                    x="314.4"
                    y="484"
                    textAnchor="middle"
                    fontFamily="'DM Sans', sans-serif"
                    fontSize="52"
                    fontWeight="400"
                    letterSpacing="1"
                    fill="#475569"
                  >Outcome Dynamics™</text>
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
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '24px' }}>Messaging Dimensions</h3>
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
              A highly selective program for consultants who want to master the Value Collaborator System™. Below: how the brand system creates a cohesive, modular training experience.
            </p>

            {/* Program header card */}
            <div className="card-white">
              <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <Icon size={48} />
                  <div>
                    <h2>WhiteSpace Clarity Certification</h2>
                    <p>Master the Value Collaborator System™. Transform how organizations see their assets.</p>
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
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Core dimensions mastered</p>
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
                  { num: '03', title: 'Realization', subtitle: 'Value Conversion & Measurement', color: '#2563eb', progress: 0 },
                  { num: '04', title: 'Validation', subtitle: 'Outcomes Prediction & Scale', color: '#fbbf24', progress: 0 },
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
                      <p style={{ fontSize: '11px', color: '#64748b', marginTop: '8px', margin: '8px 0 0 0' }}>Dimension: Systemization</p>
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
                {/* Dimension progress bars */}
                {[
                  { label: 'Expectation', color: '#475569', pct: 100 },
                  { label: 'Systemization', color: '#00bfa5', pct: 65 },
                  { label: 'Realization', color: '#2563eb', pct: 0 },
                  { label: 'Validation', color: '#fbbf24', pct: 0 },
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
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '16px' }}>Three-dimension divider for section breaks</p>
                </div>
                {/* Pillar accent chips */}
                <div className="box" style={{ padding: '32px', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '20px' }}>Dimension Tags</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#475569', background: '#47556914', padding: '6px 14px', borderRadius: '20px' }}>Expectation</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#00bfa5', background: '#00bfa514', padding: '6px 14px', borderRadius: '20px' }}>Systemization</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#2563eb', background: '#2563eb14', padding: '6px 14px', borderRadius: '20px' }}>Realization</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#d97706', background: '#fbbf2414', padding: '6px 14px', borderRadius: '20px' }}>Validation</span>
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
                    <p style={{ fontSize: '12px', color: '#64748b', textAlign: 'left', marginTop: '8px' }}>- Bill Adams, Outcome Dynamics™</p>
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
                      <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '8px', fontStyle: 'italic' }}>WhiteSpace Outcome Dynamics™ - consultwhitespace.com</p>
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
                      <p style={{ fontSize: '12px', color: '#475569', margin: '0 0 10px 0' }}>Founder, Value Collaborator System™</p>
                      <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.8' }}>
                        bill@consultwhitespace.com<br/>
                        (555) 987-6543
                      </div>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
                        <div style={{ height: '2px', width: '16px', background: '#475569', borderRadius: '1px' }}></div>
                        <div style={{ height: '2px', width: '16px', background: '#00bfa5', borderRadius: '1px' }}></div>
                        <div style={{ height: '2px', width: '16px', background: '#fbbf24', borderRadius: '1px' }}></div>
                      </div>
                      <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '8px', fontStyle: 'italic' }}>Author: Outcome Dynamics™ (Forbes Books, Sept 2026)</p>
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
                  <tr><td style={{ fontWeight: '600' }}>Dimension Bar</td><td>Three 16px bars (Slate/Teal/Gold), 2px height, 6px gap</td></tr>
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
                    <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>The WhiteSpace Outcome Dynamics™</p>
                  </div>
                  {/* Email body */}
                  <div style={{ padding: '28px 32px' }}>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '95%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '100%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px', width: '80%' }}></div>
                    <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '24px', width: '60%' }}></div>

                    {/* Three dimension callouts */}
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
                  {['Dark gradient header with icon and headline', 'Body text: 2-3 short paragraphs max', 'Three-dimension callout strip (Discover / Integrate / Convert)', 'Single primary CTA button (Blue #2563eb)', 'Centered footer with icon and company link'].map((item, i) => (
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
                        <p style={{ fontFamily: 'Lora, serif', fontSize: '8px', fontWeight: '400', color: 'white', textAlign: 'center', marginTop: '6px', lineHeight: '1.3' }}>Outcome Dynamics™</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '10px', fontWeight: '600', color: '#fbbf24', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Coming September 2026</p>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: '18px', fontWeight: '300', color: 'white', lineHeight: '1.3', margin: '0 0 4px 0' }}>Outcome Dynamics™</p>
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
                    Pull quote uses Gold bracket line to tie to the Realization dimension. Single CTA - either "Learn More" pre-launch or "Order Now" post-launch.
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
                    Sent immediately after a consultant is accepted into the certification program. This is their first branded touchpoint as an enrolled participant - it should feel premium and welcoming, not transactional. The three numbered steps use dimension colors to foreshadow the methodology structure.
                  </p>
                </div>
                <div className="card-white" style={{ margin: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Layout Notes</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    White background with dimension gradient top bar (not dark header) to differentiate from marketing emails. Centered icon and welcome message. Numbered onboarding steps with dimension-colored circles. Single "Access Your Portal" CTA.
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
                    <td>Dimension top bar (white bg)</td>
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
                    <td>All three dimensions passed</td>
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
                    <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Bill Adams - Outcome Dynamics™</p>
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
                      <tr><td style={{ fontWeight: '600' }}>Decoration</td><td>Three-dimension divider bar, icon watermark</td></tr>
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
                    <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 20px 0' }}>WhiteSpace Outcome Dynamics™ - Cohort 2026-A</p>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      {['Expectation', 'Systemization', 'Realization', 'Validation'].map((p, i) => (
                        <span key={i} style={{ fontSize: '10px', fontWeight: '600', color: ['#475569', '#00bfa5', '#d97706'][i], background: ['#47556910', '#00bfa510', '#fbbf2410'][i], padding: '4px 10px', borderRadius: '12px' }}>{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                    <strong style={{ color: '#1e293b' }}>Caption format:</strong> Congratulate by name. Mention cohort and dimensions mastered. Reinforce selectivity. Tag the certified consultant.
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
                    Light background with dimension gradient top bar. Pillar tags visually reinforce what was mastered. Clean, credential-forward - not promotional.
                  </p>
                </div>
              </div>
            </div>

            <ReviewBlock blockKey="social:cert-announcement" label="Certification Announcement Post" />

            {/* LinkedIn Post - Book Promo */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Book Launch - Outcome Dynamics™</h3>
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
                      <p style={{ fontFamily: 'Lora, serif', fontSize: '11px', fontWeight: '400', color: 'white', textAlign: 'center', marginTop: '8px', lineHeight: '1.2' }}>Outcome Dynamics™</p>
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
                      <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', fontWeight: '500' }}>WhiteSpace Outcome Dynamics™</span>
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
                    6-episode series tied to the Outcome Dynamics™ launch. Each episode maps to the methodology and builds toward the certification pitch.
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
                    Lead with insight over promotion. Use client outcomes as proof points. Reference the three dimensions by name. Tag certified consultants. Link to discovery conversations.
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
                {/* Top dimension bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #475569 30%, #00bfa5 30%, #00bfa5 55%, #475569 55%, #475569 75%, #fbbf24 75%)' }}></div>
                {/* Corner watermark */}
                <div style={{ position: 'absolute', right: '-30px', bottom: '-30px', opacity: 0.04 }}>
                  <Icon size={200} />
                </div>

                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <Icon size={40} />
                  <p style={{ fontSize: '10px', fontWeight: '600', color: '#64748b', letterSpacing: '2px', textTransform: 'uppercase', margin: '16px 0 4px 0' }}>WhiteSpace Outcome Dynamics™</p>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '28px', fontWeight: '300', color: '#1e293b', margin: '24px 0 8px 0' }}>Certificate of Completion</p>
                  <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 32px 0' }}>This certifies that</p>

                  <p style={{ fontFamily: 'Lora, serif', fontSize: '36px', fontWeight: '400', color: '#1e293b', margin: '0 0 8px 0', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', display: 'inline-block', minWidth: '300px' }}>Jane Davidson</p>
                  <p style={{ fontSize: '14px', color: '#64748b', margin: '16px 0 32px 0', lineHeight: '1.7', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
                    has successfully completed all requirements of the WhiteSpace Clarity Certification program and demonstrated mastery of the Value Collaborator System™.
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
                      <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Founder, Value Collaborator System™</p>
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
                    Modifying the badge colors or layout. Claiming certification without completing all three dimensions. Using "WhiteSpace Certified" without the full credential ID. Displaying an expired credential.
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
                  <tr><td style={{ fontWeight: '600' }}>Top Bar</td><td>4px dimension gradient (Slate 30% / Teal 25% / Slate 20% / Gold 25%)</td></tr>
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
                  <tr><td style={{ fontWeight: '600' }}>Title Slides</td><td>Dark gradient background, Lora Light 32px, dimension divider</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Section Dividers</td><td>Pillar color background (Slate, Teal, or Gold), centered Lora title</td></tr>
                  <tr><td style={{ fontWeight: '600' }}>Content Slides</td><td>White background, dimension gradient top bar, Lora 24px headers</td></tr>
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
              Full-day workshop structure aligned to the three dimensions. Facilitator guide, session breakdown, and materials checklist.
            </p>

            {/* Workshop overview card */}
            <div className="card-white" style={{ marginBottom: '40px' }}>
              <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Icon size={36} />
                  <div>
                    <h2>Asset Discovery & Valuation Workshop</h2>
                    <p>A structured full-day engagement using the WhiteSpace Outcome Dynamics™</p>
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
                { time: '8:30 - 9:00', title: 'Welcome & Framework Introduction', desc: 'Overview of the day, introductions, and the three-dimension methodology explained.', color: '#475569', pillar: null },
                { time: '9:00 - 10:30', title: 'Session 1: Expectation - Asset Discovery', desc: 'Guided inventory of organizational assets. Participants map what exists across people, processes, IP, relationships, and brand equity.', color: '#475569', pillar: 'Expectation' },
                { time: '10:30 - 10:45', title: 'Break', desc: null, color: '#e2e8f0', dimension: null },
                { time: '10:45 - 12:00', title: 'Session 1 (cont.): Asset Valuation', desc: 'Each identified asset is scored on current utilization, potential value, and accessibility. The Asset Gap Map is produced.', color: '#475569', pillar: 'Expectation' },
                { time: '12:00 - 1:00', title: 'Lunch', desc: null, color: '#e2e8f0', dimension: null },
                { time: '1:00 - 2:30', title: 'Session 2: Systemization - Integration Mapping', desc: 'Participants connect assets into systems. Identify dependencies, bottlenecks, and multiplication opportunities. The Asset System Map is produced.', color: '#00bfa5', pillar: 'Systemization' },
                { time: '2:30 - 2:45', title: 'Break', desc: null, color: '#e2e8f0', dimension: null },
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
                      {session.dimension && (
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
                  Use the dimension colors physically in the room - slate post-its for assets, teal for system connections, gold for value conversion opportunities. This reinforces the methodology visually and makes the Asset System Map immediately legible.
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
              { doTitle: 'Color', doText: 'Use Navy for authority, Teal for innovation, Gold for realization. Colors carry meaning tied to the three dimensions.', dontText: 'Use colors purely for decoration. Mix with off-brand palette colors. Use Teal or Gold for body text (accessibility failures).' },
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
                    <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '8px', fontStyle: 'italic' }}>Author of Outcome Dynamics™ (Forbes Books, Sept 2026)</p>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>Bracket icon + teal divider line. Book credit included for Steve and Bill.</p>
            </div>

            {/* LinkedIn Banner */}
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>LinkedIn Banners</h3>

            {/* Company Page Banner */}
            <p style={{ fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Company Page</p>
            <div className="card-white" style={{ marginBottom: '32px' }}>
              <div style={{ borderRadius: '8px', overflow: 'hidden', lineHeight: 0 }}>
                <img
                  src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAMcElwDASIAAhEBAxEB/8QAHQABAAIDAQEBAQAAAAAAAAAAAAcIBQYJBAMCAf/EAGoQAQABAwMBAwUICBIFCAgADwABAgMEBQYRBxIhMQgTQVFhIjZxdIGRsrMJFDI3QnWhsRUYIzQ1OFJVYnJzgoOUtMHR0xaEkqLCFyQzQ1RWdpNGU2OFpdLh8FeVlqPEJURF8eImZGWkw//EABwBAQADAQEBAQEAAAAAAAAAAAABAgMEBwYFCP/EAD0RAQACAgEDAgIHBgUCBgMAAAABAgMRMRIhMgRBBlEFEyIzcYGxNDVhcqHBQoKRstEjUgcUJCVD4WLw8f/aAAwDAQACEQMRAD8AquA/ScoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q=="
                  alt="CWS LinkedIn Company Banner"
                  style={{ width: '100%', display: 'block', borderRadius: '8px' }}
                />
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>1584 x 396px - Company page banner</p>
            </div>

            {/* Personal Profile Banner */}
            <p style={{ fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Steve Smith - Personal Profile</p>
            <div className="card-white" style={{ marginBottom: '48px' }}>
              <div style={{ borderRadius: '8px', overflow: 'hidden', lineHeight: 0 }}>
                <img
                  src="data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGNpf3Db9v1yyWNpf3Db9v1yyVKdsLW3kAXVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxtL+4bft+uWSxtL+4bft+uWSpTtha28gC6oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADG0v7ht+365ZLG0v7ht+365ZKlO2FrbyALqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMbS/uG37frlkgpTtha28gC6oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k="
                  alt="Steve Smith LinkedIn Personal Banner"
                  style={{ width: '100%', display: 'block', borderRadius: '8px' }}
                />
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>1584 x 396px - Personal profile banner</p>
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
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '16px' }}>16:9 slide master - dimension divider line below title</p>
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
                    <p style={{ fontSize: '8px', color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '500', margin: 0 }}>Outcome Dynamics™</p>
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
                  <p style={{ fontSize: '10px', color: '#94a3b8', margin: 0 }}>WhiteSpace Outcome Dynamics™</p>
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
                  <svg data-combimark-h xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1413.1225 380.0855" style={{ display: 'none' }}>
                  <rect x="475.9759" y="205.0902" width="916.6589" height="152.3079" fill="#f2f2f2"/>
  <path d="M507.696,70.7172l-2.0522-6.1385c-2.5287-7.8792-4.0497-12.9734-4.5627-15.2821l-8.8137.3115v-6.9265h38.2603v5.2039c-4.3062.2199-7.348.9161-9.1437,2.1256-1.7775,1.2095-2.6752,3.1701-2.6752,5.9004,0,2.5103.5315,5.5704,1.5757,9.1252,1.8873,7.0365,4.4162,14.9156,7.5677,23.6196.5315,1.5757,1.1545,3.4448,1.8873,5.5889.733,2.1622,1.5757,4.6543,2.5103,7.4761.623,2.1988,1.411,4.6177,2.3637,7.238.9527,2.6203,1.631,4.5077,2.0522,5.662,2.1072,5.662,3.6648,10.1882,4.7275,13.5414h.3115c2.1072-7.1464,4.2512-14.0727,6.45-20.7794,3.7748-12.1854,7.9342-25.0304,12.4419-38.5903,4.7275-14.1826,7.5677-22.9966,8.5023-26.4598h5.039c1.2644,4.3062,3.4083,11.0493,6.45,20.2296,3.0418,9.1802,5.2405,15.8318,6.6149,19.918,3.1517,9.0337,5.2957,15.4287,6.45,19.2219.843,2.8402,2.199,7.0914,4.1044,12.7534,2.089,6.0835,3.7747,11.2874,5.039,15.5937h.4764c2.5103-8.1907,4.6725-14.9522,6.45-20.3211,5.3505-15.2272,9.7117-28.3471,13.065-39.378,1.1545-3.8847,2.199-7.1464,3.1517-9.7667,1.9972-5.3505,3.6282-9.1802,4.8743-11.4892l-12.6069.4765v-6.9265h31.9753v5.2039c-3.7747.4215-6.6334,1.2095-8.5756,2.3637s-3.6832,3.2251-5.204,6.2119-3.4449,7.8976-5.7538,14.7325l-8.0259,23.9311c-8.3923,25.5069-15.1722,45.2968-20.3212,59.3694h-4.7275l-29.4466-84.2533-27.7241,84.2533h-4.5627l-28.1821-83.7771.0366.0366.0008.0002Z" fill="#475569"/>
  <path d="M657.4574,148.1908c3.0418,0,5.2405-.7512,6.6149-2.2906,1.356-1.521,2.1806-3.4816,2.4371-5.9004s.3847-6.0835.3847-11.0309V54.4821c0-3.9947.165-7.4029.4764-10.2432l-11.1777.623v-6.615c6.3034,0,10.7928-.3665,13.468-1.0995s4.7459-1.7775,6.2118-3.1517h4.5627v48.027c3.6648-3.0417,7.8242-5.5339,12.4419-7.4761,4.6175-1.9423,9.0703-2.9136,13.3764-2.9136,9.0337,0,15.5937,2.8402,19.6799,8.5022,4.1044,5.662,6.1935,14.5859,6.3034,26.7713l.165,29.3c0,4.7275-.2199,8.3007-.623,10.7012l9.9133-.4765v6.45h-32.1218v-4.7275c3.0418,0,5.2224-.7512,6.5416-2.2906,1.3192-1.521,2.1072-3.4632,2.3638-5.827s.4031-6.0653.4031-11.1043v-22.0437c0-9.0337-1.411-15.7768-4.2512-20.2296-2.8402-4.4528-7.2929-6.6881-13.3949-6.6881-3.8847,0-7.751.9161-11.5808,2.7486s-6.9081,4.1778-9.217,6.9996v46.4513c0,4.0863-.2566,7.6595-.788,10.7012l9.9132-.4765v6.45h-32.1218v-4.7275l.0184.0734.0006-.0002Z" fill="#475569"/>
  <path d="M754.1527,148.1908c3.0418,0,5.2224-.7512,6.5416-2.2906,1.3192-1.521,2.1072-3.4632,2.3638-5.827s.3847-6.0653.3847-11.1043v-35.915c0-3.0417.2016-6.45.623-10.2432l-11.1777.623v-6.615c6.1935,0,10.6278-.3665,13.3031-1.0995,2.6752-.733,4.7459-1.7775,6.2118-3.1517h4.5627v63.6207c0,4.7275-.2016,8.3007-.623,10.7012l9.9133-.4765v6.45h-32.1218v-4.7275l.0182.055.0004.0002ZM763.9193,54.244c-1.6857-1.8325-2.5103-4.0129-2.5103-6.5416s.8611-4.7275,2.6021-6.615,3.7014-2.8402,5.9004-2.8402c2.4188,0,4.4344.9161,6.0653,2.7486s2.4371,4.0679,2.4371,6.6881-.8611,4.6909-2.6021,6.5416c-1.7407,1.8325-3.7563,2.7486-6.0653,2.7486s-4.1413-.9161-5.827-2.7486v.0184h-.0002Z" fill="#475569"/>
  <path d="M809.8942,126.4586l.3115-45.6633-12.1305.165v-6.7799c5.039-.11,9.3086-2.3821,12.8268-6.8531,3.5182-4.4528,6.1201-9.5283,7.7876-15.1906h5.3505v22.0437h26.4598v6.1385l-26.4598.3115c-.11,16.0701-.1833,27.1926-.2381,33.3861-.055,6.1935-.0734,9.6567-.0734,10.3897,0,7.4579.898,12.9916,2.6752,16.6198s4.8743,5.4423,9.2902,5.4423c2.7302,0,5.4239-.843,8.1175-2.5287,2.6752-1.6857,5.0208-3.9947,6.9998-6.9265l4.2512,3.4632c-4.0863,6.0835-8.1357,10.1148-12.1305,12.0389-3.9947,1.9422-7.8792,2.9136-11.6539,2.9136-14.3844,0-21.5306-9.6567-21.4206-28.9701h.0366-.0002Z" fill="#475569"/>
  <path d="M881.9439,150.3164c-5.827-3.4083-10.4263-8.3007-13.7796-14.6407-3.3533-6.3584-5.039-13.6696-5.039-21.9705,0-7.348,1.6857-14.256,5.039-20.706,3.3533-6.45,8.0626-11.6358,14.0911-15.5203,6.0285-3.8847,12.8818-5.827,20.5595-5.827,5.9919,0,11.3974,1.3192,16.2167,3.9397s8.6672,6.5416,11.489,11.7273c2.8218,5.1858,4.2512,11.5808,4.2512,19.1303l-55.43.9529c-.11,12.6069,1.9607,22.4102,6.2118,29.4466,4.2512,7.0365,10.8478,10.5547,19.7715,10.5547,4.8193,0,9.7849-1.2645,14.8791-3.7748,5.094-2.5287,8.9971-5.607,11.7273-9.2902l3.7747,3.1517c-3.9947,6.0835-9.162,10.6097-15.5203,13.5414-6.3584,2.9318-12.5701,4.4159-18.6538,4.4159-7.238,0-13.7796-1.7041-19.6065-5.1124l.0182-.0184v-.0005ZM919.9661,100.7868c0-6.3034-1.411-11.7089-4.2512-16.2167s-7.0914-6.7799-12.7534-6.7799c-13.0283,0-20.7426,7.6595-23.1431,22.9966h40.166-.0184.0001Z" fill="#475569"/>
  <path d="M972.5006,153.3947c-4.984-1.356-9.3636-3.3533-13.1566-5.9919l.788,6.7799h-8.1907l-.9345-33.551h6.1385c.5314,9.0337,3.6282,15.9786,9.2902,20.871,5.662,4.8743,12.8634,7.3296,21.5674,7.3296,6.395,0,11.7823-1.7591,16.1433-5.2773,4.3612-3.5182,6.5416-8.3191,6.5416-14.4026,0-4.5077-1.2277-8.3741-3.7014-11.5808-2.4737-3.2067-5.5155-5.882-9.1253-8.026-3.6282-2.1438-8.5388-4.6543-14.7325-7.4761-7.0365-3.3533-12.6253-6.3034-16.7663-8.8137-4.1413-2.5287-7.696-5.8454-10.6278-10.0048-2.9318-4.1413-4.4162-9.2718-4.4162-15.3555,0-4.1962.9711-8.3922,2.9136-12.6069,1.9422-4.1962,5.2957-7.7694,10.0782-10.7012s11.1043-4.416,18.9835-4.416c4.7277,0,9.4734.6046,14.256,1.8141,4.7825,1.2095,9.162,3.2799,13.1566,6.2119l-.623-6.7799h8.0259v34.6505h-5.6622c-.5314-8.3007-3.1699-15.3005-7.9526-21.0175-4.7825-5.717-11.4708-8.5756-20.083-8.5756-6.3034,0-11.2327,1.7591-14.8057,5.2773-3.5732,3.5182-5.3505,7.8976-5.3505,13.1565,0,4.1962,1.2094,7.8242,3.6282,10.8662s5.3505,5.5704,8.8137,7.5677,8.3373,4.4709,14.6407,7.4029c7.1464,3.2617,12.8818,6.1935,17.2428,8.8137,4.3612,2.6203,8.0626,6.0653,11.1043,10.3163s4.5627,9.4736,4.5627,15.667-1.4476,11.0859-4.3244,15.5937c-2.8952,4.5078-7.1096,8.026-12.68,10.5547s-12.1854,3.7748-19.8448,3.7748c-4.9292,0-9.8948-.678-14.8791-2.0522l-.0182-.0184-.0005-.0002Z" fill="#475569"/>
  <path d="M1036.5062,188.3384c3.0418,0,5.2224-.7696,6.5416-2.2906s2.0706-3.4083,2.2905-5.662c.2016-2.2538.3665-6.0103.4764-11.2509l.3115-76.0626c0-4.416.2016-7.8242.623-10.2432l-11.1775.623v-6.615c6.1935,0,10.4447-.3481,12.7535-1.0261s4.1962-1.7591,5.6622-3.2251h4.7277c.4215,5.149.623,7.971.623,8.5022,3.1517-2.8402,6.9265-5.1124,11.3425-6.8531s8.759-2.6021,13.065-2.6021c6.1935,0,11.9105,1.5942,17.1694,4.8009,5.2405,3.2067,9.4734,7.7694,12.68,13.7064,3.2067,5.9369,4.8009,12.79,4.8009,20.5595,0,8.7222-1.8325,16.4548-5.5155,23.2347-3.683,6.7799-8.5756,12.0389-14.7325,15.8318-6.1385,3.7748-12.79,5.662-19.9181,5.662s-13.5414-1.7407-18.892-5.2039v26.1483c0,4.7275-.2199,8.3007-.623,10.7012l9.9132-.4765v6.45h-32.1218v-4.7275.0184h-.0001ZM1090.7633,144.5626c3.6282-3.0417,6.4318-7.293,8.429-12.7534,1.9974-5.4605,2.9868-11.6539,2.9868-18.5804,0-9.4552-2.0156-17.4443-6.0653-24.0227-4.0497-6.56-10.0598-9.8398-18.0307-9.8398-3.4632,0-6.8347.843-10.0782,2.5103-3.2617,1.6857-6.0835,3.7748-8.5023,6.3034.11.733.165,3.9397.165,9.6017l-.165,45.2052c5.3505,4.0863,11.4892,6.1385,18.4339,6.1385,4.9292,0,9.217-1.521,12.8268-4.5627h0Z" fill="#475569"/>
  <path d="M1137.2145,150.243c-4.0497-3.4632-6.0653-7.971-6.0653-13.5414,0-6.0835,2.4371-11.2325,7.3296-15.4287,4.8741-4.1962,11.0311-7.3296,18.4338-9.3636,7.4027-2.0522,14.824-3.0233,22.2818-2.9136v-9.7667c0-6.8165-1.0077-12.1488-2.9868-15.9786-1.9974-3.8297-6.2485-5.7538-12.7535-5.7538-3.2617,0-6.3584.678-9.2902,2.0522-2.9502,1.3742-5.0942,3.4083-6.45,6.1385,1.356,1.466,2.0522,3.4632,2.0522,5.9919,0,1.5757-.5865,3.0783-1.7407,4.4893s-2.8402,2.1256-5.039,2.1256-3.9397-.7146-5.204-2.1256-1.8875-3.2799-1.8875-5.5889c0-3.4632,1.3377-6.6334,4.0129-9.5283,2.6752-2.8952,6.395-5.1674,11.1774-6.8531s10.0966-2.5103,15.9784-2.5103c8.8138,0,15.3187,2.3456,19.5334,6.9996,4.1962,4.6727,6.2485,12.0389,6.1385,22.117l-.1649,35.4385c0,3.3533-.2199,6.9265-.623,10.7012l11.1775-.623v6.615h-22.5202c-.3115-1.5757-.678-4.5627-1.0995-8.9787-7.6594,7.6595-15.9052,11.489-24.719,11.489-7.6594,0-13.523-1.7407-17.5543-5.2039h-.0178v.0002ZM1169.2631,144.1777c3.2617-1.521,6.5599-3.8663,9.9133-6.9996-.11-1.5757-.1649-4.2512-.1649-8.026l.1649-14.8057c-8.6122.3115-16.2717,2.0706-22.9965,5.2773-6.725,3.2067-10.0782,8.1175-10.0782,14.7325,0,3.8847,1.1545,6.8715,3.4632,8.9787s5.2405,3.1517,8.8138,3.1517c3.9947,0,7.6045-.7696,10.8662-2.2906l.0184-.0184h-.0001Z" fill="#475569"/>
  <path d="M1233.5982,150.5545c-5.937-3.2617-10.6279-7.9342-14.0911-14.0179s-5.2039-13.2849-5.2039-21.5672c0-7.348,1.759-14.3476,5.2773-21.0175,3.5182-6.6699,8.3925-12.0389,14.6407-16.1433,6.2485-4.0863,13.3031-6.1385,21.1824-6.1385,5.6622,0,10.7013.898,15.1172,2.6752,4.4159,1.7957,7.8426,4.1413,10.3163,7.0914,2.4737,2.9318,3.7014,6.1385,3.7014,9.6017,0,2.4187-.678,4.416-2.0522,5.9919-1.3742,1.5757-3.2617,2.3637-5.6622,2.3637s-4.0497-.7512-5.2039-2.2906c-1.1545-1.521-1.7407-3.1151-1.7407-4.8009,0-2.6203.788-4.7275,2.3637-6.3034-1.1545-3.2617-3.3898-5.4789-6.6884-6.6881-3.2983-1.2095-6.5966-1.8141-9.8399-1.8141-4.8375,0-9.162,1.3192-12.9917,3.9397s-6.8531,6.45-9.0521,11.4892c-2.1989,5.039-3.2983,11.0859-3.2983,18.1039s1.1176,13.2849,3.3898,18.7454c2.2537,5.4605,5.4239,9.7483,9.5286,12.8268,4.1044,3.0967,8.8138,4.6543,14.1826,4.6543,4.7277,0,9.3635-1.2826,13.9445-3.8663,4.5628-2.5653,8.1541-5.8088,10.7928-9.6933l4.1044,3.1517c-3.8848,6.0835-8.9053,10.7012-15.044,13.853-6.1385,3.1517-12.1488,4.7275-18.0307,4.7275-7.1464,0-13.6696-1.6307-19.6066-4.8743h-.0362l.0003-.0002Z" fill="#475569"/>
  <path d="M1317.0639,150.3164c-5.827-3.4083-10.4263-8.3007-13.7796-14.6407-3.3533-6.3584-5.039-13.6696-5.039-21.9705,0-7.348,1.6857-14.256,5.039-20.706,3.3533-6.45,8.0626-11.6358,14.0911-15.5203,6.0285-3.8847,12.8818-5.827,20.5595-5.827,5.9919,0,11.3974,1.3192,16.2166,3.9397s8.6672,6.5416,11.4893,11.7273,4.2512,11.5808,4.2512,19.1303l-55.43.9529c-.11,12.6069,1.9607,22.4102,6.2118,29.4466,4.2512,7.0365,10.8477,10.5547,19.7715,10.5547,4.8192,0,9.7851-1.2645,14.8791-3.7748,5.0942-2.5287,8.9971-5.607,11.7274-9.2902l3.7748,3.1517c-3.9947,6.0835-9.162,10.6097-15.5203,13.5414-6.3584,2.9318-12.5701,4.4159-18.6538,4.4159-7.238,0-13.7796-1.7041-19.6066-5.1124l.0184-.0184-.0003-.0005ZM1355.0861,100.7868c0-6.3034-1.411-11.7089-4.2512-16.2167s-7.0914-6.7799-12.7535-6.7799c-13.0283,0-20.7427,7.6595-23.1431,22.9966h40.1661-.0183Z" fill="#475569"/>
  <path d="M531.3174,313.1765c-5.9808,0-11.2349-1.3465-15.7645-4.042-4.5296-2.6928-8.0537-6.4532-10.5697-11.2795-2.5173-4.8252-3.7743-10.4363-3.7743-16.8306,0-6.3357,1.257-11.9148,3.7743-16.7427,2.516-4.8252,6.0401-8.5988,10.5697-11.3236,4.5296-2.7221,9.7837-4.0858,15.7645-4.0858,6.0983,0,11.4131,1.3637,15.9426,4.0858,4.5303,2.7248,8.0385,6.4984,10.5249,11.3236,2.4873,4.8279,3.7302,10.407,3.7302,16.7427,0,6.3943-1.2429,12.0055-3.7302,16.8306-2.4867,4.8266-5.9947,8.5867-10.5249,11.2795-4.5296,2.6955-9.8444,4.042-15.9426,4.042ZM531.3174,306.6033c4.4996,0,8.452-1.0209,11.8573-3.0638,3.4039-2.0429,6.0394-4.9733,7.9049-8.7924,1.8648-3.8204,2.7975-8.3934,2.7975-13.7228s-.9327-9.9026-2.7975-13.7227c-1.8654-3.8191-4.5009-6.7347-7.9049-8.7483-3.4053-2.0122-7.3577-3.0197-11.8573-3.0197-4.4409,0-8.3638,1.0075-11.768,3.0197-3.4053,2.0136-6.0394,4.9292-7.9049,8.7483-1.8648,3.8204-2.7975,8.3934-2.7975,13.7227s.9327,9.9026,2.7975,13.7228c1.8654,3.8191,4.4996,6.7492,7.9049,8.7924,3.4039,2.0429,7.3271,3.0638,11.768,3.0638Z" fill="#748293"/>
  <path d="M588.2486,313.1765c-3.4346,0-6.4391-.6819-9.0143-2.0429-2.5759-1.361-4.5602-3.4641-5.9508-6.3064-1.3924-2.8423-2.0877-6.3943-2.0877-10.6578v-26.8225h7.4607v26.0234c0,4.4409.9775,7.7863,2.9311,10.0359,1.9543,2.2511,4.7077,3.3746,8.2605,3.3746,2.4866,0,4.7363-.6058,6.7499-1.82,2.0122-1.2129,3.5969-2.9597,4.7518-5.2401,1.1543-2.2792,1.7314-5.1067,1.7314-8.4827v-23.8909h7.4607v44.7635h-6.7499l-.4438-7.8156c-1.3631,2.7836-3.3753,4.9599-6.0394,6.5279-2.6648,1.5678-5.6845,2.354-9.0598,2.354l-.0003-.0005Z" fill="#748293"/>
  <path d="M640.4725,312.1104c-2.6641,0-4.974-.4138-6.9274-1.2436-1.9543-.8287-3.4501-2.2338-4.4855-4.218-1.0368-1.9843-1.5539-4.6636-1.5539-8.0385v-24.957h-7.8163v-6.3064h7.8163l.9768-10.8367h6.4839v10.8367h12.967v6.3064h-12.967v24.957c0,2.7836.5617,4.6622,1.6873,5.6391,1.1243.9782,3.1086,1.4665,5.9508,1.4665h4.7965v6.3943h-6.9281l-.0005.0002Z" fill="#748293"/>
  <path d="M676.6218,313.1765c-4.2053,0-7.9796-.9768-11.3242-2.9316-3.346-1.9536-5.966-4.6918-7.8604-8.2159-1.8961-3.5214-2.8422-7.5927-2.8422-12.2124,0-4.7356.9462-8.851,2.8422-12.3445,1.8941-3.4935,4.5143-6.2316,7.8604-8.2159,3.3446-1.9829,7.1189-2.9756,11.3242-2.9756,5.3289,0,9.7697,1.3772,13.3226,4.1299,3.5521,2.753,5.802,6.4398,6.7499,11.0582h-7.6388c-.5926-2.7823-2.0422-4.944-4.3514-6.4839-2.3099-1.5385-5.034-2.3099-8.1711-2.3099-2.5466,0-4.9006.6378-7.0617,1.9095-2.1617,1.2742-3.9076,3.1838-5.2401,5.73-1.3317,2.546-1.9981,5.6832-1.9981,9.4141,0,2.7836.3842,5.2548,1.1549,7.4166.7686,2.1617,1.8054,3.9524,3.1086,5.3737,1.3017,1.4199,2.8268,2.5019,4.5744,3.2412,1.7455.7405,3.5661,1.1102,5.4623,1.1102,2.1311,0,4.0544-.3404,5.7726-1.0209,1.7166-.6805,3.1672-1.7028,4.3521-3.0652,1.1836-1.361,1.9836-2.9597,2.3978-4.7959h7.6388c-.9482,4.5009-3.2126,8.1571-6.7947,10.9686-3.5828,2.813-8.009,4.2194-13.2778,4.2194l-.0003.0002Z" fill="#748293"/>
  <path d="M727.2459,313.1765c-4.1453,0-7.8755-.9634-11.1909-2.8863-3.3167-1.9243-5.9212-4.6477-7.8156-8.1718-1.8961-3.5228-2.8422-7.6234-2.8422-12.3017,0-4.7959.9613-8.955,2.8863-12.4778,1.9236-3.5228,4.5589-6.2462,7.9049-8.1718,3.3446-1.9229,7.0903-2.8863,11.2356-2.8863,4.2628,0,8.0378.9634,11.3236,2.8863,3.2867,1.9254,5.8913,4.6491,7.8163,8.1718,1.9236,3.5228,2.8863,7.6527,2.8863,12.3899s-.9768,8.8669-2.9311,12.3899c-1.9536,3.5241-4.5889,6.2476-7.9042,8.1718-3.3167,1.9229-7.1055,2.8863-11.369,2.8863v-.0002ZM727.3352,306.7808c2.5446,0,4.9138-.6351,7.1051-1.9095,2.1897-1.2717,3.9665-3.1813,5.3289-5.7286,1.3617-2.5446,2.0429-5.6845,2.0429-9.4141,0-3.7884-.666-6.9415-1.9981-9.4595-1.3324-2.5153-3.0797-4.4101-5.2401-5.6845-2.1624-1.2717-4.545-1.9095-7.1496-1.9095-2.4873,0-4.8404.6378-7.061,1.9095-2.2204,1.2742-3.9972,3.1692-5.3296,5.6845-1.3317,2.518-1.9981,5.6711-1.9981,9.4595,0,3.7295.6664,6.8694,1.9981,9.4141,1.3324,2.5473,3.0783,4.4569,5.2401,5.7286,2.1611,1.2742,4.5148,1.9095,7.0617,1.9095h-.0003Z" fill="#748293"/>
  <path d="M759.929,312.1104v-44.7635h6.7506l.4438,6.3943c1.421-2.3085,3.3305-4.1299,5.7286-5.4616,2.3985-1.3331,5.0186-1.9988,7.8604-1.9988,2.3099,0,4.3968.3108,6.2616.9327,1.8655.6219,3.5221,1.5692,4.974,2.8423,1.4505,1.2742,2.5893,2.8863,3.4194,4.8399,1.5392-2.7221,3.6709-4.8399,6.395-6.3503,2.7227-1.5092,5.595-2.2644,8.6153-2.2644,3.4928,0,6.5125.6967,9.0591,2.087,2.5453,1.3917,4.5296,3.4948,5.9508,6.3064,1.421,2.8129,2.1318,6.3812,2.1318,10.7019v26.7345h-7.3718v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.4409-3.376-7.8163-3.376-2.3092,0-4.3821.6085-6.2169,1.8214-1.8362,1.2142-3.286,2.9756-4.3521,5.2842-1.0654,2.3099-1.5987,5.1521-1.5987,8.5268v23.8028h-7.4607v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.4114-3.376-7.7267-3.376-2.251,0-4.2942.6085-6.1283,1.8214-1.8362,1.2142-3.2867,2.9756-4.3521,5.2842-1.0661,2.3099-1.5994,5.1521-1.5994,8.5268v23.8028h-7.4607Z" fill="#748293"/>
  <path d="M858.6933,313.1765c-4.1453,0-7.8462-.9768-11.1021-2.9316-3.2572-1.9536-5.8041-4.6918-7.6381-8.2159-1.8362-3.5214-2.7534-7.622-2.7534-12.3004,0-4.737.9021-8.851,2.7089-12.3458,1.8054-3.4935,4.3521-6.2169,7.6381-8.1705,3.2867-1.955,7.061-2.9315,11.3242-2.9315,4.3815,0,8.1119.9768,11.1909,2.9315,3.0783,1.9536,5.4316,4.5155,7.061,7.682,1.628,3.1679,2.4426,6.6479,2.4426,10.4363v1.8654c0,.6512-.0306,1.3917-.0888,2.2204h-36.6816v-5.7738h29.3987c-.1774-4.0858-1.5253-7.2832-4.0413-9.5915-2.5174-2.3099-5.6704-3.4641-9.4588-3.4641-2.4866,0-4.8266.5764-7.0169,1.7321-2.191,1.1543-3.9384,2.8423-5.2401,5.0626-1.3031,2.2204-1.9536,4.9879-1.9536,8.3039v2.4873c0,3.6723.666,6.7492,1.9981,9.2366s3.0779,4.3514,5.2401,5.595c2.1611,1.2436,4.4855,1.8654,6.9722,1.8654,3.1379,0,5.7286-.6953,7.7715-2.087,2.0429-1.3903,3.5375-3.2999,4.4848-5.7286h7.3719c-.77,2.7234-2.0422,5.1374-3.819,7.2377-1.7762,2.1029-3.9824,3.775-6.6165,5.0185-2.6355,1.2436-5.6998,1.8654-9.1925,1.8654v.0005Z" fill="#748293"/>
  <path d="M913.5806,312.1104v-62.1719h18.2964c7.2832,0,13.292,1.2583,18.0296,3.775,4.7363,2.5166,8.2446,6.0994,10.5249,10.7471,2.2785,4.6491,3.4194,10.2282,3.4194,16.7413,0,6.3943-1.1409,11.9014-3.4194,16.5198-2.2806,4.6184-5.7886,8.1718-10.5249,10.6578-4.7377,2.4873-10.7465,3.7309-18.0296,3.7309h-18.2964ZM921.0413,305.8935h10.6579c6.0401,0,10.8498-.9913,14.4328-2.9756,3.5821-1.9829,6.1428-4.8252,7.6826-8.5268,1.5392-3.6989,2.3092-8.0957,2.3092-13.189,0-5.2094-.77-9.681-2.3092-13.4106-1.5399-3.7309-4.1006-6.6025-7.6826-8.6161-3.5828-2.0122-8.3927-3.0197-14.4328-3.0197h-10.6579v49.738-.0002Z" fill="#748293"/>
  <path d="M981.3987,331.6499l10.9246-24.5128h-2.5759l-17.5852-39.7902h8.0816l14.5662,34.1938,15.3656-34.1938h7.7267l-28.6875,64.3028h-7.8163l.0002.0002Z" fill="#748293"/>
  <path d="M1025.8959,312.1104v-44.7635h6.7506l.3549,7.8156c1.421-2.7823,3.4487-4.9585,6.0842-6.5279,2.6341-1.5678,5.6397-2.354,9.0143-2.354,3.4935,0,6.5131.6967,9.0598,2.087,2.5446,1.3917,4.5296,3.4948,5.9508,6.3064,1.421,2.8129,2.1318,6.3811,2.1318,10.7019v26.7345h-7.4614v-25.9352c0-4.4982-.9921-7.8728-2.9749-10.1241-1.9843-2.2497-4.7825-3.376-8.3934-3.376-2.4866,0-4.707.6085-6.6613,1.8214-1.9543,1.2142-3.508,2.9611-4.6629,5.2401-1.1543,2.2806-1.7321,5.1067-1.7321,8.4813v23.8923h-7.4607l.0003.0003Z" fill="#748293"/>
  <path d="M1093.915,313.1765c-3.6123,0-6.632-.6378-9.0591-1.9095-2.4285-1.2731-4.234-2.9611-5.4175-5.0626-1.1856-2.1018-1.7769-4.3969-1.7769-6.8842,0-3.0197.7839-5.5791,2.354-7.682,1.5678-2.1018,3.7884-3.7002,6.6613-4.7959,2.8709-1.0956,6.2616-1.6439,10.1693-1.6439h11.8128c0-2.7823-.4303-5.1067-1.2877-6.9721-.8593-1.8641-2.1024-3.2706-3.7302-4.218-1.6294-.9475-3.6568-1.421-6.0842-1.421-2.8422,0-5.3003.7098-7.3718,2.1311-2.0729,1.421-3.346,3.5241-3.819,6.3064h-7.6381c.3549-3.1972,1.4344-5.8754,3.2413-8.0385,1.8061-2.1604,4.0999-3.8191,6.8836-4.9733,2.7829-1.1543,5.6845-1.7321,8.7042-1.7321,4.144,0,7.594.7553,10.3468,2.2644,2.7534,1.5105,4.8104,3.6123,6.1728,6.3064,1.3617,2.6955,2.0429,5.8767,2.0429,9.5477v27.7113h-6.6613l-.4444-7.9049c-.5926,1.2436-1.3472,2.4139-2.2645,3.508-.9186,1.0968-1.9843,2.0429-3.1972,2.8423-1.2142.7994-2.6201,1.4372-4.2194,1.9095-1.5987.4737-3.4053.7112-5.4175.7112v-.0002ZM1095.07,306.8703c2.0716,0,3.9517-.4283,5.6397-1.2876,1.6873-.858,3.1224-2.0429,4.3073-3.5535,1.1836-1.5092,2.087-3.1813,2.7089-5.0174.6219-1.8348.9327-3.7602.9327-5.7738v-.2656h-11.1909c-2.9016,0-5.2401.3415-7.0169,1.0209-1.7762.6819-3.0497,1.6294-3.819,2.8423-.77,1.2142-1.1543,2.5914-1.1543,4.1299,0,1.5987.369,2.9904,1.1101,4.174.7394,1.1863,1.8341,2.1029,3.286,2.7541,1.4505.6526,3.1826.9768,5.1962.9768h0Z" fill="#748293"/>
  <path d="M1128.4785,312.1104v-44.7635h6.7506l.4438,6.3943c1.421-2.3085,3.3305-4.1299,5.7286-5.4616,2.3985-1.3331,5.0185-1.9988,7.8604-1.9988,2.3099,0,4.3969.3108,6.2616.9327,1.8654.6219,3.5221,1.5692,4.974,2.8423,1.4506,1.2742,2.5893,2.8863,3.4193,4.8399,1.5392-2.7221,3.6709-4.8399,6.395-6.3503,2.7227-1.5092,5.595-2.2644,8.6153-2.2644,3.4927,0,6.5125.6967,9.0591,2.087,2.5452,1.3917,4.5296,3.4948,5.9508,6.3064,1.4211,2.8129,2.1317,6.3812,2.1317,10.7019v26.7345h-7.3718v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.441-3.376-7.8163-3.376-2.3092,0-4.3821.6085-6.2168,1.8214-1.8362,1.2142-3.2861,2.9756-4.3521,5.2842-1.0654,2.3099-1.5987,5.1521-1.5987,8.5268v23.8028h-7.4607v-25.9352c0-4.4982-.9186-7.8728-2.7534-10.1241-1.8362-2.2497-4.4115-3.376-7.7267-3.376-2.2511,0-4.2942.6085-6.1283,1.8214-1.8362,1.2142-3.2867,2.9756-4.3521,5.2842-1.0661,2.3099-1.5994,5.1521-1.5994,8.5268v23.8028h-7.4607Z" fill="#748293"/>
  <path d="M1213.3124,257.8435c-1.4806,0-2.7089-.4883-3.6856-1.4651-.9767-.9782-1.4657-2.2058-1.4657-3.6868,0-1.4785.489-2.6782,1.4657-3.5962s2.2052-1.3772,3.6856-1.3772c1.4211,0,2.6341.459,3.6417,1.3772,1.0061.918,1.5098,2.1177,1.5098,3.5962,0,1.4812-.5037,2.7089-1.5098,3.6868-1.0075.9768-2.2203,1.4651-3.6417,1.4651ZM1209.582,312.1104v-44.7635h7.4607v44.7635h-7.4607Z" fill="#748293"/>
  <path d="M1251.3547,313.1765c-4.2054,0-7.9796-.9768-11.3242-2.9316-3.346-1.9536-5.966-4.6918-7.8604-8.2159-1.8961-3.5214-2.8423-7.5927-2.8423-12.2124,0-4.7356.9461-8.851,2.8423-12.3445,1.8941-3.4935,4.5144-6.2316,7.8604-8.2159,3.3446-1.9829,7.119-2.9756,11.3242-2.9756,5.3289,0,9.7696,1.3772,13.3226,4.1299,3.5521,2.753,5.802,6.4398,6.7499,11.0582h-7.6387c-.5926-2.7823-2.0422-4.944-4.3514-6.4839-2.3099-1.5385-5.034-2.3099-8.1711-2.3099-2.5466,0-4.9006.6378-7.0617,1.9095-2.1618,1.2742-3.9076,3.1838-5.2401,5.73-1.3318,2.546-1.9981,5.6832-1.9981,9.4141,0,2.7836.3843,5.2548,1.1549,7.4166.7687,2.1617,1.8055,3.9524,3.1086,5.3737,1.3017,1.4199,2.8268,2.5019,4.5743,3.2412,1.7455.7405,3.5662,1.1102,5.4623,1.1102,2.1311,0,4.0545-.3404,5.7726-1.0209,1.7166-.6805,3.1672-1.7028,4.3521-3.0652,1.1835-1.361,1.9836-2.9597,2.3978-4.7959h7.6387c-.9482,4.5009-3.2126,8.1571-6.7947,10.9686-3.5827,2.813-8.0089,4.2194-13.2778,4.2194v.0002Z" fill="#748293"/>
  <path d="M1299.5213,313.1765c-3.6716,0-6.898-.6219-9.681-1.8654-2.7836-1.2436-4.9885-2.9756-6.6165-5.1962-1.6294-2.2204-2.62-4.8399-2.9756-7.8597h7.6381c.2962,1.5399.9175,2.9611,1.8654,4.2633.9468,1.3024,2.2344,2.3526,3.8638,3.1517,1.628.7994,3.6261,1.1997,5.9947,1.1997,2.0722,0,3.7891-.3108,5.1515-.9327,1.3617-.6219,2.3833-1.4651,3.0645-2.5314.6798-1.0661,1.0215-2.2204,1.0215-3.4641,0-1.8348-.4303-3.2265-1.2877-4.174-.8593-.9461-2.1184-1.7014-3.7749-2.2644-1.6586-.563-3.6723-1.0516-6.0395-1.4665-1.9543-.3549-3.8791-.8273-5.7733-1.421-1.8955-.5912-3.5834-1.3758-5.0626-2.3526-1.4806-.9782-2.6508-2.1763-3.508-3.5975-.8593-1.421-1.2877-3.1665-1.2877-5.2401,0-2.5446.666-4.8104,1.9981-6.7947,1.3325-1.9829,3.2113-3.5375,5.6398-4.6623,2.4274-1.125,5.2696-1.688,8.5267-1.688,4.7959,0,8.6736,1.1543,11.6346,3.4641,2.9604,2.3085,4.7077,5.6552,5.2401,10.0359h-7.3718c-.2969-2.2497-1.2583-4.0099-2.8864-5.2842-1.6294-1.2731-3.8638-1.9095-6.7061-1.9095-2.7836,0-4.8999.563-6.3503,1.6866-1.4512,1.1263-2.1758,2.6073-2.1758,4.4409,0,1.1863.3997,2.2365,1.199,3.1531.7994.9193,1.9981,1.7028,3.5969,2.354,1.5994.6526,3.5221,1.1849,5.7733,1.5987,2.9604.5337,5.6538,1.2436,8.0824,2.1324,2.4274.8873,4.3969,2.2058,5.9067,3.9524s2.2644,4.218,2.2644,7.4152c0,2.7848-.6966,5.2121-2.087,7.2832-1.3917,2.0736-3.3612,3.6868-5.9067,4.8411-2.5459,1.1543-5.537,1.7321-8.9705,1.7321l-.0003-.0002Z" fill="#748293"/>
  <path d="M1341.0487,241.6223v3.8556h-7.4553v19.4525h-4.6268v-19.4525h-7.4553v-3.8556h19.5374ZM1366.2423,264.9306l-.8568-13.7107c-.0857-1.7998-.0857-4.0276-.1718-6.5129h-.2567c-.5998,2.0565-1.2853,4.7988-1.9711,6.941l-4.1987,12.9395h-4.7988l-4.1987-13.2819c-.4288-1.7998-1.1143-4.5418-1.628-6.5986h-.2574c0,2.1422-.0857,4.3707-.1713,6.5129l-.8568,13.7107h-4.4564l1.7141-23.3083h6.941l4.0276,11.3967c.5137,1.7998.9422,3.5132,1.5423,5.9131h.0857c.5998-2.1422,1.1143-4.1133,1.628-5.8267l4.0276-11.4829h6.6842l1.7998,23.3083h-4.6275l-.0003-.0002Z" fill="#748293"/>
  <path d="M350.1959,365.6097c-4.1613.6094-8.4122.9293-12.738.9293-47.6892,0-86.4573-38.4055-86.4573-87.9931V100.4578c0-12.1113-6.6011-22.3486-16.061-27.254,3.8618-2.0109,8.2027-3.1383,12.753-3.1383,15.7168,0,28.814,13.3299,28.814,30.3923v178.0881c0,45.0782,32.0473,80.9243,73.6893,87.0638h0Z" fill="#475569"/>
  <path d="M119.683,365.6097c-4.1613.6094-8.4272.9293-12.753.9293-47.6742,0-86.4423-38.4055-86.4423-87.9931V45.5384c0-15.9961,13.0972-29.3259,28.814-29.3259,4.5505,0,8.8912,1.1272,12.753,3.1076-9.4599,4.8445-16.061,14.8534-16.061,26.2181v233.0075c0,45.0782,32.0473,80.9243,73.6893,87.0638v.0002Z" fill="#475569"/>
  <path d="M407.8392,19.3203c-9.46,4.8293-16.076,14.8534-16.076,26.2181v234.0741c0,17.0624-13.0972,30.3923-28.814,30.3923-2.0806,0-4.1313-.2286-6.0921-.6855-2.3201-.5333-4.5505-1.3558-6.6459-2.4526.045-.0152.0747-.0457.1198-.0609,2.3799-1.2492,4.5802-2.8336,6.5261-4.7073,5.7629-5.5148,9.4152-13.4824,9.4152-22.4858V45.5384c0-15.9961,13.0972-29.3259,28.814-29.3259,4.4757,0,8.7565,1.097,12.5735,3.0165.0598.0304.1198.0609.1795.0913h0Z" fill="#fbbf24"/>
  <path d="M234.9396,14.4758c-41.642,6.1394-73.6893,41.9703-73.6893,87.0485v178.0881c0,17.0624-13.0972,30.3923-28.814,30.3923-4.5505,0-8.8912-1.1272-12.753-3.1383,9.4599-4.9054,16.061-15.1429,16.061-27.254V101.5241c0-49.5875,38.7682-87.9776,86.4423-87.9776,4.326,0,8.5918.3199,12.753.9293Z" fill="#00bfa5"/>
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
