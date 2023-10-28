import React, { useState } from "react";

type BubbleProps = {
  stepValue: number | string;
  color?: Colors;
};

type TextProps = {
  value: string;
};

type Colors = "bg-orange-200" | "bg-indigo-50" | "bg-green-200" | "bg-red-200";

const Bubble: React.FC<BubbleProps> = ({
  stepValue,
  color = "bg-indigo-50",
}) => {
  return (
    <div
      className={`flex items-center text-3xl font-black justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-20 sm:h-20 ${color}`}
    >
      {stepValue}
    </div>
  );
};

const Arrow: React.FC = () => {
  return (
    <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
      <svg
        className="w-8 text-gray-400 transform rotate-90 lg:rotate-0"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <line
          fill="none"
          stroke-miterlimit="10"
          x1="2"
          y1="12"
          x2="22"
          y2="12"
        ></line>
        <polyline
          fill="none"
          stroke-miterlimit="10"
          points="15,5 22,12 15,19 "
        ></polyline>
      </svg>
    </div>
  );
};

const Text: React.FC<TextProps> = ({ value }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-52 text-center">
        <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
          {value}
        </p>
      </div>
    </div>
  );
};

export const Steps: React.FC = () => {
  const [steps] = useState([
    "Seu pedido está foi aceito e está sendo preparado",
    "Seu pedido saiu para entrega",
    "Seu pedido foi entregue",
    "Seu pedido foi finalizado com sucesso",
  ]);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h1 className="font-bold text-indigo-900 text-4xl text-center ">
          Acompanhe aqui o seu pedido
        </h1>
      </div>

      <div className="grid gap-8 row-gap-0 lg:grid-cols-5">
        {steps.map((step, index) => (
          <div className="relative text-center">
            <Bubble stepValue={index + 1} color="bg-green-200" />
            <Text value={step} />
            <Arrow />
          </div>
        ))}

        <div className="relative text-center">
          <Bubble stepValue={5} color="bg-orange-200" />
          <Text value="Aguardando Finalização" />
        </div>
      </div>
    </div>
  );
};
