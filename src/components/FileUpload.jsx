import React, { useState , useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      Swal.fire({
        icon: 'success',
        title: '¡Bien Hecho!',
        text: 'Archivo cargado correctamente.'
      });
    return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData);
      console.log('Archivo cargado con éxito:', response.data);
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Archivo cargado con éxito.',
      });
      setTimeout(() => {
        fileInputRef.current.value = '';
        setSelectedFile(null);
      }, 1000);
    } catch (error) {
      console.error('Error al cargar el archivo:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al cargar el archivo.'
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} /><br />
      <button onClick={handleFileUpload}>Cargar Archivo</button>
    </div>
  );
};

export default FileUpload;

