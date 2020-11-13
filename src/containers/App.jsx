import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/App.scss'
import Categorie from '../components/categories';
import Carrusel from '../components/carrusel';
import CarruselItem from '../components/carruselitem';
import Footer from '../components/Footer'
import useInitialState  from '../Hooks/useinitialState.js'

const API ='http://localhost:3000/initialState';

const app = () => {
        const initialState = useInitialState(API)
         return(
     <div className='app'>
         <Header/>
         <Search/>
            {initialState.mylist.length > 0 &&(
                <Categorie title='mi lista'>
             <Carrusel>
                {initialState.mylist.map(item => <CarruselItem key={item.id} {...item} />)}
                </ Carrusel>
         </ Categorie>
            )}

         

         <Categorie title='seccion 2'>
             <Carrusel>
                 {initialState.trends.map( item => <CarruselItem key = {item.id } {...item}/>)}
             </ Carrusel>
         </ Categorie>

         <Categorie title ='seccion 3'>
             <Carrusel>
             {initialState.originals.map( item => <CarruselItem key = {item.id } {...item}/>)}

             </ Carrusel>
         </ Categorie>
        

         <Footer/> 
     </div>

     );
 }
  export default app;