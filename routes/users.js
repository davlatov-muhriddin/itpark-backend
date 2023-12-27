import { Router } from "express";
import Users from "../models/Users.js";

const router = Router();

// get all user

router.get("/", async (req, res) => {
  try {
    const users = await Users.find({});
    if (!users.length) {
      res.json({ message: "foydalanuvchilar mavjud emas" });
      return;
    }

    res.status(200).json({
      message: "barcha foydalanuvchilar olindi",
      users,
    });
  } catch (error) {
    console.log(error);
  }
});

// create user

router.post("/", async (req, res) => {
  try {
    const { firstname, lastname, phone, course } = req.body;

    if (!firstname || !lastname || !phone || !course) {
      res.json({ message: "iltimos barcha bo'limlarni to'ldiring" });
      return;
    }

    if (phone.length > 13 || phone.length < 13) {
      res.json({ message: "telefon raqam noto'g'ri" });
      return;
    }

    const isExist = await Users.findOne({ phone: phone });

    if (isExist) {
      res.json({ message: "siz o'quvchilar ro'yxatida borsiz" });
      return;
    }

    const newUser = await Users.create({ firstname, lastname, phone, course });

    if (!newUser) {
      res.json({ message: "foydalanuvchi yaratilmadi" });
      return;
    }

    res.status(200).json({
      message: "foydalanuvchi muvofaqqiyatli qo'shildi",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
  }
});

// delete user
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Users.findByIdAndDelete(id);
    res.status(200).json({
      message: "foydalanuvchi o'chirildi",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
