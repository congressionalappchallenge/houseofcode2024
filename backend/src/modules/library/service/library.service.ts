import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllLibraryRecords(req, res) {
    try {
        // const libraryRecords = await prisma.library.findMany({});

        const libraryRecords = await prisma.$queryRaw`SELECT * FROM "public"."library"`;
        // console.log(prisma.library)
        res.json(libraryRecords);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching congressional app challenge library records');
    }
}