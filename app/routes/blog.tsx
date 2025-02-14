import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "David Charlie | Blog" },
        { name: "description", content: "Mind rambling contents I scribble down once in a while" },
        {
            name: "keywords",
            content: "devcharlie, davidcharlie, davidcharlie381, blog, blockchain, web3, typescript, solidity, react, remix, ethereum, hardhat, tailwind css"
        }
    ];
};

export default function Blog() {

    return (
        <main className="pt-16">
            <h1 className="text-2xl font-semibold text-zinc-700">blog</h1>
            <p className="mt-8 tracking-wide leading-7 text-[17px] text-zinc-600">
                here you'll find the window into my train of thoughts, what I'm
                currently exploring, and sometimes, maybe what's going on in my life.
            </p>
            <section className="mt-10">
                <p className="text-lg font-medium text-zinc-700 italic">
                    Coming soon...
                </p>
            </section>
        </main>
    );
}