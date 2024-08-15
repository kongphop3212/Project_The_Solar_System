"use client";
import Link from "next/link";
import Image from "next/image"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import TheSolarSystem from "../public/TheSolarSystem.jpg"
import Mars2 from "../public/Mars2.jpg"

export default function MarInfo() {

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
            {/* ปกของดาวอังคาร */}
            <h1 className="flex items-center justify-center gap-2 md:gap-8 pt-5 text-xl font-bold">Mars / ดาวอังคาร</h1>
            <div className='justify-center gap-2 flex px-4 pt-5'>
                <div className='w-full h-full justify-center gap-2 flex px-4 pt-1'>
                    <Image src={Mars2} placeholder="blur" width={700} height={500}/>
                </div>
            </div>
            {/* เนื้อหาของดาวอังคาร */}
            <div className="container mx-auto items-center px-6 py-2 pt-4 h-24">
                <h1>
                    ดาวอังคาร (Mars) ป็นดาวเคราะห์ลำดับที่สี่จากดวงอาทิตย์ เป็นดาวเคราะห์เล็กที่สุดอันดับที่สองในระบบสุริยะรองจากดาวพุธ ในภาษาอังกฤษได้ชื่อตามเทพเจ้าแห่งสงครามของโรมัน มักได้รับขนานนาม "ดาวแดง" เพราะมีออกไซด์ของเหล็กดาษดื่นบนพื้นผิวทำให้มีสีออกแดง ดาวอังคารเป็นดาวเคราะห์หินที่มีบรรยากาศเบาบาง มีลักษณะพื้นผิวคล้ายคลึงกับทั้งหลุมอุกกาบาตบนดวงจันทร์ และภูเขาไฟ หุบเขา ทะเลทราย ตลอดจนพิดน้ำแข็งขั้วดาวที่ปรากฏบนโลก คาบการหมุนรอบตัวเองและวัฏจักรฤดูกาลของดาวอังคารก็มีความคล้ายคลึงกับโลกซึ่งความเอียงก่อให้เกิดฤดูกาลต่าง ๆ ดาวอังคารเป็นที่ตั้งของโอลิมปัสมอนส์ ภูเขาไฟใหญ่ที่สุดบนดาวอังคารและสูงสุดอันดับสองในระบบสุริยะเท่าที่มีการค้นพบ และเป็นที่ตั้งของเวลส์มาริเนริส แคนยอนขนาดใหญ่อันดับต้น ๆ ในระบบสุริยะ
                </h1>
                <h1 className="font-bold pt-5">
                    นี่คือข้อมูลสำคัญเกี่ยวกับดาวอังคาร
                </h1>
                <div className="pt-5">
                    <h1 className="font-bold">1. ขนาดและระยะห่าง</h1>
                    <h1>• ดาวอังคารมีเส้นรอบโครงสร้างประมาณ 3,474 กิโลเมตร, ซึ่งทำให้มันเล็กกว่าโลกมาก ดาวอังคารตั้งอยู่ในระยะห่างประมาณ 384,400 กิโลเมตรจากโลก</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">2. การหมุน</h1>
                    <h1>• ดาวอังคารหมุนรอบตัวเองในระยะเวลาเท่ากับรอบโลก เพียงรอบเดียว เนื่องจากมันเห็นด้านเดียวของโลกเท่านั้น ดาวอังคารมีอีกฝ่ายหนึ่งที่ไม่สามารถมองเห็นจากโลก</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">3. การปรากฏสี</h1>
                    <h1>• ดาวอังคารไม่มีแสงเอง แต่มันส่องแสงจากดวงอาทิตย์ การปรากฏสีของดาวอังคารเป็นเพชรเงิน คือสีขาวและแวววางสวยงาม</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">4. การศึกษาและการสำรวจ</h1>
                    <h1>• ดาวอังคารเป็นเป้าหมายที่น่าสนใจในการส่องกล้องอวกาศและการศึกษาดาวจำนวนมากเพื่อให้ความรู้เกี่ยวกับต้นตำรับของโลกและปรากฏการณ์ดวงจันทร เช่น ขุมุม, ทะเลดาวจันทร, และปลายหอนของดาวจันทร</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">5. ทะเลและเทือกเขา</h1>
                    <h1>• ดาวอังคารไม่มีอะไรเลยที่คล้ายกับโลก แต่มีพื้นที่ที่แห่งการปรากฏของเทือกเขาและเขื่อนที่มีแรงดันต่ำของก๊าซแรงดันต่ำแขวงแข็งดิน สมุนไพรที่ถูกปลูกขึ้นในชายหาดโดยผู้ที่เดินทางมาจากโลกเป็นตัวอย่างของการเพาะปลูกสำเร็จแรงดันต่ำในดาวจันทร์</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">6. ตัวดาวอังคาร</h1>
                    <h1>• ดาวอังคารไม่มีบรรยากาศ, น้ำ, หรืออะตอมธาตุของแก๊สที่มีชีวิตได้ มันเป็นสถานที่ที่ร้อยละ 100 ไม่มีอากาศและน้ำ</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">7. การกระทำคราฟต์แบ่งการเดินทาง</h1>
                    <h1>• นี่เป็นข้อมูลสำคัญเกี่ยวกับดาวอังคาร และมีความสำคัญในด้านวิทยาศาสตร์และอวกาศด้านการดำเนินงานว่าดาวอังคารเป็นสถานที่ร้อยละ 100 ของเหลือของแท้งให้แก๊สไฮดรเจน จะนำมาไว้ในนี้ เป็นดาวเคราะห์เคราะห์ที่เราอาศัยได้ดีในการแยกประเภทที่เราค้นพบในระบบสุริยะ</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">8. ร่องของดาวอังคาร</h1>
                    <h1>• มีร่องต่าง ๆ บนพื้นผิวดาวอังคารที่กล่าวกัน เหมือนคลื่นน้ำคราฟต์เข็นทิ้งให้แหลมสูง และมีขอบกระทะมุ่งทั่ว</h1>
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