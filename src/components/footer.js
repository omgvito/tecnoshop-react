import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <section className="bg-white py-8 w-full content-center align-center">
        <div className="container mx-auto px-8">
          <div className="table w-full">
            <div className="block sm:table-cell">
              <p className="uppercase text-grey text-sm sm:mb-6">Links</p>
              <ul className="list-reset text-xs mb-6">
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-grey hover:text-grey-dark">
                    FAQ
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-grey hover:text-grey-dark">
                    Help
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-grey hover:text-grey-dark">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="block sm:table-cell">
              <p className="uppercase text-grey text-sm sm:mb-6">Legal</p>
              <ul className="list-reset text-xs mb-6">
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-grey hover:text-grey-dark">
                    Terms
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-grey hover:text-grey-dark">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="block sm:table-cell">
              <p className="uppercase text-grey text-sm sm:mb-6">Social</p>
              <ul className="list-reset text-xs mb-6">
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-grey hover:text-grey-dark">
                    Facebook
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-grey hover:text-grey-dark">
                    Linkedin
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-grey hover:text-grey-dark">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="block sm:table-cell">
              <p className="uppercase text-grey text-sm sm:mb-6">Company</p>
              <ul className="list-reset text-xs mb-6">
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-grey hover:text-grey-dark">
                    Official Blog
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-grey hover:text-grey-dark">
                    About Us
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-grey hover:text-grey-dark">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
