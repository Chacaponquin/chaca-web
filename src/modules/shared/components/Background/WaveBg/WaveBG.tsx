const WaveBG = () => {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      version="1.1"
      className="w-full object-cover esm:translate-y-0 md:translate-y-10 lg:translate-y-24"
    >
      <defs>
        <linearGradient gradientTransform="rotate(30)" id="waveGradient">
          <stop offset="45%" stopColor="#b645db"></stop>
          <stop offset="99%" stopColor="#590ce8"></stop>
        </linearGradient>
      </defs>

      <path
        d="M0 349L13.7 367.3C27.3 385.7 54.7 422.3 82 443.7C109.3 465 136.7 471 163.8 463C191 455 218 433 245.2 413.3C272.3 393.7 299.7 376.3 327 392.5C354.3 408.7 381.7 458.3 409 462.8C436.3 467.3 463.7 426.7 491 418.7C518.3 410.7 545.7 435.3 573 426.7C600.3 418 627.7 376 654.8 360.5C682 345 709 356 736.2 384.3C763.3 412.7 790.7 458.3 818 463.3C845.3 468.3 872.7 432.7 886.3 414.8L900 397L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z"
        fill="url(#waveGradient)"
        strokeLinecap="round"
        strokeLinejoin="miter"
      ></path>
    </svg>
  )
}

export default WaveBG
