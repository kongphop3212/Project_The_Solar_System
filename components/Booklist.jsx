import Image from "next/image"
import Link from "next/link"
import TheSolarSystem from "../public/TheSolarSystem.jpg"
import TheSun1 from "../public/TheSun1.jpg"
import Mercury1 from "../public/Mercury1.jpg"
import Venus1 from "../public/Venus1.jpg"
import Earth1 from "../public/Earth1.jpg"
import Mars1 from "../public/Mars1.jpg"
import Jupiter1 from "../public/Jupiter1.jpg"
import Saturn1 from "../public/Saturn1.jpg"
import Uranus1 from "../public/Uranus1.jpg"
import Neptune1 from "../public/Neptune1.jpg"

export default function Booklist() {
    return (
    <div>
        {/* ปกเว็บไซต์ */}
        <div className='max-w-[1980px] h-[600px] w-full justify-center gap-2 flex px-4 pt-5'>
            <div className='w-full h-full justify-center gap-2 flex px-4 pt-5'>
                <Image src={TheSolarSystem} placeholder="blur" />
            </div>
        </div>

        <div className="justify-center gap-2 flex px-4 pt-5">
            {/* ดวงอาทิตย์ */}
            <div className="px-4 border border-gray-200 rounded-xl max-w-[250px]">
                <Link href="/login">
                    <Image src={TheSun1} placeholder="blur" width={300} height={240} />
                    <h2 className="font-medium">Sun</h2>
                </Link>
            </div>
            {/* ดาวพุธ */}
            <div className="px-4 border border-gray-200 rounded-xl max-w-[250px]">
                <Link href="/login">
                    <Image src={Mercury1} placeholder="blur" width={300} height={240} />
                    <h2 className="font-medium">Mercury</h2>
                </Link>
            </div>
            {/* ดาวศุกร์ */}
            <div className="px-4 border border-gray-200 rounded-xl max-w-[250px]">
                <Link href="/login">
                    <Image src={Venus1} placeholder="blur" width={300} height={240} />
                    <h2 className="font-medium">Venus</h2>
                </Link>
            </div>
            {/* โลก */}
            <div className="px-4 border border-gray-200 rounded-xl max-w-[250px]">
                <Link href="/login">
                    <Image src={Earth1} placeholder="blur" width={300} height={240} />
                    <h2 className="font-medium">Earth</h2>
                </Link>
            </div>
            {/* ดาวอังคาร */}
            <div className="px-4 border border-gray-200 rounded-xl max-w-[250px]">
                <Link href="/login">
                    <Image src={Mars1} placeholder="blur" width={300} height={240} />
                    <h2 className="font-medium">Mars</h2>
                </Link>
            </div>
        </div>
        <div className="justify-center gap-2 flex px-4 pt-5">
            {/* ดาวพฤหัสบดี */}
            <div className="px-4 border border-gray-200 rounded-xl max-w-[250px]">
                <Link href="/login">
                    <Image src={Jupiter1} placeholder="blur" width={300} height={240} />
                    <h2 className="font-medium">Jupiter</h2>
                </Link>
            </div>
            {/* ดาวเสาร์ */}
            <div className="px-4 border border-gray-200 rounded-xl max-w-[250px]">
                <Link href="/login">
                    <Image src={Saturn1} placeholder="blur" width={300} height={240} />
                    <h2 className="font-medium">Saturn</h2>
                </Link>
            </div>
            {/* ดาวยูเรนัส */}
            <div className="px-4 border border-gray-200 rounded-xl max-w-[250px]">
                <Link href="/login">
                    <Image src={Uranus1} placeholder="blur" width={300} height={240} />
                    <h2 className="font-medium">Uranus</h2>
                </Link>
            </div>
            {/* ดาวเนปจูน */}
            <div className="px-4 border border-gray-200 rounded-xl max-w-[250px]">
                <Link href="/login">
                    <Image src={Neptune1} placeholder="blur" width={300} height={240} />
                    <h2 className="font-medium">Neptune</h2>
                </Link>
            </div>
        </div>
    </div>
    )
}