export default function Icon({ icon }: { icon: string }) {
    if (icon === "twitter") {
        return (
            <a href="https://x.com/davidcharlie_" target="_blank" rel="noopener noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 128 128"
                >
                    <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" />
                </svg>
            </a>
        );
    } else if (icon === "linkedin") {
        return (
            <a href="https://www.linkedin.com/in/charles-david-787aa5224" target="_blank" rel="noopener noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 1024 1024"
                >
                    <path
                        fill="currentColor"
                        d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3m0 736c-447.8-.1-671.7-.2-671.7-.3c.1-447.8.2-671.7.3-671.7c447.8.1 671.7.2 671.7.3c-.1 447.8-.2 671.7-.3 671.7M230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8m252.3 245.1c0-49.8 9.5-98 71.2-98c60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9c-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6z"
                    />
                </svg>
            </a>
        );
    } else if (icon === "github") {
        return (
            <a href="https://github.com/davidcharlie381" target="_blank" rel="noopener noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
                        <g fill="#fff">
                            <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
                            <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
                        </g>
                    </mask>
                    <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    >
                        <path
                            strokeDasharray="30"
                            strokeDashoffset="30"
                            d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
                        >
                            <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                dur="0.6s"
                                values="30;0"
                            />
                        </path>
                        <path strokeDasharray="10" strokeDashoffset="10" d="M9 19">
                            <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="0.7s"
                                dur="0.2s"
                                values="10;0"
                            />
                            <animate
                                attributeName="d"
                                dur="3s"
                                repeatCount="indefinite"
                                values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                            />
                        </path>
                    </g>
                    <rect
                        width="8"
                        height="4"
                        x="8"
                        y="11"
                        fill="currentColor"
                        mask="url(#lineMdGithubLoop0)"
                    >
                        <animate
                            attributeName="y"
                            dur="10s"
                            keyTimes="0;0.45;0.46;0.54;0.55;1"
                            repeatCount="indefinite"
                            values="11;11;7;7;11;11"
                        />
                    </rect>
                </svg>
            </a>
        );
    }
}
