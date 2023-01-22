import React from 'react';

import { motion } from "framer-motion";


const Movie = ({ data }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            layout
            className='movie'>
            <h2>{data.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="" />
        </motion.div>
    );
}

export default Movie;
