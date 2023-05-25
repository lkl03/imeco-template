import Image from "next/image";
import React from "react";
import Container from "./container";

import logoCert1 from "../public/img/logocert-1.png"
import logoCert2 from "../public/img/logocert-2.png"

import brandLogo1 from "../public/img/brands/logo1.png"
import brandLogo2 from "../public/img/brands/logo2.png"
import brandLogo3 from "../public/img/brands/logo3.png"
import brandLogo4 from "../public/img/brands/logo4.png"
import brandLogo5 from "../public/img/brands/logo5.png"
import brandLogo6 from "../public/img/brands/logo6.png"
import brandLogo7 from "../public/img/brands/logo7.png"
import brandLogo8 from "../public/img/brands/logo8.png"
import brandLogo9 from "../public/img/brands/logo9.png"
import brandLogo10 from "../public/img/brands/logo10.png"
import brandLogo11 from "../public/img/brands/logo11.png"

const Faq = () => {
  return (
    <Container className="!pt-0">
          <div className="flex flex-wrap justify-center md:gap-10 gap-5 md:justify-center md:items-end">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Image
                src={brandLogo1}
                width="200"
                height="auto"
                className={"object-cover"}
                alt="Cert-1"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src={brandLogo2}
                width="200"
                height="auto"
                className={"object-cover"}
                alt="Cert-2"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src={brandLogo3}
                width="200"
                height="auto"
                className={"object-cover"}
                alt="Cert-2"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src={brandLogo4}
                width="200"
                height="auto"
                className={"object-cover"}
                alt="Cert-2"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src={brandLogo5}
                width="200"
                height="auto"
                className={"object-cover"}
                alt="Cert-2"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src={brandLogo6}
                width="200"
                height="auto"
                className={"object-cover"}
                alt="Cert-2"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src={brandLogo7}
                width="200"
                height="auto"
                className={"object-cover"}
                alt="Cert-2"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src={brandLogo8}
                width="200"
                height="auto"
                className={"object-cover"}
                alt="Cert-2"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src={brandLogo9}
                width="200"
                height="auto"
                className={"object-cover"}
                alt="Cert-2"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src={brandLogo10}
                width="200"
                height="auto"
                className={"object-cover"}
                alt="Cert-2"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src={brandLogo11}
                width="200"
                height="auto"
                className={"object-cover"}
                alt="Cert-2"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
    </Container>
  );
}

export default Faq;