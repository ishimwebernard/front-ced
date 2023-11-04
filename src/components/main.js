import React from 'react'
import HomeRefurbished from './homerefurbished'
import Pricing from './pricing'
import AboutUs from './aboutus'
import Contact from './contact'
import Login from './login'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import Applc from './applc'
import Education from './education'
import Availability from './availability'
import Swot from './swot'
import References from './references'
import Documents from './documents'
import Admindashboard from './admindashboard'
import Applications from './applications'
import ReviewApplication from './reviewappl'
import Schedules from './schedules'
import Review from './review'
import ScheduleOpener from './scheduleOpener'
import Active from './active'
import UserDashboard from './userdashboard'

export default function Main() {
    return (
        <div className="">
         <Router>
         <Routes>
         <Route exact path="/"  element={HomeRefurbished}/>
         <Route exact path="/pricing"  element={Pricing}/>
         <Route exact path="/membership" element={Applc} />
         <Route exact path="/about"  element={AboutUs} />
         <Route exact path="/contact"  element={Contact} />
        <Route exact path="/signin"  element={Login} />
        <Route exact path="/education"  element={Education} />
        <Route exact path="/availability"  element={Availability} />
        <Route exact path="/streandwe"  element={Swot} />
        <Route exact path="/references"  element={References} />
        <Route exact path="/documents"  element={Documents} />
        <Route exact path="/admindashboard"  element={Admindashboard} />
        <Route exact path="/admindashboard/applications"  element={Applications} />
        <Route exact path="/admindashboard/appreview"  element={ReviewApplication} />
        <Route exact path="/admindashboard/schedules"  element={Schedules} />
        <Route exact path="/admindashboard/openschedule"  element={ScheduleOpener} />
        <Route exact path="/documents/review"  element={Review} />
        <Route exact path="/admindashboard/activeusers"  element={Active} />
        <Route exact path="/myaccount"  element={UserDashboard} />
         </Routes>
         </Router>
        </div>
    )
}
