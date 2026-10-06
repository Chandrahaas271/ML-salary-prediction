// NEXUS HR AI — Main Dashboard Application Logic

const RAW_CSV = `employee_id,years_experience,age,department,performance_score,certifications,monthly_salary
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

// Global State
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

let testData = [];
let scatterChartInstance = null;
let coefChartInstance = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
  processDataset();
  renderDatasetTable();
  initCharts();
  updatePrediction();
});

// Tab Switcher
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-${tabId}`);
  });
}

// Data Processing Pipeline
function processDataset() {
  const lines = RAW_CSV.trim().split('\n');
  let seenRows = new Set();
  rawRecords = [];

  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',');
    const id = cols[0];
    const expStr = cols[1];
    const ageStr = cols[2];
    const dept = cols[3];
    const perfStr = cols[4];
    const certStr = cols[5];
    const salStr = cols[6];

    const exp = expStr !== '' ? parseFloat(expStr) : NaN;
    const age = ageStr !== '' ? parseFloat(ageStr) : NaN;
    const perf = perfStr !== '' ? parseFloat(perfStr) : NaN;
    const cert = certStr !== '' ? parseInt(certStr) : NaN;
    const sal = salStr !== '' ? parseFloat(salStr) : NaN;

    const rowSig = `${expStr},${ageStr},${dept},${perfStr},${certStr},${salStr}`;
    let isDup = false;
    if (seenRows.has(rowSig)) {
      isDup = true;
    } else {
      seenRows.add(rowSig);
    }

    let isOutlier = sal > 205012; // IQR upper bound
    let isNull = isNaN(exp) || isNaN(age) || isNaN(perf) || isNaN(cert);

    rawRecords.push({
      id, exp, age, dept, perf, cert, sal,
      isDup, isOutlier, isNull,
      rawExp: expStr, rawAge: ageStr, rawPerf: perfStr
    });
  }

  // Filter clean dataset
  const expMed = 8.2;
  const ageMed = 38.0;
  const perfMed = 2.8;

  cleanRecords = rawRecords
    .filter(r => !r.isDup && !r.isOutlier)
    .map(r => ({
      id: r.id,
      exp: isNaN(r.exp) ? expMed : r.exp,
      age: isNaN(r.age) ? ageMed : r.age,
      dept: r.dept,
      perf: isNaN(r.perf) ? perfMed : r.perf,
      cert: r.cert,
      sal: r.sal
    }));

  // Generate deterministic test predictions for chart visualization
  testData = cleanRecords.slice(0, 16).map(r => {
    let deptHR = r.dept === 'HR' ? 1 : 0;
    let deptIT = r.dept === 'IT' ? 1 : 0;
    let deptMkt = r.dept === 'Marketing' ? 1 : 0;

    let predicted = modelWeights.intercept +
      r.exp * modelWeights.years_experience +
      r.age * modelWeights.age +
      r.perf * modelWeights.performance_score +
      r.cert * modelWeights.certifications +
      deptHR * modelWeights.department_HR +
      deptIT * modelWeights.department_IT +
      deptMkt * modelWeights.department_Marketing;

    return {
      actual: r.sal,
      predicted: Math.round(predicted),
      dept: r.dept,
      exp: r.exp
    };
  });
}

// Dynamic Salary Inference (Prompt 2 Engine)
function updatePrediction() {
  const exp = parseFloat(document.getElementById('slider-exp').value);
  const age = parseFloat(document.getElementById('slider-age').value);
  const perf = parseFloat(document.getElementById('slider-perf').value);
  const cert = parseInt(document.getElementById('slider-cert').value);
  const dept = document.querySelector('input[name="dept"]:checked').value;

  // Update badges
  document.getElementById('val-exp').innerText = `${exp.toFixed(1)} yrs`;
  document.getElementById('val-age').innerText = `${age} yrs`;
  document.getElementById('val-perf').innerText = `${perf.toFixed(1)} ⭐`;
  document.getElementById('val-cert').innerText = `${cert} 📜`;
  document.getElementById('val-dept').innerText = dept;

  // Calculate Math
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

  // Render Display
  document.getElementById('predicted-salary-display').innerText = formatCurrency(predicted);
  document.getElementById('pred-min-range').innerText = formatCurrency(minRange);
  document.getElementById('pred-max-range').innerText = formatCurrency(maxRange);

  // Render Math Breakdown
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

function applyPreset(exp, age, dept, perf, cert) {
  document.getElementById('slider-exp').value = exp;
  document.getElementById('slider-age').value = age;
  document.getElementById('slider-perf').value = perf;
  document.getElementById('slider-cert').value = cert;
  
  const deptRadio = document.querySelector(`input[name="dept"][value="${dept}"]`);
  if (deptRadio) deptRadio.checked = true;

  updatePrediction();
}

// Chart.js Visualizations (Enterprise Slate Style)
function initCharts() {
  // Scatter Plot: Actual vs Predicted
  const ctxScatter = document.getElementById('scatterChart').getContext('2d');
  
  const scatterPoints = testData.map(d => ({ x: d.actual, y: d.predicted }));
  const minSal = Math.min(...testData.map(d => d.actual)) - 5000;
  const maxSal = Math.max(...testData.map(d => d.actual)) + 5000;

  scatterChartInstance = new Chart(ctxScatter, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Telemetry Test Model Predictions',
          data: scatterPoints,
          backgroundColor: '#38bdf8',
          borderColor: '#7dd3fc',
          borderWidth: 1.5,
          pointRadius: 6,
          pointHoverRadius: 9
        },
        {
          label: 'Zero-Residual Reference (y = x)',
          data: [{ x: minSal, y: minSal }, { x: maxSal, y: maxSal }],
          type: 'line',
          borderColor: '#f97316',
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
        legend: { labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans' } } },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              if (ctx.datasetIndex === 0) {
                const diff = ctx.raw.y - ctx.raw.x;
                return `Actual: ${formatCurrency(ctx.raw.x)} | Pred: ${formatCurrency(ctx.raw.y)} (Variance: ${diff >= 0 ? '+' : ''}₹${diff})`;
              }
              return 'Reference Fit';
            }
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Actual Salary (₹)', color: '#94a3b8' },
          ticks: { color: '#64748b' },
          grid: { color: 'rgba(255, 255, 255, 0.06)' }
        },
        y: {
          title: { display: true, text: 'Predicted Salary (₹)', color: '#94a3b8' },
          ticks: { color: '#64748b' },
          grid: { color: 'rgba(255, 255, 255, 0.06)' }
        }
      }
    }
  });

  // Coefficients Horizontal Bar Chart
  const ctxCoef = document.getElementById('coefChart').getContext('2d');
  const features = ['Years Experience', 'Performance Rating', 'Dept: IT', 'Certifications', 'Dept: Marketing', 'Dept: HR', 'Age Index'];
  const coefValues = [4775.67, 6040.30, 4469.16, 1358.53, -4956.05, -14861.09, -184.98];
  const barColors = coefValues.map(v => v >= 0 ? 'rgba(52, 211, 153, 0.85)' : 'rgba(244, 63, 94, 0.85)');

  coefChartInstance = new Chart(ctxCoef, {
    type: 'bar',
    data: {
      labels: features,
      datasets: [{
        label: 'Coefficient Valuation Impact (₹)',
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
          grid: { color: 'rgba(255, 255, 255, 0.06)' }
        },
        y: {
          ticks: { color: '#94a3b8' },
          grid: { display: false }
        }
      }
    }
  });
}

// Render Dataset Table
function renderDatasetTable() {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';

  rawRecords.forEach(r => {
    const tr = document.createElement('tr');

    let statusBadge = '<span style="color:#34d399; font-weight:600;">✓ Ingested Clean</span>';
    if (r.isOutlier) {
      statusBadge = '<span class="tag-outlier">⚠ Outlier Filtered</span>';
    } else if (r.isDup) {
      statusBadge = '<span class="tag-dup">⧉ Duplicate Purged</span>';
    } else if (r.isNull) {
      statusBadge = '<span class="tag-null">⚡ Median Imputed</span>';
    }

    const expDisplay = isNaN(r.exp) ? `<span style="color:#7dd3fc;">8.2 (Imputed)</span>` : r.exp.toFixed(1);
    const ageDisplay = isNaN(r.age) ? `<span style="color:#7dd3fc;">38.0 (Imputed)</span>` : r.age;
    const perfDisplay = isNaN(r.perf) ? `<span style="color:#7dd3fc;">2.8 (Imputed)</span>` : r.perf.toFixed(1);

    tr.innerHTML = `
      <td style="font-family:monospace; font-weight:600;">${r.id}</td>
      <td>${expDisplay}</td>
      <td>${ageDisplay}</td>
      <td><strong>${r.dept}</strong></td>
      <td>${perfDisplay}</td>
      <td>${r.cert}</td>
      <td style="font-family:monospace; font-weight:600;">${formatCurrency(r.sal)}</td>
      <td>${statusBadge}</td>
    `;

    tbody.appendChild(tr);
  });
}

// Filter Dataset Table
function filterTable() {
  const query = document.getElementById('table-search').value.toLowerCase();
  const rows = document.querySelectorAll('#table-body tr');

  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
}

// Copy Code Helper
function copyCode(elementId) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert('Code copied to clipboard!');
  });
}
