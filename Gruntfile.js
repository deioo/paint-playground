module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'dist/styles/application.css' : 'sass/application.scss'
				}
			}
		},

		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'dist/styles',
		      src: ['*.css', '!*.min.css'],
		      dest: 'dist/styles',
		      ext: '.min.css'
		    }]
		  }
		},

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'cssmin']
			}
		},

	  'gh-pages': {
	    options: {
	      base: 'dist'
	    },
	    src: ['**']
	  }
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.registerTask('generate',['sass', 'cssmin']);
	grunt.registerTask('default',['watch']);
}
