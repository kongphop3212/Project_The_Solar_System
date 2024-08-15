"use client";
import Link from "next/link";
import Image from "next/image"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import TheSolarSystem from "../public/TheSolarSystem.jpg"
import Venus2 from "../public/Venus2.jpg"

export default function VenusInfo() {

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
            {/* ปกของดาวศุกร์ */}
            <h1 className="flex items-center justify-center gap-2 md:gap-8 pt-5 text-xl font-bold">Venus / ดาวศุกร์</h1>
            <div className='justify-center gap-2 flex px-4 pt-5'>
                <div className='w-full h-full justify-center gap-2 flex px-4 pt-1'>
                    <Image src={Venus2} placeholder="blur" width={700} height={500}/>
                </div>
            </div>
            {/* เนื้อหาของดาวศุกร์ */}
            <div className="container mx-auto items-center px-6 py-2 pt-4 h-24">
                <h1>
                    ดาวศุกร์ (Venus) เป็นดาวเคราะห์ที่อยู่ห่างจากดวงอาทิตย์เป็นลำดับที่ 2 เมื่อมองจากโลกในตอนกลางคืน ดาวศุกร์เป็นวัตถุท้องฟ้าซึ่งสว่างรองลงมาจากดวงจันทร์ ดาวศุกร์มีวงโคจรอยู่ภายในวงโคจรของโลก ทำให้เมื่อสังเกตแล้วจะไม่ปรากฏว่าห่างจากดวงอาทิตย์มากนัก กล่าวคือ จะเห็นในตอนหัวค่ำทางทิศตะวันตก เรียกว่า "ดาวประจำเมือง" หรือเห็นในตอนเช้ามืดทางทิศตะวันออก เรียกว่า "ดาวประกายพรึก" หรือ "ดาวรุ่ง"
                </h1>
                <h1 className="font-bold pt-5">
                    นี่คือข้อมูลสำคัญเกี่ยวกับดาวศุกร์
                </h1>
                <div className="pt-5">
                    <h1 className="font-bold">1. ขนาดและระยะห่าง</h1>
                    <h1>• ดาวศุกร์มีขนาดเล็กเมื่อเปรียบเทียบกับโลก มวลมวลเท่าโดยเฉลี่ย 0.055 เท่าของโลก และมีเส้นรอบโครงสร้างโดยเฉลี่ย 4,880 กิโลเมตร โดยที่ระยะห่างเฉลี่ยจากดวงอาทิตย์ถึงดาวศุกร์คือประมาณ 57.9 ล้านกิโลเมตร</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">2. การหมุน</h1>
                    <h1>• ดาวศุกร์หมุนรอบตัวเองอย่างช้า โดยมีอัตราการหมุน 3:2 กับรอบตัวเอง ซึ่งหมายถึงมันหมุน 3 รอบรอบดวงอาทิตย์ในเวลาเท่ากับ 2 รอบรอบตัวเอง นี้ทำให้มีความแปลกประหลาดในการหมุนของดาวศุกร์</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">3. อุณหภูมิ</h1>
                    <h1>• ดาวศุกร์มีช่วงอุณหภูมิที่แปรปรวนอย่างสุดโดยมันมีอุณหภูมิสูงสุดร้อยละ 800 °F (427 °C) ในขณะที่อุณหภูมิต่ำสุดลงถึงร้อยละ -290 °F (-179 °C) ในขณะที่ไม่มีบรรยากาศเพื่อกักเก็บความร้อน</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">4. พิเศษทางดาราศาสตร์</h1>
                    <h1>• ดาวศุกร์เป็นดาวเคราะห์ที่ใกล้ดวงอาทิตย์ที่มากที่สุด ซึ่งทำให้มันเป็นหนึ่งในดาวเคราะห์ที่เห็นในทางฟ้าในช่วงเวลาขนาดที่เฉียบพลัน ดาวศุกร์จะเห็นเรียบร้อยในทางฟ้าในตอนเช้าหรือตอนเย็นตามช่วงเวลาของพวกเดือนหรือปี</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">5. ผิว</h1>
                    <h1>• ดาวศุกร์มีผิวสามารถสะท้อนแสงแดดได้ดี ทำให้มันสว่างสะอาดเมื่อมองด้วยตาเปล่า แต่มันไม่มีบรรยากาศ ทำให้มีอุณหภูมิสูงถึงร้อยละ 900 °F (427 °C) ในระหว่างวันและต่ำถึงร้อยละ -290 °F (-179 °C) ในระหว่างคืน</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">6. การศึกษา</h1>
                    <h1>• ดาวศุกร์เป็นวัตถุประสงค์ของการสำรวจทางดาราศาสตร์ มีการส่งยานอวกาศไปสำรวจดาวศุกร์ เช่น ยานอวกาศเมอร์คิวรี (Mercury) และยานอวกาศเดอร์เมน (Messenger) เพื่อศึกษาสภาพผิวและสภาพสภาพแวดล้อมบนดาวศุกร์</h1>
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