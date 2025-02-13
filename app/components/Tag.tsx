export default function Tag({name}: {name: string}) {
    return (
        <span className="border-zinc-300 p-1 px-2 bg-zinc-100 text-sm text-zinc-700 border-[0.1px] rounded-lg">{name}</span>
    )
}