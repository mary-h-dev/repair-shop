
import { tickets } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod"


export const insertTicketSchema = createInsertSchema(tickets, {
    id: z.union([z.number(), z.literal("(New)")]),
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    tech: z.string().email("Invalid email address"),
   
})


export const selectTicketSchema = createSelectSchema(tickets)
export type insertTicketSchemaType = typeof insertTicketSchema._type
export type selectTicketSchemaType = typeof selectTicketSchema._type 






// import { tickets } from "@/db/schema";
// import { createInsertSchema, createSelectSchema } from "drizzle-zod";

// import { z } from "zod"

// export const insertTicketSchema = createInsertSchema(tickets, {
//     id: z.union([z.number(), z.literal("(New)")]),
//     title: (schema) => schema.title.min(1, "Title is required"),
//     description: (schema) => schema.description.min(1, "Description is required"),
//     tech: (schema) => schema.tech.email("Invalid email address"),
   
// })

// export const selectTicketSchema = createSelectSchema(tickets)

// export type insertTicketSchemaType = typeof insertTicketSchema._type

// export type selectTicketSchemaType = typeof selectTicketSchema._type 