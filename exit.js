// Show "Leave Site?" Dialog Box

window.addEventListener("beforeunload", (event) => {
  // no weird goguardian with dis
  event.returnValue = true;
});
        const navbar = document.querySelector('.navbar');
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        const overlay = document.querySelector('.overlay');
        let isMenuOpen = false;

        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Toggle mobile menu
        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            mobileNavToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        }

        mobileNavToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) toggleMenu();
        });

        // Prevent scroll when menu is open
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                toggleMenu();
            }
        });
//the stuff below has nothing to do with exiting the page
        //(runscript() {
        //    var l = document.querySelector("link[rel*='icon']") || document.createElement('link');
        //    l.type = 'image/x-icon';
        //    l.rel = 'shortcut icon';
        //    l.href = 'https://google.com/favicon.ico';
        //    document.getElementsByTagName('head')[0].appendChild(l);
        //    document.title = 'Google';
        //})();
        // i will fix that sometime this week