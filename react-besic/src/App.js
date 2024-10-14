import React from 'react';
import './App.css';
// import A01nameDatePrinter from './topics/A01nameDatePrinter'
// import A02JSXAttribute from './topics/A02JSXAttribute';
// import A03AddingCSSProperty from './topics/A03AddingCSSProperty';
// import A04Challenge1 from './topics/A04Challenge1';
// import ExporttoApp from './topics/A06Import';
import A07PropsAsCard from './topics/A07PropsAsCard';
import webSeries from './topics/A08ArrayOfObj';

const callbacks = (val) => {
  return <A07PropsAsCard key={val.id} cardImage={val.cardImage} title={val.title} desc={val.desc} link={val.link}/>
}

function App() {
  return (
    <>

    {/* <A01nameDatePrinter/> */}
    {/* <A02JSXAttribute/> */}
    {/* <A03AddingCSSProperty/> */}
    {/* <A04Challenge1/> */}
    {/* <ExporttoApp/> */}
    {/* <div className="container">
    <A07PropsAsCard cardImage={webSeries[0].cardImage} title={webSeries[0].title} desc={webSeries[0].desc} link={webSeries[0].link}/>
    <A07PropsAsCard cardImage={webSeries[1].cardImage} title={webSeries[1].title} desc={webSeries[1].desc} link={webSeries[1].link}/>
    <A07PropsAsCard cardImage={webSeries[2].cardImage} title={webSeries[2].title} desc={webSeries[2].desc} link={webSeries[2].link}/>
    </div> */}
    {/* We will show that code in simple way*/}
    <div className='container'>
    {webSeries.map(callbacks)}
    </div>

    </>
  );
}

export default App;
