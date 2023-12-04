class ThemeService {
    changeTheme(isDark){
        let theme = isDark ?  'dark' : 'light';
        if (isDark) {
            document.body.classList.add(theme);
            document.documentElement.setAttribute('data-color-mode', 'dark')
        } else {
            document.body.classList.remove('dark');
            document.documentElement.setAttribute('data-color-mode', 'light')
        }
        localStorage.setItem('theme', theme);
        return theme;
    }
}
export default new ThemeService();