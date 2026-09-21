function SectionTitle({
    title,
    subtitle,
    align = 'center',
}) {
    const alignment =
        align === 'left'
            ? 'text-left items-start'
            : 'text-center items-center'

    return (
        <div className={`flex flex-col ${alignment} mb-12`}>
            {/* Main Section Title — Poppins 40-44px Desktop / 30-34px Mobile, 700 */}
            <h2 className="font-['Poppins'] text-[32px] md:text-[44px] font-bold leading-tight text-[#F8FAFC]">
                {title}
            </h2>


            {/* Optional Description — Inter 16-18px Desktop / 15-16px Mobile, 400 */}
            {subtitle && (
                <p className="mt-4 max-w-2xl font-['Inter'] text-[15px] md:text-[17px] font-normal leading-relaxed text-[#94A3B8]">
                    {subtitle}
                </p>
            )}
        </div>
    )
}

export default SectionTitle