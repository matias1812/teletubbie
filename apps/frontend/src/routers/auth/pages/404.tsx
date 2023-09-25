import logo from '../../../img/404.png'
export function Error404() {
    return (
        <>
            <section>
                <h1 className='font-bold text-4xl text-center mt-[2rem]'>
                    Error 404 
                    <span className='text-primary ml-1'>
                        no se puedo 
                        <br/>
                        encontar esta pagina
                    </span>
                </h1>
                <div className="w-full flex justify-center items-center ">
                    <div className="flex flex-row text-[15rem] font-bold text-primary">
                        4
                        <div className="relative">
                            <img src={logo} alt="Description" className="w-[30rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                            <span>0</span>
                        </div>
                        4
                    </div>
                </div>
            </section>
        </>
    )
}