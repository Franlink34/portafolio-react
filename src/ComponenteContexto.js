import React from 'react'

export const ComponenteContexto = () => {
    return (
        <div className='main'>
            <section className='experience'>
                <h2 className='title'>EXPERIENCIA LABORAL</h2>
                <div className='experience-item'>
                    <div className='practicas'>Prácticas</div>
                    <div className='empresa'>Grupo IWI Consultores, S.L.
                        <span className='fecha'>18/06/2025-07/07/2025</span>
                    </div>
                    <div className='detalles'> Crear, retocar e integrar componentes 
                        software en páginas web, de acuerdo con las especificaciones 
                        de diseño recibida por parte de la empresa, publicar páginas
                        web siguiendo las especificaciones del administrador del sistema
                        y los procedimientos empresariales, participar en los procesos 
                        de trabajo de la empresa, siguiendo las normas e instrucciones 
                        establecidas en el centro de trabajo. (80 horas) 
                    </div>
                </div>
            </section>
            <section className='titulos'>
                <h2 className='title'>Títulos</h2>
                <div className='cursos'>Cursos</div>
                <div className='nombre-curso'>Construcción de páginas web (210 horas)
                    <span className='fecha'>03/04/2024-21/05/2024</span>
                </div>
                <div className='detalles'>Objetivos:
                    <li className='detalles'>Realizar páginas web para presentar información utilizando herramientas de edición web, 
                        siguiendo especificaciones de diseño recibidas.</li>
                    <li className='detalles'>Crear páginas web y retocar las ya realizadas utilizando lenguajes de marcas, de acuerdo a 
                        especificaciones de diseño recibidas.</li>
                    <li className='detalles'>Añadir funcionalidades a las páginas web creando interfaces interactivos y otros elementos 
                        reutilizables, siguiendo las especificaciones de diseño recibidas.</li>
                </div>
                <div className='nombre-curso'>Integración de componentes software en páginas web (180 horas)
                    <span className='fecha'>22/05/2024-08/07/2024</span>
                </div>
                <div className='detalles'>Objetivos:
                    <li className='detalles'> Interpretar componentes software desarrollados en lenguajes de guión de cliente, siguiendo 
                        especificaciones recibidas.</li>
                    <li className='detalles'>Ajustar componentes software ya desarrollados en páginas web para añadir funcionalida
                        des a las mismas, siguiendo especificaciones recibidas.</li>
                    <li className='detalles'>Verificar la integración de los componentes software en las páginas web para asegurar el 
                        cumplimento de las funcionalidades esperadas, según los criterios de calidad de la organización.</li>
                </div>
                <div className='nombre-curso'>Publicación de páginas web (90 horas)
                    <span className='fecha'>09/07/2024-30/07/2024</span>
                </div>
                <div className='detalles'>Objetivos:
                    <li className='detalles'>Gestionar el sitio web, mediante herramientas de transferencia, para ubicar las páginas 
                        siguiendo las especificaciones del administrador del sistema.</li>
                    <li className='detalles'>Realizar pruebas de la funcionalidad de las páginas desarrolladas para asegurar su 
                        operatividad y aspecto final, de acuerdo a las especificaciones de diseño y calidad de la organización.</li>
                    <li className='detalles'> Divulgar las páginas desarrolladas para ser utilizadas por los usuarios, siguiendo las normas 
                        de calidad establecidas por la organización.</li>
                </div>
            </section>
            <section className='titulaciones'>
                <h2 className='title'>Titulaciones</h2>
                <div className='nombre-curso'>Cualificación profesional</div>
                <div className='detalles'><strongo>IFC297_2</strongo> Confección y Publicación de Páginas Web (Real Decreto 1201/2007, 14 de septiembre)</div>
            </section>
            <section className='otra-formacion'>
                <h2 className='title'>Otras formaciones</h2>
                <div className='nombre-curso'>Wordpress básico</div>
                <div className='nombre-curso'>Gutenberg básico</div>
                <div className='nombre-curso'>Gutenberg avanzado</div>
            </section>
        </div>
    )
}
