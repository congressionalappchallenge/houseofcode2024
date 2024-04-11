import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllLibraryRecords(req: any, res: any) {
    try {
        const libraryRecords = await prisma.library.findMany({});
        // const libraryRecords = await prisma.$queryRaw`SELECT * FROM "public"."library"`;

        res.json(libraryRecords);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching congressional app challenge library records');
    }
}

export async function updateLibraryRecord(req: any, res: any) {
    try {

        const libraryRecords: any = await prisma.$queryRaw`SELECT * FROM "public"."library" WHERE congressional_district = ${req.params.id}`;
        
        
        const libraryRecord = libraryRecords[0];
        
        var newChallengers = [req.body.name];

        if (libraryRecord.challengers && libraryRecord.challengers.length > 0) {
            newChallengers = [...libraryRecord.challengers, req.body.name];
        }

        await prisma.$queryRaw`
            UPDATE "public"."library"
            SET "challengers" = ${JSON.stringify(newChallengers)}::jsonb, "description" = ${req.body.description}
            WHERE "congressional_district" = ${req.params.id}
          `;

        const confirmation = await prisma.$queryRaw`SELECT * FROM "public"."library" WHERE congressional_district = ${req.params.id}`
        
        res.json(confirmation);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating congressional app challenge library record');
    }
}