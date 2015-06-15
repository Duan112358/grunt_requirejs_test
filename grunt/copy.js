module.exports = {
    files:{
        expand: true,
        src: ['js/**', 'css/**'],
        dest: 'dist/',
        filter: 'isFile'
    }
}
