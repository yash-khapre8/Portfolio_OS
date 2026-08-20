import React, { useEffect, useRef } from "react";

function TechBackground() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		let animationFrameId;

		let width = (canvas.width = window.innerWidth);
		let height = (canvas.height = window.innerHeight);

		const handleResize = () => {
			if (!canvas) return;
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
			initParticles();
		};

		window.addEventListener("resize", handleResize);

		// Particle system
		const numParticles = Math.min(Math.floor((width * height) / 15000), 75);
		let particles = [];

		const mouse = { x: null, y: null, radius: 150 };

		const handleMouseMove = (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};

		window.addEventListener("mousemove", handleMouseMove);

		class Particle {
			constructor() {
				this.x = Math.random() * width;
				this.y = Math.random() * height;
				this.vx = (Math.random() - 0.5) * 0.6;
				this.vy = (Math.random() - 0.5) * 0.6;
				this.radius = Math.random() * 2 + 1;
				this.baseAlpha = Math.random() * 0.5 + 0.3;
				this.color =
					Math.random() > 0.4
						? "#00f2fe"
						: Math.random() > 0.5
						? "#4facfe"
						: "#7f00ff";
			}

			update() {
				this.x += this.vx;
				this.y += this.vy;

				if (this.x < 0) this.x = width;
				if (this.x > width) this.x = 0;
				if (this.y < 0) this.y = height;
				if (this.y > height) this.y = 0;

				// Mouse interaction
				if (mouse.x && mouse.y) {
					const dx = mouse.x - this.x;
					const dy = mouse.y - this.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < mouse.radius) {
						const force = (mouse.radius - dist) / mouse.radius;
						this.x -= (dx / dist) * force * 2;
						this.y -= (dy / dist) * force * 2;
					}
				}
			}

			draw() {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				ctx.fillStyle = this.color;
				ctx.shadowBlur = 8;
				ctx.shadowColor = this.color;
				ctx.globalAlpha = this.baseAlpha;
				ctx.fill();
				ctx.shadowBlur = 0;
			}
		}

		function initParticles() {
			particles = [];
			for (let i = 0; i < numParticles; i++) {
				particles.push(new Particle());
			}
		}

		initParticles();

		const render = () => {
			ctx.clearRect(0, 0, width, height);

			// Draw dark gradient background
			const grad = ctx.createLinearGradient(0, 0, width, height);
			grad.addColorStop(0, "#080d1a");
			grad.addColorStop(0.5, "#0b1329");
			grad.addColorStop(1, "#050814");
			ctx.fillStyle = grad;
			ctx.globalAlpha = 1;
			ctx.fillRect(0, 0, width, height);

			// Draw subtle tech grid
			ctx.strokeStyle = "rgba(0, 242, 254, 0.04)";
			ctx.lineWidth = 1;
			const gridSize = 45;

			for (let x = 0; x < width; x += gridSize) {
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, height);
				ctx.stroke();
			}

			for (let y = 0; y < height; y += gridSize) {
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(width, y);
				ctx.stroke();
			}

			// Update & draw particles and connecting lines
			for (let i = 0; i < particles.length; i++) {
				particles[i].update();
				particles[i].draw();

				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);

					if (dist < 130) {
						ctx.beginPath();
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.strokeStyle = "#00f2fe";
						ctx.globalAlpha = (1 - dist / 130) * 0.25;
						ctx.lineWidth = 0.8;
						ctx.stroke();
					}
				}
			}

			animationFrameId = requestAnimationFrame(render);
		};

		render();

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("mousemove", handleMouseMove);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				zIndex: 0,
				pointerEvents: "none",
			}}
		/>
	);
}

export default TechBackground;
