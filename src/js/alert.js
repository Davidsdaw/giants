        // Cerrar la alerta al hacer clic en el botón
        const alert = document.getElementById('alert');
        const closeAlert = document.getElementById('closeAlert');
      
        closeAlert.addEventListener('click', () => {
          alert.style.display = 'none';
        });
