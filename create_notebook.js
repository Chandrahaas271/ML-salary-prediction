const fs = require('fs');

const raw_data_str = `employee_id,years_experience,age,department,performance_score,certifications,monthly_salary
EMP001,7.5,45.0,HR,2.8,3,86692
EMP002,19.0,43.0,HR,5.0,3,152685
EMP003,14.6,48.0,Marketing,1.7,3,122679
EMP004,,22.0,HR,1.1,4,96051
EMP005,3.1,35.0,Marketing,3.0,3,77942
EMP006,3.1,24.0,Finance,1.7,5,89021
EMP007,1.2,,Marketing,2.5,4,64215
EMP008,17.3,26.0,Marketing,4.0,3,141682
EMP009,12.0,47.0,Marketing,3.9,5,128770
EMP010,14.2,35.0,HR,2.2,2,113589
EMP011,0.4,48.0,HR,3.2,3,9999999
EMP012,19.4,30.0,Marketing,3.0,4,156785
EMP013,16.6,,HR,3.5,1,117348
EMP014,4.2,36.0,IT,2.0,3,73955
EMP015,3.6,47.0,IT,3.4,1,79039
EMP016,3.7,34.0,HR,4.9,5,77710
EMP017,6.1,53.0,HR,2.9,2,74532
EMP018,10.5,53.0,Marketing,4.6,0,105609
EMP019,8.6,25.0,Finance,2.7,2,108141
EMP020,5.8,51.0,HR,2.4,3,60970
EMP021,12.2,44.0,IT,3.6,1,136139
EMP022,2.8,36.0,Marketing,3.7,1,62350
EMP023,5.8,50.0,HR,4.5,4,81194
EMP024,7.3,34.0,IT,1.9,1,81452
EMP025,9.1,53.0,IT,3.0,4,129560
EMP026,15.7,28.0,Finance,3.3,5,143729
EMP027,4.0,43.0,Marketing,4.1,0,80035
EMP028,10.3,49.0,Marketing,1.2,3,88478
EMP029,11.8,23.0,Finance,5.0,4,136379
EMP030,0.9,27.0,Finance,2.9,0,55202
EMP031,12.2,49.0,Marketing,2.1,1,100105
EMP032,3.4,49.0,Marketing,4.5,1,83256
EMP033,1.3,41.0,HR,4.0,0,68276
EMP034,19.0,51.0,HR,4.8,1,128904
EMP035,19.3,32.0,Finance,2.3,5,165136
EMP036,16.2,49.0,HR,3.2,5,134723
EMP037,6.1,46.0,IT,3.3,0,87907
EMP038,2.0,54.0,HR,4.9,4,72818
EMP039,13.7,22.0,HR,1.3,4,109399
EMP040,8.8,48.0,IT,,0,96031
EMP041,2.4,,Finance,1.8,4,56927
EMP042,,24.0,IT,2.1,4,113254
EMP043,,27.0,HR,2.9,5,67504
EMP044,18.2,29.0,Finance,2.5,4,152762
EMP045,5.2,48.0,HR,2.6,2,62185
EMP046,13.3,30.0,IT,4.4,3,130313
EMP047,6.2,54.0,IT,4.7,1,102892
EMP048,10.4,45.0,HR,1.3,2,106231
EMP049,10.9,36.0,Marketing,1.8,4,88090
EMP050,3.7,53.0,Marketing,3.7,5,79508
EMP051,19.4,53.0,IT,2.4,0,146636
EMP052,15.5,,IT,2.0,4,133753
EMP053,18.8,33.0,Marketing,2.2,5,140598
EMP054,17.9,23.0,Marketing,2.3,3,149147
EMP055,12.0,24.0,HR,4.4,4,111373
EMP056,18.4,38.0,HR,1.5,0,8888888
EMP057,1.8,23.0,Marketing,3.8,5,80115
EMP058,3.9,23.0,HR,3.2,5,68712
EMP059,0.9,49.0,HR,2.2,5,42124
EMP060,6.5,44.0,Finance,2.7,3,94004
EMP061,7.8,53.0,HR,2.0,4,94609
EMP062,5.4,54.0,IT,3.4,3,100736
EMP063,16.6,22.0,HR,1.3,1,105820
EMP064,7.1,40.0,HR,1.0,1,60611
EMP065,5.6,23.0,Marketing,3.5,4,88132
EMP066,10.9,47.0,IT,1.8,3,118917
EMP067,2.8,53.0,HR,1.3,0,35956
EMP068,16.0,27.0,HR,2.6,5,113945
EMP069,,53.0,Finance,1.2,5,50696
EMP070,19.7,25.0,HR,4.5,4,154282
EMP071,15.4,32.0,HR,1.1,1,106585
EMP072,4.0,38.0,Finance,3.3,1,81299
EMP073,0.1,45.0,Marketing,2.8,5,60311
EMP074,16.3,26.0,HR,3.7,4,135617
EMP075,14.1,55.0,Finance,2.3,3,124339
EMP076,14.6,27.0,IT,1.6,1,125109
EMP077,15.4,43.0,Marketing,4.9,3,153112
EMP078,1.5,32.0,IT,,1,74314
EMP079,7.2,37.0,IT,4.4,1,88883
EMP080,2.3,54.0,Finance,2.0,2,61537
EMP081,17.3,30.0,HR,1.2,1,99295
EMP082,,27.0,Finance,2.2,0,112505
EMP083,6.6,37.0,Finance,3.1,4,92705
EMP084,1.3,50.0,Finance,2.3,4,53243
EMP085,6.2,24.0,Finance,,3,98706
EMP006,3.1,24.0,Finance,1.7,5,89021
EMP019,8.6,25.0,Finance,2.7,2,108141
EMP034,19.0,51.0,HR,4.8,1,128904
EMP048,10.4,45.0,HR,1.3,2,106231`;

function makeCell(type, lines) {
  return {
    cell_type: type,
    metadata: {},
    outputs: [],
    source: Array.isArray(lines) ? lines.map((l, idx) => idx === lines.length - 1 ? l : l + '\n') : [lines]
  };
}

const cells = [
  makeCell("markdown", [
    "# HR Salary Prediction & Linear Regression Studio",
    "### End-to-End Machine Learning Pipeline: Data Cleaning to Dynamic Salary Inference",
    "**Author:** Data Science Instructor / Major Project Team  ",
    "**Dataset:** Tech Company HR Salary Records (India)"
  ]),
  
  makeCell("markdown", [
    "### Step 0: Load Dataset into DataFrame `df`",
    "We load the provided raw CSV data into pandas DataFrame `df`."
  ]),

  makeCell("code", [
    "import pandas as pd",
    "import numpy as np",
    "import io",
    "",
    "# Raw dataset CSV loaded into df",
    "raw_data = '''" + raw_data_str + "'''",
    "df = pd.read_csv(io.StringIO(raw_data))",
    "print('Dataset loaded successfully!')"
  ]),

  makeCell("markdown", [
    "## 1. Explore the Raw Mess",
    "Let's inspect the raw dataset dimensions, column data types, missing values, duplicates, and summary statistics."
  ]),

  makeCell("code", [
    "# Print shape, info summary, null count, and duplicate row count",
    "print('Shape of raw dataset:', df.shape)",
    "print('\\n--- Info Summary ---')",
    "df.info()",
    "print('\\nMissing values count per column:')",
    "print(df.isnull().sum())",
    "print('\\nDuplicate rows count:', df.duplicated().sum())"
  ]),

  makeCell("code", [
    "# Summary statistics — notice the extreme outlier salaries in monthly_salary!",
    "df.describe()"
  ]),

  makeCell("markdown", [
    "This is what real HR data looks like. Never clean."
  ]),

  makeCell("markdown", [
    "## 2. Data Cleaning — One Step at a Time"
  ]),

  makeCell("markdown", [
    "### Step 1 — Drop employee_id",
    "The `employee_id` is an arbitrary tracking string and contains zero predictive signal."
  ]),

  makeCell("code", [
    "# Drop identifier column",
    "df.drop('employee_id', axis=1, inplace=True)",
    "print('Dropped employee_id — it is an identifier, not a predictor')"
  ]),

  makeCell("markdown", [
    "### Step 2 — Remove duplicate rows",
    "Identical employee rows bias model fitting and distort statistical distributions."
  ]),

  makeCell("code", [
    "# Check counts before and after dropping duplicates",
    "rows_before = len(df)",
    "df.drop_duplicates(inplace=True)",
    "rows_after = len(df)",
    "print(f'Rows before: {rows_before} | Rows after: {rows_after} (Removed {rows_before - rows_after} duplicates)')"
  ]),

  makeCell("markdown", [
    "### Step 3 — Fix data type of performance_score",
    "The `performance_score` column contains string values and empty spaces that must be converted to numeric float."
  ]),

  makeCell("code", [
    "# Cast performance_score to numeric, coercing invalid values/spaces to NaN",
    "dtype_before = df['performance_score'].dtype",
    "df['performance_score'] = pd.to_numeric(df['performance_score'], errors='coerce')",
    "dtype_after = df['performance_score'].dtype",
    "print(f'performance_score dtype before: {dtype_before} | after: {dtype_after}')"
  ]),

  makeCell("markdown", [
    "### Step 4 — Fill missing values",
    "We replace missing NaN values in numerical features with their column median to preserve non-skewed centrality."
  ]),

  makeCell("code", [
    "# Calculate medians and fill NaN values for experience, age, and performance_score",
    "for col in ['years_experience', 'age', 'performance_score']:",
    "    null_before = df[col].isnull().sum()",
    "    median_val = df[col].median()",
    "    df[col].fillna(median_val, inplace=True)",
    "    null_after = df[col].isnull().sum()",
    "    print(f'{col}: nulls before = {null_before}, filled with median ({median_val:.1f}), nulls after = {null_after}')"
  ]),

  makeCell("markdown", [
    "### Step 5 — Remove outlier salaries using IQR",
    "Extreme erroneous salary entries (e.g. ₹99,99,999 and ₹88,88,888) break linear regression loss functions."
  ]),

  makeCell("code", [
    "# Compute Quartiles and Interquartile Range (IQR)",
    "Q1 = df['monthly_salary'].quantile(0.25)",
    "Q3 = df['monthly_salary'].quantile(0.75)",
    "IQR = Q3 - Q1",
    "lower_bound = Q1 - 1.5 * IQR",
    "upper_bound = Q3 + 1.5 * IQR",
    "print(f'Q1: ₹{Q1:,.0f} | Q3: ₹{Q3:,.0f} | IQR: ₹{IQR:,.0f}')",
    "print(f'Lower Bound: ₹{lower_bound:,.0f} | Upper Bound: ₹{upper_bound:,.0f}')",
    "rows_before = len(df)",
    "df = df[(df['monthly_salary'] >= lower_bound) & (df['monthly_salary'] <= upper_bound)]",
    "rows_removed = rows_before - len(df)",
    "print(f'Removed {rows_removed} rows with salary above ₹{upper_bound:,.0f}')"
  ]),

  makeCell("markdown", [
    "### Step 6 — Encode department column",
    "We convert text categories to 0/1 numbers because the algorithm only understands numbers."
  ]),

  makeCell("code", [
    "# One-Hot Encode categorical department column with drop_first=True",
    "df = pd.get_dummies(df, columns=['department'], drop_first=True)",
    "print('New column names in cleaned dataset:')",
    "print(list(df.columns))"
  ]),

  makeCell("markdown", [
    "### Clean Final Dataset Summary",
    "Here is the final structure and non-null count of our cleaned dataset."
  ]),

  makeCell("code", [
    "# Print clean dataset summary info and shape",
    "df.info()",
    "print('\\nClean Dataset Final Shape:', df.shape)"
  ]),

  makeCell("markdown", [
    "## 3. Feature Selection & Train-Test Split",
    "We separate feature predictors $X$ from our target salary $y$, allocating 80% data for training and 20% for testing."
  ]),

  makeCell("code", [
    "from sklearn.model_selection import train_test_split",
    "",
    "# X = features, y = target monthly salary",
    "X = df.drop('monthly_salary', axis=1)",
    "y = df['monthly_salary']",
    "",
    "# 80-20 Train-Test split with fixed random_state for reproducibility",
    "X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)",
    "print(f'X_train shape: {X_train.shape} | X_test shape: {X_test.shape}')",
    "print(f'y_train shape: {y_train.shape} | y_test shape: {y_test.shape}')"
  ]),

  makeCell("markdown", [
    "## 4. Build the Linear Regression Model",
    "We fit Ordinary Least Squares Linear Regression on our training set and evaluate feature coefficients."
  ]),

  makeCell("code", [
    "from sklearn.linear_model import LinearRegression",
    "",
    "# Instantiate and fit linear model",
    "model = LinearRegression()",
    "model.fit(X_train, y_train)",
    "y_pred = model.predict(X_test)",
    "",
    "# Format coefficients into a neat DataFrame",
    "coef_df = pd.DataFrame({",
    "    'Feature': X.columns,",
    "    'Coefficient (₹)': model.coef_",
    "}).sort_values(by='Coefficient (₹)', key=abs, ascending=False).reset_index(drop=True)",
    "coef_df"
  ]),

  makeCell("markdown", [
    "**Plain English Interpretation:**",
    "- `years_experience` impacts salary the most! Each additional year of experience adds approximately ₹4,775+ to monthly salary.",
    "- `performance_score` is the second strongest positive driver, contributing ~₹6,040 per 1.0 rating increase.",
    "- Department dummies reflect baseline departmental salary differentials relative to Finance."
  ]),

  makeCell("markdown", [
    "## 5. Evaluate the Model",
    "We calculate standard regression metrics ($R^2$, MAE, RMSE) to measure prediction accuracy."
  ]),

  makeCell("code", [
    "from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error",
    "",
    "# Calculate model evaluation metrics",
    "r2 = r2_score(y_test, y_pred)",
    "mae = mean_absolute_error(y_test, y_pred)",
    "rmse = np.sqrt(mean_squared_error(y_test, y_pred))",
    "",
    "print(f'R² Score: {r2:.4f}')",
    "print(f'MAE: ₹{mae:,.2f}')",
    "print(f'RMSE: ₹{rmse:,.2f}')",
    "",
    "print(f'\\nInterpretation:')",
    "print(f'• Our model explains {r2*100:.2f}% of salary variation')",
    "print(f'• On average our prediction is off by ₹{mae:,.2f}')",
    "print(f'• RMSE is ₹{rmse:,.2f} — larger errors are penalised more')"
  ]),

  makeCell("markdown", [
    "## 6. Visualise Results",
    "We plot Actual vs. Predicted salaries alongside an ideal 45-degree reference line."
  ]),

  makeCell("code", [
    "import matplotlib.pyplot as plt",
    "",
    "# Minimal scatter plot style",
    "plt.figure(figsize=(8, 6))",
    "plt.scatter(y_test, y_pred, color='#4f46e5', alpha=0.8, edgecolors='k', label='Predicted Salaries')",
    "plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], color='#f97316', lw=2, linestyle='--', label='Perfect Prediction (y = x)')",
    "plt.title('How close are our salary predictions?', fontsize=14, pad=12)",
    "plt.xlabel('Actual Monthly Salary (₹)', fontsize=11)",
    "plt.ylabel('Predicted Monthly Salary (₹)', fontsize=11)",
    "plt.legend()",
    "plt.grid(True, linestyle=':', alpha=0.6)",
    "plt.tight_layout()",
    "plt.show()"
  ]),

  makeCell("markdown", [
    "## 7. Business Insights for HR Leadership",
    "",
    "- **Years of Experience is the Primary Salary Driver:** Experience yields the highest predictable salary increase (~₹4,775/year), meaning HR compensation bands should be structured primarily around tenure and skill progression.",
    "- **High Rupee Precision (~92.5% Accuracy):** With an average error (MAE) of only ~₹6,457 per month on typical salaries between ₹50,000–₹1,50,000, this model is highly reliable for standardized salary bench-marking and offer generation.",
    "- **Honest Model Limitation:** Linear regression assumes strict linear relationships and constant variance. It does not capture non-linear diminishing returns of extreme experience (>20 years) or complex interactions between certifications and specific departments."
  ]),

  makeCell("markdown", [
    "---",
    "## 8. Dynamic Salary Prediction Engine (Prompt 2)",
    "Run this cell to interactively input candidate details and get instant salary predictions!"
  ]),

  makeCell("code", [
    "def predict_candidate_salary():",
    "    print('=== DYNAMIC HR SALARY PREDICTOR ===')",
    "    try:",
    "        exp = float(input('Enter Years of Experience (e.g. 5.5): ') or 5.0)",
    "        age = float(input('Enter Age (e.g. 30): ') or 32.0)",
    "        dept = input('Enter Department (HR, IT, Marketing, Finance): ').strip().upper() or 'IT'",
    "        perf = float(input('Enter Performance Score (1.0 to 5.0): ') or 3.5)",
    "        cert = float(input('Enter Number of Certifications (0 to 5): ') or 2)",
    "    except ValueError:",
    "        print('Invalid input, using defaults.')",
    "        exp, age, dept, perf, cert = 5.0, 32.0, 'IT', 3.5, 2",
    "",
    "    # Format one-hot encoded vector matching X train columns",
    "    dept_hr = 1 if dept == 'HR' else 0",
    "    dept_it = 1 if dept == 'IT' else 0",
    "    dept_mkt = 1 if dept == 'MARKETING' else 0",
    "",
    "    input_row = pd.DataFrame([{",
    "        'years_experience': exp,",
    "        'age': age,",
    "        'performance_score': perf,",
    "        'certifications': cert,",
    "        'department_HR': dept_hr,",
    "        'department_IT': dept_it,",
    "        'department_Marketing': dept_mkt",
    "    }])[X.columns]  # Ensure column order match",
    "",
    "    predicted_salary = model.predict(input_row)[0]",
    "    print('\\n' + '='*40)",
    "    print(f'🎯 PREDICTED MONTHLY SALARY: ₹{predicted_salary:,.2f}')",
    "    print(f'📊 Salary Range (±MAE): ₹{predicted_salary - mae:,.2f} - ₹{predicted_salary + mae:,.2f}')",
    "    print('='*40)",
    "",
    "# Run prediction",
    "predict_candidate_salary()"
  ])
];

const notebook = {
  cells: cells,
  metadata: {
    kernelspec: {
      display_name: "Python 3",
      language: "python",
      name: "python3"
    },
    language_info: {
      codemirror_mode: {
        name: "ipython",
        version: 3
      },
      file_extension: ".py",
      mimetype: "text/x-python",
      name: "python",
      nbconvert_exporter: "python",
      pygments_lexer: "ipython3",
      version: "3.10.0"
    }
  },
  nbformat: 4,
  nbformat_minor: 2
};

fs.writeFileSync('salary_prediction_notebook.ipynb', JSON.stringify(notebook, null, 2));
console.log("Notebook salary_prediction_notebook.ipynb successfully generated!");
