module.exports = {
  mode: 'jit',
  separator: '_',
  content: ['./public/**/*.{html,js}', './pages/**/*.{html,js}'],
  safelist: [
    'flex',
    'flex-col',
    'fixed',
    'top-0',
    'left-0',
    'h-screen',
    'w-12',
    'w-16',
    'w-24',
    'w-28',
    'w-32',
    'w-40',
    'w-44',
    'w-48',
    'w-52',
    'w-auto',
    'm-0',
    'bg-gray-900',
    'bg-gray-800',
    'bg-gray-700',
    'bg-gray-600',
    'bg-gray-500',
    'bg-gray-400',
    'bg-gray-300',
    'bg-gray-200',
    'bg-gray-100',
    'text-white',
    'shadow-lg',
    'shadow-md',
    'relative',
    'items-center',
    'justify-center',
    'h-12',
    'mt-4',
    'mt-2',
    'mt-1',
    'mb-2',
    'mx-auto',
    'shadow-lg',
    'bg-gray-800',
    'text-green-500',
    'hover_bg-green-600',
    'ml-2',
    'ml-4',
    'mr-2',
    'rounded-3xl',
    'rounded-xl',
    'rounded-md',
    'hover_rounded-xl',
    'transition-all',
    'duration-300',
    'ease-linear',
    'cursor-pointer',
    'hover_text-white',
    'absolute',
    'p-2',
    'm-2',
    'min-w-max',
    'left-14',
    'shadow-md',
    'text-xs',
    'text-lg',
    'text-base',
    'text-sm',
    'font-bold',
    'duration-100',
    'scale-0',
    'origin-left',
    'group',
    'group-hover_scale-100',
    'hover_bg-emerald-600',
    'pl-4',
    'inset-x-auto',
    'px-4',
    'px-16',
    'container',
    'h-10',
    'pl-2',
    'p-2',
    'hover_bg-gray-600',
    'hover_shadow-lg',
    'hover_text-white',
    'text-gray-500',
    'flex-1',
    'max-w-md',
    'max-w-lg',
    'bg-white',
    'overflow-hidden',
    'md_max-w-2xl',
    'md_flex',
    'md_shrink-0',
    'w-full',
    'p-8',
    'uppercase',
    'tracking-wide',
    'text-indigo-500',
    'font-semibold',
    'block',
    'leading-tight',
    'font-medium',
    'text-black',
    'hover_underline',
    'text-slate-500',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [],
};
