export async function searchLocations(query: string) {
  const response = await fetch(`/api/search?query=${query}`);
  return response.json();
}

export async function getWeatherForecast(lat: number, lon: number) {
  const response = await fetch("/api/forecast", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lat, lon }),
  });
  return response.json();
}
