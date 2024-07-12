class MouseMovement {
    constructor() {
        this.mouseMoveListener = (event) => this.onMouseMove(event);
        this.mouseClickListener = () => this.onMouseClick();
        this.circle = null;
        this.isTicking = false;
    }

    init() {
        document.addEventListener('mousemove', this.mouseMoveListener);
        document.addEventListener('click', this.mouseClickListener);
        this.circle = document.getElementById('circle');
    }

    destroy() {
        document.removeEventListener('mousemove', this.mouseMoveListener);
        document.removeEventListener('click', this.mouseClickListener);
    }

    onMouseMove(event) {
        if (!this.isTicking) {
            window.requestAnimationFrame(() => {
                const container = document.getElementById('container');
                if (container) {
                    const x = event.clientX / window.innerWidth;
                    const y = event.clientY / window.innerHeight;
                    const moveAmount = 40;

                    container.style.transform = `translate(${(x - 0.5) * moveAmount}px, ${(y - 0.5) * moveAmount}px)`;
                }

                if (this.circle) {
                    const circleX = event.clientX - this.circle.offsetWidth / 2;
                    const circleY = event.clientY - this.circle.offsetHeight / 2;

                    this.circle.style.transform = `translate(${circleX}px, ${circleY}px)`;
                }

                this.isTicking = false;
            });

            this.isTicking = true;
        }
    }

    onMouseClick() {
        if (this.circle) {
            this.circle.style.width = '20px';
            this.circle.style.height = '20px';
            setTimeout(() => {
                this.circle.style.width = '40px';
                this.circle.style.height = '40px';
            }, 200);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const mouseMovement = new MouseMovement();
    mouseMovement.init();
});




document.addEventListener('DOMContentLoaded', () => {

    const logoBox = document.querySelector('.box.logo');
    logoBox.classList.add('animate-logo');

    const imageBox = document.querySelector('.box.image');
    imageBox.classList.add('animate-image');
});