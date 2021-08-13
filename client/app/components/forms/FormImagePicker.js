import { useFormikContext } from 'formik';
import React from 'react';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

function FormImagePicker({name}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUri = values[name];
    const handleAdd = uri => {
        setFieldValue(name,[...imageUri,uri])
      }
    
      const handleRemove = uri => {
        setFieldValue(name,imageUri.filter((ImageUri)=> ImageUri != uri));
      }
    return (
        <>
        <ImageInputList imageUris = {imageUri} onAddImage = {handleAdd}  onRemoveImage = {handleRemove}/>
        <ErrorMessage error={errors[name]} visible={touched[name]} />
            
        </>
    );
}

export default FormImagePicker;