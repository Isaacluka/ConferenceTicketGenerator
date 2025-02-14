import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import NavBar from "./components/NavBar";
import SelectTicket from './pages/SelectTicket';
import AttendeeDetails from './pages/AttendeeDetail';
import TicketReady from './pages/TicketReady';
import { Routes, Route } from 'react-router-dom';
import { Axios } from "axios";

// import { multiStepContext } from './StepContext';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<SelectTicket />}/>
          <Route path="/attendeedetails" element={<AttendeeDetails />}/>
          <Route path="/ticketready" element={<TicketReady />}/>
        </Routes>
      </main>
    </div>
  );
}

// function MovieCard({movie}){
//   function onFavoriteClick(){
//     alert("Clicked");  
//   }

//   return  <div className='movie-card'>
//     <div className='movie-poster'>
//       <img src={movie.url} alt={movie.title}/>
//       <div className='movie-overlay'>
//         <button className='favorite-btn' onClick={onFavoriteClick}>
//           LIKE
//         </button>
//       </div>
//     </div>
//     <div className='movie-info'>
//       <h3>{movie.title}</h3>
//       <p>{movie.release_date}</p>
//     </div>
//   </div>
// }


// {movieNumber === 1 ? (
//   <MovieCard movie={{title: "Isaac's Movie", release_date: "2024"}}/>
// ) : (
//   <MovieCard movie={{title: "MJ's Movie", release_date: "2030"}}/>
// )}


// <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <h1>Isaac Luka</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>











export default App


