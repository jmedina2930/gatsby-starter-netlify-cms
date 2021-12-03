import React from "react";

const cardClases =
  "w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-white shadow-2xl rounded-lg dark:bg-gray-800";

class PricingTab extends React.Component {
  render() {
    return (
      // items-center
      <div class="sm:flex flex-wrap justify-center  text-center gap-8 h-full">
        <div class={`${cardClases} px-4 py-4 mt-6`}>
          <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Plan Empresarial
          </h3>
          <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            <ul style={{ textAlign: "left" }}>
              <li>Facturación electrónica ilimitada </li>
              <li>Inventarios</li>
              <li>Tesoreria</li>
              <li>Contabilidad</li>
              <li>Medios Magneticos</li>
            </ul>
          </p>
        </div>
        {/* sm:mt-16 md:mt-20 lg:mt-24 */}
        <div class={`${cardClases} px-4 py-4 mt-6`}>
          <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Plan FE
          </h3>
          <p class="text-md text-gray-500 dark:text-gray-300 py-4">
            <ul style={{ textAlign: "left" }}>
              <li>100 facturas electrónicas anuales</li>
              <li>8-9 facturas mes a mes </li>
            </ul>
          </p>
        </div>
        <div class={`${cardClases} mt-6  px-4 py-4`}>
          <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Facturas
          </h3>
          <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            <p class="text-md text-gray-500 dark:text-gray-300 py-4">
              Puedes escoger entre:
              <ul style={{ textAlign: "left" }}>
                <li>Facturación electrónica por 500 documentos anuales </li>
                <li>Facturación electrónica ilimitada </li>
              </ul>
            </p>
          </p>
        </div>
        <div class={`${cardClases} mt-6  px-4 py-4`}>
          <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Nómina Electrónica
          </h3>
          <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            <ul style={{ textAlign: "left" }}>
              <li>Plan Semestral </li>
              <li>Plan Anual </li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

export default PricingTab;
