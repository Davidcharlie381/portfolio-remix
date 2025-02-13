import Icon from "./Icon";

export default function Footer() {
    return (
        <footer className="mt-20 flex justify-start items-center md:justify-center gap-5">
            <Icon icon="twitter" />
            <Icon icon="linkedin" />
            <Icon icon="github" />
            {/* <Icon /> */}

        </footer>
    )
}