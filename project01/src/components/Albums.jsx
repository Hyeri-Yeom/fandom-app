import React from 'react';
import './Albums.css';
import AlbumCard from '../components/AlbumCard';

import bombImage from '../assets/img/illitHomeimg/artistimg/thum1.png';
import illyouImage from '../assets/img/illitHomeimg/artistimg/thum2.png';
import superRealMeImage from '../assets/img/illitHomeimg/artistimg/thum3.png';
import cats from '../assets/img/illitHomeimg/artistimg/thum4.png';
import Magnetic from '../assets/img/illitHomeimg/artistimg/thum5.png';
import Almond from '../assets/img/illitHomeimg/artistimg/thum6.png';

const albumData = [
  {
    title: '빌려온 고양이',
    date: '2025.06.27',
    image: cats,
  },
  {
    title: 'bomb',
    date: '2025.06.16',
    image: bombImage,
  },
  {
    title: "Almond Chocolate",
    date: '2025.02.14',
    image: Almond,
  },
  {
    title: "I'll Like You",
    date: '2024.10.21',
    image: illyouImage,
  },

  {
    title: 'Magnetic',
    date: '2024.04.19',
    image: Magnetic,
  },
  {
    title: 'Super real me',
    date: '2024.03.25',
    image: superRealMeImage,
  },

];



const Albums = () => {
    return (
    <div className="album-container">
      <p className="subtitle">Albums</p>
      <div className="album-list">
        {albumData.map((album, idx) => (
          <AlbumCard
            key={idx}
            title={album.title}
            date={album.date}
            image={album.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Albums