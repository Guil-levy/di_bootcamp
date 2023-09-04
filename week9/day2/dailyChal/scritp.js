document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonString = JSON.stringify(Object.fromEntries(formData));
    // OR  const jsonString = JSON.stringify(Object.fromEntries(formData), null, 2);
    console.log(jsonString);
    const jsonOutput = document.getElementById("jsonOutput");
    jsonOutput.textContent = jsonString;
});
