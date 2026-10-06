# ML-salary-prediction
An enterprise-grade **Machine Learning Compensation Intelligence Platform** and **Dynamic Inference Engine** built on Ordinary Least Squares (OLS) Linear Regression. Features an automated 6-step data cleaning pipeline, holdout test set evaluation ($R^2 = 92.55\%$), interactive parameter sliders, mathematical matrix decomposition breakdown, and visual analytics.
---
## 🌟 Key Features
- ⚡ **Dynamic Salary Inference Engine**: Real-time salary benchmark prediction based on candidate experience, age, performance ratings, certifications, and department domain.
- 🧹 **Automated 6-Step Data Pipeline (ETL)**:
  1. Identifier column stripping (`employee_id`).
  2. Duplicate row deduplication ($89 \rightarrow 85$ rows).
  3. Type coercion for string performance ratings (`errors='coerce'`).
  4. Robust median imputation for missing values ($Exp=8.2$, $Age=38.0$, $Rating=2.8$).
  5. Interquartile Range (IQR) outlier filtering ($Upper\ Cutoff = \text{₹2,05,012}$).
  6. Department one-hot encoding (`drop_first=True`).
- 📊 **Interactive Model Analytics**: Chart.js scatter plot ($y = x$ reference fit line, residual tooltips) and coefficient valuation vector impact charts.
- 📓 **Google Colab Notebook (`salary_prediction_notebook.ipynb`)**: Fully annotated Jupyter notebook structured with markdown cell explanations and inline code comments.
- 🎨 **Executive UI Dashboard**: Non-black slate glassmorphism theme with real-time vector inference counters and preset candidate buttons.
---
## 📈 Model Performance & Metrics
Trained on holdout test splits ($80/20$, `random_state=42`):
| Metric | Score | Interpretation |
| :--- | :--- | :--- |
| **$R^2$ Score** | **`0.9255` (92.55%)** | Explains $92.55\%$ of monthly salary variance |
| **Mean Absolute Error (MAE)** | **`₹6,457.40`** | Predictions deviate by only ~$\text{₹6,457}$ on average |
| **Root Mean Squared Error (RMSE)**| **`₹7,610.18`** | Penalized error bound accounting for variance |
---
## 🧮 Mathematical Model Coefficients
$$\text{Monthly Salary (₹)} = \beta_0 + \sum_{i=1}^{n} \beta_i X_i$$
| Feature ($X_i$) | Coefficient ($\beta_i$) | Business Valuation Impact |
| :--- | :---: | :--- |
| **Model Intercept ($\beta_0$)** | **`+₹47,401.10`** | Base entry-level compensation |
| **Years of Experience** | **`+₹4,775.67`** | Value per additional year of tenure |
| **Performance Rating** | **`+₹6,040.30`** | Value per 1.0 rating point increment |
| **Certifications Count** | **`+₹1,358.53`** | Value per credential earned |
| **Department: IT** | **`+₹4,469.16`** | Technical domain differential vs. Finance |
| **Department: Marketing** | **`-₹4,956.05`** | Marketing domain differential vs. Finance |
| **Department: HR** | **`-₹14,861.09`** | HR domain differential vs. Finance |
| **Age Index** | **`-₹184.98`** | Age adjustment factor (tenure controlled) |
---
## 📁 Repository Directory Structure
```text
├── salary_prediction_notebook.ipynb  # Full Colab/Jupyter Notebook
├── index.html                        # Main Dashboard Web Application
├── style.css                         # Executive Slate Glassmorphism Theme
├── app.js                            # OLS Inference Engine & Dynamic Sliders
├── server.js                         # Lightweight Node HTTP Web Server
├── package.json                      # Project Dependencies & Scripts
└── README.md                         # Documentation & Presentation Guide
🚀 How to Run Locally
Option 1: Web Application Dashboard
Clone the repository:
bash
git clone https://github.com/Chandrahaas271/ML-salary-prediction.git
cd ML-salary-prediction
Start the local server:
bash
node server.js
Open http://localhost:3000 in your browser (or double-click index.html).
Option 2: Jupyter / Google Colab Notebook
Open Google Colab.
Upload salary_prediction_notebook.ipynb.
Run all cells sequentially.
💡 Strategic Executive Insights
Experience is the Primary Driver: Experience generates $\text{+₹4,775/yr}$ in guaranteed compensation increase. Compensation bands should be structured primarily around tenure milestones.
High Precision for Offer Benchmarking: With an MAE of $\text{₹6,457}$, HR teams can reliably audit pay equity and automate offer letter generation within a tight $5%$ error margin.
Model Limits: Linear regression assumes constant variance. Edge cases with non-linear diminishing returns for senior executives ($>20$ yrs) can be extended using tree-based ensemble models (XGBoost).
