class CourseManager {
    static courseCodes = [];
  
    static addCourse(code) {
      // Check if the code is not already in the array
      if (!this.courseCodes.includes(code)) {
        this.courseCodes.push(code);
        return true;
      }
      return false;
    }
  
    static removeCourse(code) {
      // Remove the code if it exists in the array
      const index = this.courseCodes.indexOf(code);
      if (index !== -1) {
        this.courseCodes.splice(index, 1);
        return true;
      }
      return false;
    }
  
    static getAllCourses() {
      // Return all course codes as a joined string
      return this.courseCodes.join(', ');
    }
  }
  
  module.exports = CourseManager;
  