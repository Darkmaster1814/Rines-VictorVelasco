/* Alertas hechas con sweet alert */
import Swal from 'sweetalert2'

export const alertExito=(message)=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })
    Toast.fire({
        icon: 'success',
        text: message
    })
};

export const alertFracaso=(message)=>{
    Swal.fire({
        icon: 'error',
        title: message
    })
}
export const alertWarning=(message)=>{
    Swal.fire({
        icon: 'warning',
        title: message
    })
}
