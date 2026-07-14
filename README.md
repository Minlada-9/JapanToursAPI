# 🗾 Japan Tours API

ระบบเว็บไซต์จองทัวร์ญี่ปุ่น (Japan Tours) พร้อม Backend API ที่เชื่อมต่อกับฐานข้อมูล MongoDB สำหรับจัดการข้อมูลทัวร์และรายการจองของลูกค้า

🔗 Demo: [https://minlada-9.github.io/JapanToursAPI/](https://minlada-9.github.io/JapanToursAPI/)

---

## ✨ ฟีเจอร์หลัก

- แสดงรายการทัวร์ญี่ปุ่นยอดนิยม พร้อมราคาและจำนวนที่นั่งคงเหลือแบบเรียลไทม์
- ฟอร์มจองทัวร์ พร้อมกรอกข้อมูลผู้จอง (ชื่อ, เบอร์โทร, อีเมล, จำนวนคน, วันที่, หมายเหตุ)
- แสดงรายการ "การจองของฉัน" ในรูปแบบตั๋ว (ticket style)
- เชื่อมต่อฐานข้อมูล MongoDB ผ่าน Mongoose เพื่อบันทึกข้อมูลทัวร์และการจอง

---

## 🛠️ เทคโนโลยีที่ใช้

**Backend**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/) — Web framework
- [Mongoose](https://mongoosejs.com/) — MongoDB ODM
- [dotenv](https://www.npmjs.com/package/dotenv) — จัดการ environment variables
- [cors](https://www.npmjs.com/package/cors) — เปิดให้ frontend เรียก API ข้าม origin ได้
- [nodemon](https://www.npmjs.com/package/nodemon) — auto-restart server ระหว่างพัฒนา (dev dependency)

**Frontend**
- HTML, CSS, JavaScript (Vanilla JS) — เรียกใช้งาน API ด้วย `fetch`

**Database**
- MongoDB

---

## 📁 โครงสร้างโปรเจกต์

```
japan-tours-mongo/
├── index.html          # หน้าเว็บฝั่ง frontend
├── server.js           # จุดเริ่มต้นของแอป เชื่อมต่อ DB และเปิด server
├── src/
│   ├── app.js           # ตั้งค่า Express app, middleware และ routes
│   └── config/
│       └── db.js        # การเชื่อมต่อ MongoDB ผ่าน Mongoose
├── .env                 # ตัวแปรแวดล้อม (ไม่ commit ขึ้น repo)
├── package.json
└── README.md
```

---

## ⚙️ การติดตั้ง (Installation)

### 1. Clone โปรเจกต์

```bash
git clone https://github.com/minlada-9/JapanToursAPI.git
cd JapanToursAPI
```

### 2. ติดตั้ง dependencies

```bash
npm install
```

### 3. ตั้งค่า Environment Variables

สร้างไฟล์ `.env` ที่ root ของโปรเจกต์ แล้วกำหนดค่าดังนี้

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
```

> แก้ `MONGO_URI` ให้เป็น connection string ของ MongoDB ที่ใช้จริง (เช่น MongoDB Atlas หรือ MongoDB ที่รันในเครื่อง)

### 4. รันเซิร์ฟเวอร์

```bash
npm start
```

หรือถ้าต้องการให้ server auto-restart เวลาแก้โค้ดระหว่างพัฒนา ให้ใช้:

```bash
npm run dev
```

เมื่อรันสำเร็จ จะเห็นข้อความ:

```
🚀 Server running at http://localhost:3000
```

### 5. เปิดใช้งานหน้าเว็บ

เปิดไฟล์ `index.html` ด้วยเบราว์เซอร์ (หรือใช้ Live Server) โดยหน้าเว็บจะเรียก API จาก `http://localhost:3000` โดยอัตโนมัติ

> ⚠️ ต้องรันฝั่ง backend (`npm start`) ให้เสร็จก่อนเปิดหน้าเว็บ ไม่เช่นนั้นรายการทัวร์และการจองจะโหลดไม่ขึ้น

---

## 📡 API Endpoints

| Method | Endpoint         | คำอธิบาย                          |
|--------|------------------|-----------------------------------|
| GET    | `/api/tours`     | ดึงรายการทัวร์ทั้งหมด              |
| GET    | `/api/bookings`  | ดึงรายการการจองทั้งหมด             |
| POST   | `/api/bookings`  | สร้างรายการจองใหม่                 |

**ตัวอย่าง Body สำหรับ `POST /api/bookings`:**

```json
{
  "tour": "<tourId>",
  "name": "สมชาย ใจดี",
  "email": "somchai@example.com",
  "phone": "0812345678",
  "qty": 2,
  "dateBooked": "2026-08-15",
  "note": "ต้องการที่นั่งติดกัน"
}
```

---

## 📌 หมายเหตุ

- โปรเจกต์นี้ต้องการให้ backend (`npm start`) รันอยู่ตลอดเวลาที่ใช้งานหน้าเว็บ เนื่องจากข้อมูลทัวร์และการจองทั้งหมดดึงมาจาก API แบบเรียลไทม์
- หากเชื่อมต่อ MongoDB ไม่สำเร็จ ระบบจะแสดง error และปิดการทำงานของ server ทันที

---

## 📄 License

MIT License
