# 📘 SmartExcel: DCA Planner For Bitcoin Investment 
## Promptless AI for Probabilistic Modeling and Dip-Based DCA Planning

---

## 1. Project Overview

This capstone project builds and deploys a Bitcoin investor dashboard on **Amazon EC2** that combines:

- Real-time market data (Fear & Greed index, BTC price curve)
- Structural anchors (200-week EMA and Realized Price)
- A 1-month probabilistic distribution model across psychologically and structurally meaningful price ranges
- A personalized, dip-based DCA ladder plan based on the user’s current BTC position and future budget

Unlike typical dashboards, this system includes a **promptless AI engine (ChatGPT)** used internally to:

- Generate the probability model  
- Generate the dip-based DCA ladder  
- Provide human-readable rationale  

The UI does **not** expose a chat box or require user prompts. AI operates invisibly behind the scenes.

---

## 2. Project Objectives

The system must:

1. Show Crypto Fear & Greed Index (current + short history)
2. Show live BTC price curve
3. Compute and visualize 200W EMA and Realized Price
4. Identify current structural position relative to anchors
5. Generate:
   - 1-month probability distribution across price ranges
   - Dip-based DCA ladder customized to user inputs
6. Use AI internally for generation and explanation
7. Deploy securely on AWS EC2

---

## 3. System Architecture

### 3.1 Components

**Frontend (React)**
- Dashboard UI
- Charts and visualizations
- Structured forms (no free-text prompt inputs)

**Backend (FastAPI or Node/Express)**
- Data ingestion and caching
- Indicator computation (EMA, structural metrics)
- LLM Orchestrator (ChatGPT integration)
- Output validation and guardrails
- Optional snapshot storage

**External Data Sources**
- Alternative.me (Fear & Greed Index)
- CoinGecko (BTC price and OHLC data)
- Optional realized price dataset (Glassnode or offline dataset)

**Deployment**
- Amazon EC2 (Ubuntu)
- Nginx reverse proxy
- HTTPS (SSL)
- Environment variables for API keys
- Logging and monitoring

---

## 4. Functional Requirements

---

### 4.1 Market Data Dashboard

#### Feature 1: Fear & Greed Index Panel

- Fetch current value + last 30 values
- Display:
  - Score (0–100)
  - Regime label (Extreme Fear → Extreme Greed)
  - Mini historical chart
- Periodic refresh with caching

---

#### Feature 2: BTC Live Price & Chart

- Display current BTC price (USD)
- Chart modes: 7D / 30D / 90D / 1Y
- Optional candlestick mode
- Overlay:
  - 200W EMA
  - Realized Price

---

### 4.2 Structural Position Module

#### Feature 3: 200-Week EMA

- Compute 200W EMA from weekly closing data
- Display distance from EMA (%)
- Tag status:
  - Below EMA
  - Near EMA
  - Above EMA

---

#### Feature 4: Realized Price

- Display realized price line
- Compute distance from realized price (%)
- Classify regime:
  - Capitulation
  - Accumulation
  - Speculative

---

#### Feature 5: Structural Summary

- Compute structural state
- Display concise summary card
- Generate short explanation (AI-generated from structured JSON)

---

## 4.3 AI-Generated 1-Month Probability Distribution Model

### Feature 6: Boundary-Aware Range Selection

Boundaries must incorporate:

**Psychological boundaries**
- 50K
- 60K
- 70K
- 80K
- 100K

**Structural boundaries**
- 200W EMA
- Realized price
- Recent swing highs/lows

AI may propose boundaries, but backend enforces:

- Ordered unique values
- 4–8 total bands
- At least one structural boundary if relevant
- Schema validation

---

### Feature 7: Probability Assignment

AI generates probability distribution for a 1-month horizon using:

- Recent volatility
- Fear & Greed regime
- Distance to structural anchors
- Trend indicators (e.g., 30D momentum)

#### Required Output

| Price Range | Probability |
|------------|------------|
| < 60K | XX% |
| 60–70K | XX% |
| 70–80K | XX% |
| > 80K | XX% |

Must include:

- Histogram visualization
- Tail risk indicator
- Short model explanation

#### Backend Validation Rules

- Probabilities sum to 1.0 (100%)
- No negative values
- Schema enforcement
- No hallucinated numbers

---

## 4.4 AI-Generated Dip-Based DCA Planning Engine

### Feature 8: DCA Ladder Generator

#### User Inputs (Form-Based)

- Current BTC position ($)
- Available budget ($)
- Risk profile (Conservative / Moderate / Aggressive)
- Ladder depth (4 / 6 / 8 rungs)
- Optional dry powder percentage

#### AI Generates

- Price trigger levels
- Allocation per rung
- Optional adjustment rules

#### Hard Constraints (Backend Enforced)

- Allocations sum to 100% of deployable budget
- Minimum and maximum allocation per rung
- Monotonically decreasing price levels
- Respect dry powder constraint
- No leverage recommendations

#### Example Output

Assume:
- Available budget: $20,000
- No dry powder reserved
- Ladder depth: 4 rungs

| Price Level | Allocation | Dollar Amount |
|------------|------------|---------------|
| 62K | 20% | $4,000 |
| 58K | 25% | $5,000 |
| 54K | 30% | $6,000 |
| 50K | 25% | $5,000 |

---

## 5. Promptless AI Integration Design

### No Prompt UI Policy

- No chat box
- No free-text user input
- AI invoked only via button clicks or structured forms

---

### LLM Orchestrator Endpoints (Backend)

- `POST /ai/generate-boundaries`
- `POST /ai/generate-probabilities`
- `POST /ai/generate-dca`
- `POST /ai/generate-insights`

Each endpoint must:

- Provide structured JSON context
- Enforce strict schema on LLM output
- Validate correctness before returning to frontend

---

### Safety and Guardrails

- Outputs framed as decision support
- No guaranteed returns
- No explicit “buy now” or “sell now” commands
- Strict schema validation
- Regeneration or fallback if validation fails

---

## 6. Non-Functional Requirements

### Performance

- Page load < 3 seconds
- AI generation target < 3–5 seconds
- External API caching

### Reliability

- Graceful fallback if data APIs fail
- LLM failure fallback model
- Logging and monitoring

### Security

- HTTPS enabled
- API keys via environment variables
- Rate limiting
- No wallet integration

### Maintainability

- Modular architecture
- Clear JSON schemas
- Testable quant logic

---

## 7. Deployment (AWS EC2)

- Ubuntu EC2 instance
- Nginx reverse proxy
- Backend service via PM2 or Gunicorn
- SSL configuration
- Optional Docker containerization
- Optional CI/CD (GitHub Actions)

---

## 8. Team Roles (4–5 Students)

**Frontend Engineer**
- UI, charts, ladder visualization

**Backend Engineer**
- APIs, indicators, caching

**AI Integration Engineer**
- LLM orchestration
- Schema enforcement
- Guardrail logic

**Quant Modeling Engineer**
- Baseline probability model
- Calibration and evaluation

**DevOps / QA (Optional)**
- EC2 setup
- Security hardening
- Testing suite

---

## 9. Milestones (16 Weeks)

- Weeks 1–3: Architecture + API exploration
- Weeks 4–6: Dashboard + data ingestion
- Weeks 7–9: Structural anchor module
- Weeks 10–12: AI distribution + DCA integration
- Weeks 13–14: Deployment + security
- Weeks 15–16: Testing + final demo

---

## 10. Deliverables

- Deployed EC2 web application
- GitHub repository
- Technical documentation
- Modeling methodology report
- AI validation report
- Final presentation/demo

---

## 11. Evaluation Criteria

- Correct indicator calculations
- Robust probability + DCA generation
- Safe and validated AI outputs
- UI clarity
- Cloud deployment reliability
- Code modularity

---

## 12. Final Positioning

This project delivers a promptless, AI-assisted Bitcoin decision dashboard that:

- Computes structural anchors
- Uses AI to generate probability distributions
- Uses AI to generate personalized DCA ladders
- Enforces guardrails for safety
- Deploys on AWS EC2 as a production-grade capstone system
