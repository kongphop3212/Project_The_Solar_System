"use client";
import Link from "next/link";
import Image from "next/image"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import TheSolarSystem from "../public/TheSolarSystem.jpg"
import Mercury2 from "../public/Mercury2.jpg"

export default function MercuryInfo() {

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
            {/* ปกของดาวพุธ */}
            <h1 className="flex items-center justify-center gap-2 md:gap-8 pt-5 text-xl font-bold">Mercury / ดาวพุธ</h1>
            <div className='justify-center gap-2 flex px-4 pt-5'>
                <div className='w-full h-full justify-center gap-2 flex px-4 pt-1'>
                    <Image src={Mercury2} placeholder="blur" width={700} height={500}/>
                </div>
            </div>
            {/* เนื้อหาของดาวพุธ */}
            <div className="container mx-auto items-center px-6 py-2 pt-4 h-24">
                <h1>
                    ดาวพุธ (Mercury) เป็นดาวเคราะห์ที่อยู่ใกล้ดวงอาทิตย์มากที่สุด และเป็นดาวเคราะห์ที่เล็กที่สุดในระบบสุริยะ ใช้เวลาโคจรรอบดวงอาทิตย์ 87.969 วัน ดาวพุธมักปรากฏใกล้ หรืออยู่ภายใต้แสงจ้าของดวงอาทิตย์ทำให้สังเกตเห็นได้ยากที่สุด
                </h1>
                <h1 className="font-bold pt-5">
                    นี่คือข้อมูลสำคัญเกี่ยวกับดาวพุธ
                </h1>
                <div className="pt-5">
                    <h1 className="font-bold">1. ขนาดและมวล</h1>
                    <h1>• ดาวพุธมีขนาดเล็กกว่าโลก มวลเท่าโดยเฉลี่ยเพียงร้อยละ 10% และมีเส้นรอบโครงสร้างเฉลี่ยประมาณ 6,779 กิโลเมตร ระยะห่างจากดาวพุธถึงดวงอาทิตย์เป็นประมาณ 225 ล้าน กิโลเมตร โดยเฉลี่ย</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">2. ผิว</h1>
                    <h1>• ดาวพุธมีผิวที่แปลกประหลาด มีลักษณะเป็นที่ราบและเทือกเขาต่างหาก มีลักษณะที่คล้ายกับแปดเดือนที่มีลุ่มบุคคลลภายในดาวพุธ</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">3. บรรยากาศ</h1>
                    <h1>• ดาวพุธไม่มีบรรยากาศในระบบสุริยะเหมือนโลก บรรยากาศบางส่วนของดาวพุธประกอบด้วยก๊าซคาร์บอนไดออกไซด์ ซึ่งเป็นก๊าซเจือจางที่ไม่เพียงพอเพื่อสนับสนุนชีวิต</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">4. อุณหภูมิ</h1>
                    <h1>•  ดาวพุธมีอุณหภูมิที่หลายช่วงตั้งแต่ร้อยละ -195°C (-320°F) ในคืนสู่ร้อยละ 35°C (95°F) ในช่วงสู่ โดยอุณหภูมิเฉลี่ยบนดาวพุธประมาณร้อยละ -80°C (-112°F)</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">5. ริมฝั่งแม่น้ำและแหล่งน้ำ</h1>
                    <h1>• มีหลายศูนย์ประสงค์ในการค้นหาน้ำบนดาวพุธ ทั้งการค้นพบสายฝนแห่งไหลบนผิวดาวพุธและข้อมูลที่ชัดเจนเกี่ยวกับแหล่งน้ำในปฏิกูลภูเขาและแม่น้ำอายิง ซึ่งเป็นเครื่องที่บ่งชี้ว่าน้ำอาจมีการอุดมสมบูรณ์ได้บนดาวพุธในอดีต</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">6. การศึกษา</h1>
                    <h1>• ดาวพุธเป็นเป้าหมายที่น่าสนใจในการศึกษาดาราศาสตร์ และมีการส่งยานอวกาศไปสำรวจดาวพุธ เช่น ยานอวกาศไวกิ้ง (Viking) และยานอวกาศคีริโอสิตี (Curiosity) ซึ่งได้สำรวจและส่งข้อมูลของดาวพุธกลับมาบนโลก. ยานอวกาศปรึกษาสำหรับการอนาคตจะสำรวจดาวพุธในแลดูโดยอาจจะมีการอยู่บนดาวพุธในอนาคต</h1>
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