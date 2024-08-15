"use client";
import Link from "next/link";
import Image from "next/image"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import TheSolarSystem from "../public/TheSolarSystem.jpg"
import Saturn2 from "../public/Saturn2.jpg"

export default function SaturnInfo() {

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
            {/* ปกของดาวเสาร์ */}
            <h1 className="flex items-center justify-center gap-2 md:gap-8 pt-5 text-xl font-bold">Saturn / ดาวเสาร์</h1>
            <div className='justify-center gap-2 flex px-4 pt-5'>
                <div className='w-full h-full justify-center gap-2 flex px-4 pt-1'>
                    <Image src={Saturn2} placeholder="blur" width={700} height={500}/>
                </div>
            </div>
            {/* เนื้อหาของดาวเสาร์ */}
            <div className="container mx-auto items-center px-6 py-2 pt-4 h-24">
                <h1>
                    ดาวเสาร์ (Saturn) เป็นดาวเคราะห์ดวงที่ 6 จากดวงอาทิตย์ ถัดจากดาวพฤหัสบดี เป็นดาวเคราะห์ที่มีขนาดใหญ่เป็นอันดับ 2 ของระบบสุริยะ รองจาก ดาวพฤหัสบดี ดาวเสาร์เป็นดาวแก๊สยักษ์ที่มีรัศมีเฉลี่ยมากกว่าโลกประมาณเก้าเท่า แม้ว่าจะมีความหนาแน่นเป็นหนึ่งในแปดของโลก แต่มวลของมันมีมากกว่าโลกถึง 95 เท่า
                </h1>
                <h1 className="font-bold pt-5">
                    ข้อมูลสำคัญเกี่ยวกับดาวเสาร์
                </h1>
                <div className="pt-5">
                    <h1 className="font-bold">1. ขนาดและส่วนประกอบ</h1>
                    <h1>• ดาวเสาร์มีขนาดใหญ่เท่ากับโลก และมวลมากมายเป็นอย่างมาก มวลของดาวเสาร์ประมาณ 0.815 เท่าของมวลโลก ดาวเสาร์มีโครงสร้างคล้ายกับโลกแต่มีพื้นผิวที่ปกคลุมด้วยเมฆหนาที่ทำให้มันมีอายุสั้นลง</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">2. พื้นผิว</h1>
                    <h1>• ดาวเสาร์มีพื้นผิวที่เรียบและนิดเดียวที่ไม่มีเมฆดาวเสาร์คือดวงจันทรที่มีสีทอง มิติที่โด่งที่สุดของมันคือการสว่างที่สูงของเมฆควันก็บไว้ สิ่งนี้ส่งผลให้ดาวเสาร์มีอักษรยอดสูงที่เกิดขึ้นจากอักษรที่เปลี่ยนแปลงขึ้นทั้งระยะ</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">3. ความร้อน</h1>
                    <h1>• ดาวเสาร์เป็นดาวความร้อนที่มีอุณหภูมิที่สูงมาก ความร้อนสุดยอดเกิดจากสภาพพลังงานกระเพราะกาลวัจนการบีบอัดและความร้อนสูงที่เกิดขึ้นจากปริมาณกาลวัจนมากที่สุดของเมืองในชั้นบรรยากาศ</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">4. การใช้พลังงาน</h1>
                    <h1>• ดาวเสาร์มีระบบการหมุนช้าที่สร้างความร้อนมากที่พิสูจน์การกล่ำกลืนสายรุ้งแรงที่สูงจากดาวอังคาร ดาวเสาร์กล้ำกลืนสายรุ้งแรงเป็นที่มาของพลังงานและความร้อนมาจากโลก</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">5. อนุกรมชีวิต</h1>
                    <h1>• ดาวเสาร์ไม่มีบรรยากาศหรือน้ำเหมือนโลก ดังนั้นหากมีชีวิตอาศัยอยู่บนดาวเสาร์จะต้องเรียนรู้ที่จะอาศัยอยู่ในสภาพอดิศรค่อนข้างนอกเหนือจากสภาพสำหรับมนุษย์</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">6. การศึกษาดาวเสาร์</h1>
                    <h1>• ดาวเสาร์เป็นแหล่งการศึกษาที่สำคัญในดาราศาสตร์ เครื่องยานอวกาศของ NASA เช่น มาร์เสียน ซัฟเฟอร์ เช็คเดส และวีนัส ได้ถูกส่งไปศึกษาดาวเสาร์ เพื่อเรียนรู้เพิ่มเติมเกี่ยวกับสภาพพลังงานร้อน มหากาลวัจน และอักษรยอดสูงของดาวเสาร์</h1>
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