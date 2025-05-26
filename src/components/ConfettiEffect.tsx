import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function ConfettiEffect() {
  useEffect(() => {
    const duration = 2 * 1000; // total run time in ms
    const end = Date.now() + duration;

    // fire every 250ms until time’s up
    const interval = setInterval(() => {
      const timeLeft = end - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      // count down particles as time goes on
      const particleCount = Math.floor(200 * (timeLeft / duration));

      // left side burst
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 120,
        origin: { x: 0, y: Math.random() * 0.6 + 0.2 },
      });

      // right side burst
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 120,
        origin: { x: 1, y: Math.random() * 0.6 + 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return null;
}


// // components/EmojiConfetti.jsx
// import { useEffect } from 'react';

// export default function ConfettiEffect({
//   emojis = ['🎉', '🔧🚗', '🚀💚'],
//   count  = 100,
//   size   = [16, 32],    // min/max font-size in px
//   speed  = [2000, 4000] // min/max fall duration in ms
// }) {
//   useEffect(() => {
//     const container = document.createElement('div');
//     Object.assign(container.style, {
//       position: 'fixed',
//       top:      0,
//       left:     0,
//       width:    '100%',
//       height:   0,
//       overflow: 'visible',
//       pointerEvents: 'none',
//       zIndex: 9999
//     });
//     document.body.appendChild(container);

//     const keyframes = `
//       @keyframes emojiFall {
//         to { transform: translateY(110vh) rotateZ(360deg); }
//       }
//     `;
//     const styleTag = document.createElement('style');
//     styleTag.innerHTML = keyframes;
//     document.head.appendChild(styleTag);

//     for (let i = 0; i < count; i++) {
//       const el = document.createElement('div');
//       const em = emojis[Math.floor(Math.random() * emojis.length)];
//       const sz = Math.random() * (size[1] - size[0]) + size[0];
//       const dur = Math.random() * (speed[1] - speed[0]) + speed[0];

//       el.textContent = em;
//       Object.assign(el.style, {
//         position:    'absolute',
//         top:         '-2rem',
//         left:        `${Math.random() * 100}%`,
//         fontSize:    `${sz}px`,
//         opacity:     Math.random().toFixed(2),
//         animation:   `emojiFall ${dur}ms linear`,
//       });

//       container.appendChild(el);
//       // remove after animation ends
//       el.addEventListener('animationend', () => el.remove());
//     }

//     return () => {
//       document.body.removeChild(container);
//       document.head.removeChild(styleTag);
//     };
//   }, [emojis, count, size, speed]);

//   return null;
// }