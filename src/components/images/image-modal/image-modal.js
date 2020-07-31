import React from 'react';
import { motion } from "framer-motion";
import classes from './image-modal.module.css';

export const ImageModal = ({ src, setSrc }) => {

    return (
        <motion.div onClick={ () => setSrc('') }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`${classes.backdrop}`}>
            <motion.img src={ src } alt={`image`} initial={{ y: '-100vh' }} animate={{ y: 0 }} transition={{ delay: 1 }} />
        </motion.div>
    );

};

