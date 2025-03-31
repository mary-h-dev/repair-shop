import TicketSearch from "@/app/(rs)/tickets/TicketSearch"
import { getOpenTickets } from "@/lib/queries/getOpenTickets"
import { getTicketSearchResults } from "@/lib/queries/getTicketSearchResults"
import TicketTable from "@/app/(rs)/tickets/TicketTable"




export const metadata = {
    title: "Ticket Search",
}

export default async function Tickets({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const { searchText } = await searchParams


    if (!searchText) {
        const results = await getOpenTickets()
        console.log(results)
        return (
            <>
                <TicketSearch />
                {results.length ? <TicketTable data={results} /> : <p className="mt-4">No open tickets found</p>}
                {/* <p>{JSON.stringify(results)}</p> */}
                
            </>
        )
    }



    const results = await getTicketSearchResults(searchText)

    return (
        <>
            <TicketSearch />
            {/* <p>{JSON.stringify(results)}</p> */}
            {results.length ? <TicketTable data={results} /> : <p className="mt-4">No results found</p>}
        </>
    )
}