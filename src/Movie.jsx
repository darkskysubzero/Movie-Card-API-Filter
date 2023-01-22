import React from 'react';

import { motion } from "framer-motion";


const Movie = ({ data }) => {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, transition: { duration: 1, ease: "easeIn" } }}
            exit={{ opacity: 0, }}
            layout
            className='movie'>
            <h2>{data.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="" />
        </motion.div>
    );
}

export default Movie;
