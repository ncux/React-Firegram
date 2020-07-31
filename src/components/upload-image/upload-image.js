import React, { useState } from 'react';
import classes from './upload-image.module.css';
import { ProgressBar } from "../progress-bar/progress-bar";

const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/bmp', 'image/gif'];

export const UploadImage = props => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const onFileSelect = e => {
        const upload = e.target.files[0];
        if(upload && allowedFileTypes.includes(upload.type)) {
            setFile(upload);
            setError(null);
        } else {
            setFile(null);
            setError('No file selected or invalid file type');
        }
    };

    return (
        <form className={`${classes.form}`}>
            <label className={`${classes.label}`}>
                <input type="file" onChange={ onFileSelect } />
                <span>+</span>
            </label>
            <div className={`${classes.output}`}>
                {
                    error && (
                        <div className={`${classes.error}`}>
                            { error }
                        </div>
                    )
                }
                {
                    file && (
                        <div className={``}>
                            { file.name }
                        </div>
                    )
                }
                {
                    file && (<ProgressBar image={ file } setImage={ setFile } />)
                }
            </div>
        </form>
    );

};

