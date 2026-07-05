SafeRoute AI 🚨
AI-powered Safe Route Recommendation System

⚠️ Project Status: Work in Progress

SafeRoute AI is an intelligent route recommendation system that aims to help users travel through safer routes by combining map navigation with AI-based safety analysis.

This repository currently contains the first working prototype developed using React, Leaflet and OpenStreetMap.

The project is actively under development and several major AI features are still being implemented.

Current Features
Live interactive map
Dark themed UI
Current location detection
Destination search
Route visualization
AI Safety Score simulation
AI Route Analysis Bottom Sheet
Risk calculation engine
Animated UI
Glassmorphism components
Responsive layout
Planned Features
Real-time crime data integration
Police station recommendations
Hospital recommendations
SOS emergency system
Live incident reporting
Crowd density estimation
Weather-aware routing
Route comparison
AI prediction model
Firebase backend
User authentication
Route history
Notifications
Offline support
Tech Stack

Frontend

React
Vite
React Leaflet
OpenStreetMap
Framer Motion

Libraries

Axios
React CountUp
React Circular Progressbar
Lucide React

Project Structure
## 📂 Project Structure

```text
safe-route-ai/
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── AILoader/
│   │   ├── Avatar/
│   │   ├── BottomNavigation/
│   │   ├── Button/
│   │   ├── FloatingActionButton/
│   │   ├── GlassCard/
│   │   ├── GradientBlob/
│   │   ├── Header/
│   │   ├── NotificationToast/
│   │   ├── SearchBar/
│   │   ├── SOSModal/
│   │   └── StatsCard/
│   │
│   ├── features/
│   │   └── map/
│   │       ├── BottomSheet.jsx
│   │       ├── Directions.jsx
│   │       ├── HeatmapLayer.jsx
│   │       ├── IncidentMarkers.jsx
│   │       ├── LeafletMapCanvas.jsx
│   │       ├── LiveLocation.jsx
│   │       ├── MapCanvas.jsx
│   │       ├── MapControls.jsx
│   │       └── MapLegend.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard/
│   │   ├── Home/
│   │   ├── Map/
│   │   ├── Onboarding/
│   │   ├── Profile/
│   │   ├── Report/
│   │   └── Splash/
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── services/
│   │
│   ├── utils/
│   │   ├── darkMap.js
│   │   ├── markerIcons.js
│   │   ├── mapStyle.js
│   │   └── riskCalculator.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```
Screenshots

Screenshots will be added as development progresses.

Future Roadmap
Heatmap visualization
AI safety prediction
Firebase integration
Live alerts
Emergency contacts
Crime analytics
Dashboard
Mobile optimization

SOS Module: Provides quick-access emergency actions. Direct calling functionality is intended for mobile devices and will be expanded with emergency contacts, SMS alerts, and live location sharing in future versions.
