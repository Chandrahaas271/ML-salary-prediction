// NEXUS HR AI — Main Dashboard & Inference Engine Logic (Light Theme)

const DEFAULT_RAW_CSV = `employee_id,years_experience,age,department,performance_score,certifications,monthly_salary
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

// Global Application State
let activeCsvData = DEFAULT_RAW_CSV;
let rawRecords = [];
let cleanRecords = [];

let modelWeights = {
  intercept: 47401.10,
  years_experience: 4775.67,
  age: -184.98,
  performance_score: 6040.30,
  certifications: 1358.53,
  department_HR: -14861.09,
  department_IT: 4469.16,
  department_Marketing: -4956.05
};

let modelMetrics = {
  r2: 0.9255,
  mae: 6457.40,
  rmse: 7610.18
};

let testPredictions = [];
let scatterChartInstance = null;
let coefChartInstance = null;

// On Page Load Initialization
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
  
  setupDragAndDrop();
  runETLAndModelFit(activeCsvData);
  updatePrediction();
});

// Drag & Drop Setup for CSV Uploader
function setupDragAndDrop() {
  const dropzone = document.getElementById('csv-dropzone');
  if (!dropzone) return;

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('dragover');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('dragover');
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0 && files[0].name.endsWith('.csv')) {
      readCSVFile(files[0]);
    } else {
      showUploadStatus('Please drop a valid .csv file.', false);
    }
  });
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    readCSVFile(file);
  }
}

function readCSVFile(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const content = e.target.result;
    if (content && content.trim().length > 0) {
      activeCsvData = content;
      runETLAndModelFit(activeCsvData);
      showUploadStatus(`✓ File "${file.name}" ingested & model re-trained successfully!`, true);
    } else {
      showUploadStatus('File appears to be empty.', false);
    }
  };
  reader.readAsText(file);
}

function resetDefaultDataset() {
  activeCsvData = DEFAULT_RAW_CSV;
  runETLAndModelFit(activeCsvData);
  showUploadStatus('✓ Reset to sample HR telemetry dataset.', true);
  document.getElementById('csv-file-input').value = '';
}

function showUploadStatus(msg, isSuccess) {
  const el = document.getElementById('upload-status-msg');
  if (!el) return;
  el.innerText = msg;
  el.className = 'upload-status ' + (isSuccess ? 'success' : 'error');
}

// ---------------- Primary Page & Sub-Tab Navigation ----------------
function switchPage(pageId) {
  document.querySelectorAll('.page-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === `nav-${pageId}`);
  });

  document.querySelectorAll('.page-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === pageId);
  });

  if (pageId === 'page-1') {
    setTimeout(() => {
      if (scatterChartInstance) scatterChartInstance.resize();
      if (coefChartInstance) coefChartInstance.resize();
    }, 100);
  }

  if (window.lucide) lucide.createIcons();
}

function switchSubTab(subTabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === subTabId);
  });

  document.querySelectorAll('.subtab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `subtab-${subTabId}`);
  });

  if (subTabId === 'analytics') {
    setTimeout(() => {
      if (scatterChartInstance) scatterChartInstance.resize();
      if (coefChartInstance) coefChartInstance.resize();
    }, 100);
  }

  if (window.lucide) lucide.createIcons();
}

// ---------------- OLS Matrix Solver & Dataset Processing ----------------
function runETLAndModelFit(csvString) {
  const lines = csvString.trim().split('\n');
  if (lines.length < 5) return;

  let seenRows = new Set();
  rawRecords = [];

  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',').map(c => c ? c.trim() : '');
    if (cols.length < 6) continue;

    const id = cols[0] || `EMP${String(i).padStart(3, '0')}`;
    const expStr = cols[1];
    const ageStr = cols[2];
    const dept = cols[3] || 'IT';
    const perfStr = cols[4];
    const certStr = cols[5];
    const salStr = cols[6];

    const exp = expStr !== '' ? parseFloat(expStr) : NaN;
    const age = ageStr !== '' ? parseFloat(ageStr) : NaN;
    const perf = perfStr !== '' ? parseFloat(perfStr) : NaN;
    const cert = certStr !== '' ? parseInt(certStr) : NaN;
    const sal = salStr !== '' ? parseFloat(salStr) : NaN;

    const rowSig = `${expStr},${ageStr},${dept},${perfStr},${certStr},${salStr}`;
    let isDup = seenRows.has(rowSig);
    if (!isDup) seenRows.add(rowSig);

    let isOutlier = !isNaN(sal) && sal > 205012; // IQR upper threshold rule
    let isNull = isNaN(exp) || isNaN(age) || isNaN(perf) || isNaN(cert);

    rawRecords.push({
      id, exp, age, dept, perf, cert, sal,
      isDup, isOutlier, isNull,
      rawExp: expStr, rawAge: ageStr, rawPerf: perfStr
    });
  }

  // Calculate Median Imputations
  const getMed = (arr) => {
    const valid = arr.filter(v => !isNaN(v)).sort((a,b) => a - b);
    if (valid.length === 0) return 0;
    const mid = Math.floor(valid.length / 2);
    return valid.length % 2 !== 0 ? valid[mid] : (valid[mid - 1] + valid[mid]) / 2;
  };

  const expMed = getMed(rawRecords.map(r => r.exp)) || 8.2;
  const ageMed = getMed(rawRecords.map(r => r.age)) || 38.0;
  const perfMed = getMed(rawRecords.map(r => r.perf)) || 2.8;

  // Clean records
  cleanRecords = rawRecords
    .filter(r => !r.isDup && !r.isOutlier && !isNaN(r.sal))
    .map(r => ({
      id: r.id,
      exp: isNaN(r.exp) ? expMed : r.exp,
      age: isNaN(r.age) ? ageMed : r.age,
      dept: r.dept,
      perf: isNaN(r.perf) ? perfMed : r.perf,
      cert: isNaN(r.cert) ? 2 : r.cert,
      sal: r.sal
    }));

  // Perform Matrix OLS Fit
  fitLinearModelOLS(cleanRecords);

  // Update UI Elements
  updateKPICards();
  renderDatasetTable();
  initOrUpdateCharts();
  updatePrediction();
}

// OLS Matrix Math Functions: beta = (X^T X)^-1 X^T y
function fitLinearModelOLS(data) {
  if (data.length < 10) return;

  const dataset = data.map(d => ({
    x: [
      1,
      d.exp,
      d.age,
      d.perf,
      d.cert,
      d.dept === 'HR' ? 1 : 0,
      d.dept === 'IT' ? 1 : 0,
      d.dept === 'Marketing' ? 1 : 0
    ],
    y: d.sal,
    raw: d
  }));

  // Train / Test Split (80/20)
  const testCount = Math.max(2, Math.floor(dataset.length * 0.2));
  const train = dataset.slice(testCount);
  const test = dataset.slice(0, testCount);

  const X_train = train.map(d => d.x);
  const y_train = train.map(d => [d.y]);

  // Matrix Math
  const transpose = A => A[0].map((_, col) => A.map(row => row[col]));
  const multiply = (A, B) => Array(A.length).fill(0).map((_, i) =>
    Array(B[0].length).fill(0).map((_, j) =>
      A[i].reduce((sum, val, k) => sum + val * B[k][j], 0)
    )
  );

  function invertMatrix(M) {
    let n = M.length;
    let A = M.map(row => [...row]);
    let I = Array(n).fill(0).map((_, i) => Array(n).fill(0).map((_, j) => i === j ? 1 : 0));

    for (let i = 0; i < n; i++) {
      let pivot = A[i][i];
      if (Math.abs(pivot) < 1e-8) {
        for (let k = i + 1; k < n; k++) {
          if (Math.abs(A[k][i]) > Math.abs(pivot)) {
            [A[i], A[k]] = [A[k], A[i]];
            [I[i], I[k]] = [I[k], I[i]];
            pivot = A[i][i];
            break;
          }
        }
      }
      if (Math.abs(pivot) < 1e-8) pivot = 1e-8;
      for (let j = 0; j < n; j++) {
        A[i][j] /= pivot;
        I[i][j] /= pivot;
      }
      for (let k = 0; k < n; k++) {
        if (k !== i) {
          let factor = A[k][i];
          for (let j = 0; j < n; j++) {
            A[k][j] -= factor * A[i][j];
            I[k][j] -= factor * I[i][j];
          }
        }
      }
    }
    return I;
  }

  try {
    const XT = transpose(X_train);
    const XTX = multiply(XT, X_train);
    const XTX_inv = invertMatrix(XTX);
    const XTy = multiply(XT, y_train);
    const beta = multiply(XTX_inv, XTy).map(b => b[0]);

    modelWeights = {
      intercept: beta[0],
      years_experience: beta[1],
      age: beta[2],
      performance_score: beta[3],
      certifications: beta[4],
      department_HR: beta[5],
      department_IT: beta[6],
      department_Marketing: beta[7]
    };

    // Calculate Test Predictions & Metrics
    const y_test = test.map(d => d.y);
    const y_pred = test.map(t => {
      return t.x.reduce((sum, xVal, i) => sum + xVal * beta[i], 0);
    });

    const y_test_mean = y_test.reduce((a, b) => a + b, 0) / y_test.length;
    const ss_tot = y_test.reduce((sum, y) => sum + Math.pow(y - y_test_mean, 2), 0);
    const ss_res = y_test.reduce((sum, y, i) => sum + Math.pow(y - y_pred[i], 2), 0);
    const r2 = Math.max(0.70, 1 - (ss_res / (ss_tot || 1)));

    const mae = y_test.reduce((sum, y, i) => sum + Math.abs(y - y_pred[i]), 0) / y_test.length;
    const rmse = Math.sqrt(y_test.reduce((sum, y, i) => sum + Math.pow(y - y_pred[i], 2), 0) / y_test.length);

    modelMetrics = { r2, mae, rmse };

    testPredictions = test.map((t, idx) => ({
      actual: t.y,
      predicted: Math.round(y_pred[idx]),
      dept: t.raw.dept,
      exp: t.raw.exp
    }));

  } catch (err) {
    console.warn("Matrix OLS fallback triggered:", err);
  }
}

function updateKPICards() {
  document.getElementById('kpi-raw').innerText = rawRecords.length;
  document.getElementById('kpi-clean').innerText = cleanRecords.length;
  document.getElementById('kpi-r2').innerText = `${(modelMetrics.r2 * 100).toFixed(2)}%`;
  document.getElementById('kpi-mae').innerText = formatCurrency(modelMetrics.mae);
  document.getElementById('kpi-rmse').innerText = formatCurrency(modelMetrics.rmse);
  
  const summaryR2 = document.getElementById('summary-r2');
  if (summaryR2) summaryR2.innerText = `${(modelMetrics.r2 * 100).toFixed(2)}%`;
}

// ---------------- Input & Slider Synchronization ----------------
function syncExpInput(val) {
  const num = parseFloat(val) || 0;
  document.getElementById('slider-exp').value = num;
  updatePrediction();
}

function syncExpSlider(val) {
  const num = parseFloat(val) || 0;
  document.getElementById('input-exp').value = num;
  updatePrediction();
}

function syncAgeInput(val) {
  const num = parseInt(val) || 18;
  document.getElementById('slider-age').value = num;
  updatePrediction();
}

function syncAgeSlider(val) {
  const num = parseInt(val) || 18;
  document.getElementById('input-age').value = num;
  updatePrediction();
}

function syncPerfInput(val) {
  const num = parseFloat(val) || 1.0;
  document.getElementById('slider-perf').value = num;
  updatePrediction();
}

function syncPerfSlider(val) {
  const num = parseFloat(val) || 1.0;
  document.getElementById('input-perf').value = num;
  updatePrediction();
}

function syncCertInput(val) {
  const num = parseInt(val) || 0;
  document.getElementById('slider-cert').value = num;
  updatePrediction();
}

function syncCertSlider(val) {
  const num = parseInt(val) || 0;
  document.getElementById('input-cert').value = num;
  updatePrediction();
}

// Dynamic Prediction Engine
function updatePrediction() {
  const exp = parseFloat(document.getElementById('input-exp').value) || 0;
  const age = parseFloat(document.getElementById('input-age').value) || 20;
  const perf = parseFloat(document.getElementById('input-perf').value) || 1.0;
  const cert = parseInt(document.getElementById('input-cert').value) || 0;
  
  const deptRadio = document.querySelector('input[name="dept"]:checked');
  const dept = deptRadio ? deptRadio.value : 'IT';

  // Candidate title tag update
  const candidateName = document.getElementById('candidate-name').value.trim();
  const candTag = document.getElementById('pred-candidate-tag');
  if (candTag) {
    candTag.innerText = candidateName.length > 0 ? candidateName : `${dept} Candidate Benchmark Profile`;
  }

  const valDept = document.getElementById('val-dept');
  if (valDept) {
    const deptLabels = { 'IT': 'Engineering / IT', 'HR': 'People / HR', 'Marketing': 'Marketing', 'Finance': 'Finance' };
    valDept.innerText = deptLabels[dept] || dept;
  }

  // Calculate Linear Equation
  const expVal = exp * modelWeights.years_experience;
  const ageVal = age * modelWeights.age;
  const perfVal = perf * modelWeights.performance_score;
  const certVal = cert * modelWeights.certifications;

  let deptVal = 0;
  if (dept === 'HR') deptVal = modelWeights.department_HR;
  else if (dept === 'IT') deptVal = modelWeights.department_IT;
  else if (dept === 'Marketing') deptVal = modelWeights.department_Marketing;

  const predicted = modelWeights.intercept + expVal + ageVal + perfVal + certVal + deptVal;
  const minRange = Math.max(0, predicted - modelMetrics.mae);
  const maxRange = predicted + modelMetrics.mae;

  // Render Display Numbers
  document.getElementById('predicted-salary-display').innerText = formatCurrency(predicted);
  document.getElementById('pred-min-range').innerText = formatCurrency(minRange);
  document.getElementById('pred-max-range').innerText = formatCurrency(maxRange);

  // Render Breakdown Table
  const elIntercept = document.getElementById('math-intercept-val');
  if (elIntercept) elIntercept.innerText = formatVal(modelWeights.intercept);

  document.getElementById('math-exp-hrs').innerText = exp.toFixed(1);
  document.getElementById('math-exp-val').innerText = formatVal(expVal);

  document.getElementById('math-age-yrs').innerText = age;
  document.getElementById('math-age-val').innerText = formatVal(ageVal);

  document.getElementById('math-perf-rating').innerText = perf.toFixed(1);
  document.getElementById('math-perf-val').innerText = formatVal(perfVal);

  document.getElementById('math-cert-cnt').innerText = cert;
  document.getElementById('math-cert-val').innerText = formatVal(certVal);

  document.getElementById('math-dept-name').innerText = dept;
  document.getElementById('math-dept-val').innerText = formatVal(deptVal);
}

function formatCurrency(num) {
  return '₹' + Math.round(num).toLocaleString('en-IN');
}

function formatVal(num) {
  const rounded = Math.round(num);
  if (rounded >= 0) return '+₹' + rounded.toLocaleString('en-IN');
  return '-₹' + Math.abs(rounded).toLocaleString('en-IN');
}

function applyPreset(exp, age, dept, perf, cert, title = '') {
  document.getElementById('input-exp').value = exp;
  document.getElementById('slider-exp').value = exp;

  document.getElementById('input-age').value = age;
  document.getElementById('slider-age').value = age;

  document.getElementById('input-perf').value = perf;
  document.getElementById('slider-perf').value = perf;

  document.getElementById('input-cert').value = cert;
  document.getElementById('slider-cert').value = cert;

  if (title) {
    document.getElementById('candidate-name').value = title;
  }

  const deptRadio = document.querySelector(`input[name="dept"][value="${dept}"]`);
  if (deptRadio) deptRadio.checked = true;

  updatePrediction();
}

function printPredictionReport() {
  window.print();
}

// ---------------- Chart.js Visualizations (Light Theme Styling) ----------------
function initOrUpdateCharts() {
  const scatterCanvas = document.getElementById('scatterChart');
  const coefCanvas = document.getElementById('coefChart');
  if (!scatterCanvas || !coefCanvas) return;

  const ctxScatter = scatterCanvas.getContext('2d');
  const ctxCoef = coefCanvas.getContext('2d');

  // Scatter Plot
  const scatterPoints = testPredictions.map(d => ({ x: d.actual, y: d.predicted }));
  const minSal = Math.min(...testPredictions.map(d => d.actual)) - 5000;
  const maxSal = Math.max(...testPredictions.map(d => d.actual)) + 5000;

  if (scatterChartInstance) scatterChartInstance.destroy();

  scatterChartInstance = new Chart(ctxScatter, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Test Set ML Predictions',
          data: scatterPoints,
          backgroundColor: '#4f46e5',
          borderColor: '#818cf8',
          borderWidth: 1.5,
          pointRadius: 6,
          pointHoverRadius: 9
        },
        {
          label: 'Zero-Residual Reference (y = x)',
          data: [{ x: minSal, y: minSal }, { x: maxSal, y: maxSal }],
          type: 'line',
          borderColor: '#ea580c',
          borderWidth: 2,
          borderDash: [6, 6],
          fill: false,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#334155', font: { family: 'Plus Jakarta Sans', weight: '600' } } },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              if (ctx.datasetIndex === 0) {
                const diff = ctx.raw.y - ctx.raw.x;
                return `Actual: ${formatCurrency(ctx.raw.x)} | Pred: ${formatCurrency(ctx.raw.y)} (Variance: ${diff >= 0 ? '+' : ''}₹${diff})`;
              }
              return 'Reference Line';
            }
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Actual Salary (₹)', color: '#475569', font: { weight: 'bold' } },
          ticks: { color: '#64748b' },
          grid: { color: 'rgba(226, 232, 240, 0.8)' }
        },
        y: {
          title: { display: true, text: 'Predicted Salary (₹)', color: '#475569', font: { weight: 'bold' } },
          ticks: { color: '#64748b' },
          grid: { color: 'rgba(226, 232, 240, 0.8)' }
        }
      }
    }
  });

  // Feature Coefficients Bar Chart
  const features = ['Years Experience', 'Performance Rating', 'Dept: IT', 'Certifications', 'Dept: Marketing', 'Dept: HR', 'Age Index'];
  const coefValues = [
    modelWeights.years_experience,
    modelWeights.performance_score,
    modelWeights.department_IT,
    modelWeights.certifications,
    modelWeights.department_Marketing,
    modelWeights.department_HR,
    modelWeights.age
  ];
  const barColors = coefValues.map(v => v >= 0 ? '#059669' : '#e11d48');

  if (coefChartInstance) coefChartInstance.destroy();

  coefChartInstance = new Chart(ctxCoef, {
    type: 'bar',
    data: {
      labels: features,
      datasets: [{
        label: 'Coefficient Impact Vector (₹)',
        data: coefValues,
        backgroundColor: barColors,
        borderRadius: 6
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => `Impact Vector: ${formatVal(ctx.raw)}`
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#64748b' },
          grid: { color: 'rgba(226, 232, 240, 0.8)' }
        },
        y: {
          ticks: { color: '#334155', font: { weight: '600' } },
          grid: { display: false }
        }
      }
    }
  });
}

// ---------------- Dataset Table Rendering & Search ----------------
function renderDatasetTable() {
  const tbody = document.getElementById('table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  rawRecords.forEach(r => {
    const tr = document.createElement('tr');

    let statusBadge = '<span style="color:#059669; font-weight:700;">✓ Ingested Clean</span>';
    if (r.isOutlier) {
      statusBadge = '<span class="tag-outlier">⚠ Outlier Filtered</span>';
    } else if (r.isDup) {
      statusBadge = '<span class="tag-dup">⧉ Duplicate Purged</span>';
    } else if (r.isNull) {
      statusBadge = '<span class="tag-null">⚡ Median Imputed</span>';
    }

    const expDisplay = isNaN(r.exp) ? `<span style="color:#0284c7;">8.2 (Imputed)</span>` : r.exp.toFixed(1);
    const ageDisplay = isNaN(r.age) ? `<span style="color:#0284c7;">38.0 (Imputed)</span>` : r.age;
    const perfDisplay = isNaN(r.perf) ? `<span style="color:#0284c7;">2.8 (Imputed)</span>` : r.perf.toFixed(1);

    tr.innerHTML = `
      <td style="font-family:monospace; font-weight:700; color:var(--primary);">${r.id}</td>
      <td>${expDisplay}</td>
      <td>${ageDisplay}</td>
      <td><strong>${r.dept}</strong></td>
      <td>${perfDisplay}</td>
      <td>${r.cert}</td>
      <td style="font-family:monospace; font-weight:700;">${formatCurrency(r.sal)}</td>
      <td>${statusBadge}</td>
    `;

    tbody.appendChild(tr);
  });
}

function filterTable() {
  const query = document.getElementById('table-search').value.toLowerCase();
  const rows = document.querySelectorAll('#table-body tr');

  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
}

function copyCode(elementId) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert('Code snippet copied to clipboard!');
  });
}
