import { Card, Link, Input, Divider, CardBody } from "@nextui-org/react"
import logo from '../img/icono00.png'
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandGithub,
    IconBrandYoutube,
    IconCopyright
} from "@tabler/icons-react";

export default function Footer() {
    return (
        <>
            <div>
                <Card className=" p-3 gap-3 w-100% h-[15rem] bg-primary mt-[3rem]  animate-flip-up animate-once">
                    <CardBody className="w-full p-0">

                    <div className="flex-row flex" >
                        <h1 className="font-bold mt-[1rem] text-2xl ml-[1rem]">Teletubie</h1>
                        <img className="max-w-[6.5rem] max-h-[6.5rem] mt-[-1.5rem] ml-0" src={logo} alt="" />
                        <div className="ml-[20rem] mt-[1rem]">
                            <h1 className="w-[10rem] font-bold text-lg">Enlaces Rapidos</h1>
                            <ul>
                                <li className="cursor-pointer mt-[0.5rem]">
                                    <Link className="text-black text-sm">Acerca de</Link>
                                </li>
                                <li className="cursor-pointer mt-[0.5em]">
                                    <Link className="text-black text-sm">Contacto</Link>
                                </li>
                                <li className="cursor-pointer mt-[0.5em]">
                                    <Link className="text-black text-sm">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="ml-[10rem] mt-[1rem]">
                            <h1 className="font-bold text-lg  ">Boletin Informativo</h1>
                            <p className="mt-[1rem] text-sm">
                                Suscríbete a nuestro boletín para recibir nuestras últimas noticias actualizadas
                            </p>
                            <div className="mt-[1rem]">
                                <Input
                                    isClearable
                                    type="email"
                                    label="Email"
                                    variant="bordered"
                                    placeholder="Enter your email"
                                    defaultValue="example@gmail.com"
                                    onClear={() => console.log("input cleared")}
                                    className="max-w-xs"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[-6rem]">
                        <p className="ml-[1rem] text-sm ">
                            Start up de arriendo de distintos inmoviliarios en los que se encuentran:<br /> casas, cabaña, departamentos,  hoteles, etc.<br />
                            los cuales cuentan con calificacion hasta 5⭐️
                        </p>
                    </div>
                    <div className="flex-row flex ml-[1rem] mt-[1rem]">
                        <IconBrandFacebook className=" cursor-pointer mr-[1rem]" />
                        |
                        <IconBrandInstagram className=" cursor-pointer mr-[1rem] ml-[1rem]" />
                        |
                        <IconBrandTwitter className=" cursor-pointer mr-[1rem] ml-[1rem]" />
                        |
                        <IconBrandGithub className=" cursor-pointer mr-[1rem] ml-[1rem]" />
                        |
                        <IconBrandYoutube className=" cursor-pointer mr-[1rem] ml-[1rem]" />
                    </div>
                    </CardBody>
                    <Divider className="max-h-1.5"/>
                    <h1 className="flex-row flex text-xs mt-0 text-center justify-center">
                        <IconCopyright className="w-4 h-4 mr-1"/>
                        Copyright 2023 .Teletubie. All Right Reserved.
                    </h1>
                </Card>
            </div>
        </>
    );
}