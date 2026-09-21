function Card({
    children,
    className = '',
    hover = true,
}) {
    return (
        <div
            className={`
        rounded-2xl
        border
        border-[#1E293B]
        bg-[#0F172A]
        p-6
        transition-all
        duration-300
        ${hover
                    ? 'hover:-translate-y-1 hover:border-[#2563EB] hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]'
                    : ''
                }
        ${className}
      `}
        >
            {children}
        </div>
    )
}

export default Card