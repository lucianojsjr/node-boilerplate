const gulp = require('gulp');
const eslint = require('gulp-eslint');
const watch = require('gulp-watch');
const colors = require('colors');
const lintFiles = [];

// [START] - ESLINT REALTIME
lintFiles.push('app.js');

watch(lintFiles, function(file) {
	let prefix;
	let message;
	let hour = new Date();
	let fileName = file.path.split('/');
	let totalErrors = 0;

	fileName = fileName[fileName.length - 1];

	hour = hour.toISOString();
	hour = hour.split('T')[1];
	hour = hour.split('.')[0];

	prefix = `[${hour} - ${fileName} ] -`;

	gulp.src([file.path]).pipe(eslint()).pipe(eslint.results(function(results) {
		totalErrors = results.errorCount + results.warningCount;

		if (!totalErrors) {
			message = 'Perfect format!';
			console.log(`${colors.gray(prefix)} ${colors.green(message)}`);
			return;
		}

		if (!results || !results[0] || !results[0].messages || !results[0].messages.length) {
			return;
		}

		results[0].messages.forEach(function(message) {
			console.log(colors.gray(`${prefix} ${message.line}:${message.column}`), `- ${message.message}`);
		});

		message = `Errors: ${totalErrors}`;

		console.log(`${colors.gray(prefix)} ${colors.red(message)}`);
	}));
});
// [END] - ESLINT REALTIME

gulp.task('default');
