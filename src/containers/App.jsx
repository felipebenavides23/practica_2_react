import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/App.scss'
import Categorie from '../components/categories';
import Carrusel from '../components/carrusel';
import CarruselItem from '../components/carruselitem';
import Footer from '../components/Footer'

var titulo1 = 'seccion1 variable'

const app = () => (
    <div className='app'>
        <Header/>
        <Search/>

        <Categorie title={titulo1}>
            <Carrusel>
                <CarruselItem />
                <CarruselItem />
                <CarruselItem />
                <CarruselItem />
                <CarruselItem />

            </ Carrusel>
        </ Categorie>

        <Categorie title='seccion 2'>
            <Carrusel>
                <CarruselItem />
                <CarruselItem />
                <CarruselItem />
                <CarruselItem />
                <CarruselItem />

            </ Carrusel>
        </ Categorie>

        <Categorie title ='seccion 3'>
            <Carrusel>
                <CarruselItem />
                <CarruselItem />
                <CarruselItem />
                <CarruselItem />
                <CarruselItem />

            </ Carrusel>
        </ Categorie>
        

        <Footer/> 
    </div>

);

 export default app;