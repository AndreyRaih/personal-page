import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

interface StarProps {
    x: number;
    y: number;
    length: number;
    opacity: number;
}

class Star {
    x: number;
    y: number;
    length: number;
    opacity: number;
    factor: number = 1;
    increment: number;

    constructor({ x, y, length, opacity }: StarProps) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.opacity = opacity;
        this.increment = Math.random() * .03;
    }

    draw(context: CanvasRenderingContext2D) {
        context.rotate((Math.PI * 1 / 10));
        context.save();
        context.translate(this.x, this.y);
        if (this.opacity > 1) {
            this.factor = -1;
        } else if (this.opacity <= 0) {
            this.factor = 1;
        }
        this.opacity += this.increment * this.factor;
        context.beginPath()
        for (let i = 5; i--;) {
            context.lineTo(0, this.length);
            context.translate(0, this.length);
            context.rotate((Math.PI * 2 / 10));
            context.lineTo(0, -this.length);
            context.translate(0, -this.length);
            context.rotate(-(Math.PI * 6 / 10));
        }
        context.lineTo(0, this.length);
        context.closePath();
        context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
        context.shadowBlur = 5;
        context.shadowColor = '#fff';
        context.fill();
        context.restore();
    }
}

type StarAnimationProps = {
    class?: string;
    numStars: number;
    fps: number;
    height: number;
    width: number;
}

export default component$((props: StarAnimationProps) => {
    const canvas = useSignal<HTMLCanvasElement>();

    useVisibleTask$(({ cleanup }) => {
        let stars: Star[] = [];
        let animateInterval: any;
        canvas.value!.setAttribute('height', props.height.toString());
        canvas.value!.setAttribute('width', props.width.toString());
        const context = canvas.value!.getContext('2d') as CanvasRenderingContext2D;
        for (let i = 0; i < props.numStars; i++) {
            let x = Math.round(Math.random() * props.width);
            let y = Math.round(Math.random() * props.height);
            let length = 1 + Math.random() * 1.5;
            let opacity = Math.random();
            let star = new Star({ x, y, length, opacity });
            stars.push(star);
        }
        animateInterval = setInterval(() => {
            context.clearRect(0, 0, props.width, props.height);
            stars.forEach(star => star.draw(context));
        }, 1000 / props.fps);
        cleanup(() => { clearInterval(animateInterval) })
    })

    return (
        <div class={props.class}>
            <canvas ref={canvas} />
        </div>
    );
});
