import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="w-full flex flex-wrap">
        {/* Register Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Faça seu registro</p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onsubmit="event.preventDefault();"
            >
              <div className="flex flex-col pt-4">
                <label htmlFor="name" className="text-lg">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nome Sobrenome"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="*******"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="confirm-password" className="text-lg">
                  Confirme sua senha
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="*******"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <input
                type="submit"
                defaultValue="Register"
                className="bg-white text-gray-800 font-bold rounded border-l-2 border-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white shadow-md py-2 px-6 inline-flex items-center mt-5"
              />
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Já tem uma conta?
                <Link to="/login" className="underline font-semibold ml-2">
                    Faça login aqui
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-full hidden md:block"
            src="./assets/register.png"
          />
        </div>
      </div>
    );
  }
}

export default Register;
