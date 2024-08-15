"use client";
import Link from "next/link";
import Image from "next/image"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import TheSolarSystem from "../public/TheSolarSystem.jpg"
import Jupiter2 from "../public/Jupiter2.jpg"

export default function JupiterInfo() {

    const { data: session } = useSession();

    return (
    <div>
        <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
            <Link href="/dashboard">
            <h1 className="font-bold">The Solar System</h1>
            </Link>
            <div className="grow">
            <div className="flex items-center justify-center gap-2 md:gap-8">
                <div>  </div>
            </div>
            </div>
            <div>
            <button
            onClick={() => signOut()}
            className="mr-2 font-bold"
            >
            Sign Out
            </button>
            </div>
        </div>
        <div>
            {/* ปกเว็บไซต์ */}
            <div className='max-w-[1980px] h-[600px] w-full justify-center gap-2 flex px-4 pt-5'>
                <div className='w-full h-full justify-center gap-2 flex px-4 pt-1'>
                    <Image src={TheSolarSystem} placeholder="blur" />
                </div>
            </div>
            {/* ปกของดาวพฤหัสบดี */}
            <h1 className="flex items-center justify-center gap-2 md:gap-8 pt-5 text-xl font-bold">Jupiter / ดาวพฤหัสบดี</h1>
            <div className='justify-center gap-2 flex px-4 pt-5'>
                <div className='w-full h-full justify-center gap-2 flex px-4 pt-1'>
                    <Image src={Jupiter2} placeholder="blur" width={700} height={500}/>
                </div>
            </div>
            {/* เนื้อหาของดาวพฤหัสบดี */}
            <div className="container mx-auto items-center px-6 py-2 pt-4 h-24">
                <h1>
                    ดาวพฤหัสบดี (Jupiter) เป็นดาวเคราะห์ที่อยู่ห่างจากดวงอาทิตย์เป็นลำดับที่ 5 ใหญ่ที่สุดในระบบสุริยะ นอกจากดาวพฤหัสบดี ดาวเคราะห์แก๊สดวงอื่นๆ ในระบบสุริยะได้แก่ ดาวเสาร์ ดาวยูเรนัส และดาวเนปจูน ชื่อละตินของดาวพฤหัสบดี (Jupiter) มาจากเทพเจ้าโรมัน สัญลักษณ์แทนดาวพฤหัสบดี
                </h1>
                <h1 className="pt-5">
                    นี่คือข้อมูลสำคัญเกี่ยวกับดาวพฤหัสบดี
                </h1>
                <div className="pt-5">
                    <h1 className="font-bold">1. ขนาดและตำแหน่ง</h1>
                    <h1>• ดาวพฤหัสบดีเป็นดวงเคราะห์ขนาดใหญ่มาก ซึ่งขนาดใหญ่ที่สุดในระบบสุริยะ มวลของดาวพฤหัสบดีเท่ากับประมาณ 318 เท่าของมวลโลก</h1>
                    <h1>• ดาวพฤหัสบดีตั้งอยู่ห่างจากดวงอาทิตย์ไปประมาณ 778 ล้าน กิโลเมตร หรือประมาณ 484 ล้าน ไมล์</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">2. โครงสร้าง</h1>
                    <h1>• ดาวพฤหัสบดีเป็นลูกบอลแก๊สที่มีแก๊สหลายประเภท ด้านบนมีชั้นบรรยากาศหนาที่คุมโดยมธาตุหนาแน่นเหมือนโลหะ จากหลายพันกิโลเมตรของไฮโดรเจนและฮีเลียม</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">3. การปรากฏสี</h1>
                    <h1>• ดาวพฤหัสบดีส่องแสงสว่างเนื่องจากการสะท้อนแสงจากดวงอาทิตย์ การปรากฏสีของดาวพฤหัสบดีเป็นสีขาวที่สว่างแจ่มและที่อื่น ๆ รวมถึงรางวัลแดงที่เกิดจากกากคราฟต์</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">4. การเคลื่อนที่</h1>
                    <h1>• ดาวพฤหัสบดีหมุนรอบตัวเองเร็วมาก มีรอบการหมุนเร็วที่สุดในระบบสุริยะ</h1>
                    <h1>• ดาวพฤหัสบดีมีดาวจรจัดลอดรอบโลกมากมาย เป็นดาวจรที่ยิ่งใหญ่ที่สุดในระบบสุริยะ ซึ่งเรียกว่าแบบคริซิคิอาส</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">5. ดวงจักรวาลและดวงดาวย่อย</h1>
                    <h1>• ดาวพฤหัสบดีมีดวงดาวย่อยหลายดวง รวมถึงกัมมาและอีโอปิส ซึ่งเป็นดาวดีซำสมดุลที่มีการหมุนอยู่ใกล้ๆ ดาวพฤหัสบดี</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">6. การศึกษาและการสำรวจ</h1>
                    <h1>• การศึกษาดาวพฤหัสบดีได้รับการศึกษาจากดาวดีซำสมดุลเช่น เจบาส และมังมุส รวมทั้งมีการส่งการสำรวจดาวพฤหัสบดีเช่น มิชชันิเซา และจูโน ในยุคสมัยล่าสุด</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">7. ความสำคัญของดาวพฤหัสบดี</h1>
                    <h1>• ดาวพฤหัสบดีเป็นสิ่งมีความสำคัญในการศึกษาระบบสุริยะเนื่องจากมีข้อมูลมากที่สุดเกี่ยวกับประวัติศาสตร์และสภาพแวดล้อมที่มีของระบบสุริยะ</h1>
                    <h1>• ดาวพฤหัสบดีมีบทบาทสำคัญในการป้องกันดาวโลกจากระบบสุริยะ</h1>
                </div>
                <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
                    <div className="grow">
                    <div className="flex items-center justify-center gap-2 md:gap-8">
                    <h1 className="font-bold">Kongphop Tadee 64345031-2</h1>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}