import React from 'react';;

class FeaturesTable extends React.Component {

  render() {
    return (
        <div class="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
        <div class="flex flex-wrap my-12 dark:text-white">
            <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                <div class="flex items-center mb-6">
                    <div class="ml-4 text-xl text-yellow-500">
                       FACTURA Y NÓMINA ELECTRÓNICA
                    </div>
                </div>
                <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                Autorizados por la Dian como "Proveedores Certificados" para la prestación del servicio.
                </p>
            </div>
            <div class="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                <div class="flex items-center mb-6">
                    <div class="ml-4 text-xl text-yellow-500">
                    ERP PARA SECTOR AUTOMOTRIZ
                    </div>
                </div>
                <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                Solución Administrativa y Contable diseñada especialmente para Talleres, Servitecas, EDS, Concesionarios y afines.
                </p>
            </div>
            <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                <div class="flex items-center mb-6">
                    <div class="ml-4 text-xl text-yellow-500">
                     ERP PARA EMPRESAS COMERCIALES Y SERVICIOS
                    </div>
                </div>
                <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                Administrativo, Contable y POS que permite modificaciones adaptadas a las necesidades de la cada empresa.
                </p>
            </div>
            <div class="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                <div class="flex items-center mb-6">
                    <div class="ml-4 text-xl text-yellow-500">
                    POS ESTANDAR
                    </div>
                </div>
                <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                Sistema POS para minimercados y negocios de venta rápida.
                </p>
            </div>
            <div class="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                <div class="flex items-center mb-6">
                    <div class="ml-4 text-xl text-yellow-500">
                    COMERCIO ELECTRÓNICO
                    </div>
                </div>
                <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                Robusta y moderna plataforma e-Commerce, que puede ser integrada al Sistema Administrativo.
                </p>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 p-8">
                <div class="flex items-center mb-6">
                    <div class="ml-4 text-xl text-yellow-500">
                    POSTOUCH BEBIDAS Y ALIMENTOS
                    </div>
                </div>
                <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                Sistema POS para pantallas táctiles con manejo de mesas y ambientes. Ideal para los sectores de bebidas y alimentos.
                </p>
            </div>
        </div>
    </div>
  );
  }
}


export default FeaturesTable;