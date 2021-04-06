import React from "react"
import MainLayout from "@/layouts/MainLayout"
import Promo from "@/components/Promo"
import Services from "@/components/Services"
import AboutUs from "@/components/AboutUs"
import MovingChecklist from "@/components/MovingChecklist"
import Quality from "@/components/Quality"
import Reviews from "@/components/Reviews"
import ServiceArea from "@/components/ServiceArea"
import Form from "@/components/Form"

export default () => {
  return (
    <>
    
      <MainLayout>
        <Promo />
        <AboutUs />
        <Services />
        <Quality />
        <Reviews />
        <MovingChecklist />
        <ServiceArea />
      </MainLayout>
    </>
  )
}
