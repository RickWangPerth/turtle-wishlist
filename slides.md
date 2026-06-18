---
theme: default
title: Turtle Database Wishlist Review
info: |
  DBCA turtle database wishlist review workshop deck.
class: text-left
highlighter: shiki
drawings:
  persist: false
transition: fade
css: unocss
fonts:
  sans: Inter
layout: cover
---

<div class="kicker">DBCA Turtle Database</div>

# Wishlist Review Workshop

<p class="subtitle">
Structured review of wishlist items, bugs, data quality needs, governance requirements, and 2026 roadmap candidates.
</p>

<div class="meta-row">
  <span>Workshop deck</span>
  <span>Product planning discussion</span>
  <span>Government and science database context</span>
</div>

---
layout: default
---

<div class="section-label">Workshop Purpose</div>

## Purpose of the workshop

<div class="two-column">
  <div class="panel">
    <h3>Review</h3>
    <p>Work through the wishlist in a shared structure so requests can be understood, grouped, and discussed consistently.</p>
  </div>
  <div class="panel">
    <h3>Clarify</h3>
    <p>Separate feature requests, data model changes, workflow pain points, reporting needs, governance issues, and bugs.</p>
  </div>
  <div class="panel">
    <h3>Decide</h3>
    <p>Capture priority, effort, decision, and notes for each item without losing the original request wording.</p>
  </div>
  <div class="panel">
    <h3>Plan</h3>
    <p>Identify candidates for the 2026 roadmap and note items that need more discovery, design, or data governance input.</p>
  </div>
</div>

---
layout: default
---

<div class="section-label">Current Problem</div>

## The wishlist is long and mixed

<div class="two-column">
  <div class="muted-band">
    <h3>Mixed request types</h3>
    <ul>
      <li>New workflow features</li>
      <li>Data entry improvements</li>
      <li>Database model changes</li>
      <li>Reports and exports</li>
      <li>Security and access needs</li>
      <li>General UI improvements</li>
      <li>Bugs and defects</li>
    </ul>
  </div>
  <div class="panel">
    <h3>Workshop lens</h3>
    <table class="agenda-table">
      <thead>
        <tr><th>Question</th><th>Outcome</th></tr>
      </thead>
      <tbody>
        <tr><td>Is this a bug, feature, or governance issue?</td><td>Correct category</td></tr>
        <tr><td>Who needs it and why?</td><td>Clear user value</td></tr>
        <tr><td>What data is affected?</td><td>Known data impact</td></tr>
        <tr><td>How urgent is it?</td><td>Priority signal</td></tr>
        <tr><td>What should happen next?</td><td>Decision and owner</td></tr>
      </tbody>
    </table>
  </div>
</div>

---
layout: default
---

<div class="section-label">Epics</div>

## Seven epics overview

<div class="epic-grid">
  <div class="epic-card">
    <strong>Turtle Identification & Tag Management</strong>
    <span>Identity, tag records, recaptures, tag changes, and traceability.</span>
  </div>
  <div class="epic-card">
    <strong>Data Entry Experience & Workflow</strong>
    <span>Field-to-office entry, forms, task flow, and reduced double handling.</span>
  </div>
  <div class="epic-card">
    <strong>Validation & Data Quality</strong>
    <span>Rules, checks, required fields, duplicates, and confidence in records.</span>
  </div>
  <div class="epic-card">
    <strong>Data Model & Database Enhancements</strong>
    <span>Schema, relationships, reference data, migrations, and long-term maintainability.</span>
  </div>
  <div class="epic-card">
    <strong>Reporting, Exports & Analytics</strong>
    <span>Operational reports, science outputs, dashboards, and reusable exports.</span>
  </div>
  <div class="epic-card">
    <strong>Security, Access & Governance</strong>
    <span>Roles, permissions, auditability, data ownership, and stewardship.</span>
  </div>
  <div class="epic-card">
    <strong>User Interface, Forms & General Improvements</strong>
    <span>Navigation, readability, layout, search, labels, and general usability.</span>
  </div>
</div>

---
layout: section
---

# Turtle Identification & Tag Management

<p class="subtitle">Identity, tag records, recaptures, tag changes, and traceability.</p>

---
layout: default
---

<div class="section-label">Epic 1</div>

## Turtle Identification & Tag Management

<EpicWishlist epic-id="epic-1" />

---
layout: section
---

# Data Entry Experience & Workflow

<p class="subtitle">Field-to-office entry, forms, task flow, and reduced double handling.</p>

---
layout: default
---

<div class="section-label">Epic 2</div>

## Data Entry Experience & Workflow

<EpicWishlist epic-id="epic-2" />

---
layout: section
---

# Validation & Data Quality

<p class="subtitle">Rules, checks, required fields, duplicates, and confidence in records.</p>

---
layout: default
---

<div class="section-label">Epic 3</div>

## Validation & Data Quality

<EpicWishlist epic-id="epic-3" />

---
layout: section
---

# Data Model & Database Enhancements

<p class="subtitle">Schema, relationships, reference data, migrations, and long-term maintainability.</p>

---
layout: default
---

<div class="section-label">Epic 4</div>

## Data Model & Database Enhancements

<EpicWishlist epic-id="epic-4" />

---
layout: section
---

# Reporting, Exports & Analytics

<p class="subtitle">Operational reports, science outputs, dashboards, and reusable exports.</p>

---
layout: default
---

<div class="section-label">Epic 5</div>

## Reporting, Exports & Analytics

<EpicWishlist epic-id="epic-5" />

---
layout: section
---

# Security, Access & Governance

<p class="subtitle">Roles, permissions, auditability, data ownership, and stewardship.</p>

---
layout: default
---

<div class="section-label">Epic 6</div>

## Security, Access & Governance

<EpicWishlist epic-id="epic-6" />

---
layout: section
---

# User Interface, Forms & General Improvements

<p class="subtitle">Navigation, readability, layout, search, labels, and general usability.</p>

---
layout: default
---

<div class="section-label">Epic 7</div>

## User Interface, Forms & General Improvements

<EpicWishlist epic-id="epic-7" />

---
layout: section
---

# Bugs

<p class="subtitle">Defects, broken behaviour, regressions, and support issues to separate from enhancement planning.</p>

---
layout: default
---

<div class="section-label">Bugs</div>

## Bug review

<WorkshopDataControls />

<WorkshopItem id="bug-review-primary-defect" item-id="BUG-001" title="Primary Defect Review" epic="Bugs" original-label="Original report">
  [Paste original bug report text here exactly as provided.]
</WorkshopItem>

<div class="panel" style="margin-top: 0.9rem;">
  <h3>Bug triage prompts</h3>
  <ul class="check-list">
    <li><input type="checkbox" aria-label="Reproducible"><span>Can the issue be reproduced consistently?</span></li>
    <li><input type="checkbox" aria-label="Data risk"><span>Does the issue create data loss, incorrect records, or audit risk?</span></li>
    <li><input type="checkbox" aria-label="Workaround"><span>Is there a known workaround?</span></li>
    <li><input type="checkbox" aria-label="Release blocker"><span>Should this block a release or operational milestone?</span></li>
  </ul>
</div>

---
layout: default
---

<div class="section-label">Discussion</div>

## Final discussion

<div class="three-column">
  <div class="decision-card">
    <h3>What should be prioritised?</h3>
    <p>Identify the highest-value work for users, science outcomes, operational reliability, and data stewardship.</p>
  </div>
  <div class="decision-card">
    <h3>What is missing?</h3>
    <p>Capture gaps in the wishlist, unresolved assumptions, missing user groups, and discovery questions.</p>
  </div>
  <div class="decision-card">
    <h3>What should be in the 2026 roadmap?</h3>
    <p>Agree candidate roadmap themes, dependencies, sequencing, and items that need further estimation.</p>
  </div>
</div>

<div class="muted-band" style="margin-top: 1rem;">
  <h3>Workshop outputs</h3>
  <table class="agenda-table">
    <thead>
      <tr><th>Output</th><th>Target</th></tr>
    </thead>
    <tbody>
      <tr><td>Prioritised wishlist items</td><td>Shortlist for planning</td></tr>
      <tr><td>Separated bug list</td><td>Defect triage and resolution path</td></tr>
      <tr><td>Decision notes</td><td>Shared record of outcomes</td></tr>
      <tr><td>2026 roadmap candidates</td><td>Planning input for delivery sequencing</td></tr>
    </tbody>
  </table>
</div>
