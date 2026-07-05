import "./Home.css";

import Header from "../../components/Header/Header";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import SafetyBanner from "../../components/SafetyBanner/SafetyBanner";
import RiskMeter from "../../components/RiskMeter/RiskMeter";
import QuickActions from "../../components/QuickActions/QuickActions";
import AIRecommendation from "../../components/AIRecommendation/AIRecommendation";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

function Home() {
  return (
    <div className="home-page">

      <Header />

      <main className="home-content">

        <WeatherCard />

        <SafetyBanner />

        <RiskMeter />

        <QuickActions />

        <AIRecommendation />

      </main>

      <BottomNavigation />

    </div>
  );
}

export default Home;