const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid ${height}`;
  } else if (weight === "" || height < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi} is Under Weight</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `<span>${bmi} is Normal Weight</span>`;
    } else {
      result.innerHTML = `<span>${bmi} is Over Weight</span>`;
    }
  }
});
