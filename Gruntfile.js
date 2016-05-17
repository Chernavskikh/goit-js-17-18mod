module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
           dist: {
                 src: [
                    'js/libs/*.js', // Все JS в папке libs
                        ],
                dest: 'js/build/production.js',
                }
        },

        uglify: {
             build: {
                 src: 'js/build/production.js',
                 dest: 'js/build/production.min.js'
                }
        },

 cssmin: {
             target: {
              files: [{
               expand: true,
                cwd: 'css/libs/',
                src: ['*.css', '!*.min.css'],
                dest: 'css/build/',
                ext: '.min.css'
                }]
             }      
            }


    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    
    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify','cssmin']);

};