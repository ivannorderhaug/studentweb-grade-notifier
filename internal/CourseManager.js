const fs = require('node:fs');


class CourseManager {
    static courseCodes = [];    

    static readCache() {
        try {
            const data = fs.readFileSync('cache.txt', 'utf8') 
            this.courseCodes = data.split('\n').slice(0,-1)
        } catch {
            fs.writeFileSync('cache.txt','')
            return
        }

        console.log('Watching:')
        for (let code of this.courseCodes) {
            console.log(code)
        }
    }

    static writeToCache(code) {
        fs.appendFileSync('cache.txt', code+'\n')
    }

    static rewriteCache() {
        let data = ''
        for (let course of this.courseCodes) {
            data += course + '\n'
        }
        fs.writeFileSync('cache.txt', data)
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
  
