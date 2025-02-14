import { MetaFunction } from "@remix-run/react";
import mtc from "/images/mentorchain.png";
import dtc from "/images/donatechain.png";
import ntk from "/images/notaker.png";
import Tech from "~/components/Tech";
import Icon from "~/components/Icon";
import Tag from "~/components/Tag";


export const meta: MetaFunction = () => {
    return [
        { title: "David Charlie | Projects" },
        { name: "description", content: "A few of the projects I built" },
        {
            name: "keywords",
            content: "devcharlie, davidcharlie, davidcharlie381, projects, blockchain, web3, typescript, solidity, react, remix, ethereum, hardhat, tailwind css"
        }
    ];
};

export default function Projects() {

    return (
        <main className="pt-16">
            <h1 className="text-2xl font-semibold text-zinc-700">projects</h1>
            <p className="mt-8 tracking-wide leading-7 text-[17px] text-zinc-600">
                some of the random creative projects I built either for
                fun, learning purposes, or curiosity.
            </p>
            <section className="mt-10 grid md:grid-cols-2 gap-8">
                <div className="hover:shadow-md group duration-300 border-zinc-300 border-[0.1px] rounded-xl overflow-hidden">
                    <div className="h-content overflow-hidden"><img src={mtc} alt="mentorchain screenshot" className="group-hover:scale-120 duration-300" /></div>
                    <div className="p-4 ">
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold text-zinc-700 mb-2">mentorchain</h3>
                            <div className="flex justify-between gap-4">
                                <a href="#" className="text-zinc-500 hover:text-zinc-700 duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
                                        <path d="M15 3h6v6" /><path d="M10 14 21 3" />
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    </svg>
                                </a>
                                <a href="#" className="text-zinc-500 hover:text-zinc-700 duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p className="text-base text-zinc-600 leading-7 tracking-[0.02em]">mentorchain connects blockchain experts and makes new users
                            exploring blockcain grow their skills through secure,
                            transparent and accountable mentorship relationships.</p>
                        <div className="mt-4 flex gap-2 flex-wrap">
                            <Tech icon="react" />
                            <Tech icon="solidity" />
                            <Tech icon="typescript" />
                            <Tech icon="tailwind" />
                        </div>
                    </div>
                </div>
                <div className="hover:shadow-md group duration-300 border-zinc-300 border-[0.1px] rounded-xl overflow-hidden">
                    <div className="h-content overflow-hidden"><img src={ntk} alt="notaker screenshot" className="group-hover:scale-120 duration-300" /></div>
                    <div className="p-4 ">
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold text-zinc-700 mb-2 ">notaker</h3>
                            <div className="flex justify-between gap-4">
                                <a href="#" className="text-zinc-500 hover:text-zinc-700 duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
                                        <path d="M15 3h6v6" /><path d="M10 14 21 3" />
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    </svg>
                                </a>
                                <a href="#" className="text-zinc-500 hover:text-zinc-700 duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p className="text-base text-zinc-600 leading-7 tracking-[0.02em]">
                            with notaker, users earn NTK tokens when they publish contents
                            on the platform. NTK tokens allow users to create, like, comment,
                            and follow one another.
                            </p>
                        <div className="mt-4 flex gap-2 flex-wrap">
                            <Tech icon="react" />
                            <Tech icon="solidity" />
                            <Tech icon="typescript" />
                            <Tech icon="tailwind" />
                        </div>
                    </div>
                </div>
                <div className="hover:shadow-md group duration-300 border-zinc-300 border-[0.1px] rounded-xl overflow-hidden">
                    <div className="h-content overflow-hidden"><img src={dtc} alt="donorchain screenshot" className="group-hover:scale-120 duration-300" /></div>
                    <div className="p-4 ">
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold text-zinc-700 mb-2">donorchain</h3>
                            <div className="flex justify-between gap-4">
                                <a href="#" className="text-zinc-500 hover:text-zinc-700 duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
                                        <path d="M15 3h6v6" /><path d="M10 14 21 3" />
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    </svg>
                                </a>
                                <a href="#" className="text-zinc-500 hover:text-zinc-700 duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p className="text-base text-zinc-600 leading-7 tracking-[0.02em]">
                            a platform for accountable and transparent donations, where 
                            users can start a donation for a verifiable cause and others can 
                            contribute till the target or deadline is reached.
                            </p>
                        <div className="mt-4 flex gap-2 flex-wrap">
                            <Tech icon="react" />
                            <Tech icon="solidity" />
                            <Tech icon="typescript" />
                            <Tech icon="tailwind" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

