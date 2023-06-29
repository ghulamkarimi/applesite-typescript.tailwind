import { AiFillApple } from "react-icons/ai"

const Footer = () => {
    return (
        <div className="items-center">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col  items-center gap-8 py-10 ">

                <AiFillApple className="  text-4xl text-pink-400 font-cursive" />

                <section className="flex gap-3 justify-center pl-[10vw]">
                    <img className="w-[10vw] h[60px]" src="/image/footone.jpeg" alt="" />
                    <img className="w-[10vw] h[60px]" src="/image/foottwo.jpeg" alt="" />
                    <img className="w-[10vw] h[60px]" src="/image/footthree.jpeg" alt="" />
                    <img className="w-[10vw] h[60px]" src="/image/footfour.jpeg" alt="" />

                </section>
                <img className="w-[15vw]" src="/image/FooterApple.jpeg" alt="" />


                <div className='links flex justify-around flex-wrap gap-4 w-[100%] pt-8 leading-7'>
                    <div className="flex flex-col">
                        <p>shoping an more</p>
                        <a href="">store</a>
                        <a href="">Mac</a>
                        <a href="">ipad</a>
                        <a href="">iphone</a>
                    </div>
                    <div className="flex flex-col">
                        <p>Entertainement</p>
                        <a href="">Apple one</a>
                        <a href="">AppleTV+</a>
                        <a href="">AppleMusic</a>
                        <a href="">Apple Books</a>
                    </div>
                    <div className="flex flex-col">
                        <p>Apple Store</p>
                        <a href="">find store</a>
                        <a href="">genius bar</a>
                        <a href="">today at apple</a>
                        <a href="">financing</a>
                    </div>
                    <div className="flex flex-col">
                        <p>Apple Values</p>
                        <a href="">Accebility</a>
                        <a href="">Education</a>
                        <a href="">sustainbility</a>
                        <a href="">data potection</a>
                    </div>
                    <div className="flex flex-col">
                        <p>About Apple</p>
                        <a href="">newsroom</a>
                        <a href="">Job Offers</a>
                        <a href="">Events</a>
                        <a href="">Apple content</a>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Footer
