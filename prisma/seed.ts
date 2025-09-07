import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function up() {
    await prisma.user.createMany({
        data: [
            {
                name: 'Murad',
                email: 'murad123@gmail.com',
                password: 'ra66mi66n66',
                role: 'User'
            },
            {
                name: 'Ali',
                email: 'ali111@gmail.com',
                password: 'ra66mi66n66',
                role: 'Admin'
            }
        ]
    });
}

async function main() {
    try {
        console.log('Starting seed...');
        await up();
        console.log('Seed completed successfully!');
    } catch (error) {
        console.error('Error during seed:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
