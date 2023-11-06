package com.timewise.formation.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
@RestController
@RequestMapping("students")
public class StudentController {

    @GetMapping
    public List<Student> getAllStudents() {
        return List.of(
                new Student(UUID.randomUUID(),
                        "ZONGO",
                        "Andre Sekou",
                        "aszongo@gmail.com",
                        Student.Gender.MALE),
                new Student(UUID.randomUUID(),
                        "DABRE",
                        "Contin",
                        "contin@gmail.com",
                        Student.Gender.MALE),
                new Student(UUID.randomUUID(),
                        "SANOU",
                        "Steve",
                        "stevesanou@gmail.com",
                        Student.Gender.MALE)
        );
    }

}
