---
title: P.I.T.C.H. – Portfolio Investment Tracker & Control Hub
theme: default
fonts:
  sans: "GT Haptik, Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
  monospace: "Fira Code, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
colorSchema: light
download: true
info: |
  P.I.T.C.H. – DSL Capstone Presentation (Team 9)
---

# Executive Summary – P.I.T.C.H.

- **Problem**  
  Technology investment process relies on emails, documents, and spreadsheets, making it hard to see status, compare options, and make timely, well-governed decisions.
- **Our Proposal**  
  **P.I.T.C.H. – Portfolio Investment Tracker & Control Hub**: a standardized, auditable workflow and data model for Ideas → IJs → Business Cases, with clear approvals and portfolio-level dashboards.
- **Why It Matters**
  - Accelerates our work by reducing cycle times and rework
  - Improves decisions with consistent data and portfolio visibility
  - Strengthens controls through SoD, approvals, and audit trails
  - Supports F26 Action 11 and Technology Objective 6
- **How We’ll Do It**  
  Pilot in 1–2 portfolios, measure impact, refine and scale using a standard playbook.
- **What We Need**
  - Executive sponsorship and mandate for the pilot
  - Agreed success criteria and decision gates
  - Modest configuration and SME capacity

<!--
Speaking notes:
Use this slide to set the frame quickly.

Hit five points:
- Problem in one sentence: fragmented process, hard to see status or compare options.
- What P.I.T.C.H. is: a workflow and data model for ideas to IJs to Business Cases.
- Why it matters: accelerates work, improves decisions, strengthens controls, and aligns with F26 priorities.
- How we’ll do it: focused pilot in 1–2 portfolios, measure, then refine and scale.
- What we need: sponsorship, a clear pilot mandate, decision gates, and configuration/SME capacity.

Don’t go into detail yet—this is just the headline story.
-->

---
layout: cover
---

Portfolio Investment Tracker & Control Hub (P.I.T.C.H.)

::subtitle::
Team 9 – Capstone Project • November 16, 2025
::
- **Team**
  - Robert McLellan
  - Liliana Romo Garcia
  - Nils Kuerten
  - Michael Maruno
- **Date:** November 16, 2025

<!--
Speaking notes:
Introduce the team and context.
- Introduce yourselves as Team 9 and state this is your capstone project.
- Briefly say that P.I.T.C.H. is about improving how BC Hydro manages Technology investment decisions.
Keep it short; the real content starts on the next slides.
-->

---

# Problem & Opportunity

## Vision

Streamline and accelerate Technology work-intake and investment decisions via a single digital workflow with automated approvals, traceability, and portfolio-level reporting – in a way that **accelerates our work while protecting safety/controls and affordability**.

## Current Problems

- **Difficult to track IJ / Business Case status**
  - Status scattered across SharePoint, spreadsheets, email threads, and people’s heads.
- **Low visibility & late alignment**
  - Business ideas surface to IT and Capital Planning too late; teams are surprised by asks.
- **No consistent prioritization**
  - Urgent and low-value items compete for the same attention and funds.
- **No shared roadmap**
  - Stakeholders can’t see what’s in the funnel, what’s stuck, or what’s approved.

## Opportunity

Replace the current email/docs/spreadsheet process with an **integrated, auditable workflow** that:

- Standardizes data capture for **scope, risk, benefits, costs by quarter, and dependencies**
- Provides **end-to-end status visibility** from idea → IJ → Business Case
- Supports **automated approvals, risk controls, and an immutable audit trail**
- Enables **portfolio-level reporting and decision support** for the Strategic Action Plan

<!--
Speaking notes:
Anchor the pain and opportunity.

Use one concrete example: reconciling multiple spreadsheets/emails just to answer a simple status question.

Explain systemic problems:
- Status scattered across tools and people.
- Low visibility and late alignment between Business, IT, and Capital Planning.
- No consistent way to prioritize or see trade-offs.
- No single roadmap view.

Then frame the opportunity: a single integrated, auditable workflow and dataset that standardizes key fields and provides end-to-end visibility and portfolio reporting.
-->

---

# Insights from Listening

## Who we listened to

- Capital Planning and Finance (IJ / BC owners)
- IT Planners and BSS IT Advisors
- Portfolio / Program Owners
- PMO / Project Managers involved in capital delivery

## What we heard

<div class="bch-quote">
“I spend hours each month reconciling **different spreadsheet versions** to answer simple status questions.”
</div>
<div class="bch-quote">
“We don’t have a **single place** to see where an IJ is stuck or who needs to act next.”
</div>
<div class="bch-quote">
“I’m worried a new tool will **add steps** or slow down quarter-end processes if it doesn’t respect Finance timelines.”
</div>
<div class="bch-quote">
“Different groups track things differently – it’s hard to tell if we’re comparing **like-for-like** between investments.”
</div>
<div class="bch-quote">
“We need **visibility across portfolios**, not just within one area, to make trade-offs.”
</div>

## How this shaped P.I.T.C.H.

- **Finance system of record stays unchanged**
  - P.I.T.C.H. focuses on **intake and decision workflow**, with exports into existing Finance/PMO tools.
- **Pilot and phased rollout instead of big-bang**
  - Start with 1–2 portfolios and prove value before expanding.
- **Dashboards and standard templates are non-negotiable**
  - Prioritized investment in a **canonical data model**, templates, and portfolio dashboards.
- **Guided submissions & definition of ready**
  - Added **help text, validation, and mandatory fields** to reduce rework and resubmissions.

<!--
Speaking notes:
Show the design is grounded in conversations, not theory.

Summarize who you spoke with: Capital Planning/Finance, IT Planners/BSS Advisors, Portfolio Owners, PMO/PMs.

Highlight 2–3 key pain points:
- Time spent reconciling spreadsheets.
- No single source of truth for status and next actions.
- Finance’s concern about extra steps and quarter-end timelines.

Then link to design decisions:
- Finance remains system of record; P.I.T.C.H. covers intake/decision and exports out.
- Pilot and phased rollout.
- Dashboards and templates as essentials.
- Guided submissions and clear definitions of ready/done.
-->

---

# Proposed Digital Solution & Strategic Alignment

## Proposed Solution

Replace email/docs/spreadsheets with an **integrated digital IJ / BC workflow** (e.g., Atlassian-based stack) that captures required data, states, and approvals end-to-end, with:

- Standard templates and mandatory data fields
- Role-based access and immutable audit trail
- Portfolio dashboards and export packages for AIPS / PMO / Finance

## Strategic Alignment

- **Priority – Innovate to meet customer needs**  
  Internal practice change that **unlocks external delivery** by speeding how we select, prioritize, and fund digital initiatives and business practice improvements.
- **Action – Execute our capital plan with an optimized delivery approach**  
  Provides a **fit-for-purpose governance and delivery foundation** for technology investments.
- **Commitment – Accelerating our work**  
  Standardized workflow, metrics, and dashboards **enable smarter working** without compromising safety or controls.
- **F26 Action Plan – Action 11**  
  Helps prioritize and move grid-modernization and customer-facing technology investments efficiently.
- **Technology F26 Business Plan – Objective 6**  
  Stands up a modern, configurable, **data-driven platform** to operationalize emergent technology capabilities.

<!--
Speaking notes:
Explain P.I.T.C.H. in plain language as an integrated workflow and data model for Ideas → IJs → Business Cases.

Call out main capabilities: templates, mandatory fields, clear states/approvals, role-based access, audit trail, dashboards, and export packages.

Connect to strategy:
- Supports “Innovate to meet customer needs”.
- Helps “Execute our capital plan with an optimized delivery approach”.
- Accelerates work while preserving safety and financial controls.
- Directly supports F26 Action 11 and Technology Objective 6.

Don’t read every bullet verbatim; keep it conversational.
-->

---
layout: center
class: sea-break
---

---

# Strategic Data Plan


## Objective

Create a **single, reliable dataset** for all Technology Investment Justifications and Business Cases that supports:

- Faster, better investment decisions
- Portfolio-level visibility and trade-offs
- Audit-ready controls and traceability

## Core Data Model (Examples)

- **Idea / Proposal** – ID, title, description, sponsoring KBU, business owner
- **Financials** – cost estimates by fiscal quarter/year, OPEX vs CAPEX, funding source
- **Benefits** – description, category (customer, reliability, safety, efficiency), benefit measures
- **Risk & Controls** – risk rating, control requirements, SoD / approval levels
- **Workflow** – state transitions, timestamps, approvers, comments / rationale

## Key Data Sources

- **P.I.T.C.H. platform** – canonical record of IJ/BC workflow, states, approvals
- **PMO reporting & AIPS** – project actuals, timelines, benefit realization
- **Capital forecasting spreadsheets** – historical baselines for budget vs actuals and forecasting

## Integration Approach (Now / Next / Later)

- **Now:** P.I.T.C.H. as **system of engagement** with standard exports into AIPS / PMO tools
- **Next:** Structured interfaces and mappings into AIPS (and potentially LeanIX) for **portfolio analytics**
- **Later:** Explore deeper integrations or refactoring of legacy spreadsheets once model/process are stable

## Data Governance

- Clear **data ownership** shared between Capital Planning (content) and Technology (platform)
- **Quality checks** – completeness thresholds, validation rules, periodic reviews
- **Retention & access** – policy-aligned retention and role-based access

<!--
Speaking notes:
Position this as the data backbone.

Explain the objective: one canonical dataset supporting decisions, trade-offs, and audit.

Walk through domains: Idea/Proposal, Financials, Benefits, Risk & Controls, Workflow.

Call out key sources and the Now/Next/Later approach: exports first, then structured mapping, then deeper integration.

End with governance: shared ownership, quality checks, and role-based access control.
-->

---

# Benefit Dependency Network – P.I.T.C.H.

## Business Drivers / Objectives

- Faster, better decisions on technology investments
- Trustworthy, auditable data for regulatory/compliance needs
- Clear portfolio visibility and trade-offs

## Benefits (Measures)

- ↓ Time from **Idea → IJ** and **IJ → Approved Business Case**
- ↓ Resubmission rate due to incomplete/incorrect submissions
- ↑ Data completeness and consistency across IJs/BCs
- ↑ On-time approvals within agreed SLAs
- ↑ Portfolio visibility and freshness

## Business Changes (Enduring)

- Retire ad-hoc spreadsheets as primary tracking tools
- Adopt standard IJ/BC templates and definitions of ready/done
- Use portfolio dashboards in **regular decision forums** (e.g., committees, QBRs)

## Enabling Changes (Prerequisites)

- Select and configure the workflow platform
- Develop templates, training material, and change playbooks
- Set up dashboards and reporting views
- Migrate or re-key critical in-flight items into the new flow

## IS/IT Enablers

- Integrated workflow platform capturing required data and states
- Role-based access control and immutable audit trail
- Analytics and portfolio dashboards
- Export/mapping package for AIPS / PMO systems

<!--
Speaking notes:
Show structured benefits thinking.

Walk from top to bottom:
- Business objectives: better/faster decisions; trustworthy data; clear portfolio view.
- Benefits: shorter lead times, fewer resubmissions, more completeness, on-time approvals, fresher data.
- Business changes: retiring spreadsheet-based tracking, using standard templates and dashboards in governance forums.
- Enabling changes: configuring platform, templates, training, dashboards, handling in-flight items.
- IS/IT enablers: the actual tools and integrations.

Reinforce that benefits depend on these business changes and enablers being adopted.
-->

---
layout: two-cols
---

# KPIs

::left::
## Outcome / Decision Speed
- **Idea → IJ lead time (days)** – target ↓ 40–50%
- **IJ → Submitted BC (days)** – target ↓ 30–40%
- **Status latency (days)**
- **Portfolio freshness (%)**

::right::
## Quality / Control
- **Data completeness ≥ 98%**
- **Resubmission rate ↓ 50%**
- **Audit exceptions ≤ 1/qtr**
- **SoD/RBAC violations = 0**

## Adoption / Change
- **Active planners ≥ 80%**
- **Template adherence ≥ 95%**
- **Median user effort ↓ 30–40%**
- **CSAT ≥ 8/10**


<!--
Speaking notes:
Explain this is how you’ll know P.I.T.C.H. is working.

Group KPIs:
- Outcome/Decision Speed: lead times, status latency, data freshness.
- Quality/Control: completeness, resubmissions, audit exceptions, SoD/RBAC.
- Adoption/Change: active planners, template adherence, effort reduction, CSAT.

Highlight a few key metrics for leaders to watch; emphasize these will guide the pilot decision to scale/iterate/stop.
-->

---

# Change Impact Assessment

- **Overall impact:** *Moderate–High* – significant change to **how** we manage IJs/BCs, with mitigations to protect Finance and control processes.

## Process (High)

- Move from unstructured email + documents to a **standardized, state-driven workflow** with clear gates and SLAs
- Impacted: IT Planners, BSS IT Advisors, Capital Planning, Portfolio Owners, PMO

## Roles & Responsibilities (Medium–High)

- Clearer RACI for idea sponsors, approvers, reviewers
- Formalized ownership of data and decisions
- Impacted: sponsors, approvers, governance committees

## Tools & Data (Medium)

- New system of engagement (P.I.T.C.H.) becomes the **single place to look** for IJ/BC status and portfolio view
- Impacted: users currently relying on SharePoint spreadsheets, email, and local trackers

## Culture & Ways of Working (Medium)

- Shift from “heroic chasing” and local workarounds to **transparent, data-driven, standardized** processes
- Impacted: all stakeholders involved in planning and decision-making

## Mitigations

- Co-designed workflow with key users
- Playbooks and “definition of ready/done”
- Office hours and initial white-glove support
- Dual-running during pilot and migration of critical in-flight items
- Export functions for users who still need spreadsheets
- Communities of practice and recognition for effective use

<!--
Speaking notes:
Explain that the impact is meaningful but manageable.

Walk each dimension:
- Process: big change, but adds clarity and predictability.
- Roles: clearer RACI and ownership of data/decisions.
- Tools/data: new system of engagement.
- Culture: from chasing to transparent, standardized processes.

Then emphasize mitigations: co-design, playbooks, strong support in pilot, dual-running and export options, communities of practice, recognition for good adoption.
-->

---

# Action & Ask Plan

## Near-Term Actions (Pilot)

- Confirm **pilot scope and portfolios** (1–2 portfolios with mixed complexity)
- Configure workflow platform with standard templates, fields, and approval paths
- Run pilot for a defined period (e.g., one planning cycle) with:
  - Baseline and post-pilot measurement of KPIs
  - Office hours and support
  - Feedback loops to refine configuration

## Scale-Up Path (Post-Pilot)

- Decide whether to **iterate, scale, or stop** based on pilot KPIs and stakeholder feedback
- If scaling:
  - Incorporate learnings into a **standard playbook**
  - Extend to additional portfolios
  - Refine integrations (e.g., AIPS exports)

## Asks from Leadership

- **Sponsor & champion**
  - Visible executive sponsorship to support adoption and anchor decisions
- **Endorse pilot mandate**
  - Agreement that selected pilot portfolios **use P.I.T.C.H. as the primary path** for IJs/BCs during the pilot
- **Resourcing**
  - Part-time capacity for:
    - Platform admin/configuration
    - BA/Designer
    - Data/reporting support
    - Key SMEs from Capital Planning / IT Advisors
- **Decision points**
  - Agreed **success criteria** and **decision gate** after the pilot:
    - Proceed to scale, iterate further, or stop

<!--
Speaking notes:
Be explicit about what happens next and what you need.

Summarize near-term pilot actions: scope, configure, run with KPIs and support.

Explain the scale-up path: iterate/scale/stop based on evidence; if scaling, codify learning in a playbook and extend with refined integrations.

State the asks clearly: sponsorship, pilot mandate, resourcing, and agreed decision points.

Invite them to view this as a low-risk, learning-oriented step.
-->

---

# P.I.T.C.H.: High-Level Approach

- **Discover**
  - Map current-state processes, pain points, and control inventory
  - Identify stakeholders and RACI
  - Baseline timings (Idea→IJ, IJ→BC, approval cycle times)
- **Define**
  - Agree on **target data model**, workflow states, approval matrix, and “definition of ready/done”
  - Decide how costs by quarter, risk/benefit, and controls will be captured
- **Pilot**
  - Implement an MVP with 1–2 portfolios
  - Define explicit **success criteria** and “kill/iterate” thresholds
- **Evaluate**
  - Measure cycle time, approval SLA performance, audit exceptions, decision latency, data completeness
  - Capture qualitative feedback from users and leadership
- **Scale**
  - Roll out to additional portfolios with **change management, training, templates, guardrails, and support**
  - Embed dashboards into regular governance forums
- **Govern**
  - Maintain a **control matrix** with automated checks, privacy/security controls, and audit requirements
  - Run periodic retrospectives and KPI reviews to drive continuous improvement

<!--
Speaking notes:
Reinforce that this is a staged, learning-led approach.

Briefly explain each step:
- Discover: understand current processes, pain points, and controls; baseline metrics.
- Define: finalize target data model, workflow, approvals, definitions of ready/done.
- Pilot: MVP in 1–2 portfolios with clear success and kill/iterate criteria.
- Evaluate: use KPIs and feedback to assess speed, quality, and controls.
- Scale: extend to more portfolios with structured change management and governance integration.
- Govern: maintain ongoing controls and continuous improvement.

Tie back to the executive summary: P.I.T.C.H. can be tested and evolved with low risk and clear evidence.
-->

<style src="./styles/bchydro.css"></style>
