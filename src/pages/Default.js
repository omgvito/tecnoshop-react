import React, { Component } from "react";
import {Link } from "react-router-dom";

class Default extends Component {
  render() {
    return (
      <div className="flex bg-white" style={{ height: "600px" }}>
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
             Erro <span className="text-gray-700">404</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Desculpe-nós, mas a página que você está procurando não foi encontrada. Tente olhar a URL e verificar se alguma letra não está faltando ou se está escrito errado.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <Link
                className="bg-white text-gray-800 font-bold rounded border-l-2 border-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                to="/"
              >
                Volte a página inicial
              </Link>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2"
          style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div
            className="h-full w-full object-center"
          >
              <img src="./assets/404.png" className="w-full h-full" alt=""/>
            <div className="h-full bg-black opacity-25" />
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
