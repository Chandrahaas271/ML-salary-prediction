const fs = require('fs');

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

// Parse CSV
const lines = rawCsv.trim().split('\n');
const headers = lines[0].split(',');
let rows = lines.slice(1).map(line => line.split(','));

console.log("Initial raw rows count:", rows.length);

// Step 1: Drop employee_id (col 0)
let cleanedRows = rows.map(r => r.slice(1));
let headersNoId = headers.slice(1);

// Step 2: Remove duplicate rows
const uniqueRowStrings = new Set();
let dedupRows = [];
for (let r of cleanedRows) {
  let str = r.join(',');
  if (!uniqueRowStrings.has(str)) {
    uniqueRowStrings.add(str);
    dedupRows.push(r);
  }
}
console.log("Duplicates removed. Count before:", cleanedRows.length, "after:", dedupRows.length);

// Convert numeric fields
// headersNoId: ['years_experience', 'age', 'department', 'performance_score', 'certifications', 'monthly_salary']
let parsedData = dedupRows.map(r => {
  let exp = r[0] !== "" ? parseFloat(r[0]) : NaN;
  let age = r[1] !== "" ? parseFloat(r[1]) : NaN;
  let dept = r[2];
  let perf = r[3] !== "" ? parseFloat(r[3]) : NaN;
  let cert = r[4] !== "" ? parseInt(r[4]) : NaN;
  let sal = r[5] !== "" ? parseFloat(r[5]) : NaN;
  return { years_experience: exp, age, department: dept, performance_score: perf, certifications: cert, monthly_salary: sal };
});

function getMedian(arr) {
  let valid = arr.filter(x => !isNaN(x)).sort((a, b) => a - b);
  if (valid.length === 0) return 0;
  let mid = Math.floor(valid.length / 2);
  return valid.length % 2 !== 0 ? valid[mid] : (valid[mid - 1] + valid[mid]) / 2;
}

// Step 4: Medians
const expMed = getMedian(parsedData.map(d => d.years_experience));
const ageMed = getMedian(parsedData.map(d => d.age));
const perfMed = getMedian(parsedData.map(d => d.performance_score));

console.log("Medians -> exp:", expMed, "age:", ageMed, "perf:", perfMed);

parsedData.forEach(d => {
  if (isNaN(d.years_experience)) d.years_experience = expMed;
  if (isNaN(d.age)) d.age = ageMed;
  if (isNaN(d.performance_score)) d.performance_score = perfMed;
});

// Step 5: IQR on monthly_salary
let salaries = parsedData.map(d => d.monthly_salary).sort((a, b) => a - b);
function getQuantile(arr, q) {
  let pos = (arr.length - 1) * q;
  let base = Math.floor(pos);
  let rest = pos - base;
  if (arr[base + 1] !== undefined) {
    return arr[base] + rest * (arr[base + 1] - arr[base]);
  } else {
    return arr[base];
  }
}
let q1 = getQuantile(salaries, 0.25);
let q3 = getQuantile(salaries, 0.75);
let iqr = q3 - q1;
let lower = q1 - 1.5 * iqr;
let upper = q3 + 1.5 * iqr;

console.log(`Q1: ${q1}, Q3: ${q3}, IQR: ${iqr}, Lower: ${lower}, Upper: ${upper}`);

let nonOutliers = parsedData.filter(d => d.monthly_salary >= lower && d.monthly_salary <= upper);
console.log(`Outliers removed: ${parsedData.length - nonOutliers.length}, Remaining: ${nonOutliers.length}`);

// Step 6: One-Hot Encoding department with drop_first=True
// Unique departments in sorted order standard pandas drop_first: Finance, HR, IT, Marketing -> drop Finance
// Columns become: Finance (dropped base), department_HR, department_IT, department_Marketing
let encodedData = nonOutliers.map(d => {
  return {
    years_experience: d.years_experience,
    age: d.age,
    performance_score: d.performance_score,
    certifications: d.certifications,
    department_HR: d.department === 'HR' ? 1 : 0,
    department_IT: d.department === 'IT' ? 1 : 0,
    department_Marketing: d.department === 'Marketing' ? 1 : 0,
    monthly_salary: d.monthly_salary
  };
});

console.log("Final clean sample:", encodedData[0]);
fs.writeFileSync('clean_stats.json', JSON.stringify({
  total_raw: rows.length,
  duplicates_removed: rows.length - dedupRows.length,
  expMed, ageMed, perfMed,
  q1, q3, iqr, lower, upper,
  outliers_count: parsedData.length - nonOutliers.length,
  clean_count: encodedData.length
}, null, 2));
