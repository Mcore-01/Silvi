function SvgIcon({ src, className }){
  return (
    <div className={`inline-block shrink-0 ${className}`}
        style={{
          WebkitMaskImage: `url(${src})`,
          maskImage: `url(${src})`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
    >
    </div>
  )
}

export default SvgIcon