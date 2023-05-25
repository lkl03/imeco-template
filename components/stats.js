import React from "react";
import Container from "./container";

const Stats = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-[#002675] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex flex-wrap items-center justify-around w-full m-auto">
          <div className="flex flex-wrap flex-col items-center justify-center gap-1">
            <h2 className="md:text-4xl text-xl font-medium">+10000</h2>
            <p className="md:text-xl text-lg">Cantidad de Prótesis</p>
          </div>
          <div className="flex flex-wrap flex-col items-center justify-center gap-1">
            <h2 className="md:text-4xl text-xl font-medium">+9900</h2>
            <p className="md:text-xl text-lg">Cirugías Exitosas</p>
          </div>
          <div className="flex flex-wrap flex-col items-center justify-center gap-1">
            <h2 className="md:text-4xl text-xl font-medium">+9840</h2>
            <p className="md:text-xl text-lg">Pacientes Satisfechos</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Stats;