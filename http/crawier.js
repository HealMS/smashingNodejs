var http = require('http');
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/348';

function filterChapters(html) {
    var $ = cheerio.load(html);

    var chapters = $('.chapter');

    var courseData = [];
    chapters.each(function (item) {
        var chapter = $(this);  //<i>XXXX</i>之类
        var chapterTitle = chapter.find('strong').text().replace(/\s+/g, "");
        var video = chapter.find('.video').children('li');
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        };

        video.each(function (item) {
            chapterData.videos.push($(this).text().replace(/\s+/g, ""));
        });

        courseData.push(chapterData);
    });

    return courseData;
}

function printCourseDataInfo(courseData) {
    courseData.forEach(function (item) {
        var chapterTitle = item.chapterTitle,
            videos = item.videos;

        console.log(chapterTitle + '\b');

        videos.forEach(function (li) {
            console.log(li + '\b');
        });
    });
}

http.get(url, function (res) {
    var html = '';
    res.on('data', function (data) {
        html += data;
    });

    res.on('end', function () {
        var courseData = filterChapters(html);
        printCourseDataInfo(courseData);
    });
}).on('error', function () {
    console.log('获取课程出错!');
});
