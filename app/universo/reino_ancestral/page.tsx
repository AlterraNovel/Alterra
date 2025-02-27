export default function Universo() {
    return (
        <>
            <div className="dark:bg-black">
                <div className="container -mt-20 flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-white">Reino Ancestral</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-white text-justify">O Reino Ancestral de Alterra era governado pela Voz Una, um ser divino que equilibrava as forças da Criação e da Destruição. Seus habitantes viviam em um império avançado, onde engenharia e magia coexistiam. A sociedade era organizada por castas, não por prestígio, mas por ofício, e todos deviam respeito ao equilíbrio cósmico. Com a queda da Voz Una, guerras devastaram a terra e o conhecimento perdido mergulhou o mundo no caos.</p>
                    <div className="flex mb-10 flex-wrap justify-center">
                        <a target="_blank" href="/historias/reino_ancestral_conto" type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 hover:bg-slate-700">Contos</a>
                        <a target="_blank" href="/historias/reino_ancestral_audio" type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 hover:bg-slate-700">Áudios</a>
                        <a target="_blank" href="https://drive.google.com/drive/u/0/folders/1u6jftVGp1mjNLYcb_B-twcy5vN89zOYb" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-white hover:bg-gray-800">Explorar mais</a>
                    </div>
                    <div className="flex justify-center mb-10">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Povos</th>
                                        <th scope="col" className="px-6 py-3">Regime</th>
                                        <th scope="col" className="px-6 py-3">Ambiente Geral</th>
                                        <th scope="col" className="px-6 py-3">Nível de Tecnologia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Humanos</th>
                                        <td className="px-6 py-4">Organização por castas, governados pela Voz Una</td>
                                        <td className="px-6 py-4">Cidades monumentais e templos dourados</td>
                                        <td className="px-6 py-4">Altamente avançado</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Criaturas místicas</th>
                                        <td className="px-6 py-4">Criadas pelo poder da Voz Una</td>
                                        <td className="px-6 py-4">Ligadas ao equilíbrio do mundo</td>
                                        <td className="px-6 py-4">Variável</td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Animais comuns</th>
                                        <td className="px-6 py-4">Domesticados ou selvagens</td>
                                        <td className="px-6 py-4">Habitavam regiões naturais</td>
                                        <td className="px-6 py-4">Baixo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <img className="mx-auto rounded-t-lg" src="/assets/images/reino_ancestral.png" alt="" />
                </div>
            </div>
        </>
    );
}
