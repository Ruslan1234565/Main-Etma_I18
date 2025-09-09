import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function up() {
    await prisma.user.createMany({
        data: [
            {
                name: "John Doe",
                email: "john.doe@example.com",
                password: "password",
                role: "user"
            },
            {
                name: "Jane Doe",
                email: "jane.doe@example.com",
                password: "password",
                role: "user"
            },
            {
                name: "Jahangir",
                email: "jeka@mail.com",
                password: "password",
                role: "user"
            }
        ],

        skipDuplicates: true
    })
}


async function main() {
    try {
        await up();
        console.log("Users seeded successfully!");
    } catch (error) {
        console.error("Error seeding users:", error);
    }
}

main().catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});