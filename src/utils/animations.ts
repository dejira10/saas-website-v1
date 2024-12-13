// Common animation keyframes and styles
export const animations = {
  float: {
    keyframes: `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
    `,
    className: 'animate-float'
  },
  dash: {
    keyframes: `
      @keyframes dash {
        to {
          stroke-dashoffset: -40;
        }
      }
    `,
    className: 'animate-dash'
  }
};