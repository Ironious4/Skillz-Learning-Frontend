## Skillz Learning Platform

## Overview
Skillz is a dynamic and immersive e-learning platform designed to bridge the gap between learners and quality, accessible education. Offering an extensive library of courses across various fields, Skillz empowers users to explore topics ranging from foundational skills to advanced, industry-relevant knowledge. The platform includes interactive sessions such as video lessons, creating a holistic and engaging learning experience tailored to individual needs.


## MVP Features
1.Course Management

Curated course listings with essential details, such as course titles, descriptions, instructors, and enrollment options.

2.Search and Filter

A robust search functionality to find courses by keywords.


3.Secure login and registration system.
Enables personalized course recommendations and tracks user-specific progress.

4.Course Details

Dedicated course pages with comprehensive information, including:
Syllabus
Reviews and ratings


5.Payment Integration

Secure payment gateway integration to handle:
Course purchases
Subscription plans
Users can track past transactions and view receipts.


## Technical Stack
1.Frontend
Framework: ReactJS
Styling: TailwindCSS

2.Backend
Framework: Flask
Database: PostgreSQL

## Development Tools
1.Wireframes: Figma
2.Package Manager: npm

## Installation and Setup
## Prerequisites
Node.js (v16+)
Python (v3.10+)
PostgreSQL (v14+)
Steps to Run Locally
Clone the Repository

bash
Copy code
git clone https://github.com/<your-username>/Skillz-Learning-Platform.git
cd Skillz-Learning-Platform

Setup Backend

Navigate to the backend directory:
bash
Copy code
cd Skillz-Learning-Platform-Backend
Create and activate a virtual environment:
bash

Copy code
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

Install dependencies:
bash
Copy code
pip install -r requirements.txt

Set up the database:
bash
Copy code
flask db init
flask db migrate -m "Initial migration"
flask db upgrade

Start the backend server:
bash
Copy code
flask run
Setup Frontend

Navigate to the frontend directory:
bash
Copy code
cd ../frontend
Install dependencies:
bash
Copy code
npm install

Start the development server:
bash
Copy code
npm run dev
Access the Application

Open your browser and navigate to:
Frontend: http://localhost:5173
Backend: http://localhost:5000
