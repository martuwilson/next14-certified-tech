import Link from "next/link"

type FAQCardProps = {
    label: string
    href: string
}
const FAQCard = ({ label, href }: FAQCardProps) => {
    return (
        <Link href={href} className="col-span-3">
            <div className='rounded-lg border border-gray-200 p-4 cursor-pointer'>
                <h3>
                    {label}
                </h3>
            </div>
        </Link>
    )
}

export default FAQCard