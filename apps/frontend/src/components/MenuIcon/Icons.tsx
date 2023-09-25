import { IconDeviceMobile, IconMail, IconMapPin } from "@tabler/icons-react"


const Icons: React.FC = () => {
    return (
        <>
            <div className="flex flex-col justify-center md:flex-row pb-9 ">
                <ul className="flex mt-12 gap-x-28 font-mono flex-col md:flex-row">
                    <li className="grid justify-items-center md:pt-0">
                        <IconMapPin className="text-primary" />
                        <h1 className="">Colombia, Santa Marta, Mamatoco </h1>
                    </li>
                    <li className="grid justify-items-center pt-4 md:pt-0">
                        <IconDeviceMobile className="text-primary" />
                        <h1>(+57) 3117652898</h1>
                    </li>
                    <li className="grid justify-items-center pt-4 md:pt-0">
                        <IconMail className="text-primary" />
                        <h1>leonardoiglesias@teletubie.com</h1>
                    </li>
                </ul>
            </div>


        </>
    )
}

export default Icons