import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <section className="container px-3 mx-auto mt-10 flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight\">
            Bem vindo a nossa loja!
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Aqui temos uma grande variedade de produtos de informática com os
            melhores preços.
          </p>
          <div class="flex m-3 md:w-aut md:hidden sm:hidden lg:flex xl:flex">
            <a href="/login">
            <button class="bg-white text-gray-800 font-bold rounded border-l-2 border-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span class="mr-2">Cadastre-se</span>
              <i class="fas fa-sign-in-alt fa-lg" />
            </button>
            </a>
          </div>
        </div>
        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" src="./assets/welcome.png" />
        </div>
      </section>
    );
  }
}

export default Landing;
