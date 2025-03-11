document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(document.location.search);
    const datosDeObtencionAgilYOportunaParaAgilizarElDesarrolloSocialYCiudadanos = [
        {
            serviceticket_code: params.get("codigo") || '2025-55442',
            cs_emision_date: params.get("inicio") || '11/02/2025',
            cs_expiration_date: params.get("fin") || '11/02/2026',
        }
    ];
    actualizarTablaDatosDeObtencionAgilYOportunaParaAgilizarElDesarrolloSocialYCiudadanos(datosDeObtencionAgilYOportunaParaAgilizarElDesarrolloSocialYCiudadanos);
});


function actualizarTablaDatosDeObtencionAgilYOportunaParaAgilizarElDesarrolloSocialYCiudadanos(datosDeObtencionAgilYOportunaParaAgilizarElDesarrolloSocialYCiudadanos) {
    let tbody = document.getElementById('tabla-datos-de-obtencion-agil-y-oportuna-para-agilizar-el-desarrollo-social-y-ciudadanos').querySelector('tbody');
    tbody.innerHTML = '';
    
    datosDeObtencionAgilYOportunaParaAgilizarElDesarrolloSocialYCiudadanos.forEach(datosDeObtencionAgilYOportunaParaAgilizarElDesarrolloSocialYCiudadano => {
        let fila = tbody.insertRow();
        fila.insertCell().textContent = datosDeObtencionAgilYOportunaParaAgilizarElDesarrolloSocialYCiudadano.serviceticket_code;
        fila.insertCell().textContent = datosDeObtencionAgilYOportunaParaAgilizarElDesarrolloSocialYCiudadano.cs_emision_date;
        fila.insertCell().textContent = datosDeObtencionAgilYOportunaParaAgilizarElDesarrolloSocialYCiudadano.cs_expiration_date;
    });
}

