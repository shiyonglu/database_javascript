📘 Capstone Project Requirement Analysis Report
Project Title

BTC Structural Dashboard: A Quantitative Decision-Support Platform for Bitcoin Investors

1. Project Overview

This project aims to design and deploy a web-based Bitcoin investor dashboard on Amazon EC2 that integrates real-time market data with structural long-term indicators and quantitative decision models.

Unlike typical price-tracking websites, this platform emphasizes:

Structural anchors (200-week EMA & Realized Price)

Psychological price boundaries

Probabilistic short-term range modeling

Personalized dip-based DCA planning

The system will provide disciplined, data-driven guidance rather than speculative signals.

2. Project Objectives

The platform must:

Display real-time Crypto Fear & Greed Index

Display live Bitcoin price chart

Calculate and visualize:

200-week EMA

Realized Price

Current structural position

Generate a 1-month probabilistic BTC range model

Generate dip-based DCA strategy based on:

Current BTC position

Available capital

Deploy on Amazon EC2 with production-ready architecture

3. Functional Requirements
3.1 Real-Time Market Dashboard
Feature 1: Fear & Greed Index

Data Source: alternative.me API
Requirements:

Fetch daily index value

Display:

Numeric score (0–100)

Classification (Extreme Fear → Extreme Greed)

Historical 30-day mini-chart

Auto-refresh every 5 minutes

Feature 2: Live Bitcoin Price Chart

Data Source: CoinGecko API

Requirements:

Real-time BTC price (USD)

30-day price curve

Zoomable chart (7D, 30D, 90D, 1Y)

Candlestick option (bonus feature)

3.2 Structural Position Module
Feature 3: Structural Anchors

The system must calculate:

(A) 200-Week EMA

Formula:
EMA_t = α × Price_t + (1−α) × EMA_(t−1)

Data needed:

Weekly historical price (at least 4 years)

Output:

Overlay 200W EMA on price chart

Display:

Distance from EMA (%)

Price position category:

Below EMA

Near EMA

Above EMA

(B) Realized Price

Definition:
Realized Cap / Circulating Supply

Data Source:

Glassnode API (if available) or simulated using historical dataset

Display:

Realized price line

Distance to realized price

Position classification:

Capitulation zone

Accumulation zone

Speculative zone

Structural Position Summary

System must generate automatic interpretation such as:

“BTC is 18% above 200W EMA”

“BTC is 35% above realized price”

“Structural positioning: Mid-cycle”

3.3 Probabilistic 1-Month BTC Range Model
Feature 4: Range-Based Probability Model

The system must:

Define psychological/structural boundaries:

50K

60K

70K

80K

100K

Generate probability distribution across ranges:

Example output:

Price Range	Probability (1 Month)
< 60K	30%
60–70K	40%
70–80K	20%
> 80K	10%
Modeling Approaches (Team Must Choose One)

Option A: Monte Carlo simulation
Option B: GARCH volatility model
Option C: Historical volatility + drift
Option D: Hybrid structural + sentiment weighted model

Model must:

Update daily

Explain methodology

Output visual probability bar chart

3.4 Dip-Based DCA Engine
Feature 5: Personalized DCA Strategy Generator

User inputs:

Current BTC position (USD value)

Available capital

Risk preference (Conservative / Moderate / Aggressive)

System outputs:

Example:

If BTC drops to:

62K → Deploy 20%

58K → Deploy 30%

54K → Deploy 30%

50K → Deploy 20%

Requirements:

Respect psychological boundaries

Respect structural anchor zones

Prevent full capital deployment too early

Provide “Powder Remaining” visualization

4. Non-Functional Requirements
4.1 Performance

Page load < 3 seconds

API response handling < 1 second

Efficient caching

4.2 Reliability

Graceful handling of API failures

Fallback data mechanism

Logging system

4.3 Security

HTTPS enabled

Rate limiting

API keys stored securely (environment variables)

No private wallet information stored

4.4 Scalability

Modular backend architecture

Docker containerization (bonus)

Future migration to AWS Elastic Beanstalk or ECS

5. System Architecture
Proposed Stack
Frontend

React.js

Chart.js or TradingView charting library

Backend

Python (FastAPI) OR Node.js (Express)

RESTful APIs

Scheduled background jobs

Data Sources

CoinGecko API

Alternative.me API

Glassnode API (optional)

Deployment

Amazon EC2 (Ubuntu)

Nginx reverse proxy

PM2 (if Node)

Gunicorn (if Python)

6. Team Role Distribution (4–5 Members)
Member 1 – Backend Engineer

API integration

EMA computation

Monte Carlo simulation

Member 2 – Quantitative Modeling Lead

Probability model

Structural boundary logic

DCA engine

Member 3 – Frontend Developer

Dashboard UI

Charts

Data visualization

Member 4 – DevOps Engineer

EC2 setup

Deployment

Security configuration

CI/CD pipeline

Member 5 (Optional) – Data Engineer / QA

Data validation

Caching

Testing framework

Performance optimization

7. Project Milestones (16 Weeks Example)
Phase 1 (Weeks 1–3)

Requirement refinement

Architecture design

API testing

Phase 2 (Weeks 4–7)

Frontend prototype

Backend structure

EMA implementation

Phase 3 (Weeks 8–11)

Probability modeling engine

DCA module

Integration testing

Phase 4 (Weeks 12–14)

EC2 deployment

Security hardening

Performance tuning

Phase 5 (Weeks 15–16)

Final testing

Documentation

Presentation & demo

8. Risks and Mitigation
Risk	Mitigation
API rate limit	Cache data
Glassnode cost	Use historical dataset
Over-complex modeling	Choose simpler statistical model
EC2 misconfiguration	Use deployment checklist
9. Deliverables

Fully deployed EC2 website

GitHub repository

Technical documentation

Modeling methodology report

Final presentation

User manual

10. Evaluation Criteria

Correctness of financial calculations

Robustness of probability modeling

Code quality

Cloud deployment reliability

UI clarity

Documentation completeness

11. Advanced Extension Ideas (Optional)

Add Solana comparison

Add Fear index regime-based allocation

Add regime detection (Bull/Bear/Transition)

Add backtesting engine

Add login and portfolio tracking

12. Expected Learning Outcomes

Students will learn:

Cloud deployment (AWS EC2)

Real-time API integration

Financial time-series modeling

Risk vs volatility distinction

Full-stack system design

Quantitative decision modeling

Final Capstone Positioning

This project is not just a price dashboard.

It is:

A structural, probabilistic, and discipline-driven decision-support system for Bitcoin investors.

It combines:

Quantitative finance

Software engineering

Cloud computing

Behavioral finance
