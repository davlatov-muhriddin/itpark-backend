import { Router } from "express";
import Courses from "../models/Course.js";
const router = Router();

// get all courses

router.get("/", async (req, res) => {
  try {
    const courses = await Courses.find({});

    if (!courses) {
      res.json({ message: "kurslar topilmadi" });
      return;
    }

    res.status(200).json({
      message: "barcha kurslar olindi",
      courses,
    });
  } catch (error) {
    console.log(error);
  }
});

// get single course

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Courses.findById(id);

    if (!course) {
      res.json({ message: "kurs topilmadi" });
      return;
    }

    res.status(200).json({
      message: "bitta kurs olindi",
      course,
    });
  } catch (error) {
    console.log(error);
  }
});

// create course

router.post("/", async (req, res) => {
  try {
    const { image, title, description, price } = req.body;

    if (!image || !title || !description || !price) {
      res.json({
        message: "iltimos barcha bo'limlarni to'ldiring",
      });
      return;
    }

    const course = await Courses.create({ image, title, description, price });

    if (!course) {
      res.json({ message: "kurs yaratilmadi" });
      return;
    }

    res.status(201).json({
      message: "success",
      course,
    });
  } catch (error) {
    console.log(error);
  }
});

// update course

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedCourse = await Courses.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedCourse) {
      res.json({ message: "kurs yangilanmadi" });
      return;
    }

    res.status(200).json({
      message: "kurs yangilandi",
      course: updatedCourse,
    });
  } catch (error) {
    console.log(error);
  }
});

// delete course

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Courses.findByIdAndDelete(id);
    res.status(200).json({
      message: "kurs muvofaqiyatli o'chirildi",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
