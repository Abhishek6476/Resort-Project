
// import AboutHero from "../components/About/HeroSection";
// import OurStory from "../components/About/OurStory";
// import MissionVision from "../components/About/MissionVision";
// import HighlightSection from "../components/About/HighlightSection";

// export default function About() {
//   return (
//     <div>
//       <AboutHero />
//       <OurStory/>
//       <MissionVision/>
//       <HighlightSection/>
//     </div>
//   );
// }




import AboutHero from "../components/About/HeroSection";
import OurStory from "../components/About/OurStory";
import MissionVision from "../components/About/MissionVision";
import FeaturesSection from "../components/About/FeaturesSection";
import HighlightSection from "../components/About/HighlightSection";

import StaffSection from "../components/About/StaffSection";
import AwardsRecognition from "../components/About/AwardsRecognition";
import WeOffer from "../components/About/WeOffer";

export default function About() {
  return (
    <div>
      <AboutHero />
      <OurStory/>
      <MissionVision/>
      <FeaturesSection/>
      <StaffSection/>
      <WeOffer/>
      <AwardsRecognition />
      <HighlightSection/>
    </div>
  );
}