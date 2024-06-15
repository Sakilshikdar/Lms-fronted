function TeacherLogout() {
    localStorage.removeItem('teacherLogin');
    localStorage.removeItem('teacher_id');
    window.location.href = '/teacher-login';
}
export default TeacherLogout;