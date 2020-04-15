import React, { Component } from "react";
import dataProducts from "../components/data/data";
import ProductList from "./ProductList";

class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let TodosProdutos = dataProducts.map((Teste) => {
      return <p>teste</p>;
    });
    return (
      <>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Informações do produto:
            </h3>
          </div>
          <div>
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-700">
                  Nome completo do produto
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-600 sm:mt-0 sm:col-span-2">
                  ((Product Nome))
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-700">
                  Preço
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-600 sm:mt-0 sm:col-span-2">
                  ((Product Price))
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-700">
                  Distribuidora
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-600 sm:mt-0 sm:col-span-2">
                  ((Product Distribuidora))
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-700">
                  Descrição
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-600 sm:mt-0 sm:col-span-2">
                  ((Product Descrição))
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-700">
                  Descrição
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-600 sm:mt-0 sm:col-span-2">
                  ((Product Mais Descrição))
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </>
    );
  }
}

export default Details;
