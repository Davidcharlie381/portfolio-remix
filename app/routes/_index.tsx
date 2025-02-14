import type { MetaFunction } from "@remix-run/node";
import Tech from "~/components/Tech";
import me from "/images/me.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "David Charlie" },
    { name: "description", content: "A full-stack blockchain developer and web3 enthusiast" },
    {
      name: "keywords",
      content: "devcharlie, davidcharlie, davidcharlie381, blog, projects, enthusiast, blockchain, web3, typescript, solidity, react, remix, ethereum, hardhat, tailwind css"
    }
  ];
};

export default function Index() {
  return (
    <main className="pt-16">
      <div className="h-[350px] w-[350px] border-[0.1px] relative border-zinc-300 overflow-hidden grid place-content-center md:mx-auto mb-10 rounded-md">
        {/* <Image
          src={me}
          alt="Me"
          placeholder="blur-sm"
          className="rounded-[4px] h-[330px] w-[330px] blur-md hover:blur-none transition-all duration-300"
        /> */}
        <img src={me} alt="me blur jpeg"
          className="rounded-[4px] h-[330px] w-[330px] blur-md hover:blur-none transition-all duration-300"
        />
      </div>

      <h1 className="text-[26px] font-semibold text-zinc-700">
        hey, I'm charles ✌🏽
      </h1>
      <p className="mt-8 tracking-wide leading-7 text-[17px] text-zinc-600">
        A passionate and creative full-stack web3 developer and blockchain enthusiast
        dedicated to building decentralized applications that redefine how we
        interact with digital assets. I specialize in Solidity, React, TypeScript, and
        smart contract development, to create secure and efficient on-chain solutions.
      </p>
      <p className="mt-5 tracking-wide leading-7 text-[17px] text-zinc-600">
        I excel in crafting intuitive and aesthetic user experiences for both web and mobile, and scalable backend solutions,
        ensuring seamless performance across platforms.
      </p>
      <p className="mt-5 tracking-wide leading-7 text-[17px] text-zinc-600">
        Beyond coding, I enjoy engaging with developer communities, writing technical
        documentation, learning new tech to enhance my skills, and building tools
        that make blockchain more accessible.
      </p>
      <h2 className="mt-8 text-2xl font-semibold text-zinc-700">
        tech stack
      </h2>
      <p className="mt-5 tracking-wide leading-7 text-[17px] text-zinc-600">
        Over the years, I've grown into using a number of technologies for
        seamless development. Some of these tools I use for fun explorations,
        while the most, for building.
      </p>
      <section className="grid place-items-start grid-cols-2 md:grid-cols-4 gap-y-5 my-7">
        {Array.from([
          "react",
          "typescript",
          "tailwind",
          "solidity",
          "nodejs",
          "mongodb",
          "postgresql",
          "git",
          "graphql",
          "rn"
        ]).map((elem) => {
          return <Tech key={elem} icon={elem} />;
        })}
      </section>
      <p className="mt-5 tracking-wide leading-7 text-[17px] text-zinc-600">
        {" "}
        In my free time, I hope to use some technologies for specific purposes in the future, and
        I've also had to dabble into some technologies for educational
        purposes, making comparisons as to which does the job better, writing
        about them, and building with them.
      </p>
      <section className="grid place-items-start grid-cols-2 md:grid-cols-4 gap-y-5 mt-7">
        {Array.from([
          "rust",
          "go",
          "dart",
          "flutter"
        ]).map((elem) => {
          return <Tech key={elem} icon={elem} />;
        })}
      </section>
    </main>
  );
}
