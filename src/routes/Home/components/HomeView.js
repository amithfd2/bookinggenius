import React from 'react'
import ParallaxSlider from '../../../components/common/ParallaxSlider'
import SearchForm from '../../../components/SearchForm'
import FeaturedReviews from '../../../components/FeaturedReviews'
import TalentSlides from '../../../components/TalentSlides'
import HowItWorks from '../../../components/HowItWorks'

export const HomeView = () => (
  	<div className="homepage"> 

	    <ParallaxSlider />

	    <SearchForm />

	    <TalentSlides />

		<HowItWorks />

		<FeaturedReviews />

	</div>
)

export default HomeView
