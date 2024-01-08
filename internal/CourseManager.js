const fs = require('node:fs');
const path = require('path');

class CourseManager {
    static courseCodes = [];    

    static readCache() {
      try {
          const filePath = path.resolve(__dirname, 'cache.txt');
          const data = fs.readFileSync(filePath, 'utf8');
          this.courseCodes = data.split('\n').slice(0, -1);
      } catch (error) {
          // if cache file doesn't exist, create it
          if (error.code === 'ENOENT') {
              console.log(`[${new Date().toLocaleString()}] Cache file not found. Creating new cache file...`);
              fs.writeFileSync(path.resolve(__dirname, 'cache.txt'), '');
          } else {
              console.error(`Error reading cache: ${error.message}`);
          }
      }
    } 

  static writeToCache(code) {
      try {
          const filePath = path.resolve(__dirname, 'cache.txt');
          fs.appendFileSync(filePath, code + '\n');
      } catch (error) {
          console.error(`Error writing to cache: ${error.message}`);
      }
    }

  static rewriteCache() {
      const filePath = path.resolve(__dirname, 'cache.txt');
      try {
          const data = this.courseCodes.join('\n') + '\n';
          fs.writeFileSync(filePath, data);
      } catch (error) {
          console.error(`Error rewriting cache: ${error.message}`);
      }
    }

    static addCourse(code) {
      // Check if the code is not already in the array
      if (!this.courseCodes.includes(code)) {
        this.courseCodes.push(code);
        this.writeToCache(code);
        return true;
      }
      return false;
    }
  
    static removeCourse(code) {
      // Remove the code if it exists in the array
      const index = this.courseCodes.indexOf(code);
      if (index !== -1) {
        this.courseCodes.splice(index, 1);
        this.rewriteCache()
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
  
