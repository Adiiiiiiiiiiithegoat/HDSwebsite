// Reuses the CA page's `.btn` / `.btn-quiet` classes verbatim (src/styles.css)
// so every page shares one button system. New file — src/sections/*.jsx on
// the CA page keep applying those classes directly and are untouched.
export default function Button({
  as: Component,
  href,
  variant = 'primary',
  arrow = true,
  className = '',
  children,
  ...rest
}) {
  const classes = [variant === 'quiet' ? 'btn-quiet' : 'btn', className].filter(Boolean).join(' ')
  const Tag = Component || (href ? 'a' : 'button')

  return (
    <Tag className={classes} href={href} {...rest}>
      {children}
      {variant !== 'quiet' && arrow ? (
        <span className="arrow" aria-hidden="true">
          &rarr;
        </span>
      ) : null}
    </Tag>
  )
}
