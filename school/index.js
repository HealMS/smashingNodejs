var classs = require('./class');

exports.add = function (classes) {
    classes.forEach(function (item, index) {
        var _class = item;
        var teacherName = item.teacherName;
        var students = item.students;

        classs.add(teacherName, students);
    })
};