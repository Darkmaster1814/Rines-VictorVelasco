/* Alertas hechas con sweet alert para dar feedback al usuario cuando realice una acción */
/* Importar libreria de sweet alert */
import Swal from 'sweetalert2'
/* Alerta Exito */
export const alertExito = (message) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
    })
    Toast.fire({
        icon: 'success',
        text: message
    })
};
/* Alerta de Fracaso */
export const alertFracaso = (message) => {
    Swal.fire({
        icon: 'error',
        title: message
    })
}
/* Alerta de advertencia */
export const alertWarning = (message) => {
    Swal.fire({
        icon: 'warning',
        title: message
    })
}