using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers;

    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly AppDbContext _context;
        public StudentController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Student>> getStudent()
        {
            var students = await _context.Students.AsNoTracking().ToListAsync();
            return students;
        }

        [HttpPost]

        public async Task<IActionResult> Create(Student student)
        {
            if(!ModelState.IsValid)
            {
                return NotFound(ModelState);
            }
            await _context.AddAsync(student);

                var result = await _context.SaveChangesAsync();

                if(result > 0)
                {
                    return Ok("Student Created Successfully");
                }
                
                return NotFound("Student Not Created");
            
        }
        //Delete delete
        [HttpDelete("{id:int}")]

        public async Task<ActionResult> Delete(int id)
        {
           var student = await _context.Students.FindAsync(id);
           if(student == null)
           {
                return NotFound("Student Not Found");
           }

           _context.Remove(student);

           var result = await _context.SaveChangesAsync();

           if (result > 0) 
           {
            return Ok("Student deleted successfully");
           }
           return BadRequest("Unable to delete student");
        }
        //Get a single student by ID

        [HttpGet("{id:int}")]

        public async Task<ActionResult<Student>> GetStudent(int id)
        {
            var Student = await _context.Students.FindAsync(id);
            if(Student == null)
            {
                return NotFound("Student Not Found");
            }
            return Ok("student");
        }

        //Update PUT
        [HttpPut("{id:int}")]

        public async Task<IActionResult> EditStudent(int id, Student student)
        // Find the student by ID
        {
            var studentFromDb = await _context.Students.FindAsync(id);

            if (studentFromDb == null)
            {
                return BadRequest("Student Not Found");
            }
            studentFromDb.Name = student.Name;
            studentFromDb.Email = student.Email;
            studentFromDb.Address = student.Address;
            studentFromDb.PhoneNumber = student.PhoneNumber;

            var result = await _context.SaveChangesAsync();

            if (result > 0)
            {
                return Ok("Student updated");
            }
                return BadRequest("Unable to update student");
        }
    }

