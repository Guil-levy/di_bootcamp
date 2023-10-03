// 1st chall
// function resolvePromises(promises) {
//     return Promise.all(promises)
//       .then((results) => results)
//       .catch((error) => {
//         console.error(error);
//       });
//   }
  
//   const promise1 = Promise.resolve(3);
//   const promise2 = 42;
//   const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'foo');
//   });
  
//   const promisesArray = [promise1, promise2, promise3];
  
//   resolvePromises(promisesArray)
//     .then((resolvedValues) => {
//       console.log('Resolved values:', resolvedValues);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
    // it waits for all promises to resolve or reject. In this case, all promises resolve successfully.
  
    // 2nd Challenge

    const sunriseForm = document.getElementById("sunriseForm");
    const resultDiv = document.getElementById("result");

    sunriseForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const city1Lat = document.getElementById("city1Lat").value;
        const city1Lon = document.getElementById("city1Lon").value;
        const city2Lat = document.getElementById("city2Lat").value;
        const city2Lon = document.getElementById("city2Lon").value;

        try {
            const [sunriseData1, sunriseData2] = await Promise.all([
                fetchSunrise(city1Lat, city1Lon),
                fetchSunrise(city2Lat, city2Lon),
            ]);

            resultDiv.innerHTML = `
                <p>Sunrise Time for Paris: ${sunriseData1.results.sunrise}</p>
                <p>Sunrise Time for New York: ${sunriseData2.results.sunrise}</p>
            `;
        } catch (error) {
            resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });

    async function fetchSunrise(latitude, longitude) {
        const apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to get sunrise data");
        }

        return response.json();
    }