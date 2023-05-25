import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CheckIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Prótesis quirúrgicas",
  image: benefitOneImg,
  bullets: [
    {
      title: "Craneoplastía",
      icon: <CheckIcon />,
    },
    {
      title: "Columna",
      icon: <CheckIcon />,
    },
    {
      title: "Miembros Superior",
      icon: <CheckIcon />,
    },
    {
      title: "Miembros Inferior",
      icon: <CheckIcon />,
    },
    {
      title: "Osteosíntesis",
      icon: <CheckIcon />,
    },
    {
      title: "A medida",
      icon: <CheckIcon />,
    },
    {
      title: "Instrumental asociado",
      icon: <CheckIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Veterinaria",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Pequeños animales",
      icon: <CheckIcon />,
    },
    {
      title: "Grandes animales",
      icon: <CheckIcon />,
    },
  ],
};

const benefitThree = {
  title: "Implantes a Medida",
  image: benefitOneImg,
  bullets: [
    {
      title: "Planificación",
      icon: <CheckIcon />,
    },
    {
      title: "Precisión",
      icon: <CheckIcon />,
    },
  ],
};


export {benefitOne, benefitTwo, benefitThree};
