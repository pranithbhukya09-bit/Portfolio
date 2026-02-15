# Pranith Bhukya Portfolio - Product Requirements Document

## Overview
A professional portfolio website for Pranith Bhukya, a Software Engineer and Data Analyst based in Houston, TX.

## Target Audience
- Recruiters and hiring managers
- Potential employers
- Professional connections

## Tech Stack
- **Frontend**: React, TailwindCSS
- **Backend**: FastAPI (minimal - for health checks)
- **Database**: MongoDB (connected but not actively used)

## Core Sections

### 1. Hero Section
- Profile photo
- Name and title: "Software Engineer"
- Subtitle: "AI & Data Systems Engineer • Published Researcher • Student Leader"
- Quick links: Email, LinkedIn, Resume download

### 2. About
- Professional summary highlighting experience in AI, data systems, and leadership

### 3. Projects (6 featured projects)
1. AI-Based Content Summarization System (Python, GPT-4, LangChain)
2. Training and Placement Management System (PostgreSQL, SQL)
3. Ethical Implications of Big Data Analytics (Research)
4. Student Analytics Platform (React, Node.js, Python, AWS)
5. Data Analytics Pipeline (Python, SQL, Pandas)
6. Algorithmic Trading Simulator (Python, Financial Modeling)

### 4. Experience
- Graduate Teaching Assistant @ UHCL (Current, Featured)
- Data Analyst Intern @ Wynswell Global (Featured)
- President @ Indian Student Association UHCL (Current)
- Vice President @ Indian Student Association UHCL

### 5. Publications
- IoT Literature Review (IJSRCSEIT, 2023)
- Collaborative Filtering for Grocery Suggestions (IEEE 2024)

### 6. Certifications (6 certificates as clickable links)
- Databricks Generative AI Fundamentals
- UI/UX Design Level 1
- Journey to Cloud (AWS)
- Python Basic Certificate (HackerRank)
- Neo Codeathon Certificate
- Operating Systems Short Course

### 7. Skills (Tabbed interface)
- Programming Languages: Python, Java, JavaScript, Swift, SQL
- Frameworks & Libraries: React, Node.js, NumPy, Pandas, LangChain, Streamlit
- Cloud & AWS: AWS, Bedrock, Lambda, DynamoDB, EC2, S3
- Databases: MySQL, DynamoDB, SQL, MongoDB, PostgreSQL
- Tools & Methodologies: Agile, Scrum, Git, Unit Testing, CI/CD, REST APIs

### 8. Education
- M.S. Computer Science @ UHCL (Expected May 2026)
- B.S. Computer Science @ New Horizon College of Engineering (2020-2024)

### 9. Contact
- Email: pranithbhukya09@gmail.com
- Phone: +1 (346) 490-2475
- LinkedIn: linkedin.com/in/pranith-bhukya
- Location: Houston, TX

## What's Been Implemented
- [x] Complete portfolio with all 9 sections
- [x] Light professional theme (Dec 2025)
- [x] Enhanced project descriptions (Dec 2025)
- [x] Certifications as clickable links instead of images (Dec 2025)
- [x] Shortened paragraphs into sharp bullet points (Dec 2025)
- [x] Updated About section with new professional content (Dec 2025)
- [x] Improved spacing throughout the design (Dec 2025)
- [x] 2-column grid layout for projects (Dec 2025)
- [x] Responsive design
- [x] Smooth scroll navigation
- [x] Resume download functionality
- [x] Health endpoint for deployment

## Key Files
- `/app/frontend/src/pages/Home.jsx` - Main portfolio component
- `/app/frontend/src/App.css` - Global styles
- `/app/frontend/public/Pranith_Bhukya_Resume.pdf` - Downloadable resume
- `/app/backend/server.py` - FastAPI backend with health endpoint

## Deployment Status
- Backend health endpoint: `/health` - Ready
- Frontend: React app - Ready
- Status: **Ready for deployment**

## Backlog
- [ ] Break Home.jsx into smaller components for maintainability
- [ ] Add GitHub link if available
- [ ] Add project demo links if available
