type BrutalHeadingProps = {
    top: string;
    bottom: string;
};

export default function BrutalHeading({ top, bottom }: BrutalHeadingProps) {
    return (
        <div className="leading-none">
            {/* TOP LINE (solid) */}
            <div className="relative inline-block whitespace-nowrap">
                <span className="font-extrabold text-text">
                    {top}
                </span>
            </div>
            <br />
            {/* BOTTOM LINE (brutal split) */}
            <div className="relative inline-block whitespace-nowrap mt-2">
                {/* Solid left */}
                <span
                    className="absolute top-0 left-0 font-extrabold text-text overflow-hidden"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                >
                    {bottom}
                </span>

                {/* Outline right */}
                <span
                    className="font-extrabold text-transparent
                     [-webkit-text-stroke:2px_var(--text)]"
                    style={{ clipPath: "inset(0 0 0 50%)" }}
                >
                    {bottom}
                </span>
            </div>
        </div>
    );
}
