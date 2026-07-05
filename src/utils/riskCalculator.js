const incidents = [
  {
    lat: 23.8298,
    lng: 80.4088,
    severity: "High",
  },
  {
    lat: 23.8235,
    lng: 80.4112,
    severity: "Medium",
  },
  {
    lat: 23.8245,
    lng: 80.4098,
    severity: "High",
  },
  {
    lat: 23.8269,
    lng: 80.4042,
    severity: "Low",
  },
];

function distance(a, b) {
  const dx = (a.lat - b.lat) * 111000;
  const dy = (a.lng - b.lng) * 111000;

  return Math.sqrt(dx * dx + dy * dy);
}

export function calculateRisk(destination) {
  if (!destination) {
    return {
      score: 94,
      nearest: "--",
      risk: "Low",
      confidence: 96,
      recommendation: "No destination selected",
    };
  }

  let nearest = Infinity;

  incidents.forEach((incident) => {
    nearest = Math.min(
      nearest,
      distance(destination, incident)
    );
  });

  let score = 100;

score -= Math.floor(Math.random()*5);

  if (nearest < 200)
    score = 58;
  else if (nearest < 400)
    score = 72;
  else if (nearest < 700)
    score = 84;

  let risk = "Low";

  if (score < 65)
    risk = "High";
  else if (score < 80)
    risk = "Medium";

  return {
    score,
    nearest:
nearest > 1000
? (nearest / 1000).toFixed(1) + " km"
: Math.round(nearest) + " m",
    risk,
    confidence: Math.min(score + 5, 99),
    recommendation:
      score > 80
        ? "SafeRoute Recommended"
        : "Avoid this area if possible",
  };
}