module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'styles/application.css' : 'sass/application.scss'
				}
			}
		},
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'styles',
		      src: ['*.css', '!*.min.css'],
		      dest: 'styles',
		      ext: '.min.css'
		    }]
		  }
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'cssmin']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('generate',['sass', 'cssmin']);
	grunt.registerTask('default',['watch']);
}
