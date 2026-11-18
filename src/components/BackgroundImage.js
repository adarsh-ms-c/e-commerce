export default function BackgroundImage({ src, alt, className = '', style }) {
  return (
    <div
      role="img"
      aria-label={alt}
      data-alt={alt}
      className={`w-full h-full bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url('${src}')`, ...style }}
    />
  );
}
