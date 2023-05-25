import { useState } from "react";
import Container from "./container";

const Map = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between gap-10 w-full max-w-6xl mx-auto overflow-hidden mt-10 rounded-2xl ">
        <div>
          <iframe src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sIMECO+SA!5e0!6i12" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <form>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#002675] focus:border-[#002675] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
              <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
              <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#002675] focus:border-[#002675] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
            </div>
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#002675] focus:border-[#002675] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <div class="mb-6">
            <label for="ciudad" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciudad</label>
            <input type="text" id="ciudad" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#002675] focus:border-[#002675] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <div class="mb-6">
            <label for="consulta" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Consulta</label>
            <textarea id="consulta" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#002675] focus:border-[#002675] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <button type="submit" class="text-white bg-[#002675] hover:bg-[#002675] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
        </form>
      </div>
    </Container>
  );
}

export default Map;