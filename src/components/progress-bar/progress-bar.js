import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import classes from './progress-bar.module.css';
import useStorage from "../../hooks/useStorage";

export const ProgressBar = ({ image, setImage }) => {

    const { progress, url } = useStorage(image);

    useEffect(() => {
        if(url) {
            setImage(null);
        }
    }, [url]);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className={`${classes.progressBar}`}>

        </motion.div>
    );

};

