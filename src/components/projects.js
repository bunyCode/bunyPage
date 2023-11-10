import { IconBrandHtml5, IconBrandCss3, IconBrandJavascript, IconBrandReact, IconJson } from "@tabler/icons-react"

import bunyTask from "../assets/bunyTask.webp"
import snowSnowManTheme from '../assets/snow-theme.webp'
import piedraPapelOTijera from '../assets/piedra-papel-o-tijera.webp'
import contador from '../assets/contador.webp'
import google from '../assets/google-clone.webp'


const proyects = [
    {
        img: snowSnowManTheme,
        title: "Snow snowman Theme",
        repositoriUrl: "https://github.com/bunyCode/snowman-theme",
        viewUrl: "https://marketplace.visualstudio.com/items?itemName=DanielFernando.snow-snowman-theme",
        isVscodeIcon: true,
        tecnologies: [
            {
                tecnologieIcon: IconJson,
                tecnologieText: "JSON"
            }
        ]

    },
    {
        img: piedraPapelOTijera,
        title: "Piedra Papel o tijera",
        repositoriUrl: "https://github.com/bunyCode/piedra-papel-o-tijera",
        viewUrl: "https://piedra-papel-o-tijera-df.vercel.app/",
        tecnologies: [
            {
                tecnologieIcon: IconBrandHtml5,
                tecnologieText: "HTML"
            },
            {
                tecnologieIcon: IconBrandCss3,
                tecnologieText: "CSS"
            },
            {
                tecnologieIcon: IconBrandJavascript,
                tecnologieText: "Javascript"
            }

        ]
    },
    {
        img: contador,
        title: "Contador",
        repositoriUrl: "https://github.com/bunyCode/Contador",
        viewUrl: "https://contador-df.vercel.app/",
        tecnologies: [
            {
                tecnologieIcon: IconBrandHtml5,
                tecnologieText: "HTML"
            },
            {
                tecnologieIcon: IconBrandCss3,
                tecnologieText: "CSS"
            },
            {
                tecnologieIcon: IconBrandJavascript,
                tecnologieText: "Javascript"
            }
        ]
    },
    {
        img: google,
        title: "Clon de google",
        repositoriUrl: "https://github.com/bunyCode/Clon-de-Google",
        viewUrl: "https://clon-de-google-df.vercel.app/",
        tecnologies: [
            {
                tecnologieIcon: IconBrandHtml5,
                tecnologieText: "HTML"
            },
            {
                tecnologieIcon: IconBrandCss3,
                tecnologieText: "CSS"
            }
        ]
    },
    {
        img: bunyTask,
        title: "Maquina de Todos",
        repositoriUrl: "https://github.com/bunyCode/BunyTask",
        viewUrl: "https://buny-task-df.vercel.app/",
        tecnologies: [
            {
                tecnologieIcon: IconBrandReact,
                tecnologieText: "React"
            },
            {
                tecnologieIcon: IconBrandCss3,
                tecnologieText: "CSS"
            }
        ]
    }
];

export { proyects }