import React, { useState } from 'react';
import { motion } from "framer-motion";
import classes from './images.module.css';
import useFirestore from "../../hooks/useFirestore";
import { ImageModal } from "./image-modal/image-modal";

export const Images = props => {

    const { documents } = useFirestore('imageDownloadUrls');
    const [imageSrc, setImageSrc] = useState('');

    const showImages = (
        <>
            {
                documents && documents.map(doc => (
                    <motion.div key={doc.id}
                                onClick={ () => setImageSrc(doc.downloadUrl) }
                                layout
                                whileHover={{ opacity: 1 }}
                                className={`${classes.imageBlock}`}>
                        <motion.img
                            src={ doc.downloadUrl }
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            alt={`image`} />
                    </motion.div>
                    )
                )
            }
        </>
    );

    return (
        <div className={`${classes.imageGrid}`}>
            { showImages }
            { imageSrc && (<ImageModal src={imageSrc} setSrc={setImageSrc} />) }
        </div>
    );

};

