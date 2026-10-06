const fs = require('fs');

// Raw CSV string
const rawCsv = `employee_id,years_experience,age,department,performance_score,certifications,monthly_salary
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

// Cleaning
let lines = rawCsv.trim().split('\n');
let rows = lines.slice(1).map(l => l.split(','));

// Dedup
let seen = new Set();
let dedup = [];
for (let r of rows) {
  let noId = r.slice(1).join(',');
  if (!seen.has(noId)) {
    seen.add(noId);
    dedup.push(r.slice(1));
  }
}

// Parse
let parsed = dedup.map(r => ({
  exp: r[0] !== "" ? parseFloat(r[0]) : NaN,
  age: r[1] !== "" ? parseFloat(r[1]) : NaN,
  dept: r[2],
  perf: r[3] !== "" ? parseFloat(r[3]) : NaN,
  cert: r[4] !== "" ? parseInt(r[4]) : NaN,
  sal: r[5] !== "" ? parseFloat(r[5]) : NaN,
}));

function getMedian(arr) {
  let v = arr.filter(x => !isNaN(x)).sort((a,b) => a-b);
  let mid = Math.floor(v.length/2);
  return v.length % 2 !== 0 ? v[mid] : (v[mid-1]+v[mid])/2;
}

let expMed = getMedian(parsed.map(p => p.exp));
let ageMed = getMedian(parsed.map(p => p.age));
let perfMed = getMedian(parsed.map(p => p.perf));

parsed.forEach(p => {
  if (isNaN(p.exp)) p.exp = expMed;
  if (isNaN(p.age)) p.age = ageMed;
  if (isNaN(p.perf)) p.perf = perfMed;
});

// Outlier removal (IQR)
let sals = parsed.map(p => p.sal).sort((a,b) => a-b);
function quantile(arr, q) {
  let p = (arr.length - 1) * q;
  let b = Math.floor(p);
  let r = p - b;
  return arr[b+1] !== undefined ? arr[b] + r*(arr[b+1]-arr[b]) : arr[b];
}
let q1 = quantile(sals, 0.25);
let q3 = quantile(sals, 0.75);
let iqr = q3 - q1;
let upper = q3 + 1.5 * iqr;

let cleanData = parsed.filter(p => p.sal <= upper);

// Convert to features & target
// Features: [1 (intercept), years_experience, age, performance_score, certifications, dept_HR, dept_IT, dept_Marketing]
let dataset = cleanData.map(d => {
  return {
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
  };
});

// Pseudo-random deterministic train/test split 80/20 (similar to sklearn random_state=42)
// Standard seeded shuffle
function pseudoRandom(seed) {
  return function() {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
}
let rand = pseudoRandom(42);
let shuffled = [...dataset];
for (let i = shuffled.length - 1; i > 0; i--) {
  let j = Math.floor(rand() * (i + 1));
  [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
}

let testSize = Math.floor(shuffled.length * 0.2); // 16 test, 67 train
let train = shuffled.slice(testSize);
let test = shuffled.slice(0, testSize);

console.log(`Train count: ${train.length}, Test count: ${test.length}`);

// Linear Regression via Ordinary Least Squares: beta = (X^T X)^-1 X^T y
function transpose(A) {
  return A[0].map((_, colIndex) => A.map(row => row[colIndex]));
}
function multiply(A, B) {
  let result = Array(A.length).fill(0).map(() => Array(B[0].length).fill(0));
  return result.map((row, i) =>
    row.map((_, j) =>
      A[i].reduce((sum, val, k) => sum + val * B[k][j], 0)
    )
  );
}
// Matrix Inversion (Gauss-Jordan)
function invertMatrix(M) {
  let n = M.length;
  let A = M.map(row => [...row]);
  let I = Array(n).fill(0).map((_, i) => Array(n).fill(0).map((_, j) => i === j ? 1 : 0));

  for (let i = 0; i < n; i++) {
    let pivot = A[i][i];
    if (Math.abs(pivot) < 1e-10) {
      // Small pivot swap
      for (let k = i + 1; k < n; k++) {
        if (Math.abs(A[k][i]) > Math.abs(pivot)) {
          [A[i], A[k]] = [A[k], A[i]];
          [I[i], I[k]] = [I[k], I[i]];
          pivot = A[i][i];
          break;
        }
      }
    }
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

let X_train = train.map(d => d.x);
let y_train = train.map(d => [d.y]);

let XT = transpose(X_train);
let XTX = multiply(XT, X_train);
let XTX_inv = invertMatrix(XTX);
let XTy = multiply(XT, y_train);
let beta = multiply(XTX_inv, XTy).map(b => b[0]);

const featureNames = [
  'Intercept',
  'years_experience',
  'age',
  'performance_score',
  'certifications',
  'department_HR',
  'department_IT',
  'department_Marketing'
];

console.log("\nCoefficients:");
featureNames.forEach((name, i) => {
  console.log(`${name}: ${beta[i].toFixed(2)}`);
});

// Predictions on test set
let X_test = test.map(d => d.x);
let y_test = test.map(d => d.y);

let y_pred = X_test.map(xRow => {
  return xRow.reduce((sum, xVal, i) => sum + xVal * beta[i], 0);
});

// Calculate Metrics: R2, MAE, RMSE
let y_test_mean = y_test.reduce((a,b) => a+b, 0) / y_test.length;
let ss_tot = y_test.reduce((sum, y) => sum + Math.pow(y - y_test_mean, 2), 0);
let ss_res = y_test.reduce((sum, y, i) => sum + Math.pow(y - y_pred[i], 2), 0);
let r2 = 1 - (ss_res / ss_tot);

let mae = y_test.reduce((sum, y, i) => sum + Math.abs(y - y_pred[i]), 0) / y_test.length;
let rmse = Math.sqrt(y_test.reduce((sum, y, i) => sum + Math.pow(y - y_pred[i], 2), 0) / y_test.length);

console.log(`\nMetrics on Test Set (n=${test.length}):`);
console.log(`R² Score: ${r2.toFixed(4)} (${(r2 * 100).toFixed(2)}%)`);
console.log(`MAE: ₹${mae.toFixed(2)}`);
console.log(`RMSE: ₹${rmse.toFixed(2)}`);

fs.writeFileSync('model_results.json', JSON.stringify({
  featureNames,
  coefficients: beta,
  metrics: { r2, mae, rmse },
  testPredictions: test.map((t, idx) => ({
    actual: t.y,
    predicted: y_pred[idx],
    diff: y_pred[idx] - t.y,
    dept: t.raw.dept,
    exp: t.raw.exp
  }))
}, null, 2));
