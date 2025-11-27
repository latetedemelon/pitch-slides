---
title: P.I.T.C.H. – Portfolio Investment Tracker & Control Hub
theme: default
aspectRatio: 16/9
fonts:
  sans: "GT Haptik, Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
  monospace: "Fira Code, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
colorSchema: light
download: true
mdc: true
info: |
  P.I.T.C.H. – DSL Capstone Presentation (Team 9)
---

# Portfolio Investment Tracker & Control Hub
## aka P.I.T.C.H.

<div class="pt-12">
  <span class="text-xl opacity-80">Team 9 – Capstone Project</span>
  <br/>
  <span class="text-lg opacity-70">November 16, 2025</span>
</div>

<div class="abs-br m-6 flex gap-2 text-sm opacity-60">
  <span>L. Romo Garcia • N. Kuerten • M. Maruno • R. McLellan</span>
</div>

<!--
Speaking notes:
- Welcome everyone and briefly set the context: this is our DSL Capstone project for BC Hydro’s Technology organization.
- Introduce the name: P.I.T.C.H. – Portfolio Investment Tracker & Control Hub – a digital workflow for ideas, Investment Justifications (IJs), and Business Cases.
- Quickly introduce the team by name and role/angle (e.g., “we’ve brought perspectives from planning, architecture, product, and delivery”).
- Outline what we’ll cover: the current problem, our proposed solution, how it aligns to BC Hydro strategy, the pilot approach, and what we’re asking from leadership.
-->

---
layout: center
transition: fade
class: text-center
---

# The Problem

<div class="grid grid-cols-1 gap-6">

<div class="p-6 rounded-2xl border shadow-lg bg-white inline-block">
  <div class="font-bold text-lg mb-3">Hidden Inconsistent Process:</div>
  <div class="space-y-2">
<div> **Difficult to track status** </div>
<div> - Scattered across tools </div>
<div> **Low visibility & late alignment** </div>
<div>   - Ideas surface too late </div>
<div> **No consistent prioritization** </div>
<div>   - Every idea competes equally </div>
<div> **No shared roadmap** </div>
<div>   - Can't see the funnel </div>
  </div>


<div v-click class="mt-6 text-center p-3 bg-gradient-to-r from-blue-50 to-emerald-50 rounded border border-blue-100">
  <strong>Problem Statement:</strong> Fragmented tools and processes make it hard to track investment status, compare options, and make timely decisions.
</div>
</div>
</div>





<!--
Speaking notes:
- Describe the current state briefly: status is spread across email, SharePoint, spreadsheets, and people’s heads.
- Explain that this fragmentation makes it hard to see where any given IJ or Business Case is, and when decisions will happen.
- Call out the upstream issue: ideas arrive late and inconsistently, so prioritization becomes reactive and everything feels “urgent.”
- Emphasize that without a shared roadmap or funnel, it’s very hard to compare options or have portfolio-level conversations.
- Land on the Vision statement: we’re not trying to bypass controls; we’re trying to accelerate decisions while preserving safety, governance, and affordability.
-->

---
layout: center
transition: fade
class: text-center
---

# The Opportunity

<div class="grid grid-cols-1 gap-6">

<div class="p-6 rounded-2xl border shadow-lg bg-white inline-block">
  <div class="font-bold text-lg mb-3">Integrated, auditable workflow:</div>
  <div class="space-y-2">
    <div>✓ Standardized data capture</div>
    <div>✓ End-to-end visibility</div>
    <div>✓ Automated approvals</div>
    <div>✓ Portfolio dashboards</div>
  </div>
</div>

<div v-click class="text-center p-3 bg-gradient-to-r from-blue-50 to-emerald-50 rounded border border-blue-100">
  <strong>Vision:</strong> Accelerate decisions while protecting safety, controls, and affordability
</div>

</div>

<!--
Speaking notes:
- Pivot from pain points to opportunity: what if we had one integrated workflow instead of many disconnected tools?
- Walk through the bullets as capabilities:
  - Standardized data capture so every IJ/BC has the same core information, which makes comparison and reporting much easier.
  - End-to-end visibility so sponsors and leadership can see where items are in the funnel at any time.
  - Automated approvals to reduce manual chasing while preserving the existing control structure.
  - Portfolio dashboards to support portfolio-level trade-off discussions instead of one-off approvals.
- Tie back to the same Vision to reinforce continuity: faster, clearer decisions with strong controls.
-->

---

# Insights from Listening

<div class="grid grid-cols-2 gap-6">

<div>

## Who we listened to



- Capital Planning & Finance
- IT Planners & BSS Advisors
- Portfolio / Program Owners
- PMO / Project Managers



## What we heard



<div class="bch-quote text-sm">
"Hours reconciling <strong>spreadsheet versions</strong>"
</div>

<div class="bch-quote text-sm">
"No <strong>single place</strong> to see IJ status"
</div>

<div class="bch-quote text-sm">
"Hard to compare <strong>like-for-like</strong>"
</div>



</div>

<div>

## How this shaped P.I.T.C.H.



- **Finance stays system of record**
  - P.I.T.C.H. handles intake/workflow
  
- **Pilot before scale**
  - Prove value in 1–2 portfolios
  
- **Dashboards & templates**
  - Canonical data model
  
- **Guided submissions**
  - Validation & help text



</div>

</div>

<!--
Speaking notes:
- Emphasize that we started with listening, not tools: we interviewed Capital Planning, IT planners, business leaders, and project managers.
- Highlight the themes behind the quotes: lots of manual spreadsheet reconciliation, no single view of “where my IJ is,” and difficulty comparing options like-for-like.
- Explain how those insights shaped design choices:
  - Finance remains the system of record for financials; P.I.T.C.H. is a system of engagement and workflow.
  - We will pilot with 1–2 portfolios first to prove value and refine before scaling.
  - We introduce standard templates and a canonical data model so dashboards are meaningful and consistent.
  - Guided submissions with validation and hints reduce rework and help authors submit “right the first time.”
-->

---
layout: center
transition: fade
class: text-center
---

# Proposed Solution & Strategic Alignment

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded-xl border text-center shadow bg-blue-50">

## Integrated digital workflow


  - 📋 Standard templates & mandatory fields
  - 🔒 Role-based access & audit trail
  - 📊 Portfolio dashboards & exports

</div>

<div class="p-4 rounded-xl border text-center shadow bg-emerald-50">
  
## Strategic Alignment

  - **Innovate** → Unlocks external delivery
  - **Execute capital plan** → Governance foundation
  - **Accelerate work** → Smarter working
  - **F26 Action 11** → Grid modernization
  - **Tech Objective 6** → Data-driven platform

</div>

</div>



<!--
Speaking notes:
- Summarize the solution in one line: an integrated digital workflow for IJs and Business Cases.
- Briefly expand each feature:
  - Standard templates and mandatory fields to ensure quality and comparability.
  - Role-based access, approvals, and an immutable audit trail to satisfy control and audit needs.
  - Dashboards and export capabilities to feed existing processes like AIPS and PMO reporting.
- Then walk through the alignment bullets:
  - It supports “Innovate to meet customer needs” by making internal investment decisions faster.
  - It helps execute the capital plan with a clearer governance and decision foundation.
  - It aligns with “Accelerating our work” by reducing friction in the approval pipeline.
  - It contributes to F26 Action 11 and Technology Objective 6 by standing up a modern, data-driven platform.
-->

---


# Why P.I.T.C.H

<div class="grid grid-cols-2 gap-6">

<div>

### Business Drivers / Objectives



- Faster, better decisions on technology investments
- Trustworthy, auditable data for regulatory/compliance needs
- Clear portfolio visibility and trade-offs



### Benefits (Measures)



- ↓ Time from **Idea → IJ** and **IJ → Approved Business Case**
- ↓ Resubmission rate due to incomplete/incorrect submissions
- ↑ On-time approvals within agreed SLAs





</div>

<div>

### Business Changes (Enduring)



- Retire spreadsheets as primary tracking tools
- Use portfolio dashboards in **regular decision forums** (e.g., committees, QBRs)



### Enabling Changes (Prerequisites)



- Select and configure the workflow platform
- Develop templates, training material, and change playbooks
- Set up dashboards and reporting views



### IS/IT Enablers



- Integrated workflow platform capturing required data and states
- Analytics and portfolio dashboards




</div>

</div>

<!--
Speaking notes:
- Position this as our “why now” slide: why this project is worth doing.
- Start with the business drivers: better, faster investment decisions; trustworthy data; and real portfolio visibility.
- Connect the benefits to measurable improvements: shorter lead times, fewer resubmissions, more approvals within target SLAs.
- Call out the enduring business changes: over time, we retire spreadsheets as the primary tracking mechanism and use dashboards in standing decision forums.
- Explain the prerequisites: we need the right platform, good templates, training, and reporting views.
- Finally, highlight the IS/IT enablers: integrated workflow, RBAC and audit trail, dashboards, and exports that plug into AIPS and PMO processes.
-->

---
layout: center
class: text-center
transition: fade
---

# Success Criteria

<div class="grid grid-cols-1 gap-6">

<div class="p-6 rounded-2xl border shadow-lg bg-white inline-block">
  <div class="space-y-2">
    <div> <strong>Idea → IJ lead time (days)</strong> – target ↓</div>
    <div> <strong>IJ → Submitted BC (days)</strong> – target ↓</div>
    <div> <strong>Status latency (days)</strong>  – real-time visibility</div>
    <div> <strong>Portfolio freshness (%)</strong>  – current data tracking</div>
    <div> <strong>Resubmission rate</strong>  – target ↓ </div>
    <div> <strong>Median user effort</strong>  – target ↓ </div>
  </div>
</div>

</div>

<div class="text-center mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-sky-500">
  <p class="text-sm">
    <strong>Success Criteria:</strong> Pilot will be considered successful if we achieve 80% of targets across these KPIs within the pilot period.
  </p>
</div>

<!--
Speaking notes:
- Explain that these are the core KPIs we’ll use to judge the pilot.
- Clarify each briefly:
  - Lead time from Idea to IJ and IJ to submitted Business Case.
  - Status latency: how long information in the system lags reality.
  - Portfolio freshness: how many items have current, up-to-date data.
  - Resubmission rate: how often things come back due to missing or incorrect info.
  - Median user effort as a proxy for “how painful is this” for authors and advisors.
- Emphasize the 80% rule: we’re not expecting perfection, but if we hit roughly 80% of these targets in the pilot, that’s a strong signal to scale.
-->

---

# Change Impact Assessment

<div class="grid grid-cols-2 gap-6">

<div>

### **Overall impact:**



- *Moderate* – significant change to **how** we manage IJs/BCs, with mitigations to protect Finance and control processes.



### Process



- Move from  email + documents to a **standardized, state-driven workflow**
- Impacted: IT Planners, BSS IT Advisors, Capital Planning, Portfolio Owners, PMO



### Roles & Responsibilities



- Clear RACI for sponsors, approvers, reviewers
- Formalized ownership of data and decisions
- Impacted: sponsors, approvers, committees



</div>

<div>

### Tools & Data



- New system of engagement (P.I.T.C.H.) becomes the **single place to look** 
- Impacted: users currently managing ideas and writing IJs



### Culture & Ways of Working



- Shift to **transparent, data-driven, standardized** processes
- Impacted: all stakeholders involved in planning and decision-making



### Mitigations



- Co-designed workflow with key users
- Dual-running during pilot with current process
- Export functions for spreadsheet creation



</div>

</div>

<!--
Speaking notes:
- Set expectations: this is a moderate change, especially in how people work, but it’s designed to be low-risk for Finance and governance.
- Walk through the impact areas:
  - Process: moving from ad-hoc email + docs to a state-based, trackable workflow across common stakeholders.
  - Roles: clearer RACI and ownership around who submits, who reviews, who approves.
  - Tools & data: P.I.T.C.H. becomes the single place to check status and progress.
  - Culture: we’re pushing toward transparency, consistency, and data-driven decisions.
- Reassure people with mitigations:
  - Co-design with key users, not “done to” them.
  - Dual-run the pilot alongside current processes to de-risk adoption.
  - Ability to export to spreadsheets for people who still need them in the short term.
-->

---

# Looking Forward

<div class="grid grid-cols-2 gap-6">

<div>

### Near-Term Actions (Pilot)

- Confirm **pilot scope and portfolios** (1–2 portfolios with mixed complexity)
- Configure workflow platform with standard templates, fields, and approval paths
- Run pilot for a defined period (e.g., one planning cycle) with:
  - Baseline and post-pilot measurement of KPIs
  - Feedback loops to refine configuration

### Scale-Up Path (Post-Pilot)

- Decide whether to **iterate, scale, or stop** based on pilot KPIs and stakeholder feedback

</div>

<div>

### Asks from Leadership

- **Sponsor & champion**
  - Visible leadership team sponsorship to support adoption and anchor decisions
- **Endorse pilot mandate**
  - Agreement that selected pilot portfolios **use P.I.T.C.H. as the primary path** for IJs/BCs during the pilot
- **Resourcing (Part-time):**
    - Platform admin/configuration
    - Key SMEs from Capital Planning / IT Advisors

</div>

</div>

<!--
Speaking notes:
- Lay out the concrete next steps: choose 1–2 pilot portfolios, configure the platform, and run for a full planning cycle.
- Emphasize that we will measure before and after using the KPIs you just saw, and use feedback to refine the solution.
- Explain the decision gate: after the pilot, we can choose to iterate, scale, or stop based on evidence.
- Clearly articulate the leadership asks:
  - Sponsorship and visible support.
  - A clear mandate that the pilot portfolios use P.I.T.C.H. as the main path for IJs/BCs during the pilot.
  - Modest part-time resourcing for configuration and SME support.
-->

---


# Executive Summary

<div class="grid grid-cols-2 gap-6">

<div>

### 🎯 Problem



- Fragmented investment process → hard to track status, compare options, make timely decisions



### 💡 Our Proposal



- **P.I.T.C.H.**: Standardized workflow & data model for Ideas → IJs → Business Cases



### 🚀 How We'll Do It



- Pilot → Measure → Refine → Scale



</div>

<div>

### ⭐ Why It Matters



- Accelerates work (↓ cycle times)
- Improves decisions (data visibility)
- Strengthens controls (SoD, audit)
- Aligns with F26 priorities



### 🤝 What We Need



- Executive sponsorship
- Pilot mandate
- Success criteria & gates
- Configuration capacity



</div>

</div>

<!--
Speaking notes:
- Use this slide either as an opener or a recap; here it works well as a concise recap before Q&A.
- Restate the core problem in one sentence: fragmentation makes it hard to track and decide.
- Restate the proposal: P.I.T.C.H. gives us a standardized, end-to-end workflow and data model.
- Reiterate the implementation approach: start with a pilot, measure impact, refine, then scale.
- Summarize why it matters: faster cycle times, better decisions, stronger controls, and alignment with F26.
- End with the specific asks: sponsorship, mandate, agreement on success criteria, and a small amount of configuration capacity.
-->


---
layout: center
class: sea-break
---

<div class="text-center text-white">
  <h1 class="text-6xl font-bold mb-4 !text-white !border-white">P.I.T.C.H.</h1>
  <p class="text-2xl opacity-90">Building the Foundation for Decision Excellence</p>
</div>

<!--
Speaking notes:
- Use this as a short pause/transition slide.
- Re-emphasize the tagline: P.I.T.C.H. is about building a foundation for better, faster, more transparent decisions.
- You can pause briefly here, invite initial reactions, or signal the transition into either deeper technical content or (for this deck) the Slidev/demo section.
-->


---



---
layout: center
class: sea-break
---

<div class="text-center text-white">
  <h1 class="text-6xl font-bold mb-4 !text-white !border-white">THE PLAN</h1>
  <p class="text-2xl opacity-90">Implementation Strategy & Technical Details</p>
</div>

<!--
Speaking notes:
- Signal that we’re shifting from “why” and “what” into “how we’ll execute.”
- Position this section as the implementation view: dependencies, risks, metrics, and technical/operational details.
- Let the audience know you’ll keep it high-level but concrete enough to show feasibility.
-->

---



# P.I.T.C.H. - A High-Level Approach

<div class="grid grid-cols-2 gap-6">

<div>

##### **Discover**
- Map current-state processes, pain points, and control inventory
- Identify stakeholders and RACI
- Baseline timings (Idea→IJ, IJ→BC, approval cycle times)

##### **Define**
- Agree on **target data model**, workflow states, approval matrix, and “definition of ready/done”

##### **Pilot**
- Implement an MVP with 1–2 portfolios
- Define explicit **success criteria** 

</div>

<div>

##### **Evaluate**
- Measure cycle time, approval SLA performance, audit exceptions, decision latency, data completeness
- Capture qualitative feedback from users and leadership

##### **Scale**
- Roll out to additional portfolios with **change management, training, templates, guardrails, and support**

##### **Govern**
- Maintain a **control matrix** with automated checks, privacy/security controls, and audit requirements


</div>

</div>

<!--
Speaking notes:
- Frame this as the delivery roadmap: how we get from idea to a governed, scaled solution.
- Briefly expand each step:
  - Discover: understand the real process, pain points, and existing controls; baseline timings.
  - Define: design the target workflow, data model, approval matrix, and clear definitions of Ready/Done.
  - Pilot: configure an MVP for 1–2 portfolios with well-defined success criteria.
  - Evaluate: use both quantitative KPIs and qualitative feedback to assess impact.
  - Scale: extend to more portfolios with proper change management, training, and guardrails.
  - Govern: sustain the solution with a control matrix, automated checks, and ongoing KPI monitoring.
-->

---


# Benefits Dependency Network (Tightened)

<div class="text-sm">

<div class="grid grid-cols-1 gap-3">

<div class="p-3 rounded-lg border-l-4 border-sky-600 bg-sky-50">
  <div class="font-bold text-sky-900 mb-1">Business Drivers / Objectives</div>
  <div class="opacity-90">Faster decisions • Trustworthy, auditable data • Portfolio visibility</div>
</div>

<div class="p-3 rounded-lg border-l-4 border-emerald-600 bg-emerald-50">
  <div class="font-bold text-emerald-900 mb-1">Benefits (Measures)</div>
  <div class="opacity-90">↓ Lead time • ↓ Resubmissions • ↑ Data completeness • ↑ On-time approvals • ↑ Portfolio freshness</div>
</div>

<div class="p-3 rounded-lg border-l-4 border-violet-600 bg-violet-50">
  <div class="font-bold text-violet-900 mb-1">Enduring Business Changes</div>
  <div class="opacity-90">Retire spreadsheets • Adopt standard templates • Automated approvals • Dashboard use in QBRs</div>
</div>

<div class="p-3 rounded-lg border-l-4 border-amber-600 bg-amber-50">
  <div class="font-bold text-amber-900 mb-1">Enabling Changes</div>
  <div class="opacity-90">Platform selection & config • Training & templates • Dashboard setup • Data migration</div>
</div>

<div class="p-3 rounded-lg border-l-4 border-slate-600 bg-slate-50">
  <div class="font-bold text-slate-900 mb-1">IS/IT Enablers</div>
  <div class="opacity-90">Integrated workflow (JPD→Jira/Confluence) • RBAC + immutable audit trail • Analytics dashboards • AIPS export</div>
</div>

</div>

</div>

<!--
Speaking notes:
- Explain that this is the tightened benefits dependency network: how drivers, benefits, changes, and enablers line up.
- Start at the top: the core business objectives are faster decisions, trustworthy data, and real portfolio visibility.
- Connect these to measurable benefits: improved lead times, fewer resubmissions, better data quality, and fresher portfolio views.
- Show how those benefits depend on enduring changes in how we work (templates, dashboards, automation).
- Close by linking to the IS/IT enablers: if we invest in the workflow platform, RBAC/audit, and AIPS exports, we unlock the rest of the chain.
-->

---
layout: center
transition: fade
class: text-center
---

# Key Performance Indicators

<div class="grid grid-cols-1 gap-6">

<div class="p-6 rounded-2xl border shadow-lg bg-white inline-block">
  <div class="space-y-2">
    <div> <strong>Idea → IJ lead time</strong> ✓</div>
    <div> <strong>IJ → Approved BC lead time</strong> ✓</div>
    <div> <strong>% Approvals within SLA</strong> ✓</div>
    <div> <strong>Decision latency per gate</strong> ✓</div>
    <div> <strong>Active planners/week</strong> ✓</div>
    <div> <strong>Template adherence</strong> ✓</div>
    <div> <strong>Median user effort</strong> ↓</div>
    <div> <strong>Resubmission rate</strong> ↓</div>
  </div>
</div>

<div v-click class="text-center p-3 bg-gradient-to-r from-blue-50 to-emerald-50 rounded border border-blue-100">
  <strong>Vision:</strong> Accelerate decisions while protecting safety, controls, and affordability
</div>

</div>


<!--
Speaking notes:
- Position this as the detailed KPI set that underpins the pilot success criteria.
- Walk left column first:
  - Outcome KPIs capture how fast and how reliably decisions are being made.
  - Quality/control KPIs ensure we’re not trading speed for governance.
- Then the right column:
  - Adoption/change KPIs tell us whether people are actually using the tool and finding it usable.
  - Platform/dataflow KPIs ensure the underlying system is stable and trustworthy.
- Emphasize that these KPIs give a balanced view across business, controls, adoption, and technology.
-->



---

# Controls & Auditability

<div class="grid grid-cols-2 gap-6">

<div>

### Control Matrix

**SoD rules by stage**
  - Clear separation of duties
  
**Approver role mapping**
  - RACI-based authorization
  
**Required-field validation**
  - Completeness gates
  
**Change history**
  - Full audit trail



</div>

<div>

### Automated Checks



**Completeness validation**
  - Pre-submission checks
  
**Duplicate detection**
  - Prevent redundancy
  
**SLA timers**
  - Escalation triggers
  
**Late-approval alerts**
  - Accountability notifications





</div>

</div>

<!--
Speaking notes:
- Make it clear that controls are designed in from the start, not added later.
- On the left, explain the control matrix: SoD rules per stage, who is allowed to approve what, and how required fields act as gates.
- On the right, show how automated checks support that control matrix: completeness, duplicates, SLA timers, and late-approval alerts.
- Close with the audit artifacts: we can give auditors a complete, exportable trail of who did what, when, and to which fields.
-->

---

# Data Model & AIPS Alignment

<div class="grid grid-cols-2 gap-6">

<div>

### Canonical Fields



- Request ID
- Title / Summary
- Scope description
- Cost by month
- Risk score
- Benefits statement
- Status
- Owner
- Key timestamps



</div>

<div>

### Integration Roadmap

<div class="space-y-3">

<div v-click class="p-3 rounded-lg border-l-4 border-emerald-600 bg-emerald-50">
  <div class="font-bold text-emerald-900">Now (v1.0)</div>
  <div class="text-sm opacity-90">Clean canonical dataset with CSV export • Field mapping doc • Validation checks</div>
</div>

<div v-click class="p-3 rounded-lg border-l-4 border-sky-600 bg-sky-50">
  <div class="font-bold text-sky-900">Next (v1.5)</div>
  <div class="text-sm opacity-90">Export package • Schema validation • Error reporting</div>
</div>

<div v-click class="p-3 rounded-lg border-l-4 border-violet-600 bg-violet-50">
  <div class="font-bold text-violet-900">Later (v2.0)</div>
  <div class="text-sm opacity-90">Optional bi-directional sync if system becomes downstream SoR</div>
</div>

</div>

</div>

</div>

<!--
Speaking notes:
- Explain that we’ve defined a canonical data model that covers what Capital Planning and AIPS actually need.
- Walk through a few key fields (ID, cost by quarter, risk, benefits, timestamps) as the backbone for reporting.
- On the right, describe the integration roadmap:
  - v1.0 focuses on a clean exportable dataset and strong validation.
  - v1.5 adds a formal AIPS export package and schema validation.
  - v2.0 leaves room for optional bi-directional sync if AIPS becomes the downstream system of record.
-->

---

# Adoption & Change Enablement

<div class="grid grid-cols-2 gap-6">

<div>

### 30-Day Enablement Plan



- **Week 1:** Kickoff & playbook distribution
  
- **Week 2-3:** Guided submissions

- **Week 4:** Self-service milestone

### Success Measures



- Active planners per week
- Template adherence rate
- Time to first submission
- Help desk ticket volume



</div>

<div>

### Review Cadence



- **Monthly:** Process review
  - Workflow bottlenecks
  - User feedback
  
- **Quarterly:** KPI & control health check
  - Performance against targets
  - Control effectiveness review
  - Continuous improvement priorities



<div v-click class="mt-4 p-4 rounded-lg bg-amber-50 border-l-4 border-amber-600">
  <div class="font-bold text-amber-900 mb-1">Change Principle</div>
  <div class="text-sm opacity-90">
    Pilot groups will have dual-running support during the first cycle, with gradual transition to P.I.T.C.H. as primary path.
  </div>
</div>

</div>

</div>

<!--
Speaking notes:
- Emphasize that we have a structured enablement plan, not just a tool rollout.
- Walk through Weeks 1–4: kickoff, guided support, then moving to self-service with a clear adoption target.
- Highlight the simple success measures for change: how many people are using it, how well they follow templates, and what support load looks like.
- On the right, describe the governance cadence so this doesn’t become “set and forget.”
- Reinforce the change principle: dual-running at the start to reduce risk, but a clear path to P.I.T.C.H. becoming the primary route.
-->



---

# Dependencies & Risks

<div class="grid grid-cols-2 gap-6">

<div>

### Key Dependencies



- **Platform admin/config capacity**
  - 0.3 FTE for pilot period
  
- **Steering committee buy-in**
  - Mandate for pilot portfolios
  
- **Pilot group availability**
  - Dedicated time for testing
  
- **Data access for baseline**
  - Historical metrics needed



</div>

<div>

### Risks & Mitigations

<div class="space-y-3">

<div v-click class="p-3 rounded-lg bg-red-50 border-l-4 border-red-500">
  <div class="font-bold text-red-900">Risk: Shadow processes persist</div>
  <div class="text-sm opacity-90"><strong>Mitigation:</strong> Clear mandate + comprehensive training</div>
</div>

<div v-click class="p-3 rounded-lg bg-amber-50 border-l-4 border-amber-500">
  <div class="font-bold text-amber-900">Risk: Inconsistent data ownership</div>
  <div class="text-sm opacity-90"><strong>Mitigation:</strong> RACI matrix + mandatory ownership fields</div>
</div>

<div v-click class="p-3 rounded-lg bg-yellow-50 border-l-4 border-yellow-500">
  <div class="font-bold text-yellow-900">Risk: Scope creep</div>
  <div class="text-sm opacity-90"><strong>Mitigation:</strong> Stage-gate control + pilot boundary enforcement</div>
</div>

</div>

</div>

</div>

<!--
Speaking notes:
- Call out that these dependencies are mostly about people and time, not big new systems.
- Stress the need for a bit of platform admin time, a clear steering mandate, and pilot teams that can actually participate.
- Walk through each risk and mitigation:
  - Shadow processes: address via mandate and training.
  - Data ownership: fix with RACI and explicit fields for owners.
  - Scope creep: manage via stage-gates and very clear pilot boundaries.
- Reassure the audience that these are manageable if we’re deliberate.
-->

---

# Resources & Costs (Pilot View)

<div class="grid grid-cols-2 gap-6">

<div>

### Resource Requirements

- **Platform Admin (0.3 FTE)**
  - Configuration & maintenance
  
- **BA/Designer (0.2 FTE)**
  - Workflow design & templates
  
  
- **SMEs (as needed)**
  - Domain expertise & validation



</div>

<div>

### Cost Estimates



- **Platform licensing**
  - Leveraging existing tools
  
- **Incremental reporting tooling**
  - Analytics & dashboard capabilities
  
- **Training materials**
  - Playbooks, templates, guides



### Pilot Deliverables



- ✓ Configured workflow platform
- ✓ Control matrix & audit framework
- ✓ Portfolio dashboard



</div>

</div>

<!--
Speaking notes:
- Emphasize that the pilot is designed to be lean: fractions of roles rather than large dedicated teams.
- Walk through the roles and what they actually do in practice (PM, platform admin, BA/design, data/reporting, SMEs).
- Note that we intend to leverage existing platform licensing wherever possible.
- Close by reinforcing what leadership gets at the end of the pilot: a working platform, controls, dashboards, AIPS export, and a KPI-backed report to inform scale-up decisions.
-->

---

# Risk Register – Detailed Assessment

<div class="text-sm">

| ID | Risk Description | Impact | Likelihood | Score | Rating |
|----|-----------------|--------|------------|-------|--------|
| **IT1** | **Adoption Risk** – Users revert to spreadsheets despite mandate | 4 | 4 | 16 | <span class="px-2 py-1 rounded bg-red-100 text-red-800 font-bold">Major</span> |
| **IT2** | **Usability Risk** – Platform not fit for purpose, poor UX | 2 | 3 | 6 | <span class="px-2 py-1 rounded bg-green-100 text-green-800 font-bold">Minor</span> |
| **IT3** | **Leadership Engagement** – Lack of executive buy-in/sponsorship | 4 | 1 | 4 | <span class="px-2 py-1 rounded bg-green-100 text-green-800 font-bold">Minor</span> |

<div class="mt-4 grid grid-cols-3 gap-3">

<div class="p-3 rounded-lg bg-slate-50 border">
  <div class="font-bold text-xs mb-1">IT1 Mitigation</div>
  <div class="text-xs opacity-80">Pilot with specific groups • Clear mandate • Early wins communication</div>
</div>

<div class="p-3 rounded-lg bg-slate-50 border">
  <div class="font-bold text-xs mb-1">IT2 Mitigation</div>
  <div class="text-xs opacity-80">Proper evaluation prior • User testing • Iterative refinement</div>
</div>

<div class="p-3 rounded-lg bg-slate-50 border">
  <div class="font-bold text-xs mb-1">IT3 Mitigation</div>
  <div class="text-xs opacity-80">Define KPIs upfront • Regular LT reviews • Success metrics visible</div>
</div>

</div>

</div>

<!--
Speaking notes:
- Explain that this is a snapshot of the risk register focused on three key IT-related risks.
- Briefly walk through IT1–IT3, calling out impact, likelihood, and resulting score/rating.
- Highlight IT1 as the major risk: if people revert to spreadsheets, we lose the benefits; this is why mandate and early wins matter.
- For each risk, point to the mitigation card underneath and connect it to actions already built into the plan.
- Optionally remind the audience of the severity scale: Score = Likelihood × Impact, with thresholds for Minor, Moderate, Major.
-->

---

# Risk Assessment Framework

<div class="grid grid-cols-2 gap-6">

<div>

### Likelihood Rating (1-5)

<div class="space-y-2 text-sm">

<div v-click class="p-2 rounded bg-slate-50">
  <strong>1 – Rare (&lt;20%):</strong> Highly unlikely
</div>

<div v-click class="p-2 rounded bg-slate-50">
  <strong>2 – Unlikely (20-40%):</strong> Not expected but possible
</div>

<div v-click class="p-2 rounded bg-slate-50">
  <strong>3 – Possible (40-60%):</strong> May occur
</div>

<div v-click class="p-2 rounded bg-slate-50">
  <strong>4 – Likely (60-80%):</strong> Expected to occur
</div>

<div v-click class="p-2 rounded bg-slate-50">
  <strong>5 – Very Likely (&gt;80%):</strong> Regular occurrence
</div>

</div>

</div>

<div>

### Impact Rating (1-5)

<div class="space-y-2 text-sm">

<div v-click class="p-2 rounded bg-slate-50">
  <strong>1 – Minimal:</strong> Within contingency
</div>

<div v-click class="p-2 rounded bg-slate-50">
  <strong>2 – Modest:</strong> &lt;10% over thresholds
</div>

<div v-click class="p-2 rounded bg-slate-50">
  <strong>3 – Significant:</strong> 15-25% over thresholds
</div>

<div v-click class="p-2 rounded bg-slate-50">
  <strong>4 – Severe:</strong> &gt;25% over thresholds
</div>

<div v-click class="p-2 rounded bg-slate-50">
  <strong>5 – Disastrous:</strong> Program cancellation
</div>

</div>

### Risk Severity

<div v-click class="mt-3 p-3 rounded-lg bg-blue-50 border-l-4 border-blue-600">
  <div class="font-bold mb-1">Severity = Likelihood × Impact</div>
  <div class="text-xs space-y-1">
    <div><strong>Minor (&lt;10):</strong> Monitor at project level</div>
    <div><strong>Moderate (10-14):</strong> Executive oversight</div>
    <div><strong>Major (&gt;15):</strong> C-suite monitoring</div>
  </div>
</div>

</div>

</div>

<!--
Speaking notes:
- Use this slide to show that the risk ratings are based on a simple, transparent framework.
- Explain the Likelihood scale first, then the Impact scale, using one or two examples from the previous slide.
- Show how multiplying Likelihood × Impact gives a numeric severity score.
- Connect the severity ranges (Minor/Moderate/Major) to who should be paying attention (project team, executives, C-suite).
-->

---

# Dashboards & Reporting

<div class="grid grid-cols-2 gap-6">

<div>

- **Executive View**
  - Portfolio health at a glance
  - Investment pipeline by quarter
  - Top risks & dependencies
  
- **Planning View**
  - Ideas by status
  - IJ/BC aging analysis
  - Resource allocation
  
- **Approval View**
  - Items awaiting decision
  - SLA compliance
  - Bottleneck identification

</div>

<div>


- **Cycle time trends**
  - Idea → IJ → BC progression
  
- **Decision velocity**
  - Approvals per period
  - Gate timer compliance
  
- **Data quality indicators**
  - Completeness scores
  - Resubmission rates



<div v-click class="mt-3 p-3 rounded-lg bg-emerald-50 border-l-4 border-emerald-600">
  <div class="font-bold text-emerald-900 mb-1">Export Capability</div>
  <div class="text-xs opacity-90">
    All dashboards support CSV/Excel export for offline analysis and integration with existing reporting processes.
  </div>
</div>

</div>

</div>

<!--
Speaking notes:
- Explain that dashboards are tailored to different audiences: executives, planners, and approvers.
- On the left, walk through what each view emphasizes (health, pipeline, bottlenecks, etc.).
- On the right, highlight the kinds of metrics they’ll see: cycle times, composition, decision velocity, and data quality.
- Call out export capability: this isn’t a closed system; data can flow into existing reporting tools and processes.
- If you have mockups in the real deck, reference them here as the visual reference for these concepts.
-->

---
layout: center
class: sea-break
---

<div class="text-center text-white">
  <h1 class="text-5xl font-bold mb-4 !text-white !border-white">Ready to Execute</h1>
  <p class="text-xl opacity-90">Clear plan • Defined metrics • Managed risks</p>
  <p class="text-lg opacity-75 mt-4">Let's make this happen.</p>
</div>

<!--
Speaking notes:
- Use this as your closing transition back to a final ask or Q&A.
- Reinforce the message: we have a clear plan, defined metrics, and a managed risk profile.
- End with a simple call to action: with leadership support, we’re ready to move into pilot execution.
-->

<style src="./styles/bchydro.css"></style>
