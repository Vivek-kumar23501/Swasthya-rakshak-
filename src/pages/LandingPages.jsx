import Howitwork from "../Components/section/Howitwork"
import LandingFooter from "../Components/section/LandingFooter"

import LandingHero from "../Components/section/LandingHero"
import LandingNavbar from "../Components/section/LandingNavbar"
import LandingServices from "../Components/section/LandingServices"
import TestimonialsSection from "../Components/section/TestimonialsSection"

const LandingPages=()=>{
    return(
        <>
<LandingNavbar/>
<LandingHero/>
<LandingServices/>
<Howitwork/>
<TestimonialsSection/>

<LandingFooter/>
</>
    )
}

export default LandingPages