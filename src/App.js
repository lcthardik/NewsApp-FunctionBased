import './App.css';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'
import Newss from './Components/Newss';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'





const App=()=> {
  const apiKey=process.env.REACT_APP_NEWS_API 
  const ArticlePerPage=12;
  const [loadbar,setloadbar]=useState(0);
 /*  state={
    progress:0
  }

  setProgress = (progress)=>{
    setState({progress:progress})
  }
 */

    return (
      <div>        
        <Router>
          <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={loadbar}
      />
        
        <Routes>
          <Route exact  path="/" element={<Newss setProgress={ setloadbar} key="general" PageLimit={ArticlePerPage} country={"in"} category={"general"} ApiKey={apiKey} />}/>
          <Route exact  path="/business" element={<Newss setProgress={ setloadbar} key="business" PageLimit={ArticlePerPage} country={"in"} category={"business"} ApiKey={apiKey}/>}/>
          <Route exact path="/entertainment" element={<Newss setProgress={ setloadbar} key="entertainment" PageLimit={ArticlePerPage} country={"in"} category={"entertainment"} ApiKey={apiKey}/>}/>
          <Route exact path="/health" element={<Newss setProgress={ setloadbar} key="health" PageLimit={ArticlePerPage} country={"in"} category={"health"} ApiKey={apiKey}/>}/>
          <Route exact path="/science"  element={<Newss setProgress={ setloadbar} key="science" PageLimit={ArticlePerPage} country={"in"} category={"science"} ApiKey={apiKey}/>}/>
          <Route exact path="/sports" element={<Newss setProgress={ setloadbar} key="sports" PageLimit={ArticlePerPage} country={"in"} category={"sports"} ApiKey={apiKey}/>}/>
          <Route exact path="/technology" element={<Newss setProgress={ setloadbar} key="technology" PageLimit={ArticlePerPage} country={"in"} category={"technology"} ApiKey={apiKey}/>}/>
        </Routes>
        </Router>
      </div>
    )
  
}

export default App;