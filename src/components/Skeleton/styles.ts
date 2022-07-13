// eslint-disable-next-line import/no-anonymous-default-export
export default `

    .skeleton{
        background-image: linear-gradient(
            -90deg,
            #121212 0%,
            #262626 50%,
            #121212 100%
        )

        background-size: 400% 400%;
        animation: shimmer 1.2s ease-in-out infinite;

        @keyframes shimmer {
            0% {
                background-position: 0% 0%;

            }
            100% {
                background-position: -135% 0%
            }
        }    
    }
`;

